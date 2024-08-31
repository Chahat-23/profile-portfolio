import React from "react";
import "./ShowMoreButton.css"; // Add any specific styles you need

const ShowMoreButton = ({ onClick }) => {
  return (
    <button className="show-more-button" onClick={onClick}>
      Show More
    </button>
  );
};

export default ShowMoreButton;
