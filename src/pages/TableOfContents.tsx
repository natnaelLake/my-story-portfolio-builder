import { motion } from 'framer-motion';
import './TableOfContents.css';

interface TableOfContentsProps {
  onPageSelect: (pageId: number) => void;
}

const TableOfContents = ({ onPageSelect }: TableOfContentsProps) => {
  const chapters = [
    {
      id: 2,
      title: "The Beginning",
      subtitle: "Early Days & Inspiration",
      pageNumber: "1"
    },
    {
      id: 3,
      title: "Learning Path",
      subtitle: "Education & Growth",
      pageNumber: "7"
    },
    {
      id: 4,
      title: "Professional Journey",
      subtitle: "Work Experience",
      pageNumber: "15"
    },
    {
      id: 5,
      title: "Projects & Achievements",
      subtitle: "Notable Works",
      pageNumber: "23"
    },
    {
      id: 6,
      title: "Skills & Expertise",
      subtitle: "Technical Proficiency",
      pageNumber: "31"
    },
    {
      id: 7,
      title: "Contact & Connect",
      subtitle: "Get in Touch",
      pageNumber: "38"
    }
  ];

  return (
    <div className="toc-page">
      <motion.div 
        className="toc-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Contents</h1>
        <div className="header-decoration" />
      </motion.div>

      <motion.div 
        className="chapters-list"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {chapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            className="chapter-item"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
            whileHover={{ x: 10 }}
            onClick={() => onPageSelect(chapter.id)}
          >
            <div className="chapter-info">
              <h3>{chapter.title}</h3>
              <p>{chapter.subtitle}</p>
            </div>
            <div className="chapter-dots" />
            <span className="page-number">{chapter.pageNumber}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="toc-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="footer-decoration" />
        <p className="footer-note">A journey through code, creativity, and continuous learning</p>
      </motion.div>
    </div>
  );
};

export default TableOfContents; 