import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo" onClick={scrollToTop}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">OK</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          
          <div className="footer-text">
            <p>Designed & Built by Omkar Kale</p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>

          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
