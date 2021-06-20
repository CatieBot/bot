const Discord = require('discord.js')

module.exports = {
	name: 'filter',
	description: 'Change music filter',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command filter.`)
        const filter = args[0]
        if (!filter) {
            const noargs = new Discord.MessageEmbed
            noargs.setTitle('<:CatieError:839151745665204234> You need type filter.')
            noargs.setColor('#c92d1c')
            noargs.setDescription('**All filters:**\n3d\nbassboost\necho\nkaraoke\nnightcore\nvaporwave\nflanger\ngate\nhaas\nreverse\nsurround\nmcompand\nphaser\ntremolo\nearwax')
            message.channel.send(noargs)
        } else {
            if ([`3d`, 
            `bassboost`, 
            `echo`, 
            `karaoke`, 
            `nightcore`, 
            `vaporwave`, 
            `flanger`, 
            `gate`,
            `haas`,
            `reverse`, 
            `surround`,
            `mcompand`,
            `phaser`,
            `tremolo`,
            `earwax`
            ].includes(filter)) {
                client.distube.setFilter(message, filter)
                const filtermsg = new Discord.MessageEmbed
                filtermsg.setColor('RANDOM')
                filtermsg.setDescription(`<:CatieCheckmark:839151698495930388> Using **${filter}** filter!`)
                message.channel.send(filtermsg)
            } else {
                const filternotfound = new Discord.MessageEmbed
                filternotfound.setColor('#c92d1c')
                filternotfound.setDescription('<:CatieError:839151745665204234> Filter not found.')
                message.channel.send(filternotfound)
            }
        }
	},
};