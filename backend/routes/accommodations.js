const express = require('express')
const {
    getAccommodation,
    createAccommodation,
} = require('../controllers/accommodationController')

const router = express.Router()

// GET accommodation
router.get('/:id', getAccommodation)

// POST a new accommodation
router.post('/', createAccommodation)

module.exports = router