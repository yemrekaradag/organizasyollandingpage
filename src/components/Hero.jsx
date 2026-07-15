import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./Hero.css";
import homeScreen from "../assets/home-screen.webp";
import organization from "../assets/organization.webp";
import reel1 from "../assets/reel-1.webp";
import reel2 from "../assets/reel-2.webp";
import organizationDetail from "../assets/organization-detail.webp";
import organizationDetail2 from "../assets/organization-detail-2.webp";

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
      {/* LCP görselini erken keşfet (React 19 head'e taşır) */}
      <link rel="preload" as="image" href={screens[0]} fetchPriority="high" />
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            <span className="text-gradient">Organizasyon</span>
            <br></br>
            Bulmak da, İşini Büyütmek de Artık Çok Kolay!
          </h1>

          <div className="hero-tabs" role="tablist" aria-label="Kullanıcı türü">
            <button
              className={`tab-btn ${activeTab === "user" ? "active" : ""}`}
              onClick={() => setActiveTab("user")}
              role="tab"
              aria-selected={activeTab === "user"}
            >
              Organizasyon mu arıyorsun ?
            </button>
            <button
              className={`tab-btn ${activeTab === "business" ? "active" : ""}`}
              onClick={() => setActiveTab("business")}
              role="tab"
              aria-selected={activeTab === "business"}
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
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="phone-mockup glass-panel">
            {/* initial={false}: ilk görsel anında boyanır (LCP), sonrakiler crossfade */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={screens[currentScreen]}
                src={screens[currentScreen]}
                alt="Organizasyol uygulaması ekran görüntüsü"
                className="phone-screen"
                width={2553}
                height={1280}
                decoding="async"
                fetchPriority={currentScreen === 0 ? "high" : "auto"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>
          </div>
          {/* Decorative Elements */}
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
        </motion.div>
      </div>
    </section>
  );
}
