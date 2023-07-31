const getAllItinerary = require("../../controllers/itinerary/getAllItinerary");

module.exports = getAllItineraryRoute = {
  path: "/user/get-profile/:userid",
  method: "get",
  handler: async (req, res) => {
    try {
      const { userid } = req.params;
      const response = await getAllItinerary(userid);
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
