const POI = require("../models/poiModel");
const mongoose = require("mongoose");

// get a single POI document
const getPOI = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such POI" });
  }

  const poi = await POI.findById(id);

  if (!poi) {
    return res.status(404).json({ error: "No such accommodation" });
  }

  res.status(200).json(poi);
};

// create new POI document
const createPOI = async (req, res) => {
  const { name, type, location, notes } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!type) {
    emptyFields.push("type");
  }
  if (!location) {
    emptyFields.push("location");
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
    const poi = await POI.create({ name, type, location, notes });
    res.status(200).json(poi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPOI,
  createPOI,
};
