import React from "react";
import SvgStarColor from "../../../public/SvgStarColor";
import SvgStarWhite from "../../../public/SvgStarWhite";
import classes from "../../styles/Reviews.module.css";

const Star = ({ index }) => {
  const newIndex = Math.trunc(index);
  const maxStars = 5;
  const coloredStars = Math.min(newIndex, maxStars);
  const whiteStars = Math.max(maxStars - newIndex, 0);
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
