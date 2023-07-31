"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import classes from "../../../styles/Itinerary.module.css";
import TopNavigation from "../../../Components/Itinerary/TopNavigation";
import MapItinerary from "../../../Components/Itinerary/MapItinerary";
import Restaurants from "../../../Components/Itinerary/Restaurants";
import useItineraryActivities from "../../../Hook/amadeus/useItineraryAcitivities";

const Itinerary = () => {
  const router = useParams();
  const { id } = router;
  const { data } = useItineraryActivities(id);
  const { itinerary, activities } = data;
  const [searchTerms, setSearchTerm] = useState([]);
  const handleChange = (name) => (event) => {
    // setValues({ ...values, [name]: event.target.value });
  };
  console.log(data);

  useEffect(() => {
    if (itinerary.from.coords) {
      const route = [[itinerary.from?.coords.lat, itinerary.from?.coords.lon]];
      if (itinerary.stops.length > 0) {
        itinerary.stops.map((stop) => {
          route.push([stop.coords.lat, stop.coords.lon]);
        });
      }
      route.push([itinerary.to?.coords.lat, itinerary.to?.coords.lon]);
      console.log(route);
      setSearchTerm([...route]);
    }
  }, [data]);
  console.log(searchTerms);

  return (
    <div className={classes.container}>
      <TopNavigation values={itinerary} handleChange={handleChange} />
      <div className={classes.box}>
        <div className={classes.left}>
          <MapItinerary searchTerm={searchTerms} />
        </div>
        <div className={classes.right}>
          <Restaurants data={activities} />
        </div>
      </div>
    </div>
  );
};

export default Itinerary;

const RestaurantsData = [
  {
    id: "1",
    image: "/bedroom.jpg",
    name: "Heistel Delhi",
    rating: "3",
    loaction: "South Delhi, New Delhi and NCR - 11.1km to center",
    popular: "6 hours ago",
    creditCard: "true",
    reviews: "Very Good",
    reviewsCount: "814 members",
    price: "$2240",
  },
  {
    id: "2",
    image: "/bedroom.jpg",
    name: "FedHotal PrimeStage",
    rating: "2",
    loaction: "South Delhi, New Delhi and NCR - 9,8km to center",
    popular: "12 hours ago",
    creditCard: "false",
    reviews: "Excellent",
    reviewsCount: "612 members",
    price: "$200",
  },
  {
    id: "3",
    image: "/bedroom.jpg",
    name: "Place Hotal Delhi",
    rating: "4",
    loaction: "South Delhi, New Delhi and NCR - 5.5km to center",
    popular: "1 day ago",
    creditCard: "true",
    reviews: "Good",
    reviewsCount: "514 members",
    price: "$240",
  },
];
