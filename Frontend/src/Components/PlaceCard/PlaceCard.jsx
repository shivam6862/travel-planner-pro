import React from "react";
import PlaceCardItem from "./PlaceCardItem";
import classes from "../../styles/PlaceCard.module.css";

const PlaceCard = () => {
  const place = [
    {
      image: "Greece.jpg",
      location: "Greece",
      about: "Holiday Planners is a World Leading Online Tour Booking Platform",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
      duration: "5 days",
      size: "5+ people",
      cost: "$850",
      id: "dbkjfdsfnsdlknvlkdsnl",
    },
    {
      image: "Greece.jpg",
      location: "Greece",
      about: "Holiday Planners is a World Leading Online Tour Booking Platform",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
      duration: "5 days",
      size: "5+ people",
      cost: "$850",
      id: "dbkjfdsfnsdlknvlkdsnl",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Place </div>
      <div className={classes.box}>
        {place.map((item, index) => (
          <PlaceCardItem place={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PlaceCard;
