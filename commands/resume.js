const Discord = require('discord.js')

module.exports = {
	name: 'resume',
	description: 'Resume the song',
	async execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command resume.`)
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
			const notinvoice = new Discord.MessageEmbed
			notinvoice.setColor('#C92D1C')
			notinvoice.setDescription('<:CatieError:839151745665204234> You are not in voice channel')
			message.channel.send(notinvoice)
		} else {
            let queue = await client.distube.getQueue(message)
            if (!queue) {
            const noqueue = new Discord.MessageEmbed
			noqueue.setColor('#C92D1C')
			noqueue.setDescription('<:CatieError:839151745665204234> Nothing is in queue')
			message.channel.send(noqueue)
            } else {
                client.distube.resume(message)
                const resume = new Discord.MessageEmbed
                resume.setColor('RANDOM')
                resume.setDescription('▶ Resumed')
                message.channel.send(resume)
            }
        }
	},
};