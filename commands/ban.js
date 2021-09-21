// DEVELOPED BY DANEESKRIPTER
const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

const nouser = new Discord.MessageEmbed()
nouser.setColor('#C92D1C')
nouser.setDescription('<:CatieError:839151745665204234> You need mention the member you want to ban.')
const noreason = new Discord.MessageEmbed()
noreason.setColor('#C92D1C')
noreason.setDescription('<:CatieError:839151745665204234> You need define reason.')

module.exports = class Ban extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ban',
            description: 'Ban a user',
            userRequiredPermissions: "BAN_MEMBERS",
            clientRequiredPermissions: "BAN_MEMBERS",
            args: [
                {
                    name: "user",
                    type: ArgumentType.USER,
                    description: "User you wand to ban",
                    prompt: nouser,
                    required: true
                },
                {
                    name: "reason",
                    type: ArgumentType.STRING,
                    description: "Reason for ban",
                    prompt: noreason,
                    required: true
                },
            ]
        })
    }
    
    async run({client, respond, edit, args, guild}) {
        const target = args[0].replace(/<@!/g, "").replace(/>/g, "")
        const reasonmsg = args[1]
        const targetMember = guild.members.cache.get(target)
        targetMember.ban({reason: `${reasonmsg}`})
        const embed3 = new Discord.MessageEmbed()
        embed3.setColor('RANDOM')
        embed3.setDescription(`<:CatieCheckmark:839151698495930388> ${targetMember} has been banned for **${reasonmsg}**`)
        respond({ embeds: [embed3]})

        }
    
        }


        