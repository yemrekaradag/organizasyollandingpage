import { CalendarDays } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import appStoreBadge from "../assets/app-store-badge.svg";
import googlePlayBadge from "../assets/google-play-badge.svg";
import "./Footer.css";

// Footer'da öne çıkarılan kategoriler (SEO iç linkleme)
const FOOTER_CATEGORIES = [
  { slug: "dugun-organizasyonu", name: "Düğün Organizasyonu" },
  { slug: "dogum-gunu", name: "Doğum Günü Partisi" },
  { slug: "kurumsal-etkinlik", name: "Kurumsal Etkinlik" },
  { slug: "mekan-kiralama", name: "Mekan Kiralama" },
];

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
              <span className="logo-text">
                Organizas<span className="text-gradient">yol</span>
              </span>
            </div>
            <p className="footer-desc">
              Organizasyon Planlamak da, İşini Büyütmek de Artık Çok Kolay!
              <br /><br />
              Organizasyol'u hemen indir, yerini al.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Blog & Rehberler</h4>
            <nav className="footer-nav" aria-label="Blog bağlantıları">
              <Link to="/blog">Tüm Yazılar</Link>
              {FOOTER_CATEGORIES.map((cat) => (
                <Link key={cat.slug} to={`/blog/kategori/${cat.slug}`}>
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Uygulamayı İndir</h4>
            <div className="store-buttons">
              <a href="#appstore" className="store-btn" aria-label="App Store'dan indir">
                <img src={appStoreBadge} alt="App Store'dan indir" width={135} height={40} />
              </a>
              <a href="#playstore" className="store-btn" aria-label="Google Play'den indir">
                <img src={googlePlayBadge} alt="Google Play'den indir" width={135} height={40} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Bizi Takip Edin</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com/organizasyolcom/"
                target="_blank"
                rel="noreferrer"
                className="social-btn glass-panel"
                aria-label="Organizasyol Instagram sayfası"
              >
                <FaInstagram size={26} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <Link to="/aydinlatma">Aydınlatma Metni</Link>
            <Link to="/veri-saklama">Veri Saklama ve İmha Politikası</Link>
            <Link to="/veri-ihlal">Veri İhlal Müdahale Planı</Link>
            <Link to="/gizlilik">Gizlilik Politikası</Link>
            <Link to="/kullanim">Kullanım Koşulları</Link>
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
