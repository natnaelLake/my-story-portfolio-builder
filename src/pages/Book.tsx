import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cover from './Cover';
import TableOfContents from './TableOfContents';
import Beginning from './Beginning';
import LearningPath from './LearningPath';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import FinalCover from './FinalCover';
import DownloadBook from './DownloadBook';
import Resume from './Resume';
import './Book.css';

interface Page {
  id: number;
  type: 'cover' | 'toc' | 'chapter' | 'experience' | 'projects' | 'skills' | 'contact' | 'final' | 'download' | 'resume';
  content: {
    title: string;
    subtitle?: string;
    component: React.ReactNode;
  };
}

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Calculate current pages for the spread
  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = leftPageIndex + 1;

  const handlePageSelect = (pageId: number) => {
    // Convert page number to spread number (two pages at a time)
    const spreadIndex = Math.floor(pageId / 2);
    setIsFlipping(true);
    setCurrentSpread(spreadIndex);
    navigate(`/spread/${spreadIndex}`);
  };

  const handlePageFlip = (direction: 'prev' | 'next') => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    const newSpread = direction === 'next' ? 
      Math.min(currentSpread + 1, Math.floor((pages.length - 1) / 2)) : 
      Math.max(currentSpread - 1, 0);
    
    setCurrentSpread(newSpread);
    navigate(`/spread/${newSpread}`);
  };

  const pages: Page[] = [
    {
      id: 0,
      type: 'cover',
      content: {
        title: "My Journey",
        subtitle: "A Developer's Story",
        component: <Cover onOpen={() => setIsOpen(true)} />
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
    {
      id: 2,
      type: 'chapter',
      content: {
        title: "The Beginning",
        component: <Beginning />
      }
    },
    {
      id: 3,
      type: 'chapter',
      content: {
        title: "Learning Path",
        component: <LearningPath />
      }
    },
    {
      id: 4,
      type: 'experience',
      content: {
        title: "Professional Journey",
        component: <Experience />
      }
    },
    {
      id: 5,
      type: 'projects',
      content: {
        title: "Projects & Achievements",
        component: <Projects />
      }
    },
    {
      id: 6,
      type: 'skills',
      content: {
        title: "Skills & Expertise",
        component: <Skills />
      }
    },
    {
      id: 7,
      type: 'contact',
      content: {
        title: "Contact & Connect",
        component: <Contact />
      }
    },
    {
      id: 8,
      type: 'resume',
      content: {
        title: "Resume",
        component: <Resume />
      }
    },
    {
      id: 9,
      type: 'final',
      content: {
        title: "Thank You",
        component: <FinalCover />
      }
    }
   
  ];

  useEffect(() => {
    const spreadId = location.pathname.split('/').pop();
    if (spreadId && !isNaN(Number(spreadId))) {
      setCurrentSpread(Number(spreadId));
    }
  }, [location]);

  return (
    <div className="book-container">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="cover"
            className="book-cover"
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          >
            {pages[0].content.component}
          </motion.div>
        ) : (
          <motion.div
            key="book-open"
            className="book-open"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <div className="book-pages">
              {/* Left Page */}
              <div className="page-container left-page">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`left-${leftPageIndex}`}
                    className="page"
                    initial={{ rotateY: isFlipping ? -180 : 0 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 180 }}
                    transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                  >
                    {pages[leftPageIndex].content.component}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Page */}
              <div className="page-container right-page">
                {rightPageIndex < pages.length && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`right-${rightPageIndex}`}
                      className="page"
                      initial={{ rotateY: isFlipping ? 180 : 0 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: -180 }}
                      transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                      onAnimationComplete={() => setIsFlipping(false)}
                    >
                      {pages[rightPageIndex].content.component}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              <div className="book-spine" />
            </div>

            <div className="book-navigation">
              <button
                className="nav-button prev"
                onClick={() => handlePageFlip('prev')}
                disabled={currentSpread <= 0}
              >
                ←
              </button>
              <span className="page-number">
                {leftPageIndex + 1}-{Math.min(rightPageIndex + 1, pages.length)}
              </span>
              <button
                className="nav-button next"
                onClick={() => handlePageFlip('next')}
                disabled={rightPageIndex >= pages.length - 1}
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

export default Book; 