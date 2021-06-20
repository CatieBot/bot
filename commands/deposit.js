const Discord = require('discord.js')
const economyProfile = require('../models/economyProfile')

module.exports = {
	name: 'deposit',
	description: 'Deposit coins into your bank',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command deposit.`)
        const user = message.author
        const economyData = await economyProfile.findOne({ userID: user.id})
        const amount = args[0]
        if (amount % 1 != 0 || amount <= 0) {
            const notnumber = new Discord.MessageEmbed
            notnumber.setColor('#c92d1c')
            notnumber.setDescription('<:CatieError:839151745665204234> Deposit amount must be a whole number')
            message.channel.send(notnumber)
        }
        try{
            if (amount > economyData.coins) {
                const nofunds = new Discord.MessageEmbed
                nofunds.setColor('#c92d1c')
                nofunds.setDescription(`<:CatieError:839151745665204234> You don't have that amount of coins to deposit.`)
                message.channel.send(nofunds)
            } else {
                await economyProfile.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: -amount,
                        bank: amount,
                    }
                })
                const deposited = new Discord.MessageEmbed
                deposited.setColor('RANDOM')
                deposited.setDescription(`<:CatieCheckmark:839151698495930388> You deposited **${amount}** coins into your bank`)
                message.channel.send(deposited)
            }
        }catch(err){
            console.log(err)
        }
	},
};