import TiltedCard from "./TiltedCard";

const features = [
  {
    title: "Society Announcements",
    image: "/societyannouncement.png",
  },
  {
    title: "Bill Management",
    image: "/billmanagement.png",
  },
  {
    title: "Maintenance Requests",
    image: "/Maintenance.png",
  },
  {
    title: "Online Payments",
    image: "/onlinepayment.png",
  },
  {
    title: "Resident Directory",
    image: "/residency.png",
  },
  {
    title: "Financial Reports",
    image: "/financialreport.png",
  },
  {
    title: "Visitor & Vehicle Log",
    image: "/visitor.png",
  },
  {
    title: "Amenity Booking",
    image: "/amenity.png",

  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-eyebrow">02 — Features</div>
      <h2 className="section-title">Everything your society needs</h2>

      <div className="features-grid">
       {features.map((feature, index) => {
         return (
           <TiltedCard
             key={feature.title}
             imageSrc={feature.image}
             altText={feature.classname}
             captionText={feature.title}
             containerHeight="100%"
             containerWidth="100%"
             imageHeight="100%"
             imageWidth="100%"
             rotateAmplitude={12}
             scaleOnHover={1.05}
             showMobileWarning={false}
             showTooltip={false}
             displayOverlayContent
             overlayContent={
               <div className="feature-overlay">
                 <div className="feature-title-pill">
                   <h3 className={"gradient-text"}>{feature.title}</h3>
                 </div>
               </div>
             }
           />
         );
       })}
      </div>
    </section>
  );
}