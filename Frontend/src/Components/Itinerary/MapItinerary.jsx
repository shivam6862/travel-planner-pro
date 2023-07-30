import React from "react";
import classes from "../../styles/Itinerary.module.css";
import Map from "../NewMap";
import Button from "../Button";

const MapItinerary = ({ searchTerm }) => {
  console.log(searchTerm);
  return (
    <div className={classes.containerMap}>
      <div className={classes.buttonsPart}>
        <div className={classes.buttons}>
          <Button name={"Activities"} />
        </div>
        <div className={classes.buttons}>
          <Button name={"Hotels"} />
        </div>
      </div>
      <Map searchTerm={searchTerm} showRoutes={false} />
    </div>
  );
};

export default MapItinerary;
