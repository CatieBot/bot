// DEVELOPED BY DANEESKRIPTER
const Discord = require("discord.js")
const ms = require('ms')
const guild = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Ban user',
    execute(message, args) {
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            const botnoperm = new Discord.MessageEmbed
            botnoperm.setTitle(`<:CatieError:839151745665204234> I don't have permissions!`)
            botnoperm.setColor('#C92D1C')
            botnoperm.setDescription('I need permission **Ban Members** to use this command.')
            message.channel.send(botnoperm)
        } else {
            if (message.member.hasPermission('BAN_MEMBERS')) {
                const author = message.author.tag
                console.log(`${author} send command ban.`)
                const target = message.mentions.users.first()
                const reasonmsg = args.slice(1).join(" ")
                if (target) {
                    if (reasonmsg) {
                        const targetMember = message.guild.members.cache.get(target.id)
                        targetMember.ban({reason: `${reasonmsg}`})
                        const embed3 = new Discord.MessageEmbed()
                        embed3.setColor('RANDOM')
                        embed3.setDescription(`<:CatieCheckmark:839151698495930388> ${targetMember} has been banned for **${reasonmsg}**`)
                        message.channel.send(embed3)
                    } else {
                    const embed4 = new Discord.MessageEmbed()
                    embed4.setColor('#C92D1C')
                    embed4.setDescription('<:CatieError:839151745665204234> You need type reason.')
                    message.channel.send(embed4)
                    }
                } else {
                    const embed2 = new Discord.MessageEmbed()
                    embed2.setColor('#C92D1C')
                    embed2.setDescription('<:CatieError:839151745665204234> You need mention the member you want to ban.')
                    message.channel.send(embed2)
                }
            } else {
                const embed = new Discord.MessageEmbed();
                embed.setTitle('<:CatieError:839151745665204234> No permission!')
                embed.setColor('#C92D1C')
                embed.setDescription('You need permission **Ban Members** to use this command.')
    
                message.channel.send(embed)
        }
    
        }
        
    }

};