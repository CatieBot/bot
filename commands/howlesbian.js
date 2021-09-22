const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Howlesbian extends Command {
    constructor(...args) {
        super(...args, {
            name: 'howlesbian',
            description: 'Show how many percent you are lesbian',
            
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
    async run({client, respond, edit, args, member, guild}) {
        const me = member
        const target = args[0]
        if (!target) {
            const rng = Math.floor(Math.random() * 101)

            const hg = new Discord.MessageEmbed
            hg.setColor('RANDOM')
            hg.setDescription(`${me.user.username} is ${rng}% lesbian :rainbow_flag:`)
            respond({embeds: [hg]})
        } else {
            const targetMember = guild.members.cache.get(target)
            const rng = Math.floor(Math.random() * 101)

            const hg = new Discord.MessageEmbed
            hg.setColor('RANDOM')
            hg.setDescription(`${targetMember.user.username} is ${rng}% lesbian :rainbow_flag:`)
            respond({embeds: [hg]})
        }
    }
}

