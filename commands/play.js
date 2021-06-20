const Discord = require('discord.js')


module.exports = {
	name: 'play',
	description: 'Play song from YT.',
	execute(message, args, client) {
		const author = message.author.tag
        console.log(`${author} send command play.`)
		const voiceChannel = message.member.voice.channel
		if (!voiceChannel) {
			const notinvoice = new Discord.MessageEmbed
			notinvoice.setColor('#C92D1C')
			notinvoice.setDescription('<:CatieError:839051550835212298> You are not in voice channel')
			message.channel.send(notinvoice)
		} else {
		const song = args.slice(0).join(" ")
		if (!song) {
			const noargs = new Discord.MessageEmbed
			noargs.setColor('#C92D1C')
			noargs.setDescription('<:CatieError:839051550835212298> You need type URL or name of song.')
			message.channel.send(noargs)
		} else {
			client.distube.play(message, song)
		}
		}
	},
};