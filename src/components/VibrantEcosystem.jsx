export default function VibrantEcosystem() {
  return (
    <section className="reveal-on-scroll py-stack-lg px-margin-desktop bg-surface-white overflow-hidden" id="vibrant-ecosystem">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-label-caps text-label-caps tracking-widest mb-3 uppercase">
            Community Benefits
          </span>
          <h2 className="font-headline-h2 text-headline-h2 md:text-headline-h1 text-primary mb-4">
            A Vibrant Community Ecosystem
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4" />
          <p className="text-on-surface-variant text-body-lg">
            Stay updated with everything happening in your neighborhood — from summer fests to maintenance schedules.
          </p>
        </div>

        {/* ── Society Announcements — full width hero image ── */}
        <div className="mb-20 relative rounded-3xl overflow-hidden shadow-xl border border-outline-variant/20 group">
          <img
            src="/societyannouncement.png"
            alt="Society Notice Board and Announcements"
            className="w-full h-80 md:h-[480px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <span className="inline-flex items-center gap-2 text-accent-success font-label-caps text-label-caps mb-3">
              <span className="material-symbols-outlined text-base">notifications_active</span>
              LIVE ANNOUNCEMENTS
            </span>
            <h3 className="text-2xl md:text-4xl font-bold mb-2">Notice Board, Reimagined</h3>
            <p className="text-white/80 max-w-lg text-body-lg">
              Committees can post notices, events, and emergency alerts instantly. Every resident gets push notifications in real time.
            </p>
          </div>
        </div>

        {/* ── Payment + Security: two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          {/* Payment Card */}
          <div className="reveal-on-scroll rounded-3xl overflow-hidden border border-outline-variant/20 shadow-md bg-gradient-to-br from-surface-container-low to-surface-white flex flex-col" id="unified-payment">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/onlinepayment.png"
                alt="Online Payment via UPI"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-white/60" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-secondary text-white rounded-xl flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <h3 className="font-headline-h2 text-headline-h2 text-primary">Unified Payment Gateway</h3>
              </div>
              <p className="text-on-surface-variant text-body-lg mb-6">
                Clear maintenance dues using your preferred UPI app. Integrates with Google Pay, PhonePe, Paytm, and more for 100% secure, instant transactions.
              </p>
              {/* UPI icons row */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['₹ UPI', 'GPay', 'PhonePe', 'Paytm'].map((label, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-button text-button border border-secondary/20">
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent-success/10 rounded-xl border border-accent-success/20 mt-auto">
                <span className="material-symbols-outlined text-accent-success text-2xl">verified_user</span>
                <span className="text-primary font-semibold text-body-lg">Zero Transaction Fees for Residents</span>
              </div>
            </div>
          </div>

          {/* Security / Visitor Card */}
          <div className="reveal-on-scroll rounded-3xl overflow-hidden border border-outline-variant/20 shadow-md bg-gradient-to-br from-surface-container-low to-surface-white flex flex-col" id="advanced-security">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/visitor.png"
                alt="Visitor and Vehicle Management"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-white/60" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <h3 className="font-headline-h2 text-headline-h2 text-primary">Advanced Security Protocols</h3>
              </div>
              <p className="text-on-surface-variant text-body-lg mb-6">
                Monitor every entry and exit. Real-time data on expected visitors, check-ins, and vehicle activities — all from your phone.
              </p>
              {/* Feature bullets */}
              <ul className="space-y-3 mt-auto">
                {[
                  { icon: 'how_to_reg', label: 'Pre-approve guests remotely' },
                  { icon: 'directions_car', label: 'Vehicle entry/exit log' },
                  { icon: 'notifications', label: 'Instant guard notifications' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-base">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Residency Directory + Financials: two smaller tiles ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal-on-scroll group relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 h-64">
            <img
              src="/residency.png"
              alt="Resident Directory"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="material-symbols-outlined mb-2 text-secondary-fixed-dim">people</span>
              <h4 className="font-headline-h3 text-headline-h3 font-bold">Resident Directory</h4>
              <p className="text-white/70 text-body-sm mt-1">Secure access to neighbor and committee contacts.</p>
            </div>
          </div>
          <div className="reveal-on-scroll group relative rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 h-64">
            <img
              src="/financialreport.png"
              alt="Financial Reports"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="material-symbols-outlined mb-2 text-accent-success">bar_chart</span>
              <h4 className="font-headline-h3 text-headline-h3 font-bold">Financial Reports</h4>
              <p className="text-white/70 text-body-sm mt-1">Complete transparency in collections, expenses, and balances.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
