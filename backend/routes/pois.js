const express = require("express");
const { getPOI, createPOI } = require("../controllers/poiController");

const router = express.Router();

// GET POI
router.get("/:id", getPOI);

// POST a new POI
router.post("/", createPOI);

module.exports = router;
