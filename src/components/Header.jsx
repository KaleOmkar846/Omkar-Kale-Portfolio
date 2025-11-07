import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'hackathons', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">OK</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a 
                  onClick={() => scrollToSection('home')}
                  className={activeSection === 'home' ? 'active' : ''}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('about')}
                  className={activeSection === 'about' ? 'active' : ''}
                >
                  <span className="nav-number">01.</span> About
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('projects')}
                  className={activeSection === 'projects' ? 'active' : ''}
                >
                  <span className="nav-number">02.</span> Projects
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('hackathons')}
                  className={activeSection === 'hackathons' ? 'active' : ''}
                >
                  <span className="nav-number">03.</span> Hackathons
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('contact')}
                  className={activeSection === 'contact' ? 'active' : ''}
                >
                  <span className="nav-number">04.</span> Contact
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
