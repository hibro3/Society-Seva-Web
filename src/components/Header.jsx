import { useState, useEffect } from 'react';

export default function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 flex justify-between items-center w-full px-margin-desktop max-w-full mx-auto h-[72px] bg-surface-white border-b border-outline-variant shadow-sm transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`} 
      id="main-header"
    >
      <div className="max-w-[1280px] w-full mx-auto flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-2 cursor-pointer">
          <img 
            alt="SocietySeva Logo" 
            className="h-10 w-10 object-contain rounded-lg border border-outline-variant/30" 
            src="/logo.jpeg"
          />
          <span className="font-headline-h2 text-headline-h2 font-bold text-primary">SocietySeva</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-stack-lg">
          <a 
            className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200 ease-in-out" 
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </a>
          <a 
            className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200 ease-in-out" 
            href="#vibrant-ecosystem"
            onClick={(e) => handleNavClick(e, 'vibrant-ecosystem')}
          >
            Benefits
          </a>
          <a 
            className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200 ease-in-out" 
            href="#download"
            onClick={(e) => handleNavClick(e, 'download')}
          >
            Download
          </a>
        </nav>
        
        <a 
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-button text-button hover:bg-primary-container transition-colors shadow-sm" 
          href="#download"
          onClick={(e) => handleNavClick(e, 'download')}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
