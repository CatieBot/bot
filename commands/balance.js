// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')

module.exports = {
	name: 'balance',
	description: 'Show user balance.',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command balance.`)
        const user = message.author
        const target = message.mentions.users.first()
        if (!target) {
        const economyData = await economyProfile.findOne({ userID: user.id})
        const bal = new Discord.MessageEmbed
        bal.setColor('RANDOM')
        bal.addFields(
            { name: 'Walllet balance', value: `${economyData.coins}`, inline: true },
            { name: 'Bank balance', value: `${economyData.bank}`, inline: true },
        )
        message.channel.send(bal)
        } else {
        const economyData2 = await economyProfile.findOne({ userID: target.id })
        const bal2 = new Discord.MessageEmbed
        bal2.setTitle(`${target.username}`)
        bal2.setColor('RANDOM')
        bal2.addFields(
            { name: 'Walllet balance', value: `${economyData2.coins}`, inline: true },
            { name: 'Bank balance', value: `${economyData2.bank}`, inline: true },
        )
        message.channel.send(bal2)
        }
        
	},
};