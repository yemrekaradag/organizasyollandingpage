import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'Organizasyol nedir?',
    answer: 'Organizasyol, etrafınızdaki sosyal etkinlikleri keşfedebileceğiniz, kendi organizasyonlarınızı yaratıp katılımcıları yönetebileceğiniz yeni nesil bir sosyalleşme platformudur.'
  },
  {
    question: 'Uygulamayı kullanmak ücretli mi?',
    answer: 'Hayır, uygulamamızı indirmek ve standart organizasyonlara katılmak tamamen ücretsizdir.'
  },
  {
    question: 'Kendi organizasyonumu nasıl oluştururum?',
    answer: 'Uygulama içinde "Oluştur" butonuna tıklayarak etkinliğinizin detaylarını girebilir, katılımcı sınırını belirleyip yayınlayabilirsiniz.'
  },
  {
    question: 'Güvenlik nasıl sağlanıyor?',
    answer: 'Kullanıcılarımız doğrulanmış profillere sahiptir. Ayrıca katılımcıları siz onaylarsınız ve sadece onaylı kişilerle uygulama içi mesajlaşabilirsiniz.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title text-center">Sıkça Sorulan Sorular</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="faq-item glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
