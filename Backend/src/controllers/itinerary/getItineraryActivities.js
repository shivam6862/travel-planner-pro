const getItinerary = require("./getItinerary");
const axios = require("axios");

module.exports = getItineraryActivities = async (
  userid,
  itineraryId,
  access_token
) => {
  try {
    const response = await getItinerary(userid, itineraryId);
    console.log(response);
    const url = `https://test.api.amadeus.com/v1/shopping/activities?latitude=${response?.to.coords.lat}&longitude=${response?.to.coords.lon}&radius=10`;
    // const activitiesResponse = await fetch(url, {
    //   headers: {
    //     Authorization: "Bearer " + access_token,
    //   },
    // });
    const activitiesResponse = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    const activities = activitiesResponse.data;
    const filteredData = activities.data.map((activity) => ({
      name: activity.name,
      description: activity.shortDescription,
      image: activity.pictures[0],
      price: Math.trunc(Math.random() * 1000 + 1000),
      minDuration: activity.minimumDuration,
      geoCode: activity.geoCode,
      bookingLink: activity.bookingLink,
      type: activity.type,
      rating: activity?.rating,
    }));

    return { itinerary: response, activities: filteredData };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
