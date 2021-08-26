const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

const liftSchema = mongoose.Schema({
    id: {
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

});

liftSchema.method('transform', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});


module.exports = mongoose.model('liften', liftSchema);