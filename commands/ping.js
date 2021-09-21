const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Ping extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ping',
            description: 'Show bot ping',
        })
    }
    async run({client, respond, edit, args}) {
        const pingmsg = new Discord.MessageEmbed
        pingmsg.setTitle('🏓 Pong!')
        pingmsg.setColor('RANDOM')
        pingmsg.setDescription(`**🐈 Catie Ping**: ${client.ws.ping} ms`)
        respond({embeds: [pingmsg]})
    }
}