const Discord = require('discord.js')
const userBadges = require('../models/badges')

module.exports = {
	name: 'userinfo',
	description: 'Show info about user',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command userinfo.`)
        const user = message.mentions.users.first() || message.author
        const member = message.guild.members.cache.get(user.id)
        const badgesData = await userBadges.findOne({ userID: user.id})
        const userinfo = new Discord.MessageEmbed
        userinfo.setAuthor(`${user.username}`, user.displayAvatarURL())
        userinfo.setColor('RANDOM')
        userinfo.setDescription(`**➥ General Info**\n\n**🧾 Username**: ${user.username}\n**🔢 User Tag**: ${user.discriminator}\n**✅ Created Account**: ${new Date(user.createdTimestamp).toLocaleDateString()}\n**🔴 User Status**: ${user.presence.status}\n**🎮 User Game**: ${user.presence.activities || '<:CatieError:839151745665204234> None'}\n\n**➥ Other Info**\n\n**👋 Joined Server**: ${new Date(member.joinedTimestamp).toLocaleDateString()}\n**🎭 Nickname**: ${member.nickname || '<:error:833391612180430859> None'}\n**<:Catie:839492019452641290> Badges**: ${badgesData.badges}\n**💬 Last Message**: ${member.lastMessage.content}`)
        message.channel.send(userinfo)
	},
};