// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
	name: 'cat',
	description: 'Show random image of cat',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command cat.`)
        axios.get('https://api.thecatapi.com/v1/images/search').then((cat) => {
            const cat_msg = new Discord.MessageEmbed
            cat_msg.setTitle('<:Catie:839492019452641290> Meow!')
            cat_msg.setColor('RANDOM')
            cat_msg.setImage(cat.data[0].url)
            cat_msg.setFooter(`Resolution: ${cat.data[0].width}x${cat.data[0].height}`)
            message.channel.send(cat_msg)
        })
	},
};