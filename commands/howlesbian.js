const Discord = require('discord.js')

module.exports = {
	name: 'howlesbian',
	description: '',
	execute(message, args) {
                const author = message.author.tag
                console.log(`${author} send command howlesbian.`)
        const member = message.mentions.users.first() || message.author

        const rng = Math.floor(Math.random() * 101)

        const hg = new Discord.MessageEmbed
        hg.setColor('RANDOM')
        hg.setDescription(`${member.username} is ${rng}% lesbian :rainbow_flag:`)
        message.channel.send(hg)
	},
};