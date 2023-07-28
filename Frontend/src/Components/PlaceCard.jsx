import React from "react";
import Image from "next/image";
import classes from "../styles/PlaceCard.module.css";
import Button from "../Components/Button";

const PlaceCard = ({ place }) => {
  return (
    <div className={classes.container}>
      <div className={classes.top_placeCard}>
        <Image
          src={`/${place.image}`}
          alt={place.location}
          width="400"
          height="250"
        />
        <div className={classes.top_bottom_location}>{place.location}</div>
      </div>
      <div className={classes.bottom_card}>
        <div className={classes.bottom_card_first}>
          <h3>{place.about}</h3>
          <p>{place.description}</p>
        </div>
        <div className={classes.bottom_card_second}>
          <div className={classes.bottom_card_second_left}>
            <h2>Duration</h2>
            {place.duration}
          </div>
          <div className={classes.bottom_card_second_right}>
            <h2>Group size</h2>
            {place.size}
          </div>
        </div>
        <div className={classes.bottom_card_third}>
          <div className={classes.bottom_card_third_left}>{place.cost}</div>

          <div className={classes.bottom_card_third_right}>
            <Button name="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
