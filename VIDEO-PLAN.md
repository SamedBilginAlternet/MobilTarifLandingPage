# MobilTarif — Higgsfield Görsel/Video Üretim Planı

> Hedef kitle **Türkiye**. Üretilen hiçbir içerikte **İngilizce metin olmayacak**.
> Yapay zekâ videolarında metin/doku bozulmasını önlemek için **altın kural** geçerlidir (aşağıda).

## Altın Kural — Metni AI üretmez, gerçek varlıklar üretir
Tüm AI video modelleri küçük detayları (ekran yazısı, ikon, barkod) bozar ve özellikle
Türkçe karakterlerde (ş, ç, ğ, ı, ö, ü) "gibberish" üretir. Bu yüzden:

- **AI yalnızca ortamı canlandırır** — hap parçacıkları, mavi ışık, gradyan, yumuşak kamera hareketi. Telefon ekranı AI tarafından çizilmez.
- **Gerçek ekran görüntüsü kod tarafında üstüne bindirilir** (compositing). Okunaklı Türkçe arayüz (`public/*.webp`) AI arka planının üzerine Next.js sayfasında / basit bir editörde yerleştirilir. UI metni her zaman gerçek varlıktır, asla AI'a dokundurulmaz.
- **Düşük hareket gücü + kısa süre (3–5 sn)** → daha az kayma → bozulma yok.
- **Hiçbir üretime metin gömülmez.** Tüm Türkçe kopya HTML/overlay olarak sayfada eklenir (net ve %100 doğru).
- **Türkçe seslendirme** `generate_audio` / `dubbing` ile, senaryo önceden onaylanır.
- **Üretmeden önce her çıktı önizlenir;** metin/doku bozuksa atılır, üzerine kredi harcanmaz.

**Özet:** AI = hareket + atmosfer. Gerçek varlıklar + HTML = tüm metin.

## Marka / Bağlam
- Uygulama: **MobilTarif** — akıllı ilaç hatırlatma, şifreli reçete yönetimi, aile paylaşımı (iOS + Android, ücretsiz, 4.8★, 10K+ kullanıcı).
- Marka rengi: **#2c76be** (medikal mavi). Dil: **Türkçe** (`lang="tr"`).
- Mevcut gerçek ekran varlıkları (`public/`): `ilaclar.webp`, `hatirlatmalar.webp`, `receteler.webp`, `paylasim-detayi.webp`, `alarmlar.webp`.

## Kredi Gerçeği
- Mevcut: **Free plan, 10 kredi.** Video, en pahalı işlem.
- Tam set için **kredi yükleme** gerekir. Aşağıdaki sıra etki/maliyet önceliğine göredir; krediler bitene kadar yukarıdan aşağıya üret.

---

## Üretim Sırası

### 1. Hero arka plan videosu ⭐ (ilk üretilecek — kalite testi)
- **Araç:** `generate_video` — **yalnızca arka plan**, ekran görüntüsü YOK.
- **Özellik:** dikey (telefon oranı) veya 9:16, ~5 sn, sorunsuz döngü (loop), sessiz.
- **Prompt (metin İÇERMEZ):**
  > Soft medical blue (#2c76be) gradient background. Translucent pill capsules drift slowly upward like particles, dissolving into gentle light. Subtle bokeh, clean clinical white-blue atmosphere, premium minimal motion, seamless loop. No text, no UI, no letters.
- **Entegrasyon:** Gerçek `ilaclar.webp` telefon görseli bu videonun **üzerine** Hero'da bindirilir (`<video>` arka planda, `<img>` önde). UI metni gerçek kalır.

### 2. Özellik mikro-klipleri (yalnızca arka plan hareketi)
- **Araç:** `generate_video`, her biri ~3–4 sn, arka plan/ışık hareketi.
- Gerçek ekran görüntüsü her zaman kod tarafında üste bindirilir; AI ekranı yeniden çizmez.
- Fikirler: yumuşak mavi ışık dalgası, yükselen hap parçacıkları, hafif kamera float — ekran sabit ve net kalır.

### 3. Marka / yaşam tarzı görselleri (metinsiz)
- **Araç:** `generate_image`. Metin YOK; logo/kopya overlay olarak eklenir.
- Örnek (aile paylaşımı teması):
  > Warm, trustworthy scene suggesting family care in a clean medical-blue (#2c76be) palette, soft light, minimal health-tech aesthetic. No text, no letters, no UI.

### 4. Sosyal / mağaza reklamı (Türkçe seslendirme)
- **Araç:** `generate_video` (9:16, arka plan) + `generate_audio`/`dubbing` (Türkçe ses).
- **VO senaryosu (Türkçe, önce onay):**
  > "İlaçlarınızı hiç unutmayın. Akıllı hatırlatmalar, şifreli reçete yönetimi, aile paylaşımı — hepsi tek uygulamada. MobilTarif'i ücretsiz indirin."
- Tüm görünür metin HTML/overlay olarak Türkçe eklenir. Yayından önce `virality_predictor` ile hook gücü ölçülür.

### 5. Yeni OG / paylaşım görseli (1200×630, metinsiz)
- **Araç:** `generate_image`. Arka plan + atmosfer; "MobilTarif" logosu ve kopya overlay olarak bindirilir.

---

## Kapsam Dışı (risk nedeniyle)
- ❌ Tam ekran görüntüsünün doğrudan image-to-video ile canlandırılması (ekran yazısı/Türkçe karakterler bozulur).
- ❌ Modelden metin, etiket, barkod veya UI yazısı üretmesini istemek.

## Temizlik (Higgsfield gerektirmez)
- `assets/*.png` kaynak dosyaları (~13 MB) sunulmuyor; `.webp` sürümleri kullanımda. `.gitignore` / kaldırma değerlendirilebilir.
- `mobiltarif-svg-1/2.svg` hem kökte hem `public/` içinde — tekilleştir (dedupe).

## Sonraki Adım
Kredi yükledikten sonra **Madde 1 (Hero arka plan videosu)** tek bir kalite testi olarak üretilir; metin/doku temizse devam edilir.

---

## Sanat Yönetimi / Marka Kuralları (Art Direction)
> Her prompt bu kuralları miras alır. `globals.css` tasarım tokenlarından birebir alınmıştır.
> Bu kurallara uymayan çıktı **AI slop** sayılır → atılır, üzerine kredi harcanmaz.

### Renk paleti (yalnızca bunlar)
| Token | Değer | Kullanım |
| --- | --- | --- |
| `--color-primary` | **#2c76be** | marka mavisi |
| `--color-primary-dark` | **#1a5a9a** | koyu mavi (gradyan/hover) |
| `--color-text` | **#212529** | metin (neredeyse siyah) |
| `--color-bg` | **#ffffff** | beyaz zemin |
| `--color-offset-bg` | **#f0f2f5** | yumuşak gri bölüm zemini |
| gölge | **rgba(20,40,70, 0.26–0.32)** | serin mavi-gri drop-shadow imzası |

### Tipografi
- **Uni Sans** — geometrik, temiz, hafif sıkışık. Başlıklarda bold ağırlık, dar tracking.
- (Hatırlatma: üretimlerde metin YOK; tipografi yalnızca HTML overlay içindir.)

### Estetik imza
- Ölçülü, **klinik, editoryal**; bol beyaz alan, yumuşak radyal gradyanlar (`ellipse at 70% 50%`).
- Düşük opaklıkta mavi vurgular: `rgba(44,118,190,0.11)` glow.
- **Blueprint nokta-ızgara motifi** — 26px radyal noktalar, ~0.16 alfa, kenarlarda maskelenip silinen.
- Yavaş, yumuşak hareket: `phone-float` (14px, 3.8s ease-in-out), `cubic-bezier(0.22,1,0.36,1)`.
- Çerçevesiz telefon görselleri + yalnızca yumuşak serin gölge (sahte bezel eklenmez).
- `prefers-reduced-motion` desteklenir.

### Her üretim ZORUNLU olarak
- Yalnızca **#2c76be / #1a5a9a mavi + beyaz + #f0f2f5 gri** kullanır.
- **Minimal ve klinik** kalır; geniş negatif alan, düşük opaklık vurgular, nokta-ızgara hissi.
- **Yavaş, yumuşak** hareket taşır (nazik float/drift; hızlı pan/morph YOK).
- **Serin mavi-gri gölge** taşır (rgba(20,40,70,~0.3)); sıcak/siyah gölge YOK.
- **Sıfır metin, sıfır sahte UI** (altın kural); bozuk hap/eriyik doku YOK.

### YASAK (AI slop işaretleri)
- ❌ Teal, mor, neon, gökkuşağı gradyan — paleti dışı her renk.
- ❌ Parlak "stock-3D render" klişeleri, aşırı lens-flare.
- ❌ Yüzen glassmorphism kartlar, jenerik "tech hexagon / devre" arka planları.
- ❌ Sıcak tonlu veya sert siyah gölgeler.
- ❌ Hızlı, zıplayan, abartılı hareket.
- ❌ Modelden çıkan her türlü harf/yazı/UI/barkod.
