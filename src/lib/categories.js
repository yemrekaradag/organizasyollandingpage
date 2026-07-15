/**
 * Blog kategorileri — Organizasyol nişine uygun 15 kategori.
 * Her kategori bir SEO landing sayfasına (/blog/kategori/:slug) karşılık gelir.
 * `gradient`: kapak SVG'lerinde kullanılan marka-uyumlu renk çifti.
 */

export const CATEGORIES = [
  {
    slug: "dugun-organizasyonu",
    name: "Düğün Organizasyonu",
    icon: "💍",
    gradient: ["#9d4edd", "#5a189a"],
    description:
      "Düğün planlaması, bütçe, mekan, konsept ve tedarikçi seçimi için kapsamlı rehberler.",
    keywords:
      "düğün organizasyonu, düğün planlama, düğün mekanı, düğün bütçesi, düğün konsepti",
  },
  {
    slug: "nisan-soz",
    name: "Nişan & Söz Töreni",
    icon: "💐",
    gradient: ["#c77dff", "#7b2cbf"],
    description:
      "Söz ve nişan törenlerini adım adım planlamak, mekan ve organizasyon fikirleri.",
    keywords:
      "nişan organizasyonu, söz töreni, nişan mekanı, nişan konsepti, nişan planlama",
  },
  {
    slug: "kina-gecesi",
    name: "Kına Gecesi",
    icon: "🕯️",
    gradient: ["#e0aaff", "#9d4edd"],
    description:
      "Geleneksel ve modern kına gecesi organizasyonu, konsept, süsleme ve eğlence önerileri.",
    keywords:
      "kına gecesi organizasyonu, kına konsepti, kına süsleme, kına mekanı, modern kına gecesi",
  },
  {
    slug: "dogum-gunu",
    name: "Doğum Günü Partisi",
    icon: "🎂",
    gradient: ["#ff9e00", "#9d4edd"],
    description:
      "Çocuk ve yetişkin doğum günü partileri için tema, mekan, ikram ve animasyon fikirleri.",
    keywords:
      "doğum günü organizasyonu, doğum günü partisi, çocuk doğum günü, doğum günü teması, sürpriz parti",
  },
  {
    slug: "mezuniyet",
    name: "Mezuniyet Töreni & Partisi",
    icon: "🎓",
    gradient: ["#5a189a", "#c77dff"],
    description:
      "Okul ve üniversite mezuniyet töreni ile partisi organizasyonu, mekan ve program önerileri.",
    keywords:
      "mezuniyet organizasyonu, mezuniyet partisi, mezuniyet töreni, mezuniyet balosu, mezuniyet mekanı",
  },
  {
    slug: "baby-shower",
    name: "Baby Shower & Cinsiyet Partisi",
    icon: "🍼",
    gradient: ["#e0aaff", "#ff9e00"],
    description:
      "Baby shower ve cinsiyet açıklama partisi konsepti, süsleme ve organizasyon rehberi.",
    keywords:
      "baby shower organizasyonu, cinsiyet partisi, gender reveal, baby shower süsleme, bebek partisi",
  },
  {
    slug: "sunnet-dugunu",
    name: "Sünnet Düğünü",
    icon: "🎉",
    gradient: ["#7b2cbf", "#e0aaff"],
    description:
      "Sünnet düğünü organizasyonu, mekan, animasyon, taht ve eğlence hizmetleri rehberi.",
    keywords:
      "sünnet düğünü organizasyonu, sünnet organizasyonu, sünnet mekanı, sünnet tahtı, sünnet eğlencesi",
  },
  {
    slug: "kurumsal-etkinlik",
    name: "Kurumsal Etkinlik & Lansman",
    icon: "🏢",
    gradient: ["#5a189a", "#9d4edd"],
    description:
      "Kurumsal toplantı, lansman, gala ve yıl sonu etkinlikleri için profesyonel organizasyon rehberi.",
    keywords:
      "kurumsal organizasyon, lansman organizasyonu, kurumsal etkinlik, gala gecesi, şirket etkinliği",
  },
  {
    slug: "konser-festival",
    name: "Konser & Festival",
    icon: "🎤",
    gradient: ["#9d4edd", "#ff9e00"],
    description:
      "Konser, festival ve açık hava etkinliklerinin sahne, ses, ışık ve lojistik planlaması.",
    keywords:
      "konser organizasyonu, festival organizasyonu, açık hava etkinlik, sahne kurulumu, etkinlik lojistiği",
  },
  {
    slug: "cocuk-animasyonu",
    name: "Çocuk Animasyonu & Eğlence",
    icon: "🤹",
    gradient: ["#ff9e00", "#c77dff"],
    description:
      "Çocuk partilerinde animatör, palyaço, sihirbaz ve etkinlik alanı seçimi için öneriler.",
    keywords:
      "çocuk animasyonu, palyaço kiralama, çocuk animatör, çocuk partisi eğlence, sihirbaz",
  },
  {
    slug: "mekan-kiralama",
    name: "Mekan Kiralama",
    icon: "🏛️",
    gradient: ["#c77dff", "#5a189a"],
    description:
      "Düğün salonu, kır bahçesi, teras ve etkinlik mekanı kiralamada dikkat edilmesi gerekenler.",
    keywords:
      "mekan kiralama, düğün salonu kiralama, kır düğünü mekanı, etkinlik mekanı, teras kiralama",
  },
  {
    slug: "catering",
    name: "Catering & İkram",
    icon: "🍽️",
    gradient: ["#9d4edd", "#e0aaff"],
    description:
      "Etkinlikler için catering, açık büfe, kokteyl ve ikram menüsü planlama rehberi.",
    keywords:
      "catering hizmeti, açık büfe, kokteyl ikram, etkinlik yemeği, davet catering",
  },
  {
    slug: "fotograf-video",
    name: "Fotoğraf & Video Çekimi",
    icon: "📸",
    gradient: ["#5a189a", "#ff9e00"],
    description:
      "Düğün, nişan ve etkinlik fotoğrafçısı ile video çekimi hizmeti seçme rehberi.",
    keywords:
      "düğün fotoğrafçısı, etkinlik video çekimi, dış çekim, drone çekimi, fotoğraf paketi",
  },
  {
    slug: "muzik-dj",
    name: "Müzik & DJ Hizmetleri",
    icon: "🎧",
    gradient: ["#7b2cbf", "#ff9e00"],
    description:
      "Etkinlikler için DJ, canlı müzik, orkestra ve ses sistemi seçiminde ipuçları.",
    keywords:
      "dj kiralama, canlı müzik, düğün müziği, orkestra kiralama, ses sistemi",
  },
  {
    slug: "susleme-dekorasyon",
    name: "Süsleme & Dekorasyon",
    icon: "🎈",
    gradient: ["#e0aaff", "#7b2cbf"],
    description:
      "Balon süsleme, çiçek dekorasyonu, masa düzeni ve konsept dekor fikirleri.",
    keywords:
      "etkinlik süsleme, balon süsleme, çiçek dekorasyonu, masa düzeni, konsept dekor",
  },
];

const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export function getCategory(slug) {
  return BY_SLUG.get(slug) || null;
}
