const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Memorial = new Schema(
  {
    portrait: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    country: {
      type: String,
    },
    flag: {
      type: String,
    },
    dateBirth: {
      type: String,
    },
    dateDie: {
      type: String,
    },
    lifeSummary: {
      type: String,
    },
    file: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Memorial List",
  }
);

module.exports = mongoose.model("Memorial", Memorial);
