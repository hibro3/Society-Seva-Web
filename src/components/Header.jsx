import React from 'react';

export default function Header({ scrollToSection }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <header>
     <a href="#hero" className="logo">
  <img
    src="/logo.jpeg"
    alt="Society Seva"
    className="logo-image"
  />

  <span className="logo-name">
    Society <span>Seva</span>
  </span>
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
