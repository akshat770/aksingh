import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <motion.div className="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>My <span className="highlight">Projects</span></h1>
      <div className="project-grid">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
      </div>
    </motion.div>
  );
};

export default Projects;
