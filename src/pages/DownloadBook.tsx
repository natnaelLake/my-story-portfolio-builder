import { useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './DownloadBook.css';

const DownloadBook = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const generatePDF = async () => {
    setDownloading(true);
    setProgress(0);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Create a temporary container
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '-9999px';
      document.body.appendChild(tempContainer);

      // Get all pages content
      const pages = document.querySelectorAll('.page-content');
      const totalPages = pages.length;

      for (let i = 0; i < totalPages; i++) {
        // Clone the page content
        const pageClone = pages[i].cloneNode(true) as HTMLElement;
        
        // Set up the temporary page for capture
        const tempPage = document.createElement('div');
        tempPage.style.width = '800px'; // Fixed width for consistent capture
        tempPage.style.background = 'white';
        tempPage.style.padding = '40px';
        tempPage.appendChild(pageClone);
        tempContainer.appendChild(tempPage);

        // Capture the page
        const canvas = await html2canvas(tempPage, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        // Add to PDF
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        if (i > 0) pdf.addPage();

        // Calculate dimensions to fit A4
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

        // Clean up
        tempContainer.removeChild(tempPage);
        
        // Update progress
        setProgress(((i + 1) / totalPages) * 100);
      }

      // Clean up the temporary container
      document.body.removeChild(tempContainer);

      // Save the PDF
      pdf.save('my-portfolio.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setDownloading(false);
      setProgress(0);
    }
  };

  return (
    <div className="download-page">
      <motion.div 
        className="chapter-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Download Portfolio</h1>
        <div className="chapter-decoration">
          <div className="decoration-line" />
          <span className="chapter-number">Download</span>
          <div className="decoration-line" />
        </div>
      </motion.div>

      <div className="download-content">
        <motion.div 
          className="download-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Save My Portfolio</h2>
          <p>
            Download a PDF version of my portfolio to read offline or share with others.
            The PDF includes all chapters and maintains the book-style formatting.
          </p>

          {downloading ? (
            <div className="download-progress">
              <div 
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
              <span>{Math.round(progress)}%</span>
            </div>
          ) : (
            <motion.button
              className="download-button"
              onClick={generatePDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PDF
            </motion.button>
          )}
        </motion.div>

        <motion.div 
          className="download-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>
            Note: The download process might take a few moments depending on your device
            and connection speed. Please be patient while the PDF is being generated.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadBook; 