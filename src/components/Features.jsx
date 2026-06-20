import { motion } from 'framer-motion';
import './Features.css';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Neden Organizasyol?</h2>
          <p className="section-subtitle">Sıradan etkinlikleri unutun. Sosyalleşmenin en yenilikçi haliyle tanışın.</p>
        </div>

        <motion.div 
          className="feature-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Feature 1 */}
          <motion.div className="feature-item" variants={itemVariants}>
            <div className="feature-text">
              <div className="step-number">01</div>
              <h3 className="feature-title">Keşfet ve Katıl</h3>
              <p className="feature-desc">
                Çevrendeki en popüler organizasyonları harita üzerinden keşfet. Sana uygun olanlara tek tıkla istek gönder ve eğlenceye dahil ol.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" alt="Keşfet" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="feature-item reverse" variants={itemVariants}>
            <div className="feature-text">
              <div className="step-number">02</div>
              <h3 className="feature-title">Kendi Etkinliğini Yarat</h3>
              <p className="feature-desc">
                Arkadaşlarınla buluşmak ya da yeni insanlarla tanışmak mı istiyorsun? Kendi organizasyonunu oluştur, katılımcıları seç ve yönet.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop" alt="Etkinlik Yarat" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="feature-item" variants={itemVariants}>
            <div className="feature-text">
              <div className="step-number">03</div>
              <h3 className="feature-title">Anında İletişim</h3>
              <p className="feature-desc">
                Onaylanan katılımcılarla uygulama içinden güvenle mesajlaş. Planlarını detaylandır ve unutulmaz anılar biriktir.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop" alt="İletişim" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
