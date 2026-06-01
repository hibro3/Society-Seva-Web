import React from 'react';

export default function Hero() {
  return (
    <section className="section" id="hero">
      <div className="hero-bg-circle"></div>
      <div className="hero-tag">
        <div className="hero-tag-dot"></div>
        Now available on Android &amp; iOS
      </div>
      <h1 className="hero-headline">
        Your society,<br /><em>seamlessly</em><br />managed.
      </h1>
      <p className="hero-sub">
        Society Seva brings bills, maintenance, announcements, and resident communication into one simple app — built for every apartment society in India.
      </p>
      <div className="hero-actions">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76a2.4 2.4 0 0 0 2.58-.28l13.17-7.62-3.29-3.29L3.18 23.76zm-1.16-20.5A2.4 2.4 0 0 0 2 4.5v15a2.4 2.4 0 0 0 .04.74l9.22-9.22-9.24-7.76zm19.06 8.06-3.08-1.78-3.64 3.64 3.64 3.64 3.1-1.8a2.4 2.4 0 0 0 0-3.7zM5.76.52A2.4 2.4 0 0 0 3.18.24l12.47 12.46 3.29-3.29L5.76.52z" />
          </svg>
          Google Play
        </a>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="hero-stat-val">500<span>+</span></div>
          <div className="hero-stat-label">Societies onboarded</div>
        </div>
        <div>
          <div className="hero-stat-val">50K<span>+</span></div>
          <div className="hero-stat-label">Residents using the app</div>
        </div>
        <div>
          <div className="hero-stat-val">4.8<span>★</span></div>
          <div className="hero-stat-label">App store rating</div>
        </div>
        <div>
          <div className="hero-stat-val">₹0<span></span></div>
          <div className="hero-stat-label">Hidden charges, ever</div>
        </div>
      </div>
    </section>
  );
}
