/**
 * schema.org JSON-LD üreticileri (Google zengin sonuçları için).
 * Seo bileşenine `jsonLd` prop'u olarak geçilir.
 */
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "../components/Seo";

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: ["https://www.instagram.com/organizasyolcom/"],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
  };
}

/** items: [{ name, path }] — path'ler site köküne göredir. */
export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function blogPostingLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "tr-TR",
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Organization", name: post.author || SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
    },
    image: DEFAULT_OG_IMAGE,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${post.url}` },
    articleSection: post.categoryName,
    keywords: (post.keywords || []).join(", "),
  };
}

/** faqs: [{ question, answer }] */
export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
