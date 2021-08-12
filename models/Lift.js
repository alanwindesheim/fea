const mongoose = require('mongoose');

const liftSchema = mongoose.Schema({
    liftid: {
        type: String,
        required: true
    },
    liftnaam: {
        type: String,
        required: false
    },
    liftlocatie: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('liften', liftSchema);