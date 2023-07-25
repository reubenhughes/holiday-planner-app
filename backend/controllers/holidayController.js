const Holiday = require("../models/holidayModel");
const mongoose = require("mongoose");

// get all holidays
const getHolidays = async (req, res) => {
  const holidays = await Holiday.find({}).sort({ departureDate: 1 });

  res.status(200).json(holidays);
};

// get a single holiday
const getHoliday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such holiday" });
  }

  const holiday = await Holiday.findById(id);

  if (!holiday) {
    return res.status(404).json({ error: "No such holiday" });
  }

  res.status(200).json(holiday);
};

// create new holiday
const createHoliday = async (req, res) => {
  const {
    title,
    description,
    departureDate,
    returnDate,
    travelList,
    accommodationList,
    activityList,
    poiList,
    taskList,
  } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!departureDate) {
    emptyFields.push("departureDate");
  }
  if (!returnDate) {
    emptyFields.push("returnDate");
  }
  if (!travelList) {
    emptyFields.push("travelList");
  }
  if (!accommodationList) {
    emptyFields.push("accommodationList");
  }
  if (!activityList) {
    emptyFields.push("activityList");
  }
  if (!poiList) {
    emptyFields.push("poiList");
  }
  if (!taskList) {
    emptyFields.push("taskList");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const holiday = await Holiday.create({
      title,
      description,
      departureDate,
      returnDate,
      travelList,
      accommodationList,
      activityList,
      poiList,
      taskList,
    });
    res.status(200).json(holiday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a holiday
const deleteHoliday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such holiday" });
  }

  const holiday = await Holiday.findOneAndDelete({ _id: id });

  if (!holiday) {
    return res.status(404).json({ error: "No such holiday" });
  }

  res.status(200).json(holiday);
};

// update a holiday
const updateHoliday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such holiday" });
  }

  const holiday = await Holiday.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!holiday) {
    return res.status(400).json({ error: "No such holiday" });
  }

  res.status(200).json(holiday);
};

module.exports = {
  getHolidays,
  getHoliday,
  createHoliday,
  deleteHoliday,
  updateHoliday,
};
