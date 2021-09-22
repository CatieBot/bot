const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Howgay extends Command {
    constructor(...args) {
        super(...args, {
            name: 'howgay',
            description: 'Show how many percent you are gay',
            
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
    async run({client, respond, edit, guild, member, args}) {
        const me = member
        const target = args[0]
        if (!target) {
            const rng = Math.floor(Math.random() * 101)

            const hg = new Discord.MessageEmbed
            hg.setColor('RANDOM')
            hg.setDescription(`${me.user.username} is ${rng}% gay :rainbow_flag:`)
            respond({embeds: [hg]})
        } else {
            const rng = Math.floor(Math.random() * 101)
            const targetMember = guild.members.cache.get(target)

            const hg = new Discord.MessageEmbed
            hg.setColor('RANDOM')
            hg.setDescription(`${targetMember.user.username} is ${rng}% gay :rainbow_flag:`)
            respond({embeds: [hg]})
        }


    }
}

