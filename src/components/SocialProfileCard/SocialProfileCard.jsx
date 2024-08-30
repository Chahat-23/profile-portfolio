import React from "react";
import "./SocialProfileCard.css";
import profileImage from "../../assets/profileImage.jpg";

export default function SocialProfileCard() {
    
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="social-profile-card">
      <img src={profileImage} alt="profile-image" className="profile-image" />
      <div className="h1">Chahat Shrivastava</div>
      <div className="location">Bengaluru, India</div>
      <p>Frontend Developer with Web3 Curiosity</p>

      <div className="buttons">
        <button
          onClick={() =>
            handleButtonClick("https://vercel.com/chahat-23s-projects")
          }
        >
          Projects
        </button>
        <button
          onClick={() => handleButtonClick("https://github.com/Chahat-23")}
        >
          GitHub
        </button>
        <button
          onClick={() =>
            handleButtonClick(
              "https://www.linkedin.com/in/chahat-shrivastava-a67006185/"
            )
          }
        >
          LinkedIn
        </button>
        <button onClick={() => handleButtonClick("https://x.com/Chahat23S")}>
          Twitter
        </button>
      </div>
    </div>
  );
}
