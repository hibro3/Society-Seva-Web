import ScrollStack from "./ScrollStack";

const stepsData = [
  {
    num: "01",
    title: "Download & Register Your Society",
    desc: "Download the app, enter your society details, and get a unique Society Code. The admin account is created instantly — no paperwork.",
    tag: "Takes under 5 minutes",
  },
  {
    num: "02",
    title: "Invite Residents & Committee Members",
    desc: "Share the Society Code via WhatsApp or SMS. Residents self-onboard by entering the code and their flat number.",
    tag: "Bulk import available",
  },
  {
    num: "03",
    title: "Set Up Bills & Amenities",
    desc: "Configure monthly maintenance charges, late fees, and amenity slots. Society Seva auto-generates bills and sends reminders.",
    tag: "Custom charge types",
  },
  {
    num: "04",
    title: "Everything Runs Itself",
    desc: "Reminders go out automatically, payments are reconciled in real time, and reports are ready at month-end. You just review and approve.",
    tag: "Zero manual follow-ups",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section"
      id="how-it-works"
      style={{ backgroundColor: "var(--bg-soft)" }}
    >
      <div className="section-eyebrow">03 — How It Works</div>
      <h2 className="section-title">Up and running in minutes</h2>
      <p className="section-sub">
        No training required, no complex setup. Society Seva is designed to be
        intuitive from day one.
      </p>

      <ScrollStack
    itemDistance={260}
  itemStackDistance={24}
  blurAmount={0}
  useWindowScroll={true}
>
  {stepsData.map((step) => (
    <div className="scroll-stack-card" key={step.num}>
      <div className="how-stack-card">
        <div className="how-stack-num">{step.num}</div>

        <div>
          <span className="how-stack-tag">{step.tag}</span>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      </div>
    </div>
  ))}
</ScrollStack>
    </section>
  );
}