const Discord = require("discord.js")
const { Command, ArgumentType } = require('gcommands')
const nouser = new Discord.MessageEmbed()
nouser.setColor('#C92D1C')
nouser.setDescription('<:CatieError:839151745665204234> You need mention the member you want to kick.')
const noreason = new Discord.MessageEmbed()
noreason.setColor('#C92D1C')
noreason.setDescription('<:CatieError:839151745665204234> You need define reason.')

module.exports = class Kick extends Command {
    constructor(...args) {
        super(...args, {
            name: 'kick',
            description: 'Kick a user',
            userRequiredPermissions: "KICK_MEMBERS",
            clientRequiredPermissions: "KICK_MEMBERS",
            guildOnly: "843109505876230144",
            args: [
                {
                    name: "user",
                    type: ArgumentType.USER,
                    description: "User you wand to kick",
                    prompt: nouser,
                    required: true
                },
                {
                    name: "reason",
                    type: ArgumentType.STRING,
                    description: "Reason for kick",
                    prompt: noreason,
                    required: true
                },
            ]
        })
    }
    async run({client, respond, edit, args, guild}) {
        const target = args[0].replace(/<@!/g, "").replace(/>/g, "")
        const targetMember = guild.members.cache.get(target)
        const reasonmsg = args[1]
        targetMember.kick({reason: `${reasonmsg}`})
        const embed3 = new Discord.MessageEmbed()
        embed3.setColor('RANDOM')
        embed3.setDescription(`<:CatieCheckmark:839151698495930388> ${targetMember} has been kicked for **${reasonmsg}**!`)
    
        respond({embeds: [embed3]})
            }
        }