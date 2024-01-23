const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    service: {
      type: String,
    },
    solo: {
      type: Number,
      default: 123,
    },
    double: {
      type: Number,
      default: 123,
    },
    kingSize: {
      type: Number,
      default: 123,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
