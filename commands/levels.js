const Discord = require('discord.js');
const serverSettings = require('../models/serverSettings')
const { Command, ArgumentType } = require('gcommands')
const invalidargs = new Discord.MessageEmbed
invalidargs.setColor('#c92d1c')
invalidargs.setDescription('<:CatieError:839151745665204234> You need define on or off')

module.exports = class Levels extends Command {
    constructor(...args) {
        super(...args, {
            name: 'levels',
            description: 'Manage level system',
            userRequiredPermissions: 'MANAGE_MESSAGES',
            guildOnly: "843109505876230144",
            args: [
                {
                    name: "on-off",
                    type: ArgumentType.STRING,
                    description: "Turn on or off level system",
                    prompt: invalidargs,
                    required: true
                }
            ]
        })
    }
    async run({client, respond, edit, args, guild}) {
        const onoff = args[0]
        if (onoff === 'on') {
            const response = await serverSettings.findOneAndUpdate({
                serverID: guild.id,
           }, 
           {
                levels: 'on',
               
           })
           const on = new Discord.MessageEmbed
           on.setColor('RANDOM')
           on.setDescription('<:CatieCheckmark:839151698495930388> Level system turned on')
           respond({embeds: [on]})
        } else if (onoff === 'off') {
            const response = await serverSettings.findOneAndUpdate({
                serverID: guild.id,
           }, 
           {
                   levels: 'off',
           })
           const off = new Discord.MessageEmbed
           off.setColor('RANDOM')
           off.setDescription('<:CatieCheckmark:839151698495930388> Level system turned off')
           respond({embeds: [off]})
        }
    }
}



