/**
 * BlogCover — kategori bazlı, marka-uyumlu gradient kapak (foto dosyası gerektirmez).
 * Kartlarda ve yazı başlıklarında dekoratif görsel olarak kullanılır.
 */
export default function BlogCover({ category, label, className = "" }) {
  const [c1, c2] = category?.gradient || ["#9d4edd", "#5a189a"];
  return (
    <div
      className={`blog-cover ${className}`}
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
      aria-hidden="true"
    >
      <span className="blog-cover-glow" />
      <span className="blog-cover-icon">{category?.icon || "🎉"}</span>
      {label ? <span className="blog-cover-label">{label}</span> : null}
    </div>
  );
}
