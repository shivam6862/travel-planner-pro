const Itinerary = require("../../models/itinerary");

module.exports = addItenerary = async (userid, data) => {
  try {
    const itinerary = new Itinerary({ userid: userid, itinerary: data });
    const response = await itinerary.save();

    return response.itinerary.id;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
