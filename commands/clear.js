const Discord = require('discord.js')
const ms = require('ms')
const { Command, ArgumentType } = require('gcommands')
const noargs = new Discord.MessageEmbed()
                        noargs.setColor('#c92d1c')
                        noargs.setDescription('<:CatieError:839151745665204234> You need define how many messages to delete.')

module.exports = class Clear extends Command {
    constructor(...args) {
        super(...args, {
            name: 'clear',
            description: 'Clear the chat',
            userRequiredPermissions: "MANAGE_MESSAGES",
            clientRequiredPermissions: "MANAGE_MESSAGES",
            
            args: [
                {
                    name: "msg-to-del",
                    type: ArgumentType.INTEGER,
                    description: "Messages to delete",
                    prompt: noargs,
                    required: true
                }
            ]
        })
    }
    
    async run({client, respond, edit, args, channel}) {
        const number = args[0]
        channel.bulkDelete(number)
        const embed = new Discord.MessageEmbed();
        embed.setColor('RANDOM')
        embed.setDescription(`<:CatieCheckmark:839151698495930388> I deleted **${number}** messages! Meow!`)
        respond({ embeds: [embed], ephemeral: true})
                    
                

    }
}
                