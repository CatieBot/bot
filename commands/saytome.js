const Discord = require('discord.js')

module.exports = {
	name: 'saytome',
	description: 'Say some to me!',
	execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command saytome.`)
        const something = args.slice(0).join(" ")
        if (!something) {
            const noargs = new Discord.MessageEmbed
            noargs.setColor('#c92d1c')
            noargs.setDescription('<:CatieError:839151745665204234> You need define something.')
            message.channel.send(noargs)
        } else {
        const answers = ["Oh, thank you", "I'm sad, why did you tell me that?", "Hmm...", "Yay!", "Meow!", "That's amazing!", "Ok.", "Super!"]
        const answer = answers[Math.floor(Math.random()*answers.length)]
        message.channel.send(answer)
        }
        
	},
};