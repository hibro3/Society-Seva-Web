import React from 'react';

const rolesData = [
  {
    badge: 'Admin / Secretary',
    bg: 'var(--blue-light)',
    color: 'var(--blue)',
    title: 'Full control, zero paperwork',
    list: [
      'Create and send bills to all flats',
      'Approve maintenance requests',
      'Post announcements and circulars',
      'View society-wide financial reports',
      'Manage resident profiles and vehicles',
    ],
  },
  {
    badge: 'Resident / Member',
    bg: 'var(--green-light)',
    color: 'var(--green)',
    title: 'Know everything, do anything',
    list: [
      'Pay maintenance bills online',
      'Raise and track complaints',
      'Get real-time notices and alerts',
      'Book society amenities',
      'Pre-approve visitors at the gate',
    ],
  },
  {
    badge: 'Treasurer',
    bg: 'var(--orange-light)',
    color: '#C47F00',
    title: 'Every rupee accounted for',
    list: [
      'Track all inflows and outflows',
      'View pending dues by flat',
      'Download GST-compliant receipts',
      'Export accounts for CA review',
      'Set late payment penalties',
    ],
  },
  {
    badge: 'Security Guard',
    bg: '#F3E8FF',
    color: '#7C3AED',
    title: 'Simple gate management',
    list: [
      'Log visitor entries and exits',
      'Verify pre-approved guests',
      'Record vehicle movements',
      'Raise urgent alerts to admin',
      'Works on any Android phone',
    ],
  },
];

export default function Roles() {
  return (
    <section className="section" id="roles">
      <div className="section-eyebrow">04 — Who It's For</div>
      <h2 className="section-title">Built for every role in your society</h2>
      <p className="section-sub">Different people, different needs — Society Seva gives each role exactly what they need without the clutter.</p>
      <div className="roles-grid">
        {rolesData.map((role, i) => (
          <div key={i} className="role-card">
            <span className="role-badge" style={{ backgroundColor: role.bg, color: role.color }}>{role.badge}</span>
            <div className="role-title">{role.title}</div>
            <ul className="role-list">
              {role.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
