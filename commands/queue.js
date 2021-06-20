const Discord = require('discord.js');

module.exports = {
	name: 'queue',
	description: 'Show queue',
	execute(message, args, client) {
        const author = message.author.tag
        console.log(`${author} send command queue.`)
        let queue = client.distube.getQueue(message);
        const queuemsg = new Discord.MessageEmbed
        queuemsg.setColor('RANDOM')
        queuemsg.setTitle('Current queue:')
        queuemsg.setDescription('\n' + queue.songs.map((song, id) =>
        `**${id + 1}**. **${song.name}** - ${song.formattedDuration}`).slice(0, 10).join("\n"));
        message.channel.send(queuemsg)
        
	},
};