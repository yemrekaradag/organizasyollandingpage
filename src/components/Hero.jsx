import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./Hero.css";
import homeScreen from "../assets/home-screen.png";
import organization from "../assets/organization.png";
import reel1 from "../assets/reel-1.png";
import reel2 from "../assets/reel-2.png";
import organizationDetail from "../assets/organization-detail.png";
import organizationDetail2 from "../assets/organization-detail-2.png";

const screens = [
  homeScreen,
  organization,
  reel1,
  reel2,
  organizationDetail,
  organizationDetail2,
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("user");
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="text-gradient">Organizasyon</span>
            <br></br>
            Bulmak da, İşini Büyütmek de Artık Çok Kolay!
          </h1>

          <div className="hero-tabs">
            <button
              className={`tab-btn ${activeTab === "user" ? "active" : ""}`}
              onClick={() => setActiveTab("user")}
            >
              Organizasyon mu arıyorsun ?
            </button>
            <button
              className={`tab-btn ${activeTab === "business" ? "active" : ""}`}
              onClick={() => setActiveTab("business")}
            >
              Hizmet Veren veya Mekan Sahibi misin?
            </button>
          </div>

          <div className="tab-content-container">
            <AnimatePresence mode="wait">
              {activeTab === "user" && (
                <motion.p
                  key="user"
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Aradığın tüm hizmetleri ve mekanları tek bir yerde bul; aracı
                  ve komisyon olmadan, doğrudan iletişimle hayalindeki
                  organizasyona ulaş.
                </motion.p>
              )}
              {activeTab === "business" && (
                <motion.p
                  key="business"
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Organizasyol’da hemen yerini al; komisyon ödemeden,
                  müşterilerinle doğrudan WhatsApp üzerinden konuş ve kazancını
                  katla.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="hero-buttons">
            <a href="#download" className="btn-primary btn-lg">
              <FaApple size={24} />
              App Store'dan İndir
            </a>
            <a href="#download" className="btn-secondary btn-lg">
              <FaGooglePlay size={24} />
              Google Play'den Edin
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="phone-mockup glass-panel">
            <AnimatePresence mode="wait">
              <motion.img
                key={screens[currentScreen]}
                src={screens[currentScreen]}
                alt="Organizasyol App Screen"
                className="phone-screen"
                decoding="async"
                fetchPriority={currentScreen < 2 ? "high" : "auto"}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>
          </div>
          {/* Hidden Eager Loader - Tarayıcıyı tüm resimleri anında indirmeye zorlar */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              overflow: "hidden",
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            {screens.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                fetchPriority={idx < 2 ? "high" : "auto"}
              />
            ))}
          </div>
          {/* Decorative Elements */}
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
        </motion.div>
      </div>
    </section>
  );
}
