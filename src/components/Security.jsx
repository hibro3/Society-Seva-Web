import React from 'react';

const securityData = [
  {
    icon: '🔒',
    title: 'End-to-End Encryption',
    desc: 'All data transmitted between the app and our servers is encrypted using TLS 1.3.',
  },
  {
    icon: '🇮🇳',
    title: 'Data Stored in India',
    desc: 'All society and resident data is stored on servers located within India, compliant with Indian data laws.',
  },
  {
    icon: '🛡️',
    title: 'Role-Based Access',
    desc: 'Residents see only their own data. Admin, Treasurer, and Guard roles have separate, scoped permissions.',
  },
  {
    icon: '💾',
    title: 'Daily Backups',
    desc: "Automated daily backups with 90-day retention ensure your society's data is never lost.",
  },
];

export default function Security() {
  return (
    <section className="section" id="security" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="section-eyebrow">05 — Security</div>
      <h2 className="section-title">Your data is safe with us</h2>
      <p className="section-sub">Society Seva is built with enterprise-grade security so your residents' data and society finances are always protected.</p>
      <div className="security-grid">
        {securityData.map((card, i) => (
          <div key={i} className="security-card">
            <div className="security-icon">{card.icon}</div>
            <div className="security-title">{card.title}</div>
            <div className="security-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
