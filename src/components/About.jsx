import './About.css';

function About() {
  const technicalSkills = [
    {
      category: 'Languages',
      skills: ['JavaScript (ES6+)', 'Python']
    },
    {
      category: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'RESTful APIs']
    },
    {
      category: 'Developer Tools',
      skills: ['VS Code', 'Git', 'GitHub', 'GitBash', 'npm']
    },
    {
      category: 'Databases',
      skills: ['MongoDB']
    }
  ];

  const education = {
    degree: 'Bachelor of Technology in Computer Science and Design',
    institution: 'Dr. D. Y. Patil School of Science and Technology',
    duration: '2023 - 2027',
    gpa: '9.8 / 10.0',
    relevantCourses: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Development',
      'Object-Oriented Programming',
      'Software Engineering',
      'Operating Systems'
    ]
  };

  const achievements = [
    {
      title: 'KPIT Sparkle 2025 Semi-Finalist',
      description: 'Selected from over 6,000 teams to compete in the semi-finals of one of India\'s most prestigious technology competitions'
    },
    {
      title: 'Wadhwani Foundation Incubation Offer',
      description: 'Awarded an incubation offer for an innovative AI/AR/VR Smart Hydroponics startup concept'
    },
    {
      title: 'HackCrux (GDG) Runner-Up',
      description: 'Secured runner-up position at HackCrux organized by Google Developer Groups, showcasing innovative problem-solving skills'
    },
    {
      title: '18x Hackathon Finalist',
      description: 'Consistently placed in top tiers at major national events, including CredX AI Challenge (Top 6), Atom Quest IIT Madras (Semifinalist), and World Computer Hacker League (International Level)'
    }
  ];

  const experiences = [
    {
      role: 'AI & Data Analytics Intern',
      company: 'Edunet Foundation',
      location: 'Pune, India',
      duration: 'Jan 2025 - Feb 2025',
      type: 'Internship',
      responsibilities: [
        'Completed a 4-week internship focused on Artificial Intelligence and Data Analytics',
        'Developed AI/ML models, including a deep learning model for waste classification',
        'Gained practical experience in model development, testing, and data analysis within an industry setting'
      ]
    },
    {
      role: 'Front End Development Intern',
      company: 'Edunet Foundation',
      location: 'Pune, India',
      duration: 'Jun 2024 - Jul 2024',
      type: 'Internship',
      responsibilities: [
        'Developed and optimized user interfaces for web applications using HTML, CSS, JavaScript, and React',
        'Gained hands-on experience in the full development lifecycle',
        'Collaborated with peers and received direct mentorship'
      ]
    }
  ];

  const extracurricular = [
    {
      role: 'President',
      organization: 'Hackathon Club [DYPSST]',
      location: 'Pune',
      duration: 'Sep 2025 - Present',
      type: 'Leadership',
      responsibilities: [
        'Led the organization and execution of the Smart India Hackathon (SIH) internal rounds, coordinating logistics for 59+ teams and securing resources for the smooth conduct of the event',
        'Mentored students by organizing 5+ preparation sessions and workshops focused on hackathon methodologies, ideation, and rapid prototyping, significantly boosting student participation and success rates'
      ]
    },
    {
      role: 'Campus Ambassador',
      organization: 'Unstop',
      location: 'Pune',
      duration: 'Jul 2025 - Present',
      type: 'Ambassador',
      responsibilities: [
        'Serving as a key representative for Unstop on campus, responsible for promoting tech community engagement and inspiring peer growth by sharing opportunities'
      ]
    },
    {
      role: 'Placement Committee Member',
      organization: 'Training and Placement Cell [DYPSST]',
      location: 'Pune',
      duration: 'Sep 2023 - Aug 2025',
      type: 'Committee',
      responsibilities: [
        'Organized and coordinated key placement events, including drives, internship fairs, and industry talks, collaborating with the Placement Officer',
        'Acted as the student-cell liaison, resolving queries and managing event logistics to foster effective communication'
      ]
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        {/* Introduction */}
        <div className="about-intro-section">
          <div className="intro-text">
            <h3>Hi, I'm <span className="highlight">Omkar Kale</span></h3>
            <p className="intro-subtitle">Computer Science Student | Full-Stack Developer | Innovation Enthusiast</p>
            <p>
              Aspiring Full Stack Developer and Computer Science & Design student with strong critical thinking and 
              problem-solving skills. I thrive on innovation and have a proven track record of leading teams in hackathons 
              to build impactful, scalable solutions.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="stat-content">
                <h4>4+</h4>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="stat-content">
                <h4>2</h4>
                <p>Internships</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="stat-content">
                <h4>10+</h4>
                <p>Technologies</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="stat-content">
                <h4>9.8</h4>
                <p>GPA / 10.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Left Column: Skills & Education */}
          <div className="about-left">
            {/* Skills Section */}
            <div className="skills-section">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Technical Skills
              </h3>
              <div className="skills-grid">
                {technicalSkills.map((category, index) => (
                  <div key={index} className="skill-category-card">
                    <h4>{category.category}</h4>
                    <div className="skills-list">
                      {category.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="education-section">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                Education
              </h3>
              <div className="education-card-new">
                <div className="education-header">
                  <h4>{education.degree}</h4>
                  <span className="education-gpa">GPA: {education.gpa}</span>
                </div>
                <p className="education-institution">{education.institution}</p>
                <span className="education-duration">{education.duration}</span>
                
                <div className="coursework">
                  <h5>Key Courses:</h5>
                  <div className="courses-tags">
                    {education.relevantCourses.map((course, index) => (
                      <span key={index} className="course-tag-new">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="about-right">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Professional Experience
            </h3>
            <div className="experience-timeline-new">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card-new">
                  <div className="experience-header-new">
                    <div className="experience-title-new">
                      <h4>{exp.role}</h4>
                      <span className="experience-badge">{exp.type}</span>
                    </div>
                    <span className="experience-date">{exp.duration}</span>
                  </div>
                  <div className="experience-company-new">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span><strong>{exp.company}</strong> • {exp.location}</span>
                  </div>
                  <ul className="experience-list-new">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="achievements-section">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Key Achievements
              </h3>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div className="extracurricular-section">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Extracurricular Activities
              </h3>
              <div className="experience-timeline-new">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="experience-card-new">
                    <div className="experience-header-new">
                      <div className="experience-title-new">
                        <h4>{activity.role}</h4>
                        <span className="experience-badge">{activity.type}</span>
                      </div>
                      <span className="experience-date">{activity.duration}</span>
                    </div>
                    <div className="experience-company-new">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                      <span><strong>{activity.organization}</strong> • {activity.location}</span>
                    </div>
                    <ul className="experience-list-new">
                      {activity.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
