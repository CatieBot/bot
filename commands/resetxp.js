const Discord = require('discord.js')
const Levels = require('discord-xp')
const serverSettings = require('../models/serverSettings')

Levels.setURL("mongodb+srv://daneeskripter:danee08@cluster0.2vmc2.mongodb.net/Data")

module.exports = {
	name: 'resetxp',
	description: 'Reset xp',
	async execute(message, args) {
        const author = message.author.tag
        console.log(`${author} send command resetxp.`)
        const serverData = await serverSettings.findOne({serverID: message.guild.id})
        if (serverData.levels === 'off') {
            const disabled = new Discord.MessageEmbed
            disabled.setColor('#C92D1C')
            disabled.setDescription('<:CatieError:839151745665204234> Level system is disabled')
            message.channel.send(disabled)
        } else if (serverData.levels === 'on') {
            if (message.member.hasPermission('MANAGE_MESSAGES')) {
                const user = message.mentions.users.first()
                if (!user) {
                    const noargs = new Discord.MessageEmbed
                    noargs.setColor('#c92d1c')
                    noargs.setDescription('<:CatieError:839151745665204234> You need mention the member you want to reset xp.')
                    message.channel.send(noargs)
                } else {
                    Levels.setXp(user.id, message.guild.id, 0+1)
                    const resetxp = new Discord.MessageEmbed
                    resetxp.setColor('RANDOM')
                    resetxp.setDescription(`<:CatieCheckmark:839151698495930388> Reseted all xp and levels for <@${user.id}>`) 
                    message.channel.send(resetxp)
                }
                } else {
                    const noperms = new Discord.MessageEmbed
                    noperms.setColor('#c92d1c')
                    noperms.setDescription('<:CatieError:839151745665204234> You need permission **Manage Messages** to use this command.')
                    message.channel.send(noperms)
                }
        }
	},
};