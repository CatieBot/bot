const mongoose = require('mongoose');
const config = require('../config.json')
const economyProfile = require('../models/economyProfile')
const userBadges = require('../models/badges')

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
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
	},
};