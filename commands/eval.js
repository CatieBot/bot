const Discord =  require('discord.js')
const ownerID = '525704336869687316'
const { Command, ArgumentType } = require('gcommands')

module.exports = class Eval extends Command {
    constructor(...args) {
        super(...args, {
            name: 'eval',
            description: 'Eval',
            
            args: [
                {
                    name: "code",
                    type: ArgumentType.STRING,
                    description: "Code",
                    prompt: "",
                    required: true
                }
            ]
        })
    }
    async run({client, respond, edit, args, member}) {
        if (member.id === ownerID) {
            const result = eval(args[0])
        } else {
            const notdev = new Discord.MessageEmbed
            notdev.setColor('#c92d1c')
            notdev.setDescription('<:CatieError:839151745665204234> You are not my developer')
            respond({ embeds: [notdev]})
        }
    }
}
