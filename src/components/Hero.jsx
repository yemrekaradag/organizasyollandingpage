import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const [activeTab, setActiveTab] = useState('user');

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
            <span className="text-gradient">Organizasyon</span> Planlamak da, İşini Büyütmek de Artık Çok Kolay!
          </h1>
          
          <div className="hero-tabs">
            <button 
              className={`tab-btn ${activeTab === 'user' ? 'active' : ''}`}
              onClick={() => setActiveTab('user')}
            >
              Organizasyon mu arıyorsun ?
            </button>
            <button 
              className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => setActiveTab('business')}
            >
              Hizmet Veren veya Mekan Sahibi misin?
            </button>
          </div>

          <div className="tab-content-container">
            <AnimatePresence mode="wait">
              {activeTab === 'user' && (
                <motion.p 
                  key="user"
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Aradığın tüm hizmetleri ve mekanları tek bir yerde bul; aracı ve komisyon olmadan, doğrudan iletişimle hayalindeki organizasyona ulaş.
                </motion.p>
              )}
              {activeTab === 'business' && (
                <motion.p 
                  key="business"
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Organizasyol’da hemen yerini al; komisyon ödemeden, müşterilerinle doğrudan WhatsApp üzerinden konuş ve kazancını katla.
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
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
              alt="Organizasyol App Screen"
              className="phone-screen"
            />
          </div>
          {/* Decorative Elements */}
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
        </motion.div>
      </div>
    </section>
  );
}
