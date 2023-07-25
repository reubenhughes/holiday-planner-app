const Activity = require("../models/activityModel");
const mongoose = require("mongoose");

// get a single activity document
const getActivity = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such activity" });
  }

  const activity = await Activity.findById(id);

  if (!activity) {
    return res.status(404).json({ error: "No such activity" });
  }

  res.status(200).json(activity);
};

// create new activity document
const createActivity = async (req, res) => {
  const { name, description, dateTime, location, price, notes } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!dateTime) {
    emptyFields.push("dateTime");
  }
  if (!location) {
    emptyFields.push("location");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!notes) {
    emptyFields.push("notes");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const activity = await Activity.create({
      name,
      description,
      dateTime,
      location,
      price,
      notes,
    });
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivity,
  createActivity,
};
