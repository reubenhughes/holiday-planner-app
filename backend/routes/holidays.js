const express = require('express')
const Holiday = require('../models/holidayModel')
const {
    getHolidays,
    getHoliday,
    getTravel,
    createHoliday,
    createTravel,
    deleteHoliday,
    updateHoliday,
} = require('../controllers/holidayController')

const router = express.Router()

// GET all holidays
router.get('/', getHolidays)

// GET a single holiday
router.get('/:id', getHoliday)

// GET travel
router.get('/travel/:id', getTravel)

// POST a new holiday
router.post('/', createHoliday)

// POST a new travel
router.post('/travel', createTravel)

// DELETE a holiday
router.delete('/:id', deleteHoliday)

// UPDATE a holiday
router.patch('/:id', updateHoliday)

module.exports = router