import React, { useState, useEffect } from "react";
import "./Projects.css";
import { fetchProjects } from "../../services/fetchProjects";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import EndPopup from "../EndPopup/EndPopup";
import DownIcon from "../../assets/DownIcon.svg";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [hasMore, setHasMore] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectData = await fetchProjects();
        setProjects(projectData);
      } catch (err) {
        console.error("Error fetching projects:", err.message);
      }
    };

    getProjects();
  }, []);

  const handleShowMore = () => {
    if (visibleCount >= projects.length) {
      setHasMore(false);
      setShowPopup(true);
    } else {
      setVisibleCount((prevCount) => prevCount + 6);
    }
  };

  return (
    <div className="projects-container">
      <div className="ProjectsPage">
        <div className="Title">Check My Projects</div>
        <img src={DownIcon} className="DownIcon" />
      </div>
      <div className="project-grid">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="project-card">
            <div className="projectName">{project.name}</div>
            <div className="projectDescription">{project.description}</div>
            <div className="techStackUsed"><span style={{"fontWeight": "bold"}}>Tech Stack Used:</span> {project.techStackUsed}</div>:
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              View Live
            </a>
          </div>
        ))}
      </div>
      {hasMore && <ShowMoreButton onClick={handleShowMore} />}
      {showPopup && <EndPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
