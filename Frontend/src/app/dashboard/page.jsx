"use client";
import React, { useState, useEffect } from "react";
import classes from "../../styles/Dashboard.module.css";
import { useLocationLocalStorage } from "../../Hook/useLocationLocalStorage";
import Profile from "../../Components/Dashboard/Profile";
import Itineraries from "../../Components/Dashboard/Itineraries";
import ReviewsInput from "../../Components/Reviews/ReviewInput";
import ReviewsItem from "../../Components/Reviews/ReviewItem";

const getProfile = async () => {
  try {
    const { fetchPersonalDetails } = useLocationLocalStorage();
    const { id } = fetchPersonalDetails();
    if (!id) return;
    const url = `http://localhost:8080/user/get-profile/${id}`;

    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) return result.response;
  } catch (err) {
    console.log(err);
  }
};

const Dashboard = () => {
  const [itineraries, setItineraries] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { getUser, fetchPersonalDetails } = useLocationLocalStorage();
  const user = getUser();
  console.log(user);
  const userid = fetchPersonalDetails().id;
  useEffect(() => {
    const run = async () => {
      const data = await getProfile();
      if (data) setItineraries(data);
    };
    run();
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const callFunction = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/reviews/${userid}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const responsedata = await response.json();
        setData(responsedata.response);
      } catch (err) {
        console.log(err.message);
      }
    };
    callFunction();
  }, []);
  const setDataInput = (data) => {
    setData((prev) => [...prev, data]);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes["page-heading"]}>Dashboard</h1>
      <div className={classes["dashboard-container"]}>
        <div className={classes.sidebar}>
          <div
            className={`${classes["sidebar-item"]} ${
              !toggle && classes.active
            }`}
            onClick={() => setToggle(false)}
          >
            Profile
          </div>
          <div
            className={`${classes["sidebar-item"]} ${toggle && classes.active}`}
            onClick={() => setToggle(true)}
          >
            Itineraries
          </div>
        </div>
        <div className={classes.main}>
          {toggle ? (
            <Itineraries itineraries={itineraries} />
          ) : (
            <Profile user={user} />
          )}
        </div>
      </div>
      <div className={classes.reviewsInput}>
        <div className={classes.headingReview}>Reviews</div>
        <div className={classes.box}>
          {data.map((people, index) => (
            <ReviewsItem key={index} data={people} />
          ))}
        </div>
        <ReviewsInput setDataInput={setDataInput} />
      </div>
    </div>
  );
};

export default Dashboard;

// const html = ({itineraries.map((itinerary) => {
//           return (
//             <div className={classes.itinerary} key={itinerary._id}>
//               <div className={classes.itineraryHeading}>
//                 {itinerary.itineraryName}
//               </div>
//               <div className={classes.itineraryDetails}>
//                 <div className={classes.itineraryDetailsItem}>
//                   <div className={classes.itineraryDetailsItemHeading}>
//                     From
//                   </div>
//                   <div className={classes.itineraryDetailsItemContent}>
//                     {itinerary.from.name}
//                   </div>
//                 </div>
//                 <div className={classes.itineraryDetailsItem}>
//                   <div className={classes.itineraryDetailsItemHeading}>To</div>
//                   <div className={classes.itineraryDetailsItemContent}>
//                     {itinerary.to.name}
//                   </div>
//                 </div>
//                 <div className={classes.itineraryDetailsItem}>
//                   <div className={classes.itineraryDetailsItemHeading}>
//                     Date From
//                   </div>
//                   <div className={classes.itineraryDetailsItemContent}>
//                     {itinerary.dateFrom}
//                   </div>
//                 </div>
//                 <div className={classes.itineraryDetailsItem}>
//                   <div className={classes.itineraryDetailsItemHeading}>
//                     Date To
//                   </div>
//                   <div className={classes.itineraryDetailsItemContent}>
//                     {itinerary.dateTo}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })})
