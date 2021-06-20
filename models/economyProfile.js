const mongoose = require('mongoose');

const economyProfile = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    coins: { type: Number, default: 100},
    bank: { type: Number}
})

const model = mongoose.model('EconomyProfile', economyProfile)

module.exports = model;
