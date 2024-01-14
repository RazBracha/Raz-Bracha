import React, { useState } from 'react';
import '../styles/Projects.css';
import Navbar from '../comps/Navbar';

function Projects() {
  const projects = [
    { "id": "1", "name": "ShelterHelper", "description": '/pictures/ShelterHelper.jpg', "image": '/pictures/dog.jpg' },
    { "id": "2", "name": "Online coding app", "description": '/pictures/OnlineCodingApp.jpg', "image": '/pictures/code.jpg' },
    { "id": "3", "name": "Nutrition server", "description": '/pictures/MealsServer.jpg', "image": '/pictures/nutrition.jpg' },
    { "id": "4", "name": "Checkers", "description": '/pictures/Checkers-des.jpg', "image": '/pictures/checkers.jpg' }
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCard((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='barDiv'>
        <Navbar />
        <div className='cards'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="front">
                  <h2>{project.name}</h2>
                  <img alt='' className='image' src={project.image} />
                </div>
                <div className="back">
                  <img alt='' className='image' src={project.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;


