import { motion } from 'framer-motion';
import { useState } from 'react';
import './Experience.css';

interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  story: string;
}

const Experience = () => {
  const [activeEntry, setActiveEntry] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      period: "2023 - Present",
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      description: "Leading development of enterprise-scale applications",
      achievements: [
        "Led team of 5 developers in rebuilding core platform",
        "Reduced system latency by 60%",
        "Implemented CI/CD pipeline reducing deployment time by 75%"
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "Docker"],
      story: "This chapter of my journey began with an exciting challenge..."
    },
    // Add more experiences...
  ];

  return (
    <div className="experience-page">
      <motion.div 
        className="chapter-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Professional Journey</h1>
        <div className="chapter-decoration">
          <div className="decoration-line" />
          <span className="chapter-number">Chapter 4</span>
          <div className="decoration-line" />
        </div>
      </motion.div>

      <div className="journal-entries">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`journal-entry ${activeEntry === exp.id ? 'active' : ''}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="entry-timeline">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>

            <div className="entry-content">
              <div 
                className="entry-header"
                onClick={() => setActiveEntry(
                  activeEntry === exp.id ? null : exp.id
                )}
              >
                <div className="header-main">
                  <h2>{exp.role}</h2>
                  <h3>{exp.company}</h3>
                  <p className="location">{exp.location}</p>
                </div>
                <div className="period-badge">{exp.period}</div>
                <motion.div 
                  className="expand-icon"
                  animate={{ rotate: activeEntry === exp.id ? 180 : 0 }}
                >
                  ↓
                </motion.div>
              </div>

              <motion.div 
                className="entry-details"
                initial={false}
                animate={{
                  height: activeEntry === exp.id ? 'auto' : 0,
                  opacity: activeEntry === exp.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="story-section">
                  <p className="story-text">{exp.story}</p>
                </div>

                <div className="achievements-section">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="skills-section">
                  <h4>Technologies & Skills:</h4>
                  <div className="skills-tags">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="skill-tag"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="reflection-note">
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="page-footer">
        <motion.div 
          className="footer-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>"Every experience is a stepping stone to growth."</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;