const express = require("express");
const { getTravel, createTravel } = require("../controllers/travelController");

const router = express.Router();

// GET travel
router.get("/:id", getTravel);

// POST a new travel
router.post("/", createTravel);

module.exports = router;
