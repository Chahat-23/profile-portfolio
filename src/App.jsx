import React from "react";
import "./App.css";
import bgVideo from "./assets/bgVideo.mp4";
import SocialProfileCard from "./components/SocialProfileCard/SocialProfileCard";
import wave from "./assets/wave.svg";

function App() {

  return (
    <div className="app-container">
      <div className="greetings">
        <div className="welcome">Welcome to my portfolio!</div>
        <img src={wave} className="hello" />
      </div>
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Video not supported!
      </video>

      <SocialProfileCard />
    </div>
  );
}

export default App;
