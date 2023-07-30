import React from "react";
import classes from "../../styles/Itinerary.module.css";
import Map from "../Map";
import Button from "../Button";

const MapItinerary = () => {
  return (
    <div className={classes.containerMap}>
      <div className={classes.buttonsPart}>
        <div className={classes.buttons}>
          <Button name={"Hotal"} />
        </div>
        <div className={classes.buttons}>
          <Button name={"Place"} />
        </div>
      </div>
      <Map searchTerm={[]} />
    </div>
  );
};

export default MapItinerary;
