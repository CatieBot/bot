const Discord =  require('discord.js')
const ownerID = '525704336869687316'

module.exports = {
	name: 'eval',
	description: 'Eval',
	execute(message, args) {
        if (message.author.id === ownerID) {
            const result = eval(args.slice(0).join(" "))
        } else {
            const notdev = new Discord.MessageEmbed
            notdev.setColor('#c92d1c')
            notdev.setDescription('<:CatieError:839151745665204234> You are not my developer')
            message.channel.send(notdev)
        }
	},
};