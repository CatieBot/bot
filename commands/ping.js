const Discord = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Show bot ping',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command ping.`)
        const calculate = new Discord.MessageEmbed
        calculate.setColor('RANDOM')
        calculate.setDescription('Calculating ping...')
        message.channel.send(calculate).then(TheMessage => {
            const ping = TheMessage.createdTimestamp - message.createdTimestamp
            TheMessage.delete()
            const pingmsg = new Discord.MessageEmbed
            pingmsg.setTitle('🏓 Pong!')
            pingmsg.setColor('RANDOM')
            pingmsg.setDescription(`**🤖 Catie Ping**: ${ping} ms\n\n**🖥 API Ping**: ${client.ws.ping} ms`)
            message.channel.send(pingmsg)
        })
	},
};