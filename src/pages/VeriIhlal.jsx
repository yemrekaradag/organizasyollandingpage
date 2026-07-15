import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import './Aydinlatma.css';

export default function VeriIhlal() {
  return (
    <div className="legal-page">
      <Seo
        title="Veri İhlal Müdahale Planı | Organizasyol"
        description="Organizasyol veri ihlali durumunda uygulanan müdahale planı ve prosedürleri."
        path="/veri-ihlal"
      />
      <div className="container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="legal-title">
            VERİ İHLAL <span className="text-gradient">MÜDAHALE PLANI</span>
          </h1>
          <div className="legal-meta">
            <span>Son güncelleme: <strong>07.07.2026</strong></span>
            <span>•</span>
            <span>Yürürlük tarihi: <strong>07.07.2026</strong></span>
          </div>
        </motion.div>

        <motion.div
          className="legal-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 1. Amaç */}
          <div className="legal-section">
            <h2 className="legal-section-title">1. Amaç</h2>
            <p className="legal-paragraph">
              <strong>1.1.</strong> Bu plan; Anıl Açık (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi) bünyesinde işlenen kişisel verilere ilişkin veri ihlali (kişisel verilerin hukuka aykırı olarak ele geçirilmesi, yetkisiz erişim, ifşa, değiştirilme, kaybolma veya imha edilmesi) durumlarında uygulanacak müdahale, bildirim ve iyileştirme süreçlerini tanımlar.
            </p>
            <p className="legal-paragraph">
              <strong>1.2.</strong> Plan; 6698 sayılı KVKK, Kişisel Verilerin Korunması Kurulu (“Kurul”) kararları ve iyi uygulama standartlarına uygun hazırlanmıştır.
            </p>
            <p className="legal-paragraph">
              <strong>1.3.</strong> Organizasyol bir eşleştirme platformu olup Platform üzerinden ödeme işlemi yapılmaz; bu plan Organizasyol sistemlerinde işlenen kişisel verileri kapsar.
            </p>
          </div>

          {/* 2. Kapsam */}
          <div className="legal-section">
            <h2 className="legal-section-title">2. Kapsam</h2>
            <p className="legal-paragraph">
              <strong>2.1.</strong> Bu plan aşağıdaki sistemleri kapsar:
            </p>
            <ul className="legal-list">
              <li>Organizasyol mobil uygulaması ve API altyapısı (api.organizasyol.com)</li>
              <li>Web sitesi (organizasyol.com) ve CDN (cdn.organizasyol.com)</li>
              <li>İşletme sistemleri ve üçüncü taraf hizmet sağlayıcılar (Firebase, Organizasyol Cloud vb.)</li>
              <li>Tüm kişisel veri kategorileri (kimlik, iletişim, hesap, partner profili, medya, log verileri)</li>
            </ul>
            <p className="legal-paragraph">
              <strong>2.2.</strong> Kullanıcı ile Partner arasında Platform dışında (WhatsApp, telefon vb.) gerçekleşen iletişim ve veri paylaşımları bu planın kapsamı dışındadır; ancak ihlalin Organizasyol sistemlerinden kaynaklandığı durumlarda plan uygulanır.
            </p>
          </div>

          {/* 3. Tanımlar */}
          <div className="legal-section">
            <h2 className="legal-section-title">3. Tanımlar</h2>
            <p className="legal-paragraph"><strong>3.1. Veri ihlali:</strong> Kişisel verilerin güvenliğini ihlal eden, kazara veya hukuka aykırı olarak yok edilmesi, kaybolması, değiştirilmesi, ifşa edilmesi veya yetkisiz erişime uğraması.</p>
            <p className="legal-paragraph"><strong>3.2. Veri ihlali müdahale ekibi:</strong> İhlalin tespiti, kontrolü, bildirimi ve sonrası iyileştirmeden sorumlu ekip.</p>
            <p className="legal-paragraph"><strong>3.3. İlgili kişi:</strong> Kişisel verisi işlenen gerçek kişi (Kullanıcı, Partner).</p>
            <p className="legal-paragraph"><strong>3.4. Kurul:</strong> Kişisel Verileri Korunması Kurumu.</p>
          </div>

          {/* 4. Müdahale Ekibi ve Sorumluluklar */}
          <div className="legal-section">
            <h2 className="legal-section-title">4. Müdahale Ekibi ve Sorumluluklar</h2>
            <p className="legal-paragraph">
              <strong>4.1. İhlal Koordinatörü — Anıl Açık / info@organizasyol.com</strong><br />
              Sürecin yönetimi, zaman çizelgesi, Kurul ve ilgili kişi bildirimleri.
            </p>
            <p className="legal-paragraph">
              <strong>4.2. BT / Güvenlik Sorumlusu — Anıl Açık / info@organizasyol.com</strong><br />
              Teknik müdahale, log analizi, erişim kapatma, kanıt toplama.
            </p>
            <p className="legal-paragraph">
              <strong>4.3. Hukuk Sorumlusu — Anıl Açık / info@organizasyol.com</strong><br />
              Hukuki değerlendirme, bildirim metinleri, Kurul başvurusu.
            </p>
            <p className="legal-paragraph">
              <strong>4.4. İşletme Sahibi — Anıl Açık</strong><br />
              Kritik kararlar ve kamuoyu / iletişim onayı.
            </p>
            <p className="legal-paragraph">
              <strong>4.5.</strong> Şahıs işletmesi yapısı nedeniyle tüm sorumluluklar işletme sahibi Anıl Açık tarafından yürütülür.
            </p>
          </div>

          {/* 5. İhlal Tespit Kaynakları */}
          <div className="legal-section">
            <h2 className="legal-section-title">5. İhlal Tespit Kaynakları</h2>
            <p className="legal-paragraph">
              <strong>5.1.</strong> Veri ihlali şu kanallardan tespit edilebilir:
            </p>
            <ul className="legal-list">
              <li>Güvenlik izleme ve alarm sistemleri (sunucu, API, veritabanı)</li>
              <li>Yetkisiz erişim / anormal trafik logları</li>
              <li>Kullanıcı veya partner şikâyetleri (info@organizasyol.com, destek talepleri)</li>
              <li>Üçüncü taraf hizmet sağlayıcı güvenlik bildirimleri (Firebase, bulut sağlayıcı)</li>
              <li>Penetrasyon testi veya güvenlik denetimi bulguları</li>
              <li>Basın / sosyal medya sızıntı bildirimleri</li>
            </ul>
          </div>

          {/* 6. Müdahale Aşamaları ve Zaman Çizelgesi */}
          <div className="legal-section">
            <h2 className="legal-section-title">6. Müdahale Aşamaları ve Zaman Çizelgesi</h2>
            
            <p className="legal-paragraph"><strong>6.1. Aşama 1 — Tespit ve İlk Müdahale (0–4 saat)</strong></p>
            <ul className="legal-list">
              <li><strong>6.1.1.</strong> İhlal şüphesinin kayda alınması (tarih, saat, kaynak, ilk belirtiler).</li>
              <li><strong>6.1.2.</strong> İhlal Koordinatörünün bilgilendirilmesi.</li>
              <li><strong>6.1.3.</strong> Etkilenen sistemlere erişimin geçici olarak kısıtlanması (gerekirse).</li>
              <li><strong>6.1.4.</strong> İhlalin yayılmasını önleyici acil teknik önlemler (token iptali, API anahtarı rotasyonu, şifre sıfırlama).</li>
              <li><strong>6.1.5.</strong> Olay kaydı açılması.</li>
            </ul>

            <p className="legal-paragraph"><strong>6.2. Aşama 2 — Değerlendirme ve Kapsam Analizi (4–24 saat)</strong></p>
            <ul className="legal-list">
              <li><strong>6.2.1.</strong> Etkilenen veri kategorilerinin ve tahmini ilgili kişi sayısının belirlenmesi.</li>
              <li><strong>6.2.2.</strong> İhlal nedeninin araştırılması (ön kök neden analizi).</li>
              <li><strong>6.2.3.</strong> İhlalin ilgili kişiler üzerindeki olası risk düzeyinin değerlendirilmesi (düşük / orta / yüksek).</li>
              <li><strong>6.2.4.</strong> Adli bilişim / log yedekleme (delil koruma).</li>
              <li>
                <strong>6.2.5.</strong> Risk değerlendirme kriterleri (özet):
                <ul className="legal-list" style={{ marginTop: '8px' }}>
                  <li><strong>Yüksek:</strong> Toplu veri sızıntısı, kimlik/iletişim verilerinin kamuya açık ifşası, yetkisiz profil/ilan değişikliği</li>
                  <li><strong>Orta:</strong> E-posta + telefon kombinasyonu, partner işletme verileri, sınırlı kullanıcı grubu</li>
                  <li><strong>Düşük:</strong> Anonim veya zaten kamuya açık veriler; ihlal hızla kapatıldı ve veri ele geçirilmedi</li>
                </ul>
              </li>
            </ul>

            <p className="legal-paragraph"><strong>6.3. Aşama 3 — Bildirimler (24–72 saat)</strong></p>
            <ul className="legal-list">
              <li><strong>6.3.1.</strong> KVKK uyarınca ihlalin öğrenilmesinden itibaren en kısa sürede ve mümkün olan hâllerde 72 saat içinde Kurul’a bildirim yapılır.</li>
              <li><strong>6.3.2.</strong> İlgili kişilere bildirim (risk yüksekse veya Kurul gerektiriyorsa): kayıtlı e-posta, uygulama içi bildirim, organizasyol.com duyurusu.</li>
              <li><strong>6.3.3.</strong> Üçüncü taraf hizmet sağlayıcılarla koordinasyon.</li>
              <li><strong>6.3.4.</strong> Gerekirse kolluk bildirimi (ağır suç şüphesi).</li>
            </ul>

            <p className="legal-paragraph"><strong>6.4. Aşama 4 — İyileştirme ve Kapanış (72 saat sonrası)</strong></p>
            <ul className="legal-list">
              <li><strong>6.4.1.</strong> Kök neden analizinin tamamlanması ve kalıcı teknik/organizasyonel önlemlerin uygulanması.</li>
              <li><strong>6.4.2.</strong> Etkilenen kullanıcılara destek (hesap kilitleme, oturum iptali vb.).</li>
              <li><strong>6.4.3.</strong> Olay raporunun hazırlanması ve politika güncellemesi (gerekirse).</li>
            </ul>
          </div>

          {/* 7. Teknik Müdahale Kontrol Listesi */}
          <div className="legal-section">
            <h2 className="legal-section-title">7. Teknik Müdahale Kontrol Listesi</h2>
            <p className="legal-paragraph">
              <strong>7.1.</strong> İhlal türüne göre değerlendirilecek önlemler:
            </p>
            <ul className="legal-list">
              <li>Etkilenen kullanıcı oturumlarının ve refresh tokenlarının iptali</li>
              <li>Firebase / API anahtarlarının rotasyonu</li>
              <li>Yetkisiz erişimlerin kaldırılması</li>
              <li>Etkilenen sunucu veya konteynerin izole edilmesi</li>
              <li>Güvenlik yamalarının uygulanması</li>
              <li>WAF / rate limiting kurallarının güncellenmesi</li>
              <li>Veritabanı yedeklerinden bütünlük kontrolü</li>
              <li>CDN’de yetkisiz yüklenen dosyaların kaldırılması</li>
              <li>Logların yedeklenmesi ve saklanması (adli inceleme için)</li>
            </ul>
          </div>

          {/* 8. İlgili Kişiye Bildirim Şablonu (Taslak) */}
          <div className="legal-section">
            <h2 className="legal-section-title">8. İlgili Kişiye Bildirim Şablonu (Taslak)</h2>
            <div className="legal-template-box">
{`Konu: Organizasyol — Kişisel Veri Güvenliği Bildirimi

Sayın [AD SOYAD],

[İHLAL TARİHİ] tarihinde Organizasyol sistemlerinde [İHLAL ÖZETİ] tespit edilmiştir.

Etkilenen veriler: [VERİ KATEGORİLERİ]

Alınan önlemler: [ÖNLEMLER]

Önerilen adımlar: [KULLANICI ÖNERİLERİ]

Sorularınız için: info@organizasyol.com

Saygılarımızla,
Anıl Açık`}
            </div>
          </div>

          {/* 9. Kayıt ve Dokümantasyon */}
          <div className="legal-section">
            <h2 className="legal-section-title">9. Kayıt ve Dokümantasyon</h2>
            <p className="legal-paragraph">
              <strong>9.1.</strong> Her veri ihlali olayı için Olay Kayıt Formu doldurulur ve en az 5 yıl saklanır. Form alanları: olay numarası, tespit tarihi, ihlal türü, etkilenen sistemler ve veri kategorileri, tahmini kişi sayısı, risk seviyesi, alınan önlemler, Kurul ve ilgili kişi bildirim tarihleri, kök neden, kalıcı önlemler, kapanış tarihi.
            </p>
          </div>

          {/* 10. Eğitim ve Tatbikat */}
          <div className="legal-section">
            <h2 className="legal-section-title">10. Eğitim ve Tatbikat</h2>
            <p className="legal-paragraph">
              <strong>10.1.</strong> Bu plan yılda en az 1 kez gözden geçirilir. Mümkünse yılda 1 masa başı tatbikat yapılır.
            </p>
          </div>

          {/* 11. Planın Gözden Geçirilmesi */}
          <div className="legal-section">
            <h2 className="legal-section-title">11. Planın Gözden Geçirilmesi</h2>
            <p className="legal-paragraph">
              <strong>11.1.</strong> Bu plan; her veri ihlali sonrası, önemli altyapı değişikliğinde ve en geç yılda bir gözden geçirilir.
            </p>
          </div>

          {/* 12. İletişim Bilgileri (Acil) */}
          <div className="legal-section">
            <h2 className="legal-section-title">12. İletişim Bilgileri (Acil)</h2>
            <ul className="legal-list">
              <li><strong>İhlal Koordinatörü / İşletme Sahibi:</strong> Anıl Açık — info@organizasyol.com</li>
              <li><strong>Telefon:</strong> 0551 488 28 66</li>
              <li><strong>Adres:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
              <li><strong>Kurul:</strong> https://www.kvkk.gov.tr</li>
            </ul>
          </div>

          <div className="legal-footer">
            <div className="legal-signature">
              <strong>Anıl Açık</strong>
              <div>Organizasyol</div>
            </div>
            <div>
              <span>07.07.2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
