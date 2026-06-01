import React, { useState } from 'react';

const contactInfoItems = [
  { icon: '📧', label: 'Email', val: 'aytidasupport@gmail.com' },
  { icon: '📞', label: 'Phone', val: '+91 00000 00000' },
  { icon: '📍', label: 'Office', val: 'Pune, Maharashtra, India' },
  { icon: '⏰', label: 'Support Hours', val: 'Mon – Sat, 9 AM to 7 PM IST' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="section-eyebrow">07 — Contact</div>
      <h2 className="section-title">Get in touch</h2>
      <p className="section-sub">Have questions about onboarding your society? Our team typically responds within a few hours.</p>
      <div className="contact-grid">
        <div>
          {contactInfoItems.map((item, i) => (
            <div key={i} className="contact-info-item">
              <div className="contact-icon">{item.icon}</div>
              <div>
                <div className="contact-label">{item.label}</div>
                <div className="contact-val">{item.val}</div>
              </div>
            </div>
          ))}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" placeholder="Viraj Jambhulkar" required />
            </div>
            <div className="form-field">
              <label className="form-label">Phone / Email</label>
              <input className="form-input" type="text" placeholder="+91 00000 00000" required />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Society Name</label>
            <input className="form-input" type="text" placeholder="Green Valley Apartments, Pune" required />
          </div>
          <div className="form-field">
            <label className="form-label">I am a</label>
            <select className="form-select form-input">
              <option>Society Secretary / Admin</option>
              <option>Resident / Member</option>
              <option>Treasurer</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell us about your society or your question..." required></textarea>
          </div>
          <button
            type="submit"
            className="form-submit"
            style={submitted ? { backgroundColor: 'var(--green)' } : undefined}
          >
            {submitted ? 'Message sent! ✓' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
