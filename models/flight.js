import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightScehma = new Schema({
  airline: {
    String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    type: String,
    default: "DEN",
  },
  flightNo: {
    Number,
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return Date.now() + 365 * 24 * 60 * 60000;
    },
  },
});

const Flight = mongoose.model("Flight", flightScehma);

export { Flight };
