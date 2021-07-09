const Discord = require('discord.js')
const Levels = require('discord-xp')
const economyProfile = require('../models/economyProfile')
const serverSettings = require('../models/serverSettings')
const userBadges = require('../models/badges')
const levelRewards = require('../models/levelRewards')
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
          //LEVEL REWARDS
                const rewardsData = await levelRewards.findOne({ serverID: message.guild.id})
                if (!rewardsData) {
                    const rewards = await levelRewards.create({
                        serverID: message.guild.id,
                        level1: 'none',
                        level2: 'none',
                        level3: 'none',
                        level4: 'none',
                        level5: 'none',
                        level6: 'none',
                        level7: 'none',
                        level8: 'none',
                        level9: 'none',
                        level10: 'none',
                        level11: 'none',
                        level12: 'none',
                        level13: 'none',
                        level14: 'none',
                        level15: 'none',
                        level16: 'none',
                        level17: 'none',
                        level18: 'none',
                        level19: 'none',
                        level20: 'none',
                        level21: 'none',
                        level22: 'none',
                        level23: 'none',
                        level24: 'none',
                        level25: 'none',
                        level26: 'none',
                        level27: 'none',
                        level28: 'none',
                        level29: 'none',
                        level30: 'none',
                        level31: 'none',
                        level32: 'none',
                        level33: 'none',
                        level34: 'none',
                        level35: 'none',
                        level36: 'none',
                        level37: 'none',
                        level38: 'none',
                        level38: 'none',
                        level40: 'none',
                        level41: 'none',
                        level42: 'none',
                        level43: 'none',
                        level44: 'none',
                        level45: 'none',
                        level46: 'none',
                        level47: 'none',
                        level48: 'none',
                        level49: 'none',
                        level50: 'none',
                        level51: 'none',
                        level52: 'none',
                        level53: 'none',
                        level54: 'none',
                        level55: 'none',
                        level56: 'none',
                        level57: 'none',
                        level58: 'none',
                        level59: 'none',
                        level60: 'none',
                        level61: 'none',
                        level62: 'none',
                        level63: 'none',
                        level64: 'none',
                        level65: 'none',
                        level66: 'none',
                        level67: 'none',
                        level68: 'none',
                        level69: 'none',
                        level70: 'none',
                        level71: 'none',
                        level72: 'none',
                        level73: 'none',
                        level74: 'none',
                        level75: 'none',
                        level76: 'none',
                        level77: 'none',
                        level78: 'none',
                        level79: 'none',
                        level80: 'none',
                        level81: 'none',
                        level82: 'none',
                        level83: 'none',
                        level84: 'none',
                        level85: 'none',
                        level86: 'none',
                        level87: 'none',
                        level88: 'none',
                        level89: 'none',
                        level90: 'none',
                        level91: 'none',
                        level92: 'none',
                        level93: 'none',
                        level94: 'none',
                        level95: 'none',
                        level96: 'none',
                        level97: 'none',
                        level98: 'none',
                        level99: 'none',
                        level100: 'none'
                    })
                  }
        // LEVELS
        if (settingsData.levels === 'off') return
        if (message.author.bot) return
        const randomXP = Math.floor(Math.random() * 11)
        const user = await Levels.fetch(message.author.id, message.guild.id)
        const LeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP).catch()
        if (LeveledUp) {
            const LeveledUpMsg = new Discord.MessageEmbed
            LeveledUpMsg.setColor('RANDOM')
            LeveledUpMsg.setDescription(`<@${message.author.id}> leveled up to **${user.level +1}**! Meow!`)
            message.channel.send(LeveledUpMsg)
        }


        if (user.level === 1) {
          const role = message.guild.roles.cache.get(rewardsData.level1)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 2) {
          const role = message.guild.roles.cache.get(rewardsData.level2)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 3) {
          const role = message.guild.roles.cache.get(rewardsData.level3)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 4) {
          const role = message.guild.roles.cache.get(rewardsData.level4)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level+1 === 5) {
          const role = message.guild.roles.cache.get(rewardsData.level5)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 6) {
          const role = message.guild.roles.cache.get(rewardsData.level6)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 7) {
          const role = message.guild.roles.cache.get(rewardsData.level7)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 8) {
          const role = message.guild.roles.cache.get(rewardsData.level8)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 9) {
          const role = message.guild.roles.cache.get(rewardsData.level9)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 10) {
          const role = message.guild.roles.cache.get(rewardsData.level10)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 11) {
          const role = message.guild.roles.cache.get(rewardsData.level11)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 12) {
          const role = message.guild.roles.cache.get(rewardsData.level12)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 13) {
          const role = message.guild.roles.cache.get(rewardsData.level13)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 14) {
          const role = message.guild.roles.cache.get(rewardsData.level14)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 15) {
          const role = message.guild.roles.cache.get(rewardsData.level15)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 16) {
          const role = message.guild.roles.cache.get(rewardsData.level16)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 17) {
          const role = message.guild.roles.cache.get(rewardsData.level17)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 18) {
          const role = message.guild.roles.cache.get(rewardsData.level18)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 19) {
          const role = message.guild.roles.cache.get(rewardsData.level19)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 20) {
          const role = message.guild.roles.cache.get(rewardsData.level20)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 21) {
          const role = message.guild.roles.cache.get(rewardsData.level21)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 22) {
          const role = message.guild.roles.cache.get(rewardsData.level22)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 23) {
          const role = message.guild.roles.cache.get(rewardsData.level23)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 24) {
          const role = message.guild.roles.cache.get(rewardsData.level24)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 25) {
          const role = message.guild.roles.cache.get(rewardsData.level25)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 26) {
          const role = message.guild.roles.cache.get(rewardsData.level26)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 27) {
          const role = message.guild.roles.cache.get(rewardsData.level27)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 28) {
          const role = message.guild.roles.cache.get(rewardsData.level28)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 29) {
          const role = message.guild.roles.cache.get(rewardsData.level29)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 30) {
          const role = message.guild.roles.cache.get(rewardsData.level30)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 31) {
          const role = message.guild.roles.cache.get(rewardsData.level31)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 32) {
          const role = message.guild.roles.cache.get(rewardsData.level32)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 33) {
          const role = message.guild.roles.cache.get(rewardsData.level33)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 34) {
          const role = message.guild.roles.cache.get(rewardsData.level34)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 35) {
          const role = message.guild.roles.cache.get(rewardsData.level35)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 36) {
          const role = message.guild.roles.cache.get(rewardsData.level36)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 37) {
          const role = message.guild.roles.cache.get(rewardsData.level37)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 38) {
          const role = message.guild.roles.cache.get(rewardsData.level38)
          if (!role) return;
          message.member.roles.add(role)
        }else if (user.level === 39) {
          const role = message.guild.roles.cache.get(rewardsData.level39)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 40) {
          const role = message.guild.roles.cache.get(rewardsData.level40)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 41) {
          const role = message.guild.roles.cache.get(rewardsData.level41)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 42) {
          const role = message.guild.roles.cache.get(rewardsData.level42)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 43) {
          const role = message.guild.roles.cache.get(rewardsData.level43)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 44) {
          const role = message.guild.roles.cache.get(rewardsData.level44)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 45) {
          const role = message.guild.roles.cache.get(rewardsData.level45)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 46) {
          const role = message.guild.roles.cache.get(rewardsData.level46)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 47) {
          const role = message.guild.roles.cache.get(rewardsData.level47)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 48) {
          const role = message.guild.roles.cache.get(rewardsData.level48)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 49) {
          const role = message.guild.roles.cache.get(rewardsData.level49)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 50) {
          const role = message.guild.roles.cache.get(rewardsData.level50)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 51) {
          const role = message.guild.roles.cache.get(rewardsData.level51)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 52) {
          const role = message.guild.roles.cache.get(rewardsData.level52)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 53) {
          const role = message.guild.roles.cache.get(rewardsData.level53)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 54) {
          const role = message.guild.roles.cache.get(rewardsData.level54)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 55) {
          const role = message.guild.roles.cache.get(rewardsData.level55)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 56) {
          const role = message.guild.roles.cache.get(rewardsData.level56)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 57) {
          const role = message.guild.roles.cache.get(rewardsData.level57)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 58) {
          const role = message.guild.roles.cache.get(rewardsData.level58)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 59) {
          const role = message.guild.roles.cache.get(rewardsData.level59)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 60) {
          const role = message.guild.roles.cache.get(rewardsData.level60)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 61) {
          const role = message.guild.roles.cache.get(rewardsData.level61)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 62) {
          const role = message.guild.roles.cache.get(rewardsData.level62)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 63) {
          const role = message.guild.roles.cache.get(rewardsData.level63)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 64) {
          const role = message.guild.roles.cache.get(rewardsData.level64)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 65) {
          const role = message.guild.roles.cache.get(rewardsData.level65)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 66) {
          const role = message.guild.roles.cache.get(rewardsData.level66)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 67) {
          const role = message.guild.roles.cache.get(rewardsData.level67)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 68) {
          const role = message.guild.roles.cache.get(rewardsData.level68)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 69) {
          const role = message.guild.roles.cache.get(rewardsData.level69)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 70) {
          const role = message.guild.roles.cache.get(rewardsData.level70)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 71) {
          const role = message.guild.roles.cache.get(rewardsData.level71)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 72) {
          const role = message.guild.roles.cache.get(rewardsData.level72)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 73) {
          const role = message.guild.roles.cache.get(rewardsData.level73)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 74) {
          const role = message.guild.roles.cache.get(rewardsData.level74)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 75) {
          const role = message.guild.roles.cache.get(rewardsData.level75)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 76) {
          const role = message.guild.roles.cache.get(rewardsData.level76)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 77) {
          const role = message.guild.roles.cache.get(rewardsData.level77)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 78) {
          const role = message.guild.roles.cache.get(rewardsData.level78)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 79) {
          const role = message.guild.roles.cache.get(rewardsData.level79)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 80) {
          const role = message.guild.roles.cache.get(rewardsData.level80)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 81) {
          const role = message.guild.roles.cache.get(rewardsData.level81)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 82) {
          const role = message.guild.roles.cache.get(rewardsData.level82)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 83) {
          const role = message.guild.roles.cache.get(rewardsData.level83)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 84) {
          const role = message.guild.roles.cache.get(rewardsData.level84)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 85) {
          const role = message.guild.roles.cache.get(rewardsData.level85)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 86) {
          const role = message.guild.roles.cache.get(rewardsData.level86)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 87) {
          const role = message.guild.roles.cache.get(rewardsData.level87)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 88) {
          const role = message.guild.roles.cache.get(rewardsData.level88)
          if (!role) return;
          message.member.roles.add(role)
        }else if (user.level === 89) {
          const role = message.guild.roles.cache.get(rewardsData.level39)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 90) {
          const role = message.guild.roles.cache.get(rewardsData.level90)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 91) {
          const role = message.guild.roles.cache.get(rewardsData.level91)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 92) {
          const role = message.guild.roles.cache.get(rewardsData.level92)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 93) {
          const role = message.guild.roles.cache.get(rewardsData.level93)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 94) {
          const role = message.guild.roles.cache.get(rewardsData.level94)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 95) {
          const role = message.guild.roles.cache.get(rewardsData.level95)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 96) {
          const role = message.guild.roles.cache.get(rewardsData.level96)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 97) {
          const role = message.guild.roles.cache.get(rewardsData.level97)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level == 98) {
          const role = message.guild.roles.cache.get(rewardsData.level98)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 99) {
          const role = message.guild.roles.cache.get(rewardsData.level99)
          if (!role) return;
          message.member.roles.add(role)
        } else if (user.level === 100) {
          const role = message.guild.roles.cache.get(rewardsData.level100)
          if (!role) return;
          message.member.roles.add(role)
        }
        
    },
};