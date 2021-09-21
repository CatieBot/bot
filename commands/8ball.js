// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class ball extends Command {
    constructor(...args) {
        super(...args, {
            name: '8ball',
            description: 'Ask a question',
            guildOnly: "843109505876230144",
            args: [
                {
                    name: "question",
                    type: ArgumentType.STRING,
                    description: "Question",
                    prompt: "Ask a question",
                    required: true
                }
            ]
        })
    }

    async run({client, respond, edit, args}) {
        const replies = [`Yes`, "No", "Hmmm... Yes!", "Hmmm... No!", "I don't know.", "Maybe", "Never"]
        const result = replies[Math.floor(Math.random()*replies.length)]
        const answer = new Discord.MessageEmbed
        answer.setTitle('🎱 8ball')
        answer.setColor('RANDOM')
        answer.setDescription(`Question: **${args[0]}**\nAnswer: **${result}**`)
        respond({ embeds: [answer]})
        }
    }