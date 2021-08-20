const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const noargs = new Discord.MessageEmbed
noargs.setColor('#C92D1C')
noargs.setDescription('<:CatieError:839151745665204234> You need define slow mode time in seconds.')

module.exports = class Slow extends Command {
    constructor(...args) {
        super(...args, {
            name: 'slow',
            description: 'Slow a chat',
            userRequiredPermissions: "MANAGE_MESSAGES",
            clientRequiredPermissions: "MANAGE_MESSAGES",
            args: [
                {
                    name: "time",
                    type: ArgumentType.INTEGER,
                    description: "Slowmode time (in seconds)",
                    prompt: noargs,
                    required: true
                }
            ]
        })
    }

    async run({client, respond, edit, channel}, args) {
    const time = args[0]
    if (time) {
        if (time === 0) {
            const turnoff = new Discord.MessageEmbed
            turnoff.setColor('#C92D1C')
            turnoff.setDescription('<:CatieCheckmark:839151698495930388> Slow mode was turned off.')
            respond({embeds: [turnoff]})
        } else if (time > 21600) {
                const notvalid = new Discord.MessageEmbed
                notvalid.setColor('#C92D1C')
                notvalid.setDescription('<:CatieError:839151745665204234> You need define number which is less than 21600')
                respond({embeds: [notvalid]})
             } else {
                channel.setRateLimitPerUser(`${time}`)
                const embed = new Discord.MessageEmbed
                embed.setColor('RANDOM')
                embed.setDescription(`<:CatieCheckmark:839151698495930388> Slow mode was set on **${time} seconds**`)
                respond({embeds: [embed]})
             }
            }
    }
}


            


