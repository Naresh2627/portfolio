import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: '8+', label: 'Month of experience' },
    { value: '3+', label: 'Core platforms built' },
    { value: '10+', label: 'Frameworks & tools used' },
    { value: '99.9%', label: 'Focus on clean code' }
  ];

  return (
    <section id="about">
      <div className="wrap">
        <h2>Get to know me</h2>
        <p className="sub">The short version of who I am and how I work.</p>
        <div className="about">
          <div className="photo" role="img" aria-label="Photo placeholder">
            YN
          </div>
          <div>
            <div className="cols">
              <p>
                Hi, I’m Naresh, a platform and full-stack software developer with 8 months of experience
                 building scalable web applications, developer tools, and robust backend APIs.
              </p>
              <p>
                I enjoy turning complex infrastructure needs into seamless platforms, utilizing a modern tech
                 stack that includes Node.js, Go, Next.js, and PostgreSQL to build projects like Tuma and 
                 Koto7.
              </p>
              <p>
                I care about maintainable code, modular architecture, and shipping efficient CI/CD pipelines so
                 that development teams can iterate quickly and reliably.
              </p>
              <p>
                Away from the keyboard you will find me hiking, cooking new recipes and 
                playing board games with friends.
              </p>
              <p>
                Have a project in mind? Let's talk about it and build something we're 
                both proud of.
              </p>
            </div>
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
