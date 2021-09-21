const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Meme extends Command {
    constructor(...args) {
        super(...args, {
            name: 'meme',
            description: 'Show random meme from reddit',
        })
    }
    async run({client, respond, edit, args}) {
        const subreddits = ["meme", "memes", "dankmeme"]
        const random = subreddits[Math.floor(Math.random() * subreddits.length)]

        const img = await randomPuppy(random)
        const meme = new Discord.MessageEmbed
        meme.setTitle(`Meme from r/${random}`)
        meme.setColor('RANDOM')
        meme.setImage(img)
        respond({embeds: [meme]})
    }
}

