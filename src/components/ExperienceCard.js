import React from "react";
import "../styles/ExperienceCard.css";

const ExperienceCard = ({ position }) => {
  return (
    <div className="cards">
      <div className="experience-card">
        <div className="img-container">
          <img src={position.url} alt={position.company} />
        </div>
        <div className="content-container">
          <h3 className="the-title">{position.title}</h3>
          <span className="time">{position.time}</span>
          <p className="company">{position.company}</p>
          <p className="position-description">{position.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
