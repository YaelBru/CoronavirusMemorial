const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tribute = new Schema(
  {
    personId: {
      type: String,
    },
    initiator: {
      type: String,
    },
    country: {
      type: String,
    },
    flag: {
      type: String,
    },
    text: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Tributes List",
  }
);

module.exports = mongoose.model("Tribute", Tribute);
