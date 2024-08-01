import '../styles/ProjectCard.css'
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} />
            <div className='project-card-text-container'>
                <h3 className='project-name'>{project.name}</h3>
                <p className='project-description'>{project.description}</p>
                <p className='project-tech'>{project.technologies}</p>
                <a className="project-link" href={project.github}>
                view on GitHub ↗
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;