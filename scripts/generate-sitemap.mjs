/**
 * sitemap.xml üreticisi.
 * Statik route'ları + blog yazılarını + kategori sayfalarını tarayıp
 * public/sitemap.xml dosyasını oluşturur. `prebuild` script'i ile build öncesi çalışır.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { CATEGORIES } from "../src/lib/categories.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE_URL = "https://organizasyol.com";
const BLOG_DIR = join(ROOT, "src/content/blog");

const TODAY = new Date().toISOString().slice(0, 10);

/** Basit frontmatter alan okuyucu. */
function readField(raw, key) {
  const m = new RegExp(`^${key}:\\s*(.+)$`, "m").exec(raw);
  return m ? m[1].trim().replace(/^["']|["']$/g, "") : null;
}

// Statik sayfalar
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/aydinlatma", priority: "0.3", changefreq: "yearly" },
  { path: "/gizlilik", priority: "0.3", changefreq: "yearly" },
  { path: "/kullanim", priority: "0.3", changefreq: "yearly" },
  { path: "/veri-ihlal", priority: "0.3", changefreq: "yearly" },
  { path: "/veri-saklama", priority: "0.3", changefreq: "yearly" },
];

// Kategori sayfaları
const categoryRoutes = CATEGORIES.map((c) => ({
  path: `/blog/kategori/${c.slug}`,
  priority: "0.7",
  changefreq: "weekly",
  lastmod: TODAY,
}));

// Blog yazıları
const postRoutes = readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = readFileSync(join(BLOG_DIR, f), "utf8");
    const slug = readField(raw, "slug");
    const lastmod = readField(raw, "updated") || readField(raw, "date") || TODAY;
    return { path: `/blog/${slug}`, priority: "0.7", changefreq: "monthly", lastmod };
  })
  .filter((r) => r.path.includes("/blog/") && !r.path.endsWith("null"));

const all = [...staticRoutes, ...categoryRoutes, ...postRoutes];

const urls = all
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${r.lastmod || TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(ROOT, "public/sitemap.xml"), xml, "utf8");
console.log(`✓ sitemap.xml üretildi (${all.length} URL)`);
