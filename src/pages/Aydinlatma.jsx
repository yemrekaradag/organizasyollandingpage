import React from 'react';
import { motion } from 'framer-motion';

export default function Aydinlatma() {
  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', paddingBottom: '60px', color: 'var(--text-main)', lineHeight: '1.6' }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-light)' }}>KVKK Aydınlatma Metni</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        Son güncelleme: <strong>[SON GÜNCELLEME TARİHİ]</strong> | Yürürlük tarihi: <strong>[YÜRÜRLÜK TARİHİ]</strong>
      </p>

      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla <strong>[TİCARİ ÜNVAN]</strong> (“Organizasyol”, “biz”, “şirketimiz”) olarak; Organizasyol mobil uygulaması, organizasyol.com web sitesi ve organizasyol.cloud alan adları üzerinden sunulan hizmetler kapsamında kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmekteyiz.
      </p>
      <p>
        Bu metin, KVKK’nın 10. maddesi kapsamında hazırlanmış aydınlatma metnidir. Daha ayrıntılı bilgi için Gizlilik Politikası, Kullanım Koşulları ve Veri Saklama ve İmha Politikası metinlerine de başvurabilirsiniz.
      </p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>1. Platform Hizmetinin Niteliği</h2>
      <p><strong>1.1.</strong> Organizasyol; organizasyon hizmeti arayan kullanıcılar (“Kullanıcı”) ile organizasyon hizmeti sunan işletmeleri / iş ortaklarını (“Partner”) bir araya getiren bir tanıtım ve eşleştirme platformudur.</p>
      <p><strong>1.2.</strong> Platform üzerinden satın alma, ödeme, rezervasyon veya sözleşme akdi gerçekleştirilmez. Kullanıcı ile Partner arasındaki iletişim, teklif, fiyatlandırma ve anlaşma süreçleri Platform dışında — örneğin WhatsApp, telefon veya e-posta aracılığıyla — tarafların kendi aralarında yürütülür.</p>
      <p><strong>1.3.</strong> Organizasyol, Kullanıcı ile Partner arasında kurulan hukuki ilişkinin tarafı değildir; bu ilişkilerden doğan yükümlülükler ilgili taraflara aittir.</p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>2. Veri Sorumlusu</h2>
      <p><strong>2.1.</strong> Veri sorumlusu bilgileri aşağıdadır:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li><strong>Unvan:</strong> [TİCARİ ÜNVAN]</li>
        <li><strong>Adres:</strong> [ŞİRKET ADRESİ]</li>
        <li><strong>Vergi Dairesi / No:</strong> [VERGİ DAİRESİ] / [VERGİ NUMARASI]</li>
        <li><strong>MERSİS No:</strong> [MERSİS NO]</li>
        <li><strong>KEP:</strong> [KEP ADRESİ]</li>
        <li><strong>E-posta:</strong> [VERİ SORUMLUSU İLETİŞİM E-POSTASI]</li>
        <li><strong>Telefon:</strong> [VERİ SORUMLUSU TELEFON]</li>
        <li><strong>Web:</strong> https://organizasyol.com</li>
      </ul>
      <p><strong>2.2.</strong> KVKK kapsamındaki taleplerinizi yukarıdaki iletişim kanalları üzerinden veya KVKK’nın 11. maddesinde belirtilen yöntemlerle iletebilirsiniz.</p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>3. İşlenen Kişisel Veri Kategorileri</h2>
      <p><strong>3.1. Kimlik ve İletişim Bilgileri:</strong> Ad, soyad (veya birleşik ad-soyad alanı), e-posta adresi, cep telefonu numarası, (Partner kullanıcılar için) yetkili kişi adı.</p>
      <p><strong>3.2. Hesap ve Kimlik Doğrulama Bilgileri:</strong> Firebase kullanıcı kimliği (UID), kimlik doğrulama yöntemi bilgisi, oturum ve erişim token bilgileri, kullanıcı rolü.</p>
      <p><strong>3.3. Profil ve İşletme Bilgileri (Partner Kullanıcılar):</strong> Firma / işletme adı, açık adres, il/ilçe, web sitesi, sosyal medya hesapları, logo, görseller ve ilan detayları.</p>
      <p><strong>3.4. Kullanım ve Tercih Verileri:</strong> Favori organizasyonlar, bildirim tercihleri, arama kayıtları, destek talepleri.</p>
      <p><strong>3.5. Teknik ve İşlem Güvenliği Verileri:</strong> IP adresi, cihaz modeli, OS sürümü, erişim logları, çerezler.</p>
      <p><strong>3.6. Görsel ve İşitsel Veriler:</strong> Profil fotoğrafı, hizmet tanıtım fotoğrafları ve videoları.</p>
      <p><strong>3.7.</strong> Organizasyol, Platform üzerinden ödeme bilgisi, banka/kart bilgisi veya finansal işlem verisi <strong>toplamaz ve işlemez.</strong></p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>4. Kişisel Verilerin İşlenme Amaçları</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li><strong>Üyelik ve hesap yönetimi:</strong> Kayıt, giriş, profil oluşturma.</li>
        <li><strong>Kimlik doğrulama ve güvenlik:</strong> Güvenli giriş ve yetkisiz erişimin önlenmesi.</li>
        <li><strong>Eşleştirme ve platform hizmetleri:</strong> Partner ilanlarının listelenmesi, aranması ve iletişim için bilgilerin sunulması.</li>
        <li><strong>Hukuki yükümlülükler:</strong> Mevzuattan kaynaklanan saklama ve raporlama yükümlülükleri.</li>
        <li><strong>Bildirimler:</strong> Hizmet bildirimleri, kampanya ve pazarlama iletileri.</li>
      </ul>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
      <p>Verileriniz mobil uygulama, web sitesi, e-posta, çerezler ve otomatik/yarı otomatik yollarla toplanmaktadır. İşleme sebepleri genel olarak sözleşmenin kurulması/ifası (KVKK m. 5/2-c), meşru menfaat (KVKK m. 5/2-f) ve pazarlama bildirimleri için açık rızadır (m. 5/1).</p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>6. Kişisel Verilerin Aktarılması</h2>
      <p>Verileriniz, sunucu ve altyapı hizmeti aldığımız Google LLC / Apple Inc. (kimlik doğrulama) ve diğer bulut servis sağlayıcılarına aktarılabilir. Ayrıca partnerlerin iletişim bilgileri platform üzerinde ziyaretçilere açık olarak yayınlanır.</p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>7. Kişisel Verilerin Saklama Süresi</h2>
      <p>Kişisel verileriniz işleme amacının gerektirdiği süre boyunca ve mevzuattaki zamanaşımı süreleri kadar muhafaza edilir.</p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>8. KVKK Kapsamındaki Haklarınız (m. 11)</h2>
      <p>Kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, yanlış işlenmişse düzeltilmesini, KVKK m.7 uyarınca silinmesini isteme hakkına sahipsiniz.</p>

      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>9. Başvuru Yöntemi</h2>
      <p>Taleplerinizi ad, soyad ve iletişim bilgileriniz ile [VERİ SORUMLUSU İLETİŞİM E-POSTASI] adresine veya şirket adresimize posta yoluyla iletebilirsiniz.</p>

      <div style={{ marginTop: '50px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px', color: 'var(--text-muted)' }}>
        <strong>[TİCARİ ÜNVAN]</strong><br />
        [VERİ SORUMLUSU YETKİLİ ADI]<br />
        [SON GÜNCELLEME TARİHİ]
      </div>
    </motion.div>
  );
}
