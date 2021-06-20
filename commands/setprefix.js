const Discord = require('discord.js')
const serverSettings = require('../models/serverSettings')


module.exports = {
	name: 'setprefix',
	description: 'Set server prefix',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command setprefix.`)
        const prefix = args[0]
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const noperm = new Discord.MessageEmbed
            noperm.setTitle('<:CatieError:839151745665204234> No permission!')
            noperm.setColor('#c92d1c')
            noperm.setDescription('You need permission **Administrator** to use this command')
            message.channel.send(noperm)
        } else {
            if (!prefix) {
                const noargs = new Discord.MessageEmbed
                noargs.setColor('#c92d1c')
                noargs.setDescription('<:CatieError:839151745665204234> You need type prefix')
                message.channel.send(noargs)
            } else {
                const response = await serverSettings.findOneAndUpdate({
                    serverID: message.guild.id,
                }, 
                {
                    prefix: prefix,
                   
                })
                const setprefix = new Discord.MessageEmbed
                setprefix.setColor('RANDOM')
                setprefix.setDescription(`<:CatieCheckmark:839151698495930388> Prefix was changed to **${prefix}**`)
                message.channel.send(setprefix)
            }
        }

	},
};



