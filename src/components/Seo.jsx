/**
 * Seo — sayfa bazlı SEO etiketlerini React 19 native document metadata ile yönetir.
 * Render edilen <title>/<meta>/<link> etiketleri React tarafından otomatik <head>'e taşınır.
 * JSON-LD structured data <script type="application/ld+json"> olarak eklenir.
 */

export const SITE_URL = "https://organizasyol.com";
export const SITE_NAME = "Organizasyol";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
  jsonLd,
  noindex = false,
}) {
  const canonical = `${SITE_URL}${path}`;
  const structured = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structured.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
