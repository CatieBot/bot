const Discord = require('discord.js')

module.exports = {
	name: 'skip',
	description: 'Skip song from queue.',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command skip.`)
        client.distube.skip(message);
        const skip = new Discord.MessageEmbed
        skip.setColor('RANDOM')
        skip.setDescription('⏩ Skipped')
        message.channel.send(skip)
	},
}