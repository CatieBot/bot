const { GCommandsClient, GCommands, Color } = require("gcommands")
const config = require('./config.json')
const mongoose = require('mongoose')
const { join } = require('path');

// GCOMMANDS
const client = new GCommandsClient({
    cmdDir: join(__dirname, 'commands'),
    eventDir: join(__dirname, 'events'),
    language: "english", //english, spanish, portuguese, russian, german, czech, turkish
    ownLanguageFile: require("./message.json"),
    unkownCommandMessage: false,
    commands: {
        slash: "both", //true = slash only, false = only normal, both = slash and normal
        context: "false", // https://gcommands.js.org/docs/#/docs/main/dev/typedef/GCommandsOptionsCommandsContext
        prefix: "c!", // for normal commands
      },
    database: "mongodb://daneeskripter:danee08@cluster0-shard-00-00.2vmc2.mongodb.net:27017,cluster0-shard-00-01.2vmc2.mongodb.net:27017,cluster0-shard-00-02.2vmc2.mongodb.net:27017/MyFirstDatabase?ssl=true&replicaSet=atlas-14mcg8-shard-0&authSource=admin&retryWrites=true&w=majority",
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

// MUSIC
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);


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
const { GiveawaysManager } = require('discord-giveaways')
const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});

client.giveawaysManager = manager

client.login(config.token)

