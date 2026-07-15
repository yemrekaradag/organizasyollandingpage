import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import './Aydinlatma.css';

export default function Kullanim() {
  return (
    <div className="legal-page">
      <Seo
        title="Kullanıcı Üyelik ve Kullanım Sözleşmesi (EULA) | Organizasyol"
        description="Organizasyol uygulaması kullanıcı üyelik ve kullanım sözleşmesi (EULA) koşulları."
        path="/kullanim"
      />
      <div className="container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="legal-title">
            KULLANICI ÜYELİK VE <span className="text-gradient">KULLANIM SÖZLEŞMESİ (EULA)</span>
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
            İşbu Kullanıcı Üyelik ve Kullanım Sözleşmesi (“Sözleşme”), Organizasyol mobil uygulaması ve organizasyol.com web sitesi üzerinden sunulan hizmetlerin kullanımına ilişkin şartları düzenler. Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgi için Aydınlatma Metni, Gizlilik Politikası ve Veri Saklama ve İmha Politikası metinlerine bakınız.
          </p>

          {/* ARACILIK VE PLATFORM HİZMET ESASLARI (GENEL FERAGATNAME) */}
          <div className="legal-disclaimer-box">
            <div className="legal-disclaimer-header">
              <span className="legal-disclaimer-badge">Önemli Özet</span>
              <h3 className="legal-disclaimer-title">ARACILIK VE PLATFORM HİZMET ESASLARI (GENEL FERAGATNAME)</h3>
            </div>
            <div className="legal-disclaimer-content">
              <p>
                Anıl Açık (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi) tarafından işletilen Organizasyol platformu hakkında önemli bilgilendirme metnidir. Ayrıntılı hükümler için aşağıdaki Kullanım Koşulları metnine bakınız.
              </p>

              <div className="legal-disclaimer-grid">
                <div className="legal-disclaimer-card">
                  <h4>1. Platformun Rolü</h4>
                  <p>
                    Organizasyol; organizasyon hizmeti arayan kullanıcılar ile hizmet sunan Partner’ları bir araya getiren bir tanıtım ve eşleştirme platformudur. Organizasyol, Kullanıcı ile Partner arasında kurulan hizmet sözleşmesinin tarafı değildir.
                  </p>
                </div>

                <div className="legal-disclaimer-card">
                  <h4>2. Organizasyol Ne Yapmaz?</h4>
                  <ul style={{ paddingLeft: '16px', margin: 0 }}>
                    <li>Platform üzerinden ödeme, rezervasyon veya satın alma işlemi gerçekleştirmez</li>
                    <li>Partner adına teklif vermez, fiyat belirlemez veya sözleşme akdetmez</li>
                    <li>Partner hizmetinin kalitesi, zamanında ifası veya sonucu hakkında garanti vermez</li>
                    <li>Kullanıcı ile Partner arasındaki WhatsApp, telefon veya e-posta görüşmelerinin tarafı değildir</li>
                  </ul>
                </div>

                <div className="legal-disclaimer-card">
                  <h4>3. Partner İçerikleri</h4>
                  <p>
                    İlan, fiyat, görsel, açıklama ve iletişim bilgileri ilgili Partner tarafından sağlanır. “Doğrulanmış” veya benzeri ibareler yalnızca ön kontrol yapıldığını gösterir; hizmet kalitesi veya sonuç garantisi anlamına gelmez.
                  </p>
                </div>

                <div className="legal-disclaimer-card">
                  <h4>4. Ücretli Görünürlük</h4>
                  <p>
                    Bazı Partner ilanları ücretli öne çıkarma veya sponsorluk kapsamında listelenebilir. Bu durum, ilgili Partner’ın önerildiği veya garanti edildiği anlamına gelmez.
                  </p>
                </div>

                <div className="legal-disclaimer-card">
                  <h4>5. Sorumluluk</h4>
                  <p>
                    Kullanıcı ile Partner arasındaki anlaşma, ödeme, iptal, iade ve hizmet ifasına ilişkin tüm hususlar tarafların kendi sorumluluğundadır. Organizasyol’un sorumluluğu, mevzuatın izin verdiği ölçüde ve kusur oranında sınırlıdır.
                  </p>
                </div>

                <div className="legal-disclaimer-card">
                  <h4>6. İletişim</h4>
                  <p>
                    <strong>E-posta:</strong> info@organizasyol.com<br />
                    <strong>İşletici:</strong> Anıl Açık<br />
                    <strong>Adres:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Taraflar ve Sözleşmenin Konusu */}
          <div className="legal-section">
            <h2 className="legal-section-title">1. Taraflar ve Sözleşmenin Konusu</h2>
            <p className="legal-paragraph">
              <strong>1.1.</strong> İşbu Sözleşme, bir tarafta Anıl Açık (“Organizasyol” markası ile faaliyet gösteren şahıs işletmesi, Adres: NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL) (“İşletici” veya “Platform”) ile diğer tarafta Platform'u mobil uygulama ve/veya internet sitesi üzerinden kullanan, üyelik oluşturan veya Platform hizmetlerinden herhangi bir şekilde yararlanan gerçek kişi (“Kullanıcı”) arasında elektronik ortamda akdedilmiştir.
            </p>
            <p className="legal-paragraph">
              <strong>1.2.</strong> Kullanıcı, Platform'a üye olarak, mobil uygulamayı indirerek veya Platform'u herhangi bir şekilde kullanarak işbu Sözleşme hükümlerini okuduğunu, anladığını ve kabul ettiğini beyan eder.
            </p>
            <p className="legal-paragraph">
              <strong>1.3.</strong> İşbu Sözleşme yalnızca İşletici ile Kullanıcı arasında kurulmaktadır. Apple App Store, Google Play Store veya diğer uygulama mağazası sağlayıcıları işbu Sözleşme'nin tarafı değildir. Platform'un işletilmesi, içeriği, bakım ve destek süreçlerine ilişkin talepler doğrudan İşletici'ye yöneltilir.
            </p>
          </div>

          {/* 2. Platformun Niteliği ve Faaliyet Modeli */}
          <div className="legal-section">
            <h2 className="legal-section-title">2. Platformun Niteliği ve Faaliyet Modeli</h2>
            <p className="legal-paragraph">
              <strong>2.1.</strong> Organizasyol; düğün, nişan, kına, doğum günü, kurumsal etkinlik ve benzeri organizasyon alanlarında faaliyet gösteren bağımsız üçüncü taraf gerçek veya tüzel kişiler (“Partner”) ile organizasyon hizmeti arayan Kullanıcıları bir araya getiren dijital listeleme, vitrin, ilan ve tanıtım platformudur.
            </p>
            <p className="legal-paragraph">
              <strong>2.2.</strong> İşletici, Platform üzerinde Partner'ların hizmetlerini tanıtmalarına, Kullanıcıların ilgili Partner'ları keşfetmelerine ve tarafların iletişim kurmalarına imkan sağlayan dijital platform işletmecisidir. Platform, Kullanıcı ile Partner arasında doğrudan hizmet sözleşmesinin kurulmasına, ödeme alınmasına veya hizmetin ifasına taraf değildir.
            </p>
            <p className="legal-paragraph">
              <strong>2.3.</strong> İşletici; Partner veya Kullanıcı adına hareket etmez, bunların temsilcisi, vekili, acentesi, çalışanı, ortağı veya kefili değildir. İşletici; Partner adına teklif vermez, fiyat belirlemez, pazarlık yürütmez, sözleşme akdetmez ve hizmet ifasını gerçekleştirmez.
            </p>
            <p className="legal-paragraph">
              <strong>2.4.</strong> Kullanıcı ile Partner arasında kurulacak her türlü iletişim, teklif, fiyat görüşmesi, rezervasyon, sözleşme, ödeme, kapora, hizmet ifası ve benzeri süreçler Kullanıcı ile ilgili Partner arasında gerçekleşir. Kullanıcı, Platform üzerinde yer alan Partner bilgilerini inceleyerek iletişim kurma kararını kendi özgür iradesiyle verir. İşletici, Kullanıcı'nın belirli bir Partner ile iletişim kurmasını, anlaşmasını veya hizmet satın almasını tavsiye eden, yönlendiren veya garanti eden bir taraf olmadığı gibi; Kullanıcı ile Partner arasında gerçekleştirilecek görüşmelerin sonucunu, tarafların anlaşmaya varıp varmayacağını veya hizmet ilişkisinin kurulup kurulmayacağını da garanti etmez. Platform yalnızca tarafların birbirleriyle iletişim kurmasına ve hizmetlerin tanıtılmasına aracılık eden teknik altyapıyı sağlar.
            </p>
            <p className="legal-paragraph">
              <strong>2.5.</strong> İşletici tarafından gerçekleştirilen Partner başvuru veya profil inceleme süreçleri, yalnızca kullanıcı deneyimini geliştirmek ve Platform standartlarını korumak amacıyla yapılan ön değerlendirmelerdir. Bu süreçler, Partner'ın sunduğu hizmetlerin kalitesi, güvenilirliği veya hukuka uygunluğu hakkında Kullanıcı'ya verilmiş bir garanti, kefalet veya tavsiye niteliği taşımaz.
            </p>
            <p className="legal-paragraph">
              <strong>2.6.</strong> İşletici, kullanıcı deneyimini geliştirmek amacıyla gerekli gördüğü durumlarda doğrulama süreçleri uygulayabilir; ancak Partner tarafından sağlanan tüm bilgi, belge ve içeriklerin sürekli ve eksiksiz şekilde doğrulandığını taahhüt etmez. Platform üzerinde yer alan her türlü doğrulama ibaresi, rozet, işaret veya sembol (onaylı, doğrulanmış vb.), yalnızca belirli bilgi veya belgelerin ön kontrolünün yapıldığını gösterir; ilgili Partner'ın hizmet kalitesi, güvenilirliği, yasal yükümlülüklere tam uyumu veya sonuç garantisi anlamına gelmez. Partner tarafından sağlanan ilan, fiyat, görsel ve açıklamaların doğruluğuna ilişkin sorumluluk münhasıran ilgili Partner'a aittir.
            </p>
            <p className="legal-paragraph">
              <strong>2.7.</strong> Platform üzerinde Partner profillerinin, ilanlarının veya hizmetlerinin yayınlanması; İşletici ile Partner arasında acentelik, ortaklık, bayilik, temsilcilik, çalışan-işveren ilişkisi veya herhangi bir ticari ortaklık ilişkisi oluşturmaz.
            </p>
            <p className="legal-paragraph">
              <strong>2.8.</strong> İşletici, gerekli gördüğü durumlarda Partner'lardan ek bilgi veya belge talep edebilir, doğrulama süreçleri uygulayabilir veya Platform kurallarına, mevzuata ya da kullanıcı güvenliğine aykırı olduğunu değerlendirdiği Partner hesaplarını veya içerikleri geçici ya da kalıcı olarak kaldırabilir.
            </p>
          </div>

          {/* 3. Üyelik ve Kullanım Koşulları */}
          <div className="legal-section">
            <h2 className="legal-section-title">3. Üyelik ve Kullanım Koşulları</h2>
            <p className="legal-paragraph">
              <strong>3.1.</strong> Platform'a üye olmak için Kullanıcının 18 yaşını doldurmuş olması ve fiil ehliyetine sahip bulunması gerekir.
            </p>
            <p className="legal-paragraph">
              <strong>3.2.</strong> Kullanıcı, üyelik sırasında verdiği tüm bilgilerin doğru, eksiksiz ve güncel olduğunu kabul eder. Yanlış veya yanıltıcı bilgi verilmesinden doğan tüm sorumluluk Kullanıcı'ya aittir.
            </p>
            <p className="legal-paragraph">
              <strong>3.3.</strong> Kullanıcı, hesap bilgilerinin ve şifresinin güvenliğinden sorumludur. Kullanıcı hesabı üzerinden gerçekleştirilen tüm işlemler Kullanıcı tarafından gerçekleştirilmiş kabul edilir.
            </p>
            <p className="legal-paragraph">
              <strong>3.4.</strong> Kullanıcı hesabı üçüncü kişilere devredilemez, satılamaz veya kullandırılamaz.
            </p>
            <p className="legal-paragraph">
              <strong>3.5.</strong> İşletici; sahte hesap oluşturulduğunu, sistemin kötüye kullanıldığını veya Platform kurallarına aykırı kullanım gerçekleştirildiğini tespit etmesi halinde hesabı askıya alma veya kapatma hakkına sahiptir.
            </p>
            <p className="legal-paragraph">
              <strong>3.6.</strong> Kullanıcı, Platform'u yalnızca kişisel organizasyon ihtiyaçları kapsamında kullanacağını, Platform üzerindeki bilgileri izinsiz ticari amaçlarla toplamayacağını, kopyalamayacağını veya üçüncü kişilere aktarmayacağını kabul eder.
            </p>
          </div>

          {/* 4. Hizmet Kapsamı, İletişim ve Teklif Alma */}
          <div className="legal-section">
            <h2 className="legal-section-title">4. Hizmet Kapsamı, İletişim ve Teklif Alma</h2>
            <p className="legal-paragraph">
              <strong>4.1.</strong> Platform üzerinden Kullanıcılardan herhangi bir ödeme alınmaz, hizmet bedeli tahsil edilmez veya ödeme aracılığı hizmeti sunulmaz.
            </p>
            <p className="legal-paragraph">
              <strong>4.2.</strong> Kapora, ön ödeme, depozito, hizmet bedeli, iptal, iade ve benzeri tüm mali süreçler yalnızca Kullanıcı ile Partner arasında yürütülür.
            </p>
            <p className="legal-paragraph">
              <strong>4.3.</strong> Organizasyol, Kullanıcı ile Partner arasında gerçekleşen anlaşmalardan komisyon, aracılık ücreti veya hizmet bedeli talep etmez.
            </p>
            <p className="legal-paragraph">
              <strong>4.4.</strong> Kullanıcılar, Partner profillerinde yayımlanan iletişim bilgileri veya Platform üzerindeki yönlendirme araçları (örneğin WhatsApp, telefon, e-posta bağlantıları) aracılığıyla Partner ile iletişim kurabilir. Bu iletişimler Platform dışına taşınmış kabul edilir.
            </p>
            <p className="legal-paragraph">
              <strong>4.5.</strong> Kullanıcı, Partner ile Platform dışında gerçekleştirdiği iletişimlerde paylaştığı kişisel bilgilerin (isim, telefon numarası, e-posta, etkinlik detayları vb.) ilgili Partner tarafından işlenebileceğini ve bu süreçlerin İşletici'nin kontrol alanı dışında olduğunu kabul eder.
            </p>
            <p className="legal-paragraph">
              <strong>4.6.</strong> İşletici, üçüncü taraf iletişim kanallarındaki görüşmelerin içeriğini takip etmek, kayıt altına almak veya denetlemekle yükümlü değildir.
            </p>
            <p className="legal-paragraph">
              <strong>4.7.</strong> Platform'un temel özellikleri Kullanıcılara ücretsiz olarak sunulmaktadır. İşletici, ilerleyen dönemlerde ek özellikler, ücretli hizmetler veya farklı kullanım modelleri sunma hakkını saklı tutar. Ücretli hizmetlerin devreye alınması halinde Kullanıcı'nın bilgisi ve onayı olmaksızın herhangi bir tahsilat yapılmaz.
            </p>
            <p className="legal-paragraph">
              <strong>4.8.</strong> Kullanıcı, Platform üzerindeki yönlendirme araçları (örneğin WhatsApp, telefon veya e-posta bağlantıları) veya Partner profillerinde yayımlanan iletişim bilgileri aracılığıyla Partner ile iletişim kurabilir. Kullanıcı, bu kanallar üzerinden paylaştığı isim, iletişim ve etkinlik bilgilerinin ilgili Partner tarafından işlenebileceğini; bu sürecin Platform dışında ve Kullanıcı'nın kendi iradesiyle gerçekleştiğini kabul eder.
            </p>
            <p className="legal-paragraph">
              <strong>4.9.</strong> Kullanıcı, Platform üzerinden ilettiği destek talepleri ve benzeri yazışmaların kötüye kullanımın önlenmesi, platform güvenliğinin sağlanması veya hukuki yükümlülükler kapsamında İşletici tarafından teknik olarak kayıt altına alınabileceğini ve denetlenebileceğini kabul eder.
            </p>
          </div>

          {/* 5. Partner Bilgileri, İlanlar ve İçerik Sorumluluğu */}
          <div className="legal-section">
            <h2 className="legal-section-title">5. Partner Bilgileri, İlanlar ve İçerik Sorumluluğu</h2>
            <p className="legal-paragraph">
              <strong>5.1.</strong> Platform'da yer alan Partner firma bilgileri, hizmet açıklamaları, fiyat bilgileri, kampanyalar, fotoğraflar, videolar, iletişim bilgileri ve diğer içerikler ilgili Partner tarafından sağlanmaktadır.
            </p>
            <p className="legal-paragraph">
              <strong>5.2.</strong> İşletici tarafından gerçekleştirilen inceleme, onay veya moderasyon süreçleri saklı kalmak kaydıyla; Partner'ların Platform'a yüklediği içeriklerin doğruluğu, güncelliği, eksiksizliği, hukuka uygunluğu ve Kullanıcı beklentilerini karşılamasına ilişkin asli sorumluluk ilgili Partner'a aittir.
            </p>
            <p className="legal-paragraph">
              <strong>5.3.</strong> İşletici'nin Platform kuralları kapsamında gerçekleştirdiği inceleme ve moderasyon faaliyetleri saklı kalmak üzere; Platform'da yayınlanan içeriklerin üçüncü kişilerin telif hakkı, marka hakkı, kişilik hakkı, özel hayatın gizliliği veya diğer fikri/sınai mülkiyet haklarını ihlal etmemesi esastır. Partner'lar tarafından yüklenen içeriklerden kaynaklanabilecek her türlü idari, hukuki ve cezai sorumluluk münhasıran ilgili Partner'a ait olup, İşletici bu içeriklerin doğruluğunu sürekli tarama yükümlülüğü altında değildir.
            </p>
            <p className="legal-paragraph">
              <strong>5.4.</strong> Partner'lar tarafından sağlanan yanlış bilgi, eksik bilgi, yanıltıcı reklam, sahte görsel veya hukuka aykırı içeriklerden dolayı Kullanıcıların veya üçüncü kişilerin uğrayabileceği doğrudan veya dolaylı zararlardan İşletici sorumlu tutulamaz.
            </p>
            <p className="legal-paragraph">
              <strong>5.5.</strong> İşletici, gerekli gördüğü hâllerde herhangi bir Partner ilanını veya hesabını geçici veya kalıcı olarak yayından kaldırabilir. Bu işlem, Kullanıcı ile Partner arasında daha önce kurulmuş veya devam eden harici hukuki ilişkileri ortadan kaldırmaz, etkilemez ve İşletici'ye herhangi bir sorumluluk yüklemez.
            </p>
          </div>

          {/* 6. Kullanıcı Yükümlülükleri ve Davranış Kuralları */}
          <div className="legal-section">
            <h2 className="legal-section-title">6. Kullanıcı Yükümlülükleri ve Davranış Kuralları</h2>
            <p className="legal-paragraph">
              <strong>6.1.</strong> Kullanıcı, Platform'u yürürlükteki mevzuata, dürüstlük kurallarına ve genel ahlaka uygun şekilde kullanacağını kabul eder.
            </p>
            <p className="legal-paragraph">
              <strong>6.2.</strong> Kullanıcı; Platform üzerinde hakaret, tehdit, nefret söylemi, spam, dolandırıcılık, sahte hesap oluşturma, yanıltıcı bilgi paylaşımı, haksız rekabet veya üçüncü kişilerin haklarını ihlal eden faaliyetlerde bulunamaz.
            </p>
            <p className="legal-paragraph">
              <strong>6.3.</strong> Kullanıcı, Platform üzerinden edindiği Partner iletişim bilgilerini; taciz, spam mesaj gönderme, sahte rezervasyon oluşturma, yanıltıcı taleplerde bulunma veya Partner'ların faaliyetlerini kötüye kullanma amacıyla kullanamaz.
            </p>
            <p className="legal-paragraph">
              <strong>6.4.</strong> Kullanıcı; Platform'u sahte Partner profili oluşturmak, başka kişilerin kimliğine bürünmek, dolandırıcılık yapmak veya üçüncü kişileri yanıltmak amacıyla kullanamaz.
            </p>
            <p className="legal-paragraph">
              <strong>6.5.</strong> Kullanıcı, Platform'un teknik altyapısına zarar verecek işlemler yapamaz; kaynak koda erişmeye çalışamaz, tersine mühendislik gerçekleştiremez, veri madenciliği (scraping), bot kullanımı veya otomatik veri toplama faaliyetlerinde bulunamaz.
            </p>
          </div>

          {/* 7. Şikâyet, Moderasyon ve Kullanıcı Tarafından Oluşturulan İçerikler */}
          <div className="legal-section">
            <h2 className="legal-section-title">7. Şikâyet, Moderasyon ve Kullanıcı Tarafından Oluşturulan İçerikler</h2>
            <p className="legal-paragraph">
              <strong>7.1.</strong> Kullanıcılar; Platform'da yer alan ilanlar, Partner davranışları, puanlama göstergeleri, yorumlar, değerlendirmeler veya diğer içeriklerle ilgili uygunsuzlukları Platform üzerinden veya info@organizasyol.com adresi üzerinden İşletici'ye bildirebilir.
            </p>
            <p className="legal-paragraph">
              <strong>7.2.</strong> İşletici, kendisine ulaşan bildirimleri makul süre içerisinde değerlendirebilir ve gerekli gördüğü durumlarda içerikleri kaldırabilir, düzenleyebilir veya hesapları askıya alabilir.
            </p>
            <p className="legal-paragraph">
              <strong>7.3.</strong> İşletici'nin Platform'da yer alan tüm içerikleri önceden inceleme veya sürekli olarak kontrol etme yükümlülüğü bulunmamaktadır. İşletici, puanlama ve değerlendirme göstergelerinin gerçek kullanıcı deneyimlerini yansıtıp yansıtmadığını garanti etmez; ancak sahte, yanıltıcı veya hukuka aykırı olduğu bildirilen içerikleri değerlendirme ve gerekli gördüğü takdirde kaldırma hakkını saklı tutar.
            </p>
            <p className="legal-paragraph">
              <strong>7.4.</strong> Platform'da Kullanıcı tarafından içerik paylaşımına izin verilen özellikler kapsamında yüklenen yorum, değerlendirme, fotoğraf, metin veya diğer içerikler üzerindeki haklar Kullanıcı'ya ait olmakla birlikte Kullanıcı; bu içeriklerin üçüncü kişilerin haklarını ihlal etmediğini kabul eder. İşletici, hukuka aykırı olduğu tespit edilen içeriklere ilişkin gerekli işlemleri yapma hakkını saklı tutmak kaydıyla, kullanıcı içeriklerinden doğabilecek uyuşmazlıklardan ya da üçüncü kişilerin uğrayabileceği zararlardan sorumlu tutulamaz. Kullanıcı, yüklediği içeriklerin Platform hizmetlerinin sunulması, geliştirilmesi ve tanıtılması amacıyla İşletici tarafından ücretsiz ve süreyle sınırlı olmaksızın kullanılmasına izin verir.
            </p>
            <p className="legal-paragraph">
              <strong>7.5.</strong> Platform'da yorum, puanlama ve değerlendirme özellikleri sunulduğu ölçüde; bu içeriklerin gerçek bir hizmet deneyimine dayanması, dürüstlük ve iyi niyet kurallarına uygun olması zorunludur. Gerçekleşmemiş hizmetlere yönelik sahte, yanıltıcı, haksız rekabet yaratmaya yönelik, karalama amaçlı veya ticari çıkar sağlama amacıyla gerçeğe aykırı değerlendirmelerin yapılması yasaktır. İşletici, içeriklerin gerçek kullanıcı deneyimine dayanıp dayanmadığını her zaman kesin olarak tespit etmekle yükümlü değildir; ancak bildirilen veya tespit edilen uygunsuz, kural ihlali içeren veya haksız rekabete yol açan içerikleri inceleme ve gerekli aksiyonları alma hakkını saklı tutar.
            </p>
          </div>

          {/* 8. Fikri Mülkiyet Hakları */}
          <div className="legal-section">
            <h2 className="legal-section-title">8. Fikri Mülkiyet Hakları</h2>
            <p className="legal-paragraph">
              <strong>8.1.</strong> "Organizasyol" markası, logosu, uygulama yazılımı, kaynak kodları, tasarımı, veri tabanı yapısı, kullanıcı arayüzü ve Platform'a ilişkin tüm fikri ve sınai mülkiyet hakları İşletici'ye veya lisans verenlerine aittir.
            </p>
            <p className="legal-paragraph">
              <strong>8.2.</strong> Kullanıcı, İşletici'nin yazılı izni olmaksızın Platform'u, markayı, logoyu, tasarımı veya yazılım altyapısını kopyalayamaz, çoğaltamaz, değiştiremez veya ticari amaçlarla kullanamaz.
            </p>
            <p className="legal-paragraph">
              <strong>8.3.</strong> Kullanıcı, Organizasyol ile resmi bir ortaklık, temsilcilik veya garanti ilişkisi varmış izlenimi oluşturacak şekilde Organizasyol markasını, logosunu veya kurumsal görsellerini kullanamaz.
            </p>
          </div>

          {/* 9. Sorumluluk Sınırı ve Garanti Reddi */}
          <div className="legal-section">
            <h2 className="legal-section-title">9. Sorumluluk Sınırı ve Garanti Reddi</h2>
            <p className="legal-paragraph">
              <strong>9.1.</strong> Platform, "olduğu gibi" ve mevcut haliyle sunulmaktadır. İşletici; Platform'un kesintisiz, hatasız, güvenli veya sürekli erişilebilir olacağını garanti etmez.
            </p>
            <p className="legal-paragraph">
              <strong>9.2.</strong> Teknik bakım çalışmaları, sistem güncellemeleri, internet servis sağlayıcı sorunları, üçüncü taraf altyapı hizmetleri (bulut hizmetleri, barındırma servisleri, bildirim servisleri, SMS servisleri ve benzeri hizmetler), siber saldırılar, doğal afetler veya mücbir sebepler nedeniyle meydana gelebilecek kesinti, gecikme veya aksamalardan İşletici sorumlu tutulamaz.
            </p>
            <p className="legal-paragraph">
              <strong>9.3.</strong> İşletici; Partner tarafından sunulan hizmetlerin kalitesi, güvenliği, zamanında yerine getirilmesi, organizasyonun gerçekleşmesi, hizmetin ayıplı veya eksik ifa edilmesi veya Kullanıcı beklentilerinin karşılanması konusunda herhangi bir garanti veya taahhütte bulunmaz.
            </p>
            <p className="legal-paragraph">
              <strong>9.4.</strong> Platform'da yer alan fiyat, açıklama, görsel, kampanya, müsaitlik bilgisi ve benzeri içerikler ilgili Partner tarafından sağlanmaktadır. İşletici, bu bilgilerin her zaman güncel, eksiksiz veya doğru olacağını garanti etmez.
            </p>
            <p className="legal-paragraph">
              <strong>9.5.</strong> Taraflar arasında gerçekleşen işlemlerden, ödeme ihtilaflarından veya üçüncü kişiler tarafından gerçekleştirilebilecek dolandırıcılık dahil her türlü hukuka aykırı fiilden doğan uyuşmazlıklarda İşletici'nin sorumluluğu; yasal olarak sınırlandırılması mümkün olmayan haller saklı kalmak kaydıyla, kusuru oranında ve mevzuatın izin verdiği sınırlar dahilindedir.
            </p>
            <p className="legal-paragraph">
              <strong>9.6.</strong> Kanunen sınırlandırılması mümkün olmayan sorumluluk halleri saklı kalmak üzere; İşletici'nin kusurundan kaynaklanmayan durumlarda, Kullanıcı'nın doğrudan veya dolaylı zararlarından İşletici sorumlu tutulamaz.
            </p>
            <p className="legal-paragraph">
              <strong>9.7.</strong> Platform, Kullanıcı ile Partner arasında gerçekleştirilen organizasyon hizmetlerinin satıcısı veya sağlayıcısı değildir. Bu nedenle Partner tarafından sunulan hizmetlere ilişkin cayma hakkı, iade, ayıplı hizmet veya hizmet ifasına ilişkin talepler doğrudan ilgili Partner'a yöneltilir. İşletici, bu taleplerin taraflar arasında dostane ve hızlı çözümü amacıyla teknik iletişim desteği sağlayabilir ancak bu süreçlerin hukuki bir tarafı, arabulucusu veya sorumlusu değildir.
            </p>
            <p className="legal-paragraph">
              <strong>9.8.</strong> Kullanıcı; Partner ile gerçekleştireceği fiyat görüşmesi, sözleşme, ödeme, kapora, rezervasyon ve hizmet ifası koşullarını tamamen kendi değerlendirmesi, takdiri ve özgür iradesiyle belirlediğini kabul eder. İşletici, taraflar arasında akdedilen harici ve özel anlaşmaların içeriğine, şartlarına, uygulanmasına veya hukuki sonucuna hiçbir şekilde dahil veya taraf değildir.
            </p>
          </div>

          {/* 10. Hesabın Sonlandırılması ve Fesih */}
          <div className="legal-section">
            <h2 className="legal-section-title">10. Hesabın Sonlandırılması ve Fesih</h2>
            <p className="legal-paragraph">
              <strong>10.1.</strong> Kullanıcı, dilediği zaman uygulama içerisindeki hesap ayarları üzerinden hesabının kalıcı olarak silinmesini talep edebilir veya info@organizasyol.com adresine kimliğini doğrulayıcı bilgilerle birlikte yazılı talep gönderebilir. İşletici, hesap kapatma taleplerini KVKK ve Veri Saklama ve İmha Politikası kapsamında en geç 30 (otuz) gün içinde sonuçlandırır.
            </p>
            <p className="legal-paragraph">
              <strong>10.2.</strong> İşletici; Kullanıcı'nın işbu Sözleşme hükümlerine, Platform kullanım kurallarına, yürürlükteki mevzuata veya dürüstlük kurallarına aykırı hareket ettiğini tespit etmesi hâlinde Kullanıcı hesabını geçici olarak askıya alabilir veya kalıcı olarak kapatabilir.
            </p>
            <p className="legal-paragraph">
              <strong>10.3.</strong> İşletici tarafından hesabın kapatılması veya askıya alınması; Kullanıcı'nın hesap kapatma tarihinden önce gerçekleştirdiği işlemlerden doğan sorumluluklarını ortadan kaldırmaz.
            </p>
            <p className="legal-paragraph">
              <strong>10.4.</strong> İşletici; mevzuat değişiklikleri, teknik gereklilikler, ticari kararlar veya Platform hizmetlerinin yeniden yapılandırılması sebebiyle Platform'un tamamını veya bir kısmını geçici ya da kalıcı olarak durdurma hakkını saklı tutar.
            </p>
          </div>

          {/* 11. Kişisel Verilerin Korunması */}
          <div className="legal-section">
            <h2 className="legal-section-title">11. Kişisel Verilerin Korunması</h2>
            <p className="legal-paragraph">
              <strong>11.1.</strong> Kullanıcı'ya ait kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuata uygun şekilde işlenir, saklanır ve korunur.
            </p>
            <p className="legal-paragraph">
              <strong>11.2.</strong> Kullanıcı, kişisel verilerinin işlenmesine, saklanmasına, aktarılmasına ve haklarına ilişkin detaylı bilgilendirmenin Platform üzerinde yayımlanan Aydınlatma Metni kapsamında kendisine sunulduğunu ve bu bilgilendirmeyi anladığını kabul eder.
            </p>
            <p className="legal-paragraph">
              <strong>11.3.</strong> Kullanıcı, Partner ile Platform dışı iletişim kurması hâlinde; telefon numarası, e-posta adresi, mesaj içerikleri veya kendisi tarafından paylaşılan diğer bilgilerin ilgili Partner tarafından işlenebileceğini kabul eder.
            </p>
            <p className="legal-paragraph">
              <strong>11.4.</strong> Platform dışındaki iletişim, ödeme veya hizmet süreçlerinde gerçekleşen kişisel veri işleme faaliyetlerinden, ilgili mevzuat kapsamında veri sorumlusu sıfatına sahip olan taraf sorumludur.
            </p>
            <p className="legal-paragraph">
              <strong>11.5.</strong> Kullanıcı, Platform üzerinden bir Partner ile iletişim kurma, Partner profiline yönlendirilme veya fiyat teklifi alma işlemlerini gerçekleştirdiğinde; bu süreçlerin niteliği gereği Partner iletişim bilgilerinin görüntülenebileceğini ve Kullanıcı'nın kendi iradesiyle paylaştığı kişisel bilgilerin ilgili Partner tarafından işlenebileceğini kabul eder.
            </p>
          </div>

          {/* 12. Sözleşme Değişiklikleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">12. Sözleşme Değişiklikleri</h2>
            <p className="legal-paragraph">
              <strong>12.1.</strong> İşletici; yürürlükteki mevzuat, teknolojik gelişmeler, Platform özelliklerindeki değişiklikler, uygulama mağazası politikaları veya ticari gereklilikler doğrultusunda işbu Sözleşme hükümlerini güncelleme hakkına sahiptir.
            </p>
            <p className="legal-paragraph">
              <strong>12.2.</strong> Önemli değişiklikler, Platform üzerinde yayımlanmadan önce veya eş zamanlı olarak uygulama içi bildirim veya kayıtlı e-posta adresi aracılığıyla Kullanıcı'ya duyurulabilir.
            </p>
            <p className="legal-paragraph">
              <strong>12.3.</strong> Güncellenen Sözleşme, Platform üzerinde yayımlandığı tarihten itibaren geçerli olur.
            </p>
            <p className="legal-paragraph">
              <strong>12.4.</strong> Kullanıcı'nın güncel Sözleşme yayımlandıktan sonra Platform'u kullanmaya devam etmesi, güncel hükümleri kabul ettiği anlamına gelir; mevzuatın ayrıca açık onay veya bilgilendirme zorunluluğu öngördüğü haller saklıdır.
            </p>
          </div>

          {/* 13. Uygulanacak Hukuk, Yetki ve Delil Sözleşmesi */}
          <div className="legal-section">
            <h2 className="legal-section-title">13. Uygulanacak Hukuk, Yetki ve Delil Sözleşmesi</h2>
            <p className="legal-paragraph">
              <strong>13.1.</strong> İşbu Sözleşme'nin uygulanması, yorumlanması ve doğabilecek uyuşmazlıkların çözümünde Türkiye Cumhuriyeti hukuku uygulanır.
            </p>
            <p className="legal-paragraph">
              <strong>13.2.</strong> Kullanıcı'nın tüketici sıfatına sahip olduğu uyuşmazlıklarda 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında yetkili tüketici hakem heyetleri ve tüketici mahkemeleri yetkilidir.
            </p>
            <p className="legal-paragraph">
              <strong>13.3.</strong> Kullanıcı'nın tüketici sıfatına sahip olmadığı ticari uyuşmazlıklarda İstanbul Anadolu Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
            <p className="legal-paragraph">
              <strong>13.4. Delil Sözleşmesi:</strong> Taraflar; işbu Sözleşme kapsamında doğabilecek uyuşmazlıkların çözümünde İşletici'nin elektronik kayıtlarının, veri tabanı kayıtlarının, sunucu loglarının, işlem kayıtlarının, üyelik bilgilerinin ve dijital iletişim kayıtlarının 6100 sayılı Hukuk Muhakemeleri Kanunu kapsamında delil olarak kullanılabileceğini kabul eder.
            </p>
            <p className="legal-paragraph">
              <strong>13.5. Bölünebilirlik:</strong> İşbu Sözleşme'nin herhangi bir hükmünün veya maddesinin yetkili bir mahkeme veya idari makam tarafından geçersiz, hukuka aykırı veya uygulanamaz ilan edilmesi durumunda, bu durum diğer hükümlerin geçerliliğini ve uygulanmasını etkilemez.
            </p>
            <p className="legal-paragraph">
              <strong>13.6. Elektronik Bildirim:</strong> Kullanıcı, Platform üzerinden gerçekleştirilen bildirimleri, güncellemeleri ve duyuruları takip etmekle yükümlüdür. İşletici tarafından Kullanıcı'nın kayıtlı iletişim bilgileri üzerinden gönderilen bildirimler, Kullanıcı'ya ulaşmış kabul edilir.
            </p>
          </div>

          {/* 14. Platform İçeriği, Listeleme Sıralaması ve Ücretli Görünürlük Hizmetleri */}
          <div className="legal-section">
            <h2 className="legal-section-title">14. Platform İçeriği, Listeleme Sıralaması ve Ücretli Görünürlük Hizmetleri</h2>
            <p className="legal-paragraph">
              <strong>14.1.</strong> İşletici, Platform üzerinde Partner'lara yönelik ücretli görünürlük, reklam, öne çıkarma, listeleme sıralamasını değiştirme veya benzeri ticari hizmetler sunabilir.
            </p>
            <p className="legal-paragraph">
              <strong>14.2.</strong> Bu hizmetlerin sunulması veya bazı Partner'ların ilanlarının öne çıkarılması, ilgili Partner'ın Kullanıcı'ya karşı hizmet kalitesi, güvenilirliği veya ifa yükümlülüğü açısından İşletici tarafından önerildiği, onaylandığı veya garanti edildiği anlamına gelmez.
            </p>
            <p className="legal-paragraph">
              <strong>14.3.</strong> Platform üzerindeki genel listeleme sıralaması; ücretli görünürlük ve sponsorluk hizmetleri, kullanıcı tercihleri, konum yakınlığı, içerik uygunluğu, popülerlik, teknik puanlama veya genel Platform politikaları gibi çeşitli faktörlerin bir kombinasyonuna göre algoritmik ve dinamik olarak değişebilir.
            </p>
          </div>

          {/* 15. İletişim Bilgileri */}
          <div className="legal-section">
            <h2 className="legal-section-title">15. İletişim Bilgileri</h2>
            <p className="legal-paragraph">
              <strong>15.1.</strong> İşbu Sözleşme kapsamında Kullanıcı tarafından iletilecek soru, talep, bildirim ve resmi başvurular aşağıdaki iletişim kanalı üzerinden İşletici'ye ulaştırılabilir:
            </p>
            <ul className="legal-list">
              <li><strong>E-posta:</strong> info@organizasyol.com</li>
              <li><strong>İşletici:</strong> Anıl Açık (Organizasyol markası ile faaliyet gösteren şahıs işletmesi)</li>
              <li><strong>Adres:</strong> NAMIK KEMAL MAH. MECNUN SK. KALKAN APT NO: 9 İÇ KAPI NO: 5 ÜMRANİYE / İSTANBUL</li>
            </ul>
          </div>

          {/* 16. Yürürlük */}
          <div className="legal-section">
            <h2 className="legal-section-title">16. Yürürlük</h2>
            <p className="legal-paragraph">
              <strong>16.1.</strong> Kullanıcı, Platform'a üye olması veya Platform hizmetlerinden yararlanmaya başlaması ile birlikte işbu Sözleşme'nin tüm hükümlerini elektronik ortamda kabul etmiş sayılır.
            </p>
            <p className="legal-paragraph">
              <strong>16.2.</strong> İşbu Sözleşme, Kullanıcı tarafından elektronik ortamda onaylandığı tarihte yürürlüğe girer.
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
