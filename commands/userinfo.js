const Discord = require('discord.js')
const userBadges = require('../models/badges')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Userinfo extends Command {
    constructor(...args) {
        super(...args, {
            name: 'userinfo',
            description: 'Show info about user',
            args: [
                {
                    name: "user",
                    type: ArgumentType.USER,
                    description: "User",
                    required: false
                }
            ]
        })
    }
    async run({client, respond, edit, args, guild, member}) {
        if (args[0]) {
            const userid = args[0].replace(/<@!/g, "").replace(/>/g, "")
            const user = guild.members.cache.get(userid)
            const badgesData = await userBadges.findOne({ userID: userid})
            const userinfo = new Discord.MessageEmbed
            userinfo.setAuthor(`${user.user.username}`, user.user.displayAvatarURL())
            userinfo.setColor('RANDOM')
            userinfo.setDescription(`**➥ General Info**\n\n**🧾 Username**: ${user.user.username}\n**🔢 User Tag**: ${user.user.discriminator}\n**✅ Created Account**: ${new Date(user.user.createdTimestamp).toLocaleDateString()}\n\n**➥ Other Info**\n\n**👋 Joined Server**: ${new Date(user.joinedTimestamp).toLocaleDateString()}\n**🎭 Nickname**: ${user.nickname || '<:CatieError:839151745665204234> None'}\n**<:Catie:839492019452641290> Badges**: ${badgesData.badges}`)
            respond({embeds: [userinfo]})
        } else {
            const user = member
            const badgesData = await userBadges.findOne({ userID: user.id})
            const userinfo = new Discord.MessageEmbed
            userinfo.setAuthor(`${user.user.username}`, user.user.displayAvatarURL())
            userinfo.setColor('RANDOM')
            userinfo.setDescription(`**➥ General Info**\n\n**🧾 Username**: ${user.user.username}\n**🔢 User Tag**: ${user.user.discriminator}\n**✅ Created Account**: ${new Date(user.user.createdTimestamp).toLocaleDateString()}\n\n**➥ Other Info**\n\n**👋 Joined Server**: ${new Date(user.joinedTimestamp).toLocaleDateString()}\n**🎭 Nickname**: ${user.nickname || '<:CatieError:839151745665204234> None'}\n**<:Catie:839492019452641290> Badges**: ${badgesData.badges}`)
            respond({embeds: [userinfo]})
        }

    }
}

