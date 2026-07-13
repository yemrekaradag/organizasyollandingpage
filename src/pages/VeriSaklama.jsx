import React from 'react';
import { motion } from 'framer-motion';
import './Aydinlatma.css';

export default function VeriSaklama() {
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
            VERİ SAKLAMA VE <span className="text-gradient">İMHA POLİTİKASI</span>
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
          {/* 1. Amaç ve Kapsam */}
          <div className="legal-section">
            <h2 className="legal-section-title">1. Amaç ve Kapsam</h2>
            <p className="legal-paragraph">
              <strong>1.1.</strong> Bu politika; Anıl Açık (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”), Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik ve ilgili mevzuat uyarınca işlenen kişisel verilerin saklanması, periyodik imhası ve imha süreçlerinin yönetilmesine ilişkin esasları belirler.
            </p>
            <p className="legal-paragraph">
              <strong>1.2.</strong> Organizasyol; organizasyon hizmeti arayan kullanıcılar ile Partner’ları bir araya getiren bir tanıtım ve eşleştirme platformudur. Platform üzerinden ödeme, rezervasyon veya satın alma işlemi yapılmaz; bu politika yalnızca Organizasyol’un kendi sistemlerinde işlediği kişisel verileri kapsar.
            </p>
            <p className="legal-paragraph">
              <strong>1.3.</strong> Kapsam:
            </p>
            <ul className="legal-list">
              <li>Organizasyol mobil uygulaması (iOS / Android)</li>
              <li>organizasyol.com web sitesi ve alt alan adları (api.organizasyol.com, cdn.organizasyol.com)</li>
              <li>Tüm kullanıcı türleri: üye (Kullanıcı), partner (işletme) ve yönetici hesapları</li>
              <li>Üçüncü taraf hizmet sağlayıcılarında tutulan Organizasyol verileri (Firebase, bulut barındırma vb.)</li>
            </ul>
          </div>

          {/* 2. Tanımlar */}
          <div className="legal-section">
            <h2 className="legal-section-title">2. Tanımlar</h2>
            <p className="legal-paragraph"><strong>2.1. Kişisel veri:</strong> Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi.</p>
            <p className="legal-paragraph"><strong>2.2. Saklama:</strong> Kişisel verilerin belirli bir süre muhafaza edilmesi.</p>
            <p className="legal-paragraph"><strong>2.3. İmha:</strong> Kişisel verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi.</p>
            <p className="legal-paragraph"><strong>2.4. Silme:</strong> Kişisel verilerin ilgili kullanıcılar için erişilemez ve tekrar kullanılamaz hale getirilmesi.</p>
            <p className="legal-paragraph"><strong>2.5. Yok etme:</strong> Kişisel verilerin hiçbir şekilde erişilemez, geri getirilemez ve yeniden kullanılamaz hale getirilmesi.</p>
            <p className="legal-paragraph"><strong>2.6. Anonim hale getirme:</strong> Kişisel verilerin başka verilerle eşleştirilse dahi kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hale getirilmesi.</p>
          </div>

          {/* 3. İlkeler */}
          <div className="legal-section">
            <h2 className="legal-section-title">3. İlkeler</h2>
            <p className="legal-paragraph">
              <strong>3.1.</strong> Organizasyol, kişisel verilerin saklanması ve imhasında aşağıdaki ilkelere uyar:
            </p>
            <ul className="legal-list">
              <li><strong>Amaçla sınırlılık:</strong> Veriler yalnızca belirlenen işleme amaçları için gerekli süre kadar saklanır.</li>
              <li><strong>Asgari saklama:</strong> İşleme amacı ortadan kalktığında veriler gecikmeksizin imha edilir; yasal saklama zorunluluğu varsa bu süre beklenir.</li>
              <li><strong>Periyodik kontrol:</strong> Saklama süreleri 6 ayda bir periyodik olarak gözden geçirilir.</li>
              <li><strong>Kayıt tutma:</strong> İmha işlemleri kayıt altına alınır.</li>
              <li><strong>Üçüncü taraf uyumu:</strong> Veri işleyenlerden (Firebase, bulut sağlayıcı vb.) sözleşmesel imha yükümlülükleri talep edilir.</li>
            </ul>
          </div>

          {/* 4. Veri Kategorilerine Göre Saklama Süreleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">4. Veri Kategorilerine Göre Saklama Süreleri</h2>
            <p className="legal-paragraph">
              <strong>4.1.</strong> Aşağıdaki tablo Organizasyol için uygulanan saklama sürelerini içerir:
            </p>

            <div className="legal-table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Veri Kategorisi</th>
                    <th>Örnek Veriler</th>
                    <th>Saklama Süresi</th>
                    <th>İmha Yöntemi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Aktif üye hesap verileri</strong></td>
                    <td>Ad, e-posta, telefon, profil</td>
                    <td>Hesap aktif olduğu sürece + hesap silme talebinden sonra 30 gün</td>
                    <td>Silme / anonimleştirme</td>
                  </tr>
                  <tr>
                    <td><strong>Partner hesap ve işletme verileri</strong></td>
                    <td>Firma adı, adres, açıklama, iletişim bilgileri, sosyal medya</td>
                    <td>Partner ilişkisi aktif olduğu sürece + fesih sonrası 1 yıl</td>
                    <td>Silme</td>
                  </tr>
                  <tr>
                    <td><strong>Kimlik doğrulama kayıtları</strong></td>
                    <td>Firebase UID, OTP logları</td>
                    <td>2 yıl</td>
                    <td>Silme</td>
                  </tr>
                  <tr>
                    <td><strong>Oturum ve erişim tokenları</strong></td>
                    <td>JWT, refresh token</td>
                    <td>Token geçerlilik süresi + 90 gün</td>
                    <td>Otomatik süre aşımı + silme</td>
                  </tr>
                  <tr>
                    <td><strong>Favori ve tercih verileri</strong></td>
                    <td>Favori listesi, bildirim ayarları</td>
                    <td>Hesap aktif olduğu sürece; hesap silinince 30 gün</td>
                    <td>Silme</td>
                  </tr>
                  <tr>
                    <td><strong>Destek talepleri</strong></td>
                    <td>Konu, mesaj, iletişim bilgisi</td>
                    <td>Talep kapanışından itibaren 3 yıl</td>
                    <td>Silme veya anonimleştirme</td>
                  </tr>
                  <tr>
                    <td><strong>Medya dosyaları</strong></td>
                    <td>Profil fotoğrafı, ilan görselleri/videoları</td>
                    <td>İçerik platformda yayındayken + kaldırma sonrası 30 gün</td>
                    <td>CDN / depolamadan silme</td>
                  </tr>
                  <tr>
                    <td><strong>Sistem ve güvenlik logları</strong></td>
                    <td>IP, cihaz bilgisi, hata logları</td>
                    <td>1 yıl</td>
                    <td>Otomatik silme</td>
                  </tr>
                  <tr>
                    <td><strong>Yedekleme (backup) verileri</strong></td>
                    <td>Veritabanı yedekleri</td>
                    <td>30 gün</td>
                    <td>Üzerine yazma / şifreli imha</td>
                  </tr>
                  <tr>
                    <td><strong>Pazarlama rızası kayıtları</strong></td>
                    <td>Onay tarihi, kanal, içerik</td>
                    <td>Rıza geri çekilene kadar + 2 yıl</td>
                    <td>Silme</td>
                  </tr>
                  <tr>
                    <td><strong>Hukuki uyuşmazlık / dava dosyaları</strong></td>
                    <td>İlgili tüm veriler</td>
                    <td>Dava / zamanaşımı süresi boyunca (genelde 10 yıl)</td>
                    <td>Yok etme</td>
                  </tr>
                  <tr>
                    <td><strong>İşletme muhasebe ve ticari kayıtları</strong></td>
                    <td>Fatura, sözleşme, resmi yazışma</td>
                    <td>Vergi Usul Kanunu uyarınca 5 yıl</td>
                    <td>Arşivleme sonrası imha</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="legal-paragraph">
              <strong>4.2.</strong> Organizasyol, Platform üzerinden ödeme veya finansal işlem verisi işlemediğinden, ödeme kayıtlarına ilişkin ayrı bir saklama kategorisi bulunmamaktadır.
            </p>
            <p className="legal-paragraph">
              <strong>4.3.</strong> Yasal bir saklama zorunluluğu bulunan veriler, ilgili süre dolmadan imha edilmez.
            </p>
          </div>

          {/* 5. Saklama Süresinin Sona Ermesi ve İmha Tetikleyicileri */}
          <div className="legal-section">
            <h2 className="legal-section-title">5. Saklama Süresinin Sona Ermesi ve İmha Tetikleyicileri</h2>
            <p className="legal-paragraph">
              <strong>5.1.</strong> Aşağıdaki durumlardan biri gerçekleştiğinde ilgili veriler için imha süreci başlatılır:
            </p>
            <ul className="legal-list">
              <li>Tabloda belirtilen saklama süresinin dolması</li>
              <li>Kullanıcının KVKK m. 7 kapsamında silme talebinde bulunması (yasal istisnalar hariç)</li>
              <li>İşleme amacının ortadan kalkması</li>
              <li>Açık rızaya dayalı işlemlerde rızanın geri çekilmesi (rıza dışında hukuki sebep kalmadığında)</li>
              <li>Partner sözleşmesinin feshedilmesi</li>
              <li>Periyodik imha taramasının (6 ayda bir) sonucunda süresi dolmuş verilerin tespiti</li>
            </ul>
          </div>

          {/* 6. İmha Yöntemleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">6. İmha Yöntemleri</h2>
            
            <p className="legal-paragraph"><strong>6.1. Elektronik ortamdaki veriler</strong></p>
            <ul className="legal-list">
              <li><strong>Veritabanı kayıtları:</strong> Kalıcı silme (hard delete) veya geri döndürülemez anonimleştirme</li>
              <li><strong>Dosya depolama (CDN / object storage):</strong> İlgili dosyanın ve türevlerinin (thumbnail vb.) silinmesi</li>
              <li><strong>Yedekler:</strong> Saklama süresi dolan yedeklerin üzerine yazılması veya şifreli imha</li>
              <li><strong>Log sistemleri:</strong> Otomatik rotasyon ve süre sonu silme politikaları</li>
            </ul>

            <p className="legal-paragraph"><strong>6.2. Fiziksel ortamdaki veriler</strong></p>
            <p className="legal-paragraph">
              Kağıt ortamında tutulan belgeler (varsa) kesilerek / parçalanarak veya güvenli imha yöntemiyle yok edilir.
            </p>

            <p className="legal-paragraph"><strong>6.3. Üçüncü taraf hizmet sağlayıcılar</strong></p>
            <p className="legal-paragraph">
              Firebase, Organizasyol Cloud ve diğer veri işleyenlerden hesap kapatma talepleri, sözleşmesel veri silme taahhütleri ve panel/API üzerinden silme işlemleri uygulanır ve kayıt altına alınır.
            </p>
          </div>

          {/* 7. Periyodik İmha Süreci */}
          <div className="legal-section">
            <h2 className="legal-section-title">7. Periyodik İmha Süreci</h2>
            <p className="legal-paragraph"><strong>7.1. Periyot:</strong> 6 ayda bir (Ocak ve Temmuz)</p>
            <p className="legal-paragraph"><strong>7.2. Süreç adımları:</strong></p>
            <ul className="legal-list">
              <li><strong>Tarama — Anıl Açık:</strong> Saklama süresi dolan verilerin tespiti</li>
              <li><strong>Doğrulama — Anıl Açık:</strong> Yasal saklama istisnası kontrolü</li>
              <li><strong>İmha — Anıl Açık:</strong> Teknik silme / anonimleştirme</li>
              <li><strong>Kayıt — Anıl Açık:</strong> İmha tutanağının oluşturulması</li>
              <li><strong>Raporlama — Anıl Açık:</strong> Yıllık özet (gerekirse)</li>
            </ul>
          </div>

          {/* 8. İmha Kayıtları */}
          <div className="legal-section">
            <h2 className="legal-section-title">8. İmha Kayıtları</h2>
            <p className="legal-paragraph">
              <strong>8.1.</strong> Her imha işlemi için aşağıdaki bilgiler en az 3 yıl saklanır: imha tarihi, veri kategorisi, imha yöntemi, işlemi gerçekleştiren kişi/birim ve imha gerekçesi.
            </p>
          </div>

          {/* 9. Kullanıcı Talepleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">9. Kullanıcı Talepleri</h2>
            <p className="legal-paragraph">
              <strong>9.1.</strong> Kullanıcılar ve Partner’lar, KVKK m. 11 kapsamında kişisel verilerinin silinmesini info@organizasyol.com adresine veya uygulama içi hesap ayarları üzerinden talep edebilir. Talep değerlendirmesi en geç 30 gün içinde tamamlanır.
            </p>
            <p className="legal-paragraph">
              <strong>9.2.</strong> Devam eden hukuki uyuşmazlık, mevzuattan kaynaklanan saklama yükümlülüğü veya kamu güvenliği hallerinde silme yerine sınırlı saklama devam edebilir.
            </p>
          </div>

          {/* 10. Politika Güncellemeleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">10. Politika Güncellemeleri</h2>
            <p className="legal-paragraph">
              <strong>10.1.</strong> Bu politika; mevzuat değişiklikleri, yeni hizmetler veya teknik altyapı güncellemeleri nedeniyle revize edilebilir. Güncel sürüm organizasyol.com üzerinde yayımlanır.
            </p>
          </div>

          {/* 11. İletişim */}
          <div className="legal-section">
            <h2 className="legal-section-title">11. İletişim</h2>
            <ul className="legal-list">
              <li><strong>Veri Sorumlusu:</strong> Anıl Açık (şahıs işletmesi)</li>
              <li><strong>Adres:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
              <li><strong>E-posta:</strong> info@organizasyol.com</li>
              <li><strong>Telefon:</strong> 0551 488 28 66</li>
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
