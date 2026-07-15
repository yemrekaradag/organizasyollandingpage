import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import { organizationLd, websiteLd } from '../lib/structuredData';

export default function Home() {
  return (
    <main>
      <Seo
        title="Organizasyol | Organizasyon Bak Mekan Bul"
        description="Aradığın organizasyon hizmetini bulmanın da yeni müşterilere ulaşmanın da en kısa yolu! Üstelik aracı yok, komisyon yok; tamamen ücretsiz."
        path="/"
        keywords="organizasyon, etkinlik, parti, düğün, mekan bul, hizmet ver, organizasyol, komisyonsuz"
        jsonLd={[organizationLd(), websiteLd()]}
      />
      <Hero />
      <Features />
      <FAQ />
    </main>
  );
}
