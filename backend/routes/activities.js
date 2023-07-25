const express = require("express");
const {
  getActivity,
  createActivity,
} = require("../controllers/activityController");

const router = express.Router();

// GET activity
router.get("/:id", getActivity);

// POST a new activity
router.post("/", createActivity);

module.exports = router;
