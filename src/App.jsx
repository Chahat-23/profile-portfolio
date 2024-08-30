import React from "react";
import profileImage from "./assets/profileImage.jpg";
import "./App.css";
import bgVideo from "./assets/bgVideo.mp4";

function App() {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="app-container">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Video not supported!
      </video>

      <div className="social-profile-card">
        <img src={profileImage} alt="profile-image" className="profile-image" />
        <div className="h1">Chahat Shrivastava</div>
        <div className="location">Bengaluru, India</div>
        <p>Frontend developer & web3 enthusiast</p>

        <div className="buttons">
          <button onClick={() =>handleButtonClick("https://vercel.com/chahat-23s-projects")}>
            Projects
          </button>
          <button onClick={() => handleButtonClick("https://github.com/Chahat-23")}>
            GitHub
          </button>
          <button onClick={() => handleButtonClick("https://www.linkedin.com/in/chahat-shrivastava-a67006185/")}>
            LinkedIn
          </button>
          <button onClick={() => handleButtonClick("https://x.com/Chahat23S")}>
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
