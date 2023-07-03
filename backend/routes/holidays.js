const express = require('express')
const Holiday = require('../models/holidayModel')
const {
    getHolidays,
    getHoliday,
    getTravel,
    createHoliday,
    deleteHoliday,
    updateHoliday,
} = require('../controllers/holidayController')

const router = express.Router()

// GET all holidays
router.get('/', getHolidays)

// GET a single holiday
router.get('/:id', getHoliday)

// GET travel
router.get('/:id/travel/:id', getTravel)

// POST a new holiday
router.post('/', createHoliday)

// DELETE a holiday
router.delete('/:id', deleteHoliday)

// UPDATE a holiday
router.patch('/:id', updateHoliday)

module.exports = router