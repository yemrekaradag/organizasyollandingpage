#!/usr/bin/env bash
# Organizasyol görsel optimizasyonu: kaynak PNG/JPEG'leri resize + WebP'ye çevirir.
# Gereksinim: cwebp (brew install webp). Çıktı .webp dosyaları src/assets/ altına yazılır.
# Kullanım: bash scripts/optimize-images.sh
#
# NOT: Hero telefon ekranları landscape (2726x1367) kaynaklardır ama portre telefon
# çerçevesine object-fit:cover ile sığar; kırpma DİKEY olduğundan görselin YÜKSEKLİĞİ
# net kalitede olmalıdır. Bu yüzden hero görselleri yüksekliğe (0 1280) göre küçültülür.
#
# ÖNEMLİ: Optimize edilmiş .webp dosyaları artık repodaki tek görsel kaynağıdır;
# orijinal büyük PNG/JPEG master'ları repoda tutulmaz. Yeni bir ekran görüntüsü
# eklerken önce master'ı src/assets/ altına koy, bu script'i çalıştır, sonra .webp'yi import et.
set -euo pipefail

cd "$(dirname "$0")/.."
ASSETS="src/assets"
Q=80

# Hero telefon ekranları -> yükseklik 1280 (portre cover'da net kalması için)
HERO=(home-screen organization reel-1 reel-2 organization-detail organization-detail-2)
# Feature görselleri -> genişlik 1600 (landscape kutuda gösterilir)
FEATURES=(discover contact)

echo "› Hero ekranları (yükseklik 1280)…"
for name in "${HERO[@]}"; do
  src="$ASSETS/$name.png"
  [ -f "$src" ] && cwebp -quiet -q $Q -resize 0 1280 "$src" -o "$ASSETS/$name.webp" && echo "  ✓ $name.webp"
done

echo "› Feature görselleri (genişlik 1600)…"
for name in "${FEATURES[@]}"; do
  src="$ASSETS/$name.png"
  [ -f "$src" ] && cwebp -quiet -q $Q -resize 1600 0 "$src" -o "$ASSETS/$name.webp" && echo "  ✓ $name.webp"
done

# commission jpeg -> genişlik 1400 webp
[ -f "$ASSETS/commission.jpeg" ] && cwebp -quiet -q $Q -resize 1400 0 "$ASSETS/commission.jpeg" -o "$ASSETS/commission.webp" && echo "  ✓ commission.webp"

echo "› Bitti. Boyutlar:"
ls -lh "$ASSETS"/*.webp | awk '{print "  "$9": "$5}'
echo "  TOPLAM: $(du -ch "$ASSETS"/*.webp | tail -1 | awk '{print $1}')"
