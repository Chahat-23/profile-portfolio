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
    fetch("/src/assets/Resume-Chahat-Dev.pdf").then((response) => {
      // Check if the response is OK (status 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
      }
      // Ensure the response is a PDF
      const contentType = response.headers.get("Content-Type");
      if (!contentType || !contentType.includes("application/pdf")) {
        throw new Error("Fetched file is not a PDF");
      }
      return response.blob();
    })
    .then((blob) => {
      // Create a URL for the blob
      const fileURL = window.URL.createObjectURL(blob);

      // Create and trigger the download
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Resume-Chahat-Dev.pdf"; // Filename for the download
      alink.click();

      // Clean up the URL object to free memory
      window.URL.revokeObjectURL(fileURL);
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
      alert("Failed to download the resume. Check the console for details.");
    });

    
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
        <div className="bio">
          <p>A Web2 Front-end Dev, &</p>
          <p>A Web3 Content & Social-Media Strategist</p>
        </div>
        <div className="buttons">
          <button className="btn" onClick={saveFile}>
            Download Resume
          </button>
          <button className="btn" onClick={handleProjectsClick}>
            Dev Projects
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
                "https://docs.google.com/spreadsheets/d/1wNaeFf9d1XnQG8qJc0AuI0WsjjpaKQvI4qrVAvrn3rU/edit?gid=0#gid=0"
              )
            }
          >
            Content Portfolio
          </button>
          <button
            className="btn"
            onClick={() =>
              handleButtonClick(
                "https://docs.google.com/spreadsheets/d/1xdHcSNu1_3tqU4aQ7sWBY6e5DnKZTEUZtvatDN3CGgw/edit?usp=sharing"
              )
            }
          >
            UI/UX & Decks
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick("https://x.com/Chahat23S")}
          >
            Twitter
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
        </div>
      </div>
    </div>
  );
}
