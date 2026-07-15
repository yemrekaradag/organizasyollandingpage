import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import './Aydinlatma.css';

export default function Aydinlatma() {
  return (
    <div className="legal-page">
      <Seo
        title="KVKK Aydınlatma Metni | Organizasyol"
        description="Organizasyol KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni."
        path="/aydinlatma"
      />
      <div className="container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="legal-title">
            KVKK <span className="text-gradient">AYDINLATMA METNİ</span>
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
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla <strong>Anıl Açık</strong> (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi, “biz”, “işletmemiz”) olarak; Organizasyol mobil uygulaması, organizasyol.com web sitesi ile api.organizasyol.com ve cdn.organizasyol.com alt alan adları üzerinden sunulan hizmetler kapsamında kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmekteyiz.
          </p>
          <p className="legal-intro">
            Bu metin, KVKK’nın 10. maddesi kapsamında hazırlanmış aydınlatma metnidir. Daha ayrıntılı bilgi için Gizlilik Politikası, Kullanım Koşulları ve Veri Saklama ve İmha Politikası metinlerine de başvurabilirsiniz.
          </p>

          {/* 1. Platform Hizmetinin Niteliği */}
          <div className="legal-section">
            <h2 className="legal-section-title">1. Platform Hizmetinin Niteliği</h2>
            <p className="legal-paragraph">
              <strong>1.1.</strong> Organizasyol; organizasyon hizmeti arayan kullanıcılar (“Kullanıcı”) ile organizasyon hizmeti sunan işletmeleri / iş ortaklarını (“Partner”) bir araya getiren bir tanıtım ve eşleştirme platformudur.
            </p>
            <p className="legal-paragraph">
              <strong>1.2.</strong> Platform üzerinden satın alma, ödeme, rezervasyon veya sözleşme akdi gerçekleştirilmez. Kullanıcı ile Partner arasındaki iletişim, teklif, fiyatlandırma ve anlaşma süreçleri Platform dışında — örneğin WhatsApp, telefon veya e-posta aracılığıyla — tarafların kendi aralarında yürütülür.
            </p>
            <p className="legal-paragraph">
              <strong>1.3.</strong> Organizasyol, Kullanıcı ile Partner arasında kurulan hukuki ilişkinin tarafı değildir; bu ilişkilerden doğan yükümlülükler ilgili taraflara aittir.
            </p>
          </div>

          {/* 2. Veri Sorumlusu */}
          <div className="legal-section">
            <h2 className="legal-section-title">2. Veri Sorumlusu</h2>
            <p className="legal-paragraph">
              <strong>2.1.</strong> Veri sorumlusu bilgileri aşağıdadır:
            </p>
            <ul className="legal-list">
              <li><strong>Ticari ünvan:</strong> Anıl Açık</li>
              <li><strong>İşletme türü:</strong> Şahıs işletmesi</li>
              <li><strong>İş yeri adresi:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
              <li><strong>Vergi Dairesi / Vergi No:</strong> ÜMRANİYE / 0050621469</li>
              <li><strong>E-posta:</strong> info@organizasyol.com</li>
              <li><strong>Telefon:</strong> 0551 488 28 66</li>
              <li><strong>Web:</strong> https://organizasyol.com</li>
            </ul>
            <p className="legal-paragraph">
              <strong>2.2.</strong> KVKK kapsamındaki taleplerinizi yukarıdaki iletişim kanalları üzerinden veya KVKK’nın 11. maddesinde belirtilen yöntemlerle iletebilirsiniz.
            </p>
          </div>

          {/* 3. İşlenen Kişisel Veri Kategorileri */}
          <div className="legal-section">
            <h2 className="legal-section-title">3. İşlenen Kişisel Veri Kategorileri</h2>
            
            <p className="legal-paragraph"><strong>3.1. Kimlik ve İletişim Bilgileri</strong></p>
            <ul className="legal-list">
              <li>Ad, soyad (veya birleşik ad-soyad alanı)</li>
              <li>E-posta adresi</li>
              <li>Cep telefonu numarası</li>
              <li>(Partner kullanıcılar için) yetkili kişi adı</li>
            </ul>

            <p className="legal-paragraph"><strong>3.2. Hesap ve Kimlik Doğrulama Bilgileri</strong></p>
            <ul className="legal-list">
              <li>Firebase kullanıcı kimliği (UID)</li>
              <li>Kimlik doğrulama yöntemi bilgisi (telefon OTP, e-posta, Google, Apple vb.)</li>
              <li>Oturum ve erişim token bilgileri</li>
              <li>Kullanıcı rolü (üye, partner, yönetici)</li>
            </ul>

            <p className="legal-paragraph"><strong>3.3. Profil ve İşletme Bilgileri (Partner Kullanıcılar)</strong></p>
            <ul className="legal-list">
              <li>Firma / işletme adı, işletme açıklaması</li>
              <li>Açık adres, il ve ilçe bilgisi</li>
              <li>Web sitesi adresi ve sosyal medya hesap bilgileri (Instagram, Facebook, TikTok vb.)</li>
              <li>Logo, kapak görseli ve tanıtım görselleri / videoları</li>
              <li>Partner profilinde yayımlanan iletişim bilgileri (telefon vb.) — Kullanıcıların Partner ile Platform dışında iletişim kurabilmesi amacıyla</li>
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
              <li>Erişim tarihi/saati, hata ve performans logları</li>
              <li>Çerez ve benzeri teknolojiler aracılığıyla toplanan veriler (web sitesi için)</li>
            </ul>

            <p className="legal-paragraph"><strong>3.6. Görsel ve İşitsel Veriler</strong></p>
            <ul className="legal-list">
              <li>(Partner kullanıcılar ve ilanlar için) logo, kapak görseli, profil fotoğrafı / avatar</li>
              <li>Organizasyon ve hizmet tanıtım fotoğrafları ve videoları</li>
              <li>(İzin verilmesi halinde) video kayıtlarındaki ses verisi</li>
            </ul>

            <p className="legal-paragraph">
              <strong>3.7.</strong> Organizasyol, Platform üzerinden ödeme bilgisi, banka/kart bilgisi veya finansal işlem verisi <strong>toplamaz ve işlemez</strong>. Kullanıcı ile Partner arasındaki ödeme süreçleri tamamen tarafların kendi sorumluluğundadır.
            </p>
          </div>

          {/* 4. Kişisel Verilerin İşlenme Amaçları */}
          <div className="legal-section">
            <h2 className="legal-section-title">4. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="legal-paragraph">
              <strong>4.1.</strong> Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="legal-list">
              <li><strong>Üyelik ve hesap yönetimi:</strong> Kayıt, giriş, profil oluşturma ve güncelleme işlemlerinin yürütülmesi</li>
              <li><strong>Kimlik doğrulama ve güvenlik:</strong> Telefon OTP, e-posta, Google ve Apple ile giriş; hesap güvenliğinin sağlanması; yetkisiz erişimin önlenmesi</li>
              <li><strong>Eşleştirme ve platform hizmetleri:</strong> Partner ilanlarının listelenmesi, aranması, favorilere eklenmesi, paylaşılması ve Kullanıcıların Partner ile iletişime geçebilmesi için gerekli bilgilerin sunulması</li>
              <li><strong>Partner hizmetleri:</strong> Partner başvurusu, profil yönetimi, hizmet tanıtımı ve Kullanıcılarla Platform dışı iletişim kanallarına yönlendirme</li>
              <li><strong>Müşteri desteği:</strong> Destek taleplerinin alınması, yanıtlanması ve takibi</li>
              <li><strong>Bildirimler:</strong> Hizmet bildirimleri, kampanya ve pazarlama iletileri (açık rızanız veya meşru menfaat / mevzuat çerçevesinde)</li>
              <li><strong>Hukuki yükümlülükler:</strong> Mevzuattan kaynaklanan saklama, raporlama ve resmi makam taleplerinin yerine getirilmesi</li>
              <li><strong>Hizmet kalitesi ve geliştirme:</strong> Hata tespiti, performans iyileştirme, kullanıcı deneyiminin geliştirilmesi</li>
              <li><strong>Uyuşmazlık yönetimi:</strong> Olası hukuki süreçlerde delil olarak kullanılması</li>
            </ul>
          </div>

          {/* 5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi */}
          <div className="legal-section">
            <h2 className="legal-section-title">5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
            <p className="legal-paragraph">
              <strong>5.1.</strong> Kişisel verileriniz; mobil uygulama, web sitesi, e-posta, destek formları, çerezler ve benzeri teknolojiler ile otomatik veya kısmen otomatik yollarla toplanmaktadır.
            </p>
            <p className="legal-paragraph">
              <strong>5.2.</strong> İşleme faaliyetlerinin hukuki sebepleri:
            </p>
            <ul className="legal-list">
              <li>Üyelik, kimlik doğrulama, eşleştirme ve hizmet sunumu → <strong>Sözleşmenin kurulması veya ifası (KVKK m. 5/2-c)</strong></li>
              <li>Güvenlik, log kayıtları → <strong>Veri sorumlusunun meşru menfaati (KVKK m. 5/2-f)</strong></li>
              <li>Hukuki yükümlülükler → <strong>Kanunlarda açıkça öngörülmesi (m. 5/2-a) veya yükümlülüğün yerine getirilmesi (m. 5/2-ç)</strong></li>
              <li>Pazarlama / kampanya bildirimleri → <strong>Açık rıza (m. 5/1)</strong></li>
              <li>Partner başvurusu ve ticari iletişim → <strong>Sözleşmenin ifası ve/veya açık rıza</strong></li>
            </ul>
          </div>

          {/* 6. Kişisel Verilerin Aktarılması */}
          <div className="legal-section">
            <h2 className="legal-section-title">6. Kişisel Verilerin Aktarılması</h2>
            <p className="legal-paragraph">
              <strong>6.1.</strong> Kişisel verileriniz, yukarıdaki amaçlarla ve KVKK’nın 8. ve 9. maddelerine uygun olarak aşağıdaki alıcı gruplarına aktarılabilir:
            </p>
            <ul className="legal-list">
              <li><strong>Google Firebase / Google LLC:</strong> Kimlik doğrulama (telefon OTP, e-posta, sosyal giriş), uygulama altyapısı — ABD</li>
              <li><strong>Apple Inc.:</strong> Apple ile Giriş kimlik doğrulaması — ABD</li>
              <li><strong>Organizasyol Cloud:</strong> API, veritabanı ve dosya barındırma (api.organizasyol.com, cdn.organizasyol.com) — Hostinger, Frankfurt, Almanya (AB)</li>
              <li><strong>Yetkili kamu kurum ve kuruluşları:</strong> Yasal zorunluluk halinde — Türkiye</li>
            </ul>
            <p className="legal-paragraph">
              <strong>6.2.</strong> Partner profillerinde yayımlanan iletişim bilgileri (telefon, e-posta vb.), Platform’un eşleştirme işlevi gereği diğer Platform kullanıcıları tarafından görülebilir. Organizasyol, Kullanıcı’ya ait kişisel verileri Partner’a otomatik olarak aktarmaz. Kullanıcı; WhatsApp, telefon veya e-posta gibi Platform dışı kanallar üzerinden Partner ile iletişim kurması halinde paylaştığı bilgileri kendi iradesiyle iletir; bu süreçte veri sorumlusu sıfatı ilgili Partner’a geçebilir ve Organizasyol bu paylaşımdan sorumlu değildir.
            </p>
            <p className="legal-paragraph">
              <strong>6.3.</strong> Kişisel verilerin yurt dışına (özellikle ABD’deki hizmet sağlayıcılara) aktarılması söz konusu olduğunda, KVKK’nın 9. maddesinde öngörülen; ilgili ülkede yeterli korumanın bulunması, yeterli korumanın bulunmaması halinde ise Türkiye’deki ve ilgili ülkedeki veri sorumlularının yeterli güvenceyi yazılı olarak taahhüt etmesi ve Kurul’un izninin bulunması gibi uygun güvenceler sağlanmaktadır. Google Firebase ve Apple hizmetleri kapsamındaki aktarımlarda ilgili sağlayıcıların veri işleme ve uluslararası aktarım hükümleri uygulanır.
            </p>
          </div>

          {/* 7. Kişisel Verilerin Saklama Süresi */}
          <div className="legal-section">
            <h2 className="legal-section-title">7. Kişisel Verilerin Saklama Süresi</h2>
            <p className="legal-paragraph">
              <strong>7.1.</strong> Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı / saklama süreleri kadar muhafaza edilir. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.
            </p>
            <p className="legal-paragraph">
              <strong>7.2.</strong> Ayrıntılı süreler için Veri Saklama ve İmha Politikası metnine bakınız.
            </p>
          </div>

          {/* 8. KVKK Kapsamındaki Haklarınız (m. 11) */}
          <div className="legal-section">
            <h2 className="legal-section-title">8. KVKK Kapsamındaki Haklarınız (m. 11)</h2>
            <p className="legal-paragraph">
              <strong>8.1.</strong> KVKK’nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="legal-list">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK m. 7 çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme ve silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>Münhasıran otomatik sistemlerle analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </div>

          {/* 9. Başvuru Yöntemi */}
          <div className="legal-section">
            <h2 className="legal-section-title">9. Başvuru Yöntemi</h2>
            <p className="legal-paragraph">
              <strong>9.1.</strong> Haklarınızı kullanmak için ad, soyad, T.C. kimlik numarası (yabancılar için pasaport numarası), tebligata esas adres veya e-posta adresi ile talep konusunu içeren başvurunuzu iletebilirsiniz.
            </p>
            <p className="legal-paragraph">
              <strong>9.2.</strong> Başvuru kanalları:
            </p>
            <ul className="legal-list">
              <li><strong>E-posta:</strong> info@organizasyol.com</li>
              <li><strong>Uygulama içi:</strong> Hesap ayarları (hesap silme ve KVKK talepleri için)</li>
              <li><strong>Posta:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
            </ul>
            <p className="legal-paragraph">
              <strong>9.3.</strong> Başvurularınız, talebin niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır.
            </p>
            <p className="legal-paragraph">
              <strong>9.4.</strong> Başvurunuzun reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde cevap verilmemesi hâlinde; cevabın tebliğini takiben 30 gün içinde KVKK Kurulu’na şikâyette bulunabilirsiniz.
            </p>
          </div>

          {/* 10. Zorunlu / İsteğe Bağlı Olma */}
          <div className="legal-section">
            <h2 className="legal-section-title">10. Zorunlu / İsteğe Bağlı Olma</h2>
            <p className="legal-paragraph">
              <strong>10.1.</strong> Platform hizmetlerinden yararlanabilmek için kimlik ve iletişim bilgilerinizin verilmesi zorunludur.
            </p>
            <p className="legal-paragraph">
              <strong>10.2.</strong> Pazarlama bildirimleri ve belirli çerez türleri için ayrıca açık rızanız alınır; rızanızı dilediğiniz zaman geri çekebilirsiniz.
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
