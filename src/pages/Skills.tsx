import { motion } from 'framer-motion';
import './Skills.css';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    description: string;
  }[];
}

const Skills = () => {
  const skills: Skill[] = [
    {
      category: "Frontend Development",
      items: [
        {
          name: "React",
          level: 90,
          description: "Advanced state management, custom hooks, performance optimization"
        },
        {
          name: "TypeScript",
          level: 85,
          description: "Type safety, interfaces, generics, advanced patterns"
        },
        {
          name: "Next.js",
          level: 80,
          description: "Server-side rendering, static generation, API routes"
        }
      ]
    },
    {
      category: "Backend Development",
      items: [
        {
          name: "Node.js",
          level: 85,
          description: "REST APIs, authentication, database integration"
        },
        {
          name: "Python",
          level: 80,
          description: "Data processing, API development, automation"
        },
        {
          name: "PostgreSQL",
          level: 75,
          description: "Query optimization, database design, indexing"
        }
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        {
          name: "Docker",
          level: 75,
          description: "Containerization, multi-container applications"
        },
        {
          name: "AWS",
          level: 70,
          description: "EC2, S3, Lambda, CloudFormation"
        },
        {
          name: "Git",
          level: 85,
          description: "Version control, branching strategies, collaboration"
        }
      ]
    }
  ];

  return (
    <div className="skills-page">
      <motion.div 
        className="chapter-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Skills & Expertise</h1>
        <div className="chapter-decoration">
          <div className="decoration-line" />
          <span className="chapter-number">Chapter 5</span>
          <div className="decoration-line" />
        </div>
      </motion.div>

      <div className="skills-content">
        <motion.div 
          className="skills-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            Through years of practice, learning, and real-world application,
            I've developed expertise in various areas of software development.
            Here's a detailed overview of my technical capabilities.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (categoryIndex * 0.2) }}
            >
              <h2>{category.category}</h2>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (skillIndex * 0.1) }}
                  >
                    <div className="skill-header">
                      <h3>{skill.name}</h3>
                      <div className="skill-level">
                        <div 
                          className="level-bar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="additional-skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3>Additional Competencies</h3>
          <ul>
            <li>Agile Methodologies</li>
            <li>Technical Leadership</li>
            <li>System Architecture</li>
            <li>Code Review</li>
            <li>Performance Optimization</li>
          </ul>
        </motion.div>
      </div>

      <div className="page-footer">
        <div className="footer-decoration" />
      </div>
    </div>
  );
};

export default Skills; 