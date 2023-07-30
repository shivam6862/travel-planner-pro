import { useState, useEffect } from "react";

const BASE_URL = "https://nominatim.openstreetmap.org/search?";

const useAutoComplete = (query) => {
  const [autoComplete, setAutoComplete] = useState("");
  const params = {
    q: query,
    format: "json",
    addressdetails: 1,
    polygon_geojson: 0,
    limit: 5,
  };
  const queryString = new URLSearchParams(params);
  const getData = async () => {
    try {
      const url = `${BASE_URL}${queryString}`;
      const response = await fetch(url);

      const data = await response.json();
      setAutoComplete(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (query) getData();
  }, [query]);

  return { autoComplete };
};

export default useAutoComplete;
