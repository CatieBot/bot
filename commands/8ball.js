// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')

module.exports = {
	name: '8ball',
	description: '',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command 8ball.`)
        const question = args.slice(0).join(" ")
        if (!question) {
            const noquestion = new Discord.MessageEmbed
            noquestion.setColor('#C92D1C')
            noquestion.setDescription('<:CatieError:839151745665204234> You need define question.')
            message.channel.send(noquestion)
        } else {
        const replies = [`Yes`, "No", "Hmmm... Yes!", "Hmmm... No!", "I don't know.", "Maybe", "Never"]
        const result = replies[Math.floor(Math.random()*replies.length)]
        const answer = new Discord.MessageEmbed
        answer.setTitle('🎱 8ball')
        answer.setColor('RANDOM')
        answer.setDescription(`Question: **${question}**\nAnswer: **${result}**`)
        message.channel.send(answer)
        }
        
	},
};