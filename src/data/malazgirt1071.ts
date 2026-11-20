import { withBase } from '../utils/paths';
import type {
  VisualAsset,
  MapStep,
  CityMarker,
  RouteLine,
  PropagandaCase,
  ActorFate,
} from './antakya1098';
import type { ChronicleStage } from './hittin1187';

export const malazgirtCompassScenes = [
  { id: 'prolog', shortLabel: 'Giriş' },
  { id: 'sahne-harita', shortLabel: '01 · Ani’den Süphan Platosu’na' },
  { id: 'sahne-propaganda', shortLabel: '02 · Efsane & Kritiği' },
  { id: 'sahne-ordu', shortLabel: '03 · Alp Arslan & Ordu' },
  { id: 'sahne-kopru-kapisi', shortLabel: '04 · Savaş & Çadır' },
  { id: 'sahne-ihanet', shortLabel: '05 · Altı Aktörün Sonu' },
  { id: 'sahne-bilanco', shortLabel: '06 · Arkeoloji & Terazi' },
];

export const malazgirtHeroVisuals: {
  prologue: VisualAsset;
  propagandaBoccaccio: VisualAsset;
  coalitionCamp: VisualAsset;
  battleManzikert4A: VisualAsset;
  captivityBlinding4B: VisualAsset;
  post1071Anatolia: VisualAsset;
} = {
  prologue: {
    src: withBase('/images/arsiv/malazgirt-1071/prologue-van-sipan-lynch.jpg'),
    badge: 'TARİHÎ TOPOGRAFİK BELGE · 1901',
    caption:
      'Van Gölü Kuzey Havzası ve Süphan Dağı (Kırkşehit Tepe, 4.058 m): Kuzeybatı Eteğindeki Kırıklı Volkanik Platoda (1.550–1.830 m) 26 Ağustos 1071 Malazgirt Muharebesi Coğrafyası',
    credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Cilt II (Londra, 1901, Kamu Malı)',
    isEngraving: false,
    objectPosition: 'center 48%',
  },
  propagandaBoccaccio: {
    src: withBase('/images/arsiv/malazgirt-1071/propaganda-boccaccio-bnf232.jpg'),
    badge: 'BNF FRANÇAIS 232 · 15. YÜZYIL FRANSIZ EL YAZMASI (FOL. 323R)',
    caption:
      'Batı Rönesans İkonografisinde Üretilen «Boyna Basma / Binek Taşı» Kurgusu: Boccaccio’nun Sâsânî Şâpûr–Valerianus Hikâyesini Alp Arslan ile IV. Romanos Diogenes’e Uyarlaması',
    credit: 'Giovanni Boccaccio, Des cas des nobles hommes et femmes, BnF Ms. Fr. 232, fol. 323r (Kamu Malı)',
    objectPosition: 'center center',
    objectFit: 'contain',
  },
  coalitionCamp: {
    src: withBase('/images/arsiv/malazgirt-1071/army-alparslan-jami-tsmk1654.jpg'),
    badge: 'TOPKAPI SARAYI HAZİNE 1654 · CÂMİÜ’T-TEVÂRÎH (VR. 202)',
    caption:
      'Reşîdüddin Fazlullah’ın Câmiü’t-Tevârîh Yazmasında Tahtında Sultan Alp Arslan ve Selçuklu Divanı (Üstteki Farsça Satırda Diyarbakır, Urfa ve Rûm Sultanlarının Ceddi Süleyman Şah Zikredilir)',
    credit: 'Reşîdüddin Fazlullah, Câmiü’t-Tevârîh, TSMK Hazine nr. 1654, vr. 202 (14. Yüzyıl, Kamu Malı)',
    objectPosition: 'center 38%',
  },
  battleManzikert4A: {
    src: withBase('/images/arsiv/malazgirt-1071/battle-manzikert-bnf226.jpg'),
    badge: 'BNF FRANÇAIS 226 · ORTAÇAĞ TEZHİBİ (FOL. 265R)',
    caption:
      '26 Ağustos 1071 Malazgirt Muharebesi: Gülkoru Düzü Çemberinde Yaralı İmparator IV. Romanos Diogenes’in Selçuklu Süvarilerince Esir Alınışı',
    credit: 'Bibliothèque nationale de France, Ms. Français 226, fol. 265r üst sahne (15. Yüzyıl, Kamu Malı)',
    objectPosition: 'center 45%',
  },
  captivityBlinding4B: {
    src: withBase('/images/arsiv/malazgirt-1071/captivity-blinding-skylitzes.jpg'),
    badge: 'MADRID SKYLITZES · CODEX MATRITENSIS GR. VITR. 26-2',
    caption:
      'Bizans Siyasi Geleneğinde Tahttan İndirilen Hükümdarların Kızgın Demirle Kör Edilmesi (Typhlōsis): Sultan Çadırında Onurlandırılan Romanos’un 29 Haziran 1072 Kütahya Trajedisinin Dönem Görsel Paraleli',
    credit: 'Ioannes Skylitzes, Synopsis Historiarum, Biblioteca Nacional de España (12. Yüzyıl, Kamu Malı)',
    objectPosition: 'center 46%',
  },
  post1071Anatolia: {
    src: withBase('/images/arsiv/malazgirt-1071/post1071-ani-apostles-lynch.jpg'),
    badge: 'MİMARİ ARŞİV FOTOĞRAFI · ANİ (1901)',
    caption:
      '1064–1071 Sonrası Doğu Anadolu ve Kafkasya Sentezinin Taş Belgesi: Ani Havariler Kilisesi’ne Eklenen Selçuklu–Şeddâdî Mukarnaslı Taçkapı',
    credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Fig. 92 (1901, Kamu Malı)',
    objectPosition: 'center 44%',
  },
};

export const malazgirtPrologueConfig = {
  badges: [
    { text: 'DOSYA 03 · ETKİLEŞİMLİ BELGESEL', variant: 'east' as const },
    { text: '8 BİRİNCİL VEKÂYİNÂME & SAHA ARKEOLOJİSİ', variant: 'west' as const },
    { text: '3B SÜPHAN VOLKANİK PLATOSU & DİVAN KAYITLARI', variant: 'turquoise' as const },
  ],
  titleMain: 'Anadolu Kapısında İki İmparatorluk:',
  titleAccent: '1071 Malazgirt, Süphan Platosu ve Siyasi Dönüşüm',
  leadHtml:
    'Savaş alanında bizzat bulunan Bizans yüksek askeri yargıcı <strong>Mihail Attaleiates</strong> neden Sultan Alp Arslan’ın esir imparatora muamelesini <em>«Tanrı’nın adil ve tarafsız hükmü»</em> diye övdü; buna karşılık Konstantinopolis sarayı kendi imparatorunun gözlerine neden mil çekti? 1064 Ani diplomasisinden <strong>Süphan volkanik platosunun kırıklı bazalt sırtlarındaki 26 Ağustos 1071 Cuma</strong> pusu çemberine, çadırdaki esaret protokolünden 1075 İznik başkentine uzanan kırılmayı birincil kaynaklar ve 2020–2026 savaş alanı arkeolojisi verileriyle yan yana okuyun.',
  visual: malazgirtHeroVisuals.prologue,
  chronometer: [
    {
      year: '1048 Pasinler & 1053 Tasfiye',
      desc: 'İlk Selçuklu–Bizans-Gürcü savaşı; Monomakhos’un 50.000 kişilik doğu sınır milisini dağıtması',
    },
    {
      year: 'Temmuz – 16 Ağustos 1064',
      desc: 'Alp Arslan’ın Ahılkelek ve «fethedilemez» Ani’yi alışı; Gürcü Kralı IV. Bagrat ile diplomatik denge',
    },
    {
      year: 'Nisan – Temmuz 1071',
      desc: 'Halep’ten dönen Alp Arslan’ın Fırat–Musul üzerinden Hoy toplanma üssüne sürat yürüyüşü',
    },
    {
      year: '26 Ağustos 1071 Cuma',
      desc: 'Süphan volkanik platosunda sahte ricat ve pusu çemberi, Romanos’un esareti ve 8 günlük çadır antlaşması',
      active: true,
    },
  ],
};

export const malazgirtCities: CityMarker[] = [
  {
    id: 'pasinler',
    name: 'Hasankale / Pasinler (Basiani)',
    historicalName: '1048 Muharebesi · Temmuz 1071 Romanos Geçişi',
    coords: [41.6745, 39.9773],
    faction: 'contested',
  },
  {
    id: 'kutaisi',
    name: 'Kutaisi',
    historicalName: 'Gürcistan Kralı IV. Bagrat (1071’de Tarafsız)',
    coords: [42.7, 42.268],
    faction: 'georgian',
  },
  {
    id: 'ahilkelek',
    name: 'Ahılkelek (Akhalkalaki)',
    historicalName: 'Temmuz 1064 Selçuklu Fethi & Sıhriyet',
    coords: [43.486, 41.405],
    faction: 'georgian',
  },
  {
    id: 'ani',
    name: 'Ani',
    historicalName: '16 Ağustos 1064 Fethi · Şeddâdî İdaresi',
    coords: [43.572, 40.507],
    faction: 'seljuk',
  },
  {
    id: 'hoy',
    name: 'Hoy (Khoy) & Selmas',
    historicalName: 'Temmuz 1071 Selçuklu İmparatorluk Toplanma & Yedek At Üssü',
    coords: [44.9512, 38.5479],
    faction: 'seljuk',
  },
  {
    id: 'ercis',
    name: 'Erciş (Van Gölü Kuzeydoğusu)',
    historicalName: 'Ağustos 1071 · Sunduk Bey’in Ahlat’a Sevki & İki Kolun Ayrılışı',
    coords: [43.3591, 39.029],
    faction: 'seljuk',
  },
  {
    id: 'halep',
    name: 'Halep',
    historicalName: '26 Nisan 1071 Kuşatmanın Kaldırılışı · Doğu Cephesine Dönüş',
    coords: [37.1637, 36.1992],
    faction: 'seljuk',
  },
  {
    id: 'urfa',
    name: 'Birecik Fırat Geçidi & Urfa',
    historicalName: 'Nisan Sonu 1071 Kabarmış Fırat’tan Sürat Geçişi',
    coords: [38.7846, 37.1477],
    faction: 'contested',
  },
  {
    id: 'musul',
    name: 'Musul (Dicle Sağ Kıyısı)',
    historicalName: 'Mayıs 1071 · Yorgun Askerin Terhisi & Nizâmülmülk’ün İran’a İrsali',
    coords: [43.0997, 36.3437],
    faction: 'seljuk',
  },
  {
    id: 'silvan',
    name: 'Meyyâfârikîn (Silvan) & Âmid',
    historicalName: 'Ekim 1070 İtaat · 1071’de 10.000 Kürt/Yerel Gönüllü Katılımı',
    coords: [41.0056, 38.1412],
    faction: 'seljuk',
  },
  {
    id: 'ahlat',
    name: 'Ahlat (Hılât)',
    historicalName: 'Selçuklu Serhad Üssü · 22–23 Ağustos Sunduk Bey Zaferi',
    coords: [42.4833, 38.7547],
    faction: 'seljuk',
  },
  {
    id: 'bulanik',
    name: 'Bulanık (Murat / Arsanias Vadisi)',
    historicalName: '~18–20 Ağustos 1071 · Tarkhaniotes Kolunun Ahlat’a Ayrılışı',
    coords: [42.2708, 39.0924],
    faction: 'imperial',
  },
  {
    id: 'malazgirt',
    name: 'Malazgirt Kalesi & Bizans Ordugâhı',
    historicalName: '22–23 Ağustos Kuşatması (Taşbaşı) · Kızköprü Hendekli Kampı (1.548 m)',
    coords: [42.5452, 39.147],
    faction: 'contested',
  },
  {
    id: 'afsin',
    name: 'Afşin (Kıfrî) & Aytaç–Çivi Düzü',
    historicalName: '24–25 Ağustos Su Kontrolü, İleri Otağ & 51 C14 Tarihli Şehit Mezarı',
    coords: [42.5935, 39.0808],
    faction: 'seljuk',
  },
  {
    id: 'rahve',
    name: 'Gülkoru Düzü (Büyükdua) & Seyran Tepe',
    historicalName: '26 Ağustos Cuma Komuta Sırtı (1.829 m) & Romanos’un Esir Düştüğü Çember',
    coords: [42.63, 39.108],
    faction: 'contested',
  },
  {
    id: 'ziyarettepe',
    name: 'Ziyaret Tepe (Grebido) & Doğansu',
    historicalName: '1.798 m Doğu Gözetleme & Kampı · 24 Ağustos Basilakes Pususu',
    coords: [42.712, 39.136],
    faction: 'seljuk',
  },
  {
    id: 'erzurum',
    name: 'Erzurum (Theodosioupolis)',
    historicalName: 'Haziran Sonu 1071 · 2 Aylık Erzak İkmali & Doğu Çıkışı',
    coords: [41.2728, 39.9063],
    faction: 'imperial',
  },
  {
    id: 'koloneia',
    name: 'Şebinkarahisar (Koloneia)',
    historicalName: 'Haziran 1071 · Kuzey Askerî Yolu & Kelkit–Kop Geçidi',
    coords: [38.4236, 40.2886],
    faction: 'imperial',
  },
  {
    id: 'sivas',
    name: 'Sivas (Sebasteia) & Krya Pege',
    historicalName: 'Mayıs 1071 · Nemitzoi İsyanının Bastırılışı',
    coords: [37.0153, 39.7457],
    faction: 'imperial',
  },
  {
    id: 'eskisehir',
    name: 'Eskişehir (Dorylaion)',
    historicalName: 'Nisan 1071 · Helenopolis–İznik–Bozüyük Üzerinden Çıkış',
    coords: [30.5191, 39.7744],
    faction: 'imperial',
  },
  {
    id: 'malatya',
    name: 'Malatya (Melitene)',
    historicalName: 'Tarkhaniotes & Roussel’in Muş–Palu–Harput Üzerinden Çekilişi',
    coords: [38.3191, 38.3487],
    faction: 'imperial',
  },
  {
    id: 'konstantinopolis',
    name: 'Konstantinopolis',
    historicalName: '13 Mart 1071 Çıkış · Ekim 1071 Dukas Darbesi',
    coords: [28.9769, 41.0041],
    faction: 'byzantine',
  },
  {
    id: 'kutahya',
    name: 'Kütahya (Kotyaion)',
    historicalName: '29 Haziran 1072 Romanos’un Kör Edilişi',
    coords: [29.983, 39.42],
    faction: 'byzantine',
  },
  {
    id: 'kinaliada',
    name: 'Kınalıada (Proti)',
    historicalName: '4 Ağustos 1072 Romanos’un Vefatı',
    coords: [29.05, 40.91],
    faction: 'byzantine',
  },
  {
    id: 'iznik',
    name: 'İznik (Nikaia)',
    historicalName: '1075 Türkiye Selçuklu Başkenti (Süleyman Şah)',
    coords: [29.7224, 40.4303],
    faction: 'seljuk',
  },
];

export const malazgirtRoutes: RouteLine[] = [
  {
    id: 'caucasus-1064',
    label: '1064 Ahılkelek–Ani Seferi',
    color: '#2cc5b3',
    coordinates: [
      [44.9512, 38.5479],
      [45.412, 39.209],
      [44.51, 40.18],
      [43.84, 40.79],
      [43.486, 41.405],
      [43.572, 40.507],
    ],
  },
  {
    id: 'alparslan-return-1071',
    label: 'Nisan–Ağustos 1071 Alp Arslan Sürat Yürüyüşü (Halep–Musul–Hoy–Erciş–Süphan)',
    color: '#2cc5b3',
    coordinates: [
      [37.1637, 36.1992],
      [37.765, 36.82],
      [37.98, 37.0315],
      [38.425, 36.976],
      [38.7846, 37.1477],
      [39.762, 37.2329],
      [41.2166, 37.0667],
      [41.8599, 36.3193],
      [43.0997, 36.3437],
      [44.0094, 36.1912],
      [44.5422, 36.6555],
      [45.1401, 36.7003],
      [45.0229, 37.0802],
      [45.0667, 37.5483],
      [44.7685, 38.1969],
      [44.9512, 38.5479],
      [44.404, 38.4769],
      [43.9029, 39.1355],
      [43.7612, 38.9903],
      [43.3591, 39.029],
      [42.7346, 38.8043],
      [42.665, 38.915],
      [42.6246, 38.9689],
      [42.6464, 39.0551],
      [42.5935, 39.0808],
      [42.668, 39.084],
    ],
  },
  {
    id: 'alparslan-patnos-branch',
    label: 'Ağustos 1071 Erciş–Patnos–Badişan Kuzey Kolu & Sunduk Bey Ahlat Sevki',
    color: '#2cc5b3',
    dashed: true,
    coordinates: [
      [42.4833, 38.7547],
      [42.7346, 38.8043],
      [43.3591, 39.029],
      [43.095, 39.145],
      [42.8612, 39.2334],
      [42.7393, 39.138],
      [42.712, 39.136],
      [42.63, 39.108],
    ],
  },
  {
    id: 'romanos-march-1071',
    label: 'Mart–Ağustos 1071 Romanos Diogenes Seferi (Anadolu Kuzey Askerî Yolu)',
    color: '#d9485f',
    coordinates: [
      [28.9769, 41.0041],
      [29.505, 40.7241],
      [29.7224, 40.4303],
      [30.0274, 40.3643],
      [30.0373, 39.9043],
      [30.5191, 39.7744],
      [31.5368, 39.451],
      [31.983, 39.695],
      [33.1238, 39.5534],
      [33.7244, 39.3589],
      [34.4657, 39.6871],
      [36.5933, 39.8672],
      [37.0153, 39.7457],
      [37.7591, 39.8972],
      [38.0856, 40.1627],
      [38.4236, 40.2886],
      [39.436, 40.1255],
      [39.595, 40.026],
      [40.2122, 40.2023],
      [40.5084, 40.0302],
      [40.6827, 39.9219],
      [41.2728, 39.9063],
      [41.6745, 39.9773],
      [41.8886, 39.9699],
      [42.1431, 39.7017],
      [41.7003, 39.3585],
      [42.025, 39.185],
      [42.2708, 39.0924],
      [42.5452, 39.147],
      [42.556, 39.136],
      [42.608, 39.115],
      [42.63, 39.108],
    ],
  },
  {
    id: 'tarchaneiotes-flight',
    label: 'Tarkhaniotes & Roussel’in Bulanık–Ahlat Ayrılışı ve Muş–Harput–Malatya Çekilişi',
    color: '#a78bfa',
    dashed: true,
    coordinates: [
      [42.2708, 39.0924],
      [42.2951, 38.8701],
      [42.4833, 38.7547],
      [42.2759, 38.5087],
      [42.0253, 38.5742],
      [41.5069, 38.7553],
      [40.5576, 38.7519],
      [39.9289, 38.6935],
      [39.2521, 38.7046],
      [38.8184, 38.4406],
      [38.3191, 38.3487],
    ],
  },
  {
    id: 'captivity-and-1075',
    label: '1072 Kütahya–Kınalıada & 1075 İznik Hattı',
    color: '#d99b4e',
    dashed: true,
    coordinates: [
      [42.5452, 39.147],
      [41.2728, 39.9063],
      [38.4236, 40.2886],
      [36.554, 40.314],
      [32.85, 39.92],
      [29.983, 39.42],
      [29.7224, 40.4303],
      [29.05, 40.91],
    ],
  },
];

export const malazgirtLegendItems = [
  { color: '#2cc5b3', label: 'Alp Arslan & Selçuklu Kolları' },
  { color: '#d9485f', label: 'IV. Romanos Diogenes Seferi' },
  { color: '#a78bfa', label: 'Ahlat Ayrılışı & Malatya Çekilişi' },
  { color: '#d99b4e', label: '1072 Kütahya & 1075 İznik Hattı' },
];

export const malazgirtRingHighlights = [
  { id: 'ani-1064-ring', coords: [43.572, 40.507] as [number, number], color: '#2cc5b3' },
  { id: 'rahve-battle-ring', coords: [42.63, 39.108] as [number, number], color: '#d99b4e' },
  { id: 'afsin-camp-ring', coords: [42.5935, 39.0808] as [number, number], color: '#2cc5b3' },
  { id: 'iznik-1075-ring', coords: [29.7224, 40.4303] as [number, number], color: '#2cc5b3' },
];

export const malazgirtMapSteps: MapStep[] = [
  {
    id: 'step-1a-caucasus-ani',
    stepLabel: 'SAHNE 1A · KAFKASYA KİLİDİ VE ANİ',
    dateBadge: '1048 – 1068 (Merkez: 16 Ağustos 1064)',
    locationBadge: 'Hasankale/Pasinler · Ahılkelek · Ani · Kutaisi',
    title: 'Malazgirt’ten Önce Kuzey Kanadı Nasıl Kilitlendi? 1064 Ahılkelek–Ani ve Gürcü Diplomasisi',
    narrative: [
      '1071 Malazgirt’i tek günlük bir mucize sanmak, yirmi yıllık kuzey hazırlığını gözden kaçırır. 1048 Hasankale/Pasinler (Kaputru) Muharebesi’nde Bizans safında dövüşürken esir düşen Gürcü komutan <strong>Liparit Bagvaşi</strong>’yi Tuğrul Bey’in fidyesiz serbest bırakmasıyla başlayan temas, Sultan Alp Arslan’ın <strong>Temmuz–Ağustos 1064 Kafkasya seferi</strong> ile stratejik bir kilide dönüştü.',
      'Alp Arslan önce Gürcistan’ın kilit kalesi <strong>Ahılkelek</strong>’i, ardından üç yanı sarp Arpaçay kanyonlarıyla çevrili <em>«fethedilemez»</em> Bizans sınır metropolü <strong>Ani</strong>’yi 16 Ağustos 1064’te düşürdü. Hemen ardından Gürcü Kralı <strong>IV. Bagrat</strong> ile kurulan diplomatik antlaşma ve sıhriyet bağı sayesinde, 1048’in aksine <strong>1071 Malazgirt’te Gürcistan Krallığı Bizans safında savaşa girmedi</strong>; Selçuklu ordusunun kuzey kanadı tamamen güvende kaldı.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Sıbt İbnü’l-Cevzî, Mir’âtü’z-Zamân fî Târîhi’l-A‘yân (456 h., Nakîbü’n-nükabâ Ebû’l-Fevâris’in Anı Mektubu; nşr. Ali Sevim, TTK Belgeler XIV/18, 1992, s. 134; çev. Ali Sevim, TTK Belgeler XIX/23, 1998, s. 10)',
      text: '«Ben, bu beldede (Anı) korkunç bir görünüme tanık oldum; burasının fethi, hayal bile edilemez; hiçbir hükümdarın burasını almak için harekete geçtiği, şimdiye dek zikredilmemiştir. Bu şehrin üç bölümünü büyük Aras ırmağı, öteki bir bölümünü de Aras’tan alınan su ile dolu bir hendek çevirmektedir. [...] Şehrin surları sert granit taşından yapılmıştır; bu nedenle buraya ulaşmak, çok uzak bir ihtimaldir. [...] Tanrı’nın inayeti olmaksızın burayı almak, asla mümkün değildir.»',
      tone: 'east',
    },
    camera: {
      center: [43.15, 40.75],
      zoom: 6.4,
      pitch: 44,
      bearing: -12,
    },
    activeRouteIds: ['caucasus-1064'],
    focusCityIds: ['pasinler', 'ahilkelek', 'ani', 'kutaisi', 'hoy'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1a-ani-cathedral-texier.jpg'),
      badge: 'TARİHÎ MİMARİ GRAVÜR · 1842',
      caption: '16 Ağustos 1064’te Fethiye Camii’ne Çevrilen Ani Katedrali ve Arka Planda Ebu’l-Manuçehr Camii Minaresi',
      credit: 'Charles Texier, Description de l’Arménie, la Perse et la Mésopotamie (Paris, 1842, Kamu Malı)',
      isEngraving: true,
      objectPosition: 'center 46%',
    },
  },
  {
    id: 'step-1b-aleppo-euphrates',
    stepLabel: 'SAHNE 1B · FIRAT’TAN MUSUL VE HOY’A SÜRAT YÜRÜYÜŞÜ',
    dateBadge: '26 Nisan – Temmuz 1071',
    locationBadge: 'Halep · Birecik Fırat Geçidi · Urfa · Musul · Hoy · Erciş',
    title: 'Mısır Yolundan Dönüş: Neden Musul ve Hoy Üzerinden Van Gölü Kuzeyine Çıkıldı?',
    narrative: [
      '1070 sonbaharında Erciş–Ahlat–Meyyâfârikîn (Silvan)–Urfa üzerinden Suriye’ye inen Sultan Alp Arslan’ın asıl hedefi Abbâsî Halifeliği adına Mısır’daki Şiî Fâtımî Devleti’ydi. Ancak <strong>Halep</strong> önünde Mirdâsî Emîri Mahmûd itaat arz ettiği sırada, Bizans İmparatoru <strong>IV. Romanos Diogenes</strong>’in büyük bir orduyla Doğu Anadolu’ya yürüdüğü haberi ulaştı.',
      'Alp Arslan Mısır seferini derhal durdurarak <strong>26 Nisan 1071</strong>’de Halep’ten ayrıldı; <strong>Birecik</strong> civarından bahar taşkınlarıyla kabarmış <strong>Fırat Nehri</strong>’ni süratle geçip Urfa ve Cezîre bozkırı üzerinden <strong>Mayıs ortasında Musul’a</strong> indi. Burada yorgun Suriye sefer kıtalarını terhis etti; Vezir <strong>Nizâmülmülk</strong> ile hatununu ana ihtiyat ordusunu toplamak üzere <strong>Hemedan/Tebriz</strong> yönüne gönderdi ve çekirdek <strong>4.000 saray gulâmıyla</strong> Urmiye Gölü batısı–Selmas hattından <strong>Temmuz başında Hoy’a</strong> ulaştı. Selçuklu batı seferlerinin geleneksel toplanma ve <strong>yedek at (cenîbe) çayır üssü</strong> olan Hoy’da Kürt/Mervânî ve Türkmen gönüllülerle <strong>15.000–20.000 atlıya</strong> ulaşan Sultan, ana orduyu beklemeden Kotur Vadisi–Bargiri üzerinden <strong>Erciş</strong>’e indi.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Kemâleddin İbnü’l-Adîm, Zübdetü’l-Haleb min Târîhi Haleb (463 h. İlk Fırat Geçişi, Ocak 1071; nşr. Sâmî ed-Dehhân, Şam 1954, c. II, s. 20; dönüş geçişi: s. 22–23; krş. Buğyetü’t-Taleb, Sümer & Sevim, TTK 1971, Metinler s. 39, Tercümeler s. 45)',
      text: '«Fakih Ebû Ca‘fer [el-Buhârî] Sultan’a şöyle dedi: "Efendimiz! Bu nimetten ötürü Yüce Allah’a hamd yükseltiniz; o da şudur ki bu nehri [Fırat’ı] şimdiye dek memlûk [köle] olmayan hiçbir Türk geçmemişti, siz ise onu bir hükümdar [melik] olarak geçtiniz!"»',
      tone: 'east',
    },
    camera: {
      center: [41.55, 37.55],
      zoom: 5.75,
      pitch: 46,
      bearing: 14,
    },
    activeRouteIds: ['alparslan-return-1071', 'alparslan-patnos-branch'],
    focusCityIds: ['halep', 'urfa', 'musul', 'silvan', 'hoy', 'ercis'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1b-aleppo-citadel-1754.jpg'),
      badge: 'TARİHÎ BAKIR GRAVÜR · 1754',
      caption: 'Alp Arslan’ın 26 Nisan 1071’de Kuşatmasını Kaldırıp Fırat–Musul–Hoy Hattına Döndüğü Halep Kalesi',
      credit: 'Alexander Drummond, Travels through Different Cities... as far as the Banks of the Euphrates (1754, Kamu Malı)',
      isEngraving: true,
      objectPosition: 'center 50%',
    },
  },
  {
    id: 'step-1c-romanos-erzurum',
    stepLabel: 'SAHNE 1C · ROMANOS’UN KUZEY ASKERÎ YOLU',
    dateBadge: '13 Mart – Temmuz Başı 1071',
    locationBadge: 'Konstantinopolis · Helenopolis · Dorylaion · Krya Pege · Sivas · Koloneia · Erzurum',
    title: 'İçeride Çatlak, Dışarıda İhtişam: Kuzey Askerî Karayolu, Kop Geçidi ve Sınır Enkazı',
    narrative: [
      '1068’de dul İmparatoriçe Eudokia ile evlenerek tahta çıkan Kapadokyalı general <strong>IV. Romanos Diogenes</strong>, Türkmen akınlarını durdurmak ve başkentteki rakip <strong>Dukas hanedanı</strong> karşısında otoritesini perçinlemek için 13 Mart 1071’de Konstantinopolis’ten çıkıp <strong>Helenopolis (Hersek)–İznik–Bozüyük–Eskişehir (Dorylaion)</strong> ve Sakarya (<em>Zompos</em>) köprüsü üzerinden İç Anadolu’ya yürüdü. Seferde bizzat bulunan askeri yargıç <strong>Mihail Attaleiates</strong>’in kaydına göre Sivas kuzeybatısındaki <strong>Krya Pege</strong> (Yıldızeli/Kalınırmak geçidi) konak yerinde Alman paralı askerlerin (<em>Nemitzoi</em>) isyanıyla daha yürüyüşte sarsıntı başladı.',
      '<strong>Sivas (Sebasteia)</strong>’tan sonra güney yolu yerine <strong>Şebinkarahisar (Koloneia)–Satala–Bayburt–Kop Geçidi (2.409 m)</strong> kuzey askeri karayolunu izleyen Romanos, Haziran sonunda <strong>Erzurum (Theodosioupolis)</strong>’a vardı. Bizans yirmi yıl önce (ykl. 1053) <strong>50.000 kişilik İberya–Ermeni sınır milisini</strong> vergi nakdi uğruna dağıtmıştı; üstelik Romanos, Bryennios ve Tarkhaniotes’in tahkimli Erzurum ovasında savunma yapma tavsiyesini reddedip iki aylık erzakla ileri harekât emri verdi.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Mihail Attaleiates, Historia (§20.5, Bonn nşr. E. Bekker 1853, s. 148; CFHB 50 nşr. E. Tsolakis 2011, s. 115 · Theodosioupolis / Erzurum; krş. Kaldellis & Krallis 2012, s. 268–271)',
      text: '«İmparator orada [Theodosioupolis’te] azımsanmayacak sayıda gün kaldıktan sonra, ıssız ve kavimler [Türkler] tarafından çiğnenmiş bir ülkeden geçecekleri için herkesin iki aylık erzakla donanmasını tellallarla ilan ettirdi.»',
      tone: 'west',
    },
    camera: {
      center: [36.8, 39.95],
      zoom: 5.55,
      pitch: 44,
      bearing: 8,
    },
    activeRouteIds: ['romanos-march-1071'],
    focusCityIds: ['konstantinopolis', 'eskisehir', 'sivas', 'koloneia', 'erzurum', 'pasinler'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1c-erzurum-lynch-1901.jpg'),
      badge: 'TARİHÎ FOTOĞRAF BELGESİ · 1901',
      caption: 'Romanos Diogenes’in Haziran Sonu 1071’de İki Aylık Sefer İkmali Yaptırdığı Erzurum (Theodosioupolis) Kalesi',
      credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Cilt II (1901, Kamu Malı)',
      objectPosition: 'center 48%',
    },
  },
  {
    id: 'step-1d-ahlat-split',
    stepLabel: 'SAHNE 1D · HINIŞ–BULANIK GEÇİŞİ & AHLAT BÖLÜNMESİ',
    dateBadge: 'Temmuz Sonu – 23 Ağustos 1071',
    locationBadge: 'Erzurum · Hınıs · Bulanık · Malazgirt (Taşbaşı) · Ahlat · Erciş',
    title: 'Savaşı Daha Başlamadan Kaybettiren Karar: Bizans Ordusunun İkiye Bölünmesi ve Tarkhaniotes’in Çekilişi',
    narrative: [
      'Temmuz sonu–Ağustos başında <strong>Erzurum–Pasinler–Çobandede–Hınıs–Bulanık (Murat Nehri)</strong> hattından Malazgirt’e inen Romanos Diogenes, Sultan Alp Arslan’ın bizzat yakında olduğundan habersizdi. Malazgirt kalesini kısa bir kuşatmayla teslim alırken (2026 kazılarında İç Kale güneydoğusundaki <strong>Taşbaşı Mevkii</strong>’nde bu kuşatma/çatışma katmanına ait <strong>11. yüzyıl Bizans balista ok uçları</strong> saptanmıştır), ordusunun en seçkin yarısını <em>magistros</em> <strong>İoseph Tarkhaniotes</strong> ile Norman komutan <strong>Roussel de Bailleul</strong> emrinde erzak ve kuşatma için <strong>Ahlat</strong> üzerine gönderdi; ana karargâhını ise kalenin hemen doğusundaki <strong>Kızköprü–Karahasanyolu</strong> hendekli sahasına kurdu.',
      'Oysa Alp Arslan <strong>Erciş</strong>’e inmiş; öncü Türkmen beyi <strong>Sunduk et-Türkî</strong>’yi Ahlat’a sevk ederken kendisi <strong>Adilcevaz–Sütey Yaylası (2.250 m)–Selekutlu</strong> ve doğudan <strong>Patnos–Doğansu (Badişan)</strong> kollarıyla <strong>Süphan Dağı</strong>’nın kuzeybatı volkanik platosunu tutmuştu! Sunduk Bey’in baskısıyla karşılaşan Tarkhaniotes ve Roussel, imparatorun acil geri çağrı emrine uymak yerine <strong>hiç haber vermeden Muş–Elazığ–Malatya üzerinden batıya çekildi</strong>. Romanos bir anda yarı yarıya erimiş bir orduyla yalnız kaldı.',
    ],
    highlightNote: {
      source:
        'Kaynak Özeti · Mihail Attaleiates, Historia (§20.6–17, Bonn nşr. s. 149–159; CFHB 50, s. 115–122 · Görgü Tanığı Kaydı)',
      text: 'Attaleiates’in kaydına göre, Türk kuvvetlerini sayıca az sanan İmparator, kendi yanındaki birliklerden çok daha seçkin ve savaşçı olan büyük bir kolu İoseph Tarkhaniotes emrinde Ahlat üzerine ayırdı; ancak öncü baskısıyla karşılaşan bu komutanlar İmparator’un yardımına dönmek yerine Mezopotamya üzerinden Roma topraklarına çekilerek ana orduyu yalnız bıraktı.',
      tone: 'west',
    },
    camera: {
      center: [41.55, 38.95],
      zoom: 6.75,
      pitch: 48,
      bearing: -16,
    },
    activeRouteIds: ['romanos-march-1071', 'alparslan-return-1071', 'alparslan-patnos-branch', 'tarchaneiotes-flight'],
    focusCityIds: ['bulanik', 'malazgirt', 'ahlat', 'ercis', 'silvan', 'malatya'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1d-skylitzes-cavalry.jpg'),
      badge: 'MADRID SKYLITZES TEZHİBİ · 12. YÜZYIL',
      caption: '11.–12. Yüzyıl Bizans Tagmata Zırhlı Süvarileri ile Doğu Atlı Birliklerinin Öncü Çarpışması',
      credit: 'Madrid Skylitzes, Codex Matritensis gr. Vitr. 26-2 (Biblioteca Nacional de España, Kamu Malı)',
      objectPosition: 'center 42%',
    },
  },
  {
    id: 'step-1e-rahve-oath-envoys',
    stepLabel: 'SAHNE 1E · KIFRÎ (AFŞİN) OTAĞI, KÖR ALANLAR VE ELÇİLİK',
    dateBadge: '24 – 25 Ağustos 1071',
    locationBadge: 'Afşin (eski Kıfrî) · Çırçır–Şekergün–Gezo Tepeleri · Bizans Hendekli Ordugâhı',
    title: 'Bazalt Eşiklerin Gizlediği Pusu, «Sulh Ancak Rey’de Olur!» Cevabı ve Attaleiates’in Uz Yemini',
    narrative: [
      'Alp Arslan ileri otağını su kaynaklarını (Kıfrî/Çivi Deresi) kontrol eden <strong>Afşin’e (eski <em>Kıfrî</em>, 1.650 m)</strong> kurdu. Malazgirt Savaş Alanı Projesi’nin <strong>CBS görüş alanı (viewshed) analizleri</strong> bu tercihin askeri sırrını açıklamıştır: Bizans hendekli kampının güneydoğusundaki <strong>Çırçır (1.568 m), Şekergün (1.604 m) ve Gezo Tepe (1.605 m)</strong> bazalt eşikleri Bizans görüşünü keserek arkasında doğal <strong>"kör alanlar"</strong> yaratıyordu. 24 Ağustos’ta bu eşiklerin gerisinden çıkan Selçuklu atlı okçuları <strong>Nikephoros Bryennios</strong>’u hırpaladı, ileri atılan <strong>Nikephoros Basilakes</strong>’i pusuya düşürüp esir aldı (Afşin’de gün yüzüne çıkarılan C14 tarihli <strong>51 savaşçı mezarındaki %32 kılıç/balta travması</strong> bu göğüs göğüse çarpışmanın doğrudan arkeolojik izidir); kampta ise <strong>Mihail Attaleiates</strong> kalan Uzlara sadakat yemini ettirdi.',
      '25 Ağustos’ta Sultan Alp Arslan, yanında bulunan Abbâsî Halifesi’nin elçisi <strong>Kâdî İbnü’l-Muhallebân</strong> ve Emîr <strong>Savtegin</strong> aracılığıyla onurlu bir barış teklif etti. Ancak Romanos bu adımı Selçuklu zayıflığına yorarak tarihe geçen şu kibirli cevabı verdi: <em>«Mütareke ancak Rey şehrinde olur; biz İsfahan’da kışlarız, atlarımız ise Hemedan’da!»</em> İbnü’l-Muhallebân ise sakin bir dille karşılık verdi: <em>«Atlarınızın Hemedan’da kışlayacağı doğrudur; ama sizin nerede kışlayacağınızı bilemem.»</em>',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · İbnü’l-Ezrak el-Fârikî, Târîhu Meyyâfârikîn ve Âmid (463 h. Elçilik Kaydı; nşr. B. A. Avad, Kahire 1959, s. 189–190; çev. F. Sümer & A. Sevim, TTK 1971, Metinler s. 4, Tercümeler s. 4)',
      text: '«İbnü’l-Muhallebân Sultan’ın yanından Rum Kralı’na gitti; Kral ona memleketler ve durumları hakkında sordu ve: "Bana haber ver, İsfahan mı daha güzeldir yoksa Hemedan mı?" dedi. O da: "İsfahan" dedi. Kral: "Bize Hemedan’ın çok soğuk olduğu ulaştı" deyince, "Öyledir" dedi. Bunun üzerine Kral: "Öyleyse biz İsfahan’da kışlarız, hayvanlar [atlar] ise Hemedan’da!" dedi. İbnü’l-Muhallebân ise ona: "Hayvanların Hemedan’da kışlayacağı doğrudur; fakat senin [nerede kışlayacağını] bilemem!" karşılığını verdi.»',
      tone: 'witness',
    },
    camera: {
      center: [42.60, 39.09],
      zoom: 10.6,
      pitch: 58,
      bearing: 132,
    },
    activeRouteIds: ['romanos-march-1071', 'alparslan-return-1071', 'alparslan-patnos-branch'],
    focusCityIds: ['malazgirt', 'afsin', 'rahve', 'ziyarettepe'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1e-sipan-patnotz-lynch.jpg'),
      badge: 'TOPOGRAFİK SAHA FOTOĞRAFI · 1901',
      caption: 'Süphan Dağı (4.058 m) ve Kuzeybatısındaki Kırıklı Volkanik Plato: Pusuları Gizleyen Bazalt Sırtlar',
      credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Fig. 116 (1901, Kamu Malı)',
      objectPosition: 'center 52%',
    },
  },
  {
    id: 'step-1f-friday-battle',
    stepLabel: 'SAHNE 1F · 26 AĞUSTOS CUMA · GÜLKORU VE SEYRAN TEPE KISKACI',
    dateBadge: '26 Ağustos 1071 Cuma (27 Zilkade 463)',
    locationBadge: 'Gülkoru (eski Harabereş / Büyükdua) · Seyran Tepe (1.829 m) · Ziyaret Tepe (1.798 m)',
    title: 'Seyran Tepe’den Yönetilen Kıskaç, Gülkoru Çemberi ve Andronikos Dukas’ın İhaneti',
    narrative: [
      '26 Ağustos Cuma günü Hanefî fakihi <strong>Ebû Nasr el-Buhârî</strong>’nin tavsiyesiyle hutbe vaktinde beyaz elbisesini giyip atının kuyruğunu bağlayan Alp Arslan, komuta mevkiini Rızda Tepe doğusundaki bütün platoya hâkim <strong>Seyran (Seyir) Tepe’ye (1.829 m)</strong> taşıdı; doğu kanadındaki <strong>Ziyaret Tepe (<em>Grebido</em>, 1.798 m)</strong> ve güney vadilerine <strong>dörtlü pusu (kemîn)</strong> kollarını yerleştirdi (halk hafızasında Cuma namazı kılınan düzlük bugüne dek <strong>Gülkoru <em>Büyükdua</em></strong> adıyla yaşamıştır).',
      'Öğleden akşama dek Selçuklu merkezi kontrollü sahte ricatla ağır zırhlı Bizans hatlarını 11 km güneydoğudaki <strong>Gülkoru (eski <em>Harabereş</em>)–Yaramış</strong> çanağına çekti. Alacakaranlık çökerken savunmasız kampını düşünen Romanos dönüş için imparatorluk sancağını geriye çevirdi. İşte o anda artçı ihtiyat komutanı <strong>Andronikos Dukas</strong>, <em>«İmparator yenildi!»</em> şayiasını yayarak ihtiyat tümenleriyle alanı terk etti! Seyran ve Ziyaret Tepe eteklerinden fırlayan Selçuklu süvarileri merkezi çembere aldı; yüzey araştırmalarında <strong>IV. Romanos Diogenes’e ait altın/bronz sikkeler ile iki kurşun mührün</strong> yoğunlaştığı bu kuşatma çekirdeğinde elinden yaralanan İmparator’u <strong>Gevherâyin’in genç bir gulâmı</strong> esir aldı.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Mihail Attaleiates, Historia (§20.21–23, Bonn nşr. E. Bekker 1853, s. 161, 163; CFHB 50 nşr. E. Tsolakis 2011, s. 124–126; krş. Kaldellis & Krallis 2012, s. 290–295)',
      text: '«[...] Bu yüzden imparatorluk sancağını geriye çevirerek dönüşü hatırlamalarını buyurdu. [...] Ona pusu kuranlardan biri —İmparator’un üvey oğlu Mihail’in kuzeni [Andronikos Dukas]— ona karşı önceden tasarladığı komployu taşıyarak bu [yenilgi] sözünü askerler arasında bizzat yaydı. [...] Düşmanlar İmparator’u çepeçevre kuşattılarsa da onu hemen kolayca alt edemediler [...] pek çoğunu öldürdükten sonra nihayet elinden kılıçla yaralandı, atının da oklarla vurulup devrilmesi üzerine yaya olarak çarpışmayı sürdürdü. Ne var ki akşama doğru bitkin düşerek —eyvahlar olsun bu felakete!— esir düştü.»',
      tone: 'witness',
    },
    camera: {
      center: [42.652, 39.098],
      zoom: 11.4,
      pitch: 60,
      bearing: 148,
    },
    activeRouteIds: ['romanos-march-1071', 'alparslan-return-1071', 'alparslan-patnos-branch'],
    focusCityIds: ['malazgirt', 'afsin', 'rahve', 'ziyarettepe'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1f-manzikert-walls-lynch.jpg'),
      badge: 'TARİHÎ SURLAR VE SÜPHAN · 1901',
      caption: 'Malazgirt Kalesi’nin Tarihi Siyah Bazalt Çift Surları, Burçları ve Arka Planda Süphan Dağı',
      credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Cilt II (1901, Kamu Malı)',
      objectPosition: 'center 45%',
    },
  },
  {
    id: 'step-1g-treaty-blinded-nicaea',
    stepLabel: 'SAHNE 1G · ÇÖKEN BARIŞ VE 1075 İZNİK',
    dateBadge: 'Eylül 1071 – 1081 (Merkez: 1072 & 1075)',
    locationBadge: 'Malazgirt · Kütahya · Kınalıada · İznik',
    title: 'Barışı Yırtan Darbe: Romanos’un Kör Edilişi ve Türkleri Marmara Kıyısına Taşıyan Bizans İç Savaşı',
    narrative: [
      'Alp Arslan esir imparatoru sekiz gün sofrasında ağırladı; sınır kalelerinin iadesi, <strong>1.500.000 dinar fidye</strong> ve <strong>yıllık 360.000 dinar vergi</strong> karşılığında 50 yıllık barış imzalayarak onu kendi kaftanı ve 100 gulâm muhafızla uğurladı. Eğer Konstantinopolis bu antlaşmaya uysaydı, İç ve Batı Anadolu Bizans elinde kalacaktı.',
      'Fakat başkentte <strong>Caesar İoannes Dukas</strong> ve <strong>Mihail Psellos</strong> darbe yaparak VII. Mihail’i tek imparator ilan etti. Üç metropolitin dokunulmazlık yeminine güvenip teslim olan Romanos’un <strong>29 Haziran 1072’de Kütahya’da</strong> acımasızca gözlerine mil çekildi; yaraları enfeksiyon kapan imparator <strong>4 Ağustos 1072’de Kınalıada’da</strong> öldü. Antlaşmanın hükümsüz kaldığını gören Türkmen beyleri Anadolu’ya akarken, 1072–1081 arasındaki her Bizans taht adayı (Botaneiates, Melissenos) rakiplerini ezmek için <strong>Kutalmışoğlu Süleyman Şah</strong>’ı bizzat davet etti ve <strong>1075’te İznik</strong> Türkiye Selçuklu başkenti oldu.',
    ],
    highlightNote: {
      source:
        'Kaynak Özeti · Mihail Attaleiates (Historia, §21.8–9, Bonn nşr. s. 177–179; CFHB 50, s. 137–139), Sıbt İbnü’l-Cevzî (Mir’âtü’z-Zamân, 464 h., TTK Belgeler XIV/18, s. 174–175; XIX/23, s. 42) & İbnü’l-Esîr (el-Kâmil, nşr. Tornberg c. X, s. 44; Dâr Sâdır c. X, s. 66–67)',
      text: 'Üç metropolitin yeminli güvencesine rağmen Dukas iktidarı Kütahya’da Romanos’un gözlerine mil çektirdi; esir imparator elinde kalan 200.000 altın ve mücevherli kapları sözüne sadakatle Sultan’a gönderdiyse de Konstantinopolis darbesiyle 50 yıllık antlaşma fiilen hükümsüz kaldı ve Anadolu içlerine yönelik Selçuklu–Türkmen harekâtının önü açıldı.',
      tone: 'east',
    },
    camera: {
      center: [33.8, 39.8],
      zoom: 5.4,
      pitch: 38,
      bearing: -10,
    },
    activeRouteIds: ['captivity-and-1075'],
    focusCityIds: ['malazgirt', 'kutahya', 'kinaliada', 'konstantinopolis', 'iznik'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1g-nicaea-seljuk-bnf.jpg'),
      badge: 'ORTAÇAĞ EL YAZMASI TEZHİBİ · BNF',
      caption: '1075’te Kutalmışoğlu Süleyman Şah’ın Başkent Yaptığı Selçuklu İznik (Nikaia) Surları ve Göl Savunması',
      credit: 'Guillaume de Tyr, Histoire d’Outremer, Bibliothèque nationale de France (Kamu Malı)',
      objectPosition: 'center 34%',
    },
  },
];

export const malazgirtPropagandaCases: PropagandaCase[] = [
  {
    id: 'army-600k-myth',
    badge: 'VAKA 01 · ORTAÇAĞ LOJİSTİK ABARTISI',
    title: '«200.000 – 600.000 Kişilik Bizans Ordusuna Karşı 15.000 Selçuklu» Rakamı',
    verdict: 'Retorik Şişirme · Gerçek Saha ~25.000’e ~25.000',
    claimTag: 'GEÇ DÖNEM KRONİKLERİNDEKİ VE POPÜLER SÖYLEMDEKİ İDDİA ÖZETİ',
    claimSource:
      'Kaynak Özeti · İbnü’l-Esîr (el-Kâmil fi’t-Târîh: 200.000) & Sıbt İbnü’l-Cevzî / İbnü’l-Kalânisî (Mir’âtü’z-Zamân: 400.000–600.000)',
    claimQuote:
      'Ortaçağ vekâyinâmelerindeki edebi kalabalık kayıtlarının özeti: İbnü’l-Esîr Bizans ordusunu Rum, Rus, Oğuz, Kıpçak, Gürcü, Abhaz ve Franklardan oluşan 200.000 kişi; Sıbt İbnü’l-Cevzî ise Ğarsü’n-Ni‘me ve İbnü’l-Kalânisî’den naklen lağımcı ve arabacılarıyla 400.000 ila 600.000 kişi olarak aktarır (ancak Sıbt hemen ardından Sultan’ın yanındaki 4.000 Türk memlûkü kaydının daha doğru olduğunu da şerh düşer).',
    critiqueSource: 'Modern Askerî Lojistik Hesabı (John Haldon, Jean-Claude Cheynet, Carole Hillenbrand, Muharrem Kesik)',
    critiqueAnalysis:
      '11. yüzyıl Anadolu yol ağının ve Erzurum–Malazgirt hattındaki su/yem kaynaklarının 200.000 askeri (ve yüz binlerce hayvanı) beslemesi fiziksel olarak imkânsızdır; ayrıca Gürcistan Krallığı 1064 antlaşması nedeniyle sefere hiç katılmamıştır. Bizans’ın sefere çıkan toplam kuvveti ~40.000–50.000 civarındaydı. Tarkhaniotes ve Roussel en seçkin yarıyı alıp Ahlat önünden batıya çekilince, 26 Ağustos sabahı Süphan volkanik platosunda ~20.000–25.000 Bizans askeri ile ~15.000–20.000 yedek atlı Selçuklu–Kürt muharibi karşılaştı.',
  },
  {
    id: 'uz-pecheneg-mass-defection',
    badge: 'VAKA 02 · SAVAŞ ORTASINDA TOPLU SAF DEĞİŞTİRME EFSANESİ',
    title: '«Uz ve Peçeneklerin Tamamı Savaşın Ortasında Alp Arslan Safına Geçti» İddiası',
    verdict: '50 Yıl Sonraki Abartı · Görgü Tanığı Yalanlıyor',
    claimTag: 'YARIM ASIR SONRAKİ ERMENİ KRONİĞİNDEKİ İDDİA ÖZETİ',
    claimSource: 'Kaynak Özeti · Urfalı Mateos Vekâyinâmesi (II. Kısım, §37, 520 Erm. / 1071; çev. H. D. Andreasyan, TTK 1962, s. 141–145)',
    claimQuote:
      'Urfalı Mateos anlatısının özeti: Muharebenin en şiddetli anında İmparator’un sağ ve sol kanadında yer alan Uz ile Peçenek paralı askerlerinin savaş ortasında topluca Selçuklu safına geçerek Bizans ordusunu çökerttiği ileri sürülür.',
    critiqueSource: 'Savaş Meydanındaki Görgü Tanığı Mihail Attaleiates (Historia, §20.16–23, Bonn nşr. s. 157–164; CFHB 50, s. 122–126)',
    critiqueAnalysis:
      'Kampta bizzat bulunan yüksek yargıç Attaleiates gerçeği gün gün kaydeder: Savaş gününden iki gün önce (24 Ağustos) Bryennios kolundaki küçük bir Uz bölüğü karşıdaki soydaşlarına katılmıştır. Bunun üzerine bizzat Attaleiates kalan Uzlara kendi ata töreleriyle sadakat yemini ettirmiş ve Uzların büyük çoğunluğu 26 Ağustos akşamına dek Bizans safında sadakatle savaşmıştır! Asıl çöküşü yaratan Türk paralı askerlerin ihaneti değil, Bizanslı aristokrat Andronikos Dukas’ın ihtiyat tümenlerini meydandan kaçırmasıdır.',
  },
  {
    id: 'footstool-boccaccio-myth',
    badge: 'VAKA 03 · RÖNESANS GÖRSEL PROPAGANDASI',
    title: '«Alp Arslan Esir İmparatoru Atına Binerken Binek Taşı Olarak Kullandı» Kurgusu',
    verdict: 'Sâsânî Klişesinin Rönesans Kopyası',
    claimTag: '14.–15. YÜZYIL BATI EDEBİYATINDAKİ KURGU ÖZETİ',
    claimSource: 'Kurgu Özeti · Giovanni Boccaccio, De casibus virorum illustrium (Kitap IX, Bölüm 9 · ykl. 1360)',
    claimQuote:
      'Boccaccio’nun 14. yüzyıl Latin edebiyatına soktuğu kurgunun özeti: Doğu hükümdarının, esir Roma İmparatoru Romanos’u her atına binişinde ve inişinde yere yüzüstü yatırıp boynuna basarak binek taşı gibi kullandığı iddia edilir.',
    critiqueSource: 'Mihail Attaleiates (§20.24–25) & Ğarsü’n-Ni‘me es-Sâbî / Sıbt İbnü’l-Cevzî (463 h.)',
    critiqueAnalysis:
      'Hem Bağdat saray kaydı hem Bizans görgü tanığı bu efsaneyi kökünden çürütür: İlk karşılaşmada çadıra getirilen esirin yere kapandırılıp üç kırbaç/el darbesiyle azarlandığı doğrudur; fakat hemen ardından Alp Arslan onun bağlarını çözdürmüş, kucaklamış, kendi elbise ve külâhını giydirmiş ve 8 gün boyunca kendi sofrasına oturtup "söz ve tuz" paylaşmıştır. Boccaccio, M.S. 260’ta Sâsânî Kralı I. Şâpûr’un Roma İmparatoru Valerianus’a yaptığı antik anlatıyı 1100 yıl sonrasına kopyalamıştır.',
  },
  {
    id: 'anatolia-one-day-fall',
    badge: 'VAKA 04 · «OVA YANILGISI» VE ASKERÎ İNDİRGEMECİLİK',
    title: '«Düz Bir Ovada Klasik Meydan Savaşı Yapıldı ve Anadolu Bir Günde Düştü» Söylemi',
    verdict: 'Kırıklı Volkanik Plato + 1072–81 İç Savaşı',
    claimTag: 'MASA BAŞI COĞRAFYA VE POPÜLER TARİH ÖZETİ',
    claimSource: 'Yaygın Masa Başı Harita ve Popüler Tarih Klişesi Özeti',
    claimQuote:
      'Popüler anlatıların özeti: Malazgirt’in dümdüz bir ova olduğu, iki ordunun bu düz ovada klasik bir meydan muharebesiyle çarpışıp Bizans ordusunun bütünüyle imha edildiği ve Anadolu’nun salt kuşatmalarla birkaç yılda düştüğü varsayılır.',
    critiqueSource: 'Savaş Alanı Arkeolojisi & CBS Bulguları (2020–2026) + Attaleiates & Bryennios',
    critiqueAnalysis:
      'Malazgirt’in güneydoğusunda düz bir ova yoktur: 153 km²’lik muharebe sahası, Süphan volkanizmasının lav akıntılarıyla bölünmüş 1.550–1.830 m rakımlı kırıklı bir bazalt platodur. CBS görüş (viewshed) analizleri, Çırçır–Şekergün–Gezo Tepe eşiklerinin Bizans görüşünü kestiğini, Seyran Tepe (1.829 m) ve Ziyaret Tepe (1.798 m) tutulduğunda ise Selçuklu pusularının gizlendiğini kanıtlamıştır. Üstelik Bizans kayıp oranı %10–20 civarındaydı; Anadolu’yu kalıcı Türk yurduna çeviren asıl etken 1053 sınır milisi tasfiyesi, 1072’de Dukas darbesinin çadır barışını yırtması ve 1072–1081 iç savaşında Bizans taht adaylarının Türkleri bizzat İznik ile Üsküdar’a davet etmesidir.',
  },
];

export const malazgirtVerifiedFacts = [
  {
    title: '1. Tarihte Savaş Meydanında Esir Düşen İlk ve Tek Bizans İmparatoru',
    sources: 'Mihail Attaleiates (§20.23), Ğarsü’n-Ni‘me / Sıbt İbnü’l-Cevzî, Aristakes Lastivertsi',
    detail:
      'M.S. 260’ta Roma İmparatoru Valerianus’un Sâsânîlere esir düşmesinden 811 yıl sonra ilk kez bir Doğu Roma (Bizans) imparatoru bizzat muharebe hattında elinden yaralanarak Müslüman bir hükümdara esir düştü. Bu psikolojik şok Bizans’ın "yenilmez imparatorluk" doktrinini geri dönülmez biçimde sarstı.',
  },
  {
    title: '2. Sekiz Günlük «Tuz ve Söz Ortaklığı» ile Onurlu Çadır Antlaşması',
    sources: 'Mihail Attaleiates (§20.24–25, Bonn s. 164–166) & İbnü’l-Cevzî (el-Muntazam, Haydarâbâd c. VIII, s. 260–265; Beyrut 1992, c. XVI, s. 125–128)',
    detail:
      'Karşı cephenin görgü tanığı Attaleiates, Alp Arslan’ın esir Romanos’u aşağılamak şöyle dursun sekiz gün kendi sofrasında ağırladığını, yakın dostlarının esirlerini fidyesiz bağışladığını ve Tanrı’nın kibirli tarafı değil adil davranan tarafı muzaffer kıldığını açıkça yazar.',
  },
  {
    title: '3. Kütahya’da Bozulup Yırtılan Yemin ve Anadolu’nun Kalıcı Dönüşümü',
    sources: 'Attaleiates (§21.8–9), Nikephoros Bryennios, İbnü’l-Esîr & Kartlis Tskhovreba',
    detail:
      'Konstantinopolis sarayı üç metropolitin yeminini çiğneyip 29 Haziran 1072’de Romanos’un gözlerine mil çekince hem iç meşruiyet hem de Selçuklu ile imzalanan sınır antlaşması çöktü; Doğu’da ilk Türk beylikleri, Batı’da 1075 İznik merkezli Türkiye Selçuklu Devleti ve Kafkasya’da "Didi Turkoba" (Büyük Türk İskânı) dönemi başladı.',
  },
];

export const alpArslanCommanderProfile = {
  pill: 'HÜKÜMDAR VE KOMUTAN DOSYASI',
  name: 'Sultan Muhammed Alp Arslan',
  subtitle: 'Büyük Selçuklu Sultanı · «Ebü’l-Feth» (1029 – 24 Kasım 1072, Berzem / Merv)',
  highlightBox: {
    leftTitle: 'ALP',
    leftHtml: 'Eski Türkçe askeri unvan: <em>"Yiğit, kahraman, zorlu sınavlardan geçmiş bahadır muharip"</em>',
    operator: '+',
    rightTitle: 'ARSLAN',
    rightHtml: 'Selçuklu–Karahanlı egemenlik geleneğinde hükümdarlık kudreti (İslami adı: <em>Adudüddevle Muhammed</em>)',
  },
  factsHtml: [
    '<strong>Hanedan ve Yetişme:</strong> Horasan hâkimi <strong>Çağrı Bey Dâvûd</strong>’un oğlu, Tuğrul Bey’in yeğenidir. Genç yaşta Horasan sınır ordularını yönetmiş; 1063’te amcasının ölümü ve Kutalmış isyanının bastırılmasıyla Büyük Selçuklu tahtını tek elde toplamıştır.',
    '<strong>Devlet Aklı ve Vezirlik Mimarisi:</strong> Askeri dehasını <strong>Vezir Nizâmülmülk</strong>’ün bürokratik ve ilmî teşkilatıyla (<em>Nizâmiye Medreseleri</em> ve <em>iktâ</em> düzeni) birleştirmiş; Malazgirt öncesi olası bir felakette devletin çökmemesi için Nizâmülmülk’ü Hemedan’a geri gönderecek kadar soğukkanlı bir stratejisttir.',
    '<strong>Trajik Sonu:</strong> Malazgirt’ten yalnızca 15 ay sonra Batı Karahanlı seferinde Ceyhun kıyısındaki Berzem kale dizdarı <strong>Yûsuf el-Hârezmî</strong>’nin çizmesinden çıkardığı hançerle yaralanmış; esir aldığı Romanos Diogenes’ten sadece 3,5 ay sonra, 43 yaşında vefat etmiştir.',
  ],
};

export const malazgirtStrategicReasons = {
  pill: 'STRATEJİK PERDE ARKASI',
  title: 'Alp Arslan 1071 Baharında Neden Musul–Hoy Hattından Dönüp Süphan Platosu’nu Seçti?',
  items: [
    {
      num: '01',
      title: 'Asıl Büyük Hedef Fâtımî Kahire’si ve Sünnî İslam Birliği İdi',
      text: 'Alp Arslan Halep’e Anadolu’yu istila etmek için değil, Bağdat Abbâsî Halifesi adına Mısır’daki Şiî Fâtımî Halifeliği’ni ortadan kaldırmak için inmişti; Bizans ile kalıcı bir sınır ateşkesi onun asıl stratejik tercihiydi.',
    },
    {
      num: '02',
      title: 'Neden Hoy Toplanma Üssü? Yedek At Çayırları ve Stratejik İhtiyat',
      text: '26 Nisan’da Halep’ten dönen Sultan, Mayıs ortasında Musul’da yorgun birlikleri terhis edip Vezir Nizâmülmülk’ü Hemedan/Tebriz yönüne ihtiyat ordusu toplamaya gönderdi; kendisi ise 1054 ve 1064 seferlerinde olduğu gibi on binlerce yedek atı (cenîbe) besleyebilen Hoy–Selmas yaylalarına çıkarak çevik süvari ordusunu kurdu.',
    },
    {
      num: '03',
      title: '1064–1068 Kafkasya Seferleriyle Kuzey Kanadının Güvenceye Alınmış Olması',
      text: 'Alp Arslan 1064 Ahılkelek–Ani fethi ve 1068 seferi sonunda Gürcü Kralı IV. Bagrat ile diplomatik denge kurmuştu; böylece 1071’de Kuzey Kafkasya/Gürcistan cephesinden Bizans’a hiçbir takviye gelmedi.',
    },
    {
      num: '04',
      title: 'Ahlat İstihbaratı ve Süphan Platosu’nun Su & Görüş Üstünlüğü',
      text: 'Erciş’ten ileri sevk edilen Sunduk Bey Ahlat önünde Roussel kolunu bozguna uğratırken, Tarkhaniotes–Roussel birlikleri Muş–Malatya’ya çekildi; Alp Arslan da düz batı arazisi yerine Kıfrî/Badişan sularını ve Seyran–Ziyaret Tepe hâkim sırtlarını tutarak Bizans ordusunu kırıklı bazalt platoya çekti.',
    },
  ],
};

export const malazgirtArmySegments = [
  {
    id: 'ghulams',
    label: 'Saray Hassa Gulâmları (Ğulâmân-ı Sarây · Ağır Zırhlı Çekirdek)',
    shareText: '~%18 – %20 (~4.000 Kapıkulu)',
    percent: 19,
    color: '#d99b4e',
    commandNote: 'Sa‘düddevle Gevherâyin ve Serhenk Savtegin komutasındaki çift atlı (cenîbe) hassa süvarileri',
    detail:
      'Halep’ten Fırat’ı geçerken Sultan’ın yanında hiç ayrılmayan profesyonel saray muhafızlarıdır. Bağdat kaynağı el-Muntazam’a göre her gulâmın biri binek biri yedek iki atı vardı; Romanos Diogenes’i bizzat yakalayan genç asker de Gevherâyin’in gulâmlarındandı.',
  },
  {
    id: 'turkmen-cavalry',
    label: 'Oğuz / Türkmen Süvarileri ve Uç Beyleri (Atlı Okçu & Pusu Kanatları)',
    shareText: '~%50 – %55 (~11.000 – 14.000)',
    percent: 53,
    color: '#2cc5b3',
    commandNote: 'Sunduk et-Türkî, Afşin Bey, Artuk Bey ve Azerbaycan–Arrân boy süvarileri',
    detail:
      'Hoy, Azerbaycan ve Doğu Anadolu uçlarından katılan yüksek manevra kabiliyetli bileşik yaylı atlı okçulardır. 24 Ağustos’ta Basilakes’i esir alan ve 26 Ağustos’ta sahte ricat ile dörtlü pusu (kemîn) kapanını kapatan ana vurucu güçtür.',
  },
  {
    id: 'marwanid-kurds',
    label: 'Mervânî / Kürt Süvarileri ve Ahlat–Meyyâfârikîn Gönüllüleri',
    shareText: '~%25 – %30 (~6.000 – 10.000)',
    percent: 28,
    color: '#a78bfa',
    commandNote: 'Sıbt İbnü’l-Cevzî ve İbnü’l-Ezrak’ta zikredilen Diyarbakır–Silvan–Ahlat yerel kuvvetleri',
    detail:
      'Mervânî Emirliği coğrafyasından (Meyyâfârikîn ve Âmid) katılan aşiret süvarileri ile Ahlat ve Malazgirt’in bölge arazi yapısını avucunun içi gibi bilen yerel Müslüman gönüllüleridir; hem ikmal hem kuşatma çemberinde kritik rol oynamışlardır.',
  },
];

export const malazgirtChronicleStages: ChronicleStage[] = [
  {
    id: 'stage-4a-friday-battle',
    stageBadge: 'AŞAMA 4A · 26 AĞUSTOS 1071 CUMA (27 ZİLKADE 463 · SÜPHAN PLATOSU & GÜLKORU ÇEMBERİ)',
    stageTitle: 'Cuma Hutbesi Vaktinde Beyaz Kefen, Çevrilen Sancak ve Andronikos Dukas’ın İhaneti',
    stageLead:
      'Aynı Cuma öğleden sonrasını bir yanda Bağdat saray arşivine dayanan İbnü’l-Esîr’in Klasik Arapça satırlarından, diğer yanda Bizans ordugâhında bizzat bulunan yüksek yargıç Mihail Attaleiates’in Ortaçağ Yunancası görgü tanıklığından yan yana okuyun.',
    bannerVisual: malazgirtHeroVisuals.battleManzikert4A,
    east: {
      pill: 'SELÇUKLU / İSLAM CEPHESİ ANA KAYDI',
      date: '27 Zilkade 463 Cuma · el-Kâmil & el-Muntazam',
      titleHtml: 'İbnü’l-Esîr · <em>el-Kâmil</em> &amp; İbnü’l-Cevzî · <em>el-Muntazam</em>',
      authorDesc:
        'Cuma hutbesi vaktindeki beyaz kefen hitabetini (el-Kâmil, nşr. Tornberg c. X, s. 43; Dâr Sâdır c. X, s. 65–66) ve gulâm Şâzî/Şâdî’nin esir teşhisini (el-Muntazam, Haydarâbâd c. VIII, s. 262; Beyrut 1992, c. XVI, s. 125; krş. Sümer & Sevim, TTK 1971, Metinler s. 13, 22–23, Tercümeler s. 14, 25–26) aktaran birincil İslam vekâyinâmeleri.',
      origLang: 'ar',
      origScript:
        '«فَلَمَّا كَانَتْ تِلْكَ السَّاعَةُ صَلَّى بِهِمْ، وَبَكَى السُّلْطَانُ [...] وَقَالَ لَهُمْ: «مَنْ أَرَادَ الِانْصِرَافَ فَلْيَنْصَرِفْ، فَمَا هَاهُنَا سُلْطَانٌ يَأْمُرُ وَيَنْهَى»، وَأَلْقَى الْقَوْسَ وَالنُّشَّابَ، وَأَخَذَ السَّيْفَ وَالدَّبُوسَ، وَعَقَدَ ذَنَبَ فَرَسِهِ بِيَدِهِ، وَفَعَلَ عَسْكَرُهُ مِثْلَهُ، وَلَبِسَ الْبَيَاضَ، وَتَحَنَّطَ، وَقَالَ: «إِنْ قُتِلْتُ فَهَذَا كَفَنِي» [...] وَأُسِرَ مَلِكُ الرُّومِ، أَسَرَهُ بَعْضُ غِلْمَانِ كُوهَرَائِينَ [...] [المنتظم]: وَاسْتَحْضَرَ غُلَامًا يُسَمَّى «شَاذِي» كَانَ مَضَى دَفَعَاتٍ مَعَ الرُّسُلِ إِلَى مَلِكِ الرُّومِ [...] فَمَضَى فَرَآهُ ثُمَّ عَادَ فَقَالَ: «هُوَ هُوَ!».»',
      translationParagraphsHtml: [
        '«O saat [hatiplerin minberlerde mücahitlere dua ettikleri Cuma vakti] gelince Sultan onlara namaz kıldırdı ve ağladı [...] Onlara: <mark class="hl-east">"Kim ayrılıp gitmek isterse gitsin; zira burada emreden ve yasaklayan bir sultan yoktur!"</mark> dedi. Yayını ve oklarını bıraktı, kılıcını ve topuzunu [<em>debbûs</em>] aldı, atının kuyruğunu kendi eliyle bağladı; askeri de onun gibi yaptı. <mark class="hl-east">Beyazlar giydi, kefenlik ıtır [hanût] süründü ve: "Eğer öldürülürsem bu benim kefenimdir!"</mark> dedi.»',
        '«[...] Rum Kralı esir alındı; <mark class="hl-east">onu [Sa‘düddevle] Gevherâyin’in —vaktiyle Nizâmülmülk’ün teftişte küçük görüp "Belki bize Rum kralını esir getirir!" diye istihza ettiği— gulâmlarından biri yakaladı.</mark> [...] <strong>[el-Muntazam, c. XVI, s. 125]:</strong> [Sultan] elçilerle birlikte defalarca Rum Kralı’nın huzuruna gitmiş olan <strong>"Şâzî [Şâdî]"</strong> adlı gulâmı getirtti [...] o da gidip onu gördü, sonra dönüp: <strong>"Odur, bizzat kendisidir!"</strong> dedi.»',
      ],
    },
    west: {
      pill: 'BİZANS KARARGÂHI GÖRGÜ TANIĞI',
      date: '26 Ağustos 1071 Akşamüstü · Historia §20.21–23',
      titleHtml: 'Mihail Attaleiates · <em>Historia (Tarih)</em>',
      authorDesc:
        'Romanos Diogenes’in savaş divanında bizzat bulunan Bizans yüksek askeri yargıcı (Ortaçağ Yunancası aslından doğrudan çeviri; Bonn nşr. E. Bekker 1853, s. 161, 163; CFHB 50 nşr. E. Tsolakis 2011, s. 124–126; krş. Kaldellis & Krallis 2012, s. 290–295).',
      origLang: 'el',
      origScript:
        '«[...] καὶ τηνικαῦτα οἱ Τοῦρκοι παλίντροπον θήσουσι τὴν φυγήν, ἑκηβόλοι τυγχάνοντες. Διὰ ταῦτα καὶ τὴν βασιλικὴν σημαίαν ἐπιστρέψας, νόστου ἐπιμνησθῆναι διήγγελλεν [...] τῶν ἐφεδρευόντων αὐτῷ τις, ἐξάδελφος ὢν τῷ τοῦ βασιλέως προγόνῳ Μιχαήλ, προβεβουλευμένην ἔχων τὴν κατὰ τούτου ἐπιβουλήν, αὐτὸς τὸν τοιοῦτον λόγον τοῖς στρατιώταις διέσπειρε [...] τὸν δὲ βασιλέα περιστοιχίσαντες οἱ πολέμιοι οὐκ εὐχείρωτον ἔσχον εὐθύς [...] καὶ πολλοὺς ἀνελὼν τέλος ἐπλήγη φασγάνῳ τὴν χεῖρα τοῦ τε ἵππου βέλεσι κατακοντισθέντος ἐκ ποδὸς μαχόμενος ἵστατο. Καμὼν δ᾽ ὅμως πρὸς ἑσπέραν ἁλώσιμος καὶ ὑπόσπονδος, φεῦ τοῦ πάθους, ἐγένετο.»',
      translationParagraphsHtml: [
        '«[...] [İmparator çekindi ki] uzaktan ok atan Türkler o vakit kaçışlarını tersine çevirip [korumasız ordugâha] döneceklerdi. Bu yüzden <mark class="hl-west">imparatorluk sancağını geriye çevirerek [kampa] dönüşü hatırlamalarını buyurdu.</mark> [...] Ona pusu kuranlardan biri —İmparator’un üvey oğlu Mihail’in kuzeni [<strong>Andronikos Dukas</strong>]— <mark class="hl-west">ona karşı önceden tasarladığı komployu taşıyarak bu [yenilgi] sözünü askerler arasında bizzat yaydı [...]</mark>»',
        '«Düşmanlar İmparator’u çepeçevre kuşattılarsa da onu hemen kolayca alt edemediler [...] pek çoğunu öldürdükten sonra <mark class="hl-west">nihayet elinden kılıçla yaralandı, atının da oklarla vurulup devrilmesi üzerine yaya olarak çarpışmayı sürdürdü. Ne var ki akşama doğru bitkin düşerek —eyvahlar olsun bu felakete!— esir düştü.</mark>»',
      ],
    },
    synthesisBridge: {
      title: 'Çapraz Okuma Sentezi: Taktik Pusu ile İç Siyasi Komplonun Kesişimi',
      bodyHtml:
        'İki birincil kaynak birbirini milimetrik biçimde tamamlar: Selçuklu tarafı <strong>sahte ricat ve dörtlü pusuyla</strong> Bizans merkezini akşam karanlığına kadar kasıtlı olarak ordugâhından uzaklaştırmış; tam Romanos sancağını çevirip düzenli çekilmek istediğinde <strong>Dukas hanedanının cephedeki temsilcisi Andronikos Dukas</strong> ihtiyat hatlarını bilerek kaçırarak askeri çekilmeyi tam bir kuşatma felaketine çevirmiştir.',
    },
  },
  {
    id: 'stage-4b-tent-dialogue-blinding',
    stageBadge: 'AŞAMA 4B · SULTAN ÇADIRINDA 8 GÜN VE 1072 KÜTAHYA KÖR EDİLİŞİ',
    stageTitle: '«Sen Beni Esir Alsaydın Ne Yapardın?» Diyaloğu, Antlaşma Tarifesi ve Kırılan Yemin',
    stageLead:
      'Tarihin en çarpıcı tezatlarından biri: Müslüman hükümdarın çadırında sekiz gün taht ortağı gibi ağırlanıp kendi kaftanı giydirilerek uğurlanan İmparator Romanos Diogenes’in, kendi Hristiyan başkentinin emriyle üç başpiskoposun yeminine rağmen gözlerine mil çekilerek öldürülmesi.',
    bannerVisual: malazgirtHeroVisuals.captivityBlinding4B,
    east: {
      pill: 'BAĞDAT SARAY ARŞİVİ · SULTAN ÇADIRI',
      date: 'Eylül 1071 · Mir’âtü’z-Zamân (Ğarsü’n-Ni‘me’nin Uyûnü’t-Tevârîh’inden Naklen)',
      titleHtml: 'Sıbt İbnü’l-Cevzî · <em>Mir’âtü’z-Zamân fî Târîhi’l-A‘yân</em>',
      authorDesc:
        'Hilâfet İnşâ Divanı kâtibi Ğarsü’n-Ni‘me Muhammed b. Hilâl es-Sâbî’nin (ö. 1088) kayıp Uyûnü’t-Tevârîh’inden Sıbt İbnü’l-Cevzî’nin naklettiği esaret tutanağı (Arapça tenkitli nşr. Ali Sevim, TTK Belgeler XIV/18, 1992, s. 170–172; çev. Ali Sevim, TTK Belgeler XIX/23, 1998, s. 39–40; krş. Sümer & Sevim, TTK 1971, Metinler s. 31–33, Tercümeler s. 36–38).',
      origLang: 'ar',
      origScript:
        '«فَقَالَ لَهُ السُّلْطَانُ: «لَوْ كَانَ الظَّفَرُ لَكَ مَا كُنْتَ تَفْعَلُ مَعِي؟» فَقَالَ: «الْقَبِيحَ!» قَالَ: «آهِ وَاللَّهِ صَدَقَ، وَلَوْ قَالَ غَيْرَ هَذَا لَكَذَبَ، هَذَا رَجُلٌ عَاقِلٌ جَلْدٌ، لَا يَجُوزُ أَنْ يُقْتَلَ». قَالَ لَهُ: «مَا تَظُنُّ الْآنَ أَنِّي أَفْعَلُ بِكَ؟» قَالَ: «أَحَدَ ثَلَاثَةِ أَقْسَامٍ: أَمَّا الْأُولَى فَقَتْلِي، وَالثَّانِي إِشْهَارِي فِي بِلَادِكَ الَّتِي تَحَدَّثْتُ بِقَصْدِهَا، وَأَمَّا الثَّالِثُ فَلَا فَائِدَةَ فِي ذِكْرِهِ فَإِنَّكَ لَا تَفْعَلُهُ». قَالَ: «وَمَا هُوَ؟» قَالَ: «الْعَفْوُ عَنِّي، وَقَبُولُ الْأَمْوَالِ وَالْهَدِيَّةِ، وَاصْطِنَاعِي وَرَدِّي إِلَى مُلْكِي مَمْلُوكًا لَكَ وَبَعْضَ إِسْفَهْسَلَارِيَّتِكَ وَنَائِبَكَ فِي الرُّومِ، فَإِنَّ قَتْلِي لَا يُفِيدُكَ، هُمْ يُقِيمُونَ غَيْرِي». فَقَالَ السُّلْطَانُ: «مَا نَوَيْتُ إِلَّا الْعَفْوَ عَنْكَ، فَاشْتَرِ نَفْسَكَ!» [...] فَلَمَّا كَانَ مِنَ الْغَدِ أَحْضَرَهُ السُّلْطَانُ وَقَدْ نُصِبَ لَهُ سَرِيرُهُ وَدَسْتُهُ الَّذِي أُخِذَ مِنْهُ فَأَجْلَسَهُ عَلَيْهِ، وَخَلَعَ عَلَيْهِ قَبَاهُ وَقَلَنْسُوَتَهُ وَأَلْبَسَهُ إِيَّاهُمَا بِيَدِهِ وَقَالَ: «قَدِ اصْطَنَعْتُكَ وَقَنِعْتُ بِأَمَانَتِكَ، وَأَنَا أُسَيِّرُكَ إِلَى بِلَادِكَ وَأَرُدُّكَ إِلَى مُلْكِكَ» [...] وَعَقَدَ لَهُ رَايَةً فِيهَا مَكْتُوبٌ: «لَا إِلٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ»، وَأَنْفَذَ مَعَهُ حَاجِبَيْنِ وَمِائَةَ غُلَامٍ [...] وَرَكِبَ مَعَهُ وَشَيَّعَهُ قَدْرَ فَرْسَخٍ.»',
      translationParagraphsHtml: [
        '«Bunun üzerine sultan ona, <mark class="hl-east">"Eğer zaferi sen kazansaydın, bana ne yapardın?"</mark> deyince imparator, <strong>"Fena şeyler"</strong> diye cevap verdi. Bunun üzerine sultan, <em>"Gerçekten doğru söyledin. Eğer bunun aksini söyleseydin, o zaman yalan söylemiş olurdun. Bu akıllı ve metin bir adamdır. Onun öldürülmesi doğru değildir"</em> dedi ve ilâve etti: <em>"Şimdi sana ne yapacağımı sanıyorsun?"</em>. İmparator şöyle cevap verdi: <em>"Bana, üç şeyden birini yapabilirsin: Birincisi öldürmek, ikincisi ele geçirmek istediğim ülkelerinde beni teşhir etmek, üçüncüsü de yapmayacağın bir şey olduğundan söylenmesine gerek yoktur"</em>. Alp Arslan, <em>"Bu nedir?"</em> diye sordu, o da, <mark class="hl-east">"Affetmek, para ve armağanlar kabul edip Bizans topraklarında senin bir memlûkün, bir kumandanın [isfehsâlârın] ve bir nâibin sıfatiyle beni memleketime göndermendir. Eğer beni öldürürsen bu, sana bir fayda sağlamaz, çünkü bir başkasını benim yerime imparator yaparlar"</mark> cevabını verdi. Bunun üzerine sultan, <strong>"Seni affetmek kararındayım. Ancak kendin için bir kurtuluş akçası vermelisin"</strong> deyince imparator, <em>"Sultan, istediği meblâğı söylemelidir"</em> dedi.»',
        '«Ertesi gün sultan, imparatoru yeniden katına getirtti. Sultan, imparatorun ganimet olarak alınmış olan taht ve diğer şeylerini hazırlatarak onu tahtına oturttu, <mark class="hl-east">kendi elbise ve külâhını bizzat eliyle ona giydirdi ve "Seni nâibim yapıyor, söylediğin sözlerine inanıyorum ve seni ülkene göndereceğim, hükümdarlığını da sana geri veriyorum"</mark> dedi. Bunun üzerine imparator yer öptü. [...] Bu nedenle sultan, <em>"Sen halifenin elçisi İbnü’l-Mahlebân’a bunları yaptırmadın mı? O halde kalk başını aç, kemerini bağla ve halifenin bulunduğu tarafa doğru dön ve yeri öp"</em> dedi. O da bunu aynen yaptı. [...] Daha sonra sultan, üzerinde <em>"Tanrı’dan başka ilâh yoktur ve Muhammed onun elçisidir"</em> yazılı bir bayrak hazırlatarak imparatora verdi ve onu iki hâcib ve 100 hassa askerinin koruması altında ülkesine gönderdi. [...] <mark class="hl-east">Hareketinden önce sultan, atına binip imparatoru bir fersah kadar giderek uğurlamıştı.</mark>»',
      ],
    },
    west: {
      pill: 'BİZANS GÖRGÜ TANIĞI · ÇADIR VE KÜTAHYA',
      date: 'Eylül 1071 & 29 Haziran 1072 · Historia §20.24–25 & §21.8',
      titleHtml: 'Mihail Attaleiates · <em>Historia (Tarih)</em>',
      authorDesc:
        'Hristiyan bir Bizans yargıcı olmasına rağmen Alp Arslan’ın adaletini öven, kendi sarayının yemin bozuculuğunu lanetleyen görgü tanığı (Ortaçağ Yunancası aslından doğrudan çeviri; Bonn nşr. E. Bekker 1853, s. 164–166, 178 [§21.8–9: s. 178–179]; CFHB 50 nşr. E. Tsolakis 2011, s. 127–128, 137–138; krş. Kaldellis & Krallis 2012, s. 295–301, 323–327).',
      origLang: 'el',
      origScript:
        '«[...] περιπτυξάμενος τοῦτον «μὴ δέδιθι» ἔφη, «ὦ βασιλεῦ [...]» σύνδειπνον αὐτὸν αὐτίκα καὶ ὁμοδίαιτον ἀπειργάσατο [...] μέχρις ἡμερῶν ὀκτὼ τῶν ὁμοίων αὐτῷ ἐκοινώνει καὶ λόγων καὶ ἁλῶν [...] ἡ τοῦ Θεοῦ κρίσις μετὰ τῶν ἄλλων κἀνταῦθα δικαία καὶ ἀρρεπὴς κατεφάνη [...] διερωτήσαντος τοῦ σουλτάνου τὸν βασιλέα «τί ἂν ἔδρασας εἰ οὕτως ἔσχες αὐτὸς ἐμὲ ὑποχείριον;», ἀνυποκρίτως [...] ἀπήγγειλεν «ὅτι πολλαῖς ταῖς πληγαῖς κατεδαπάνησά σου τὸ σῶμα γίνωσκε.» Ὁ δὲ «ἀλλ’ ἐγὼ» φησὶν «οὐ μιμήσομαί σου τὸ αὐστηρὸν καὶ ἀπότομον.» [...] [§21.8] παρῆσαν γὰρ ἐκεῖσε ὅ τε Καλχηδόνος, ὁ Ἡρακλείας καὶ ὁ Κολωνείας, τὰς σπονδὰς αὐτῷ συντελέσαντες [...] καί τινα Ἰουδαῖον ἀμαθῆ τὰ τοιαῦτα τὴν τῶν ὀφθαλμῶν αὐτοῦ διαχείρισιν ἐπιτρέπουσι.»',
      translationParagraphsHtml: [
        '«[...] Onu kucaklayarak: <mark class="hl-west">"Korkma ey İmparator [...] bedenin hiçbir tehlike görmeyecek ve şanına layık biçimde onurlandırılacaksın; zira insan kaderinin tersine dönebileceğinden habersiz olan kişi budaladır!"</mark> dedi. Derhal onu kendi sofrasına ve ikametine ortak etti [...] <mark class="hl-west">sekiz gün boyunca onunla aynı sözü ve tuzu paylaştı.</mark> [...] <mark class="hl-west">Tanrı’nın hükmü diğer işlerin yanı sıra burada da adil ve tarafsız göründü!</mark> [...] Zira bir sohbette Sultan İmparator’a <em>"Beni böyle eline geçirseydin ne yapardın?"</em> diye sorduğunda, riyakârlık etmeden [...] <em>"Bedenini sayısız kırbaç darbesiyle tüketirdim, bunu bil!"</em> dedi. O [Sultan] ise: <strong>"Fakat ben senin bu sertliğini ve acımasızlığını taklit etmeyeceğim!"</strong> dedi.» <em>(Paralel Bizans kaydı — Skylitzes Continuatus, nşr. E. Tsolakis 1968, s. 151: Sultan’ın bu sözün devamında «Sizin Mesih’inizin de size barışı ve kötülüklerin affını buyurduğunu işittim» dediği aktarılır.)</em>',
        '<strong>[§21.8, Kütahya · 29 Haziran 1072]:</strong> «[...] Zira ona [dokunulmazlık] antlaşmalarını akdetmiş olan <strong>Kalkedon [Kadıköy], Herakleia [Ereğli] ve Koloneia [Şebinkarahisar] metropolitleri</strong> de orada hazır bulunuyorlardı [...] ve bu gibi işlerde bilgisiz [acemi] bir Yahudi’ye <mark class="hl-west">onun gözlerinin [kör edilmesi] işlemini havale ettiler.</mark>» <em>(Kaynak Özeti, §21.8–9, Bonn s. 178–179: Başkentteki Dukas darbesi sonrası keşiş cübbesi giyip üç metropolitin yeminli kefaletiyle teslim olan Romanos’un Kütahya’da gözlerine mil çekilmiş; başındaki yaralar enfeksiyon kapan İmparator götürüldüğü Kınalıada’da [Proti] 4 Ağustos 1072’de hayatını kaybetmiştir.)</em>',
      ],
    },
    ransomTariffBox: {
      badge: 'EYLÜL 1071 SULTAN ÇADIRI ANTLAŞMASI MADDELERİ',
      title: 'Sultan Alp Arslan ile IV. Romanos Diogenes Arasında Akdedilen 50 Yıllık Barış Protokolü',
      lead: 'Ğarsü’n-Ni‘me es-Sâbî, Sıbt İbnü’l-Cevzî ve İbnü’l-Esîr’in Bağdat divan kayıtlarından aktardığı resmi antlaşma şartları (Konstantinopolis darbesi yüzünden yürürlüğe giremedi):',
      items: [
        {
          label: 'Şahsî Kurtuluş Fidyesi',
          value: '1.500.000 Dinar',
          note: 'İlk istenen 10 milyon dinardan indirildi; tahttan indirilen Romanos elinde kalan 200.000 dinar + 70.000–90.000 dinarlık mücevherli kabı (Sıbt: 70.000; el-Muntazam: 90.000) sözüne sadakatle Sultan’a gönderdi',
        },
        {
          label: '50 Yıllık Mütareke & Yıllık Vergi',
          value: '360.000 Dinar / Yıl',
          note: 'Yarım asırlık saldırmazlık antlaşması karşılığında Bizans hazinesinin her yıl ödemeyi taahhüt ettiği cizye/harâc bedeli',
        },
        {
          label: 'Dört Kilit Sınır Kalesinin İadesi',
          value: 'Malazgirt · Antakya · Urfa · Menbic',
          note: '10.–11. yüzyılda Bizans’ın Müslümanlardan aldığı dört stratejik serhad şehrinin Selçuklu idaresine geri verilmesi (İç Anadolu Bizans’ta kalacaktı)',
        },
        {
          label: 'Esir Tahliyesi & Yol Harçlığı',
          value: 'Tüm Esirler + 10.000 Dinar İhsan',
          note: 'Bizans zindanlarındaki bütün Müslüman esirlerin serbest bırakılması; karşılığında Sultan’ın Romanos’a kendi kaftanı ile 10.000 dinar yol harçlığı vermesi',
        },
      ],
    },
    synthesisBridge: {
      title: 'Tarihsel Kırılma: İki Diyalogun Birebir Örtüşmesi ve Yırtılan Antlaşmanın Bedeli',
      bodyHtml:
        'Birbirinden tamamen habersiz yazan Bağdatlı Müslüman vakanüvis ile Konstantinopolisli Hristiyan yargıcın çadırdaki <strong>"Sen beni esir alsaydın ne yapardın?"</strong> diyaloğunu neredeyse kelimesi kelimesine aynı aktarması, çapraz kaynak tarihçiliğinin en parlak doğrulamalarından biridir. Üstelik antlaşma dikkatle okunduğunda görülür ki <strong>Alp Arslan ne Konya’yı ne İznik’i istemişti</strong> — sadece dört sınır kalesini ve yıllık vergiyi yeterli görmüştü. Anadolu’nun tamamını Bizans’ın elinden çıkaran şey, 1072’de Konstantinopolis’in Romanos’u kör ederek bu antlaşmayı kendi eliyle çöpe atması oldu.',
    },
  },
];

export const malazgirtActorFates: ActorFate[] = [
  {
    name: 'Sultan Muhammed Alp Arslan',
    role: 'Büyük Selçuklu Sultanı · Malazgirt Galibi ve Çadır Antlaşmasının Mimarı',
    stance: 'loyal',
    badgeText: '15 AY SONRA CEYHUN KIYISINDA SUİKAST',
    calculation1098:
      'Mısır seferini yarıda kesip Birecik–Musul–Hoy hattından süratle Süphan volkanik platosuna (er-Rahve) çıktı; zaferden sonra esir imparatoru öldürmek yerine 8 gün ağırlayıp onurlu bir sınır antlaşmasıyla batı cephesini güvenceye aldı ve asıl büyük hanedan meselesi olan Mâverâünnehir (Batı Karahanlı) seferine yöneldi.',
    historicalPayback:
      '20 Kasım 1072’de Ceyhun Nehri kıyısındaki Berzem kalesi komutanı Yûsuf el-Hârezmî huzuruna getirildiğinde, muhafızları durdurup kendi okuyla vurmak istedi; oku şaşırıp tahtından inerken ayağı tökezleyince Yûsuf çizmesindeki hançerle Sultan’ı ağır yaraladı. Esir alıp bağışladığı Romanos’tan yalnızca 3,5 ay sonra vefat etti ve Merv’de babası Çağrı Bey’in yanına defnedildi.',
    endDate: '24 Kasım 1072 · Berzem / Merv (43 yaşında)',
  },
  {
    name: 'İmparator IV. Romanos Diogenes',
    role: 'Bizans İmparatoru · Savaşta Yaralanıp Esir Düşen, Sözüne Sadık Kalan Komutan',
    stance: 'loyal',
    badgeText: 'ÜÇ METROPOLİTİN YEMİNİNE RAĞMEN KÖR EDİLDİ',
    calculation1098:
      'Ahlat’ta ordusunu ikiye bölerek ağır bir taktik hata yaptı; fakat akşam karanlığında Dukas’ın ihanetine rağmen kılıcıyla son ana dek vuruştu. Çadırda dürüstçe konuştu, serbest kalınca tahttan indirilmesine rağmen elinde kalan tüm parayı (200.000 dinar + mücevherli altın tepsi) sözüne sadakatle Alp Arslan’a yolladı.',
    historicalPayback:
      'Dukas hanedanının gönderdiği orduya Adana/Tyropoion’da kuşatılınca iç savaşı uzatmamak için keşiş kıyafeti giydi ve üç başpiskoposun dokunulmazlık yeminiyle teslim oldu. Yemine rağmen 29 Haziran 1072’de Kütahya’da acemi bir cellada gözleri oyduruldu; başındaki yaralar kurtlanmış halde katır sırtında götürüldüğü Kınalıada manastırında enfeksiyondan öldü.',
    endDate: '4 Ağustos 1072 · Kınalıada / Proti',
  },
  {
    name: 'Andronikos Dukas',
    role: 'Caesar İoannes Dukas’ın Oğlu · İhtiyat Tümenlerini Meydandan Kaçıran Komutan',
    stance: 'betrayer',
    badgeText: '3 YIL SONRA SAKARYA’DA AĞIR YARALI ESİR',
    calculation1098:
      'Kuzeni VII. Mihail Dukas’ı tek imparator yapmak için üvey baba Romanos Diogenes’in cephede mahvolmasını istiyordu. 26 Ağustos akşamüstü sancak döner dönmez "İmparator bozuldu!" yalanını yayarak bütün artçı ihtiyatla savaş meydanını terk etti; 1072’de ise Romanos’u Kilikya’da teslim alan ordunun başına geçti.',
    historicalPayback:
      'İhanetle ele geçirdikleri iktidar Anadolu’yu koruyamadı. 1074’te babası İoannes Dukas ile birlikte isyancı Norman komutan Roussel de Bailleul’e karşı Sakarya (Zompe Köprüsü) savaşında bozguna uğradı, ağır yaralanarak esir düştü. Yaralarının ölümcüllüğü yüzünden salıverildiyse de bir daha hiç iyileşemedi ve genç yaşta İstanbul’da öldü.',
    endDate: '14 Ekim 1077 · Konstantinopolis',
  },
  {
    name: 'Vezir Nizâmülmülk (Ebû Alî Kıvâmüddîn Hasen b. Alî et-Tûsî)',
    role: 'Büyük Selçuklu Veziri · Cephe Gerisi ve Veliahtlık Garantörü',
    stance: 'loyal',
    badgeText: '20 YIL İMPARATORLUK İDARESİ VE SUİKAST',
    calculation1098:
      'Mayıs 1071’de Musul’dan Sultan’ın hatunu ve devlet hazinesiyle birlikte ana ihtiyat ordusunu toplamak üzere Hemedan/Tebriz yönüne döndü; böylece olası bir bozgunda veliaht Melikşah’ın tahtını ve imparatorluğun mali-bürokratik omurgasını güvence altına aldı.',
    historicalPayback:
      'Kasım 1072’de Alp Arslan suikasta uğrayınca 18 yaşındaki Sultan Melikşah’ın sorunsuzca tahta geçişini sağladı ve tam 20 yıl (1072–1092) İsfahan’dan Akdeniz’e uzanan Selçuklu cihan devletini yönetip Siyâsetnâme’yi yazdı. 14 Ekim 1092’de Nihâvend yakınlarındaki Sahne’de suikastla hançerlendi; ölümüyle başlayan iç savaş (fetret) 6 yıl sonra Dosya 01’deki 1098 Antakya krizine zemin hazırladı.',
    endDate: '14 Ekim 1092 · Sahne / Nihâvend',
  },
  {
    name: 'Roussel de Bailleul (Urselios)',
    role: 'Norman Paralı Asker Komutanı · Ahlat’tan Savaşa Dönmeyen Zırhlı Süvari Lideri',
    stance: 'betrayer',
    badgeText: 'ANKARA’DA NORMAN PRENSLİĞİ VE ZEHİRLİ SON',
    calculation1098:
      'Tarkhaniotes ile birlikte gönderildiği Ahlat önünden Romanos’un yardım çağrısına uymayarak 3.000 zırhlı Frank-Norman süvarisini hiç yıpratmadan batıya çekti ve Malazgirt muharebesine katılmadı.',
    historicalPayback:
      '1073’te Bizans’a başkaldırıp Ankara–Amasya hattında özerk bir Norman prensliği kurdu; Sakarya’da Caesar İoannes Dukas’ı esir alıp Üsküdar’a kadar yürüdü! Çaresiz kalan Bizans sarayı onu durdurmak için Selçuklu komutanı Artuk Bey ve ardından Tutak Bey’e altın ödedi; genç Aleksios Komnenos tarafından Amasya’da yakalanıp İstanbul’a getirildi ve 1077 sonlarında şüpheli biçimde zehirlenerek öldü.',
    endDate: '1077 sonu / 1078 başı · Konstantinopolis',
  },
  {
    name: 'Kutalmışoğlu Süleyman Şah & Artuk Bey',
    role: '1071 Sonrası Anadolu Fethinin İki Ana Ekseni: İznik Başkenti ve Kudüs İktâı',
    stance: 'loyal',
    badgeText: '1075 İZNİK BAŞKENTİ · TÜRKİYE SELÇUKLU KURULUŞU',
    calculation1098:
      '1072’de Dukas darbesi çadır antlaşmasını geçersiz kılınca Artuk Bey 1072–74’te Kızılırmak ve Sakarya vadilerini açıp İzmit körfezine indi; 1064’te Alp Arslan ile taht savaşında ölen Kutalmış’ın oğlu Süleyman Şah ise uç Türkmenlerini toplayarak Batı Anadolu’da kalıcı devletleşmeye yöneldi.',
    historicalPayback:
      'Süleyman Şah 1075’te İznik’i başkent yaparak Türkiye Selçuklu Devleti’ni kurdu, 1084’te Antakya’yı fethetti; ancak Haziran 1086’da Halep önündeki Ayn Seylem Savaşı’nda Suriye Meliki Tutuş ve Artuk Bey karşısında hayatını kaybetti. Artuk Bey ise 1086’da Kudüs iktâını aldı ve oğulları (Sökmen ile İlgazi) Doğu Anadolu’da Artuklu hanedanını kurdu.',
    endDate: 'Haziran 1086 (Halep) & 1091 (Kudüs)',
  },
];

export const post1071Fronts = [
  {
    id: 'caucasus-bagrat-diditurkoba',
    tabTitle: '1064–1080 Kafkasya & Didi Turkoba',
    period: '1064 Ahılkelek–Ani · 1074 Partskhisi · 1080 Büyük Türk İskânı',
    summary:
      'Alp Arslan’ın 1064 Ahılkelek–Ani fethi ve 1068 seferi sonrasında Gürcistan Kralı IV. Bagrat ile kurduğu diplomatik denge sayesinde Gürcistan 1071 Malazgirt’te Bizans’a asker göndermedi. Kasım 1072’de hem IV. Bagrat hem Alp Arslan peş peşe vefat edince, Sultan Melikşah ve Kral II. Giorgi döneminde denge bozuldu: II. Giorgi (Kaheti Kralı I. Ağsartan’ın desteğiyle) 1074 Partskhisi Muharebesi’nde (ფარცხისის ბრძოლა — Matiane Kartlisa’da «ფარცხისს ქუემოთ», Aşağı Kartli / Algeti Vadisi) Melikşah’ın Gence–Arran valisi Emîr Savtegin’i (Gürcüce kaynakta სარანგი / Sarangi) mağlup ettiyse de, 1080’den itibaren Gürcü kroniklerinin "Didi Turkoba" (დიდი თურქობა — Büyük Türk Dönemi / Göçü) adını verdiği yoğun Kura–Aras yaylak-kışlak iskânı başladı.',
    keyFact:
      '1080’de başlayan bu demografik dönüşüm, kırk yıl sonra Kral IV. David’in Kuzey Kafkasya’dan 40.000 Kıpçak ailesini indirerek yanıt vereceği 1121 Didgori (Dosya 05) dengesinin doğrudan temelini oluşturdu.',
  },
  {
    id: 'byzantine-civil-war-invitations',
    tabTitle: 'Bizans İç Savaşı ve Türk Davetleri',
    period: '1072 – 1081 (On Yıllık Taht Kavgası)',
    summary:
      'Batı Anadolu şehirlerinin pek çoğu kuşatmayla değil, Bizans generallerinin birbirini devirmek için Türkmen beylerini yardıma çağırmasıyla el değiştirdi! 1074’te VII. Mihail isyancı Roussel’e karşı Artuk Bey’i İzmit’e çağırdı; 1078’de III. Nikephoros Botaneiates ve 1080’de Nikephoros Melissenos taht yürüyüşlerinde Kutalmışoğlu Süleyman Şah’ın birliklerini bizzat İznik, Kyzikos ve Üsküdar garnizonlarına yerleştirdi.',
    keyFact:
      'Malazgirt’ten sadece 9 yıl sonra (1080), Bizans başkenti Konstantinopolis’in tam karşısındaki Üsküdar (Khrysopolis) kıyılarında Selçuklu gümrük çadırları kurulmuştu.',
  },
  {
    id: 'first-anatolian-beyliks',
    tabTitle: 'Doğu Anadolu İlk Türk Beylikleri',
    period: '1071 – 1202 (Kurucu Kentsel ve Mimari Ağ)',
    summary:
      'Romanos’un kör edilmesiyle çadır antlaşması hükümsüz kalınca Doğu ve Orta Anadolu’da beş köklü siyasi merkez doğdu: Erzurum ve çevresinde Saltuklular (1072), Erzincan–Kemah–Divriği’de Mengücekliler (1072), Sivas–Tokat–Niksar’da Dânişmendliler, Diyarbakır–Mardin–Hasankeyf’te Artuklular ve Van Gölü kuzeybatısında Ahlatşahlar (Sökmenliler).',
    keyFact:
      'Divriği Ulu Camii ve Darüşşifası, Erzurum Üç Kümbetler, Malabadi Köprüsü ve Ahlat Selçuklu Meydan Mezarlığı doğrudan bu 1071 sonrası birinci kuşak beyliklerin mimari mirasıdır.',
  },
  {
    id: 'nicaea-to-clermont-1095',
    tabTitle: '1075 İznik’ten 1095 Clermont’a Köprü',
    period: '1075 – 1097 (Haçlı Seferlerini Tetikleyen Kırılma)',
    summary:
      'Hristiyanlığın ilk ekümenik konsilinin toplandığı (325) kutsal İznik şehrinin 1075’te Selçuklu başkenti olması ve İzmir’de Çaka Bey’in (1081) donanma kurup Ege adalarına açılması, 1081’de tahta çıkan I. Aleksios Komnenos’u çaresiz bıraktı. Aleksios’un 1095 Piacenza Konsili’ne elçi gönderip Papa II. Urbanus’tan Batılı paralı şövalye istemesi, beklenmedik biçimde I. Haçlı Seferi çığını (Dosya 01) başlattı.',
    keyFact:
      '1071 Malazgirt olmasaydı ne 1075 Selçuklu İznik’i, ne 1095 Clermont Haçlı Çağrısı, ne 1098 Antakya Kuşatması, ne de 1187 Hıttîn yaşanacaktı; tüm dizinin kronolojik anahtarı bu kırılmadır.',
  },
];

export const malazgirtPhilologySpotlight = {
  badge: 'TAKVİM, TOPOGRAFYA & SAVAŞ ALANI ARKEOLOJİSİ · 26 AĞUSTOS CUMA & SÜPHAN PLATOSU',
  title: '«Er-Rahve» Tatvan Rahva’sı ya da Dümdüz Bir Ova mıdır? 2020–2026 Arkeolojik ve CBS Kanıtları',
  eastLabel: 'İSLAM VEKÂYİNÂMELERİ & TOPONİMİ KAYDI',
  eastSource: 'Ğarsü’n-Ni‘me → Mir’âtü’z-Zamân, el-Muntazam, el-Kâmil & Yerel Toponimi («er-Rahve», Kıfrî, Büyükdua)',
  eastText:
    'Bağdat kaynakları savaş gününü ittifakla 26 Ağustos 1071 Cuma (27 Zilkade 463) öğle hutbesi sonrası olarak verir ve mevkiyi Malazgirt ile Ahlat arasındaki «er-Rahve» (Arapçada özel ilçe adı değil, dağ eteğindeki yüksek düzlük/plato eşiği) diye adlandırır; yerel hafızada ise Afşin «Kıfrî», Gülkoru düzlüğü «Büyükdua» adıyla yaşamıştır.',
  westLabel: 'CBS GÖRÜŞ ANALİZİ, ANTROPOLOJİ & YÜZEY ARKEOLOJİSİ',
  westSource: 'Attaleiates, Bryennios & Malazgirt Savaş Alanının Tespiti Projesi (Prof. Dr. Adnan Çevik, 2020–2026)',
  westText:
    '153 km²’lik sistemli yüzey taraması, LiDAR/CBS görüş alanı (viewshed) modellemesi ve TÜBİTAK MAM C14 analizleri; Malazgirt’in güneydoğusunun masa başında sanıldığı gibi "dümdüz bir ova" değil, Süphan volkanizmasının lav sırtlarıyla bölünmüş 1.550–1.830 m rakımlı kırıklı bir bazalt plato olduğunu kanıtlamıştır.',
  resolutionHtml:
    '<strong>Tarihsel ve Arkeolojik Çözüm:</strong> Savaş alanı ne Malazgirt’e ~90 km uzaktaki Bitlis–Tatvan <em>Rahva</em> düzlüğüdür ne de dümdüz bir ovadır. <strong>Prof. Dr. Adnan Çevik</strong> koordinatörlüğündeki <em>Malazgirt Savaş Alanının Tespiti, Tarihi ve Arkeolojik Yüzey Araştırması Projesi</em> (2020–2026) muharebe mekânını somut buluntularla dört kilit odak üzerinde doğrulamıştır: <strong>(1) İç Kale &amp; Taşbaşı Mevkii:</strong> 11. yüzyıl Bizans <em>balista</em> (kurmalı yay) ok uçları; <strong>(2) Afşin (eski <em>Kıfrî</em>, 1.650 m):</strong> Alp Arslan’ın 25 Ağustos ileri otağı, Çırçır–Şekergün–Gezo Tepe bazalt eşiklerinin gizlediği pusu koridoru ve C14 tarihli <strong>51 savaşçı mezarında %32 kesici-delici silah travması</strong>; <strong>(3) Seyran Tepe (1.829 m) &amp; Ziyaret Tepe (1.798 m):</strong> bütün platoyu gören Selçuklu komuta ve pusu sırtları; <strong>(4) Gülkoru (eski <em>Harabereş</em> / <em>Büyükdua</em>)–Yaramış Çanağı:</strong> <strong>~2.000 metal/nümismatik buluntunun</strong>, <strong>IV. Romanos Diogenes’e ait altın-bronz sikkeler ile iki kurşun mührün</strong> yoğunlaştığı nihai kuşatma ve esaret çekirdeği.',
};

export const malazgirtBalanceRows = [
  {
    dimension: '1071 İlkbaharındaki İlan Edilmiş Sefer Hedefi',
    crusadersVerdict: 'DOĞU SINIRINI İHYA ETMEK',
    crusadersDetail:
      'Romanos Diogenes, Malazgirt ve Ahlat’ı tahkim edip Türkmen akınlarını Aras–Dicle ötesine kilitlemek ve başkentteki Dukas muhalefetini susturmak için yola çıkmıştı.',
    turksVerdict: 'MISIR FÂTIMÎ SEFERİ & SINIR GÜVENLİĞİ',
    turksDetail:
      'Alp Arslan’ın asıl hedefi Anadolu’yu baştan başa fethetmek değil, Suriye üzerinden Şiî Fâtımî Kahire’sine yürümekti; Malazgirt’e doğu kanadını korumak için mecburi dönüş yaptı.',
  },
  {
    dimension: '26 Ağustos Akşamı Sahadaki Askeri Sonuç',
    crusadersVerdict: 'KOMUTA ÇÖKÜŞÜ VE ESARET',
    crusadersDetail:
      'Ahlat’ta ordunun ikiye bölünmesi ve akşamüstü Andronikos Dukas’ın ihtiyatı kaçırmasıyla merkez kuşatıldı; tarihte ilk kez bir Bizans imparatoru muharebe alanında esir düştü.',
    turksVerdict: 'KUSURSUZ BOZKIR PUSU ZAFERİ',
    turksDetail:
      '4.000 saray gulâmı, Türkmen atlı okçuları ve Mervânî yerel desteğiyle kurulan sahte ricat ve dörtlü pusu kapanı, sayıca denk düşmanı imha etmeden felç etti.',
  },
  {
    dimension: 'Eylül 1071 – Yaz 1072 Diplomatik Kırılma',
    crusadersVerdict: 'KENDİ BARIŞINI YIRTAN DARBE',
    crusadersDetail:
      'Dukas hanedanı Romanos’un imzaladığı ılımlı sınır antlaşmasını reddedip kendi imparatorunu Kütahya’da kör etti; 10 yıllık iç savaşta her asi general Türkleri batıya davet etti.',
    turksVerdict: 'MEŞRU FETİH KAPISININ AÇILMASI',
    turksDetail:
      'Antlaşmanın Konstantinopolis tarafından çiğnenmesi üzerine Selçuklu uç beyleri hukuken serbest kaldı; 4 yıl içinde (1075) İznik başkent yapılarak Marmara kıyılarına ulaşıldı.',
  },
  {
    dimension: 'Uzun Vadeli Dünya Tarihi Mirası (1071 – 1291)',
    crusadersVerdict: 'ANADOLU OMURGASININ KAYBI & HAÇLI ÇAĞRISI',
    crusadersDetail:
      'Vergi ve asker deposu olan Anadolu platosunu kaybeden Bizans, 1095’te Batı’dan yardım isteyerek Haçlı Seferlerini tetikledi; ancak bu dalga 1204’te dönüp Konstantinopolis’i vurdu.',
    turksVerdict: 'KALICI YURT («TURCHIA») VE YENİ MEDENİYET',
    turksDetail:
      'Kafkasya’dan Ege’ye uzanan coğrafyada Türkiye Selçukluları ve ilk beylikler eliyle kalıcı kentsel, ticari ve mimari bir Türk-İslam vatanı («Turchia») inşa edildi.',
  },
];

export const malazgirtPrimarySources = [
  {
    name: 'Mihail Attaleiates — Historia (Tarih)',
    side: 'Bizans Karargâhı Görgü Tanığı (ykl. 1022–1080)',
    desc: 'Romanos Diogenes’in seferinde yüksek askeri yargıç (krites tou stratopedou) olarak bizzat savaş alanında bulunan tek müellif. Ahlat’taki bölünmeyi, Uzlara ettirdiği yemini, Andronikos Dukas’ın ihanetini, Alp Arslan’ın 8 günlük adil misafirperverliğini ve Kütahya kör edilişini ilk elden belgeler.',
  },
  {
    name: 'Ğarsü’n-Ni‘me es-Sâbî → İbnü’l-Cevzî (el-Muntazam) & Sıbt İbnü’l-Cevzî (Mir’âtü’z-Zamân)',
    side: 'Bağdat Çağdaş Saray Kaydı (1071 Sonrası · ö. 1088)',
    desc: 'Bağdat’ta Abbâsî saray bürokrasisinde görev yapan Ğarsü’n-Ni‘me’nin 1071 fetihnâmelerine, Halife elçisi İbnü’l-Muhallebân’a ve saray gulâmı Şâzî/Şâdî’ye dayanan çağdaş metni; İbnü’l-Cevzî (el-Muntazam, c. VIII / XVI) ve torun Sıbt İbnü’l-Cevzî (TTK Belgeler XIV/18 & XIX/23) sayesinde tüm çadır diyaloğu ve antlaşma rakamlarıyla günümüze ulaşmıştır.',
  },
  {
    name: 'İzzeddin İbnü’l-Esîr — el-Kâmil fi’t-Târîh (463 h.)',
    side: 'İslam / Musul-Cezîre Ana Sentezi (1160–1233)',
    desc: 'Romanos’un barış elçisine verdiği «Mütareke ancak Rey’de olur!» cevabını, İmam Ebû Nasr el-Buhârî’nin Cuma hutbesi vaktinde taarruz tavsiyesini, Alp Arslan’ın beyaz kefenlik elbisesini, Gevherâyin’in gulâmının Romanos’u esir alışını ve 50 yıllık barış şartlarını klasikleştiren temel İslam vekâyinâmesi (nşr. Tornberg c. X, s. 41–44; Dâr Sâdır c. X, s. 64–67).',
  },
  {
    name: 'Nikephoros Bryennios — Hyle Historias (Tarihin Malzemesi)',
    side: 'Bizans Askerî Aile Kaynağı (1062–1137)',
    desc: 'Malazgirt’te Bizans sol kanadını yöneten ve 24 Ağustos çarpışmalarında yaralanan general Nikephoros Bryennios’un aynı adlı torunu (ve Anna Komnena’nın eşi); Selçuklu hilâl/pusu taktiğini (Taranges/Savtegin manevrasını) en teknik askeri dille anlatan Bizans kaynağıdır (I.13–18, CFHB 9 nşr. P. Gautier 1975, s. 107–121).',
  },
  {
    name: 'İbnü’l-Ezrak el-Fârikî — Târîhu Meyyâfârikîn ve Âmid',
    side: 'Diyarbakır–Silvan–Ahlat Yerel Kaynağı (1116–1176)',
    desc: 'Savaş alanına en yakın coğrafyanın yerel tarihçisi; Halife elçisi İbnü’l-Muhallebân ile Romanos arasındaki meşhur «İsfahan–Hemedan» diyaloğunu (nşr. B. A. Avad 1959, s. 189–190), Mervânî Emirliği ve Ahlat halkının lojistik/askeri desteğini ve Kâdî İbn Merd’in stratejik uyarısını aktarır.',
  },
  {
    name: 'Kemâleddin İbnü’l-Adîm — Zübdetü’l-Haleb & Buğyetü’t-Taleb',
    side: 'Kuzey Suriye / Halep Arşiv Kaynağı (1192–1262)',
    desc: 'Alp Arslan’ın Ocak–Nisan 1071 Urfa ve Halep kuşatmasını, Fırat’ı ilk geçişinde Fakih Ebû Ca‘fer el-Buhârî’nin sözünü ve Romanos haberi üzerine kabarmış Fırat’ı at sırtında süratle geri geçerken yaşanan kayıpları belgeler.',
  },
  {
    name: 'Aristakes Lastivertsi & Urfalı Mateos Vekâyinâmeleri',
    side: 'Doğu Hristiyan / Ermeni Kaynakları (11.–12. Yüzyıl)',
    desc: 'Aristakes Lastivertsi (1072 öncesi çağdaş tanık) 1048 Pasinler’den 1071’e Doğu Anadolu’nun sarsılışını; Urfalı Mateos ise yarım asır sonraki yerel hafızayı ve abartılı Uz–Peçenek saf değiştirme anlatısını yansıtır.',
  },
  {
    name: 'Kartlis Tskhovreba (Matiane Kartlisa — Gürcistan Kroniği)',
    side: 'Kafkasya / Gürcü Krallık Kroniği (11. Yüzyıl Sonu)',
    desc: '1048’de Liparit Bagvaşi’nin esareti, 1064 Alp Arslan’ın Trialeti–Ahılkelek–Ani seferi, Kral IV. Bagrat ile kurulan diplomatik denge (Gürcistan’ın 1071’deki tarafsızlığı), Sultan Melikşah devrindeki 1074 Partskhisi Muharebesi (ფარცხისის ბრძოლა) ve 1080 sonrası "Didi Turkoba" süreci için temel Kafkasya kaynağıdır.',
  },
];

export const malazgirtModernRefsHtml =
  '<strong>Çağdaş Araştırmalar &amp; Savaş Alanı Arkeolojisi:</strong> Adnan Çevik (<em>“Türklere Anadolu’nun Kapısını Açan Savaş: Malazgirt”</em>, Aktüel Arkeoloji, Sayı 83, 2021, s. 10–33), Adnan Çevik &amp; Ahmet Oğuzhan Karaçetin (<em>“Malazgirt Savaş Alanının Tespiti, Tarihî ve Arkeolojik Yüzey Araştırması”</em>, 39. Araştırma Sonuçları Toplantısı, Cilt 1, KTB Yay., 2024, s. 57–74), Adnan Çevik, Kemalettin Köroğlu, Ahmet Oğuzhan Karaçetin, Mehmet Sait Sütcü &amp; S. Aslan (<em>“Malazgirt Kalesi Kazıları”</em>, 44. Kazı Sonuçları Toplantısı, Cilt 4, KTB Yay., 2025, s. 29–45), Adnan Çevik, Haluk Sağlamtimur &amp; Ahmet Oğuzhan Karaçetin (<em>“Malazgirt Savaş Alanı Arkeolojisi”</em>, Geleceğe Miras: Türkiye Arkeolojisinin Altın Çağı, Cilt 2, KTB Yay., 2025, s. 309–332), Adnan Çevik, Salih Gülen &amp; Fatma Betül Şengönül, ed. (<em>Bir STEAM Eğitimi Savaş Alanı Arkeolojisi: Malazgirt Savaşı Örneği</em>, Pegem Akademi, 2024), Ali Metin Büyükkarakaya, Mehmet Sait Sütcü, Tevfik Orkun Develi, Adnan Çevik, Muhammed Dolmuş, Serpil Eroğlu &amp; Ali Akbaba (<em>“Malazgirt/Afşin Kazılarında Elde Edilen İnsan Kalıntılarının Çatışma Arkeolojisi Çerçevesinde Antropolojik Ön Değerlendirmesi”</em>, bilig, Sayı 118, Yaz 2026, s. 1–30), Tevfik Orkun Develi (<em>“Topraktaki Tarih: Malazgirt Projesi’nin Metodolojik Birikimi ve Türkiye’de Savaş Alanı Arkeolojisi”</em>, Avrasya Uluslararası Araştırmalar Dergisi, 14/3, 2026, s. 1679–1694), Mehmet Sait Sütcü &amp; Muhammed Dolmuş (<em>“A Piece of Manzikert’s History: The 2023 Afşin Archaeological Survey”</em>, Tarih İncelemeleri Dergisi, XL/2, 2025, s. 993–1024), İskender Dölek &amp; Adnan Çevik (<em>“CBS Kullanılarak Savaş Alanı Arkeolojisi Çalışmaları İçin Bir Veri Tabanı Oluşturulması: Malazgirt Savaş Alanının Tespiti, Tarihi ve Arkeolojik Yüzey Araştırması Projesi Örneği”</em>, Türkiye Coğrafi Bilgi Sistemleri Dergisi, 5/2, 2023, s. 70–76), İskender Dölek, İhsan Tuğal &amp; Adnan Çevik (<em>“Mobil LiDAR Teknolojisinin Arkeolojik Belgelemedeki Uygulanabilirliği: Malazgirt Savaş Alanının Tespiti, Tarihi ve Arkeolojik Yüzey Araştırması Projesi Örneği”</em>, Türkiye LiDAR Dergisi, 7/2, 2025, s. 40–48), Yunus Levent Ekinci, Adnan Çevik &amp; İskender Dölek (<em>“Malazgirt Savaş Alanının Tespiti Kapsamında Elektrik Özdirenç Tomografi Çalışmaları”</em>, Kültürel Miras Araştırmaları Dergisi, 3/2, 2022, s. 50–55), Mustafa Alican (<em>Kıyametin İlk Günü: Malazgirt 1071</em>, Kronik Kitap; <em>Malazgirt Günlükleri: Kutlu Mirasın Peşinde</em>, Ketebe Yay., 2021), Osman Turan (<em>Selçuklular Tarihi ve Türk-İslâm Medeniyeti</em>, TKAE, 1965; <em>Selçuklular Zamanında Türkiye</em>, 1971), Claude Cahen (<em>“La campagne de Mantzikert d’après les sources musulmanes”</em>, Byzantion IX, 1934), Carole Hillenbrand (<em>Turkish Myth and Muslim Symbol: The Battle of Manzikert</em>, Edinburgh University Press, 2007), Ali Sevim (<em>TTK Belgeler</em> XIV/18, 1992 &amp; XIX/23, 1998), Faruk Sümer &amp; Ali Sevim (<em>İslâm Kaynaklarına Göre Malazgirt Savaşı: Metinler ve Çevirileri</em>, TTK, 1971), Muharrem Kesik (<em>1071 Malazgirt: Zafere Giden Yol</em>, Timaş Yay.), Cihan Piyadeoğlu (<em>Çağrı Bey</em>; <em>Sultan Alp Arslan: Fethin Babası</em>; <em>Büyük Selçuklular</em>, Kronik Kitap), Ayşe Beyza Ercan (<em>“The Byzantine Empire in the Kingdom of Georgia’s Foreign Policy in the 11th Century”</em>, KAREN, 6/11, 2020, s. 331–344; <em>Altın Çağ Dönemi Gürcistan’ının Dâhilî ve Haricî Politikaları</em>, Sonçağ Akademi, 2023), John Haldon (<em>The Byzantine Wars</em>, Tempus, 2001), Jean-Claude Cheynet (<em>“Mantzikert: un désastre militaire?”</em>, Byzantion L, 1980), Anthony Kaldellis &amp; Dimitris Krallis (<em>Michael Attaleiates: The History</em>, DOML, 2012) ve Speros Vryonis (<em>The Decline of Medieval Hellenism in Asia Minor</em>, UC Press, 1971).';
