const getItinerary = require("../../controllers/itinerary/getItinerary");

module.exports = getItineraryRoute = {
  path: "/user/get-itinerary/:userid/:itineraryId",
  method: "get",
  handler: async (req, res) => {
    try {
      const { userid, itineraryId } = req.params;
      console.log(itineraryId);
      const response = await getItinerary(userid, itineraryId);
      return res.status(200).send({
        message: "itinerary found!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "itinerary failed to save!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
