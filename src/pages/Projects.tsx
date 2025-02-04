import { motion } from 'framer-motion';
import { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  highlights: string[];
  image: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      description: "A revolutionary platform that leverages machine learning to provide predictive analytics and real-time insights for business decision-making.",
      role: "Lead Developer",
      duration: "2023 - Present",
      technologies: ["React", "Python", "TensorFlow", "AWS", "GraphQL"],
      highlights: [
        "Implemented machine learning models achieving 95% prediction accuracy",
        "Reduced data processing time by 60%",
        "Scaled to handle 1M+ daily active users"
      ],
      image: "/projects/analytics.jpg",
      links: {
        live: "https://analytics.demo",
        github: "https://github.com/yourusername/analytics"
      }
    },
    // Add more projects...
  ];

  return (
    <div className="projects-page">
      <motion.div 
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Projects & Achievements</h1>
        <div className="title-underline" />
      </motion.div>

      <div className="projects-content">
        <div className="project-timeline">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-entry ${activeProject === project.id ? 'active' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div 
                className="project-header"
                onClick={() => setActiveProject(
                  activeProject === project.id ? null : project.id
                )}
              >
                <div className="project-timeline-dot" />
                <div className="project-basic-info">
                  <h2>{project.title}</h2>
                  <p className="project-duration">{project.duration}</p>
                </div>
                <motion.div 
                  className="expand-icon"
                  animate={{ rotate: activeProject === project.id ? 180 : 0 }}
                >
                  ↓
                </motion.div>
              </div>

              <motion.div 
                className="project-details"
                initial={false}
                animate={{
                  height: activeProject === project.id ? 'auto' : 0,
                  opacity: activeProject === project.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    {Object.entries(project.links).map(([key, url]) => (
                      <motion.a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="project-info">
                  <p className="project-role">Role: {project.role}</p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tech-tag"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="project-highlights">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="page-decoration">
        <div className="decoration-line" />
      </div>
    </div>
  );
};

export default Projects;