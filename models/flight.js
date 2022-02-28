import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightScehma = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
});
