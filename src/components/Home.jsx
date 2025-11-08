import './Home.css';
import profilePhoto from '../assets/me.jpg'; // You can add your photo here

function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-content">
          {/* Left Side - Text Content */}
          <div className="home-text">
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for Opportunities
            </div>
            
            <p className="greeting">Hello, I'm</p>
            <h1 className="name">
              <span className="name-highlight">Omkar Kale</span>
            </h1>
            <h2 className="title">
              Software Engineering Student
            </h2>
            <p className="description">
              Passionate about building scalable web applications and solving complex problems. 
              Specialized in <strong>Full-Stack Development</strong> with expertise in modern 
              JavaScript frameworks and backend technologies.
            </p>

            <div className="quick-stats">
              <div className="stat-box">
                <h3>4+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-box">
                <h3>18+</h3>
                <p>Hackathons</p>
              </div>
              <div className="stat-box">
                <h3>2</h3>
                <p>Internships</p>
              </div>
            </div>
            
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                <span>Contact Me</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/KaleOmkar846" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/omkar-kale-948101287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="home-photo">
            <div className="photo-wrapper">
              <div className="photo-border"></div>
              <div className="photo-container">
                <img src={profilePhoto} alt="Omkar Kale" />
              </div>
              <div className="photo-glow"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-card card-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>Code</span>
            </div>
            <div className="floating-card card-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span>Winner</span>
            </div>
            <div className="floating-card card-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <polyline points="2 17 12 22 22 17"></polyline>
              </svg>
              <span>Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
