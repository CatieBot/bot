const mongoose = require('mongoose');

const levelRewards = new mongoose.Schema({
    serverID: { type: String },
    level1: { type: String, default: 'none'},
    level2: { type: String, default: 'none'},
    level3: { type: String, default: 'none'},
    level4: { type: String, default: 'none'},
    level5: { type: String, default: 'none'},
    level6: { type: String, default: 'none'},
    level7: { type: String, default: 'none'},
    level8: { type: String, default: 'none'},
    level9: { type: String, default: 'none'},
    level10: { type: String, default: 'none'},
    level11: { type: String, default: 'none'},
    level12: { type: String, default: 'none'},
    level13: { type: String, default: 'none'},
    level14: { type: String, default: 'none'},
    level15: { type: String, default: 'none'},
    level16: { type: String, default: 'none'},
    level17: { type: String, default: 'none'},
    level18: { type: String, default: 'none'},
    level19: { type: String, default: 'none'},
    level20: { type: String, default: 'none'},
    level21: { type: String, default: 'none'},
    level22: { type: String, default: 'none'},
    level23: { type: String, default: 'none'},
    level24: { type: String, default: 'none'},
    level25: { type: String, default: 'none'},
    level26: { type: String, default: 'none'},
    level27: { type: String, default: 'none'},
    level28: { type: String, default: 'none'},
    level29: { type: String, default: 'none'},
    level30: { type: String, default: 'none'},
    level31: { type: String, default: 'none'},
    level32: { type: String, default: 'none'},
    level33: { type: String, default: 'none'},
    level34: { type: String, default: 'none'},
    level35: { type: String, default: 'none'},
    level36: { type: String, default: 'none'},
    level37: { type: String, default: 'none'},
    level38: { type: String, default: 'none'},
    level39: { type: String, default: 'none'},
    level40: { type: String, default: 'none'},
    level41: { type: String, default: 'none'},
    level42: { type: String, default: 'none'},
    level43: { type: String, default: 'none'},
    level44: { type: String, default: 'none'},
    level45: { type: String, default: 'none'},
    level46: { type: String, default: 'none'},
    level47: { type: String, default: 'none'},
    level48: { type: String, default: 'none'},
    level49: { type: String, default: 'none'},
    level50: { type: String, default: 'none'},
    level51: { type: String, default: 'none'},
    level52: { type: String, default: 'none'},
    level53: { type: String, default: 'none'},
    level54: { type: String, default: 'none'},
    level55: { type: String, default: 'none'},
    level56: { type: String, default: 'none'},
    level57: { type: String, default: 'none'},
    level58: { type: String, default: 'none'},
    level59: { type: String, default: 'none'},
    level60: { type: String, default: 'none'},
    level61: { type: String, default: 'none'},
    level62: { type: String, default: 'none'},
    level63: { type: String, default: 'none'},
    level64: { type: String, default: 'none'},
    level65: { type: String, default: 'none'},
    level66: { type: String, default: 'none'},
    level67: { type: String, default: 'none'},
    level68: { type: String, default: 'none'},
    level69: { type: String, default: 'none'},
    level70: { type: String, default: 'none'},
    level71: { type: String, default: 'none'},
    level72: { type: String, default: 'none'},
    level73: { type: String, default: 'none'},
    level74: { type: String, default: 'none'},
    level75: { type: String, default: 'none'},
    level76: { type: String, default: 'none'},
    level77: { type: String, default: 'none'},
    level78: { type: String, default: 'none'},
    level79: { type: String, default: 'none'},
    level80: { type: String, default: 'none'},
    level81: { type: String, default: 'none'},
    level82: { type: String, default: 'none'},
    level83: { type: String, default: 'none'},
    level84: { type: String, default: 'none'},
    level85: { type: String, default: 'none'},
    level86: { type: String, default: 'none'},
    level87: { type: String, default: 'none'},
    level88: { type: String, default: 'none'},
    level89: { type: String, default: 'none'},
    level90: { type: String, default: 'none'},
    level91: { type: String, default: 'none'},
    level92: { type: String, default: 'none'},
    level93: { type: String, default: 'none'},
    level94: { type: String, default: 'none'},
    level95: { type: String, default: 'none'},
    level96: { type: String, default: 'none'},
    level97: { type: String, default: 'none'},
    level98: { type: String, default: 'none'},
    level99: { type: String, default: 'none'},
    level100: { type: String, default: 'none'}
})

const model = mongoose.model('levelRewards', levelRewards)

module.exports = model;