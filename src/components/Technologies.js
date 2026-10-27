import React from 'react';
import './Technologies.css';

const Technologies = () => {
  const technologies = [
    { abbr: 'Go', name: 'Go' },
    { abbr: 'Gg', name: 'gqlgen' },
    { abbr: 'Gq', name: 'GraphQL' },
    { abbr: 'RA', name: 'REST API' },
    { abbr: 'DO', name: 'DigitalOcean' },
    { abbr: 'Gh', name: 'GitHub' },
    { abbr: 'Pg', name: 'PostgreSQL' },
    { abbr: 'Dk', name: 'Docker' },
    { abbr: 'CI', name: 'CI/CD' },
    { abbr: 'JS', name: 'JavaScript' },
    { abbr: 'Fb', name: 'Firebase' },
    { abbr: 'Re', name: 'React' }
  ];

  return (
    <section id="expertise" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Core technologies</h2>
        <p className="sub">What I reach for most often.</p>
        <div className="tiles">
          {technologies.map((tech, index) => (
            <div key={index} className="tile">
              <b>{tech.abbr}</b>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
