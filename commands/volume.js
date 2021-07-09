const Discord = require('discord.js')

module.exports = {
	name: 'volume',
	description: 'Set volume.',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command volume.`)
        const percent = args[0]
        if (percent) {
            if (Number.isNaN(+percent)) {
                const notnumber = new Discord.MessageEmbed
                notnumber.setColor('#C92D1C')
                notnumber.setDescription('<:CatieError:839151745665204234> You need define number.')
                message.channel.send(notnumber)
            } else {
                if (percent > 100) {
                    const invalidpercent = new Discord.MessageEmbed
                    invalidpercent.setColor('#C92D1C')
                    invalidpercent.setDescription('<:CatieError:839151745665204234> You need define volume which is less than 100')
                    message.channel.send(invalidpercent)
                } else {
                client.distube.setVolume(message, percent)
                const setvolume = new Discord.MessageEmbed
                setvolume.setColor('RANDOM')
                setvolume.setDescription(`<:CatieCheckmark:839151698495930388> Volume was set on **${percent} %**`)
                message.channel.send(setvolume)
                }
            }
        } else {
            const noargs = new Discord.MessageEmbed
            noargs.setColor('#C92D1C')
            noargs.setDescription('<:CatieError:839151745665204234> You need define volume.')
            message.channel.send(noargs)
        }
	},
};