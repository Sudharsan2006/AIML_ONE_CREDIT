import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Coffee Sales ML Predictor',
    description: 'A machine learning-powered web app that predicts coffee product categories using LightGBM with 89.62% accuracy. Features a Flask API backend and interactive frontend.',
    tech: ['Python', 'LightGBM', 'Flask', 'JavaScript'],
    github: 'https://github.com/Sudharsan2006',
    live: '#',
    featured: true,
    image: null,
    gradient: 'linear-gradient(135deg, #6f4e37, #a0522d)',
  },
  {
    title: 'GlaucoVision',
    description: 'A medical AI application for glaucoma detection with a stunning 3D space-themed UI featuring rotating planets built with Three.js and WebGL.',
    tech: ['React', 'Three.js', 'WebGL', 'AI/ML'],
    github: 'https://github.com/Sudharsan2006',
    live: '#',
    featured: true,
    image: null,
    gradient: 'linear-gradient(135deg, #1a1a2e, #6366f1)',
  },
  {
    title: 'Smart Money Trading Strategy',
    description: 'Advanced Pine Script trading strategy implementing ICT Smart Money Concepts with confluence scoring, FVG entries, and trendline breakout targets.',
    tech: ['Pine Script', 'TradingView', 'Technical Analysis'],
    github: 'https://github.com/Sudharsan2006',
    live: '#',
    featured: false,
    image: null,
    gradient: 'linear-gradient(135deg, #0f3443, #34e89e)',
  },
  {
    title: 'International Cost Calculator',
    description: 'A web application that calculates total landed cost for international purchases, comparing with Indian marketplace prices to recommend the best buying option.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/Sudharsan2006',
    live: '#',
    featured: false,
    image: null,
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    title: 'Study Group Allocator',
    description: 'Web app that allocates 60 students to 5 subjects based on individual mindsets, with search and filtering capabilities for study group management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sudharsan2006',
    live: '#',
    featured: false,
    image: null,
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio — a React + Vite app featuring glassmorphism design, Framer Motion animations, scroll interactions, and a dark premium aesthetic.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: 'https://github.com/Sudharsan2006',
    live: '#',
    featured: false,
    image: null,
    gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
  },
];

const filters = ['All', 'React', 'Python', 'JavaScript', 'HTML'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="projects section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`projects__filter ${activeFilter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className={`projects__card glass ${project.featured ? 'projects__card--featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8 }}
            >
              {/* Card top gradient */}
              <div className="projects__card-image" style={{ background: project.gradient }}>
                <div className="projects__card-overlay">
                  <div className="projects__card-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="projects__card-icon" aria-label="GitHub">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="projects__card-icon" aria-label="Live Demo">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__card-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
