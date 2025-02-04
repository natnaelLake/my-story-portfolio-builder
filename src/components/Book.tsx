import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Book.css';

interface Page {
  id: number;
  type: 'cover' | 'toc' | 'chapter' | 'experience' | 'projects' | 'contact';
  content: {
    title: string;
    subtitle?: string;
    component: React.ReactNode;
  };
}

export const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pages: Page[] = [
    {
      id: 0,
      type: 'cover',
      content: {
        title: "My Journey",
        subtitle: "A Developer's Story",
        component: <CoverPage onOpen={() => setIsOpen(true)} />
      }
    },
    {
      id: 1,
      type: 'toc',
      content: {
        title: "Table of Contents",
        component: <TableOfContents onPageSelect={handlePageSelect} />
      }
    },
    // Add more pages...
  ];

  const handlePageFlip = (direction: 'next' | 'prev') => {
    setIsFlipping(true);
    const nextPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    
    if (nextPage >= 0 && nextPage < pages.length) {
      setCurrentPage(nextPage);
      navigate(`/page/${nextPage}`);
    }
  };

  const handlePageSelect = (pageId: number) => {
    setCurrentPage(pageId);
    navigate(`/page/${pageId}`);
  };

  return (
    <div className="book-container">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            className="book-cover"
            initial={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 1 }}
          >
            {pages[0].content.component}
          </motion.div>
        ) : (
          <motion.div className="book-open">
            <div className="page-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  className="page"
                  initial={{ opacity: 0, rotateY: isFlipping ? 180 : 0 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -180 }}
                  transition={{ duration: 0.5 }}
                  onAnimationComplete={() => setIsFlipping(false)}
                >
                  {pages[currentPage].content.component}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="book-navigation">
              <button
                className="nav-button prev"
                onClick={() => handlePageFlip('prev')}
                disabled={currentPage <= 0}
              >
                ←
              </button>
              <span className="page-number">
                Page {currentPage} of {pages.length - 1}
              </span>
              <button
                className="nav-button next"
                onClick={() => handlePageFlip('next')}
                disabled={currentPage >= pages.length - 1}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 