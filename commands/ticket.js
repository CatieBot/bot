const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')

module.exports = class Ticket extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ticket',
            description: 'Create a ticket',
            
        })
    }
    async run({client, respond, edit, args, guild, member}) {
        const randomNumber = Math.floor(Math.random()*10000)
        const channel = await guild.channels.create(`ticket-${randomNumber}`)
        channel.permissionOverwrites.create(guild.roles.everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        })
        channel.permissionOverwrites.create(member, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        })
        const welcomeMsg = new Discord.MessageEmbed
        welcomeMsg.setColor('RANDOM')
        welcomeMsg.setDescription(`<@${member.id}>\nThank you for creating ticket!`)
        const sendWelcomeMsg = await channel.send(welcomeMsg)

        try{
            await sendWelcomeMsg.react("🔒")
            await sendWelcomeMsg.react("⛔")
        }catch(err){
            channel.send('Error sending emojis!')
            throw err
        }
        const collector = sendWelcomeMsg.createReactionCollector(
            (reaction, user) => guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
            { dispose: true }
          )
        
          collector.on('collect', (reaction, user) => {
              switch (reaction.emoji.name){
                  case "🔒":
                    channel.permissionOverwrites.create(member, { 
                        SEND_MESSAGES: false
                    })
                    channel.send('Ticket locked!')
                    break
                  case "⛔":
                    channel.send('This channel will be deleted in 10 seconds!')
                    setTimeout(() => channel.delete(), 10000)
                    break
              }
          })

          respond(`Your problem define here ${channel}`)
          .catch((err) => {
              throw err
          })
    }
}

