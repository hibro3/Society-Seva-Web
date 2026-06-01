import React from 'react';

const sidebarItems = [
  { id: 'hero', num: '01', label: 'Overview' },
  { id: 'features', num: '02', label: 'Features' },
  { id: 'how-it-works', num: '03', label: 'How It Works' },
  { id: 'roles', num: '04', label: "Who It's For" },
  { id: 'security', num: '05', label: 'Security' },
  { id: 'download', num: '06', label: 'Download' },
  { id: 'contact', num: '07', label: 'Contact' },
];

export default function Sidebar({
  activeSection,
  scrollProgress,
  scrollToSection,
}) {
  return (
    <nav className="sidebar" id="sidebar">
      <ul className="sidebar-list">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
            data-target={item.id}
            onClick={() => scrollToSection(item.id)}
          >
           <span
  className="sidebar-progress"
  style={{
    width:
      activeSection === item.id
        ? `${scrollProgress}%`
        : '0%',
  }}
></span>
            <span className="sidebar-num">{item.num}</span>
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
