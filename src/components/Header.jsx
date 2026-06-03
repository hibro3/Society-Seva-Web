import React from 'react';
import PillNav from "./PillNav";

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
<PillNav />
      <a href="#download" className="header-cta" onClick={(e) => handleNavClick(e, 'download')}>Download App</a>
        
    </header>
  );
}
