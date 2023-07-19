const Accommodation = require('../models/accommodationModel')
const mongoose = require('mongoose')

// get a single accommodation document
const getAccommodation = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such accommodation'})
    }

    const accommodation = await Accommodation.findById(id)

    if (!accommodation) {
        return res.status(404).json({error: 'No such accommodation'})
    }

    res.status(200).json(accommodation)
}

// create new accommodation document
const createAccommodation = async (req, res) => {
    const {name, type, checkin, checkout, price, notes} = req.body

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!type) {
        emptyFields.push('type')
    }
    if (!checkin) {
        emptyFields.push('checkin')
    }
    if (!checkout) {
        emptyFields.push('checkout')
    }
    if (!price) {
        emptyFields.push('price')
    }
    if (!notes) {
        emptyFields.push('notes')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    // add doc to db
    try {
        const accommodation = await Accommodation.create({name, type, checkin, checkout, price, notes})
        res.status(200).json(accommodation)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAccommodation,
    createAccommodation
}