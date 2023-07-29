import React from "react";
import SvgStarColor from "../../../Public/SvgStarColor";
import SvgStarWhite from "../../../Public/SvgStarWhite";
import classes from "../../styles/Reviews.module.css";

const StarReviews = ({ index, setCountStar }) => {
  const maxStars = 5;
  const coloredStarArray = Array(index)
    .fill()
    .map((_, i) => (
      <div
        style={{ display: "inline" }}
        onClick={() => {
          setCountStar(i);
        }}
        key={`colored-${i}`}
      >
        <SvgStarColor />
      </div>
    ));
  const whiteStarArray = Array(maxStars - index)
    .fill()
    .map((_, i) => (
      <div
        style={{ display: "inline" }}
        onClick={() => {
          setCountStar(index + i + 1);
        }}
        key={`white-${i}`}
      >
        <SvgStarWhite />
      </div>
    ));
  return (
    <div className={classes.containerStars}>
      {coloredStarArray}
      {whiteStarArray}
    </div>
  );
};

export default StarReviews;
