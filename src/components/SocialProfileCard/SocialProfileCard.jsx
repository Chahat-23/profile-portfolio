import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SocialProfileCard.css";
import profileImage from "../../assets/profileImage.jpg";
import Loader from "../Loader/Loader";
import wave from "../../assets/wave.svg";

export default function SocialProfileCard() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  const handleProjectsClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/projects");
    }, 1500);
  };

  const saveFile = () => {
    fetch("Resume-Chahat-Dev.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume-Chahat-Dev.pdf";
        alink.click();
      });
    });
  };
  
  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="greetings">
        <div className="welcome">Welcome to my portfolio!</div>
        <img src={wave} className="hello" />
      </div>
      <div className="social-profile-card">
        <img src={profileImage} alt="profile-image" className="profile-image" />
        <div className="h1">Chahat Shrivastava</div>
        <div className="location">Bengaluru, India</div>
        <p>Frontend Developer with Web3 Curiosity</p>

        <div className="buttons">
          <button className="btn" onClick={saveFile}>
            Download Resume 🡇
          </button>
          <button className="btn" onClick={handleProjectsClick}>
            Projects
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick("https://github.com/Chahat-23")}
          >
            GitHub
          </button>
          <button
            className="btn"
            onClick={() =>
              handleButtonClick(
                "https://www.linkedin.com/in/chahat-shrivastava-a67006185/"
              )
            }
          >
            LinkedIn
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick("https://x.com/Chahat23S")}
          >
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
