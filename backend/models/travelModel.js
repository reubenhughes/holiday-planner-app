const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const travelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Travel", travelSchema);
