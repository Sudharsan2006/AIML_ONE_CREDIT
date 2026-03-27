import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="gradient-text">SR</span>
            </a>
            <p className="footer__tagline">Turning data into insights with passion and precision.</p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__social">
            <h4>Connect</h4>
            <div className="footer__social-icons">
              <a href="https://github.com/Sudharsan2006" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/sudharsan-r-v-298549292/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Sudharsan R V. Built with <FiHeart className="footer__heart" /> and React.
          </p>
          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
