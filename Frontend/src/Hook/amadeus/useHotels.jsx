import { useState } from "react";
const BASE_URL =
  "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=41.397158&longitude=2.160873&radius=5&radiusUnit=KM&hotelSource=ALL";

const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const getData = async (lat, lon) => {
    try {
      console.log(process.env.NEXT_PUBLIC_AMADEUS_ACCESS_TOKEN);
      const url = `https://test.api.amadeus.com/v1/shopping/activities?latitude=${lat}&longitude=${lon}&radius=10`;
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer " + process.env.NEXT_PUBLIC_AMADEUS_ACCESS_TOKEN,
        },
      });
      const data = await response.json();
      console.log(data);
      const filteredData = data.data.map((activity) => ({
        name: activity.name,
        description: activity.shortDescription,
        image: activity.pictures[0],
        price: Math.trunc(Math.random() * 1000 + 1000),
        minDuration: activity.minimumDuration,
        geoCode: activity.geoCode,
        bookingLink: activity.bookingLink,
        type: activity.type,
      }));
      setHotels(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  return { hotels, getData };
};

export default useHotels;
