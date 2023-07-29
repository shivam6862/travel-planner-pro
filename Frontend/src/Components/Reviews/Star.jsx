import React from "react";
import SvgStarColor from "../../../Public/SvgStarColor";
import SvgStarWhite from "../../../Public/SvgStarWhite";
import classes from "../../styles/Reviews.module.css";

const Star = ({ index }) => {
  const maxStars = 5;
  const coloredStars = Math.min(index, maxStars);
  const whiteStars = Math.max(maxStars - index, 0);
  const coloredStarArray = Array(coloredStars)
    .fill()
    .map((_, i) => (
      <div style={{ display: "inline" }} key={`colored-${i}`}>
        <SvgStarColor />
      </div>
    ));
  const whiteStarArray = Array(whiteStars)
    .fill()
    .map((_, i) => (
      <div style={{ display: "inline" }} key={`white-${i}`}>
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

export default Star;
