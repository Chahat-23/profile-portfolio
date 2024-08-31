import React from "react";
import "./EndPopup.css"; // Add any specific styles you need

const EndPopup = ({ onClose }) => {
  return (
    <div className="end-popup">
      <div className="popup-content">
        <div className="popupText">The End,<br/> Thanks for Checking Out!</div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EndPopup;
