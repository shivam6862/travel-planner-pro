"use client";
import React, { useEffect, useState } from "react";
import ReviewsItem from "./ReviewItem";
import ReviewsInput from "./ReviewInput";

import classes from "../../styles/Reviews.module.css";

const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callFunction = async () => {
      try {
        const response = await fetch(`http://localhost:8080/reviews`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
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
      <div className={classes.heading}>Reviews</div>
      <div className={classes.box}>
        {data.map((people) => (
          <ReviewsItem key={people.id} data={people} />
        ))}
        <ReviewsInput setDataInput={setDataInput} />
      </div>
    </div>
  );
};

export default Reviews;
