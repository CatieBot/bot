const Discord = require('discord.js')
const axios = require('axios')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Fox extends Command {
    constructor(...args) {
        super(...args, {
            name: 'fox',
            description: 'Show random image of fox',
            
        })
    }
    async run({client, respond, edit, args}) {
        axios.get('https://randomfox.ca/floof/').then((fox) => {
            const fox_msg = new Discord.MessageEmbed
            fox_msg.setTitle('🦊')
            fox_msg.setColor('RANDOM')
            fox_msg.setImage(fox.data.image)
            respond({embeds: [fox_msg]})
        })
    }
}