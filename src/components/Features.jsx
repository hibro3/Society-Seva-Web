import React from 'react';

const featuresData = [
  {
    icon: '💰',
    bg: '#E8F0FB',
    title: 'Bill Management',
    desc: 'Generate, send, and track maintenance bills. Residents get instant notifications and can pay directly in-app.',
  },
  {
    icon: '📢',
    bg: '#EAF4EA',
    title: 'Society Announcements',
    desc: 'Push important notices, event updates, and emergency alerts to all residents instantly.',
  },
  {
    icon: '🔧',
    bg: '#FEF4E3',
    title: 'Maintenance Requests',
    desc: 'Residents raise complaints, track status, and get resolved confirmations — all without phone calls.',
  },
  {
    icon: '💳',
    bg: '#F3E8FF',
    title: 'Online Payments',
    desc: 'UPI, debit/credit card, and net banking supported. Payment receipts generated automatically.',
  },
  {
    icon: '📋',
    bg: '#FFE8E8',
    title: 'Resident Directory',
    desc: 'Manage flat-wise resident data, ownership details, vehicle records, and emergency contacts in one place.',
  },
  {
    icon: '📊',
    bg: '#E8FFF4',
    title: 'Financial Reports',
    desc: 'Monthly, quarterly, and yearly society accounts with downloadable PDF reports for the committee.',
  },
  {
    icon: '🚗',
    bg: '#FFF8E8',
    title: 'Visitor & Vehicle Log',
    desc: 'Gate entry log for visitors and vehicles. Pre-approve guests and track who enters and exits.',
  },
  {
    icon: '📅',
    bg: '#E8F4FF',
    title: 'Amenity Booking',
    desc: 'Let residents book the clubhouse, swimming pool, or party hall — with conflict detection built in.',
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-eyebrow">02 — Features</div>
      <h2 className="section-title">Everything your society needs</h2>
      <p className="section-sub">From maintenance bills to visitor logs — Society Seva handles it all so you can focus on what matters.</p>
      <div className="features-grid">
        {featuresData.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon" style={{ backgroundColor: f.bg }}>{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
