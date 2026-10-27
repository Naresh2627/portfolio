import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <header>
      <div className="wrap">
        <div className="header-content">
          <a className="logo" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            YN<span>.</span>
          </a>
          
          <nav>
            <button 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <div className="header-actions">
            <button className="btn-download" onClick={() => window.print()}>
              Download CV
            </button>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              ◐
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
