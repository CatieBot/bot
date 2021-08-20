const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')
const { Command, ArgumentType } = require('gcommands')
const noargs = new Discord.MessageEmbed
noargs.setColor('#c92d1c')
noargs.setDescription('<:CatieError:839151745665204234> You need define amount')

module.exports = class Deposit extends Command {
    constructor(...args) {
        super(...args, {
            name: 'deposit',
            description: 'Deposit money to bank',
            args: [
                {
                    name: "amount",
                    type: ArgumentType.STRING,
                    description: "Amount of coins",
                    prompt: noargs,
                    required: true
                }
            ]
        })
    }
    async run({client, respond, edit, member}, args) {
        const economyData = await economyProfile.findOne({ userID: member.id})
        const amount = args[0]
        if (amount % 1 != 0 || amount <= 0) {
            const notnumber = new Discord.MessageEmbed
            notnumber.setColor('#c92d1c')
            notnumber.setDescription('<:CatieError:839151745665204234> Deposit amount must be a whole number')
            respond({embeds: [notnumber]})
        }
        try{
            if (amount > economyData.coins) {
                const nofunds = new Discord.MessageEmbed
                nofunds.setColor('#c92d1c')
                nofunds.setDescription(`<:CatieError:839151745665204234> You don't have that amount of coins to deposit.`)
                respond({embeds: [nofunds]})
            } else {
                await economyProfile.findOneAndUpdate({
                    userID: member.id
                }, {
                    $inc: {
                        coins: -amount,
                        bank: amount,
                    }
                })
                const deposited = new Discord.MessageEmbed
                deposited.setColor('RANDOM')
                deposited.setDescription(`<:CatieCheckmark:839151698495930388> You deposited **${amount}** coins into your bank`)
                respond({embeds: [deposited]})
            }
        }catch(err){
            console.log(err)
        }
    }
}
