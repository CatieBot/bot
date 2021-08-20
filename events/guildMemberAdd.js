const mongoose = require('mongoose');
const config = require('../config.json')
const economyProfile = require('../models/economyProfile')
const userBadges = require('../models/badges')
const { Event } = require("gcommands")

module.exports = class GuildMemberAdd extends Event {
    constructor(...args) {
        super(...args, {
            name: "guildMemberAdd",
            once: false,
            ws: false
        })
    }


		async run(member) {
			let profile = new economyProfile({
				userID: member.id,
				serverID: member.guild.id,
				coins: 100,
				bank: 0
				})
				profile.save()
				const badgesData = await userBadges.findOne({ userID: member.id})
				if (!badgesData) {
					const badges = new userBadges({
						userID: member.id,
						badges: 'None'
					})
					badges.save()
				}
		}
	};