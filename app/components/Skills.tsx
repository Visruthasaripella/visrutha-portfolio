import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAws, FaDatabase, FaDocker, FaPython} from "react-icons/fa";
import {SiSpringboot, SiMongodb, SiPostman, SiGit, SiKubernetes, SiAngular, SiJquery, SiAstro, SiTailwindcss, SiTypescript, SiExpress, SiGradle, SiBitbucket, SiJenkins, SiBamboo, SiPostgresql, SiPython, SiTensorflow, SiOpenai} from "react-icons/si";
import {GiBrain} from "react-icons/gi";
import "../Skills.css"; // Import a CSS file for styling

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {/* Frontend Technologies */}
        <div className="skills-box">
          <h3>Frontend Technologies</h3>
          <div className="skills-icons">
            <FaReact title="React" />
            <SiTypescript title="TypeScript" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiAngular title="Angular" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <SiJquery title="jQuery" />
            <SiAstro title="Astro" />
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="skills-box">
          <h3>Backend Technologies</h3>
          <div className="skills-icons">
            <FaNodeJs title="Node.js" />
            <SiSpringboot title="Spring Boot" />
            <SiExpress title="Express" />
            <FaDatabase title="SQL" />
            <SiMongodb title="MongoDB" />
            <SiPostgresql title="PostgreSQL" />
          </div>
        </div>

        {/* Cloud/Tools */}
        <div className="skills-box">
          <h3>Cloud / Tools</h3>
          <div className="skills-icons">
            <FaAws title="AWS" />
            <FaDocker title="Docker" />
            <SiKubernetes title="Kubernetes" />
            <SiPostman title="Postman" />
            <SiGit title="Git" />
            <SiBitbucket title="BitBucket" />
            <SiGradle title="Gradle" />
            <SiJenkins title="Jenkins" />
            <SiBamboo title="Bamboo" />
          </div>
        </div>

        {/* AI & ML */}
            <div className="skills-box">
              <h3>AI & ML</h3>
              <div className="skills-icons">
                <GiBrain title="Reinforcement Learning" /> {/* Example for a general AI/ML icon */}
                <SiPython title="DQN" /> {/* Representing with Python for DQN */}
                <SiTensorflow title="PPO" /> {/* Representing with TensorFlow for PPO */}
                <FaPython title="PyTorch" /> {/* Representing PyTorch */}
                <SiOpenai title="OpenAI Gym" /> {/* Representing OpenAI Gym */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;