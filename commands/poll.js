const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const noargs = new Discord.MessageEmbed
noargs.setColor('#C92D1C')
noargs.setDescription('<:CatieError:839151745665204234> You need define some question')

module.exports = class Poll extends Command {
    constructor(...args) {
        super(...args, {
            name: 'poll',
            description: 'Create a poll',
            
            args: [
                {
                    name: "question",
                    type: ArgumentType.STRING,
                    description: "Question for poll",
                    prompt: noargs,
                    required: true
                }
            ]
        })
    }
    async run({client, respond, edit, member, channel, args}) {
        const question = args[0]
        const user = member
        if (question.includes('pancake')) {
            const reply = new Discord.MessageEmbed
            reply.setColor('RANDOM')
            reply.setDescription('✅ Poll created!')
            respond({embeds: [reply], ephemeral: true})
            const questionmsg2 = new Discord.MessageEmbed
            questionmsg2.setColor('RANDOM')
            questionmsg2.setTitle(`${question}`)
            questionmsg2.setFooter(`Poll by ${user.user.tag}`)
            channel.send({embeds: [questionmsg2]}).then(messageReaction2 => {
                messageReaction2.react('✅')
                messageReaction2.react('❌')
                messageReaction2.react('😋')
            })
        } else {
            const reply = new Discord.MessageEmbed
            reply.setColor('RANDOM')
            reply.setDescription('✅ Poll created!')
            respond({embeds: [reply], ephemeral: true})
            const questionmsg = new Discord.MessageEmbed
            questionmsg.setColor('RANDOM')
            questionmsg.setTitle(`${question}`)
            questionmsg.setFooter(`Poll by ${user.user.tag}`)
            channel.send({embeds: [questionmsg]}).then(messageReaction => {
                messageReaction.react('✅')
                messageReaction.react('❌')
            })
        }
    }
}
