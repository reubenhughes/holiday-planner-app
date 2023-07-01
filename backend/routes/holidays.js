const express = require('express')
const Holiday = require('../models/holidayModel')
const {
    getHolidays,
    getHoliday,
    createHoliday,
    deleteHoliday,
} = require('../controllers/holidayController')

const router = express.Router()

// GET all holidays
router.get('/', getHolidays)

// GET a single holiday
router.get('/:id', getHoliday)

// POST a new holiday
router.post('/', createHoliday)

// DELETE a holiday
router.delete('/:id', deleteHoliday)

module.exports = router