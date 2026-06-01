import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Roles from './components/Roles';
import Security from './components/Security';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = [
  'hero',
  'features',
  'how-it-works',
  'roles',
  'security',
  'download',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 64;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset -
      20;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const headerH = header ? header.offsetHeight : 64;

      let current = sections[0];
      let progress = 0;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= headerH + 80 && rect.bottom >= headerH + 80) {
          current = id;

          const totalScrollable = rect.height;
          const scrolledInside = headerH + 80 - rect.top;

          progress = Math.min(
            100,
            Math.max(0, (scrolledInside / totalScrollable) * 100)
          );

          break;
        }
      }

      setActiveSection(current);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <div className="page-body">
        <Sidebar
          activeSection={activeSection}
          scrollProgress={scrollProgress}
          scrollToSection={scrollToSection}
        />

        <main className="main-content">
          <Hero />
          <Features />
          <HowItWorks />
          <Roles />
          <Security />
          <Download />
          <Contact />
        </main>
      </div>

      <Footer scrollToSection={scrollToSection} />
    </>
  );
}