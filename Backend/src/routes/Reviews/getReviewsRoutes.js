const getReviews = require("../../controllers/Reviews/getReviews");

module.exports = getReviewsRoutes = {
  path: "/reviews",
  method: "get",
  handler: async (req, res) => {
    try {
      const response = await getReviews();
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
