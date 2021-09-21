const mongoose = require('mongoose')

const serverSettings = mongoose.Schema({
    serverID: { type: String },
    levels: { type: String, default: 'off' },

})

const model = mongoose.model('serverSettings', serverSettings)

module.exports = model;