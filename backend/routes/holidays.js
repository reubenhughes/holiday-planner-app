const express = require("express");
const {
  getHolidays,
  getHoliday,
  createHoliday,
  deleteHoliday,
  updateHoliday,
} = require("../controllers/holidayController");

const router = express.Router();

// GET all holidays
router.get("/", getHolidays);

// GET a single holiday
router.get("/:id", getHoliday);

// POST a new holiday
router.post("/", createHoliday);

// DELETE a holiday
router.delete("/:id", deleteHoliday);

// UPDATE a holiday
router.patch("/:id", updateHoliday);

module.exports = router;
