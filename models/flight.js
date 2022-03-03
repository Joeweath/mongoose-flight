import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightScehma = new Schema(
  {
    airline: {
      type: String,
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
      required: true,
    },
    departs: {
      type: Date,
      default: function () {
        return Date.now() + 365 * 24 * 60 * 60000;
      },
    },
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightScehma);

export { Flight };
