import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Placeholder — integrate with EmailJS or Formspree
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="contact section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-card glass">
              <div className="contact__info-icon">
                <FiMail size={22} />
              </div>
              <div>
                <h4>Email</h4>
                <p>usdharsansus8@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-card glass">
              <div className="contact__info-icon">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
            <div className="contact__info-card glass">
              <div className="contact__info-icon">
                <FiPhone size={22} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact__form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary contact__submit">
              Send Message
              <FiSend />
            </button>

            {status === 'success' && (
              <motion.p className="contact__status contact__status--success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p className="contact__status contact__status--error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Please fill in all fields.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
