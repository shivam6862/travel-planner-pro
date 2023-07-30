import React from "react";
import classes from "../../styles/Itinerary.module.css";

const TopNavigation = ({ values, handleChange }) => {
  return (
    <div className={classes.containerTopNavigation}>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.from.name}
          onChange={handleChange("from")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.to.name}
          onChange={handleChange("to")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.dateFrom}
          onChange={handleChange("dateFrom")}
        />
      </div>
      <div className={classes.topNavigationInputDiv}>
        <input
          type="text"
          value={values.dateTo}
          onChange={handleChange("dateTo")}
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
