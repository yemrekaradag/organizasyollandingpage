import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Aydinlatma = lazy(() => import('./pages/Aydinlatma'));
const VeriSaklama = lazy(() => import('./pages/VeriSaklama'));
const VeriIhlal = lazy(() => import('./pages/VeriIhlal'));
const Gizlilik = lazy(() => import('./pages/Gizlilik'));
const Kullanim = lazy(() => import('./pages/Kullanim'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogCategory = lazy(() => import('./pages/BlogCategory'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aydinlatma" element={<Aydinlatma />} />
          <Route path="/veri-saklama" element={<VeriSaklama />} />
          <Route path="/veri-ihlal" element={<VeriIhlal />} />
          <Route path="/gizlilik" element={<Gizlilik />} />
          <Route path="/kullanim" element={<Kullanim />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/kategori/:slug" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
