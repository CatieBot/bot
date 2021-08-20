// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Beg extends Command {
    constructor(...args) {
        super(...args, {
            name: 'beg',
            description: 'Beg for coins',
        })
    }
    async run({client, respond, edit, member}, args) {
        const rn = Math.floor(Math.random() * 500) + 1
        const response = await economyProfile.findOneAndUpdate({
             userID: member.id,
        }, 
        {
            $inc : {
                coins: rn,
            }
        })
        const begmsg = new Discord.MessageEmbed
        begmsg.setColor('RANDOM')
        begmsg.setDescription(`${member.user.username}, you begged and received **${rn}**`)
        respond({ embeds: [begmsg]})
    }
}