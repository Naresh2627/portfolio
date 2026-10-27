import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: '2024 – Present',
      title: 'Senior Developer',
      company: 'Company name',
      achievements: [
        'Led a team of four to rebuild the billing platform.',
        'Cut average API response time by 45%.'
      ]
    },
    {
      period: '2021 – 2024',
      title: 'Full-Stack Developer',
      company: 'Previous company',
      achievements: [
        'Shipped 12 customer-facing features across web and mobile.',
        'Introduced automated testing that halved release bugs.'
      ]
    },
    {
      period: '2017 – 2021',
      title: 'BSc Computer Science',
      company: 'University name',
      achievements: []
    }
  ];

  return (
    <section id="experience" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Experience</h2>
        <p className="sub">Where I've worked and what I delivered.</p>
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="job">
              <div className="w">{exp.period}</div>
              <div>
                <h3>{exp.title}</h3>
                <div className="o">{exp.company}</div>
                {exp.achievements.length > 0 && (
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
