import { withBase } from '../utils/paths';

export interface VisionStat {
  value: string;
  label: string;
  detail: string;
}

export interface MediaShowcaseItem {
  id: string;
  category: 'iha-3b' | 'jeofizik' | 'buluntu' | 'biyoarkeoloji' | 'kale-mimari';
  categoryLabel: string;
  formatBadge: string;
  title: string;
  sector: string;
  summary: string;
  techSpec: string;
  previewImg: string;
}

export interface FieldSectorPreset {
  id: string;
  label: string;
  badge: string;
  coords: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
  publicSummary: string;
  internalSummary: string;
}

export interface ProjectPublication {
  year: string;
  authors: string;
  title: string;
  venue: string;
  tag: string;
}

export const visionStats: VisionStat[] = [
  {
    value: '153 km²',
    label: 'Sistematik Yüzey Araştırması Havzası',
    detail: '1.500–1.800 m rakımlı Malazgirt–Süphan volkanik platosu, vadi koridorları ve kuşatma mevzileri (2020–2026)',
  },
  {
    value: '~2.000',
    label: 'Belgeye Bağlanmış Arkeolojik Buluntu',
    detail: '1.000+ metal savaş objesi (ok/mızrak ucu, balista temreni, topukkıran, kılıç, üzengi) ve ~1.000 sikke/mühür',
  },
  {
    value: '51 Mezar',
    label: 'C14 Tarihli Çatışma Arkeolojisi Bulgusu',
    detail: 'Afşin Mahallesi’nde TÜBİTAK MAM C14 analizleriyle 11.–12. yüzyıla tarihlenen kılıç/balta travmalı şehitlik gömüleri',
  },
  {
    value: '12+ Kurum',
    label: 'Disiplinlerarası Üniversite & Lab Ağı',
    detail: 'Kültür ve Turizm Bakanlığı himayesinde MSKÜ, MAUN (SEMAM), Ahlat Müzesi, Hacettepe İDEA Lab ve paydaş üniversiteler',
  },
];

export const wixVsCustomComparison = [
  {
    aspect: 'Yıllık Barındırma & Lisans Maliyeti',
    oldWix: 'Döviz bazlı yıllık abonelik; ödeme/sözleşme koptuğunda site tamamen kapanır (şu an HTTP 404).',
    newCustom: '0 TL / Ay sabit altyapı maliyeti; yalnızca alan adı yenilemesiyle ömür boyu kesintisiz yayın.',
  },
  {
    aspect: 'CBS Harita, 3B Arazi ve Dron Verisi',
    oldWix: 'Hazır şablon kısıtı nedeniyle gerçek DEM yükselti verisi, CBS poligonları ve 3B sahne çalıştırılamaz.',
    newCustom: 'Doğrudan WebGL / MapLibre 3B arazi motoru, 1071 «Çıplak Topografya» katmanı ve 3B simülasyon entegrasyonu.',
  },
  {
    aspect: 'Arkeolojik Veri Güvenliği (Defineci Koruması)',
    oldWix: 'Katman ayrımı yoktur; ya hiç harita konulamaz ya da ham konum paylaşma riski doğar.',
    newCustom: 'Çift katmanlı mimari: Halka açık haritada hassas GPS noktaları gizlenir; ekip içi CBS katmanı şifreli tutulur.',
  },
  {
    aspect: 'Dron Videoları ve Görsel Arşiv Hızı',
    oldWix: 'Ağır şablon betikleri yüzünden yüksek çözünürlüklü saha görselleri ve videolar mobilde geç açılır.',
    newCustom: 'Uyarlanabilir video akışı, 3B model/ortofoto görüntüleyici ve saniyenin altında sayfa açılış hızı.',
  },
];

export const mediaShowcaseItems: MediaShowcaseItem[] = [
  {
    id: 'media-bare-topography',
    category: 'iha-3b',
    categoryLabel: 'İHA Fotogrametri & 3B Arazi',
    formatBadge: 'DRON ORTOFOTO · 1071 ÇIPLAK TOPOGRAFYA (DTM)',
    title: 'Modern Yapılardan Arındırılmış 1071 «Çıplak Topografya» Modeli',
    sector: 'Malazgirt – Süphan Volkanik Platosu (153 km²)',
    summary:
      'Çok irtifalı İHA uçuşlarından üretilen sayısal yüzey modelinden modern yerleşim ve bitki örtüsünün dijital olarak soyulmasıyla 26 Ağustos 1071 günü arazi kesitinin ve görüş koridorlarının yeniden inşası.',
    techSpec: 'RTK/PPK GNSS · CORS · CBS Görüş Açısı (Viewshed) Katmanı',
    previewImg: withBase('/images/arsiv/malazgirt-1071/prologue-van-sipan-lynch.jpg'),
  },
  {
    id: 'media-uav-magnetometry',
    category: 'jeofizik',
    categoryLabel: 'Jeofizik & İHA Manyetometri',
    formatBadge: 'İHA MANYETİK GRADİYOMETRE · ERT & GPR',
    title: 'Gülkoru Düzlüğü İHA Manyetik Tarama ve İç Kale Jeoradar Haritaları',
    sector: 'Gülkoru Köyü Düzlüğü · Afşin · Malazgirt İç Kalesi',
    summary:
      'Türkiye savaş alanı arkeolojisinde ilk kez uygulanan İHA entegreli manyetik gradiyometre (BULUCU) uçuşları, Afşin ERT özdirenç profilleri ve İç Kale GPR yeraltı radar kesitlerinin etkileşimli sunumu.',
    techSpec: 'İHA Manyetometri · 2B ERT İnversiyon · Jeoradar (GPR)',
    previewImg: withBase('/images/arsiv/malazgirt-1071/step1e-sipan-patnotz-lynch.jpg'),
  },
  {
    id: 'media-diogenes-seals-ballista',
    category: 'buluntu',
    categoryLabel: 'Savaş Alanı Buluntuları',
    formatBadge: 'XRF ANALİZLİ METAL & NÜMİSMATİK ENVANTER',
    title: 'IV. Romanos Diogenes Kurşun Mühürleri, Balista Temrenleri ve Selçuklu Gümüş Sikkeleri',
    sector: 'Taşbaşı Mevkii · Gezo Düzü · Günbeli · Sabuntepe',
    summary:
      'İmparator IV. Romanos Diogenes’e ait kurşun/baskı mühürler ve altın-bronz sikkeler, Temmuz 2026’da Taşbaşı’nda bulunan 11. yüzyıl Bizans kuşatma balista ok uçları, ~380 ok temreni, topukkıranlar ve Selçuklu gümüş sikkeleri için yüksek çözünürlüklü dijital katalog.',
    techSpec: 'XRF Element Analizi · Metrik Tipoloji · 3B Obje İnceleme',
    previewImg: withBase('/images/arsiv/malazgirt-1071/battle-manzikert-bnf226.jpg'),
  },
  {
    id: 'media-afsin-bioarchaeology',
    category: 'biyoarkeoloji',
    categoryLabel: 'Biyoarkeoloji & Çatışma Travması',
    formatBadge: 'TÜBİTAK MAM C14 · ANTROPOLOJİ & ANTİK DNA',
    title: 'Afşin Mahallesi 11. Yüzyıl Şehitlik Gömüleri ve Kesici Alet Travma Analizleri',
    sector: 'Afşin Mahallesi Mezarlığı (~7 km GD) & Arap Mezarlığı',
    summary:
      'Kıble yönelimli 51 İslami mezarda yürütülen osteolojik incelemeler: kılıç ve savaş baltasına bağlı perimortem kafatası yaralanmaları, önkol savunma kırıkları, C14 tarihlendirmesi ve Kays Arap Hanedanlığı’na (9.–10. yy.) uzanan Arap Mezarlığı taş sandukaları.',
    techSpec: 'AMS Karbon-14 · Osteoloji · C/N/Sr İzotop & Antik DNA',
    previewImg: withBase('/images/arsiv/malazgirt-1071/post1071-ani-apostles-lynch.jpg'),
  },
  {
    id: 'media-citadel-lidar',
    category: 'kale-mimari',
    categoryLabel: 'İç Kale Kazısı & Mobil LiDAR',
    formatBadge: 'CUMHURBAŞKANLIĞI KARARLI KAZI · MOBİL LiDAR',
    title: 'Tarihi Malazgirt İç Kalesi Giriş Kapısı, Selçuklu Kitabeleri ve Hatun Köprüsü 3B Belgelemesi',
    sector: 'Malazgirt İç Kalesi · Mengüçgazi · Şekerik Deresi (Hatun Köprüsü)',
    summary:
      'Dr. Öğr. Üyesi Ahmet Oğuzhan Karaçetin başkanlığındaki İç Kale kazılarında açığa çıkarılan iç giriş kapısı ve yeni mekânların mobil LiDAR 3B nokta bulutu modelleri ile siyah bazalt surlar ve Hatun Köprüsü’nün fotogrametrik envanteri.',
    techSpec: 'Mobil LiDAR Nokta Bulutu · 3B Kültür Envanteri · Açık Hava Müzesi Planı',
    previewImg: withBase('/images/arsiv/malazgirt-1071/step1f-manzikert-walls-lynch.jpg'),
  },
];

export const fieldSectorPresets: FieldSectorPreset[] = [
  {
    id: 'basin-overview',
    label: '153 km² Araştırma Havzası',
    badge: 'GENEL HAVZA · SÜPHAN VOLKANİK PLATOSU',
    coords: [42.615, 39.105],
    zoom: 10.75,
    pitch: 58,
    bearing: 132,
    publicSummary:
      'Halka açık görünüm: Malazgirt Kalesi (1.548 m) ve Murat–Badişan vadilerinden Süphan Dağı (Kırkşehit Tepe, 4.058 m) kuzeybatı eteklerine yükselen 153 km²’lik kırıklı bazalt plato havzası (hassas buluntu koordinatları gizlidir).',
    internalSummary:
      'Ekip içi CBS katmanı (temsili): RTK/CORS referanslı makro kareleme (grid) parselleri, Çırçır–Şekergün–Gezo Tepe görüş engeli (kör alan) analizi ve Seyran Tepe (1.829 m) – Ziyaret Tepe (1.798 m) gözetleme vektörleri.',
  },
  {
    id: 'citadel-tasbasi',
    label: 'İç Kale, Arap Mezarlığı & Bizans Kampı',
    badge: 'KENT KAZISI · KUŞATMA & ORDUĞÂH',
    coords: [42.549, 39.142],
    zoom: 13.3,
    pitch: 60,
    bearing: 142,
    publicSummary:
      'Tarihi Malazgirt İç Kalesi (145×75 m), 370 m dışındaki Arap Mezarlığı (9.–10. yy. Kaysî ve 11.–12. yy. sanduka mezarlar), Taşbaşı kuşatma mevzii (Temmuz 2026 Bizans balista ok uçları) ve Kızköprü–Karahasanyolu hendekli Bizans ordugâh alanı.',
    internalSummary:
      'Ekip içi CBS katmanı (temsili): İç Kale GPR yeraltı radar tarama poligonu, iç giriş kapısı mobil LiDAR açmaları, Taşbaşı–İç Kale 500 m balista atış hattı ve hendekli ordugâh yayılım zonu.',
  },
  {
    id: 'afsin-cemetery',
    label: 'Afşin Mahallesi (Kıfrî · Şehitlik)',
    badge: 'ÇATIŞMA ARKEOLOJİSİ · C14 & SU KONTROLÜ',
    coords: [42.5935, 39.0808],
    zoom: 13.0,
    pitch: 58,
    bearing: 118,
    publicSummary:
      'Malazgirt’in 7–9 km güneydoğusunda (1.650–1.680 m, eski adı Kıfrî), Kıfrî/Çivi Deresi su kaynağını tutan ileri otağ ve 51 İslami mezarın (%32 erişkin kılıç/balta ve savunma kırığı travması; TÜBİTAK MAM C14: 11.–12. yy.) kazıldığı sektör.',
    internalSummary:
      'Ekip içi CBS katmanı (temsili): Afşin 2B ERT elektrik özdirenç tomografi hatları, kaliş anakaya mezar açmaları, Rızda Tepe (1.700 m) geçit kilidi ve Aytaç–Çivi Düzü merkez hilâl kuşağı.',
  },
  {
    id: 'gezo-gulkoru',
    label: 'Gezo Düzü, Gülkoru & Seyran Tepe',
    badge: 'SON ÇEMBER · İHA MANYETOMETRİ & KOMUTA',
    coords: [42.638, 39.102],
    zoom: 12.15,
    pitch: 60,
    bearing: 136,
    publicSummary:
      'Gezo Düzü ilerleme koridoru, 26 Ağustos Cuma namazı hafızasını taşıyan Gülkoru (eski Harabereş) Büyükdua düzlüğü —Romanos Diogenes’in akşamüstü sancağını çevirip kuşatılarak esir düştüğü çember— ve Alp Arslan’ın 1.829 m’lik Seyran Tepe komuta sırtı.',
    internalSummary:
      'Ekip içi CBS katmanı (temsili): Gülkoru Düzlüğü BULUCU İHA manyetik gradiyometre şeritleri, Gezo–Sabuntepe metal yoğunluk poligonu ve Seyran Tepe’den Gülkoru çemberine panoramik görüş konisi.',
  },
  {
    id: 'suphan-ridges',
    label: 'Ziyaret Tepe (Grebido) & Badişan',
    badge: 'DOĞU GÖZETLEME · ORDUĞÂH & PUSU KANADI',
    coords: [42.712, 39.136],
    zoom: 11.8,
    pitch: 62,
    bearing: 245,
    publicSummary:
      'Malazgirt’in 14 km doğusundaki 1.798 m’lik Ziyaret Tepe (Grebido) volkanik konisi (24 Ağustos’ta Nikephoros Basilakes’in pusuya düşürüldüğü doğu gözetleme üssü), Doğansu (Sultanmut) Selçuklu ana ordugâhı ve Badişan Çayı gizli kuşatma koridoru.',
    internalSummary:
      'Ekip içi CBS katmanı (temsili): Ziyaret Tepe ERT jeofizik/anıt mezar alanı, Badişan Çayı menderesli sağ kanat gizlenme koridoru ve Günbeli Bizans mühür/sikke dağılım zonu.',
  },
];

export const simulationPipelineSteps = [
  {
    step: '01',
    title: '1071 «Çıplak Topografya» (DTM) ve Bazalt Morfolojisi Aktarımı',
    desc: 'Proje ekibinin İHA fotogrametri ve LiDAR ile ürettiği, modern bina ve yollardan arındırılmış yüksek çözünürlüklü sayısal arazi modeli (DTM), birebir metre ölçeğinde 3B fizik motoruna (NVIDIA Isaac Sim / WebGL 3B) aktarılır.',
    deliverable: 'Gerçek 1071 Süphan Platosu 3B Arazi Mesh’i',
  },
  {
    step: '02',
    title: 'CBS Buluntu Kümeleri ve Birincil Kaynak Kronolojisi Eşleştirmesi',
    desc: 'Taşbaşı kuşatma mevzii, Günbeli yürüyüş izleri, Gezo Düzü / Sabuntepe ok temreni yoğunlukları ve Afşin karargâh/şehitlik verileri; Attaleiates, Bryennios ve Ğarsü’n-Ni‘me’nin 22–26 Ağustos saatlik zaman çizelgesiyle çakıştırılır.',
    deliverable: 'Arkeolojik Kanıta Dayalı Zaman-Mekân Matrisi',
  },
  {
    step: '03',
    title: 'Görüş Açısı (Line-of-Sight), Eğim Hızı ve Pusu (Kemîn) Simülasyonu',
    desc: 'Kırıklı volkanik plato üzerinde Bizans ağır zırhlı tagmata saflarının hangi sırtların arkasını göremediği (görüş gölgesi), eğimin zırhlı piyade/süvari hızını nasıl düşürdüğü ve 26 Ağustos akşamüstü güneş açısı fizik tabanlı olarak hesaplanır.',
    deliverable: 'Dinamik Görüş Gölgesi & Manevra Doğrulaması',
  },
  {
    step: '04',
    title: 'Çift Çıktı: Web Etkileşimli 3B Sahne + Müze / Ziyaretçi Merkezi Gösterimi',
    desc: 'Üretilen 3B simülasyon hem malazgirtprojesi.com üzerinde tarayıcıdan gezilebilir sahneler olarak yayınlanır hem de ileride Malazgirt Açık Hava Müzesi / Ziyaretçi Merkezi’nde yüksek çözünürlüklü sunum ve VR deneyimi olarak kullanılır.',
    deliverable: 'Web 3B + Müze / Belgesel Render Paketi',
  },
];

export const implementationPhases = [
  {
    phase: 'FAZ 01 · HIZLI KURULUM',
    title: 'malazgirtprojesi.com’un Sıfır Maliyetle Yeniden Ayağa Kaldırılması & Medya Arşivi',
    scope: [
      'Düşmüş durumdaki Wix bağlantısının kaldırılıp malazgirtprojesi.com alan adının aylık/yıllık 0 TL barındırma maliyetli yeni modern altyapıya bağlanması (SSL dahil).',
      'Eldeki dron çekimleri, kazı videoları, belgesel kesitleri, fotoğraflar ve basın yansımalarının hızlı açılan kategorik Dijital Medya Kütüphanesi’ne dönüştürülmesi.',
      '2020–2026 yüzey araştırması ile Cumhurbaşkanlığı kararlı Tarihi Malazgirt Kenti Kazıları’nın kurumsal kadro, paydaş üniversiteler ve hakemli yayın arşivinin tek çatı altında toplanması.',
      'Mevcut sosyal medya sorumlusu ekip arkadaşıyla uyumlu içerik akışı: saha görselleri/duyurular anında hem Instagram hem web portalında senkron görünür.',
    ],
  },
  {
    phase: 'FAZ 02 · MEKÂNSAL KATMAN',
    title: 'Çift Katmanlı (Halka Açık Güvenli + Ekip İçi Şifreli) 3B CBS Saha Atlası',
    scope: [
      'Halka açık ziyaretçiler için kaçak kazı/defineci riskine karşı ham koordinatları gizleyen, 153 km² havzayı 3B arazi üzerinde anlatan etkileşimli saha haritası.',
      'Proje heyeti için şifreli girişle açılan; İHA ortofotoları, GPR/ERT/İHA manyetometri katmanları ve sektör bazlı buluntu dağılımlarını tek ekranda toplayan ekip içi CBS görüntüleyici.',
      '1071 Malazgirt sefer güzergâhlarının (Alp Arslan ve Romanos Diogenes yürüyüş kollarının) saha topografyasıyla tam uyumlu etkileşimli anlatımı.',
    ],
  },
  {
    phase: 'FAZ 03 · 3B SİMÜLASYON',
    title: 'Süphan Volkanik Platosu Üzerinde 3B Savaş Alanı Sanal Canlandırması',
    scope: [
      '1071 «Çıplak Topografya» (DTM) verisinin 3B simülasyon ortamına aktarılması; vadi kırıkları, yükselti farkları ve pusu gizleme alanlarının modellenmesi.',
      '22–23 Ağustos kale kuşatması (Taşbaşı–İç Kale), 24–25 Ağustos öncü çarpışmaları ve 26 Ağustos Cuma sahte ricat, pusu ve akşamüstü sancak dönüşünün 3B sanal kameralarla canlandırılması.',
      'Akademik sunumlar, uluslararası sempozyumlar ve müze gösterimleri için etkileşimli 3B sahne ve yüksek çözünürlüklü simülasyon çıktılarının üretilmesi.',
    ],
  },
];

export const verifiedProjectPublications: ProjectPublication[] = [
  {
    year: '2026',
    authors: 'A. M. Büyükkarakaya, M. S. Sütcü, T. O. Develi, A. Çevik, M. Dolmuş, S. Eroğlu & A. Akbaba',
    title: 'Malazgirt/Afşin Kazılarında Elde Edilen İnsan Kalıntılarının Çatışma Arkeolojisi Çerçevesinde Antropolojik Ön Değerlendirmesi',
    venue: 'bilig, Sayı 118 (Yaz 2026), s. 1–30',
    tag: 'Çatışma Arkeolojisi & Biyoarkeoloji',
  },
  {
    year: '2026',
    authors: 'T. O. Develi',
    title: 'Topraktaki Tarih: Malazgirt Projesi’nin Metodolojik Birikimi ve Türkiye’de Savaş Alanı Arkeolojisi',
    venue: 'Avrasya Uluslararası Araştırmalar Dergisi, 14(3), s. 1679–1694',
    tag: 'Savaş Alanı Arkeolojisi Metodolojisi',
  },
  {
    year: '2025',
    authors: 'A. Çevik, H. Sağlamtimur & A. O. Karaçetin',
    title: 'Malazgirt Savaş Alanı Arkeolojisi',
    venue: 'Geleceğe Miras: Türkiye Arkeolojisinin Altın Çağı, c. 2 (KTB Yay.), s. 309–332',
    tag: 'Bakanlık Sentez Bölümü',
  },
  {
    year: '2025',
    authors: 'A. Çevik, K. Köroğlu, A. O. Karaçetin, M. S. Sütcü & S. Aslan',
    title: 'Malazgirt Kalesi Kazıları',
    venue: '44. Kazı Sonuçları Toplantısı, c. 4 (KTB Yay.), s. 29–45',
    tag: 'İç Kale Kazı Raporu',
  },
  {
    year: '2025',
    authors: 'M. S. Sütcü & M. Dolmuş',
    title: 'A Piece of Manzikert’s History: The 2023 Afşin Archaeological Survey',
    venue: 'Tarih İncelemeleri Dergisi, XL(2), s. 993–1024',
    tag: 'Afşin Yüzey Araştırması',
  },
  {
    year: '2025',
    authors: 'İ. Dölek, İ. Tuğal & A. Çevik',
    title: 'Mobil LiDAR Teknolojisinin Arkeolojik Belgelemedeki Uygulanabilirliği: Malazgirt Projesi Örneği',
    venue: 'Türkiye LiDAR Dergisi, 7(2), s. 40–48',
    tag: 'Mobil LiDAR & 3B Nokta Bulutu',
  },
  {
    year: '2024',
    authors: 'A. Çevik & A. O. Karaçetin',
    title: 'Malazgirt Savaş Alanının Tespiti, Tarihî ve Arkeolojik Yüzey Araştırması',
    venue: '39. Araştırma Sonuçları Toplantısı, c. 1 (KTB Yay.), s. 57–74',
    tag: 'Yüzey Araştırması Raporu',
  },
  {
    year: '2024',
    authors: 'İ. Dölek, Y. L. Ekinci, R. Ekinci & A. Çevik',
    title: 'Malazgirt Savaş Alanının Tespiti Projesi Kapsamında Malazgirt Kalesinde (İç Kale) Yapılan Jeofizik Çalışmalar',
    venue: 'Kültürel Miras Araştırmaları Dergisi, 5(2), s. 71–76',
    tag: 'İç Kale Jeoradar (GPR)',
  },
  {
    year: '2023',
    authors: 'İ. Dölek & A. Çevik',
    title: 'CBS Kullanılarak Savaş Alanı Arkeolojisi Çalışmaları İçin Bir Veri Tabanı Oluşturulması: Malazgirt Projesi Örneği',
    venue: 'Türkiye Coğrafi Bilgi Sistemleri Dergisi, 5(2), s. 70–76',
    tag: 'CBS Mekânsal Veri Tabanı',
  },
  {
    year: '2022',
    authors: 'Y. L. Ekinci, A. Çevik & İ. Dölek',
    title: 'Malazgirt Savaş Alanının Tespiti Kapsamında Elektrik Özdirenç Tomografi Çalışmaları',
    venue: 'Kültürel Miras Araştırmaları Dergisi, 3(2), s. 50–55',
    tag: 'Afşin ERT Jeofizik',
  },
];
