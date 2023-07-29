const getUserReviews = require("../../controllers/Reviews/getUserReviews");

module.exports = getUserReviewsRoutes = {
  path: "/reviews/:userid",
  method: "get",
  handler: async (req, res) => {
    try {
      const { userid } = req.params;
      const response = await getUserReviews(userid);
      return res.status(200).send({
        message: "Reviews Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Reviews Not Found!",
        response: err.message,
      });
    }
  },
};
