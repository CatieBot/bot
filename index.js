const { GCommandsClient, GCommands, Color } = require("gcommands")
const config = require('./config.json')
const DisTube = require('distube')
const mongoose = require('mongoose')

// GCOMMANDS
const client = new GCommandsClient({
    cmdDir: "commands/",
    eventDir: "events/",
    language: "english", //english, spanish, portuguese, russian, german, czech, turkish
    ownLanguageFile: require("./message.json"),
    unkownCommandMessage: false,
    commands: {
        slash: "both", //true = slash only, false = only normal, both = slash and normal
        context: "false", // https://gcommands.js.org/docs/#/docs/main/dev/typedef/GCommandsOptionsCommandsContext
        prefix: "c!", // for normal commands
      },
    database: "mongodb://daneeskripter:danee08@cluster0-shard-00-00.2vmc2.mongodb.net:27017,cluster0-shard-00-01.2vmc2.mongodb.net:27017,cluster0-shard-00-02.2vmc2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-14mcg8-shard-0&authSource=admin&retryWrites=true&w=majority",
    intents: ["GUILDS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES", "GUILD_VOICE_STATES", "GUILD_WEBHOOKS"]
})
client.on("debug", console.log)
client.on("log", (log)=>{console.log(log)})

client.on("ready", async () => {
    console.log('The Catie is ready!');
    client.user.setPresence({
        activity: {
            name: ('commands'),
            type: 2,
        },
    })



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

client.login(config.token)

