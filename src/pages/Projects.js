import './Projects.css';
import Bar from './Bar';


function Projects() {

  const projects = [{ "id": "1", "name": "ShelterHelper", "description": '/pictures/ShelterHelper.jpg', "image": `/pictures/dog.jpg` },
  { "id": "2", "name": "Online coding app", "description": '/pictures/OnlineCodingApp.jpg', "image": '/pictures/code.jpg' },
  { "id": "3", "name": "Nutrition server", "description": '/pictures/MealsServer.jpg', "image": '/pictures/nutrition.jpg' },
  { "id": "4", "name": "Checkers", "description": '/pictures/Checkers-des.jpg', "image": '/pictures/checkers.jpg' }];

  return (
    <>
      <div className='barDiv'>
        <Bar />
        <div className='cards'>
          {projects.map((project) => (
            <div className="card" key={project.id}>
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
          ))}</div>
      </div>
    </>
  );
}

export default Projects;
