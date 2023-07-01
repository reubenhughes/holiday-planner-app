const express = require('express')
const Holiday = require('../models/holidayModel')

const router = express.Router()

// GET all holidays
router.get('/', (req, res) => {
    res.json({mssg: 'GET all holidays'})
})

// GET one holiday
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET one holiday'})
})

// POST a new holiday
router.post('/', async (req, res) => {
    const {title, days} = req.body

    try {
        const holiday = await Holiday.create({title, days})
        res.status(200).json(holiday)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'POST a new holiday'})
})

module.exports = router