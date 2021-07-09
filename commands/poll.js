const Discord = require('discord.js')

module.exports = {
	name: 'poll',
	description: 'Create a poll',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command poll.`)
        const question = args.slice(0).join(" ")
        const user = message.author
        if (!question) {
            const noargs = new Discord.MessageEmbed
            noargs.setColor('#C92D1C')
            noargs.setDescription('<:CatieError:839151745665204234> You need define some question')
            message.channel.send(noargs)
        } else if (question.includes('pancake')) {
            const questionmsg2 = new Discord.MessageEmbed
            questionmsg2.setColor('RANDOM')
            questionmsg2.setTitle(`${question}`)
            questionmsg2.setFooter(`Poll by ${user.tag}`)
            message.channel.send(questionmsg2).then(messageReaction2 => {
                messageReaction2.react('✅')
                messageReaction2.react('❌')
                messageReaction2.react('😋')
            })
        } else {
            const questionmsg = new Discord.MessageEmbed
            questionmsg.setColor('RANDOM')
            questionmsg.setTitle(`${question}`)
            questionmsg.setFooter(`Poll by ${user.tag}`)
            message.channel.send(questionmsg).then(messageReaction => {
                messageReaction.react('✅')
                messageReaction.react('❌')
            })
        }
	},
};