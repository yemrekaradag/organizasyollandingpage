import React from 'react';
import { motion } from 'framer-motion';
import './Aydinlatma.css';

export default function Gizlilik() {
  return (
    <div className="legal-page">
      <div className="container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="legal-title">
            GİZLİLİK <span className="text-gradient">POLİTİKASI</span>
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
          <p className="legal-intro">
            İşbu Gizlilik Politikası; Anıl Açık (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi, “biz”, “işletmemiz”) tarafından işletilen Organizasyol mobil uygulaması, organizasyol.com web sitesi ile api.organizasyol.com ve cdn.organizasyol.com alt alan adları üzerinden sunulan hizmetler kapsamında kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklar.
          </p>
          <p className="legal-intro">
            Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamındaki Aydınlatma Metni ile birlikte değerlendirilmelidir. İlgili diğer metinler: Kullanım Koşulları, Veri Saklama ve İmha Politikası.
          </p>

          {/* 1. Kapsam ve Platformun Niteliği */}
          <div className="legal-section">
            <h2 className="legal-section-title">1. Kapsam ve Platformun Niteliği</h2>
            <p className="legal-paragraph">
              <strong>1.1.</strong> Organizasyol; organizasyon hizmeti arayan kullanıcılar (“Kullanıcı”) ile organizasyon hizmeti sunan işletmeleri (“Partner”) bir araya getiren bir tanıtım ve eşleştirme platformudur.
            </p>
            <p className="legal-paragraph">
              <strong>1.2.</strong> Platform üzerinden satın alma, ödeme, rezervasyon veya sözleşme akdi gerçekleştirilmez. Kullanıcı ile Partner arasındaki iletişim ve anlaşmalar Platform dışında (örneğin WhatsApp, telefon veya e-posta) yürütülür.
            </p>
            <p className="legal-paragraph">
              <strong>1.3.</strong> Organizasyol, Platform üzerinden ödeme bilgisi, banka/kart bilgisi veya finansal işlem verisi toplamaz ve işlemez.
            </p>
          </div>

          {/* 2. Veri Sorumlusu */}
          <div className="legal-section">
            <h2 className="legal-section-title">2. Veri Sorumlusu</h2>
            <ul className="legal-list">
              <li><strong>Ticari ünvan:</strong> Anıl Açık</li>
              <li><strong>İşletme türü:</strong> Şahıs işletmesi</li>
              <li><strong>İş yeri adresi:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
              <li><strong>Vergi Dairesi / Vergi No:</strong> ÜMRANİYE / 0050621469</li>
              <li><strong>E-posta:</strong> info@organizasyol.com</li>
              <li><strong>Telefon:</strong> 0551 488 28 66</li>
              <li><strong>Web:</strong> https://organizasyol.com</li>
            </ul>
          </div>

          {/* 3. İşlenen Kişisel Veriler */}
          <div className="legal-section">
            <h2 className="legal-section-title">3. İşlenen Kişisel Veriler</h2>
            
            <p className="legal-paragraph"><strong>3.1. Kimlik ve İletişim Bilgileri</strong></p>
            <ul className="legal-list">
              <li>Ad, soyad</li>
              <li>E-posta adresi</li>
              <li>Cep telefonu numarası</li>
              <li>(Partner kullanıcılar için) yetkili kişi adı</li>
            </ul>

            <p className="legal-paragraph"><strong>3.2. Hesap ve Kimlik Doğrulama Bilgileri</strong></p>
            <ul className="legal-list">
              <li>Firebase kullanıcı kimliği (UID)</li>
              <li>Kimlik doğrulama yöntemi (telefon OTP, e-posta, Google, Apple vb.)</li>
              <li>Oturum ve erişim token bilgileri</li>
              <li>Kullanıcı rolü (üye, partner, yönetici)</li>
            </ul>

            <p className="legal-paragraph"><strong>3.3. Profil ve İşletme Bilgileri (Partner Kullanıcılar)</strong></p>
            <ul className="legal-list">
              <li>Firma / işletme adı, işletme açıklaması</li>
              <li>Açık adres, il ve ilçe bilgisi</li>
              <li>Web sitesi ve sosyal medya hesap bilgileri</li>
              <li>Logo, kapak görseli ve tanıtım görselleri / videoları</li>
              <li>Partner profilinde yayımlanan iletişim bilgileri (telefon vb.)</li>
            </ul>

            <p className="legal-paragraph"><strong>3.4. Kullanım ve Tercih Verileri</strong></p>
            <ul className="legal-list">
              <li>Favori organizasyonlar / ilanlar</li>
              <li>Bildirim tercihleri (kampanya, anlık bildirimler)</li>
              <li>Uygulama içi arama ve gezinme kayıtları (teknik loglar kapsamında)</li>
              <li>Destek talebi konusu ve mesaj içeriği</li>
            </ul>

            <p className="legal-paragraph"><strong>3.5. Teknik ve İşlem Güvenliği Verileri</strong></p>
            <ul className="legal-list">
              <li>IP adresi, cihaz modeli, işletim sistemi ve uygulama sürümü</li>
              <li>Erişim tarihi/saati, hata ve performans (çökme) logları</li>
              <li>Çerez ve benzeri teknolojiler aracılığıyla toplanan veriler (web sitesi için)</li>
            </ul>

            <p className="legal-paragraph"><strong>3.6. Görsel ve İşitsel Veriler</strong></p>
            <ul className="legal-list">
              <li>(Partner kullanıcılar ve ilanlar için) logo, kapak görseli, profil fotoğrafı</li>
              <li>Organizasyon ve hizmet tanıtım fotoğrafları ve videoları</li>
              <li>(İzin verilmesi halinde) video kayıtlarındaki ses verisi</li>
            </ul>

            <p className="legal-paragraph"><strong>3.7. Toplanmayan Veriler</strong></p>
            <ul className="legal-list">
              <li><strong>GPS / hassas konum verisi</strong> — Organizasyol cihaz konumunuzu izlemez; ilanlarda yalnızca Partner tarafından girilen il/ilçe bilgisi gösterilir</li>
              <li><strong>Ödeme, banka veya kart bilgisi</strong> — Platform üzerinden tahsilat yapılmaz</li>
              <li><strong>Geleneksel kullanıcı adı / şifre</strong> — Kimlik doğrulama Firebase (telefon OTP, Google, Apple) üzerinden yapılır</li>
            </ul>
          </div>

          {/* 4. İşleme Amaçları */}
          <div className="legal-section">
            <h2 className="legal-section-title">4. İşleme Amaçları</h2>
            <p className="legal-paragraph">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="legal-list">
              <li>Üyelik, giriş ve hesap yönetimi</li>
              <li>Kimlik doğrulama, güvenlik ve dolandırıcılığın önlenmesi</li>
              <li>Partner ilanlarının listelenmesi, aranması, favorilere eklenmesi ve Platform dışı iletişim kanallarına yönlendirme</li>
              <li>Partner başvurusu, profil yönetimi ve hizmet tanıtımı</li>
              <li>Müşteri desteği ve şikâyet yönetimi</li>
              <li>Hizmet bildirimleri; onayınız dahilinde kampanya ve pazarlama iletileri</li>
              <li>Hata tespiti, performans iyileştirme ve kullanıcı deneyiminin geliştirilmesi</li>
              <li>Mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi</li>
              <li>Olası hukuki uyuşmazlıklarda delil olarak kullanılması</li>
            </ul>
          </div>

          {/* 5. Hukuki Sebepler */}
          <div className="legal-section">
            <h2 className="legal-section-title">5. Hukuki Sebepler</h2>
            <p className="legal-paragraph">
              Verileriniz KVKK m. 5 kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenir:
            </p>
            <ul className="legal-list">
              <li><strong>Sözleşmenin kurulması veya ifası (m. 5/2-c)</strong></li>
              <li><strong>Veri sorumlusunun hukuki yükümlülüğü (m. 5/2-ç)</strong></li>
              <li><strong>Veri sorumlusunun meşru menfaati (m. 5/2-f)</strong> — güvenlik, log kayıtları</li>
              <li><strong>Kanunlarda açıkça öngörülmesi (m. 5/2-a)</strong></li>
              <li><strong>Açık rıza (m. 5/1)</strong> — pazarlama bildirimleri ve zorunlu olmayan çerezler</li>
            </ul>
          </div>

          {/* 6. Veri Aktarımı */}
          <div className="legal-section">
            <h2 className="legal-section-title">6. Veri Aktarımı</h2>
            
            <p className="legal-paragraph"><strong>6.1. Altyapı ve hizmet sağlayıcıları</strong></p>
            <ul className="legal-list">
              <li><strong>Google Firebase / Google LLC:</strong> Kimlik doğrulama (telefon OTP, e-posta, Google girişi), uygulama altyapısı — ABD</li>
              <li><strong>Apple Inc.:</strong> Apple ile Giriş kimlik doğrulaması — ABD</li>
              <li><strong>Organizasyol Cloud:</strong> API, veritabanı ve dosya barındırma (api.organizasyol.com, cdn.organizasyol.com) — Hostinger, Frankfurt, Almanya (AB)</li>
              <li><strong>Yetkili kamu kurum ve kuruluşları:</strong> Yasal zorunluluk halinde — Türkiye</li>
            </ul>

            <p className="legal-paragraph"><strong>6.2. Partner ile veri paylaşımı</strong></p>
            <p className="legal-paragraph">
              Partner profillerinde yayımlanan iletişim bilgileri (telefon, e-posta vb.), Platform’un eşleştirme işlevi gereği diğer kullanıcılar tarafından görülebilir. Organizasyol, Kullanıcı’ya ait kişisel verileri Partner’a otomatik olarak aktarmaz. Kullanıcı; WhatsApp, telefon veya e-posta gibi Platform dışı kanallar üzerinden Partner ile iletişim kurması veya “Teklif al” gibi yönlendirme araçlarını kullanması halinde paylaştığı bilgileri kendi iradesiyle iletir; bu paylaşım hizmetin doğası gereğidir ve ilgili Partner bu veriler bakımından ayrı veri sorumlusu olabilir.
            </p>

            <p className="legal-paragraph"><strong>6.3. Yurt dışına aktarım</strong></p>
            <p className="legal-paragraph">
              Kişisel verilerin yurt dışına (özellikle ABD’deki hizmet sağlayıcılara) aktarılması söz konusu olduğunda, KVKK’nın 9. maddesinde öngörülen uygun güvenceler sağlanır. Google Firebase ve Apple hizmetleri kapsamında ilgili sağlayıcıların veri işleme ve uluslararası aktarım hükümleri uygulanır.
            </p>
          </div>

          {/* 7. Saklama Süresi */}
          <div className="legal-section">
            <h2 className="legal-section-title">7. Saklama Süresi</h2>
            <p className="legal-paragraph">
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve mevzuatta öngörülen yasal süreler kadar saklanır; süre sonunda silinir, yok edilir veya anonim hale getirilir. Ayrıntılı süreler için Veri Saklama ve İmha Politikası metnine bakınız.
            </p>
          </div>

          {/* 8. Veri Güvenliği */}
          <div className="legal-section">
            <h2 className="legal-section-title">8. Veri Güvenliği</h2>
            <p className="legal-paragraph">
              Organizasyol; kişisel verilerinizin güvenliğini sağlamak amacıyla erişim kontrolü, şifreleme, güvenli iletişim protokolleri ve yetkilendirme gibi teknik ve idari tedbirler uygular. Bununla birlikte, internet ortamının doğası gereği mutlak güvenlik taahhüdü verilemez.
            </p>
          </div>

          {/* 9. Çocuklar */}
          <div className="legal-section">
            <h2 className="legal-section-title">9. Çocuklar</h2>
            <p className="legal-paragraph">
              Organizasyol, 18 yaşın altındaki kişilere yönelik değildir. 18 yaşından küçük kişilere ait bilerek kişisel veri toplanmaz.
            </p>
          </div>

          {/* 10. İlgili Kişi Hakları (KVKK m. 11) */}
          <div className="legal-section">
            <h2 className="legal-section-title">10. İlgili Kişi Hakları (KVKK m. 11)</h2>
            <p className="legal-paragraph">
              KVKK’nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme, aktarılan üçüncü kişileri bilme, işlemeye itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.
            </p>
          </div>

          {/* 11. Başvuru Yöntemi */}
          <div className="legal-section">
            <h2 className="legal-section-title">11. Başvuru Yöntemi</h2>
            <p className="legal-paragraph">
              Haklarınızı kullanmak için ad, soyad, T.C. kimlik numarası (yabancılar için pasaport numarası), tebligata esas adres veya e-posta adresi ile talep konusunu içeren başvurunuzu iletebilirsiniz.
            </p>
            <p className="legal-paragraph"><strong>Başvuru kanalları:</strong></p>
            <ul className="legal-list">
              <li><strong>E-posta:</strong> info@organizasyol.com</li>
              <li><strong>Uygulama içi:</strong> Hesap ayarları (hesap silme ve KVKK talepleri için)</li>
              <li><strong>Posta:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
            </ul>
            <p className="legal-paragraph">
              Başvurularınız, talebin niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır. Başvurunuzun reddedilmesi veya yetersiz bulunması halinde KVKK Kurulu’na şikâyet hakkınız saklıdır.
            </p>
          </div>

          {/* 12. Zorunlu / İsteğe Bağlı Veriler */}
          <div className="legal-section">
            <h2 className="legal-section-title">12. Zorunlu / İsteğe Bağlı Veriler</h2>
            <p className="legal-paragraph">
              Platform hizmetlerinden yararlanabilmek için kimlik ve iletişim bilgilerinizin verilmesi zorunludur. Pazarlama bildirimleri ve zorunlu olmayan çerezler için ayrıca açık rızanız alınır; rızanızı dilediğiniz zaman geri çekebilirsiniz.
            </p>
          </div>

          {/* 13. Politika Güncellemeleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">13. Politika Güncellemeleri</h2>
            <p className="legal-paragraph">
              Bu politika; mevzuat değişiklikleri, yeni hizmetler veya teknik altyapı güncellemeleri nedeniyle revize edilebilir. Güncel sürüm organizasyol.com üzerinde yayımlanır. Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulabilir.
            </p>
          </div>

          {/* 14. ÇEREZ POLİTİKASI (EK BÖLÜM) */}
          <div className="legal-section" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid rgba(199, 125, 255, 0.25)' }}>
            <h2 className="legal-section-title" style={{ color: '#c77dff' }}>14. EK: ÇEREZ POLİTİKASI (COOKIE POLICY)</h2>
            <p className="legal-paragraph">
              Bu bölüm; Anıl Açık (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi) tarafından işletilen organizasyol.com web sitesi ve ilişkili alan adlerinde kullanılan çerez ve benzeri teknolojilere ilişkindir.
            </p>

            <p className="legal-paragraph"><strong>14.1. Çerez Nedir?</strong></p>
            <p className="legal-paragraph">
              Çerezler; ziyaret ettiğiniz web sitesi tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Benzer teknolojiler (piksel, yerel depolama vb.) de aynı amaçlarla kullanılabilir.
            </p>

            <p className="legal-paragraph"><strong>14.2. Kullanılan Çerez Türleri</strong></p>
            <ul className="legal-list">
              <li><strong>Zorunlu çerezler:</strong> Sitenin çalışması, oturum yönetimi ve güvenlik için gereklidir. Bu çerezler olmadan site düzgün çalışmayabilir.</li>
              <li><strong>İşlevsel çerezler:</strong> Tercihlerinizi (dil, bölge vb.) hatırlamak için kullanılır.</li>
              <li><strong>Analitik / performans çerezleri:</strong> Ziyaretçi sayısı, sayfa görüntüleme ve hata analizi gibi istatistiksel veriler toplamak için kullanılır.</li>
              <li><strong>Pazarlama çerezleri:</strong> İlgi alanlarınıza göre içerik veya reklam sunmak için kullanılır; yalnızca açık rızanız ile.</li>
            </ul>

            <p className="legal-paragraph"><strong>14.3. Çerezlerin Hukuki Sebebi</strong></p>
            <ul className="legal-list">
              <li><strong>Zorunlu çerezler:</strong> Meşru menfaat / hizmetin ifası</li>
              <li><strong>Zorunlu olmayan çerezler:</strong> Açık rıza (KVKK m. 5/1)</li>
            </ul>

            <p className="legal-paragraph"><strong>14.4. Çerezleri Yönetme ve Üçüncü Taraf Çerezleri</strong></p>
            <p className="legal-paragraph">
              Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi sitenin bazı işlevlerini kısıtlayabilir. Web sitesinde kullanılan analitik veya altyapı hizmetleri (örneğin barındırma, güvenlik) üçüncü taraf çerezleri kullanabilir; bu hizmet sağlayıcıların kendi gizlilik politikaları geçerlidir. Oturum çerezleri tarayıcı kapanınca, kalıcı çerezler ise belirlenen süre sonunda veya siz silene kadar cihazınızda kalır.
            </p>
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
