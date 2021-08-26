const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };





const liftHistorySchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    liftid: {
        type: Number,
        required: false
    },
    liftgebruik: {
        type: Number,
        required: true
    },
    trapgebruik: {
        type: Number,
        required: true
    },
    co2: {
        type: Number,
        required: true
    },
    date:{
        type: Date,

    }
    


}, opts)

module.exports = mongoose.model('liftHistory', liftHistorySchema);