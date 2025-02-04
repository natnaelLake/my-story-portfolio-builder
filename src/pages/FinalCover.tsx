import { motion } from 'framer-motion';
import './FinalCover.css';

const FinalCover = () => {
  return (
    <div className="final-cover">
      <div className="tech-grid" />
      <div className="floating-particles" />
      
      <motion.div 
        className="final-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="thank-you-section">
          <h1 className="thank-you">Thank You</h1>
          <div className="subtitle">for exploring my journey</div>
        </div>

        <div className="final-decoration">
          <motion.div 
            className="tech-circle"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="circle-content">
              <span className="tech-icon">⚡</span>
              <span className="tech-icon">💻</span>
              <span className="tech-icon">🚀</span>
              <span className="tech-icon">🎯</span>
              <span className="tech-icon">💡</span>
              <span className="tech-icon">🔮</span>
            </div>
          </motion.div>
        </div>

        <div className="contact-section">
          <h2>Let's Connect</h2>
          <div className="social-links">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
          </div>
        </div>

        <div className="quote-section">
          <blockquote>
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
          </blockquote>
          <cite>- Patrick McKenzie</cite>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalCover; 