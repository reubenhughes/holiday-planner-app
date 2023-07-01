const express = require('express')

const router = express.Router()

// GET all holidays
router.get('/', (req, res) => {
    res.json({mssg: "Get all holidays"})
})

// GET one holiday
router.get('/:id', (req, res) => {
    res.json({mssg: "Get one holiday"})
})

module.exports = router