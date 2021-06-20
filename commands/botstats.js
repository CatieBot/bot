// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const serverSettings = require('../models/serverSettings')
const ms = require('ms')

module.exports = {
	name: 'botstats',
	description: 'Show bot statistics',
	async execute(message, args, client) {
        let settingsData = await serverSettings.findOne({serverID: message.guild.id})
        const msg = new Discord.MessageEmbed
        msg.setTitle('<:Catie:839492019452641290> Catie Stats')
        msg.setColor('RANDOM')
        msg.setDescription(`**➥ Stats**\n\n**💬 Servers**: ${client.guilds.cache.size}\n**👦 Users**: ${client.users.cache.size}\n\n**➥ Other Info**\n\n**❕ Server Prefix**: ${settingsData.prefix}\n**💫 Last Restart**: ${ms(client.uptime, { long: true})}\n**💨 Version**: 1.2\n**👨‍💻 Developer**: DaneeSkripter`)
        message.channel.send(msg)
	},
};