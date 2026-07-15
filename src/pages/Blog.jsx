import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import BlogCard from "../components/BlogCard";
import { CATEGORIES } from "../lib/categories";
import { getAllPosts } from "../lib/blog";
import {
  breadcrumbLd,
  websiteLd,
  organizationLd,
} from "../lib/structuredData";
import "../components/Blog.css";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="blog-page">
      <Seo
        title="Organizasyon Blogu | Düğün, Parti ve Etkinlik Rehberleri — Organizasyol"
        description="Düğünden doğum gününe, kurumsal etkinlikten kına gecesine kadar 15 kategoride organizasyon planlama rehberleri, ipuçları ve fikirleri."
        path="/blog"
        keywords="organizasyon blogu, etkinlik rehberi, düğün planlama, parti fikirleri, organizasyon ipuçları"
        jsonLd={[
          organizationLd(),
          websiteLd(),
          breadcrumbLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="blog-eyebrow">Organizasyol Blog</span>
            <h1 className="blog-hero-title">
              Organizasyon <span className="text-gradient">Rehberleri</span> ve
              İlham
            </h1>
            <p className="blog-hero-subtitle">
              Düğün, nişan, doğum günü, kurumsal etkinlik ve daha fazlası… Hayalindeki
              organizasyonu planlamanın en pratik yolları, uzman ipuçları ve güncel
              fikirler burada.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-section container">
        <h2 className="blog-section-title">Kategoriler</h2>
        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/blog/kategori/${cat.slug}`}
              className="category-chip glass-panel"
              style={{
                "--c1": cat.gradient[0],
                "--c2": cat.gradient[1],
              }}
            >
              <span className="category-chip-icon">{cat.icon}</span>
              <span className="category-chip-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-section container">
        <h2 className="blog-section-title">Son Yazılar</h2>
        {posts.length === 0 ? (
          <p className="blog-empty">Yakında yeni yazılar eklenecek.</p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
