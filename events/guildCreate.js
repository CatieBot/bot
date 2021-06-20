const serverSettings = require('../models/serverSettings')

module.exports = {
	name: 'guildCreate',
	execute(guild) {
        const settings = new serverSettings({
            serverID: guild.id,
            levels: 'on',
            prefix: 'c!'
            })
            settings.save()
	},
};