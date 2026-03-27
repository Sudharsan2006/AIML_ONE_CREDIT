import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import OrbitalBackground from './OrbitalBackground';

const roles = ['Aspiring Data Analyst', 'Python Enthusiast', 'ML Explorer', 'Data Storyteller'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="home" className="hero">
      {/* Orbital planet animation in hero */}
      <OrbitalBackground />

      {/* Grid pattern overlay */}
      <div className="hero__grid-pattern" />

      <motion.div
        className="hero__content section-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero__greeting" variants={item}>
          Hello, I'm
        </motion.span>

        <motion.h1 className="hero__name" variants={item}>
          Sudharsan R V<span className="gradient-text">.</span>
        </motion.h1>

        <motion.div className="hero__role-wrapper" variants={item}>
          <span className="hero__role">
            {displayText}
            <span className="hero__cursor">|</span>
          </span>
        </motion.div>

        <motion.p className="hero__description" variants={item}>
          I turn raw data into actionable insights. Passionate about analytics, 
          machine learning, and building data-driven solutions that matter.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View My Work
            <FiArrowDown />
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div className="hero__socials" variants={item}>
          <a href="https://github.com/Sudharsan2006" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sudharsan-r-v-298549292/" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:usdharsansus8@gmail.com" className="hero__social-link" aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
