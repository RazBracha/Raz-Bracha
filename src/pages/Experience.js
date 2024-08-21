import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: " Frontend Software Engineer Intern",
      company: "WeWise",
      time: "June 2024 - Present",
      description:
        "Responsible for developing and maintaining user-facing features. Collaborate with the design team to implement responsive and user-friendly interfaces and assist in optimizing applications for maximum speed and scalability Convert Figma design into a pixel-perfect website.",
      url: "/pictures/wewise.svg",
      techs: ["React", "Next.js", "Tailwind CSS", "Figma"],
    },
    {
      title: " BeSafe Hackathon",
      company: "QueenB & AppsFlyer",
      time: "February 2024",
      description:
        "Participated in a hackathon where our team developed an innovative web application using Next.js, integrated with ChatGPT. The app assists teachers in creating engaging and varied lessons while identifying student weaknesses in the material. It tailors lesson plans based on student performance to enhance learning outcomes.",
      url: "/pictures/safenet.svg",
      techs: ["Next.js", "ChatGPT", "React"],
    },
    {
      title: "Computer Science Student",
      company: "The Academic College of Tel Aviv-Yaffo",
      time: "October 2020 - October 2023",
      description:
        "B.Sc. in Computer Science. Led and collaborated on team projects, including a machine learning application and a full-stack web development project. Gained proficiency in C, C++, C#, and Python while implementing software engineering principles.",
      url: "/pictures/college.svg",
    },
  ];
  return (
    <div id="experience" className="experience-container">
      <div className="experiences">
        <h1 className="experience-title">Experience</h1>
        <div className="experience-cards">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} position={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
