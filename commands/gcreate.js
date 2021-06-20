const ms = require('ms');
const Discord = require('discord.js')

module.exports = {
	name: 'gcreate',
    description: 'Create a giveaway',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command gcreate.`)
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            const noperm = new Discord.MessageEmbed
            noperm.setTitle('<:CatieError:839151745665204234> No permission!')
            noperm.setColor('#c92d1c')
            noperm.setDescription('You need permission **Manage Messages** to use this command.')
            message.channel.send(noperm)
        } else {
            const time = args[0]
        const winners = args[1]
        const prize = args.slice(2).join(" ")
        const hostedby = message.author.tag 
        if (!time) {
            const notime = new Discord.MessageEmbed
            notime.setColor('#c92d1c')
            notime.setDescription('<:CatieError:839151745665204234> You need type time of giveaway')
            message.channel.send(notime)
        } else if (!winners) {
            const nowinners = new Discord.MessageEmbed
            nowinners.setColor('#c92d1c')
            nowinners.setDescription('<:CatieError:839151745665204234> You need type quantity of winners')
            message.channel.send(nowinners)
        } else if (!prize) {
            const noprize = new Discord.MessageEmbed
            noprize.setColor('#c92d1c')
            noprize.setDescription('<:CatieError:839151745665204234> You need type prize')
            message.channel.send(noprize)
        } else {
            client.giveawaysManager.start(message.channel, {
                time: ms(time),
                prize: prize,
                winnerCount: parseInt(winners),
                messages: {
                    giveaway: '🎉**GIVEAWAY**🎉',
                    giveawayEnded: '🎉**GIVEAWAY ENDED**🎉',
                    timeRemaining: `Time remaining: **{duration}**`,
                    inviteToParticipate: 'React with 🎉 to enter!',
                    winMessage: 'Congratulations {winners}! You won **{prize}**!',
                    noWinner: 'Giveaway cancelled, no enters!',
                    embedFooter: `Hosted by: ${hostedby}`,
                    hostedBy: 'Hosted by {user}',
                    winners: `winner(s)`,
                    endedAt: 'Ended at',
                    units: {
                        seconds: 'seconds',
                        minutes: 'minutes',
                        hours: 'hours',
                        days: 'days',
                        pluralS: true
                    }
                }
                
            })
        }
        
        }
        
	},
};