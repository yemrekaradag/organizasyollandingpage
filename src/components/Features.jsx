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
          <p className="section-subtitle">Aradığın organizasyon hizmetini bulmanın da yeni müşterilere ulaşmanın da en kısa yolu! Üstelik aracı yok, komisyon yok; tamamen ücretsiz.</p>
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
              <h3 className="feature-title">Keşfet ve İncele</h3>
              <p className="feature-desc">
                Aradığın tüm organizasyon hizmetlerini ve mekanlarını listele, ihtiyacın olan hizmeti hemen bul.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="/discover.png" alt="Keşfet ve İncele" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="feature-item reverse" variants={itemVariants}>
            <div className="feature-text">
              <div className="step-number">02</div>
              <h3 className="feature-title">Doğrudan İletişime Geç</h3>
              <p className="feature-desc">
                Beğendiğin hizmetin üzerindeki butona basarak, aracı olmadan doğrudan hizmet verenle WhatsApp üzerinden konuşmaya başla.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="/contact.png" alt="Doğrudan İletişim" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="feature-item" variants={itemVariants}>
            <div className="feature-text">
              <div className="step-number">03</div>
              <h3 className="feature-title">Ücretsiz ve Komisyonsuz</h3>
              <p className="feature-desc">
                Uygulama içinde hiçbir aracı veya gizli ücret yoktur; tamamen ücretsiz bir şekilde anlaşmanızı kendiniz yaparsınız.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" alt="Ücretsiz ve Komisyonsuz" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div className="feature-item reverse" variants={itemVariants}>
            <div className="feature-text">
              <div className="step-number">04</div>
              <h3 className="feature-title">İşini Ücretsiz Büyüt</h3>
              <p className="feature-desc">
                Hizmetlerini platformda sergileyerek hiçbir ücret ödemeden binlerce yeni müşteriye doğrudan ulaş.
              </p>
            </div>
            <div className="feature-image-wrapper glass-panel">
              <img src="/company.png" alt="İşini Ücretsiz Büyüt" className="feature-image" loading="lazy" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
