const Reviews = require("../../models/reviews");

module.exports = getUserReviews = async (userid) => {
  try {
    const review = await Reviews.find({ userid: userid });
    const data = review.map((item) => {
      return {
        id: item.review.id,
        image: item.review.image,
        star: item.review.star,
        description: item.review.description,
        date:
          new Date(item.review.date).toLocaleDateString("en-US", {
            timeZone: "UTC",
          }) + " via Google",
      };
    });
    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
