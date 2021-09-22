const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')
const levelRewards = require('../models/levelRewards')

module.exports = class Rewards extends Command {
    constructor(...args) {
        super(...args, {
            name: 'rewards',
            description: 'Manage level rewards',
            

            args: [
                {
                    name: "set",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Set level rewards",
                    options: [
                        {
                            name: "level",
                            type: ArgumentType.STRING,
                            description: "Level",
                            required: true
                        },
                        {
                            name: "role",
                            type: ArgumentType.STRING,
                            description: "Role ID",
                            required: true
                        }
                    ]
                },
                {
                    name: "del",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Delete level reward",
                    options: [
                        {
                            name: "level",
                            type: ArgumentType.STRING,
                            description: "Level",
                            required: true
                        }
                    ]
                },
                {
                    name: "list",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Show all level rewards"
                },
            ]
        })
    }

    async run({client, respond, edit, args, guild}) {
        const subcmd = args[0]
        if (subcmd === 'set') {
            const level = args[1]
            const role = args[2]
            if (!level) {
                const nolevel = new Discord.MessageEmbed
                nolevel.setColor('#c92d1c')
                nolevel.setDescription('<:CatieError:839151745665204234> You need define level.')
                respond({embeds: [nolevel]})

            } else if (!role) {
                const norole = new Discord.MessageEmbed
                norole.setColor('#c92d1c')
                norole.setDescription('<:CatieError:839151745665204234> You need define role id.')
                respond({embeds: [norole]})
            } else if (level > 100) {
                    const level100 = new Discord.MessageEmbed
                    level100.setColor('#c92d1c')
                    level100.setDescription('<:CatieError:839151745665204234> You need define level lower than 100.')
                    respond({embeds: [level100]})
                } else if (Number.isNaN(+level)) {
                    const notvalid = new Discord.MessageEmbed
                    notvalid.setColor('#c92d1c')
                    notvalid.setDescription('<:CatieError:839151745665204234> Level must to be number.')
                    respond({embeds: [notvalid]})
                } else if (Number.isNaN(+role)) {
                        const notvalid2 = new Discord.MessageEmbed
                        notvalid2.setColor('#c92d1c')
                        notvalid2.setDescription('<:CatieError:839151745665204234> Role ID must to be number.')
                        respond({embeds: [notvalid2]})
                } else {
                const findedrole = guild.roles.cache.get(role)
                if (!findedrole) {
                    const notvalid3 = new Discord.MessageEmbed
                    notvalid3.setColor('#c92d1c')
                    notvalid3.setDescription('<:CatieError:839151745665204234> Role ID must to be valid.')
                    respond({embeds: [notvalid3]})
                } else {
                    if (level === '1') {
                    await levelRewards.findOneAndUpdate({
                            serverID: guild.id
                        }, {
                            $set: {
                                level1: role
                            }
                        })
                    } else  if (level === '2') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level2: role
                                }
                            })
                    } else  if (level === '3') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level3: role
                                }
                            })
                    } else  if (level === '4') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level4: role
                                }
                            })
                    } else  if (level === '5') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level5: role
                                }
                            })
                    } else  if (level === '6') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level6: role
                                }
                            })
                    } else  if (level === '7') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level7: role
                                }
                            })
                    } else  if (level === '8') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level8: role
                                }
                            })
                    } else  if (level === '9') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level9: role
                                }
                            })
                    } else  if (level === '10') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level10: role
                                }
                            })
                    } else  if (level === '11') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level11: role
                                }
                            })
                    } else  if (level === '12') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level12: role
                                }
                            })
                    } else  if (level === '13') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level13: role
                                }
                            })
                    } else  if (level === '14') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level14: role
                                }
                            })
                    } else  if (level === '15') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level15: role
                                }
                            })
                    } else  if (level === '16') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level16: role
                                }
                            })
                    } else  if (level === '17') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level17: role
                                }
                            })
                    } else  if (level === '18') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level18: role
                                }
                            })
                    } else  if (level === '19') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level19: role
                                }
                            })
                    } else  if (level === '20') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level20: role
                                }
                            })
                    } else  if (level === '21') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level21: role
                                }
                            })
                    } else  if (level === '22') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level22: role
                                }
                            })
                    } else  if (level === '23') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level23: role
                                }
                            })
                    } else  if (level === '24') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level24: role
                                }
                            })
                    } else  if (level === '25') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level25: role
                                }
                            })
                    } else  if (level === '26') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level26: role
                                }
                            })
                    } else  if (level === '27') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level27: role
                                }
                            })
                    } else  if (level === '28') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level28: role
                                }
                            })
                    } else  if (level === '29') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level29: role
                                }
                            })
                    } else  if (level === '30') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level30: role
                                }
                            })
                    } else  if (level === '31') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level31: role
                                }
                            })
                    } else  if (level === '32') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level32: role
                                }
                            })
                    } else  if (level === '33') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level33: role
                                }
                            })
                    } else  if (level === '34') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level34: role
                                }
                            })
                    } else  if (level === '35') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level35: role
                                }
                            })
                    } else  if (level === '36') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level36: role
                                }
                            })
                    } else  if (level === '37') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level37: role
                                }
                            })
                    } else  if (level === '38') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level38: role
                                }
                            })
                    } else  if (level === '39') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level39: role
                                }
                            })
                    } else  if (level === '40') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level40: role
                                }
                            })
                    } else  if (level === '41') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level41: role
                                }
                            })
                    } else  if (level === '42') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level42: role
                                }
                            })
                    } else  if (level === '43') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level43: role
                                }
                            })
                    } else  if (level === '44') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level44: role
                                }
                            })
                    } else  if (level === '45') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level45: role
                                }
                            })
                    } else  if (level === '46') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level46: role
                                }
                            })
                    } else  if (level === '47') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level47: role
                                }
                            })
                    } else  if (level === '48') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level48: role
                                }
                            })
                    } else  if (level === '49') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level49: role
                                }
                            })
                    } else  if (level === '50') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level50: role
                                }
                            })
                    } else  if (level === '51') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level51: role
                                }
                            })
                    } else  if (level === '52') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level52: role
                                }
                            })
                    } else  if (level === '53') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level53: role
                                }
                            })
                    } else  if (level === '54') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level54: role
                                }
                            })
                    } else  if (level === '55') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level55: role
                                }
                            })
                    } else  if (level === '56') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level56: role
                                }
                            })
                    } else  if (level === '57') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level57: role
                                }
                            })
                    } else  if (level === '58') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level58: role
                                }
                            })
                    } else  if (level === '59') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level59: role
                                }
                            })
                    } else  if (level === '60') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level60: role
                                }
                            })
                    } else  if (level === '61') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level61: role
                                }
                            })
                    } else  if (level === '62') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level62: role
                                }
                            })
                    } else  if (level === '63') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level63: role
                                }
                            })
                    } else  if (level === '64') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level64: role
                                }
                            })
                    } else  if (level === '65') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level65: role
                                }
                            })
                    } else  if (level === '66') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level66: role
                                }
                            })
                    } else  if (level === '67') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level67: role
                                }
                            })
                    } else  if (level === '68') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level68: role
                                }
                            })
                    } else  if (level === '69') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level69: role
                                }
                            })
                    } else  if (level === '70') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level70: role
                                }
                            })
                    } else  if (level === '71') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level71: role
                                }
                            })
                    } else  if (level === '72') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level72: role
                                }
                            })
                    } else  if (level === '73') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level73: role
                                }
                            })
                    } else  if (level === '74') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level74: role
                                }
                            })
                    } else  if (level === '75') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level75: role
                                }
                            })
                    } else  if (level === '76') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level76: role
                                }
                            })
                    } else  if (level === '77') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level77: role
                                }
                            })
                    } else  if (level === '78') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level78: role
                                }
                            })
                    } else  if (level === '79') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level79: role
                                }
                            })
                    } else  if (level === '80') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level80: role
                                }
                            })
                    } else  if (level === '81') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level81: role
                                }
                            })
                    } else  if (level === '82') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level82: role
                                }
                            })
                    } else  if (level === '83') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level83: role
                                }
                            })
                    } else  if (level === '84') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level84: role
                                }
                            })
                    } else  if (level === '85') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level85: role
                                }
                            })
                    } else  if (level === '86') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level86: role
                                }
                            })
                    } else  if (level === '87') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level87: role
                                }
                            })
                    } else  if (level === '88') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level88: role
                                }
                            })
                    } else  if (level === '89') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level89: role
                                }
                            })
                    } else  if (level === '90') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level90: role
                                }
                            })
                    } else  if (level === '91') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level91: role
                                }
                            })
                    } else  if (level === '92') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level92: role
                                }
                            })
                    } else  if (level === '93') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level93: role
                                }
                            })
                    } else  if (level === '94') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level94: role
                                }
                            })
                    } else  if (level === '95') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level95: role
                                }
                            })
                    } else  if (level === '96') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level96: role
                                }
                            })
                    } else  if (level === '97') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level97: role
                                }
                            })
                    } else  if (level === '98') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level98: role
                                }
                            })
                    } else  if (level === '99') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level99: role
                                }
                            })
                    } else  if (level === '100') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level100: role
                                }
                            })
                    }
                const finish = new Discord.MessageEmbed
                finish.setColor('RANDOM')
                finish.setDescription(`<:CatieCheckmark:839151698495930388> For level **${level}** was set role with id **${role}**`)
                respond({embeds: [finish]})
                }
                }
                
            
        } else if (subcmd === 'del') {
            const level = args[1]
            if (!level) {
                const nolevel = new Discord.MessageEmbed
                nolevel.setColor('#c92d1c')
                nolevel.setDescription('<:CatieError:839151745665204234> You need define level.')
                respond({embeds: [nolevel]})
            } else if (level > 100) {
                const level100 = new Discord.MessageEmbed
                level100.setColor('#c92d1c')
                level100.setDescription('<:CatieError:839151745665204234> You need define level lower than 100.')
                respond({embeds: [level100]})
            } else {
                if (level === '1') {
                    await levelRewards.findOneAndUpdate({
                            serverID: guild.id
                        }, {
                            $set: {
                                level1: 'none'
                            }
                        })
                    } else  if (level === '2') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level2: 'none'
                                }
                            })
                    } else  if (level === '3') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level3: 'none'
                                }
                            })
                    } else  if (level === '4') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level4: 'none'
                                }
                            })
                    } else  if (level === '5') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level5: 'none'
                                }
                            })
                    } else  if (level === '6') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level6: 'none'
                                }
                            })
                    } else  if (level === '7') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level7: 'none'
                                }
                            })
                    } else  if (level === '8') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level8: 'none'
                                }
                            })
                    } else  if (level === '9') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level9: 'none'
                                }
                            })
                    } else  if (level === '10') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level10: 'none'
                                }
                            })
                    } else  if (level === '11') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level11: 'none'
                                }
                            })
                    } else  if (level === '12') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level12: 'none'
                                }
                            })
                    } else  if (level === '13') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level13: 'none'
                                }
                            })
                    } else  if (level === '14') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level14: 'none'
                                }
                            })
                    } else  if (level === '15') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level15: 'none'
                                }
                            })
                    } else  if (level === '16') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level16: 'none'
                                }
                            })
                    } else  if (level === '17') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level17: 'none'
                                }
                            })
                    } else  if (level === '18') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level18: 'none'
                                }
                            })
                    } else  if (level === '19') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level19: 'none'
                                }
                            })
                    } else  if (level === '20') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level20: 'none'
                                }
                            })
                    } else  if (level === '21') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level21: 'none'
                                }
                            })
                    } else  if (level === '22') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level22: 'none'
                                }
                            })
                    } else  if (level === '23') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level23: 'none'
                                }
                            })
                    } else  if (level === '24') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level24: 'none'
                                }
                            })
                    } else  if (level === '25') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level25: 'none'
                                }
                            })
                    } else  if (level === '26') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level26: 'none'
                                }
                            })
                    } else  if (level === '27') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level27: 'none'
                                }
                            })
                    } else  if (level === '28') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level28: 'none'
                                }
                            })
                    } else  if (level === '29') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level29: 'none'
                                }
                            })
                    } else  if (level === '30') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level30: 'none'
                                }
                            })
                    } else  if (level === '31') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level31: 'none'
                                }
                            })
                    } else  if (level === '32') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level32: 'none'
                                }
                            })
                    } else  if (level === '33') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level33: 'none'
                                }
                            })
                    } else  if (level === '34') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level34: 'none'
                                }
                            })
                    } else  if (level === '35') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level35: 'none'
                                }
                            })
                    } else  if (level === '36') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level36: 'none'
                                }
                            })
                    } else  if (level === '37') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level37: 'none'
                                }
                            })
                    } else  if (level === '38') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level38: 'none'
                                }
                            })
                    } else  if (level === '39') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level39: 'none'
                                }
                            })
                    } else  if (level === '40') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level40: 'none'
                                }
                            })
                    } else  if (level === '41') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level41: 'none'
                                }
                            })
                    } else  if (level === '42') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level42: 'none'
                                }
                            })
                    } else  if (level === '43') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level43: 'none'
                                }
                            })
                    } else  if (level === '44') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level44: 'none'
                                }
                            })
                    } else  if (level === '45') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level45: 'none'
                                }
                            })
                    } else  if (level === '46') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level46: 'none'
                                }
                            })
                    } else  if (level === '47') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level47: 'none'
                                }
                            })
                    } else  if (level === '48') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level48: 'none'
                                }
                            })
                    } else  if (level === '49') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level49: 'none'
                                }
                            })
                    } else  if (level === '50') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level50: 'none'
                                }
                            })
                    } else  if (level === '51') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level51: 'none'
                                }
                            })
                    } else  if (level === '52') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level52: 'none'
                                }
                            })
                    } else  if (level === '53') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level53: 'none'
                                }
                            })
                    } else  if (level === '54') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level54: 'none'
                                }
                            })
                    } else  if (level === '55') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level55: 'none'
                                }
                            })
                    } else  if (level === '56') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level56: 'none'
                                }
                            })
                    } else  if (level === '57') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level57: 'none'
                                }
                            })
                    } else  if (level === '58') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level58: 'none'
                                }
                            })
                    } else  if (level === '59') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level59: 'none'
                                }
                            })
                    } else  if (level === '60') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level60: 'none'
                                }
                            })
                    } else  if (level === '61') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level61: 'none'
                                }
                            })
                    } else  if (level === '62') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level62: 'none'
                                }
                            })
                    } else  if (level === '63') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level63: 'none'
                                }
                            })
                    } else  if (level === '64') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level64: 'none'
                                }
                            })
                    } else  if (level === '65') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level65: 'none'
                                }
                            })
                    } else  if (level === '66') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level66: 'none'
                                }
                            })
                    } else  if (level === '67') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level67: 'none'
                                }
                            })
                    } else  if (level === '68') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level68: 'none'
                                }
                            })
                    } else  if (level === '69') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level69: 'none'
                                }
                            })
                    } else  if (level === '70') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level70: 'none'
                                }
                            })
                    } else  if (level === '71') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level71: 'none'
                                }
                            })
                    } else  if (level === '72') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level72: 'none'
                                }
                            })
                    } else  if (level === '73') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level73: 'none'
                                }
                            })
                    } else  if (level === '74') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level74: 'none'
                                }
                            })
                    } else  if (level === '75') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level75: 'none'
                                }
                            })
                    } else  if (level === '76') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level76: 'none'
                                }
                            })
                    } else  if (level === '77') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level77: 'none'
                                }
                            })
                    } else  if (level === '78') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level78: 'none'
                                }
                            })
                    } else  if (level === '79') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level79: 'none'
                                }
                            })
                    } else  if (level === '80') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level80: 'none'
                                }
                            })
                    } else  if (level === '81') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level81: 'none'
                                }
                            })
                    } else  if (level === '82') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level82: 'none'
                                }
                            })
                    } else  if (level === '83') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level83: 'none'
                                }
                            })
                    } else  if (level === '84') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level84: 'none'
                                }
                            })
                    } else  if (level === '85') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level85: 'none'
                                }
                            })
                    } else  if (level === '86') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level86: 'none'
                                }
                            })
                    } else  if (level === '87') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level87: 'none'
                                }
                            })
                    } else  if (level === '88') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level88: 'none'
                                }
                            })
                    } else  if (level === '89') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level89: 'none'
                                }
                            })
                    } else  if (level === '90') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level90: 'none'
                                }
                            })
                    } else  if (level === '91') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level91: 'none'
                                }
                            })
                    } else  if (level === '92') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level92: 'none'
                                }
                            })
                    } else  if (level === '93') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level93: 'none'
                                }
                            })
                    } else  if (level === '94') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level94: 'none'
                                }
                            })
                    } else  if (level === '95') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level95: 'none'
                                }
                            })
                    } else  if (level === '96') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level96: 'none'
                                }
                            })
                    } else  if (level === '97') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level97: 'none'
                                }
                            })
                    } else  if (level === '98') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level98: 'none'
                                }
                            })
                    } else  if (level === '99') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level99: 'none'
                                }
                            })
                    } else  if (level === '100') {
                        await levelRewards.findOneAndUpdate({
                                serverID: guild.id
                            }, {
                                $set: {
                                    level100: 'none'
                                }
                            })
                    }
                const finish = new Discord.MessageEmbed
                finish.setColor('RANDOM')
                finish.setDescription(`<:CatieCheckmark:839151698495930388> Reward for level **${level}** was deleted.`)
                respond({embeds: [finish]})
            }
        } else if (subcmd === 'list') {

            const rewardsData = await levelRewards.findOne({ serverID: guild.id})
            if (!rewardsData) {
                const rewards = await levelRewards.create({
                    serverID: guild.id,
                    level1: 'none',
                    level2: 'none',
                    level3: 'none',
                    level4: 'none',
                    level5: 'none',
                    level6: 'none',
                    level7: 'none',
                    level8: 'none',
                    level9: 'none',
                    level10: 'none',
                    level11: 'none',
                    level12: 'none',
                    level13: 'none',
                    level14: 'none',
                    level15: 'none',
                    level16: 'none',
                    level17: 'none',
                    level18: 'none',
                    level19: 'none',
                    level20: 'none',
                    level21: 'none',
                    level22: 'none',
                    level23: 'none',
                    level24: 'none',
                    level25: 'none',
                    level26: 'none',
                    level27: 'none',
                    level28: 'none',
                    level29: 'none',
                    level30: 'none',
                    level31: 'none',
                    level32: 'none',
                    level33: 'none',
                    level34: 'none',
                    level35: 'none',
                    level36: 'none',
                    level37: 'none',
                    level38: 'none',
                    level38: 'none',
                    level40: 'none',
                    level41: 'none',
                    level42: 'none',
                    level43: 'none',
                    level44: 'none',
                    level45: 'none',
                    level46: 'none',
                    level47: 'none',
                    level48: 'none',
                    level49: 'none',
                    level50: 'none',
                    level51: 'none',
                    level52: 'none',
                    level53: 'none',
                    level54: 'none',
                    level55: 'none',
                    level56: 'none',
                    level57: 'none',
                    level58: 'none',
                    level59: 'none',
                    level60: 'none',
                    level61: 'none',
                    level62: 'none',
                    level63: 'none',
                    level64: 'none',
                    level65: 'none',
                    level66: 'none',
                    level67: 'none',
                    level68: 'none',
                    level69: 'none',
                    level70: 'none',
                    level71: 'none',
                    level72: 'none',
                    level73: 'none',
                    level74: 'none',
                    level75: 'none',
                    level76: 'none',
                    level77: 'none',
                    level78: 'none',
                    level79: 'none',
                    level80: 'none',
                    level81: 'none',
                    level82: 'none',
                    level83: 'none',
                    level84: 'none',
                    level85: 'none',
                    level86: 'none',
                    level87: 'none',
                    level88: 'none',
                    level89: 'none',
                    level90: 'none',
                    level91: 'none',
                    level92: 'none',
                    level93: 'none',
                    level94: 'none',
                    level95: 'none',
                    level96: 'none',
                    level97: 'none',
                    level98: 'none',
                    level99: 'none',
                    level100: 'none'
                })
              }
              const main = new Discord.MessageEmbed
              main.setColor('RANDOM')
              main.setDescription(`Level 1: **${rewardsData.level1}**
              Level 2: **${rewardsData.level2}**
              Level 3: **${rewardsData.level3}**
              Level 4: **${rewardsData.level4}**
              Level 5: **${rewardsData.level5}**
              Level 6: **${rewardsData.level6}**
              Level 7: **${rewardsData.level7}**
              Level 8: **${rewardsData.level8}**
              Level 9: **${rewardsData.level9}**
              Level 10: **${rewardsData.level10}**
              Level 11: **${rewardsData.level11}**
              Level 12: **${rewardsData.level12}**
              Level 13: **${rewardsData.level13}**
              Level 14: **${rewardsData.level14}**
              Level 15: **${rewardsData.level15}**
              Level 16: **${rewardsData.level16}**
              Level 17: **${rewardsData.level17}**
              Level 18: **${rewardsData.level18}**
              Level 19: **${rewardsData.level19}**
              Level 20: **${rewardsData.level20}**
              Level 21: **${rewardsData.level21}**
              Level 22: **${rewardsData.level22}**
              Level 23: **${rewardsData.level23}**
              Level 24: **${rewardsData.level24}**
              Level 25: **${rewardsData.level25}**
              Level 26: **${rewardsData.level26}**
              Level 27: **${rewardsData.level27}**
              Level 28: **${rewardsData.level28}**
              Level 29: **${rewardsData.level29}**
              Level 30: **${rewardsData.level30}**
              Level 31: **${rewardsData.level31}**
              Level 32: **${rewardsData.level32}**
              Level 33: **${rewardsData.level33}**
              Level 34: **${rewardsData.level34}**
              Level 35: **${rewardsData.level35}**
              Level 36: **${rewardsData.level36}**
              Level 37: **${rewardsData.level37}**
              Level 38: **${rewardsData.level38}**
              Level 39: **${rewardsData.level39}**
              Level 40: **${rewardsData.level40}**
              Level 41: **${rewardsData.level41}**
              Level 42: **${rewardsData.level42}**
              Level 43: **${rewardsData.level43}**
              Level 44: **${rewardsData.level44}**
              Level 45: **${rewardsData.level45}**
              Level 46: **${rewardsData.level46}**
              Level 47: **${rewardsData.level47}**
              Level 48: **${rewardsData.level48}**
              Level 49: **${rewardsData.level49}**
              Level 50: **${rewardsData.level50}**
              Level 51: **${rewardsData.level51}**
              Level 52: **${rewardsData.level52}**
              Level 53: **${rewardsData.level53}**
              Level 54: **${rewardsData.level54}**
              Level 55: **${rewardsData.level55}**
              Level 56: **${rewardsData.level56}**
              Level 57: **${rewardsData.level57}**
              Level 58: **${rewardsData.level58}**
              Level 59: **${rewardsData.level59}**
              Level 60: **${rewardsData.level60}**
              Level 61: **${rewardsData.level61}**
              Level 62: **${rewardsData.level62}**
              Level 63: **${rewardsData.level63}**
              Level 64: **${rewardsData.level64}**
              Level 65: **${rewardsData.level65}**
              Level 66: **${rewardsData.level66}**
              Level 67: **${rewardsData.level67}**
              Level 68: **${rewardsData.level68}**
              Level 69: **${rewardsData.level69}**
              Level 70: **${rewardsData.level70}**
              Level 71: **${rewardsData.level71}**
              Level 72: **${rewardsData.level72}**
              Level 73: **${rewardsData.level73}**
              Level 74: **${rewardsData.level74}**
              Level 75: **${rewardsData.level75}**
              Level 76: **${rewardsData.level76}**
              Level 77: **${rewardsData.level77}**
              Level 78: **${rewardsData.level78}**
              Level 79: **${rewardsData.level79}**
              Level 80: **${rewardsData.level80}**
              Level 81: **${rewardsData.level81}**
              Level 82: **${rewardsData.level82}**
              Level 83: **${rewardsData.level83}**
              Level 84: **${rewardsData.level84}**
              Level 85: **${rewardsData.level85}**
              Level 86: **${rewardsData.level86}**
              Level 87: **${rewardsData.level87}**
              Level 88: **${rewardsData.level88}**
              Level 89: **${rewardsData.level89}**
              Level 90: **${rewardsData.level90}**
              Level 91: **${rewardsData.level91}**
              Level 92: **${rewardsData.level92}**
              Level 93: **${rewardsData.level93}**
              Level 94: **${rewardsData.level94}**
              Level 95: **${rewardsData.level95}**
              Level 96: **${rewardsData.level96}**
              Level 97: **${rewardsData.level97}**
              Level 98: **${rewardsData.level98}**
              Level 99: **${rewardsData.level99}**
              Level 100: **${rewardsData.level100}**
              `)
              respond({embeds: [main]})
        }
        }
    }
        

