// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')

module.exports = {
	name: 'beg',
	description: 'Beg for coins',
    async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command beg.`)
        const economyData = await economyProfile.findOne({ userID: message.author.id })
        const rn = Math.floor(Math.random() * 500) + 1
        const response = await economyProfile.findOneAndUpdate({
             userID: message.author.id,
        }, 
        {
            $inc : {
                coins: rn,
            }
        })
        const begmsg = new Discord.MessageEmbed
        begmsg.setColor('RANDOM')
        begmsg.setDescription(`${message.author.username}, you begged and received **${rn}**`)
        message.channel.send(begmsg)
    

	},
};