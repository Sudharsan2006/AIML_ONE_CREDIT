import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiReact, SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiGit, SiHtml5, SiTailwindcss, SiTypescript, SiFirebase, SiFigma } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: DiCss3, color: '#1572B6' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="about section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about creating <span className="gradient-text">digital magic</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm an aspiring data analyst who loves finding stories hidden in data. 
              With strong skills in Python, SQL, and visualization tools, I transform 
              raw datasets into clear, actionable insights.
            </p>
            <p>
              My journey started with curiosity about patterns in data, and has 
              evolved into a deep passion for machine learning and predictive analytics. 
              I enjoy building end-to-end data pipelines and interactive dashboards.
            </p>
            <p>
              When I'm not analyzing data, you'll find me exploring new ML models, 
              working on Kaggle competitions, or building web applications that bring 
              data science to life.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number gradient-text">10+</span>
                <span className="about__stat-label">Projects Completed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number gradient-text">2+</span>
                <span className="about__stat-label">Years Learning</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number gradient-text">5+</span>
                <span className="about__stat-label">Technologies</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__skills"
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <h3 className="about__skills-title">Tech Stack</h3>
            <div className="about__skills-grid">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="about__skill-card glass"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <skill.icon size={28} color={skill.color} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
