import React from "react";
import Image from "next/image";
import classes from "../../styles/VacationItem.module.css";

const VacationItem = ({ vacation }) => {
  return (
    <div className={classes.containerItem}>
      <div className={classes.top_vacationCard}>
        <Image
          src={`/${vacation.image}`}
          alt={vacation.location}
          width="400"
          height="250"
        />
      </div>
      <div className={classes.top_bottom_location}>
        <div className={classes.button}>{vacation.location}</div>
      </div>
    </div>
  );
};

export default VacationItem;
