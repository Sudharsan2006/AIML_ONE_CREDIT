import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: 'Aspiring Data Analyst',
    company: 'Projects & Freelance',
    period: '2025 — 2026',
    description: 'Diving deep into data analytics, machine learning, and predictive modeling. Building ML-powered web apps like Coffee Sales Predictor (LightGBM, 89.62% accuracy) and Smart Money trading strategies.',
    skills: ['Python', 'LightGBM', 'Data Analysis', 'Machine Learning'],
  },
  {
    role: 'UI/UX Designer & Frontend Developer',
    company: 'Self-Learning & Projects',
    period: '2024 — 2025',
    description: 'Learned modern UI/UX design principles and built stunning web interfaces. Created GlaucoVision with 3D rotating planets using Three.js and developed responsive, premium-quality frontends.',
    skills: ['React', 'Three.js', 'Figma', 'CSS', 'UI/UX'],
  },
  {
    role: 'Programming Beginner',
    company: 'Academic & Self-Learning',
    period: '2023 — 2024',
    description: 'Started the programming journey with Python and web fundamentals. Explored HTML, CSS, JavaScript basics, built first projects like Clock & Stopwatch apps, and laid the foundation for everything ahead.',
    skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="experience section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Journey</span>
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__timeline-line" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
            >
              <div className="experience__node">
                <div className="experience__node-dot" />
              </div>
              <div className="experience__card glass">
                <span className="experience__period">{exp.period}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <h4 className="experience__company">{exp.company}</h4>
                <p className="experience__description">{exp.description}</p>
                <div className="experience__skills">
                  {exp.skills.map((s) => (
                    <span key={s} className="experience__skill-tag">{s}</span>
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
