const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
	name: 'clear',
	description: 'Clear the chat!',
	execute(message, args) {
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
            const botnoperm = new Discord.MessageEmbed
            botnoperm.setTitle(`<:CatieError:839151745665204234> I don't have permissions!`)
            botnoperm.setColor('#C92D1C')
            botnoperm.setDescription('I need permission **Manage Messages** to use this command.')
            message.channel.send(botnoperm)
        } else {
            if (message.member.hasPermission('MANAGE_MESSAGES')) {
                const author = message.author.tag
                console.log(`${author} send command clear.`)
                    const number = args[0]
                    if (number) {
                        if (Number.isNaN(+number)) {
                            const notnumber = new Discord.MessageEmbed()
                            notnumber.setDescription('<:CatieError:839151745665204234> You need type number.')
                            notnumber.setColor('#c92d1c')
    
                            message.channel.send(notnumber)
                        } else {
                            message.channel.bulkDelete(number+1)
                            const embed = new Discord.MessageEmbed();
                            embed.setColor('RANDOM')
                            embed.setDescription(`<:CatieCheckmark:839151698495930388> I deleted **${number}** messages! Meow!`)
                            message.channel.send(embed).then((embedmsg => {
                                setTimeout(function(){ 
                                    embedmsg.delete()
                                }, ms('5s'));
                            }))
                    }
                
                    } else {
                        const noargs = new Discord.MessageEmbed()
                        noargs.setColor('#c92d1c')
                        noargs.setDescription('<:CatieError:839151745665204234> You need type how many messages to delete.')
    
                        message.channel.send(noargs)
                    }
                    
                } else {
                    const embed2 = new Discord.MessageEmbed()
                    embed2.setTitle('<:CatieError:839151745665204234> No permission!')
                    embed2.setColor('#c92d1c')
                    embed2.setDescription('You need permission **Manage Messages** to use this command.')
    
                    message.channel.send(embed2)
                }
        }      
	},
};
