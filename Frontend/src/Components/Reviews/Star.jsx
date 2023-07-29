import React from "react";
import SvgStarColor from "../../../Public/SvgStarColor";
import SvgStarWhite from "../../../Public/SvgStarWhite";

const Star = ({ index }) => {
  const maxStars = 5;
  const coloredStars = Math.min(index, maxStars);
  const whiteStars = Math.max(maxStars - index, 0);
  const coloredStarArray = Array(coloredStars).fill(<SvgStarColor />);
  const whiteStarArray = Array(whiteStars).fill(<SvgStarWhite />);
  return (
    <div>
      <div>
        {coloredStarArray}
        {whiteStarArray}
      </div>
    </div>
  );
};

export default Star;
