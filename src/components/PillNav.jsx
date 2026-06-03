import { useState } from "react";
import { motion } from "framer-motion";
import "./PillNav.css";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Security", href: "#security" },
  { name: "Contact", href: "#contact" },
];

export default function PillNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="pill-nav">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="pill-item"
          onClick={() => setActive(item.name)}
        >
          {active === item.name && (
            <motion.div
               className="pill-background"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                        duration: 0.3,
                        ease: "easeOut",
    }}
            />
          )}

          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
}