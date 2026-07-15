import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { getCategory } from "../lib/categories";
import { formatDate } from "../lib/blog";
import BlogCover from "./BlogCover";

/** Blog listelerinde kullanılan tekrar kullanılabilir yazı kartı. */
export default function BlogCard({ post }) {
  const category = getCategory(post.categorySlug);
  return (
    <article className="blog-card glass-panel">
      <Link to={post.url} className="blog-card-link" aria-label={post.title}>
        <BlogCover category={category} className="blog-card-cover" />
        <div className="blog-card-body">
          <span className="blog-card-category">{post.categoryName}</span>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-desc">{post.description}</p>
          <div className="blog-card-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="blog-card-dot">•</span>
            <span className="blog-card-reading">
              <Clock size={14} /> {post.readingTime} dk
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
