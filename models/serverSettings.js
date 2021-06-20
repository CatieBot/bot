const mongoose = require('mongoose')

const serverSettings = mongoose.Schema({
    serverID: { type: String },
    levels: { type: String, default: 'off' },
    prefix: { type: String, default: 'c!' },

})

const model = mongoose.model('serverSettings', serverSettings)

module.exports = model;