const Travel = require('../models/travelModel')
const mongoose = require('mongoose')

// get a single travel document
const getTravel = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such travel'})
    }

    const travel = await Travel.findById(id)

    if (!travel) {
        return res.status(404).json({error: 'No such travel'})
    }

    res.status(200).json(travel)
}

// create new travel
const createTravel = async (req, res) => {
    const {title, type} = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!type) {
        emptyFields.push('type')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    // add doc to db
    try {
        const travel = await Travel.create({title, type})
        res.status(200).json(travel)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getTravel,
    createTravel
}