import React from 'react'
import './education.css';

const Education = () => {
    const educationData = [
        // Array of education objects, each containing details
        {
          title: 'Bachelor of Technology in Computer Science and Engineering',
          institution:'GLA University, Mathura',
          year: '2021 - 2024',
        },
        {
          title: 'Diploma in Computer Science and Engineering',
          institution: 'GLA University, Mathura',
          year: '2017 - 2020',
        },
        {
            title: 'High School',
            institution: 'St. Dominics Sr. Sec. School.',
            year: '2016 - 2017',
          },
        
      ];
    
      return (
        <section id="education" className="education-section">
          <h2 className="education-heading">Education</h2>
          <div className="timeline">
        {educationData.map((education, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-content">
                <h3>{education.title}</h3>
                <p>{education.institution}</p>
                <p>{education.year}</p>
              </div>
            </div>
          </div>
            ))}
          </div>
        </section>
  )
}

export default Education;