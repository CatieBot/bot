const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
	name: 'dog',
	description: 'Show random image of dog',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command dog.`)
        axios.get('https://dog.ceo/api/breeds/image/random').then((dog) => {
            const dog_msg = new Discord.MessageEmbed
            dog_msg.setTitle('🐶')
            dog_msg.setColor('RANDOM')
            dog_msg.setImage(dog.data.message)
            dog_msg.setFooter('but cats are better!')
            message.channel.send(dog_msg)
        })
	},
};