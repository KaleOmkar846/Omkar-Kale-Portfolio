import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SaralMatch: Recommendation Engine',
      description: 'Smart job-matching engine using Google Gemini API for complex profile building, resume parsing, and semantic matching that goes beyond simple keyword filtering. Lightweight full-stack application with user-defined priority sliders generating personalized "Match Stories" using LLMs to explain role compatibility.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
      technologies: ['Node.js', 'Gemini API', 'JavaScript', 'Express', 'HTML/CSS'],
      category: 'fullstack',
      featured: true,
      highlights: ['LLM Integration', 'Resume Parsing', 'Semantic Matching'],
      github: 'https://github.com/KaleOmkar846',
    },
    {
      id: 2,
      title: 'AI-Powered Disaster Management Platform',
      description: 'Real-time disaster management web platform with three distinct AI/ML models (flood prediction, CNN image classification, social media analysis). Engineered CNN model achieving 92% accuracy for satellite image classification, enabling proactive disaster response and improved resource allocation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      technologies: ['React.js', 'Node.js', 'Python', 'MongoDB', 'Express'],
      category: 'fullstack',
      featured: true,
      highlights: ['92% CNN Accuracy', 'Real-time Analysis', 'Multi-Model Integration'],
      github: 'https://github.com/KaleOmkar846',
    },
    {
      id: 3,
      title: 'WanderLust',
      description: 'Full-featured hotel booking portal enabling users to browse, search, and book accommodations seamlessly. Modern UI/UX with real-time availability, secure booking system, and user-friendly interface for travelers. Complete MERN stack implementation with authentication and payment integration.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'RESTful APIs'],
      category: 'fullstack',
      featured: true,
      highlights: ['Booking System', 'Real-time Availability', 'User Authentication'],
      github: 'https://github.com/KaleOmkar846',
    },
    {
      id: 4,
      title: 'CPU Scheduling Visualizer',
      description: 'Comprehensive CPU Scheduling Visualizer built with React that simulates and visualizes FCFS, SJF, Priority, and Round Robin scheduling algorithms with interactive Gantt charts and real-time performance metrics.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      technologies: ['React.js', 'JavaScript', 'HTML/CSS'],
      category: 'frontend',
      featured: false,
      github: 'https://github.com/KaleOmkar846'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        <p className="section-description">
          Here are some of my recent projects showcasing my skills in full-stack development, 
          problem-solving, and building user-centric applications.
        </p>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featured-card">
              <div className="featured-image">
                <img src={project.image} alt={project.title} />
                <div className="featured-overlay">
                  <div className="featured-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <div className="project-badge">Featured Project</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.highlights && (
                  <div className="project-highlights">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="highlight-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="other-projects">
            <div className="projects-header">
              <h3>Other Projects</h3>
              <div className="filter-tabs">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                    onClick={() => setFilter(category.id)}
                  >
                    {category.label}
                    <span className="count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {otherProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-card-header">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="card-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="card-tech">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
