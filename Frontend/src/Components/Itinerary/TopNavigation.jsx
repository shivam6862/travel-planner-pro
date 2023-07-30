import React from "react";
import classes from "../../styles/Itinerary.module.css";

const TopNavigation = ({ values, handleChange }) => {
  return (
    <div className={classes.containerTopNavigation}>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.startPlace}
          onChange={handleChange("startPlace")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.endPlace}
          onChange={handleChange("endPlace")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.startingDate}
          onChange={handleChange("startingDate")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.endDate}
          onChange={handleChange("endDate")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.people}
          onChange={handleChange("people")}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
