export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 px-margin-desktop min-h-[600px] flex items-center" id="hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern residential architecture"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdjfWZa8h29jL9NI0Ujk4xwbQEFNSyZWJA-wuJHz3lIdZvGdShBnSTImb3IlN3DcU8uviqJTfIXEQ1FM1JccnH_oSBxkQKxFDrOOOVF8KFzzXPKOFScXMwZUDlnN5hWV98ZYjfdSm3E2VnDbYgdmJ0vqrrpj9L-s3di9U3MqZqQOrGUIuA2o5H7abCHsIxwSNzGUNkJm7SVOR-Q9WQlvI-Qefl-Q5mKCnMirkmgiBIhBlkXMWaA3KPXiHFaBAd8wx-T3aqCg7H0pYx"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/60 to-deep-navy/30"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center w-full">
        {/* Left — copy */}
        <div className="space-y-6">
          {/* Live badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></span>
            <span className="text-white font-label-caps text-label-caps">500+ Societies Live Across India</span>
          </div>

          <h1 className="animate-fade-in-up font-headline-h1 text-headline-h1 md:text-headline-h1 text-surface-white max-w-xl leading-tight">
            Society Management,{' '}
            <span className="text-secondary-fixed-dim">Simplified.</span>
          </h1>

          <p
            className="animate-fade-in-up font-body-lg text-body-lg text-surface-white/85 max-w-lg leading-relaxed"
            style={{ animationDelay: '0.1s' }}
          >
            Experience seamless community living with India's most trusted society management app. Manage payments, book amenities, and track visitors — all from your pocket.
          </p>

          {/* CTA row */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 pt-2"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              className="flex items-center justify-center gap-2 transition-transform hover:scale-105"
              href="https://play.google.com/store/apps/details?id=com.societyseva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9pxKUkAyDc2xgllWwk-MQ0Bcap2QoS-wYEQeo-8lhZdCyiuwhoRxiR35kcVDuKxEBAQ62iXPMAhcjBuhl3P6CSJIEjPQAWstsOUD5RltZtoaxw40oYH8jhCzBwKoA50eJ7WUzvTsQqo3he5t0LQtsDwsdOd33xm58U8HWQGiG3PWJFlIyn3RhxS4qYWI-2MTsjcDbDG9X1xg1LcWUVw60WGcKWNjcf5KA8rbas0AjkohPRB4HLyeMdD9RlYXxN9bwZNGiwEwuL9S"
                alt="Google Play badge"
                className="h-11 w-36 object-contain"
              />
            </a>
            <a
              className="flex items-center justify-center gap-2 transition-transform hover:scale-105"
              href="https://apps.apple.com/app/societyseva/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwGYWxZnrUrTicu_1LcTyZmeeSYswNb6XqfBpmFSTU8k5h30GIcPiaEp64pq9g5usEX855UsLx3LoR4XCqi52sILof12BJ2kMw36nq6pr7xlTUEfoIGiz9GgLB5qL1pJncHsr64v8iXZY_jDAgSjaBiyxvSfJ5viYMMlMLvyvbb7NBhOG-QeYyLbDyW72uOpCsU18a9NxCtpXWrnNM1FfO_dTDT7gpGTLG4G1r7ulg0ILf310aypvgm4YdD4UdDfwSI_SAASfMXvRq"
                alt="Apple App Store badge"
                className="h-11 w-36 object-contain"
              />
            </a>
            <a
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-button text-button hover:bg-white/20 transition-all active:scale-95"
              href="#features"
            >
              <span className="material-symbols-outlined">play_circle</span>
              See Features
            </a>
          </div>

          {/* Stars rating */}
          <div className="animate-fade-in-up flex items-center gap-4 pt-2" style={{ animationDelay: '0.25s' }}>
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
            </div>
            <span className="text-surface-white/80 font-body-sm text-body-sm">4.8/5 · Rated by 50k+ Residents</span>
          </div>
        </div>

        {/* Right — phone mockup with floating stat cards */}
        <div className="animate-float relative flex justify-center lg:justify-end">
          {/* Floating stat: Societies */}
          <div className="absolute -left-4 top-8 z-20 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-outline-variant/30 hidden md:flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
            <div>
              <div className="text-primary font-bold text-lg leading-none">500+</div>
              <div className="text-on-surface-variant text-xs mt-0.5">Societies onboarded</div>
            </div>
          </div>

          {/* Floating stat: No fees */}
          <div className="absolute -right-2 bottom-16 z-20 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-outline-variant/30 hidden md:flex items-center gap-3">
            <span className="material-symbols-outlined text-accent-success text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div>
              <div className="text-primary font-bold text-lg leading-none">₹0</div>
              <div className="text-on-surface-variant text-xs mt-0.5">Hidden charges</div>
            </div>
          </div>

          {/* Phone frame */}
          <div className="relative z-10 w-full max-w-[300px] app-shadow rounded-[2.5rem] border-[10px] border-deep-navy bg-surface-white overflow-hidden aspect-[9/19.5]">
            {/* Stack of local app screenshots inside the mockup */}
            <div className="w-full h-full grid grid-rows-3 gap-0 overflow-hidden">
              <img src="/societyannouncement.png" alt="App screen 1" className="w-full h-full object-cover row-span-1" style={{ gridRow: '1/2' }} />
              <img src="/onlinepayment.png" alt="App screen 2" className="w-full h-full object-cover row-span-1" style={{ gridRow: '2/3' }} />
              <img src="/amenity.png" alt="App screen 3" className="w-full h-full object-cover row-span-1" style={{ gridRow: '3/4' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
