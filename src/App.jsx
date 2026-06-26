import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VibrantEcosystem from './components/VibrantEcosystem';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';
import LightRays from './components/LightRays';

export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.getElementById('main-header');
    const offset = header ? header.offsetHeight : 72;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    // IntersectionObserver for scroll-reveal animations (.reveal-on-scroll)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after revealing to prevent repeated triggering
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before section fully enters viewport
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => revealObserver.observe(el));

    return () => {
      elements.forEach((el) => {
        try {
          revealObserver.unobserve(el);
        } catch {
          // ignore
        }
      });
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Shader Background Overlay with canvas OGL LightRays */}
      <div id="shader-bg">
        <LightRays
          raysOrigin="top-right"
          raysColor="#005fb0"
          pulsating={true}
          noiseAmount={0.03}
          fadeDistance={2.5}
          lightSpread={0.9}
          saturation={0.8}
          raysSpeed={0.8}
          followMouse={true}
          mouseInfluence={0.12}
          className="w-full h-full"
        />
      </div>

      <Header scrollToSection={scrollToSection} />

      <main>
        <Hero />
        <VibrantEcosystem />
        <Features />
        <Download />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </>
  );
}