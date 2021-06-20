const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
	name: 'fox',
	description: 'Show random image of fox',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command fox.`)
        axios.get('https://randomfox.ca/floof/').then((fox) => {
            const fox_msg = new Discord.MessageEmbed
            fox_msg.setTitle('🦊')
            fox_msg.setColor('RANDOM')
            fox_msg.setImage(fox.data.image)
            message.channel.send(fox_msg)
        })
	},
};