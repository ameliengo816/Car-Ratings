const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    imageLink: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    numberOfDeaths: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = Hospital = mongoose.model('hospital', HospitalSchema);


