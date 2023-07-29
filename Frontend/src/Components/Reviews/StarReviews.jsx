import React from "react";
import SvgStarColor from "../../../Public/SvgStarColor";
import SvgStarWhite from "../../../Public/SvgStarWhite";
import classes from "../../styles/Reviews.module.css";

const StarReviews = ({ index, setCountStar }) => {
  const maxStars = 5;
  const coloredStars = Math.min(index, maxStars);
  const whiteStars = Math.max(maxStars - index, 0);
  const coloredStarArray = Array(coloredStars).fill(
    <div
      style={{ display: "inline" }}
      onClick={() => {
        setCountStar(index - 1);
      }}
    >
      <SvgStarColor />
    </div>
  );
  const whiteStarArray = Array(whiteStars).fill(
    <div
      style={{ display: "inline" }}
      onClick={() => {
        setCountStar(index + 1);
      }}
    >
      <SvgStarWhite />
    </div>
  );
  return (
    <div className={classes.containerStars}>
      {coloredStarArray}
      {whiteStarArray}
    </div>
  );
};

export default StarReviews;
