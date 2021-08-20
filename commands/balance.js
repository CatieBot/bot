// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const economyProfile = require('../models/economyProfile')

module.exports = class Balance extends Command {
    constructor(...args) {
        super(...args, {
            name: 'balance',
            description: 'Show balance of user',
            args: [
                {
                    name: "user",
                    type: ArgumentType.USER,
                    description: "Balance of user",
                    required: false
                }
            ]
        })
    }
    async run({client, respond, edit, member}, args) {
        const user = member
        const target = args[0]
        if (!target) {
            const economyData = await economyProfile.findOne({ userID: user.id})
            const bal = new Discord.MessageEmbed
            bal.setColor('RANDOM')
            bal.addFields(
                { name: 'Walllet balance', value: `${economyData.coins}`, inline: true },
                { name: 'Bank balance', value: `${economyData.bank}`, inline: true },
            )
            respond({ embeds: [bal]})
            } else {
            const economyData2 = await economyProfile.findOne({ userID: target.id })
            const bal2 = new Discord.MessageEmbed
            bal2.setTitle(`${target.username}`)
            bal2.setColor('RANDOM')
            bal2.addFields(
                { name: 'Walllet balance', value: `${economyData2.coins}`, inline: true },
                { name: 'Bank balance', value: `${economyData2.bank}`, inline: true },
            )
            respond({ embeds: [bal2]})
        }
    }
}
        
    