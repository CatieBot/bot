const Discord = require('discord.js')

module.exports = {
	name: 'serverinfo',
	description: 'Show info about server.',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command serverinfo.`)
        // INFO
        const serverName = message.guild.name
        const serverIcon = message.guild.iconURL()
        const serverOwner = message.guild.owner.user.tag
        const serverID = message.guild.id
        const memberCount = message.guild.memberCount
        const serverEmojis = message.guild.emojis.cache.size
        const serverRoles = message.guild.roles.cache.size
        const serverCreated = new Date(message.guild.createdTimestamp).toLocaleDateString()
        const serverRegion = message.guild.region
        // EMBED
        const serverinfo = new Discord.MessageEmbed
        serverinfo.setAuthor(serverName, serverIcon)
        serverinfo.setColor('RANDOM')
        serverinfo.setDescription(`**➥ General Info**\n\n**🆔 Server ID**: ${serverID}\n**🔨 Server Owner**: ${serverOwner}\n**✅ Server Created**: ${serverCreated}\n**🌍 Region**: ${serverRegion}\n\n**➥ Stats**\n\n**👋 Members**: ${memberCount}\n**✨ Roles**: ${serverRoles}\n**😎 Emojis**: ${serverEmojis}`)
        message.channel.send(serverinfo)
    },
};