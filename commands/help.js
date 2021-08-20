const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Help extends Command {
    constructor(...args) {
        super(...args, {
            name: 'help',
            description: 'Show all commands',
            args: [
                {
                    name: "module",
                    type: ArgumentType.STRING,
                    description: "Module",
                    required: false
                }
            ]
        })
    }
    async run({client, respond, edit}, args) {
        const type = args[0]
        if (!type) {
            const help = new Discord.MessageEmbed
            help.setTitle('Help')
            help.setColor('RANDOM')
            help.setDescription(`Meow.. here are all the modules:\n\n🔵 **Moderation** - /help moderation\n🎈 **Fun** - /help fun\n✨ **Levels** - /help levels\n🎶 **Music** - *This module is temporarily disabled*\n💰 **Economy** - /help economy\n🎉 **Giveaways** - /help giveaways\n❓ **Info** - /help info\n🔨 **Utility** - /help utility`)
           respond({embeds: [help]})
        }
        if (type === 'moderation') {
            const mod = new Discord.MessageEmbed
            mod.setTitle('🔵 Moderation')
            mod.setColor('RANDOM')
            mod.setDescription(`**/clear** - Clear the chat\n**/ban** - Ban the user\n**/kick** - Kick the user\n**/slow** - Set slowmode\n**/poll** - Send a poll`)
            respond({embeds: [mod]})
        }
        if (type === 'fun') {
            const fun = new Discord.MessageEmbed
            fun.setTitle('🎈 Fun')
            fun.setColor('RANDOM')
            fun.setDescription(`**/8ball** - Ask me a question\n**/meme** - Send the meme from reddit\n**/howgay** - Show how many % you are gay\n**/saytome** - Something say to me\n**/cat** - Show random cat\n**/dog** - Show random dog\n**/fox** - Show random fox\n**/howlesbian** - Show how many % you are lesbian`)
            respond({embeds: [fun]})
        }
        if (type === 'levels') {
            const levels = new Discord.MessageEmbed
            levels.setTitle('✨ Levels')
            levels.setColor('RANDOM')
            levels.setDescription(`**/rank** - Show your level.\n**/xp** - Manage xp's and levels\n**/rewards** - Manage level rewards`)
            respond({embeds: [levels]})
        }
        if (type === 'music') {
            const music = new Discord.MessageEmbed
            music.setTitle('🎶 Music')
            music.setColor('RANDOM')
            music.setDescription(`This module is temporarily disabled.`)
            respond({embeds: [music]})
        }
        if (type === 'economy') {
            const economy = new Discord.MessageEmbed
            economy.setTitle('💰 Economy')
            economy.setColor('RANDOM')
            economy.setDescription(`**/balance** - Show your balance\n**/beg** - Beg and earn coins\n**/deposit** - Deposit coins into your bank\n**/withdraw** - Withdraw coins from bank into your wallet\n**/coinflip** - Flip a coin!`)
            respond({embeds: [economy]})
        }
        if (type === 'giveaways') {
            const giveaways = new Discord.MessageEmbed
            giveaways.setTitle('🎉 Giveaways')
            giveaways.setColor('RANDOM')
            giveaways.setDescription(`**/giveaway** - Manage giveaways`)
            mrespond({embeds: [giveaways]})
        }
        if (type === 'info') {
            const info = new Discord.MessageEmbed
            info.setTitle('❓ Info')
            info.setColor('RANDOM')
            info.setDescription(`**/ping** - Show bot ping\n**/userinfo** - Show info about user\n **/serverinfo** - Show info about server`)
            respond({embeds: [info]})
        }
        if (type === 'utility') {
            const utility = new Discord.MessageEmbed
            utility.setTitle('🔨 Utility')
            utility.setColor('RANDOM')
            utility.setDescription(`**/levels** - Turn on or turn off level system\n**/invite** - Send invite link and other links`)
            respond({embeds: [utility]})
        }
    }
}

        