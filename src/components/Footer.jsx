import React from 'react';

export default function Footer({ scrollToSection }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer>
      <a
        href="#hero"
        className="logo"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
        onClick={(e) => handleNavClick(e, 'hero')}
      >
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '16px', color: 'var(--text)' }}>
          Society <span style={{ color: 'var(--green)' }}>Seva</span>
        </span>
      </a>
      <div className="footer-links">
        <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
        <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
        <a href="#refund" onClick={(e) => e.preventDefault()}>Refund Policy</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </div>
      <div>© 2025 Society Seva. Made with ❤️ in Pune, India.</div>
    </footer>
  );
}
