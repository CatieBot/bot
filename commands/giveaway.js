const ms = require('ms');
const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Giveaway extends Command {
    constructor(...args) {
        super(...args, {
            name: 'giveaway',
            description: 'Manage giveaways',
            userRequiredPermissions: "MANAGE_MESSAGES",
            
            args: [
                {
                    name: "start",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Start a giveaway",
                    options: [
                        {
                            name: "time",
                            type: ArgumentType.STRING,
                            description: "Time of giveaway",
                            required: true
                        },
                        {
                            name: "winners",
                            type: ArgumentType.NUMBER,
                            description: "Count of winners",
                            required: true
                        },
                        {
                            name: "prize",
                            type: ArgumentType.STRING,
                            description: "Prize of giveaway",
                            required: true
                        }
                    ]
                },
                {
                    name: "edit",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Edit a giveaway",
                    options: [
                        {
                            name: "messageid",
                            type: ArgumentType.STRING,
                            description: "ID of giveaway message",
                            required: true
                        },
                        {
                            name: "time",
                            type: ArgumentType.STRING,
                            description: 'Time you want to add/-remove',
                            required: true
                        },                {
                            name: "winners",
                            type: ArgumentType.NUMBER,
                            description: "Count of winners",
                            required: true
                        },
                        {
                            name: "prize",
                            type: ArgumentType.STRING,
                            description: "Prize of giveaway",
                            required: true
                        }
                    ]
                },
                {
                    name: "reroll",
                    type: ArgumentType.SUB_COMMAND,
                    description: "Reroll a giveaway",
                    options: [
                        {
                            name: "messageid",
                            type: ArgumentType.STRING,
                            description: "ID of giveaway message",
                            required: true
                        }
                    ]
                },
                {
                    name: "end",
                    type: ArgumentType.SUB_COMMAND,
                    description: "End a giveaway",
                    options: [
                        {
                            name: "messageid",
                            type: ArgumentType.STRING,
                            description: "ID of giveaway message",
                            required: true
                        }
                    ]
                }
            ]
        })
    }

    async run({client, respond, edit, args, member, channel}) {
        const subcmd = args[0]
        if (!subcmd) {
            const nosubcmd = new Discord.MessageEmbed
            nosubcmd.setColor('#c92d1c')
            nosubcmd.setDescription('You need define subcommand\n\n Subcommands:\nstart\nedit\nreroll\nend')
            respond({embeds: [nosubcmd]})
        } else if (subcmd === 'start') {
            const time = args[1]
            const winners = args[2]
            const prize = args[3]
            const hostedby = member.user.tag 
            if (!time) {
                const notime = new Discord.MessageEmbed
                notime.setColor('#c92d1c')
                notime.setDescription('<:CatieError:839151745665204234> You need define time of giveaway')
                respond({embeds: [notime]})
            } else if (!winners) {
                const nowinners = new Discord.MessageEmbed
                nowinners.setColor('#c92d1c')
                nowinners.setDescription('<:CatieError:839151745665204234> You need define quantity of winners')
                respond({embeds: [nowinners]})
            } else if (!prize) {
                const noprize = new Discord.MessageEmbed
                noprize.setColor('#c92d1c')
                noprize.setDescription('<:CatieError:839151745665204234> You need define prize')
                respond({embeds: [noprize]})
            } else {
                client.giveawaysManager.start(channel, {
                time: ms(time),
                prize: prize,
                winnerCount: parseInt(winners),
                messages: {
                    giveaway: '🎉**GIVEAWAY**🎉',
                    giveawayEnded: '🎉**GIVEAWAY ENDED**🎉',
                    timeRemaining: `Time remaining: **{duration}**`,
                    inviteToParticipate: 'React with 🎉 to enter!',
                    winMessage: 'Congratulations {winners}! You won **{prize}**!',
                    noWinner: 'Giveaway cancelled, no enters!',
                    embedFooter: `Hosted by: ${hostedby}`,
                    hostedBy: 'Hosted by {user}',
                    winners: `winner(s)`,
                    endedAt: 'Ended at',
                units: {
                    seconds: 'seconds',
                    minutes: 'minutes',
                    hours: 'hours',
                    days: 'days',
                    pluralS: true
                }
                }
    
            })
            const giveaway = new Discord.MessageEmbed
            giveaway.setColor('RANDOM')
            giveaway.setDescription('<:CatieCheckmark:839151698495930388> Giveaway started!')
            respond({ embeds: [giveaway], ephemeral: true})
        }
        } else if (subcmd === 'edit') {
            const messageID = args[1]
            const time = args[2]
            const winners = args[3]
            const prize = args[4]
            if (Number.isNaN(+messageID)) {
                const notnumber = new Discord.MessageEmbed
                notnumber.setColor('#c92d1c')
                notnumber.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                respond({embeds: [notnumber]})
            } else if (!messageID) {
                const noargs = new Discord.MessageEmbed
                noargs.setColor('#c92d1c')
                noargs.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                respond({embeds: [noargs]})
            } else if (!time) {
                const noargs2 = new Discord.MessageEmbed
                noargs2.setColor('#c92d1c')
                noargs2.setDescription('<:CatieError:839151745665204234> You need define the time you want to add/-remove')
                respond({embeds: [noargs2]})
            } else if (!winners) {
                const noargs3 = new Discord.MessageEmbed
                noargs3.setColor('#c92d1c')
                noargs3.setDescription('<:CatieError:839151745665204234>> You need define new quantity of winners')
                respond({embeds: [noargs3]})
            } else if (!prize) {
                const noargs4 = new Discord.MessageEmbed
                noargs4.setColor('#c92d1c')
                noargs4.setDescription('<:CatieError:839151745665204234> You need define new prize')
                respond({embeds: [noargs4]})
            } else {
                client.giveawaysManager.edit(messageID, {
                    newWinnerCount: winners,
                    newPrize: prize,
                    addTime: ms(time)
                }).then(() => {
                    const edited = new Discord.MessageEmbed
                    edited.setColor('RANDOM')
                    edited.setDescription('<:CatieCheckmark:839151698495930388> Success! Giveaway was edited')
                    respond({embeds: [edited]});
                }).catch((err) => {
                    const notfound = new Discord.MessageEmbed
                    notfound.setColor('#c92d1c')
                    notfound.setDescription('<:CatieError:839151745665204234> No giveaway found for ' + messageID + '')
                    respond({embeds: [notfound], ephemeral: true});
                });
            }
        } else if (subcmd === 'reroll') {
            const messageID = args[1];
            if (Number.isNaN(+messageID)) {
                const notnumber = new Discord.MessageEmbed
                notnumber.setColor('#c92d1c')
                notnumber.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                respond({embeds: [notnumber]});
            } else if (!messageID) {
                const noargs = new Discord.MessageEmbed
                noargs.setColor('#c92d1c')
                noargs.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                respond({embeds: [noargs]});
            } else {
                client.giveawaysManager.reroll(messageID).then(() => {
                    const success = new Discord.MessageEmbed
                    success.setColor('RANDOM')
                    success.setDescription('<:CatieCheckmark:839151698495930388> Success! Giveaway rerolled!')
                    respond({embeds: [success]});
                }).catch((err) => {
                    const failed = new Discord.MessageEmbed
                    failed.setColor('#c92d1c')
                    failed.setDescription('<:CatieError:839151745665204234> No giveaway found for ' + messageID + '')
                    respond({embeds: [failed], ephemeral: true});
                });
            }
        } else if (subcmd === 'end') {
            const messageID = args[1]
            if (Number.isNaN(+messageID)) {
                const notnumber = new Discord.MessageEmbed
                notnumber.setColor('#c92d1c')
                notnumber.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                respond({embeds: [notnumber]});
            } else if (!messageID) {
                const noargs = new Discord.MessageEmbed
                noargs.setColor('#c92d1c')
                noargs.setDescription('<:CatieError:839151745665204234> You need define Message ID')
                respond({embeds: [noargs]});
            } else {
                client.giveawaysManager.end(messageID).then(() => {
                    const success = new Discord.MessageEmbed
                    success.setColor('RANDOM')
                    success.setDescription('<:CatieCheckmark:839151698495930388> Success! Giveaway ended!')
                    respond({embeds: [success]});
                })
                .catch((err) => {
                    const failed = new Discord.MessageEmbed
                    failed.setColor('#c92d1c')
                    failed.setDescription('<:CatieError:839151745665204234> No giveaway found for ' + messageID + '')
                    respond({embeds: [failed], ephemeral: true});
                });
            }
        }
    }

}