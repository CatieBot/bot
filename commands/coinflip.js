const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')
const { Command, ArgumentType } = require('gcommands')
const noargs = new Discord.MessageEmbed
            noargs.setColor('#c92d1c')
            noargs.setDescription('<:CatieError:839151745665204234> You need define how much you want to bet')

module.exports = class Coinflip extends Command {
    constructor(...args) {
        super(...args, {
            name: 'coinflip',
            description: 'Flip a coin',
            args: [
                {
                    name: "amount",
                    type: ArgumentType.NUMBER,
                    description: "Amount of coins",
                    prompt: noargs,
                    required: true
                }
            ]
        })
    }
    async run({client, respond, edit, member}, args) {
        const amount = args[0]
        const economyData = await economyProfile.findOne({ userID: member.id})
            if (amount > economyData.coins) {
                const nofunds = new Discord.MessageEmbed
                nofunds.setColor('#c92d1c')
                nofunds.setDescription(`<:CatieError:839151745665204234> You don't have that amount of coins to bet.`)
                respond({embeds: [nofunds]})
            } else {
                const randomNumber = Math.floor(Math.random() * 2) + 1
                if (randomNumber === 1) {
                    await economyProfile.findOneAndUpdate({
                        userID: member.id
                    }, {
                        $inc: {
                            coins: amount,
                        }
                    })

                    const win_msg = new Discord.MessageEmbed
                    win_msg.setColor('RANDOM')
                    win_msg.setDescription(`You win **${amount}** coins!`)
                    respond({embeds: [win_msg]})
                } else if (randomNumber === 2) {
                await economyProfile.findOneAndUpdate({
                    userID: member.id
                }, {
                    $inc: {
                        coins: -amount,
                    }
                })
                const lose_msg = new Discord.MessageEmbed
                lose_msg.setColor('RANDOM')
                lose_msg.setDescription(`You lose **${amount}** coins.`)
                respond({embeds: [lose_msg]})
            }
            
            }
        
        }
    }
