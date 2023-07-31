const getItineraryDetails = require("../../controllers/itinerary/getItineraryActivities");

module.exports = getItineraryActivitiesRoute = {
  path: "/user/get-itinerary-activities/:userid/:itineraryId",
  method: "get",
  handler: async (req, res) => {
    try {
      const { userid, itineraryId } = req.params;
      const access_token = req.app.locals.access_token;
      console.log(access_token);
      const response = await getItineraryDetails(
        userid,
        itineraryId,
        access_token
      );
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
