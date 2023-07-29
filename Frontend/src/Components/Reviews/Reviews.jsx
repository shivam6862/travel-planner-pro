import React from "react";
import ReviewsItem from "./ReviewItem";
import classes from "../../styles/Reviews.module.css";

const Reviews = () => {
  const data = [
    {
      id: "1",
      image: "Greece.jpg",
      star: "4",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
      date: "29/7/2023 via Google",
    },
    {
      id: "2",
      image: "Greece.jpg",
      star: "3",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
      date: "29/7/2023 via Google",
    },
    {
      id: "3",
      image: "Greece.jpg",
      star: "2",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
      date: "29/7/2023 via Google",
    },
    {
      id: "4",
      image: "Greece.jpg",
      star: "4",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
      date: "29/7/2023 via Google",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Reviews</div>
      <div className={classes.box}>
        {data.map((people) => (
          <ReviewsItem key={people.id} data={people} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
