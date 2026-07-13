import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aydinlatma from './pages/Aydinlatma';
import VeriSaklama from './pages/VeriSaklama';
import VeriIhlal from './pages/VeriIhlal';
import Gizlilik from './pages/Gizlilik';
import Kullanim from './pages/Kullanim';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aydinlatma" element={<Aydinlatma />} />
        <Route path="/veri-saklama" element={<VeriSaklama />} />
        <Route path="/veri-ihlal" element={<VeriIhlal />} />
        <Route path="/gizlilik" element={<Gizlilik />} />
        <Route path="/kullanim" element={<Kullanim />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
