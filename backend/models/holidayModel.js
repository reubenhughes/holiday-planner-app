const mongoose = require('mongoose')

const Schema = mongoose.Schema

const holidaySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    travelList: {
        type: Array,
        required: true
    },
    accommodationList: {
        type: Array,
        required: true
    },
    activityList: {
        type: Array,
        required: true
    },
    poiList: {
        type: Array,
        required: true
    },
    taskList: {
        type: Array,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Holiday', holidaySchema)