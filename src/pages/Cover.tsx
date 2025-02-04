import { motion } from 'framer-motion';
import './Cover.css';

interface CoverProps {
  onOpen: () => void;
}

const Cover = ({ onOpen }: CoverProps) => {
  return (
    <motion.div 
      className="cover"
      onClick={onOpen}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="circuit-pattern" />
      <div className="circuit-dots" />
      
      <div className="cover-content">
        <div className="cover-image-container">
          {/* Replace 'your-photo.jpg' with your actual photo path */}
          <img 
            src="/your-photo.jpg" 
            alt="Developer Portrait" 
            className="author-photo"
          />
        </div>

        <div className="cover-text">
          <div className="series-title">Developer Portfolio Series</div>
          
          <h1 className="book-title">
            <span className="title-top">Journey Through</span>
            <span className="title-bottom">Code & Creation</span>
          </h1>

          <div className="author-name">
            {/* Replace with your name */}
            Your Name
          </div>

          <div className="tech-decoration">
            <div className="tech-icons">
              <div className="icon-row">
                <span>⚛️</span>
                <span>📱</span>
                <span>🚀</span>
              </div>
              <div className="icon-row">
                <span>💻</span>
                <span>🔧</span>
                <span>🎨</span>
              </div>
            </div>
          </div>

          <div className="cover-footer">
            Click to Open
          </div>
        </div>
      </div>

      <div className="cover-effects">
        <div className="gloss-effect" />
        <div className="spine-shadow" />
      </div>
    </motion.div>
  );
};

export default Cover; 