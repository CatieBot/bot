const Discord = require('discord.js')
const Levels = require('discord-xp')
const economyProfile = require('../models/economyProfile')
const serverSettings = require('../models/serverSettings')
const userBadges = require('../models/badges')

Levels.setURL("mongodb+srv://daneeskripter:danee08@cluster0.2vmc2.mongodb.net/Data")

module.exports = {
	name: 'message',
	async execute(message, client) {
        let settingsData = await serverSettings.findOne({serverID: message.guild.id})
            // SERVER INFO
            if (!settingsData) {
                const settings = new serverSettings({
                serverID: message.guild.id,
                levels: 'off',
                prefix: 'c!'
                })
                settings.save()
            
                }

            if (message.content === '<@827871131540652062>') {
                    const infomsg = new Discord.MessageEmbed
                    infomsg.setColor('RANDOM')
                    infomsg.setDescription(`My prefix here is: **${settingsData.prefix}**`)
                    infomsg.setFooter('btw i like pancakes <3')
                    message.channel.send(infomsg)
                }
        // BADGES
        const badgesData = await userBadges.findOne({ userID: message.author.id})
        if (!badgesData) {
            const badges = new userBadges({
                userID: message.author.id,
                badges: 'None'
            })
            badges.save()
        }
        // ECONOMY
        let economyData;
        try {
          economyData = await economyProfile.findOne({ userID: message.author.id });
          if (!economyData) {
            const economy = await economyProfile.create({
              userID: message.author.id,
              serverID: message.guild.id,
              coins: 100,
              bank: 0,
            });
            economy.save();
          }
        } catch (err) {
          console.log(err);
        }
        // LEVELS
        if (settingsData.levels === 'off') return
        if (message.author.bot) return
        const randomXP = Math.floor(Math.random() * 11)
        const user = await Levels.fetch(message.author.id, message.guild.id)
        const LeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP)
        if (LeveledUp) {
            const LeveledUpMsg = new Discord.MessageEmbed
            LeveledUpMsg.setColor('RANDOM')
            LeveledUpMsg.setDescription(`<@${message.author.id}> leveled up to **${user.level+1}**! Meow!`)
            message.channel.send(LeveledUpMsg)
        }

    },
};