import { motion } from 'framer-motion';
import './CoverPage.css';

interface CoverPageProps {
  onOpen: () => void;
}

export const CoverPage = ({ onOpen }: CoverPageProps) => {
  return (
    <div className="cover-content">
      <motion.div 
        className="cover-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1>My Journey</h1>
        <h2>Through Code & Creation</h2>
        <p className="author">by Your Name</p>
      </motion.div>

      <motion.div
        className="cover-decoration"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <div className="decoration-circle" />
      </motion.div>

      <motion.button
        className="look-inside-btn"
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Look Inside
      </motion.button>
    </div>
  );
}; 