import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Organizasyol'u kullanmak ücretli mi?",
    answer: "Hayır, hem hizmet arayanlar hem de hizmet verenler için uygulamayı kullanmak tamamen ücretsizdir."
  },
  {
    question: "Ödemeler veya anlaşmalar uygulama üzerinden mi yapılıyor?",
    answer: "Hayır, uygulama içinde herhangi bir ödeme veya aracı yoktur; anlaşmanızı ve ödemenizi doğrudan WhatsApp üzerinden kendiniz yaparsınız."
  },
  {
    question: "Sistemde aracı veya komisyon var mı?",
    answer: "Kesinlikle hayır; Organizasyol komisyonsuz bir pazar yeridir, kazancın tamamı doğrudan hizmet verene kalır."
  },
  {
    question: "Hizmet verenlerle nasıl iletişime geçebilirim?",
    answer: "Beğendiğiniz hizmetin veya profilin üzerindeki butona tıklayarak doğrudan o kişinin veya işletmenin WhatsApp hattına bağlanabilirsiniz."
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
