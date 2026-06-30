import { CalendarDays, Camera } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <CalendarDays size={28} />
              </div>
              <span className="logo-text">Organizasyol</span>
            </div>
            <p className="footer-desc">
              Sosyalleşmenin yeni yolu. Keşfet, katıl, kendi organizasyonunu
              yarat!
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Uygulamayı İndir</h4>
            <div className="store-buttons">
              <a href="#appstore" className="store-btn glass-panel">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                />
              </a>
              <a href="#playstore" className="store-btn glass-panel">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Bizi Takip Edin</h4>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn glass-panel"
              >
                <Camera size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#aydinlatma">Aydınlatma Metni</a>
            <a href="#veri-saklama">Veri Saklama ve İmha Politikası</a>
            <a href="#veri-ihlal">Veri İhlal Müdahale Planı</a>
            <a href="#gizlilik">Gizlilik Politikası</a>
            <a href="#kullanim">Kullanım Koşulları</a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Organizasyol. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
