const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const DisTube = require('distube')
const mongoose = require('mongoose')

// MUSIC

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, leaveOnEmpty: false });

client.distube
    .on("playSong", (message, queue, song) => {
            const playing = new Discord.MessageEmbed
            playing.setColor('RANDOM')
            playing.setDescription(`▶ Playing: **${song.name}**`)
            message.channel.send(playing)
    })
    .on("addSong", (message, queue, song) => {
            const addsong = new Discord.MessageEmbed
            addsong.setColor('RANDOM')
            addsong.setDescription(`▶ Added **${song.name}** to the queue`)
            message.channel.send(addsong)
    })
    .on("initQueue", queue => {
            queue.autoplay = false;
    })
    .on("finish", message => {
        const MemberVoiceChannel = message.member.voice.channel
        const nosong2 = new Discord.MessageEmbed
        nosong2.setColor('RANDOM')
        nosong2.setDescription("No songs in queue. I'm leaving voice channel.")
        message.channel.send(nosong2)
        MemberVoiceChannel.leave()
        })

// DATABASE

mongoose.connect(config.mongodb_srv, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
}).then(() =>[
        console.log('Connected to the database!')
]).catch((err) =>{
        console.log('Failed connect to the database!')
})


// GIVEAWAYS
const { Database } = require('quickmongo');
const db = new Database(config.mongodb_srv);
db.once('ready', async () => {
    if ((await db.get('giveaways')) === null) await db.set('giveaways', []);
});

const { GiveawaysManager } = require('discord-giveaways');
class GiveawayManagerWithOwnDatabase extends GiveawaysManager {
    async getAllGiveaways() {
        return await db.get('giveaways');
    }

    async saveGiveaway(messageID, giveawayData) {
        await db.push('giveaways', giveawayData);
        return true;
    }

    async editGiveaway(messageID, giveawayData) {
        const giveaways = await db.get('giveaways');
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        newGiveawaysArray.push(giveawayData);
        await db.set('giveaways', newGiveawaysArray);
        return true;
    }

    async deleteGiveaway(messageID) {
        const data = await db.get('giveaways');
        const newGiveawaysArray = data.filter((giveaway) => giveaway.messageID !== messageID);
        await db.set('giveaways', newGiveawaysArray);
        return true;
    }
}

const manager = new GiveawayManagerWithOwnDatabase(client, {
    storage: false, 
    updateCountdownEvery: 2000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ 'MANAGE_MESSAGES', 'ADMINISTRATOR' ],
        embedColor: 'RANDOM',
        reaction: '🎉'
    }
})
client.giveawaysManager = manager



client.once('ready', () => {
    console.log('The Catie is ready!');
    client.user.setPresence({
        activity: {
            name: ('commands'),
            type: 2,
        },
    })
});

const fs = require('fs');
const { token } = require('./config.json');
const { collection } = require('./models/serverSettings')
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('message', async message => {
        const serverSettings = require('./models/serverSettings')
        const serverData = await serverSettings.findOne({ serverID: message.guild.id})
        const prefix = serverData.prefix
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
	}
	// other commands...
        
});






const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(config.token)