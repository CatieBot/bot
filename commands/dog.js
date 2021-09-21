const Discord = require('discord.js')
const axios = require('axios')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Dog extends Command {
    constructor(...args) {
        super(...args, {
            name: 'dog',
            description: 'Show random image of dog',
        })
    }
    async run({client, respond, edit, args}) {
        axios.get('https://dog.ceo/api/breeds/image/random').then((dog) => {
            const dog_msg = new Discord.MessageEmbed
            dog_msg.setTitle('🐶')
            dog_msg.setColor('RANDOM')
            dog_msg.setImage(dog.data.message)
            dog_msg.setFooter('but cats are better!')
            respond({embeds: [dog_msg]})
        })
    }
}
