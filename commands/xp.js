const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://daneeskripter:danee08@cluster0.2vmc2.mongodb.net/Data")

module.exports = class Xp extends Command {
    constructor(...args) {
        super(...args, {
            name: 'xp',
            description: 'Manage xp and levels',
            userRequiredPermissions: "MANAGE_MESSAGES",
            args: [
                {
                    name: "add",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Add xp or level",
                    options: [
                        {
                            name: "user",
                            type: ArgumentType.USER,
                            description: "User to which you want to add xp/levels",
                            required: true
                        },
                        {
                            name: "type",
                            type: ArgumentType.STRING,
                            description: "Level or xp",
                            required: true
                        },
                        {
                            name: "amount",
                            type: ArgumentType.NUMBER,
                            description: "Amount of xp/levels what do you want to add.",
                            required: true
                        }
                    ]
                },
                {
                    name: "reset",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Reset all xp and levels",
                    options: [  
                    {
                        name: "user",
                        type: ArgumentType.USER,
                        description: "User to which you want to reset xp/levels",
                        required: true
                    }
                    ]
                },
            ]
        })
    }
    async run({client, respond, edit, args}) {
        const subcmd = args[0]
        if (subcmd === 'add') {
            const target = args[1]
            const type = args[2]
            const amount = args[3]
            if (!target) {
                const notarget = new Discord.MessageEmbed
                notarget.setColor('#c92d1c')
                notarget.setDescription('<:CatieError:839151745665204234> You need mention the member to which you want to add xp/levels.')
                respond({embeds: [notarget]})
            } else if (!type) {
                const notype = new Discord.MessageEmbed
                notype.setColor('#c92d1c')
                notype.setDescription('<:CatieError:839151745665204234> You need define type what do you want to add. Level or xp.')
                respond({embeds: [notype]})
            } else if (!amount) {
                const noamount = new Discord.MessageEmbed
                noamount.setColor('#c92d1c')
                noamount.setDescription('<:CatieError:839151745665204234> You need define amount of xp/levels what do you want to add.')
                respond({embeds: [noamount]})
            } else if (type === 'level') {
                Levels.appendLevel(target.id, message.guild.id, amount);
                const level_success = new Discord.MessageEmbed
                level_success.setColor('RANDOM')
                level_success.setDescription(`<:CatieCheckmark:839151698495930388> Added **${amount}** levels to <@${target.id}>`)
                respond({embeds: [level_success]})
            } else if (type === 'xp') {
                Levels.appendXp(target.id, message.guild.id, amount);
                const xp_success = new Discord.MessageEmbed
                xp_success.setColor('RANDOM')
                xp_success.setDescription(`<:CatieCheckmark:839151698495930388> Added **${amount}** xp's to <@${target.id}>`)
                respond({embeds: [xp_success]})
            }
        } else if (subcmd === 'reset') {
            const serverSettings = require('../models/serverSettings')
            const serverData = await serverSettings.findOne({serverID: message.guild.id})
            if (serverData.levels === 'off') {
                const disabled = new Discord.MessageEmbed
                disabled.setColor('#C92D1C')
                disabled.setDescription('<:CatieError:839151745665204234> Level system is disabled')
                respond({embeds: [disabled]})
            } else if (serverData.levels === 'on') {
                    const user = args[1]
                    if (!user) {
                        const noargs = new Discord.MessageEmbed
                        noargs.setColor('#c92d1c')
                        noargs.setDescription('<:CatieError:839151745665204234> You need mention the member you want to reset xp.')
                        respond({embeds: [noargs]})
                    } else {
                        Levels.setXp(user.id, message.guild.id, 0+1)
                        const resetxp = new Discord.MessageEmbed
                        resetxp.setColor('RANDOM')
                        resetxp.setDescription(`<:CatieCheckmark:839151698495930388> Reseted all xp and levels for <@${user.id}>`) 
                        respond({embeds: [resetxp]})
                    }
            }
        }
    }
}