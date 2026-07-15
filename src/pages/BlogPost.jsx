import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import GithubSlugger from "github-slugger";
import { Clock, Calendar, ChevronRight, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import BlogCover from "../components/BlogCover";
import NotFound from "./NotFound";
import { getCategory } from "../lib/categories";
import { getPostBySlug, getRelatedPosts, formatDate } from "../lib/blog";
import {
  blogPostingLd,
  breadcrumbLd,
  faqLd,
} from "../lib/structuredData";
import "../components/BlogPost.css";

const REMARK_PLUGINS = [remarkGfm];
const REHYPE_PLUGINS = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: "heading-anchor" } }],
];

// react-markdown bileşen override'ları: iç linkler SPA yönlendirmesi kullansın.
// `node` prop'u DOM'a geçirilmez (React uyarısını önler).
const MD_COMPONENTS = {
  a({ node, href = "", children, ...props }) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} {...props}>
          {children}
        </Link>
      );
    }
    const isAnchor = href.startsWith("#");
    return (
      <a
        href={href}
        {...(isAnchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  },
  img({ node, ...props }) {
    return <img loading="lazy" decoding="async" {...props} />;
  },
};

/** Body'deki H2 başlıklardan içindekiler üretir (rehype-slug ile aynı slug'lar). */
function buildToc(body) {
  const slugger = new GithubSlugger();
  const toc = [];
  for (const line of body.split("\n")) {
    const h = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!h) continue;
    // rehype-slug ile aynı sırada tüket ki id'ler birebir eşleşsin
    const id = slugger.slug(h[2].trim());
    if (h[1].length === 2) toc.push({ id, text: h[2].trim() });
  }
  return toc;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  const toc = useMemo(() => (post ? buildToc(post.body) : []), [post]);

  if (!post) return <NotFound />;

  const category = getCategory(post.categorySlug);
  const related = getRelatedPosts(post);

  const jsonLd = [
    blogPostingLd(post),
    breadcrumbLd([
      { name: "Ana Sayfa", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.categoryName, path: `/blog/kategori/${post.categorySlug}` },
      { name: post.title, path: post.url },
    ]),
  ];
  if (post.faqs && post.faqs.length) jsonLd.push(faqLd(post.faqs));

  return (
    <main className="blogpost-page">
      <Seo
        title={`${post.title} | Organizasyol Blog`}
        description={post.description}
        path={post.url}
        type="article"
        keywords={post.keywords.join(", ")}
        jsonLd={jsonLd}
      />

      <article className="blogpost container">
        <nav className="breadcrumb" aria-label="Sayfa yolu">
          <Link to="/">Ana Sayfa</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to="/blog">Blog</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to={`/blog/kategori/${post.categorySlug}`}>
            {post.categoryName}
          </Link>
        </nav>

        <header className="blogpost-header">
          <Link
            to={`/blog/kategori/${post.categorySlug}`}
            className="blogpost-category"
          >
            {category?.icon} {post.categoryName}
          </Link>
          <h1 className="blogpost-title">{post.title}</h1>
          <p className="blogpost-lead">{post.description}</p>
          <div className="blogpost-meta">
            <span>{post.author || "Organizasyol Editör Ekibi"}</span>
            <span className="blogpost-meta-item">
              <Calendar size={15} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="blogpost-meta-item">
              <Clock size={15} /> {post.readingTime} dk okuma
            </span>
          </div>
        </header>

        <motion.div
          className="blogpost-cover-wrap"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BlogCover
            category={category}
            label={post.categoryName}
            className="blogpost-cover"
          />
        </motion.div>

        <div className="blogpost-layout">
          {toc.length > 2 && (
            <aside className="blogpost-toc" aria-label="İçindekiler">
              <p className="blogpost-toc-title">İçindekiler</p>
              <ul>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="blogpost-content prose">
            <ReactMarkdown
              remarkPlugins={REMARK_PLUGINS}
              rehypePlugins={REHYPE_PLUGINS}
              components={MD_COMPONENTS}
            >
              {post.body}
            </ReactMarkdown>

            <div className="blogpost-cta glass-panel">
              <h3>Organizasyonunu Organizasyol ile Planla</h3>
              <p>
                Aradığın hizmeti ve mekanı bul, aracı ve komisyon olmadan doğrudan
                iletişime geç. Hizmet veren misin? Ücretsiz yerini al.
              </p>
              <a href="/#download" className="btn-primary btn-sm">
                Uygulamayı Ücretsiz İndir
              </a>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="blogpost-related">
            <h2 className="blog-section-title">İlgili Yazılar</h2>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.slug} to={r.url} className="related-card glass-panel">
                  <span className="related-category">{r.categoryName}</span>
                  <span className="related-title">{r.title}</span>
                  <span className="related-more">
                    Oku <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
