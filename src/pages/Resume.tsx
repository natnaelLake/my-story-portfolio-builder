import { motion } from 'framer-motion';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Resume.css';

const Resume = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadResume = async () => {
    setDownloading(true);
    try {
      const resumeElement = document.querySelector('.resume-content') as HTMLElement;
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('my-resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="resume-page">
      <motion.div 
        className="chapter-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Resume</h1>
        <div className="chapter-decoration">
          <div className="decoration-line" />
          <span className="chapter-number">Resume</span>
          <div className="decoration-line" />
        </div>
      </motion.div>

      <div className="resume-container">
        <div className="resume-content">
          <header className="resume-header">
            <h2>Your Name</h2>
            <p className="title">Full Stack Developer</p>
            <div className="contact-info">
              <span>your.email@example.com</span>
              <span>•</span>
              <span>+1 (234) 567-8900</span>
              <span>•</span>
              <span>Location, Country</span>
            </div>
          </header>

          <section className="resume-section">
            <h3>Professional Summary</h3>
            <p>
              Experienced Full Stack Developer with a proven track record in building
              scalable web applications and leading development teams. Specialized in
              React, Node.js, and cloud technologies.
            </p>
          </section>

          <section className="resume-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <p>React, TypeScript, Next.js, Tailwind CSS</p>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <p>Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="skill-category">
                <h4>DevOps</h4>
                <p>AWS, Docker, CI/CD, Git</p>
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h3>Work Experience</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Senior Full Stack Developer</h4>
                <span className="date">2020 - Present</span>
              </div>
              <p className="company">Tech Company, Inc.</p>
              <ul>
                <li>Led development of microservices architecture</li>
                <li>Improved application performance by 40%</li>
                <li>Mentored junior developers</li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Full Stack Developer</h4>
                <span className="date">2018 - 2020</span>
              </div>
              <p className="company">Software Solutions Ltd.</p>
              <ul>
                <li>Developed and maintained client applications</li>
                <li>Implemented automated testing</li>
                <li>Reduced deployment time by 60%</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <div className="education-header">
                <h4>Bachelor of Science in Computer Science</h4>
                <span className="date">2014 - 2018</span>
              </div>
              <p className="institution">University of Technology</p>
            </div>
          </section>
        </div>

        <motion.button
          className="download-button"
          onClick={downloadResume}
          disabled={downloading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {downloading ? 'Generating PDF...' : 'Download Resume'}
        </motion.button>
      </div>
    </div>
  );
};

export default Resume;