import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    seat: { type: String, match: /[A-F][1-9]\d?/ },
    price: { type: Number, min: 0 },
  },
  {
    timestamps: true,
  }
);

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
        const d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        console.log(d);
        return d;
      },
    },
    ticket: [ticketSchema],
    allMeals: [{ type: Schema.Types.ObjectId, ref: "Meal" }],
  },

  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightScehma);

export { Flight };
