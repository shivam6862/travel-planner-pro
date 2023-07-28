"use client";
import React, { useState } from "react";
import Button from "./Button";
import { Dropdown } from "./Dropdown";
import classes from "../styles/SelectPlace.module.css";

const SelectPlace = () => {
  const culturalData = ["a", "b", "c", "d"];
  const [values, setValues] = useState({
    place: "",
    date: "",
    cultural: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.container}>
      <div className={classes.input}>
        <input
          placeholder="Where To ?"
          type={"text"}
          value={values.place}
          onChange={handleChange("place")}
        />
      </div>
      <div className={classes.input}>
        <input
          placeholder="Date"
          type={"date"}
          value={values.date}
          onChange={handleChange("date")}
        />
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
