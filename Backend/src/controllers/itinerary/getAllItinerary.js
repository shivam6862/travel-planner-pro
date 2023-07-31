const Itinerary = require("../../models/itinerary");

module.exports = getAllItinerary = async (userid) => {
  try {
    const itinerary = await Itinerary.find({
      userid: userid,
    });
    const data = itinerary.map((item) => {
      return {
        id: item.itinerary.id,
        from: item.itinerary.from,
        to: item.itinerary.to,
        dateFrom: new Date(item.itinerary.dateFrom).toLocaleDateString("en-US"),
        dateTo: new Date(item.itinerary.dateTo).toLocaleDateString("en-US"),
        stops: item.itinerary.stops,
      };
    });
    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
