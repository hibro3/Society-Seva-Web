const featuresData = [
  {
    icon: 'payments',
    title: 'Smart Maintenance',
    description: 'Pay dues instantly with UPI or Cards. Get automated receipts and track history.',
    image: '/billmanagement.png',
    color: 'from-blue-50 to-indigo-50',
    accent: 'bg-secondary',
  },
  {
    icon: 'calendar_month',
    title: 'Amenity Booking',
    description: 'Reserve the clubhouse, pool, or gym in seconds. Check real-time slot availability.',
    image: '/amenity.png',
    color: 'from-emerald-50 to-teal-50',
    accent: 'bg-accent-success',
  },
  {
    icon: 'verified_user',
    title: 'Visitor & Vehicle Log',
    description: 'Approve guests and delivery partners remotely. Full vehicle entry/exit history.',
    image: '/visitor.png',
    color: 'from-violet-50 to-purple-50',
    accent: 'bg-primary',
  },
  {
    icon: 'engineering',
    title: 'Maintenance Requests',
    description: 'Raise and track service requests with photos. Get real-time status updates.',
    image: '/Maintenance.png',
    color: 'from-orange-50 to-amber-50',
    accent: 'bg-on-error-container',
  },
  {
    icon: 'campaign',
    title: 'Society Announcements',
    description: 'Stay updated with community notices, events, and important alerts instantly.',
    image: '/societyannouncement.png',
    color: 'from-sky-50 to-cyan-50',
    accent: 'bg-secondary',
  },
  {
    icon: 'bar_chart',
    title: 'Financial Reports',
    description: 'Committee members get a clear overview of collections, expenses, and balances.',
    image: '/financialreport.png',
    color: 'from-lime-50 to-green-50',
    accent: 'bg-accent-success',
  },
  {
    icon: 'people',
    title: 'Resident Directory',
    description: 'Access contact info for neighbors, committee members, and staff securely.',
    image: '/residency.png',
    color: 'from-rose-50 to-pink-50',
    accent: 'bg-primary',
  },
  {
    icon: 'credit_card',
    title: 'Online Payments',
    description: 'Pay maintenance charges, booking fees, and more via UPI, card, or net banking.',
    image: '/onlinepayment.png',
    color: 'from-yellow-50 to-orange-50',
    accent: 'bg-secondary',
  },
];

export default function Features() {
  return (
    <section className="py-stack-lg px-margin-desktop bg-surface-container-low" id="features">
      <div className="max-w-[1280px] mx-auto text-center mb-14">
        <span className="inline-block text-secondary font-label-caps text-label-caps tracking-widest mb-3 uppercase">
          What We Offer
        </span>
        <h2 className="font-headline-h2 text-headline-h2 md:text-headline-h1 text-primary mb-4">
          Everything Your Society Needs
        </h2>
        <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4"></div>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          One powerful app to handle payments, bookings, communication, and security — built for modern housing societies.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuresData.map((feat, i) => (
          <div
            key={i}
            className="group relative bg-surface-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Image preview */}
            <div className={`relative h-44 bg-gradient-to-br ${feat.color} overflow-hidden`}>
              <img
                src={feat.image}
                alt={feat.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />

              {/* Icon badge */}
              <div className={`absolute top-3 right-3 w-9 h-9 ${feat.accent} text-white rounded-xl flex items-center justify-center shadow-md`}>
                <span className="material-symbols-outlined text-lg">{feat.icon}</span>
              </div>
            </div>

            {/* Text content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-headline-h3 text-headline-h3 text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
                {feat.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed flex-1">
                {feat.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-secondary font-button text-button opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}