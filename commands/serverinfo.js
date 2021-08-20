const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Serverinfo extends Command {
    constructor(...args) {
        super(...args, {
            name: 'serverinfo',
            description: 'Show info about server',
        })
    }
    async run({client, respond, edit, guild}, args) {
        console.log(guild.owner)
                // INFO
                const serverName = guild.name
                const serverIcon = guild.iconURL()
                const serverOwner = guild.ownerId
                const serverOwnerMember = guild.members.cache.get(serverOwner)
                const serverID = guild.id
                const memberCount = guild.memberCount
                const serverEmojis = guild.emojis.cache.size
                const serverRoles = guild.roles.cache.size
                const serverCreated = new Date(guild.createdTimestamp).toLocaleDateString()
                // EMBED
                const serverinfo = new Discord.MessageEmbed
                serverinfo.setAuthor(serverName, serverIcon)
                serverinfo.setColor('RANDOM')
                serverinfo.setDescription(`**➥ General Info**\n\n**🆔 Server ID**: ${serverID}\n**🔨 Server Owner**: ${serverOwnerMember.user.tag}\n**✅ Server Created**: ${serverCreated}\n\n**➥ Stats**\n\n**👋 Members**: ${memberCount}\n**✨ Roles**: ${serverRoles}\n**😎 Emojis**: ${serverEmojis}`)
                respond({embeds: [serverinfo]})
    }
}

