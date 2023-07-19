const mongoose = require('mongoose')

const Schema = mongoose.Schema

const activitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
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

module.exports = mongoose.model('Activity', activitySchema)