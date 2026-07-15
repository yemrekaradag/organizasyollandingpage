/**
 * Blog veri katmanı.
 * src/content/blog/*.md dosyaları build-time'da import.meta.glob ile ham metin olarak
 * yüklenir, frontmatter minimal bir parser ile ayrıştırılır (harici bağımlılık yok).
 */
import { getCategory } from "./categories";

// Ham markdown içerikleri (eager => build'e dahil, senkron erişim)
const RAW = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/** `---` bloğu içindeki basit `key: value` frontmatter'ı ayrıştırır. */
function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw.trim());
  if (!match) return { data: {}, body: raw };

  const [, fm, body] = match;
  const data = {};
  for (const line of fm.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Çevreleyen tırnakları temizle
    value = value.replace(/^["']|["']$/g, "");
    if (key === "keywords") {
      data[key] = value
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
    } else {
      data[key] = value;
    }
  }
  return { data, body: body.trim() };
}

/** ~200 kelime/dk okuma süresi (dk). */
function readingTime(body) {
  const words = body.replace(/[#>*`_\-[\]()!]/g, " ").split(/\s+/).filter(Boolean);
  return Math.max(1, Math.round(words.length / 200));
}

/**
 * "## Sıkça Sorulan Sorular" bölümündeki `### Soru` + cevap çiftlerini çıkarır.
 * FAQPage structured data'sını markdown içeriğinden (tek kaynak) otomatik üretmek için.
 */
function extractFaqs(body) {
  const lines = body.split("\n");
  const start = lines.findIndex((l) =>
    /^##\s+.*s[ıi]k[çc]a\s+sorulan/i.test(l.trim())
  );
  if (start === -1) return [];

  const faqs = [];
  let current = null;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^##\s/.test(line)) break; // sonraki H2 => bölüm bitti
    const q = /^###\s+(.*)$/.exec(line);
    if (q) {
      if (current) faqs.push(current);
      current = { question: q[1].trim(), answer: "" };
    } else if (current) {
      current.answer += (current.answer ? " " : "") + line.trim();
    }
  }
  if (current) faqs.push(current);
  return faqs
    .map((f) => ({ question: f.question, answer: f.answer.trim() }))
    .filter((f) => f.question && f.answer);
}

function buildPost(raw) {
  const { data, body } = parseFrontmatter(raw);
  const category = getCategory(data.category);
  return {
    ...data,
    keywords: data.keywords || [],
    body,
    readingTime: readingTime(body),
    faqs: extractFaqs(body),
    categoryName: category?.name || data.category,
    categorySlug: category?.slug || data.category,
    url: `/blog/${data.slug}`,
  };
}

// Tüm yazılar, tarihe göre (yeni -> eski) sıralı
const POSTS = Object.values(RAW)
  .map(buildPost)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts() {
  return POSTS;
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getPostsByCategory(categorySlug) {
  return POSTS.filter((p) => p.categorySlug === categorySlug);
}

/** Aynı kategoriden, yoksa en yeni yazılardan ilgili yazılar. */
export function getRelatedPosts(post, limit = 3) {
  const sameCat = POSTS.filter(
    (p) => p.slug !== post.slug && p.categorySlug === post.categorySlug
  );
  const others = POSTS.filter(
    (p) => p.slug !== post.slug && p.categorySlug !== post.categorySlug
  );
  return [...sameCat, ...others].slice(0, limit);
}

/** ISO tarihi Türkçe uzun biçime çevirir: "15 Ocak 2026". */
export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
