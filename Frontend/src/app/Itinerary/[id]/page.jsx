"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import classes from "../../../styles/Itinerary.module.css";
import TopNavigation from "../../../components/Itinerary/TopNavigation";
import MapItinerary from "../../../components/Itinerary/MapItinerary";
import Restaurants from "../../../components/Itinerary/Restaurants";

const Itinerary = () => {
  const router = useParams();
  const { id } = router;
  const [values, setValues] = useState({
    startPlace: "Delhi",
    endPlace: "Roorkee",
    startingDate: "30/07/2023",
    endDate: "04/08/2023",
    people: "5 people",
  });
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
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={classes.container}>
      <TopNavigation values={values} handleChange={handleChange} />
      <div className={classes.box}>
        <div className={classes.left}>
          <MapItinerary />
        </div>
        <div className={classes.right}>
          <Restaurants data={RestaurantsData} />
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
