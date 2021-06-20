const mongoose = require('mongoose');

const userBadges = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    badges: { type: String, default: 'None' },
})

const model = mongoose.model('userBadges', userBadges)

module.exports = model;