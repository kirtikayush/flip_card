import React from "react";
import "./FlipCard.css";

const FlipCard = ({
  width = "300px",
  height = "300px",
  frontContent = "front side",
  backContent = "back side",

  cardFrontColor = "black",
  cardBackColor = "black",
  frontTextColor = "white",
  backTextColor = "white",
  frontTextSize = "1rem",
  backTextSize = "1rem",
  borderRadius = "20px",
}) => {
  const style = {
    width,
    height,
    "--front-background": cardFrontColor,
    "--back-background": cardBackColor,
    "--front-text-color": frontTextColor,
    "--back-text-color": backTextColor,
    "--front-text-size": frontTextSize,
    "--back-text-size": backTextSize,
    "--border-radius": borderRadius,
  };
  return (
    <div className="card" style={style}>
      <div className="inner">
        <div className="card-front">{frontContent}</div>
        <div className="card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
