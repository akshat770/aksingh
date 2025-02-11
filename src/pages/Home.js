import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Hi, I'm <span className="highlight">Akshat Singh</span></h1>
      <div className="buttons">
        <Link to="/projects"><motion.button whileHover={{ scale: 1.1 }}>Projects</motion.button></Link>
        <Link to="/contact"><motion.button whileHover={{ scale: 1.1 }}>Contact</motion.button></Link>
      </div>
    </motion.div>
  );
};

export default Home;
