"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import classes from "../../../styles/Itinerary.module.css";
import TopNavigation from "../../../components/Itinerary/TopNavigation";
import MapItinerary from "../../../components/Itinerary/MapItinerary";
import Restaurants from "../../../components/Itinerary/Restaurants";
import { useLocationLocalStorage } from "../../../Hook/useLocationLocalStorage";
import useHotels from "../../../Hook/amadeus/useHotels";

const getItinerary = async (itineraryId) => {
  try {
    const { fetchPersonalDetails } = useLocationLocalStorage();
    const { id } = fetchPersonalDetails();
    const response = await fetch(
      `http://localhost:8080/user/get-itinerary/${id}/${itineraryId}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const Itinerary = () => {
  const [values, setValues] = useState({
    from: { name: "Delhi" },
    to: { name: "Roorkee" },
    dateFrom: "30/07/2023",
    dateTo: "04/08/2023",
    people: "5 people",
  });
  const [searchTerms, setSearchTerm] = useState([]);
  console.log(values);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const { hotels, getData } = useHotels();
  const router = useParams();
  const { id } = router;
  // const itinerary = await getItinerary(id);
  // console.log(itinerary);
  useEffect(() => {
    const run = async () => {
      const data = await getItinerary(id);
      console.log(data);
      setValues({ ...data?.response[0], people: "5 people" });
      getData(data?.response[0].to.coords.lat, data?.response[0].to.coords.lon);
    };

    run();
  }, [id]);
  useEffect(() => {
    if (hotels.length > 0) {
      const searches = hotels.map((hotel) => [
        hotel.geoCode.latitude,
        hotel.geoCode.longitude,
      ]);
      setSearchTerm([...searches]);
    }
  }, [hotels]);
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

  return (
    <div className={classes.container}>
      <TopNavigation values={values} handleChange={handleChange} />
      <div className={classes.box}>
        <div className={classes.left}>
          <MapItinerary searchTerm={searchTerms} />
        </div>
        <div className={classes.right}>
          <Restaurants data={hotels} />
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
