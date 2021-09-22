  const Discord = require('discord.js')
  const { Command, ArgumentType } = require('gcommands')
  
  module.exports = class Invite extends Command {
      constructor(...args) {
          super(...args, {
              name: 'invite',
              description: 'Show all links',
              
          })
      }
      async run({client, respond, edit, args}) {
        const invitemsg = new Discord.MessageEmbed
        invitemsg.setColor('RANDOM')
        invitemsg.setDescription('<:Catie:839492019452641290> **Catie**: [Click here](https://invite.catiebot.xyz)\n<:CatieCursor:858391130281082900> **Website**: [Click here](https://catiebot.xyz)\n<:CatieDiscord:858392012310708245> **Support Server**: [Click here](https://discord.gg/rHZjP3fagE)\n<:CatieTwitter:858392833886388264> **Twitter**: [Click here](https://twitter.com/CatieBot)\n<:CatieGitHub:858393768825585714> **GitHub**: [Click here](https://github.com/CatieBot)')
        respond({embeds: [invitemsg]})
      }
  }
  
