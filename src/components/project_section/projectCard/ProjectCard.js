import React from 'react';
import './projectCard.css'; // Make sure to create a CSS file for styling

const ProjectCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">buttonText</button>
      </div>
    </div>
  );
};

export default ProjectCard;
