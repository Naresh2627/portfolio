import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div>
          <div className="tag">// platform & software developers</div>
          <h1>Building platforms that <em>work</em> and scale</h1>
          <p className="lead">
            I design and ship robust software solutions from backend architecture to
             seamless interfaces, focusing on maintainable code and scalable systems.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View projects →
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in touch
            </button>
          </div>
          <div className="avail">
            <span className="dot"></span>
            Available for new projects
          </div>
        </div>

        <div className="hero-code">
          <div className="code-header">
            <div className="code-dot red"></div>
            <div className="code-dot yellow"></div>
            <div className="code-dot green"></div>
          </div>
          <pre><span className="code-keyword">const</span> <span className="code-function">developer</span> = {'{'}{'\n'}  name: <span className="code-string">'Naresh'</span>,{'\n'}  skills: [<span className="code-string">'Go'</span>, <span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'PostgreSQL'</span>],{'\n'}  focus: <span className="code-string">'Scalable platform'</span>,{'\n'}  status: <span className="code-string">'Available for work'</span>{'\n'}{'};'}</pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
