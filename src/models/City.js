const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
    },
    country: {
        type: String,
    },
});

const City = new mongoose.model('City', CitySchema);

module.exports = City;
