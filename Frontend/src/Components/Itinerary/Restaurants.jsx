import React from "react";
import classes from "../../styles/Itinerary.module.css";
import RestaurantsItem from "./RestaurantsItem";

const Restaurants = ({ data }) => {
  return (
    <div className={classes.containerRestaurants}>
      {data.map((item) => (
        <RestaurantsItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Restaurants;
