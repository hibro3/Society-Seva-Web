import React from 'react';

export default function Download() {
  return (
    <section className="section" id="download">
      <div className="section-eyebrow">06 — Download</div>
      <h2 className="section-title">Get Society Seva today</h2>
      <p className="section-sub">Free to download. Your first society is free to set up. No hidden charges, no surprise fees.</p>
      <div className="download-grid">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-btn">
          <div className="store-btn-icon">▶</div>
          <div>
            <div className="store-btn-sub">Get it on</div>
            <div className="store-btn-name">Google Play</div>
          </div>
        </a>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-btn">
          <div className="store-btn-icon"></div>
          <div>
            <div className="store-btn-sub">Download on the</div>
            <div className="store-btn-name">App Store</div>
          </div>
        </a>
      </div>
      <div className="download-badges">
        <div className="download-badge">4.8 on Google Play</div>
        <div className="download-badge">4.7 on App Store</div>
        <div className="download-badge">Free to download</div>
      </div>
      <div className="download-note">
        <span>📱</span> Compatible with Android 7.0+ and iOS 13+
      </div>
    </section>
  );
}
