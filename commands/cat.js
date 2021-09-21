const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const axios = require('axios')

module.exports = class Cat extends Command {
    constructor(...args) {
        super(...args, {
            name: 'cat',
            description: 'Show random image of cat',
        })
    }
    async run({client, respond, edit, args}) {
    axios.get('https://api.thecatapi.com/v1/images/search').then((cat) => {
    const cat_msg = new Discord.MessageEmbed
    cat_msg.setTitle('<:Catie:839492019452641290> Meow!')
    cat_msg.setColor('RANDOM')
    cat_msg.setImage(cat.data[0].url)
    cat_msg.setFooter(`Resolution: ${cat.data[0].width}x${cat.data[0].height}`)
    respond({ embeds: [cat_msg]})
    })
    }
}