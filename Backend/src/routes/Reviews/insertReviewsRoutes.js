const insertReviews = require("../../controllers/Reviews/insertReviews");

module.exports = insertReviewsRoutes = {
  path: "/user/reviews/:userid",
  method: "post",
  handler: async (req, res) => {
    try {
      const { userid } = req.params;
      const data = req.body;
      const response = await insertReviews(userid, data);
      return res.status(200).send({
        message: "Reviews saved!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Reviews failed to save!",
        response: err.message,
        type: "Error",
      });
    }
  },
};
