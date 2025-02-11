import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => setIsOpen(false)}>
        🚀 Portfolio
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" className="nav-item" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>About</Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
