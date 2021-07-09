const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')

module.exports = {
	name: 'coinflip',
	description: 'Flip a coin and win or lose',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command coinflip.`)
        const user = message.author
        const amount = args[0]
        const economyData = await economyProfile.findOne({ userID: user.id})
        if (!amount) {
            const noargs = new Discord.MessageEmbed
            noargs.setColor('#c92d1c')
            noargs.setDescription('<:CatieError:839151745665204234> You need define how much you want to bet')
            message.channel.send(noargs)
        } else {
            if (amount > economyData.coins) {
                const nofunds = new Discord.MessageEmbed
                nofunds.setColor('#c92d1c')
                nofunds.setDescription(`<:CatieError:839151745665204234> You don't have that amount of coins to bet.`)
                message.channel.send(nofunds)
            } else {
                const randomNumber = Math.floor(Math.random() * 2) + 1
                if (randomNumber === 1) {
                    await economyProfile.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: amount,
                        }
                    })

                    const win_msg = new Discord.MessageEmbed
                    win_msg.setColor('RANDOM')
                    win_msg.setDescription(`You win **${amount}** coins!`)
                    message.channel.send(win_msg)
                } else if (randomNumber === 2) {
                await economyProfile.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: -amount,
                    }
                })
                const lose_msg = new Discord.MessageEmbed
                lose_msg.setColor('RANDOM')
                lose_msg.setDescription(`You lose **${amount}** coins.`)
                message.channel.send(lose_msg)
            }
            
            }
        
        }
	},
};