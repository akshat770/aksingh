import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div className="contact-container">
      <p>Let's connect! Feel free to reach out via any of the platforms below.</p>
      
      <div className="contact-links">
        <a href="https://github.com/akshat770" target="_blank" rel="noopener noreferrer" className="contact-btn github">
          <FaGithub size={30} /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/akshat-singh-226815278" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
          <FaLinkedin size={30} /> LinkedIn
        </a>

        <a href="mailto:asingh77707@gmail.com" className="contact-btn email">
          <FaEnvelope size={30} /> Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
