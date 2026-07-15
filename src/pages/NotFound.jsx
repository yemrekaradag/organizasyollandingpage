import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import "../components/Blog.css";

export default function NotFound() {
  return (
    <main className="blog-page">
      <Seo
        title="Sayfa Bulunamadı (404) | Organizasyol"
        description="Aradığınız sayfa bulunamadı. Organizasyol blog ana sayfasına dönebilirsiniz."
        path="/404"
        noindex
      />
      <section className="notfound container">
        <span className="notfound-code text-gradient">404</span>
        <h1 className="notfound-title">Sayfa bulunamadı</h1>
        <p className="notfound-text">
          Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary btn-sm">
            Ana Sayfa
          </Link>
          <Link to="/blog" className="btn-secondary btn-sm">
            Bloga Git
          </Link>
        </div>
      </section>
    </main>
  );
}
