import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🔗',
      description: 'Check out my open source contributions'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼',
      description: 'Connect with me professionally'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦',
      description: 'Follow me for tech insights and updates'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1500));
    setMessageSent(true);
    setSending(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <motion.div 
        className="chapter-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Contact & Connect</h1>
        <div className="chapter-decoration">
          <div className="decoration-line" />
          <span className="chapter-number">Contact</span>
          <div className="decoration-line" />
        </div>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="thank-you-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Thank You for Exploring My Journey</h2>
          <p>I appreciate you taking the time to review my portfolio and learn about my development journey. I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology.</p>
        </motion.div>

        <motion.div 
          className="availability-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Currently Available For</h2>
          <div className="availability-items">
            <div className="availability-item">
              <span className="availability-icon">💼</span>
              <span>Full-time Positions</span>
            </div>
            <div className="availability-item">
              <span className="availability-icon">🤝</span>
              <span>Freelance Projects</span>
            </div>
            <div className="availability-item">
              <span className="availability-icon">🤓</span>
              <span>Technical Consulting</span>
            </div>
            <div className="availability-item">
              <span className="availability-icon">👥</span>
              <span>Team Collaboration</span>
            </div>
          </div>
        </motion.div>

        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div className="info-details">
              <h3>Email</h3>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💼</span>
            <div className="info-details">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💻</span>
            <div className="info-details">
              <h3>GitHub</h3>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🐦</span>
            <div className="info-details">
              <h3>Twitter</h3>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                @yourusername
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send me a message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({
                  ...formState,
                  name: e.target.value
                })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formState.email}
                onChange={(e) => setFormState({
                  ...formState,
                  email: e.target.value
                })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Message subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formState.message}
                onChange={(e) => setFormState({
                  ...formState,
                  message: e.target.value
                })}
                rows={6}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={sending || messageSent}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? 'Sending...' : messageSent ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </div>

      <div className="page-decoration">
        <div className="decoration-line" />
      </div>
    </div>
  );
};

export default Contact;