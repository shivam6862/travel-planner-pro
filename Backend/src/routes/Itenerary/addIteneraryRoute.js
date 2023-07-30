const addItinerary = require("../../controllers/itinerary/addItinerary");

module.exports = addItineraryRoute = {
  path: "/user/add-itinerary/:userid",
  method: "post",
  handler: async (req, res) => {
    try {
      const { userid } = req.params;
      const data = req.body;
      console.log(data);
      const response = await addItinerary(userid, data);
      return res.status(200).send({
        message: "itinerary added!",
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
