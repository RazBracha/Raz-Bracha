import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    id: "1",
    name: "ShelterHelper",
    description: "Dog shelter management app for IOS & Android.",
    technologies: "React Native, Firebase",
    image: "/pictures/shelterhelper.jpeg",
    github: "https://github.com/ronitli/ShelterHelper",
  },
  {
    id: "2",
    name: "Online Coding App",
    description:
      "An online coding web application that facilitates real-time remote coding sessions.",
    technologies: " React, Node.js, MongoDB, Socket.io",
    image: "/pictures/OnlineCodingApp.svg",
    github: "https://github.com/RazBracha/Online-coding-web",
  },
  {
    id: "3",
    name: "Nutrition Server",
    description: "A robust RESTful API server",
    image: "/pictures/server-img.svg",
    technologies: "Python, Flask, Ninja's API",
    github: "https://github.com/RazBracha/Meals-server",
  },
  {
    id: "4",
    name: "Checkers",
    description: "A classic Checkers game.",
    image: "/pictures/checkers.svg",
    technologies: ".NET, Windows Forms",
    github: "https://github.com/RazBracha/Checkers.git",
  },
];

const Portfolio = () => {
  return (
    <div id="projects" className="portfolio-container">
      <div className="portfolio">
        <h1 className="projects-title">Projects</h1>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
