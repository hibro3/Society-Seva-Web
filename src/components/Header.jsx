import React from 'react';

export default function Header({ scrollToSection }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <header>
      <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
        <div className="logo-mark">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C10 2 4 6 4 11C4 14.3137 6.68629 17 10 17C13.3137 17 16 14.3137 16 11C16 6 10 2 10 2Z" fill="white" fillOpacity="0.9"/>
            <rect x="7" y="10" width="6" height="5" rx="1" fill="white" fillOpacity="0.5"/>
            <rect x="8.5" y="7" width="3" height="4" rx="0.5" fill="white"/>
          </svg>
        </div>
        <span className="logo-name">Society <span>Seva</span></span>
      </a>
      <nav className="header-nav">
        <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
        <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>How it works</a>
        <a href="#roles" onClick={(e) => handleNavClick(e, 'roles')}>Who it's for</a>
        <a href="#security" onClick={(e) => handleNavClick(e, 'security')}>Security</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </nav>
      <a href="#download" className="header-cta" onClick={(e) => handleNavClick(e, 'download')}>Download App</a>
    </header>
  );
}
