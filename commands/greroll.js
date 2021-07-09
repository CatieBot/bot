const Discord = require('discord.js')

module.exports = {
	name: 'greroll',
	description: 'Rerol a giveaway',
	execute(message, args, client) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            const author = message.author.tag
            console.log(`${author} send command greroll.`)
            const noperm = new Discord.MessageEmbed
            noperm.setTitle('<:CatieError:839151745665204234> No permission!')
            noperm.setColor('#c92d1c')
            noperm.setDescription('You need permission **Manage Messages** to use this command.')
            message.channel.send(noperm)
        } else {
            const messageID = args[0];
            if (Number.isNaN(+messageID)) {
                const notnumber = new Discord.MessageEmbed
                notnumber.setColor('#c92d1c')
                notnumber.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                message.channel.send(notnumber)
            } else if (!messageID) {
                const noargs = new Discord.MessageEmbed
                noargs.setColor('#c92d1c')
                noargs.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                message.channel.send(noargs)
            } else {
                client.giveawaysManager.reroll(messageID).then(() => {
                    const success = new Discord.MessageEmbed
                    success.setColor('RANDOM')
                    success.setDescription('<:CatieCheckmark:839151698495930388> Success! Giveaway rerolled!')
                    message.channel.send(success)
                }).catch((err) => {
                    const failed = new Discord.MessageEmbed
                    failed.setColor('#c92d1c')
                    failed.setDescription('<:CatieError:839151745665204234> No giveaway found for ' + messageID + '')
                    message.channel.send(failed)
                });
            }
        
        }
        
	},
};