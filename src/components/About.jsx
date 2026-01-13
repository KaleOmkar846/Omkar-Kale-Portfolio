import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Code2, GraduationCap } from "lucide-react";
import "./About.css";

// Tech stack with icons
const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <User size={16} />
            About Me
          </span>
          <h2 className="section-title">Know Me Better</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-text-centered"
        >
          <p>
            Technology excites me, not just for the code, but for the impact.
          </p>
          <p>
            As a CS & Design student at DPU, Pune, my goal is simple: to become
            a full-stack developer who solves real problems. I learn by doing,
            so you’ll usually find me competing in hackathons, where I
            consistently finish as a finalist or winner.
          </p>
          <p>
            What I might lack in immediate skills, I make up for with a
            determined, "figure-it-out" attitude.
          </p>
          <p>
            Beyond code, I build communities. As President of the Hackathon
            Committee, I take pride in leading teams to victory. I love building
            tech, but I love building teams even more.
          </p>
          <p>
            Outside of tech, I am a tea lover and spend my free time listening
            to podcasts.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="tech-stack-section"
        >
          <div className="tech-stack-header">
            <Code2 size={18} />
            <span>Tech Stack</span>
          </div>
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="tech-card"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-card-icon"
                />
                <span className="tech-card-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="education-section"
        >
          <div className="education-header">
            <GraduationCap size={18} />
            <span>Education</span>
          </div>
          <div className="education-timeline">
            {/* B.Tech */}
            <div className="education-item">
              <div className="education-dot"></div>
              <div className="education-line"></div>
              <div className="education-card">
                <div className="education-year">2023 - 2027</div>
                <h3 className="education-degree">
                  B.Tech in Computer Science and Design
                </h3>
                <p className="education-institution">
                  Dr. D. Y. Patil School of Science and Technology
                </p>
                <span className="education-score">GPA: 9.8 / 10.0</span>
              </div>
            </div>
            {/* HSC */}
            <div className="education-item">
              <div className="education-dot"></div>
              <div className="education-card">
                <div className="education-year">2021 - 2023</div>
                <h3 className="education-degree">
                  HSC (Class 12) - Science (PCMB)
                </h3>
                <p className="education-institution">
                  MIT Junior College, Pune, Maharashtra
                </p>
                <span className="education-score">Percentage: 75%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
