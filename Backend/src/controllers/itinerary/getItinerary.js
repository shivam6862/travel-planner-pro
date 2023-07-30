const Itinerary = require("../../models/itinerary");

module.exports = getItinerary = async (userid, itineraryId) => {
  try {
    const itinerary = await Itinerary.find({
      userid: userid,
    });
    const data = itinerary
      .filter((item) => item.itinerary.id === itineraryId)
      .map((item) => {
        return {
          id: item.itinerary.id,
          from: item.itinerary.from,
          to: item.itinerary.to,
          dateFrom: new Date(item.itinerary.dateFrom).toLocaleDateString(
            "en-US"
          ),
          dateTo: new Date(item.itinerary.dateTo).toLocaleDateString("en-US"),
        };
      });
    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
