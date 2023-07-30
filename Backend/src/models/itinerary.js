const mongoose = require("mongoose");
const { v4 } = require("uuid");
const { Schema } = mongoose;

const itinerarySchema = new Schema({
  userid: {
    type: String,
  },
  itinerary: {
    from: {
      name: String,
      coords: {
        lat: Number,
        lon: Number,
      },
    },
    to: {
      name: String,
      coords: {
        lat: Number,
        lon: Number,
      },
    },
    dateFrom: Date,
    dateTo: Date,
    id: { type: String, default: v4 },
    stops: Array,
  },
});

module.exports = mongoose.model("Itinerary", itinerarySchema);
