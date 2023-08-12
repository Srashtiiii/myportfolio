import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <header>
        <nav className="navbar">
        <div className="logo">
          <h1>Srashti</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fb6f92" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,250.7C672,277,768,235,864,202.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="hero">
    
        <h1>Hi! I'm Srashti Gautam</h1>
        <p>Computer Science Engineer</p>
      </div>
      <svg className="up"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fb6f92" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,250.7C672,277,768,235,864,202.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </header>
    
  );
};

export default Header;
