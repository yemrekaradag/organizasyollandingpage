import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Seo from "../components/Seo";
import BlogCard from "../components/BlogCard";
import NotFound from "./NotFound";
import { getCategory, CATEGORIES } from "../lib/categories";
import { getPostsByCategory } from "../lib/blog";
import { breadcrumbLd } from "../lib/structuredData";
import "../components/Blog.css";

export default function BlogCategory() {
  const { slug } = useParams();
  const category = getCategory(slug);

  if (!category) return <NotFound />;

  const posts = getPostsByCategory(slug);
  const others = CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <main className="blog-page">
      <Seo
        title={`${category.name} Rehberleri | Organizasyol Blog`}
        description={category.description}
        path={`/blog/kategori/${category.slug}`}
        keywords={category.keywords}
        jsonLd={breadcrumbLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: category.name, path: `/blog/kategori/${category.slug}` },
        ])}
      />

      <section
        className="blog-hero category-hero"
        style={{
          background: `linear-gradient(135deg, ${category.gradient[0]}22, ${category.gradient[1]}22)`,
        }}
      >
        <div className="container">
          <nav className="breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Ana Sayfa</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{category.name}</span>
          </nav>
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="category-hero-icon">{category.icon}</span>
            <h1 className="blog-hero-title">{category.name}</h1>
            <p className="blog-hero-subtitle">{category.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="blog-section container">
        {posts.length === 0 ? (
          <p className="blog-empty">
            Bu kategoride yakında yeni yazılar eklenecek.{" "}
            <Link to="/blog" className="text-gradient">
              Tüm yazılara göz at →
            </Link>
          </p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <section className="blog-section container">
        <h2 className="blog-section-title">Diğer Kategoriler</h2>
        <div className="category-grid">
          {others.map((cat) => (
            <Link
              key={cat.slug}
              to={`/blog/kategori/${cat.slug}`}
              className="category-chip glass-panel"
            >
              <span className="category-chip-icon">{cat.icon}</span>
              <span className="category-chip-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
