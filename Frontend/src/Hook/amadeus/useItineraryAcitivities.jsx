import { useEffect, useState } from "react";
import { useLocationLocalStorage } from "../useLocationLocalStorage";
const BASE_URL =
  "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=41.397158&longitude=2.160873&radius=5&radiusUnit=KM&hotelSource=ALL";

const useItineraryActivities = (itineraryId) => {
  const [data, setData] = useState({
    itinerary: {
      from: { name: "Delhi" },
      to: { name: "Roorkee" },
      dateFrom: "30/07/2023",
      dateTo: "04/08/2023",
      people: "5 people",
    },
    activities: [],
  });
  const { fetchPersonalDetails } = useLocationLocalStorage();

  const getData = async () => {
    try {
      const { id } = fetchPersonalDetails();
      const response = await fetch(
        `http://localhost:8080/user/get-itinerary-activities/${id}/${itineraryId}`
      );
      const data = await response.json();
      if (response.ok) setData(data.response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [itineraryId]);

  return { data };
};

export default useItineraryActivities;
