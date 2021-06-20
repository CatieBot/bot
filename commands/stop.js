const Discord = require('discord.js')


module.exports = {
	name: 'stop',
	description: 'Stop song.',
	async execute(message, args, client) {
		const author = message.author.tag
        console.log(`${author} send command stop.`)
		const voiceChannel = message.member.voice.channel
		if (!voiceChannel) {
			const notinvoice = new Discord.MessageEmbed
			notinvoice.setColor('#C92D1C')
			notinvoice.setDescription('<:CatieError:839051550835212298> You are not in voice channel')
			message.channel.send(notinvoice)
		} else {
		let queue = await client.distube.getQueue(message)

		if (queue) {
			client.distube.stop(message)
			const stop = new Discord.MessageEmbed
			stop.setColor('RANDOM')
			stop.setDescription('⏹ Stopped')
			message.channel.send(stop)
		} else if (!queue) {
			const noqueue = new Discord.MessageEmbed
			noqueue.setColor('#C92D1C')
			noqueue.setDescription('<:CatieError:839051550835212298> Nothing is in queue')
			message.channel.send(noqueue)
		}
		}
		

	},
};