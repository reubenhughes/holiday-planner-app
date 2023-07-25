const express = require("express");
const { getTask, createTask } = require("../controllers/taskController");

const router = express.Router();

// GET task
router.get("/:id", getTask);

// POST a new task
router.post("/", createTask);

module.exports = router;
