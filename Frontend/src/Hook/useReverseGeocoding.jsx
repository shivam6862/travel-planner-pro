import { useState, useEffect } from "react";
const BASE_URL = `https://api.maptiler.com/geocoding/{longitude},{latitude}.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}&limit=1`;

const useReverseGeocoding = (setValues) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const reverseGeocoding = async (latitude, longitude) => {
    try {
      setLoading(true);
      console.log("1");
      const response = await fetch(
        BASE_URL.replace("{longitude}", longitude).replace(
          "{latitude}",
          latitude
        )
      );
      const data = await response.json();
      console.log(data);
      setValues((prev) => ({
        ...prev,
        from: {
          name: data.features[0].place_name_en,
          coords: {
            lat: data.features[0].geometry.coordinates[0],
            lon: data.features[0].geometry.coordinates[1],
          },
        },
      }));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { error, loading, reverseGeocoding };
};

export default useReverseGeocoding;
