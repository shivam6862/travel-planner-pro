"use client";
import React, { useState, useEffect } from "react";
import classes from "../../styles/Dashboard.module.css";
import { useLocationLocalStorage } from "../../Hook/useLocationLocalStorage";
import Profile from "../../components/Dashboard/Profile";
import Itineraries from "../../components/Dashboard/Itineraries";

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
  const { getUser } = useLocationLocalStorage();
  const user = getUser();
  console.log(user);
  useEffect(() => {
    const run = async () => {
      const data = await getProfile();
      if (data) setItineraries(data);
    };
    run();
  }, []);
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
