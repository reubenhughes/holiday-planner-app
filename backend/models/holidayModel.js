const mongoose = require('mongoose')

const Schema = mongoose.Schema

const holidaySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Holiday', holidaySchema)