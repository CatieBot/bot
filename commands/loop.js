const Discord = require('discord.js');


module.exports = {
	name: 'loop',
	description: 'Loop queue.',
	async execute(message, args, client) {
		const author = message.author.tag
        console.log(`${author} send command loop.`)
		const voiceChannel = message.member.voice.channel
		if (!voiceChannel) {
			const notinvoice = new Discord.MessageEmbed
			notinvoice.setColor('#C92D1C')
			notinvoice.setDescription('<:CatieError:839151745665204234> You are not in voice channel')
			message.channel.send(notinvoice)
		} else {
		const onoff = args[0]
		let queue = await client.distube.getQueue(message)
		if (onoff === 'song') {
			client.distube.setRepeatMode(message, parseInt(1))
			const loop_song = new Discord.MessageEmbed
			loop_song.setColor('RANDOM')
			loop_song.setDescription('<:CatieCheckmark:839151698495930388> Looping **current song**')
			message.channel.send(loop_song)
		} else if (onoff === 'queue') {
			client.distube.setRepeatMode(message, parseInt(2))
			const loop_queue = new Discord.MessageEmbed
			loop_queue.setColor('RANDOM')
			loop_queue.setDescription('<:CatieCheckmark:839151698495930388> Looping **the queue**')
			message.channel.send(loop_queue)
		} else if (onoff === 'disable') {
			client.distube.setRepeatMode(message, parseInt(0))
			const loop_disable = new Discord.MessageEmbed
			loop_disable.setColor('RANDOM')
			loop_disable.setDescription('<:CatieCheckmark:839151698495930388> Loop was **disabled**')
			message.channel.send(loop_disable)
		} else {
			const loop = new Discord.MessageEmbed
			loop.setColor('#C92D1C')
			loop.setDescription('<:CatieError:839151745665204234> You choose type **song/queue/disable**')
			message.channel.send(loop)
		}

		}
		

	},
};