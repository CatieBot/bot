const Discord = require('discord.js');
const serverSettings = require('../models/serverSettings')

module.exports = {
	name: 'levels',
	description: 'Turn on or turn off level system',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command levels.`)
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            const noperm = new Discord.MessageEmbed
            noperm.setTitle('<:CatieError:839151745665204234> No permissions!')
            noperm.setColor('#c92d1c')
            noperm.setDescription('You need permission **Manage Messages** to use this command.')
            message.channel.send(noperm)
        } else {
            const onoff = args[0]
            if (onoff === 'on') {
                const response = await serverSettings.findOneAndUpdate({
                    serverID: message.guild.id,
               }, 
               {
                    levels: 'on',
                   
               })
               const on = new Discord.MessageEmbed
               on.setColor('RANDOM')
               on.setDescription('<:CatieCheckmark:839151698495930388> Level system turned on')
               message.channel.send(on)
            } else if (onoff === 'off') {
                const response = await serverSettings.findOneAndUpdate({
                    serverID: message.guild.id,
               }, 
               {
                       levels: 'off',
               })
               const off = new Discord.MessageEmbed
               off.setColor('RANDOM')
               off.setDescription('<:CatieCheckmark:839151698495930388> Level system turned off')
               message.channel.send(off)
            } else {
                const invalidargs = new Discord.MessageEmbed
                invalidargs.setColor('#c92d1c')
                invalidargs.setDescription('<:CatieError:839151745665204234> You need type on or off')
                message.channel.send(invalidargs)
            }
        }
        
	},
};