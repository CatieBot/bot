const Discord = require('discord.js')

module.exports = {
	name: 'gend',
	description: 'End a giveaway',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command gend.`)
        const messageID = args[0]
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
            client.giveawaysManager.delete(messageID).then(() => {
                const success = new Discord.MessageEmbed
                success.setColor('RANDOM')
                success.setDescription('<:CatieCheckmark:839151698495930388> Success! Giveaway deleted!')
                message.channel.send(success)
            })
            .catch((err) => {
                const failed = new Discord.MessageEmbed
                failed.setColor('#c92d1c')
                failed.setDescription('<:CatieError:839151745665204234> No giveaway found for ' + messageID + '')
                message.channel.send(failed)
            });
        }
	},
}