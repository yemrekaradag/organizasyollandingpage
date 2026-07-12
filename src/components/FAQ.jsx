import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "Organizasyol'u kullanmak ücretli mi?",
    answer:
      "Hayır, hem hizmet arayanlar hem de hizmet veren profesyoneller için Organizasyol’u kullanmak tamamen ücretsizdir.",
  },
  {
    question: "Sistemde aracı veya komisyon var mı?",
    answer:
      "Kesinlikle hayır. Organizasyol komisyonsuz bir platformdur. Hizmet alanlar ekstra bir ücret ödemez, hizmet verenlerin kazancının tamamı ise doğrudan kendilerine kalır.",
  },
  {
    question: "Ödemeler veya anlaşmalar platform üzerinden mi yapılıyor?",
    answer:
      "Hayır. Organizasyol içinde herhangi bir ödeme sistemi veya aracı mekanizma bulunmaz. Anlaşmanızı, detayları ve ödeme yöntemini doğrudan hizmet verenle kendiniz belirlersiniz.",
  },

  {
    question: "Hizmet verenlerle nasıl iletişime geçebilirim?",
    answer:
      "Beğendiğiniz hizmet ilanının veya profilin üzerinde yer alan iletişim butonuna tıklayarak, doğrudan o kişi veya işletmenin WhatsApp hattına bağlanabilir ve hemen konuşmaya başlayabilirsiniz.",
  },
  {
    question: "Organizasyol'da nasıl hizmet veren (tedarikçi) olabilirim?",
    answer:
      "Platformumuzda yer almak çok kolay! Giriş/Kayıt sayfasından ücretsiz bir şekilde profilinizi oluşturabilir, sunduğunuz hizmetleri ve detayları ekleyerek hemen ilanlarınızı yayınlamaya başlayabilirsiniz.",
  },
  {
    question: "Herhangi bir sorun yaşarsam size nasıl ulaşabilirim?",
    answer:
      "Platformla ilgili her türlü soru, öneri veya teknik destek talebiniz için bize info@organizasyol.com adresimiz üzerinden dilediğiniz zaman ulaşabilirsiniz.",
  },
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
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
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
                    animate={{ height: "auto", opacity: 1 }}
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
