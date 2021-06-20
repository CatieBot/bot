const Discord = require('discord.js')
const serverSettings = require('../models/serverSettings')

module.exports = {
	name: 'help',
	description: 'Show all commands.',
	async execute(message, args) {
        const serverData = await serverSettings.findOne({serverID: message.guild.id})
        const prefix = serverData.prefix
        const author = message.author.tag
        console.log(`${author} send command help.`)
        const type = args[0]
        if (message.guild.id === '813008131285843989') return
        if (!type) {
            const help = new Discord.MessageEmbed
            help.setTitle('Help')
            help.setColor('RANDOM')
            help.setDescription(`Meow.. here are all the modules:\n\n🔵 **Moderation** - ${prefix}help moderation\n🎈 **Fun** - ${prefix}help fun\n✨ **Levels** - ${prefix}help levels\n🎶 **Music** - ${prefix}help music\n💰 **Economy** - ${prefix}help economy\n🎉 **Giveaways** - ${prefix}help giveaways\n❓ **Info** - ${prefix}help info\n🔨 **Utility** - ${prefix}help utility`)
            message.channel.send(help)
        }
        if (type === 'moderation') {
            const mod = new Discord.MessageEmbed
            mod.setTitle('🔵 Moderation')
            mod.setColor('RANDOM')
            mod.setDescription(`**${prefix}clear** - Clear the chat\n**${prefix}ban** - Ban the user\n**${prefix}kick** - Kick the user\n**${prefix}slow** - Set slowmode\n**${prefix}poll** - Send a poll`)
            message.channel.send(mod)
        }
        if (type === 'fun') {
            const fun = new Discord.MessageEmbed
            fun.setTitle('🎈 Fun')
            fun.setColor('RANDOM')
            fun.setDescription(`**${prefix}8ball** - Ask me a question\n**${prefix}meme** - Send the meme from reddit\n**${prefix}howgay** - Show how many % you are gay\n**${prefix}saytome** - Something say to me\n**${prefix}cat** - Show random cat\n**${prefix}dog** - Show random dog\n**${prefix}fox** - Show random fox\n**${prefix}howlesbian** - Show how many % you are lesbian`)
            message.channel.send(fun)
        }
        if (type === 'levels') {
            const levels = new Discord.MessageEmbed
            levels.setTitle('✨ Levels')
            levels.setColor('RANDOM')
            levels.setDescription(`**${prefix}rank** - Show your level.\n**${prefix}resetxp** - Reset all xp and levels`)
            message.channel.send(levels)
        }
        if (type === 'music') {
            const music = new Discord.MessageEmbed
            music.setTitle('🎶 Music')
            music.setColor('RANDOM')
            music.setDescription(`**${prefix}play** - Play a song\n**${prefix}stop** - Stop the music\n**${prefix}queue** - Show queue\n**${prefix}skip** - Skip the song\n**${prefix}loop** - Loop song/queue\n**${prefix}volume** - Set volume\n**${prefix}pause** - Pause the song\n**${prefix}resume** - Resume the song`)
            message.channel.send(music)
        }
        if (type === 'economy') {
            const economy = new Discord.MessageEmbed
            economy.setTitle('💰 Economy')
            economy.setColor('RANDOM')
            economy.setDescription(`**${prefix}balance** - Show your balance\n**${prefix}beg** - Beg and earn coins\n**${prefix}deposit** - Deposit coins into your bank\n**${prefix}withdraw** - Withdraw coins from bank into your wallet\n**${prefix}coinflip** - Flip a coin!`)
            message.channel.send(economy)
        }
        if (type === 'giveaways') {
            const giveaways = new Discord.MessageEmbed
            giveaways.setTitle('🎉 Giveaways')
            giveaways.setColor('RANDOM')
            giveaways.setDescription(`**${prefix}gcreate** - Create a giveaway\n**${prefix}gedit** - Edit a giveaway\n**${prefix}greroll** - Reroll a giveaway\n**${prefix}gend** - End and delete a giveaway`)
            message.channel.send(giveaways)
        }
        if (type === 'info') {
            const info = new Discord.MessageEmbed
            info.setTitle('❓ Info')
            info.setColor('RANDOM')
            info.setDescription(`**${prefix}ping** - Show bot ping\n**${prefix}userinfo** - Show info about user\n **${prefix}serverinfo** - Show info about server`)
            message.channel.send(info)
        }
        if (type === 'utility') {
            const utility = new Discord.MessageEmbed
            utility.setTitle('🔨 Utility')
            utility.setColor('RANDOM')
            utility.setDescription(`**${prefix}levels** - Turn on or turn off level system\n**${prefix}setprefix** - Set custom prefix`)
            message.channel.send(utility)
        }
	},
};