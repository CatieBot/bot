const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
	name: 'gedit',
	description: 'Edit a giveaway',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command gedit.`)
        const messageID = args[0]
        const time = args[1]
        const winners = args[2]
        const prize = args.slice(3).join(" ")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            const noperm = new Discord.MessageEmbed
            noperm.setTitle('<:CatieError:839151745665204234> No permission!')
            noperm.setColor('#c92d1c')
            noperm.setDescription('You need permission **Manage Messages** to use this command')
            message.channel.send(noperm)
        } else if (Number.isNaN(+messageID)) {
            const notnumber = new Discord.MessageEmbed
            notnumber.setColor('#c92d1c')
            notnumber.setDescription('<:CatieError:839151745665204234> You need define Message ID')
            message.channel.send(notnumber)
        } else if (!messageID) {
            const noargs = new Discord.MessageEmbed
            noargs.setColor('#c92d1c')
            noargs.setDescription('<:CatieError:839151745665204234> You need define Message ID')
            message.channel.send(noargs)
        } else if (!time) {
            const noargs2 = new Discord.MessageEmbed
            noargs2.setColor('#c92d1c')
            noargs2.setDescription('<:CatieError:839151745665204234> You need define the time you want to add/-remove')
            message.channel.send(noargs2)
        } else if (!winners) {
            const noargs3 = new Discord.MessageEmbed
            noargs3.setColor('#c92d1c')
            noargs3.setDescription('<:CatieError:839151745665204234>> You need define new quantity of winners')
            message.channel.send(noargs3)
        } else if (!prize) {
            const noargs4 = new Discord.MessageEmbed
            noargs4.setColor('#c92d1c')
            noargs4.setDescription('<:CatieError:839151745665204234> You need define new prize')
            message.channel.send(noargs4)
        } else {
            client.giveawaysManager.edit(messageID, {
                newWinnerCount: winners,
                newPrize: prize,
                addTime: ms(time)
            }).then(() => {
                message.channel.send('<:CatieCheckmark:839151698495930388> Success! Giveaway will edited');
            }).catch((err) => {
                message.channel.send('No giveaway found for ' + messageID + '');
            });
        }
        
        
        
	},
};