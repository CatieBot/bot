const serverSettings = require('../models/serverSettings')
const { Event } = require("gcommands")

module.exports = class GuildCreate extends Event {
    constructor(...args) {
        super(...args, {
            name: "guildCreate",
            once: false,
            ws: false
        })
    }

async run(guild) {
                const settings = new serverSettings({
                    serverID: guild.id,
                    levels: 'on',
                    prefix: 'c!'
                    })
                    settings.save()
            }
        };