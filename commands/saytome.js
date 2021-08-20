const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const noargs = new Discord.MessageEmbed
noargs.setColor('#c92d1c')
noargs.setDescription('<:CatieError:839151745665204234> You need define something.')

module.exports = class Saytome extends Command {
    constructor(...args) {
        super(...args, {
            name: 'saytome',
            description: 'Say something to me',

            args: [
                {
                    name: "something",
                    type: ArgumentType.STRING,
                    description: "Something",
                    prompt: noargs,
                    required: true
                }
            ]
        })
    }
    async run({client, respond, edit}, args) {
        const something = args[0]
        const answers = ["Oh, thank you", "I'm sad, why did you tell me that?", "Hmm...", "Yay!", "Meow!", "That's amazing!", "Ok.", "Super!"]
        const answer = answers[Math.floor(Math.random()*answers.length)]
        respond(answer)
    }
}
