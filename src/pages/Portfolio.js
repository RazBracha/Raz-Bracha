import Layout from '../comps/Layout';
import ProjectCard from '../comps/ProjectCard';
import '../styles/Portfolio.css'

const projects = [
    { "id": "1", "name": "ShelterHelper", "description": "Dog shelter management app for IOS & Android.", 'technologies': "React Native, Firebase", "image": '/pictures/dog.jpg', 'github': "https://github.com/ronitli/ShelterHelper" },
    { "id": "2", "name": "Online coding app", "description": "An online coding web application that facilitates real-time remote coding sessions.", 'technologies': " React, Node.js, MongoDB", "image": '/pictures/code.jpg', 'github': "https://github.com/RazBracha/Online-coding-web" },
    { "id": "3", "name": "Nutrition server", "description": "A robust RESTful API server", "image": '/pictures/nutrition.jpg', 'technologies': "Python, Flask, Ninja's API", 'github': "" },
    { "id": "4", "name": "Checkers", "description": "A classic Checkers game.", "image": '/pictures/checkers.jpg', 'technologies': ".NET, Windows Forms", 'github': "https://github.com/RazBracha/Checkers.git" }
];

const Portfolio = () => {
    return (
        // <Layout containerName="portfolio-page-container" activePage="projects">
        // <div className='portfolio-container'>
            <div className='portfolio'>
                <div className="project-list">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        // </div>
        // </Layout>
    );
};

export default Portfolio;


