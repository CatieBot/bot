const Discord = require('discord.js')
const Levels = require('discord-xp')
const canvacord = require('canvacord')
const serverSettings = require('../models/serverSettings')

Levels.setURL("mongodb+srv://daneeskripter:danee08@cluster0.2vmc2.mongodb.net/Data")

module.exports = {
	name: 'rank',
	description: 'Show user rank.',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command rank.`)
        const serverData = await serverSettings.findOne({serverID: message.guild.id})
        if (serverData.levels === 'off') {
            const disabled = new Discord.MessageEmbed
            disabled.setColor('#C92D1C')
            disabled.setDescription('<:CatieError:839151745665204234>Level system is disabled')
            message.channel.send(disabled)
        } else if (serverData.levels === 'on') {
            const target = message.mentions.users.first()
        if (!target) {
        const author = message.author
        const user = await Levels.fetch(author.id, message.guild.id, true);
        if(user.level === '0') {
            message.channel.send('<:CatieError:839051550835212298> You dont have any level.')
        } else {
            const neededXp = Levels.xpFor(parseInt(user.level) + 1)
            const rank = new canvacord.Rank()
            .setAvatar(author.displayAvatarURL({dynamic: false, format: 'png'} ))
            .setCurrentXP(user.xp)
            .setLevel(user.level)
            .setRank(user.position)
            .setRequiredXP(neededXp)
            .setStatus(author.presence.status)
            .setProgressBar('#ffffff', "COLOR")
            .setUsername(author.username)
            .setDiscriminator(author.discriminator)
            rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, 'rank.png')
                message.channel.send(attachment)
            })
        }
        
        } else {
        const user2 = await Levels.fetch(target, message.guild.id, true);
        if(user2.level === '0') {
            message.channel.send(`<:CatieError:839051550835212298> ${target} dont have any level.`)
        } else {
            const neededXp = Levels.xpFor(parseInt(user2.level) + 1)
        const rank2 = new canvacord.Rank()
        .setAvatar(target.displayAvatarURL({dynamic: false, format: 'png'} ))
        .setCurrentXP(user2.xp)
        .setLevel(user2.level)
        .setRank(user2.position)
        .setRequiredXP(neededXp)
        .setStatus(target.presence.status)
        .setProgressBar('#ffffff', "COLOR")
        .setUsername(target.username)
        .setDiscriminator(target.discriminator)
        rank2.build()
        .then(data => {
            const attachment2 = new Discord.MessageAttachment(data, 'rank.png')
            message.channel.send(attachment2)
        })
        }
    }
        }
	},
};