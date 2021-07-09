const Discord = require('discord.js')

module.exports = {
    name: 'slow',
    description: 'Slow chat',
    execute(message, args) {
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
            const botnoperm = new Discord.MessageEmbed
            botnoperm.setTitle(`<:CatieError:839151745665204234> I don't have permissions!`)
            botnoperm.setColor('#C92D1C')
            botnoperm.setDescription('I need permission **Manage Messages** to use this command.')
            message.channel.send(botnoperm)
        } else {
            if (message.member.hasPermission('MANAGE_MESSAGES')) {
                const author = message.author.tag
                console.log(`${author} send command slow.`)
                const time = args[0]
                if (time) {
            if (Number.isNaN(+time)) {
            const nonumber = new Discord.MessageEmbed
            nonumber.setColor('#C92D1C')
            nonumber.setDescription('<:CatieError:839151745665204234> You need define number.')
            message.channel.send(nonumber)
                 } else {
                     if (time > 21600) {
                        const notvalid = new Discord.MessageEmbed
                        notvalid.setColor('#C92D1C')
                        notvalid.setDescription('<:CatieError:839151745665204234> You need define number which is less than 21600')
                        message.channel.send(notvalid)
                     } else {
                        message.channel.setRateLimitPerUser(`${time}`)
                        const embed = new Discord.MessageEmbed
                        embed.setColor('RANDOM')
                        embed.setDescription(`<:CatieCheckmark:839151698495930388> Slow mode was set on **${time} seconds**`)
                        message.channel.send(embed)
                     }
                }
                } else {
                    const noargs = new Discord.MessageEmbed
                    noargs.setColor('#C92D1C')
                    noargs.setDescription('<:CatieError:839151745665204234> You need define slow mode time in seconds.')
                    message.channel.send(noargs)
                }
            } else {
                const noperm = new Discord.MessageEmbed
                noperm.setTitle('No permission!')
                noperm.setColor('#C92D1C')
                noperm.setDescription('<:CatieError:839151745665204234> You need permission **Manage Messages** to use this command.')
                message.channel.send(noperm)
            }
        
        }
    }}
