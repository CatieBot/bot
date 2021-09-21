const Discord = require('discord.js')
const Levels = require('discord-xp')
const canvacord = require('canvacord')
const serverSettings = require('../models/serverSettings')
const { Command, ArgumentType } = require('gcommands')
Levels.setURL("mongodb+srv://daneeskripter:danee08@cluster0.2vmc2.mongodb.net/Data")


module.exports = class Rank extends Command {
    constructor(...args) {
        super(...args, {
            name: 'rank',
            description: 'Show your level and rank',
            args: [
                {
                    name: "user",
                    type: ArgumentType.USER,
                    description: "Show user level and rank",
                    required: false
                }
            ]
        })
    }
    async run({client, respond, edit, args, member, guild}) {
        const serverData = await serverSettings.findOne({serverID: guild.id})
        if (serverData.levels === 'off') {
            const disabled = new Discord.MessageEmbed
            disabled.setColor('#C92D1C')
            disabled.setDescription('<:CatieError:839151745665204234> Level system is disabled')
            respond({embeds: [disabled]})
        } else if (serverData.levels === 'on') {
        const targetuser = args[0]
        const target = guild.members.cache.get(targetuser)
        if (!targetuser) {
        const author = member
        const user = await Levels.fetch(author.id, guild.id, true);
        if(user.level === '0') {
            respond('<:CatieError:839051550835212298> You dont have any level.')
        } else {
            const neededXp = Levels.xpFor(parseInt(user.level) + 1)
            const rank = new canvacord.Rank()
            .setAvatar(author.user.displayAvatarURL({dynamic: false, format: 'png'} ))
            .setCurrentXP(user.xp)
            .setLevel(user.level)
            .setRank(user.position)
            .setRequiredXP(neededXp)
            .setStatus(author.presence.status)
            .setProgressBar('#ffffff', "COLOR")
            .setUsername(author.user.username)
            .setDiscriminator(author.user.discriminator)
            rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, 'rank.png')
                respond(attachment)
            })
        }
        
        } else {
        const user2 = await Levels.fetch(target.id, guild.id, true);
        if(user2.level === '0') {
            respond(`<:CatieError:839051550835212298> ${target} dont have any level.`)
        } else {
        const neededXp = Levels.xpFor(parseInt(user2.level) + 1)
        const rank2 = new canvacord.Rank()
        .setAvatar(target.user.displayAvatarURL({dynamic: false, format: 'png'} ))
        .setCurrentXP(user2.xp)
        .setLevel(user2.level)
        .setRank(user2.position)
        .setRequiredXP(neededXp)
        .setStatus(target.presence.status)
        .setProgressBar('#ffffff', "COLOR")
        .setUsername(target.user.username)
        .setDiscriminator(target.user.discriminator)
        rank2.build()
        .then(data => {
            const attachment2 = new Discord.MessageAttachment(data, 'rank.png')
            respond(attachment2)
        })
        }
    }
        }
    }
}

