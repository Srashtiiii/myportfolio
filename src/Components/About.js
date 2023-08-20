import React from 'react';
import './about.css';
import img from '../assets/pink-image.png';
const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="about-content">
      <h2>About Me</h2>
      <p>I am a highly motivated Computer Science engineer 
        with a strong foundation in both web development and Android
         application development. My passion for technology and
          problem-solving has driven me to excel in creating 
          user-centric solutions that seamlessly blend innovation
           and functionality.</p>
          <br></br>
          <p>With hands-on experience in web development, 
            I have honed my skills in HTML, CSS, JavaScript,
             and various frontend and backend frameworks. 
             Crafting visually appealing and responsive websites
              that deliver exceptional user experiences is where
               I thrive. Whether it's designing intuitive user
                interfaces, optimizing website performance, or
                 ensuring cross-browser compatibility,
                  I am dedicated to delivering high-quality web solutions.</p>
    </div>

   
    <div className="irregular-shape">
        <img src={img} alt='profilepic'> 
        </img>
      </div>
  </section>
  
  );
};

export default About;
