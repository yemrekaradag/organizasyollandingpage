import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const suffixes = [
  "yol",
  "Düğün",
  "DoğumGünü",
  "Nişan",
  "KınaGecesi",
  "Mezuniyet",
  "Animasyon",
];

export default function Navbar() {
  const [suffixIndex, setSuffixIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSuffixIndex((prev) => (prev + 1) % suffixes.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container navbar-container">
        <a href="/" className="logo">
          <span className="logo-text">
            <span>Organizas</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={suffixes[suffixIndex]}
                className="text-gradient logo-suffix"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {suffixes[suffixIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </a>
        <div className="nav-actions">
          <a href="#download" className="btn-primary btn-sm">
            Uygulamayı İndir
          </a>
        </div>
      </div>
    </motion.header>
  );
}
