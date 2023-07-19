const mongoose = require('mongoose')

const Schema = mongoose.Schema

const accommodationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Accommodation', accommodationSchema)