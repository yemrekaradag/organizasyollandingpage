import { motion } from 'framer-motion';
import { Smartphone, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="badge">Yeni Nesil Eğlence</div>
          <h1 className="hero-title">
            <span className="text-gradient">Organizasyon</span> yapmanın en kolay yolu!
          </h1>
          <p className="hero-subtitle">
            Organizasyol ile tüm etkinlikleri tek bir yerden yönet, yeni etkinlikler keşfet ve eğlenceye anında dahil ol. Hemen indir ve farkı yaşa!
          </p>
          <div className="hero-buttons">
            <a href="#download" className="btn-primary btn-lg">
              <Smartphone size={24} />
              App Store'dan İndir
            </a>
            <a href="#download" className="btn-secondary btn-lg">
              <Download size={24} />
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
