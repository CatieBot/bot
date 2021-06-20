const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
	name: 'meme',
	description: 'Show meme from subreddit',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command meme.`)
        const subreddits = ["meme", "memes", "dankmeme"]
        const random = subreddits[Math.floor(Math.random() * subreddits.length)]

        const img = await randomPuppy(random)
        const meme = new Discord.MessageEmbed
        meme.setTitle(`Meme from r/${random}`)
        meme.setColor('RANDOM')
        meme.setImage(img)
        message.channel.send(meme)
	},
};