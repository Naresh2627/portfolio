import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      year: '2026',
      title: 'Event delivery platform',
      category: 'Backend',
      description: 'Message delivery with retries and alerts for engineering teams.',
      result: 'Handles 2M events a day',
      tech: ['Go', 'PostgreSQL', 'Docker']
    },
    {
      year: '2026',
      title: 'Customer portal',
      category: 'Web',
      description: 'Self-service dashboard for invoices, usage and support tickets.',
      result: 'Cut support emails by 38%',
      tech: ['React', 'TypeScript', 'Node.js']
    },
    {
      year: '2025',
      title: 'Task manager',
      category: 'Web',
      description: 'Collaborative boards with real-time updates and team roles.',
      result: '1,200 active users',
      tech: ['TypeScript', 'Firebase']
    },
    {
      year: '2025',
      title: 'Open-source CLI',
      category: 'Open source',
      description: 'Command-line tool that checks config files before deploys.',
      result: '900 GitHub stars',
      tech: ['Go', 'CI/CD']
    },
    {
      year: '2024',
      title: 'Online shop',
      category: 'Web',
      description: 'Catalogue, cart and payments for a local retailer.',
      result: 'Sales up 27% in 3 months',
      tech: ['React', 'Node.js', 'Stripe']
    },
    {
      year: '2024',
      title: 'Reporting API',
      category: 'Backend',
      description: 'REST API that turns raw data into scheduled PDF reports.',
      result: 'Reports 6x faster',
      tech: ['Python', 'PostgreSQL']
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const groupedByYear = filteredProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Selected work, newest first. Filter by type.</p>
        
        <div className="chips">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tl">
          {Object.keys(groupedByYear).sort((a, b) => b - a).map((year) => (
            <div key={year}>
              <h3 className="yr">{year}</h3>
              <div className="grid">
                {groupedByYear[year].map((project, index) => (
                  <article key={index} className="card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="res">{project.result}</p>
                    <div className="tags">
                      {project.tech.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                    <div className="links">
                      <a href="#">Live</a>
                      <a href="#">Source</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
