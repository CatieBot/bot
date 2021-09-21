// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const serverSettings = require('../models/serverSettings')
const ms = require('ms')
const { Command, ArgumentType } = require('gcommands')

module.exports = class _ extends Command {
    constructor(...args) {
        super(...args, {
            name: 'botstats',
            description: 'Show bot stats & info',
        })
    }
    async run({client, respond, edit, args, guild}) {
        let settingsData = await serverSettings.findOne({serverID: guild.id})
        const msg = new Discord.MessageEmbed
        msg.setTitle('<:Catie:839492019452641290> Catie Stats')
        msg.setColor('RANDOM')
        msg.setDescription(`**➥ Stats**\n\n**💬 Servers**: ${client.guilds.cache.size}\n**👦 Users**: ${client.users.cache.size}\n\n**➥ Other Info**\n\n**❕ Server Prefix**: c! or **/**\n**💫 Last Restart**: ${ms(client.uptime, { long: true})}\n**💨 Version**: 1.4\n**👨‍💻 Developer**: DaneeSkripter`)
        respond({embeds: [msg]})
    }
}