const mongoose = require("mongoose");
const v4 = require("uuid").v4;
const { Schema } = mongoose;

const itinerarySchema = new Schema({
  userid: {
    type: String,
  },
  itinerary: {
    from: String,
    to: String,
    dateFrom: Date,
    dateTo: Date,
    id: { type: String, default: v4() },
    stops: Array,
  },
});

module.exports = mongoose.model("Itinerary", itinerarySchema);
