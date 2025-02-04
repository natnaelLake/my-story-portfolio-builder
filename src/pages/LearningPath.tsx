import { motion } from 'framer-motion';
import './LearningPath.css';

const LearningPath = () => {
  const milestones = [
    {
      year: "2018",
      title: "First Steps",
      description: "Started learning web development fundamentals: HTML, CSS, and JavaScript.",
      achievements: ["Built first personal website", "Completed online courses in web development"]
    },
    {
      year: "2019",
      title: "Expanding Horizons",
      description: "Dove into modern frameworks and backend development.",
      achievements: ["Mastered React.js", "Learned Node.js and Express", "Built full-stack applications"]
    },
    {
      year: "2020",
      title: "Advanced Concepts",
      description: "Focused on architecture and best practices.",
      achievements: ["Studied system design", "Learned cloud technologies", "Contributed to open source"]
    }
  ];

  return (
    <div className="learning-path-page">
      <motion.div 
        className="chapter-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Learning Path</h1>
        <div className="chapter-decoration">
          <div className="decoration-line" />
          <span className="chapter-number">Chapter 2</span>
          <div className="decoration-line" />
        </div>
      </motion.div>

      <div className="learning-content">
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            The path of learning is never straight. It's filled with challenges,
            breakthroughs, and continuous growth. Here's my journey of acquiring
            knowledge and skills in software development.
          </p>
        </motion.div>

        <div className="milestones">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className="milestone-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (index * 0.2) }}
            >
              <div className="milestone-year">{milestone.year}</div>
              <div className="milestone-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
                <ul className="achievements-list">
                  {milestone.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="reflection-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3>Looking Forward</h3>
          <p>
            The journey of learning never ends. Each day brings new technologies,
            challenges, and opportunities to grow. The key is to maintain curiosity
            and enthusiasm for learning.
          </p>
        </motion.div>
      </div>

      <div className="page-footer">
        <div className="footer-decoration" />
      </div>
    </div>
  );
};

export default LearningPath; 