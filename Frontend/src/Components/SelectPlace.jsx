"use client";
import React, { useState } from "react";
import Button from "./Button";
import classes from "../styles/SelectPlace.module.css";
import useAutoComplete from "../Hook/useAutoComplete";
import marker from "../../public/marker-icon.png";
import Image from "next/image";
import useLocation from "../Hook/useLocation";
import useReverseGeocoding from "../Hook/useReverseGeocoding";
import Stop from "./SelectPlace/Stop";
import { v4 } from "uuid";
import { useLocationLocalStorage } from "../Hook/useLocationLocalStorage";
import { useRouter } from "next/navigation";

const SelectPlace = ({ setSearchTerm }) => {
  const [values, setValues] = useState({
    from: "",
    to: "",
    dateFrom: "",
    dateTo: "",
  });
  console.log(values.dateFrom);
  const [arrayStop, setArrayStop] = useState([
    { id: v4(), value: "", new: true },
  ]);
  const [showTo, setShowTo] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const router = useRouter();
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const { getLocation } = useLocation(setSearchTerm);
  const { error, isLoading, reverseGeocoding } = useReverseGeocoding(setValues);

  const autoCompleteTo = useAutoComplete(values.to);
  const autoCompleteFrom = useAutoComplete(values.from);
  const addRoute = async () => {
    if (!values.from || !values.to || !values.dateFrom || !values.dateTo)
      return;
    try {
      const { id } = fetchPersonalDetails();
      const stops = arrayStop.map((stop) => stop.value);
      const itinerary = { ...values, stops: stops };
      const response = await fetch(
        `http://localhost:8080/user/add-itinerary/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itinerary),
        }
      );
      const result = await response.json();

      if (response.ok) router.push(`/itinerary/${result.response}`);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.input}>
        <input
          placeholder="From ?"
          value={values.from}
          onChange={handleChange("from")}
          type={"text"}
          onFocus={() => setShowFrom(true)}
        />
        <button
          className={classes.btn}
          onClick={async () => {
            const location = await getLocation();
            console.log(location);
            if (location) {
              setSearchTerm((prev) => [...prev, [location.lat, location.lon]]);
              await reverseGeocoding(location.lat, location.lon);
            }
          }}
        >
          Locate me
        </button>
        {showFrom && autoCompleteFrom.autoComplete.length > 0 && (
          <div className={classes.searchLocations}>
            {autoCompleteFrom.autoComplete.map((place, index) => (
              <div
                key={index}
                className={classes.searchLocationBox}
                onClick={() => {
                  setValues((prev) => ({
                    ...prev,
                    from: place.display_name,
                  }));
                  setSearchTerm((prev) => [...prev, [place.lat, place.lon]]);

                  setShowFrom(false);
                }}
              >
                <Image
                  className={classes.marker}
                  src={marker}
                  width={30}
                  height={30}
                />
                <div className={classes.searchLocation}>
                  {place.display_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.input}>
        <input
          placeholder="Where To ?"
          type={"text"}
          value={values.to}
          onChange={handleChange("to")}
          onFocus={() => setShowTo(true)}
        />
        {showTo && autoCompleteTo.autoComplete.length > 0 && (
          <div className={classes.searchLocations}>
            {autoCompleteTo.autoComplete.map((place, index) => (
              <div
                key={index}
                className={classes.searchLocationBox}
                onClick={() => {
                  setValues((prev) => ({
                    ...prev,
                    to: place.display_name,
                  }));
                  setSearchTerm((prev) => [...prev, [place.lat, place.lon]]);

                  setShowTo(false);
                }}
              >
                <Image
                  className={classes.marker}
                  src={marker}
                  width={30}
                  height={30}
                />
                <div className={classes.searchLocation}>
                  {place.display_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.input}>
        <input
          placeholder="Date ?"
          type={"date"}
          value={values.date}
          onChange={handleChange("dateFrom")}
        />
      </div>
      <div className={classes.input}>
        <input
          placeholder="Date ?"
          type={"date"}
          value={values.date}
          onChange={handleChange("dateTo")}
        />
      </div>
      <div className={classes.stops}>
        <Stop arrayStop={arrayStop} setArrayStop={setArrayStop} />
      </div>
      <div className={classes.buttons}>
        <Button name={"Add Route"} onClick={addRoute} />
      </div>
    </div>
  );
};
export default SelectPlace;
