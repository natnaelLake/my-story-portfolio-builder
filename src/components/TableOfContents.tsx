import { motion } from 'framer-motion';
import './TableOfContents.css';

interface TableOfContentsProps {
  onPageSelect: (pageId: number) => void;
}

export const TableOfContents = ({ onPageSelect }: TableOfContentsProps) => {
  const chapters = [
    { id: 2, title: "The Beginning", subtitle: "Early Days & Inspiration" },
    { id: 3, title: "Learning Path", subtitle: "Education & Growth" },
    { id: 4, title: "Professional Journey", subtitle: "Work Experience" },
    { id: 5, title: "Projects & Achievements", subtitle: "Notable Works" },
    { id: 6, title: "Skills & Expertise", subtitle: "Technical Proficiency" },
    { id: 7, title: "Contact & Connect", subtitle: "Get in Touch" }
  ];

  return (
    <div className="toc-container">
      <motion.h1 
        className="toc-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Table of Contents
      </motion.h1>

      <div className="chapters-list">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            className="chapter-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onPageSelect(chapter.id)}
          >
            <div className="chapter-number">{chapter.id - 1}</div>
            <div className="chapter-info">
              <h3>{chapter.title}</h3>
              <p>{chapter.subtitle}</p>
            </div>
            <div className="chapter-dots" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="toc-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p>"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."</p>
        <span>- Patrick McKenzie</span>
      </motion.div>
    </div>
  );
}; 