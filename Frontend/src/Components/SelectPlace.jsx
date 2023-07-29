"use client";
import React, { useState } from "react";
import Button from "./Button";
import { Dropdown } from "./Dropdown";
import classes from "../styles/SelectPlace.module.css";
import useAutoComplete from "../Hook/useAutoComplete";
import marker from "../../public/marker-icon.png";
import Image from "next/image";
import useLocation from "../Hook/useLocation";
import useReverseGeocoding from "../Hook/useReverseGeocoding";

const SelectPlace = ({ setSearchTerm }) => {
  const culturalData = ["a", "b", "c", "d"];
  const [values, setValues] = useState({
    from: "",
    to: "",
    date: "",
    cultural: "",
  });
  const [showTo, setShowTo] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const { getLocation } = useLocation(setSearchTerm);
  const { error, isLoading, reverseGeocoding } = useReverseGeocoding(setValues);

  console.log(values.place);
  const autoCompleteTo = useAutoComplete(values.to);
  const autoCompleteFrom = useAutoComplete(values.from);
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

        {/* <div className={classes.searchLocations}>
          <div
            className={classes.searchLocationBox}
            onClick={() => {
              getLocation();
            }}
          >
            <Image
              className={classes.marker}
              src={marker}
              width={30}
              height={30}
            />
            <div className={classes.searchLocation}>Use Current Location</div>
          </div>
        </div> */}
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
      <div className={classes.fullWidth}>
        <Dropdown
          value={values.cultural}
          onChange={handleChange("cultural")}
          option={culturalData}
        />
      </div>
      <div className={classes.buttons}>
        <Button name={"Read more"} />
      </div>
    </div>
  );
};
export default SelectPlace;
