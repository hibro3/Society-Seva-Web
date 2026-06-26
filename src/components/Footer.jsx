

export default function Footer({ scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (scrollToSection && sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md bg-primary text-on-primary">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'hero')} 
          className="flex items-center justify-center md:justify-start gap-2"
        >
          <img 
            alt="SocietySeva Logo" 
            className="h-8 w-8 object-contain rounded-md" 
            src="/logo.jpeg"
          />
          <span className="font-headline-h3 text-headline-h3 text-surface-white font-semibold">SocietySeva</span>
        </a>
        <p className="font-body-sm text-body-sm text-on-primary-container max-w-sm opacity-80">
          © 2024 SocietySeva. All rights reserved. Built for modern community governance.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-stack-md">
        <a className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-white transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
        <a className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-white transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
        <a className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-white transition-colors opacity-80 hover:opacity-100" href="#">Support</a>
        <a className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-white transition-colors opacity-80 hover:opacity-100" href="#">Security</a>
      </div>
      
      <div className="flex gap-4">
        <a 
          className="w-10 h-10 rounded-full border border-on-primary-container/30 flex items-center justify-center text-surface-white hover:bg-surface-white/10 transition-colors" 
          href="#"
          aria-label="Website"
        >
          <span className="material-symbols-outlined">public</span>
        </a>
        <a 
          className="w-10 h-10 rounded-full border border-on-primary-container/30 flex items-center justify-center text-surface-white hover:bg-surface-white/10 transition-colors" 
          href="#"
          aria-label="Contact Email"
        >
          <span className="material-symbols-outlined">mail</span>
        </a>
      </div>
    </footer>
  );
}
