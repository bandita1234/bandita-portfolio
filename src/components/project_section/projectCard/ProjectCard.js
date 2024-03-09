import React from 'react';
import './projectCard.css'; // Make sure to create a CSS file for styling

const ProjectCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className='card_btn_main'>
        <button className="card-button">View Code</button>
        <button className="card-button">View Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
