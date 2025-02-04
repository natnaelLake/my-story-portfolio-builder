import { motion } from 'framer-motion';
import './Beginning.css';

const Beginning = () => {
  return (
    <div className="beginning-page">
      <div className="page-content">
        <motion.div 
          className="chapter-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>The Beginning</h1>
          <div className="chapter-decoration">
            <div className="decoration-line" />
            <span className="chapter-number">Chapter 1</span>
            <div className="decoration-line" />
          </div>
        </motion.div>

        <div className="chapter-content">
          <motion.section 
            className="story-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="opening-text">
              My journey into the world of programming began with a simple curiosity...
            </p>
            
            <div className="story-block">
              <h3>The First Spark</h3>
              <p>
                It all started when I discovered the power of creating something from nothing
                but lines of code. The ability to bring ideas to life through programming
                fascinated me, and I knew this was the path I wanted to pursue.
              </p>
            </div>

            <div className="story-block">
              <h3>Early Explorations</h3>
              <p>
                From building simple websites to experimenting with basic algorithms,
                each small success fueled my passion for technology and innovation.
                The endless possibilities of what could be created drove me forward.
              </p>
            </div>
          </motion.section>

          <motion.div 
            className="inspiration-quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <blockquote>
              "Every expert was once a beginner. The key is to never stop learning."
            </blockquote>
          </motion.div>
        </div>

        <div className="page-footer">
          <div className="footer-decoration" />
        </div>
      </div>
    </div>
  );
};

export default Beginning; 