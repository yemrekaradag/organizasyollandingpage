import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container navbar-container">
        <a href="/" className="logo">
          <div className="logo-icon">
            <CalendarDays size={28} />
          </div>
          <span className="logo-text">Organizasyol</span>
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
