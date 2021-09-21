const Discord = require('discord.js')
const { Command, ArgumentType } = require('gcommands')


module.exports = class ball extends Command {
    constructor(...args) {
        super(...args, {
            name: 'music',
            description: 'Play some music',
            guildOnly: "843109505876230144",
            args: [
                {
                    name: "channel",
                    type: ArgumentType.CHANNEL,
                    description: "Voice or Stage Channel",
                    prompt: "",
                    required: true
                }
            ]
        })
    }

    async run({client, respond, edit, member, guild, args}) {
    const channelid = args[0]
    const channel = guild.channels.cache.get(channelid)
    if (channel.type === 'GUILD_VOICE') {
                client.discordTogether.createTogetherCode(channelid, 'youtube').then(async invite => {
                    const reply = new Discord.MessageEmbed
                    reply.setDescription(`[Click to join](${invite.code})`)
                    reply.setColor('RANDOM')
                    respond({ embeds: [reply]})
                    console.log(invite.code)
                });
    } else {
                const notvoice = new Discord.MessageEmbed
                notvoice.setDescription('<:CatieError:839151745665204234> Channel must to be voice channel.')
                notvoice.setColor('#c92d1c')
                respond({ embeds: [notvoice]})
    }
    }}