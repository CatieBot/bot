const Discord = require('discord.js')


module.exports = {
	name: 'invite',
	description: '',
	execute(message, args) {
        const invitemsg = new Discord.MessageEmbed
        invitemsg.setColor('RANDOM')
        invitemsg.setDescription('<:Catie:839492019452641290> **Catie**: [Click here](https://invite.catiebot.tk)\n<:CatieCursor:858391130281082900> **Website**: [Click here](https://catiebot.tk)\n<:CatieDiscord:858392012310708245> **Support Server**: [Click here](https://discord.gg/rHZjP3fagE)\n<:CatieTwitter:858392833886388264> **Twitter**: [Click here](https://twitter.com/CatieBot)\n<:CatieGitHub:858393768825585714> **GitHub**: [Click here](https://github.com/CatieBot)')
        message.channel.send(invitemsg)
    }}