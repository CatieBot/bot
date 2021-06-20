const Discord = require('discord.js')

module.exports = {
	name: 'ticket',
	description: 'Create a ticket',
	async execute(message, args) {
        const randomNumber = Math.floor(Math.random()*10000)
        const channel = await message.guild.channels.create(`ticket-${randomNumber}`)
        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false
        })
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true
        })
        const welcomeMsg = new Discord.MessageEmbed
        welcomeMsg.setColor('RANDOM')
        welcomeMsg.setDescription(`<@${message.author.id}>\nThank you for creating ticket!`)
        const sendWelcomeMsg = await channel.send(welcomeMsg)

        try{
            await sendWelcomeMsg.react("🔒")
            await sendWelcomeMsg.react("⛔")
        }catch(err){
            channel.send('Error sending emojis!')
            throw err
        }
        const collector = sendWelcomeMsg.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
            { dispose: true }
          )
        
          collector.on('collect', (reaction, user) => {
              switch (reaction.emoji.name){
                  case "🔒":
                    channel.updateOverwrite(message.author, { 
                        SEND_MESSAGES: false
                    })
                    break
                  case "⛔":
                    channel.send('This channel will be deleted in 10 seconds!')
                    setTimeout(() => channel.delete(), 10000)
                    break
              }
          })

          message.channel.send(`Your problem type here ${channel}`).then((msg) => {
              setTimeout(() => msg.delete(), 10000)
              setTimeout(() => message.delete(), 3000)
          }).catch((err) => {
              throw err
          })
    },
};