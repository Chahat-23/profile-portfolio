import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import bgVideo from "./assets/bgVideo.mp4";
import SocialProfileCard from "./components/SocialProfileCard/SocialProfileCard";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="app-container">
        <video autoPlay loop muted className="bg-video">
          <source src={bgVideo} type="video/mp4" />
          Video not supported!
        </video>
        <Routes>
          <Route path="/" element={<SocialProfileCard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
