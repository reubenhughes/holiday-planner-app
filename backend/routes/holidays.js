const express = require('express')
const {
    getHolidays,
    getHoliday,
    createHoliday,
    deleteHoliday,
    updateHoliday,
    getTravel,
    createTravel
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

// UPDATE a holiday
router.patch('/:id', updateHoliday)


// GET travel
router.get('/travel/:id', getTravel)

// POST a new travel
router.post('/travel', createTravel)

module.exports = router