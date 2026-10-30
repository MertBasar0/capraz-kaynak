import { withBase } from '../utils/paths';
import type {
  VisualAsset,
  MapStep,
  CityMarker,
  RouteLine,
  PropagandaCase,
  ActorFate,
} from './antakya1098';

export interface ChronicleStage {
  id: string;
  stageBadge?: string;
  stageTitle?: string;
  stageLead?: string;
  bannerVisual?: VisualAsset;
  east: {
    pill: string;
    date: string;
    titleHtml: string;
    authorDesc: string;
    origScript: string;
    origLang: 'ar';
    translationParagraphsHtml: string[];
  };
  west: {
    pill: string;
    date: string;
    titleHtml: string;
    authorDesc: string;
    origScript: string;
    origLang: 'la';
    translationParagraphsHtml: string[];
  };
  ransomTariffBox?: {
    badge: string;
    title: string;
    lead: string;
    items: { label: string; value: string; note: string }[];
  };
  synthesisBridge: {
    title: string;
    bodyHtml: string;
  };
}

export const hittinCompassScenes = [
  { id: 'prolog', shortLabel: 'Giriş' },
  { id: 'sahne-harita', shortLabel: '01 · Su, Ateş & Kudüs' },
  { id: 'sahne-propaganda', shortLabel: '02 · Efsane & Kritiği' },
  { id: 'sahne-ordu', shortLabel: '03 · Selahaddin & Ordu' },
  { id: 'sahne-kopru-kapisi', shortLabel: '04 · Hıttîn & Kudüs' },
  { id: 'sahne-ihanet', shortLabel: '05 · Altı Aktörün Sonu' },
  { id: 'sahne-bilanco', shortLabel: '06 · III. Haçlı & Terazi' },
];

export const hittinHeroVisuals: {
  prologue: VisualAsset;
  propagandaLuttrell: VisualAsset;
  coalitionCamp: VisualAsset;
  battleHattin4A: VisualAsset;
  jerusalemKeys4B: VisualAsset;
  thirdCrusadeArsuf: VisualAsset;
} = {
  prologue: {
    src: withBase('/images/arsiv/hittin-1187/prologue-tiberias-bartlett.jpg'),
    badge: 'TARİHÎ TOPOGRAFİK GRAVÜR · 1836',
    caption: 'Hıttîn Platosu Sırtlarından Taberiye Gölü (Celile Denizi) ve Karşı Dağların Görünümü',
    credit: 'W. H. Bartlett, Syria, the Holy Land, Asia Minor Illustrated (1836, Kamu Malı)',
    isEngraving: true,
    objectPosition: 'center 42%',
  },
  propagandaLuttrell: {
    src: withBase('/images/arsiv/hittin-1187/propaganda-luttrell-duel.jpg'),
    badge: 'LUTTRELL PSALTER · YKL. 1325–1335 (FOL. 82R)',
    caption: 'Tarihte Hiç Yüz Yüze Gelmemiş İki Hükümdarın Görsel Kurgusu: I. Richard ile Selahaddin’in Hayalî Düellosu',
    credit: 'British Library, Add MS 42130, fol. 82r (Kamu Malı)',
    objectPosition: 'center center',
  },
  coalitionCamp: {
    src: withBase('/images/arsiv/hittin-1187/army-captives-bnf22495.jpg'),
    badge: 'BNF FRANÇAIS 22495 · 14. YÜZYIL TEZHİBİ',
    caption: 'Hıttîn Zaferi Sonrası Sultan Selahaddin Eyyûbî, Emîrleri ve Esir Alınan Haçlı Baronları',
    credit: 'Roman de Godefroi de Bouillon et de Salehadin, BnF Fr. 22495, fol. 215v (1337, Kamu Malı)',
    objectPosition: 'center 28%',
  },
  battleHattin4A: {
    src: withBase('/images/arsiv/hittin-1187/battle-hattin-matthew-paris.jpg'),
    badge: 'MATTHEW PARIS · CHRONICA MAJORA (YKL. 1240–1253)',
    caption:
      'En Erken 13. Yüzyıl Çizimi: Selahaddin ("Salaadin\'") Hıttîn’de Kral Guy’ın ("Guido rex") Elinden Gerçek Haç’ı ("Crux sancta") Alırken (Atların Altında Çalı Yangını Alevleri)',
    credit: 'Corpus Christi College Cambridge, Parker Library MS 26, fol. 140r (Kamu Malı)',
    objectPosition: 'center 46%',
  },
  jerusalemKeys4B: {
    src: withBase('/images/arsiv/hittin-1187/jerusalem-keys-ms5090.jpg'),
    badge: 'ARSENAL MS. 5090 · ORTAÇAĞ TEZHİBİ (1462)',
    caption:
      '2 Ekim 1187 Cuma (27 Receb 583): İbelinli Balian’ın Kudüs’ün Anahtarlarını Emân Antlaşmasıyla Sultan Selahaddin’e Teslim Edişi',
    credit: 'David Aubert, Chroniques abrégées, Bibliothèque de l’Arsenal Ms. 5090 réserve, fol. 144 (Kamu Malı)',
    objectPosition: 'center 52%',
  },
  thirdCrusadeArsuf: {
    src: withBase('/images/arsiv/hittin-1187/third-crusade-arsuf-dore.jpg'),
    badge: 'TARİHÎ ÇELİK GRAVÜR · 1877',
    caption: '7 Eylül 1191 Arsûf Muharebesi: Aslan Yürekli I. Richard ve Eyyûbî Süvarileri Kıyı Yürüyüşünde Karşı Karşıya',
    credit: 'Gustave Doré, Histoire des Croisades (1877, Kamu Malı)',
    isEngraving: true,
    objectPosition: 'center 34%',
  },
};

export const hittinPrologueConfig = {
  badges: [
    { text: 'DOSYA 02 · ETKİLEŞİMLİ BELGESEL', variant: 'east' as const },
    { text: '8 BİRİNCİL VEKÂYİNÂME ÇAPRAZ OKUMASI', variant: 'west' as const },
    { text: 'TOPOGRAFİK HİDROLOJİ & DİVAN ARŞİVİ', variant: 'turquoise' as const },
  ],
  titleMain: 'Susuzluk, Ateş ve Diplomasi:',
  titleAccent: '1187 Hıttîn, Kudüs’ün Geri Alınışı ve III. Haçlı Seferi',
  leadHtml:
    '1098’de Antakya önünde emîrlerin birbirine düşmesiyle açılan Kudüs yolu, 89 yıl sonra nasıl kapandı? Bir cephenin <em>«Şeytan yalan söyledi!»</em> diyerek kırmızı kraliyet çadırının devrilişini izlediği, karşı cephenin <em>«o gece orada sudan çok kan döküldü»</em> diye yazdığı Hıttîn’i ve 1099 katliamıyla taban tabana zıt 1187 Kudüs teslimini iki tarafın görgü tanıkları nasıl kaydetti?',
  visual: hittinHeroVisuals.prologue,
  chronometer: [
    {
      year: '15 Temmuz 1099',
      desc: 'Kudüs’ün kılıçla düşüşü; parçalı Suriye emirlikleri ve Sünnî–Fâtımî bölünmesi',
    },
    {
      year: '1144 – 1171',
      desc: 'Zengî karşı-hamlesi (Urfa’nın fethi) ve Kahire’de Fâtımî Halifeliği’nin ilgası',
    },
    {
      year: 'Mart 1186',
      desc: 'Musul Antlaşması ile Kahire–Şam–Halep–Cezîre kıskacının tek komutada birleşmesi',
    },
    {
      year: '4 Temmuz & 2 Ekim 1187',
      desc: 'Hıttîn Boynuzları’nda sahra ordusunun imhası ve Kudüs’ün emân ile teslimi',
      active: true,
    },
  ],
};

export const hittinCities: CityMarker[] = [
  { id: 'urfa', name: 'Urfa (Edessa)', historicalName: '24 Aralık 1144 Zengî Fethi', coords: [38.796, 37.167], faction: 'zengid' },
  { id: 'musul', name: 'Musul', historicalName: 'Mart 1186 Antlaşması', coords: [43.13, 36.34], faction: 'zengid' },
  { id: 'halep', name: 'Halep', historicalName: 'Haziran 1183 Birleşme', coords: [37.161, 36.199], faction: 'ayyubid' },
  { id: 'sam', name: 'Şam (Dımaşk)', historicalName: '1154 Nûreddin · 1174 Selahaddin', coords: [36.291, 33.513], faction: 'ayyubid' },
  { id: 'kahire', name: 'Kahire', historicalName: 'Eylül 1171 Fâtımî İlgası', coords: [31.259, 30.049], faction: 'ayyubid' },
  { id: 'kerek', name: 'Kerek Kalesi', historicalName: 'Renaud Kervan Baskın Üssü', coords: [35.701, 31.181], faction: 'crusader' },
  { id: 'tell-astera', name: 'Tell Aşterâ (Havran)', historicalName: '26 Haziran 1187 · 30.000 Asker Yoklaması', coords: [36.015, 32.815], faction: 'ayyubid' },
  { id: 'saffuriye', name: 'Saffûriye Pınarları', historicalName: 'Haçlı Bol Sulu Ordugâhı (~20.000)', coords: [35.279, 32.746], faction: 'hydrology' },
  { id: 'cresson', name: 'Cresson (Ayn Gozeh)', historicalName: '1 Mayıs 1187 İmha Çarpışması', coords: [35.335, 32.712], faction: 'contested' },
  { id: 'ayn-turan', name: 'Ayn Tur‘ân', historicalName: 'Yetersiz Yaz Debisi (3 Temmuz Öğle)', coords: [35.372, 32.775], faction: 'hydrology' },
  { id: 'meskene', name: 'Birket Meskene', historicalName: 'Kurumuş 40×40m Antik Havuz', coords: [35.412, 32.776], faction: 'hydrology' },
  { id: 'hittin', name: 'Hıttîn Boynuzları (326m)', historicalName: 'Kurûn Hıttîn · 4 Temmuz 1187', coords: [35.456, 32.801], faction: 'contested' },
  { id: 'taberiye', name: 'Taberiye & Gölü', historicalName: '2 Temmuz Yem Kuşatması · Eschiva', coords: [35.542, 32.792], faction: 'contested' },
  { id: 'sur', name: 'Sûr (Tyre)', historicalName: 'Montferratlı Conrad Direnişi', coords: [35.195, 33.273], faction: 'crusader' },
  { id: 'akka', name: 'Akka', historicalName: '1187 Fetih · 1189–91 Çifte Kuşatma', coords: [35.07, 32.923], faction: 'contested' },
  { id: 'arsuf', name: 'Arsûf', historicalName: '7 Eylül 1191 Kıyı Muharebesi', coords: [34.812, 32.195], faction: 'contested' },
  { id: 'yafa', name: 'Yafa', historicalName: 'Ağustos 1192 Çarpışma & Antlaşma', coords: [34.751, 32.054], faction: 'contested' },
  { id: 'beyt-nuba', name: 'Beyt Nûbâ', historicalName: 'I. Richard’ın İki Kez Geri Döndüğü Hat', coords: [35.027, 31.855], faction: 'crusader' },
  { id: 'askalan', name: 'Askalân', historicalName: 'Mısır Kapısı · Surları Yıktırıldı (1191)', coords: [34.547, 31.669], faction: 'ayyubid' },
  { id: 'kudus', name: 'Kudüs (Beytülmakdis)', historicalName: '2 Ekim 1187 / 27 Receb 583 Emân Teslimi', coords: [35.234, 31.778], faction: 'ayyubid' },
  { id: 'goksu', name: 'Silifke / Göksu (Saleph)', historicalName: '10 Haziran 1190 Barbarossa’nın Ölümü', coords: [33.925, 36.382], faction: 'seljuk' },
];

export const hittinRoutes: RouteLine[] = [
  {
    id: 'zengid-ayyubid-ring',
    label: '1144–1186 Zengî–Eyyûbî Stratejik Birleşme Kıskacı (Kahire–Şam–Halep–Urfa–Musul)',
    color: '#2cc5b3',
    coordinates: [
      [31.259, 30.049],
      [34.547, 31.669],
      [36.291, 33.513],
      [37.161, 36.199],
      [38.796, 37.167],
      [43.13, 36.34],
    ],
  },
  {
    id: 'kerak-cresson-raids',
    label: '1187 Kerek Kervan Baskını ve 1 Mayıs Gökböri Cresson Akını',
    color: '#f59e0b',
    dashed: true,
    coordinates: [
      [35.701, 31.181],
      [35.85, 32.15],
      [36.015, 32.815],
      [35.572, 32.718],
      [35.335, 32.712],
    ],
  },
  {
    id: 'saladin-tiberias-bait',
    label: '27 Haziran – 2 Temmuz 1187 Selahaddin’in Taberiye Yemi ve Kefr Sebt Pususu',
    color: '#d99b4e',
    coordinates: [
      [36.015, 32.815],
      [35.572, 32.718],
      [35.45, 32.755],
      [35.542, 32.792],
    ],
  },
  {
    id: 'crusader-thirst-march',
    label: '3–4 Temmuz 1187 Haçlı Susuzluk Yürüyüşü (Saffûriye → Ayn Tur‘ân → Birket Meskene → Hıttîn)',
    color: '#d9485f',
    coordinates: [
      [35.279, 32.746],
      [35.372, 32.775],
      [35.412, 32.776],
      [35.456, 32.801],
    ],
  },
  {
    id: 'lake-camel-water',
    label: '3–4 Temmuz Gecesi Taberiye Gölü’nden 70+ Develik Eyyûbî Su İkmal Hattı',
    color: '#38bdf8',
    dashed: true,
    coordinates: [
      [35.542, 32.792],
      [35.495, 32.798],
      [35.456, 32.801],
    ],
  },
  {
    id: 'jerusalem-victory-sweep',
    label: 'Temmuz – 2 Ekim 1187 Kıyı Kalelerinin Çöküşü ve Kudüs Kuşatması',
    color: '#d99b4e',
    coordinates: [
      [35.456, 32.801],
      [35.07, 32.923],
      [34.751, 32.054],
      [34.547, 31.669],
      [35.234, 31.778],
    ],
  },
  {
    id: 'third-crusade-corridor',
    label: '1190–1192 III. Haçlı Seferi (Göksu · Akka · Arsûf · Beyt Nûbâ Çıkmazı)',
    color: '#a78bfa',
    dashed: true,
    coordinates: [
      [33.925, 36.382],
      [35.07, 32.923],
      [34.812, 32.195],
      [34.751, 32.054],
      [35.027, 31.855],
    ],
  },
];

export const hittinLegendItems = [
  { color: '#2cc5b3', label: 'Zengî–Eyyûbî Kıskacı' },
  { color: '#d99b4e', label: 'Selahaddin Sefer Hattı' },
  { color: '#d9485f', label: 'Haçlı Hıttîn Yürüyüşü' },
  { color: '#38bdf8', label: 'Pınarlar & Göl Su Hattı' },
];

export const hittinRingHighlights = [
  { id: 'hattin-horns-ring', coords: [35.456, 32.801] as [number, number], color: '#d9485f' },
  { id: 'jerusalem-eman-ring', coords: [35.234, 31.778] as [number, number], color: '#d99b4e' },
];

export const hittinMapSteps: MapStep[] = [
  {
    id: 'step-unification-arc',
    stepLabel: 'SAHNE 1A · JEOPOLİTİK DÖNÜŞÜM',
    dateBadge: '1144 – Mart 1186',
    locationBadge: 'Urfa · Şam · Kahire · Halep · Musul',
    title: '1098 Dağınıklığından Tek Komutaya: Stratejik Kıskacın İnşası',
    narrative: [
      '1098’de Antakya önünde Kürboğa’nın devasa koalisyonu; Halep, Şam ve Musul arasındaki hanedan kuşkuları ve Bağdat–Kahire (Sünnî Selçuklu – Şiî Fâtımî) mezhep çatlağı yüzünden tek kılıç vurulmadan dağılmıştı. Haçlı devletlerinin Doğu Akdeniz’de 88 yıl tutunabilmesinin ana sebebi kendi askeri yenilmezlikleri değil, İslam cephesinin bu çok parçalı yapısıydı.',
      'Denklem üç aşamada tersine döndü: İmâdüddin Zengî 24 Aralık 1144’te Urfa Kontluğu’nu yıktı, oğlu Nûreddin Mahmud 1154’te Şam’ı birleştirdi. Ardından Esedüddin Şîrkûh ve yeğeni Selahaddin 1169’da Kahire vezirliğini devralıp Eylül 1171’de 262 yıllık Fâtımî Halifeliği’ne son verdi; Selahaddin 12 yıllık çetin mücadelelerle Şam (1174), Halep (Haziran 1183) ve nihayet 3–4 Mart 1186 Musul Antlaşması ile Cezîre’yi tek üst komutada birleştirdi.',
    ],
    highlightNote: {
      source: 'Dosya 01 → Dosya 02 Stratejik Köprüsü',
      text: 'Kudüs Krallığı kuruluşundan beri ilk kez Nil vadisinin mali hazinesi ile Suriye ve el-Cezîre’nin atlı okçu insan kaynağını birleştiren tek bir askeri çemberin ortasında kaldı.',
      tone: 'east',
    },
    camera: {
      center: [36.8, 33.6],
      zoom: 5.15,
      pitch: 34,
      bearing: -8,
    },
    activeRouteIds: ['zengid-ayyubid-ring'],
    focusCityIds: ['kahire', 'sam', 'halep', 'urfa', 'musul', 'kudus'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1a-saladin-army-bnf770.jpg'),
      badge: 'BNF FRANÇAIS 770 · 13. YÜZYIL MİNYATÜRÜ',
      caption: 'Selahaddin Eyyûbî ve birleşik süvari ordusu sefer yürüyüşünde',
      credit: 'Bibliothèque nationale de France, Ms. Fr. 770, fol. 327v (Kamu Malı)',
      objectPosition: 'center 30%',
    },
  },
  {
    id: 'step-kerak-cresson',
    stepLabel: 'SAHNE 1B · ATEŞKESİN İHLALİ VE İLK ŞOK',
    dateBadge: 'Kış 1186/87 – 1 Mayıs 1187',
    locationBadge: 'Kerek Kalesi & Cresson Pınarları (Ayn Gozeh)',
    title: 'Saray Darbesi, Kervan Baskını ve Cresson Felaketi',
    narrative: [
      'Cüzzamlı Kral IV. Baudouin (ö. 1185) ve çocuk kral V. Baudouin’in (ö. 1186) ölümüyle Kudüs iki hizbe bölündü: Yerli baronların (İbelinler ve Trablus Kontu III. Raymond) müzakereci kanadı ile yeni gelen şahin saray hizbi (Guy de Lusignan, Kerek Lordu Renaud de Châtillon ve Tapınak Üstadı Gérard de Ridefort). Sibylla ve Guy bir oldu-bittiyle taç giyince dışlanan III. Raymond, kendi bölgesi Celile için Selahaddin ile ayrı ateşkes yaptı; Renaud ise yürürlükteki antlaşmayı çiğneyip Kahire–Şam kervanını vurdu ve Kral Guy’ın tazminat emrini dahi reddetti.',
      '1 Mayıs 1187’de Muzafferüddin Gökböri, Bedreddin Dildirim ve Sârimüddin Kaymaz komutasındaki ~7.000 kişilik Eyyûbî keşif süvarisi, Raymond’dan tek günlük geçiş izniyle Celile’ye girdi. Aynı gün Raymond ile uzlaşmaya giden Haçlı elçi heyetindeki Gérard de Ridefort, Hospitalier Üstadı Roger de Moulins’i korkaklıkla suçlayarak ~140 şövalye ve ~350 piyadeyle Cresson Pınarları’nda 7.000 atlıya saldırdı: Haçlı birliği tamamen imha edildi, Roger de Moulins öldürüldü; sarsılan III. Raymond anlaşmasını bozup Kral Guy’a biat etti.',
    ],
    highlightNote: {
      source: 'Ernoul Kroniği & İbnü’l-Esîr (20 Safer 583 / 1 Mayıs 1187)',
      text: 'Cresson’dan yaralı halde yalnızca 3 şövalyeyle kaçabilen Tapınak Üstadı Gérard de Ridefort’un bu küçük düşürücü yenilgiden duyduğu öfke ve III. Raymond’a beslediği kin, iki ay sonra Hıttîn kararını zehirleyecektir.',
      tone: 'west',
    },
    camera: {
      center: [35.58, 32.08],
      zoom: 7.45,
      pitch: 42,
      bearing: -14,
    },
    activeRouteIds: ['kerak-cresson-raids'],
    focusCityIds: ['kerek', 'tell-astera', 'cresson', 'kudus'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1b-cresson-raid-bl.jpg'),
      badge: 'BRITISH LIBRARY YATES THOMPSON MS 12 · 13. YY',
      caption: '1187 sınır çarpışmaları ve ateşkesin çöküşünü betimleyen Akka/Batı tezhibi',
      credit: 'Histoire d’Outremer, BL Yates Thompson MS 12 (ykl. 1232–1261, Kamu Malı)',
      objectPosition: 'center 45%',
    },
  },
  {
    id: 'step-tiberias-bait',
    stepLabel: 'SAHNE 1C · MALİ SAAT VE PSİKOLOJİK YEM',
    dateBadge: '26 Haziran – 2 Temmuz 1187',
    locationBadge: 'Tell Aşterâ → Saffûriye → Taberiye',
    title: 'Koalisyonun Zamana Karşı Yarışı ve Taberiye Kapanı',
    narrative: [
      'Kâdî el-Fâzıl’ın divan mektupları üzerinden tarihçiler Lyons ve Jackson’ın kanıtladığı üzere Selahaddin zamana karşı yarışıyordu: 26 Haziran’da Tell Aşterâ’da yoklamasını yaptığı ~30.000 kişilik büyük koalisyonu sonbahar hasadından sonra mali olarak bir arada tutamazdı. Nitekim 1183’te (el-Fûle’de) Haçlılar su kaynaklarına yaslanıp savaşı reddetmiş ve Selahaddin çekilmek zorunda kalmıştı.',
      'Bütün kale garnizonlarını boşaltarak (İngiltere Kralı II. Henry’nin Thomas Becket kefaret altınlarıyla finanse edilen arrière-ban seferberliği) ~20.000 kişilik ordusunu bol sulu Saffûriye pınarlarına yığan Haçlılar yerinden kıpırdamayınca, Selahaddin ana ordusunu Kefr Sebt platosunda pusuya yatırdı ve 2 Temmuz sabahı Taberiye’ye inip aşağı şehri bir saatte düşürdü. III. Raymond’un eşi Kontes Eschiva göl kıyısındaki iç kaleye sığınıp yardım habercileri uçurdu: Yem atılmıştı.',
    ],
    highlightNote: {
      source: 'Malcolm C. Lyons & D. E. P. Jackson (Saladin: The Politics of the Holy War)',
      text: 'Selahaddin’in hedefi Taberiye Kalesi değil, Haçlı şövalyelerinin "kuşatılan bir Hristiyan leydiyi terk etmeme" feodal onur kodunu tetikleyerek onları Saffûriye sularından açık ve susuz platoya çekmekti.',
      tone: 'witness',
    },
    camera: {
      center: [35.48, 32.77],
      zoom: 9.85,
      pitch: 48,
      bearing: 22,
    },
    activeRouteIds: ['saladin-tiberias-bait'],
    focusCityIds: ['tell-astera', 'saffuriye', 'taberiye', 'hittin'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1c-tiberias-roberts.jpg'),
      badge: 'DAVID ROBERTS LİTOGRAFİSİ · 1839',
      caption: 'Taberiye Gölü kıyısındaki ortaçağ surları ve Kontes Eschiva’nın sığındığı içkale',
      credit: 'Cleveland Museum of Art, Town of Tiberias Looking Towards Lebanon (1839, Kamu Malı)',
      objectPosition: 'center 44%',
    },
  },
  {
    id: 'step-saffuriye-council',
    stepLabel: 'SAHNE 1D · GECE YARISI KARAR DARBESİ',
    dateBadge: '2 – 3 Temmuz 1187 Gecesi',
    locationBadge: 'Saffûriye Pınarları Ordugâhı',
    title: 'Kendi Kentini Feda Eden Kont ve Gece Yarısı Çadır Müdahalesi',
    narrative: [
      '2 Temmuz akşamı Saffûriye’de toplanan savaş meclisinde, saldırıya uğrayan yer bizzat kendi mülkü olmasına rağmen Trablus Kontu III. Raymond ayağa kalkıp tarihin en soğukkanlı askeri analizlerinden birini yaptı: «Taberiye benimdir, eşim içeridedir; kimse benden çok zarar görmez. Ama yemin ederim ki oraya yürümeyin! Saffûriye ile Taberiye arasında bu koca orduya yetecek su yoktur; sıcak ve susuzluk bizi kılıçtan önce kırar. Bu ordu yok olursa bütün krallığı kaybedersiniz!»',
      'Bütün baronlar Raymond’a hak verip su başında kalma kararıyla dağıldı. Ancak gece yarısı Tapınak Üstadı Gérard de Ridefort tek başına Kral Guy’ın çadırına girdi, Raymond’u "hainlikle" suçladı ve «Tapınaklılar beyaz pelerinlerini çıkarıp burayı terk eder!» tehdidini savurdu. İradesi zayıf Kral Guy meclisi yeniden toplamadan kararı bozdu ve şafakta yürüyüş borularını çaldırdı.',
    ],
    highlightNote: {
      source: 'Ernoul Kroniği & İbnü’l-Esîr Çapraz Doğrulaması',
      text: 'Selahaddin ertesi sabah Frankların Saffûriye pınarlarından ayrılıp doğuya yürüdüğü haberini aldığında atının üzerinde ellerini kaldırarak «Tam istediğimiz yere çıktılar!» demiştir.',
      tone: 'east',
    },
    camera: {
      center: [35.33, 32.755],
      zoom: 10.65,
      pitch: 50,
      bearing: 56,
    },
    activeRouteIds: ['crusader-thirst-march', 'saladin-tiberias-bait'],
    focusCityIds: ['saffuriye', 'ayn-turan', 'taberiye'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1d-council-eracles.jpg'),
      badge: 'ESTOIRE D’ERACLES TEZHİBİ · 15. YY',
      caption: 'Kudüs Kralı Guy de Lusignan (Kudüs haçlı sürko ile merkezde) ve zırhlı Haçlı baronları',
      credit: 'Guillaume de Tyr Zeyli / Estoire d’Eracles El Yazması (Kamu Malı)',
      objectPosition: 'center 38%',
    },
  },
  {
    id: 'step-meskene-hydrology',
    stepLabel: 'SAHNE 1E · HİDROLOJİK TUZAK (KEDAR ANALİZİ)',
    dateBadge: '3 Temmuz 1187 Cuma (24 Rebîülâhir 583)',
    locationBadge: 'Ayn Tur‘ân → Birket Meskene (Hirbet Meskene)',
    title: 'Susuz Bazalt Platosu ve Kurumuş "Birket Meskene" Yanılgısı',
    narrative: [
      'Şafakta ~20.000 kişilik Haçlı kolu (Öncü: III. Raymond; Merkez: Kral Guy ve Gerçek Haç; Artçı: İbelinli Balian ve Tapınaklılar) kavurucu Temmuz sıcağında doğuya girdi. Tarihçi Benjamin Z. Kedar’ın (1992) saha ve debi ölçümleriyle kanıtladığı üzere, öğleyin geçilen Ayn Tur‘ân pınarının yaz debisi saatte birkaç metreküptü; 20.000 askeri ve binlerce atı sulaması fiziksel olarak imkânsızdı. Ordu burayı geçince geri dönüş kapısı kapandı.',
      'Öğleden sonra Gökböri’nin Türkmen atlı okçuları artçıyı mıhlayınca Kral Guy —Raymond’un «Durursak öldük, yararak göle inmeliyiz!» feryadına rağmen— Hirbet Meskene’de konaklama emri verdi. Guy rastgele bir çölde durmamıştı: Meskene’de 40×40 metrelik antik yağmur havuzu (Birket Meskene) ve sarnıçlar vardı; fakat Temmuz başında tamamı kurumuş veya çamurla dolmuştu! O gece Selahaddin 70+ deveyle Taberiye Gölü’nden kendi hatlarına kesintisiz su taşıttı.',
    ],
    highlightNote: {
      source: 'Benjamin Z. Kedar (The Battle of Hattin Revisited, 1992) & Ernoul',
      text: 'Çember o gece öyle daraltıldı ki her iki cephenin görgü tanıkları aynı cümleyi kurdu: «Ordugâhın içinden dışarıya bir kedi bile çıkamazdı.»',
      tone: 'witness',
    },
    camera: {
      center: [35.425, 32.782],
      zoom: 11.15,
      pitch: 54,
      bearing: 72,
    },
    activeRouteIds: ['crusader-thirst-march', 'lake-camel-water'],
    focusCityIds: ['ayn-turan', 'meskene', 'hittin', 'taberiye'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1e-encircled-hattin-dore.jpg'),
      badge: 'GUSTAVE DORÉ GRAVÜRÜ · 1877',
      caption: 'Arkada Hıttîn Boynuzları ve sağda Taberiye Gölü parıldarken çembere alınan susuz Haçlı ordusu',
      credit: 'Gustave Doré, Histoire des Croisades (1877, Kamu Malı)',
      isEngraving: true,
      objectPosition: 'center 26%',
    },
  },
  {
    id: 'step-horns-of-hattin',
    stepLabel: 'SAHNE 1F · KIRILMA ANI (KURÛN HITTÎN)',
    dateBadge: '4 Temmuz 1187 Cumartesi (24/25 Rebîülâhir 583)',
    locationBadge: 'Hıttîn Boynuzları (326 m Volkanik Krater)',
    title: 'Çalı Yangını, Açılan Saflar ve Kırmızı Çadırın Çöküşü',
    narrative: [
      'Sabah batıdan deniz meltemi esmeye başladığında Müslüman gönüllüler (mutavvia) rüzgâr üstündeki kuru dikenli çalıları ateşe verdi. Alev ve duman doğrudan susuz Haçlıların yüzüne vurunca piyadeler düzeni bozup sarp kayalıklara kaçtı; arbalet kalkanından yoksun kalan şövalyelerin atları ok yağmuruyla vuruldu. Kuzeye hücum eden III. Raymond’un öncülerine karşı Takıyyüddin Ömer safları ikiye açtı (ferrece lehüm) ve geçtikleri anda çemberi tekrar kapattı; yalnızca Raymond ile artçıdan İbelinli Balian kurtulabildi.',
      'Kral Guy ~150 seçkin şövalyeyle 326 metrelik volkanik krater zirvesi Hıttîn Boynuzları’na çekilip kırmızı kraliyet çadırını kurdurdu. İki umutsuz karşı-hücumun ardından Takıyyüddin’in birlikleri Gerçek Haç’ı (Lignum Crucis) ele geçirdi; kırmızı çadırın ipleri kesilip devrildiği an Haçlı sahra ordusu tarihten silindi (Takvim notu: 4 Temmuz Cumartesi cetvel hesabıyla 24, hilâl gözlemiyle 25 Rebîülâhir 583’tür).',
    ],
    highlightNote: {
      source: 'İbn Şeddâd (Aynı Akşam Sultan Çadırında Buzlu Şerbet Hukuku)',
      text: 'Susuzluktan titreyen Kral Guy kendisine sunulan buzlu gül şerbetinden içip kadehi Renaud’ya uzatınca Selahaddin tercümana döndü: «Krala söyle: Ona suyu sen içirdin, ben içirmedim [benim emânım altında değildir]!»',
      tone: 'east',
    },
    camera: {
      center: [35.462, 32.801],
      zoom: 11.75,
      pitch: 56,
      bearing: 84,
    },
    activeRouteIds: ['crusader-thirst-march', 'lake-camel-water'],
    focusCityIds: ['hittin', 'meskene', 'taberiye'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1f-loss-cross-bl.jpg'),
      badge: 'BRITISH LIBRARY EL YAZMASI TEZHİBİ · 15. YY',
      caption: 'Hıttîn Boynuzları’nda Kral Guy’ın bağlanışı ve Gerçek Haç’ın ele geçirilişi',
      credit: 'British Library Ortaçağ Vekâyinâme Tezhibi (Kamu Malı)',
      objectPosition: 'center 52%',
    },
  },
  {
    id: 'step-jerusalem-eman',
    stepLabel: 'SAHNE 1G · KUDÜS’ÜN GERİ ALINIŞI',
    dateBadge: 'Temmuz – 2 Ekim 1187 Cuma (27 Receb 583)',
    locationBadge: 'Akka · Askalân · Zeytin Dağı & Kudüs',
    title: 'Garnizonsuz Kalelerin Çöküşü, Balian’ın Resti ve Katliamsız Teslim',
    narrative: [
      'Krallığın bütün garnizonları Hıttîn’e götürüldüğü için savunmasız kalan Taberiye (Kontes Eschiva serbestçe uğurlandı), Akka, Yafa, Beyrut ve Mısır kapısı Askalân peş peşe düştü; yalnızca denizden yetişen Montferratlı Conrad sayesinde Sûr kenti tutunabildi. 20 Eylül’de Kudüs önüne gelen Selahaddin, 25 Eylül’de karargâhını Zeytin Dağı – kuzeydoğu surları hattına taşıdı ve 29 Eylül’de lağımcılar surda büyük bir gedik açtı.',
      'Savunma komutanı İbelinli Balian huzura çıktığında Selahaddin ilkin «Siz 1099’da Kudüs’ü nasıl kılıçla alıp Müslümanları katlettiyseniz ben de kılıçla alacağım!» dedi. Balian bunun üzerine son kozunu oynadı: Emân verilmezse içerideki 5.000 Müslüman esiri öldürecekler, Kubbetü’s-Sahra ile Mescid-i Aksâ’yı temellerine dek yıkacaklar ve son neferine kadar çarpışacaklardı. Selahaddin ulemâsıyla istişare ederek sulh ve fidye ile teslimi kabul etti; 2 Ekim 1187 Cuma (Mi‘râc Kandili) Kudüs tek bir sivil katliamı yaşanmadan devralındı.',
    ],
    highlightNote: {
      source: '15 Temmuz 1099 ↔ 2 Ekim 1187 Tarihsel Kontrastı',
      text: '1099’da Haçlıların Mescid-i Aksâ’da güvenlik sancağı verilmiş sığınmacıları dahi kılıçtan geçirdiği kentte, 88 yıl sonra patrikten sivil halka kadar emân sözleşmesine harfiyen uyuldu.',
      tone: 'east',
    },
    camera: {
      center: [35.12, 32.18],
      zoom: 7.75,
      pitch: 44,
      bearing: -16,
    },
    activeRouteIds: ['jerusalem-victory-sweep'],
    focusCityIds: ['kudus', 'askalan', 'yafa', 'akka', 'sur'],
    visual: {
      src: withBase('/images/arsiv/hittin-1187/step1g-jerusalem-olives-roberts.jpg'),
      badge: 'DAVID ROBERTS · 5 NİSAN 1839 (CLEVELAND MUSEUM OF ART)',
      caption: 'Selahaddin’in 25 Eylül 1187’de karargâh kurduğu Zeytin Dağı’ndan Kubbetü’s-Sahra, Aksâ ve Kudüs surları',
      credit: 'David Roberts, Jerusalem from the Mount of Olives (1839, Kamu Malı)',
      objectPosition: 'center 42%',
    },
  },
];

export const hittinPropagandaCases: PropagandaCase[] = [
  {
    id: 'caravan-sister-myth',
    badge: 'VAKA 01 · KERVAN VE KIZ KARDEŞ EFSANESİ',
    title: 'Renaud de Châtillon 1187 Kervanında Selahaddin’in Kız Kardeşini Esir Aldı mı?',
    verdict: 'Savaş Sonrası Söylenti / Karıştırma',
    claimTag: '13. YY KRONİK SÖYLENTİSİ VE SİNEMA KURGUSU',
    claimSource: 'Eski Fransızca Ernoul Kroniği & Estoire d’Eracles (ve modern popüler sinema anlatıları)',
    claimQuote:
      '«Kerek Lordu Renaud’nun vurduğu Kahire–Şam kervanında bizzat Selahaddin’in kız kardeşi [bazı geç nüshalarda halası/annesi] esir alındı; Selahaddin bu kişisel namus intikamıyla Hıttîn seferine çıktı...»',
    critiqueSource: 'İbn Şeddâd, İmâdüddin el-İsfahânî & İbnü’l-Esîr Çapraz Denetimi',
    critiqueAnalysis:
      'Selahaddin’in en yakın halkasındaki İbn Şeddâd ve İmâdüddin ile İbnü’l-Esîr, Renaud’nun her suçunu tek tek sayarken vurulan ticaret kervanında tek bir Eyyûbî hanedan üyesinden söz etmez! Gerçekte kız kardeşi Sittü’ş-Şâm Zümürrüd Hatun birkaç ay sonra (Mart–Nisan 1187) Hicaz hac dönüşü Kerek yakınından geçecekti; Selahaddin bizzat ordusuyla Busrâ’ya inip kafileyi korudu ve Sittü’ş-Şâm burnu bile kanamadan Şam’a ulaştı (1220’de Şam’da vefat etti). Ernoul iki ayrı haberi birleştirip felaketin tüm suçunu Renaud’ya yıkmak için dramatize etmiştir.',
  },
  {
    id: 'raymond-circumcised-slur',
    badge: 'VAKA 02 · "SÜNNETLİ HAİN KONT" İFTİRASI',
    title: 'Trablus Kontu III. Raymond Gizlice Müslüman Olup Haçlı Ordusunu Sattı mı?',
    verdict: 'Yenilgi Sonrası Kara Propaganda',
    claimTag: 'LÜZİNYAN / TAPINAK YANLISI AVRUPA İFTİRASI',
    claimSource: 'William of Newburgh, Itinerarium Peregrinorum & Trois-Fontaines’li Alberic',
    claimQuote:
      '«Trablus Kontu Raymond gizlice İslam’a girip Selahaddin ile birbirlerinin kanını içti; Hıttîn’de Hristiyan ordusunu bilerek susuz tuzağa sürdü ve sefilce öldüğünde cesedinin sünnetli (circumcisus) olduğu görüldü!»',
    critiqueSource: 'Ernoul Kroniği, İbnü’l-Esîr & Askeri Coğrafya Kanıtı',
    critiqueAnalysis:
      'Raymond 1186’da Guy’ın saray darbesine karşı geçici bir siyasi ateşkes yapmıştı; ancak Cresson’dan sonra samimiyetle Haçlı ordusuna katıldı. Hem Frank hem İslam kaynakları, 2 Temmuz gecesi Saffûriye’de krallığı kurtaracak tek rasyonel askeri tavsiyeyi (kendi kenti Taberiye’yi ve içeride kuşatılan kendi eşi Eschiva’yı feda etme pahasına su başında kalmayı) Raymond’un verdiğini doğrular. Hıttîn’de Takıyyüddin Ömer’in safları açıp kapatması gizli ihanet anlaşması değil, klasik Türk-İslâm bozkır kapan taktiğiydi.',
  },
  {
    id: 'richard-saladin-duel-myth',
    badge: 'VAKA 03 · ÇİFT YÖNLÜ ROMANTİK MİT',
    title: '"Hümanist Batı Şövalyesi Selahaddin" ve I. Richard ile Teke Tek Düello Kurgusu',
    verdict: 'Tarihdışı Romantik Kurgu',
    claimTag: 'ORTA ÇAĞ ROMANSI (PAS SALADIN) & 19. YY EDEBİYATI',
    claimSource: 'Luttrell Psalter (fol. 82r), Fransız Romansları & Walter Scott (The Talisman, 1825)',
    claimQuote:
      '«Selahaddin gizlice Hristiyan şövalye kuşağı takmış pasifist bir şövalye beyefendisidir ve Aslan Yürekli Kral Richard ile savaş meydanında at sırtında mızrak düellosu yapmıştır...»',
    critiqueSource: 'Bahâeddin İbn Şeddâd (en-Nevâdirü’s-Sultâniyye) & İmâdüddin el-İsfahânî',
    critiqueAnalysis:
      '1) İbn Şeddâd’ın kesin kaydıyla I. Richard ile Selahaddin hayatları boyunca yüz yüze hiç görüşmemiştir! Tüm müzakereleri kardeşi el-Melikü’l-Âdil yürütmüş; Richard’ın görüşme talebini Selahaddin «Savaş halindeki iki hükümdarın buluşup sonra tekrar kılıç çekmesi yakışık almaz» diyerek reddetmiştir. 2) Selahaddin "modern pasifist" değil, emâna sadık ama gerektiğinde acımasız bir ortaçağ devlet adamıydı: Hıttîn’den iki gün sonra ateşkese uymayan daimi ideolojik ordu çekirdeği olan ~200–230 Tapınak ve Hospitalier şövalyesini tanesi 50 dinara satın alarak bizzat huzurunda idam ettirmiştir.',
  },
  {
    id: 'zengid-ayyubid-harmony-myth',
    badge: 'VAKA 04 · "KUSURSUZ UYUM" HAMASETİ',
    title: 'Nûreddin Zengî ile Selahaddin Arasında Pürüzsüz Bir Bayrak Yarışı mı Vardı?',
    verdict: 'Geriye Dönük İdeolojik Düzleştirme',
    claimTag: 'POPÜLER HAMASİ TARİH ANLATISI',
    claimSource: 'Modern Popüler Anlatılardaki "Çatışmasız Tek Cephe" Kurgusu',
    claimQuote:
      '«1144 Urfa fethinden 1187 Kudüs zaferine kadar Nûreddin Zengî, Selahaddin ve tüm Müslüman hanedanlar hiçbir iktidar gerilimi yaşamadan tam bir kardeşlik uyumu içinde hareket etti...»',
    critiqueSource: 'İbnü’l-Esîr (el-Kâmil & et-Târîhu’l-Bâhir) — "Şeker Kamışı" Meclisi Kaydı',
    critiqueAnalysis:
      '1171’de Fâtımîlik kaldırılınca Nûreddin ile Selahaddin arasında derin bir güvensizlik (el-vahşe) doğdu; Selahaddin azledilmemek için 1171 Şevbek ve 1173 Kerek kuşatmalarını Nûreddin yaklaştığında yarıda bırakıp Mısır’a çekildi. Babası Necmeddin Eyyûb, Kahire divanında açık itaat gösterdikten sonra yalnız kaldıklarında oğluna: «Vallahi Nûreddin bizim şeker kamışlarımızdan tek bir kamış istese ölünceye dek savaşırdım; ama şimdi mektupla alttan al ki zaman kazanalım!» dedi. Nûreddin Mayıs 1174’te Mısır’a ordu hazırlarken öldü; Selahaddin de Hıttîn öncesi tam 12 yılını (1174–1186) Şam, Halep ve Musul Zengîleriyle savaşarak birliği zorla ve diplomasiyle kurmaya harcadı.',
  },
];

export const hittinVerifiedFacts = [
  {
    title: '1. Renaud’nun Kızıldeniz ve Haremeyn Korsan Seferi (Şubat 1183)',
    sources: 'İbn Cübeyr (Seyahatnâme Görgü Tanığı), İbnü’l-Esîr & Ebû Şâme',
    detail:
      'Kerek’te inşa ettirdiği gemileri develerle Akabe Körfezi’ne (Eyle) indiren Renaud de Châtillon, Mısır’ın hac limanı Ayzâb’ı yağmaladı, silahsız bir hac gemisini batırdı ve Medine–Mekke kıyı hattı el-Havrâ ile Râbiğ’e çıkarma yaptı. Amiral Hüsâmeddin Lü’lü Frank filosunu yakalayıp imha etti; esirler caydırıcılık amacıyla Minâ ve Kahire’de alenen infaz edildi.',
  },
  {
    title: '2. Hıttîn Tarikat İnfazları ve Kudüs’te Köleleştirilen 15.000 Yoksul (1187)',
    sources: 'İmâdüddin el-İsfahânî (el-Fethu’l-Kussî) & İbn Şeddâd',
    detail:
      'Selahaddin Hıttîn’de feodal baronları bağışlarken ~200–230 Tapınak/Hospitalier şövalyesini devlet kararıyla idam ettirdi. Kudüs’te ise binlerce yoksul el-Âdil, Selahaddin ve Gökböri tarafından karşılıksız azat edilmesine rağmen, zengin Frenklerin ve tarikatların kasalarını açmayı reddetmesi yüzünden 40 gün sonunda fidyesiz kalan ~15.000 Frenk (~7.000 erkek, ~8.000 kadın-çocuk) ortaçağ savaş hukuku uyarınca köleleştirildi.',
  },
  {
    title: '3. I. Richard’ın Akka Tellü’l-Ayyâdiyye Katliamı (20 Ağustos 1191 / 27 Receb 587)',
    sources: 'Bahâeddin İbn Şeddâd & Itinerarium Peregrinorum Ortak Kaydı',
    detail:
      'Akka garnizonu 12 Temmuz 1191’de emân antlaşmasıyla teslim olduktan sonra taksit ve rehine takviminde anlaşmazlık çıkınca, Aslan Yürekli I. Richard —güneye yürürken 3.000 esiri beslememek için— zengin emîrleri ayırıp elleri bağlı ~2.700–3.000 Müslüman askeri Tellü’l-Ayyâdiyye düzlüğünde kılıçtan geçirtti (Hicrî takvimle Kudüs’ün bağışlandığı 27 Receb gününden tam 4 yıl sonra!).',
  },
];

export const saladinCommanderProfile = {
  pill: 'KİMLİK, SOY KÜTÜĞÜ VE TEREKE DOSYASI',
  name: 'Selahaddin Eyyûbî (Yûsuf bin Eyyûb)',
  subtitle: 'el-Melikü’n-Nâsır Salâhu’d-Dünyâ ve’d-Dîn (1137/38 Tikrît – 4 Mart 1193 Şam)',
  highlightBox: {
    leftTitle: 'SOY VE AİLE SENTEZİ',
    leftHtml:
      'Dvin <em>Hezbâniyye / Revvâdî</em> Kürt kökü + öz kardeşlerinde Eski Türkçe adlar: <em>Turanşah · Tuğtekin · Böri</em>',
    operator: '⇄',
    rightTitle: '4 MART 1193 TEREKESİ',
    rightHtml:
      'Şahsi sandığından yalnızca <strong>1 Sûr altın dinarı + 47 Nâsırî dirhem</strong> çıktı; kefenini Kâdî el-Fâzıl ödedi',
  },
  factsHtml: [
    '<strong>Soy Kütüğü (İbn Hallikân &amp; Vladimir Minorsky Kanıtı):</strong> Erbil’de yetişen biyografi âlimi İbn Hallikân (<em>Vefeyâtü’l-A‘yân</em>) ve Minorsky’nin (<em>Studies in Caucasian History</em>, 1953) vakıf senetleriyle kanıtladığı üzere; dedesi <strong>Şâdî bin Mervân</strong>, Dvin (<em>Duwîn</em>) kapısındaki Ecdanakân köyündendir ve <strong>Hezbâniyye Kürtlerinin Revvâdî (<em>er-Revâdiyye</em>)</strong> koluna mensuptur (sonradan uydurulan Emevî şeceresini bizzat İbn Hallikân reddeder).',
    '<strong>Türk–Kürt–Arap Yönetici Sentezi (Sıfır Anakronizm):</strong> Türk Atabeyi İmâdüddin Zengî’nin hizmetinde yükselen aile Selçuklu–Zengî askeri potasında öylesine bütünleşmiştir ki baba Necmeddin Eyyûb oğullarının üçüne <strong>Eski Türkçe bey adları</strong> (<strong>Şemsüddevle Turanşah</strong>, <strong>Seyfülislâm Tuğtekin</strong>, <strong>Tâcülmülûk Böri</strong>) vermiş; kız kardeşi <strong>Rabi‘a Hatun</strong> ise Erbil Türkmen Beyi <strong>Muzafferüddin Gökböri (<em>Kök-Böri</em>) bin Ali Küçük</strong> ile evlenmiştir. Divan ve fıkıh dili ise yüksek Arapçadır.',
    '<strong>Sikke Protokolü ve Mülksüz Vefat (İbn Şeddâd Tanıklığı):</strong> Hiçbir zaman halifelik iddiasında bulunmayıp sikkelerine Abbâsî Halifesi <em>en-Nâsır li-Dînillâh</em>’ın adını bastırdı; Kudüs’te <em>Hâdimü’l-Haremeyn</em> unvanını kullandı. 4 Mart 1193’te Şam Kalesi’nde öldüğünde ne ev, ne bağ, ne tek karış şahsi mülk bıraktı.',
  ],
};

export const saladinUnificationReasons = {
  pill: 'STRATEJİK PERDE ARKASI',
  title: '1098’de Kürboğa’nın Dağılan Koalisyonunun Aksine Selahaddin 1187’de Bu Orduyu Nasıl Birleştirdi?',
  items: [
    {
      num: '01',
      title: 'Nil Hazinesi ile Şam–Cezîre Süvarisinin Evliliği',
      text: '1098’de Mısır rakip bir Şiî devletti; 1171 sonrasında Mısır’ın ~3,67 milyon dinarlık zirai-ticari vergi ve iktâ kapasitesi, Suriye ve el-Cezîre’nin savaşçı süvari kaynağını finanse eden ana motor oldu.',
    },
    {
      num: '02',
      title: 'Kılıç Kadar Diplomasi ve İktâ Güvencesi (1186 Musul Modeli)',
      text: 'Kürboğa 1098’de Antakya İçkalesi’ne kendi adamını koyup emîrleri ürkütmüştü; Selahaddin ise kuşatmayla alamadığı Musul’u Mart 1186’da Zengî Atabeyi İzzeddin Mes‘ûd’un mülk haklarını tanıyarak yanına çekti ve gelirleri komutanlarına dağıttı.',
    },
    {
      num: '03',
      title: 'Tavâşî, Karagulâm ve Sarı Üniformalı "Halka" Çekirdeği',
      text: '12. yüzyıl Eyyûbî terminolojisinde "tavâşî" hadım ağası DEĞİL; 700–1.000+ dinar iktâlı, tam zırhlı birinci sınıf ağır süvari demektir! Karagulâm hafif atlı okçu; Halka ise merkezde sarı üniforma giyen seçkin hassa muhafız çemberidir.',
    },
    {
      num: '04',
      title: 'Sünnî İhyâ, Medrese Ağı ve Kudüs Ortak Meşruiyeti',
      text: 'Kâdî el-Fâzıl’ın diplomatik inşâ kalemi ve kurulan medrese ağı; Türk, Kürt ve Arap emîrlerini şahsi ganimet kavgasının ötesinde "Beytülmakdis’in geri alınması" ortak hedefinde kenetledi.',
    },
  ],
};

export const hittinArmySegments = [
  {
    id: 'turks',
    label: 'Türk Unsurlar (Memlûk Hassa Alayları + Uç Türkmenleri)',
    shareText: '%45 – %50',
    percent: 48,
    color: '#2cc5b3',
    commandNote:
      'Esediyye & Salâhiyye Memlûkleri (Bozkuş, Kaymaz, Karakuş) + Sol Kanatta Gökböri ve Dildirim Türkmenleri',
    detail:
      'Merkez ve Zengî alaylarındaki Kıpçak/Türk kökenli ağır zırhlı kapıkulu süvarileri ile Muzafferüddin Gökböri ve Bedreddin Dildirim el-Yârûkî komutasındaki hareketli Türkmen atlı okçuları. Vur-kaç ok yağmuruyla Haçlı piyadesini şövalyelerden koparan ana vurucu güç.',
  },
  {
    id: 'kurds',
    label: 'Kürt Emîr ve İktâ Alayları (Ekrâd)',
    shareText: '%20 – %25',
    percent: 22,
    color: '#a78bfa',
    commandNote:
      'Hakkâriyye (el-Meştûb, Ziyâeddin Îsâ), Hezbâniyye (Ebü’l-Heycâ es-Semîn), Mihrâniyye ve Humeydiyye',
    detail:
      'Yukarı Mezopotamya ve Zûzânü’l-Ekrâd kuşağından gelen köklü aşiret-iktâ alayları. Hem Hıttîn kanatlarında ağır/orta süvari olarak çarpıştılar hem de Akka ve Kudüs gibi kilit kuşatma ve garnizon komutanlıklarını üstlendiler.',
  },
  {
    id: 'arabs',
    label: 'Arap İktâ Süvarileri ve Bedevî Yardımcı Atlıları',
    shareText: '%15 – %20',
    percent: 18,
    color: '#d99b4e',
    commandNote:
      'Mısır/Suriye yerel ecnâdı (Münkızoğulları), Askalânlı Kinâniyye ve Benî Tayy / Cüzâm atlıları',
    detail:
      'Mısır ve Suriye iktâ süvarileri ile Ürdün–Havran–Sina kuşağı bedevî birlikleri. Hıttîn’de yan kanat perdelemesi, pınar ve su kuyularının tutulması ile çemberden sızmaya çalışanların takibinde görev aldılar.',
  },
  {
    id: 'mutavvia',
    label: 'Şehirli Gönüllüler (Mutavvia), Lağımcılar ve Su Katarı',
    shareText: '%10 – %12',
    percent: 12,
    color: '#d9485f',
    commandNote:
      '4 Temmuz sabahı kuru çalıları ateşe veren öncüler, Halep/Musul lağımcıları ve 70+ develik su kolu',
    detail:
      'Şam, Kahire, Halep ve Musul’dan katılan yaya okçular ve sûfî/fakih gönüllüler (mutavvia), Kudüs surlarında gedik açan istihkâmcılar ve Taberiye Gölü’nden muharebe hattına aralıksız su tulumu taşıyan lojistik kol.',
  },
];

export const hittinChronicleStages: ChronicleStage[] = [
  {
    id: 'stage-4a-hattin',
    stageBadge: 'KARŞILAŞTIRMA 4A · 4 TEMMUZ 1187 CUMARTESİ (KURÛN HITTÎN)',
    stageTitle: 'Çalı Yangını, Kırmızı Çadırın Çöküşü ve Buzlu Şerbet',
    stageLead:
      'Aynı kavurucu Cumartesi öğleden sonrasını bir yanda Sultan’ın yanındaki 17 yaşındaki oğlu el-Melikü’l-Efdal, diğer yanda çemberin içindeki Latin görgü tanığı (Libellus) satır satır nasıl kaydetti?',
    bannerVisual: hittinHeroVisuals.battleHattin4A,
    east: {
      pill: 'İSLAM CEPHESİ GÖRGÜ TANIKLIĞI',
      date: '24/25 Rebîülâhir 583 · 4 Temmuz 1187',
      titleHtml: 'İbnü’l-Esîr (<em>el-Kâmil</em>) &amp; İbn Şeddâd',
      authorDesc: 'el-Melikü’l-Efdal’in meydan tanıklığı ve aynı akşam çadırdaki şerbet hukuku.',
      origLang: 'ar',
      origScript:
        '«وَكَانَ بَعْضُ الْمُتَطَوِّعَةِ قَدْ أَلْقَى فِي تِلْكَ الْأَرْضِ نَارًا، وَكَانَ الْحَشِيشُ كَثِيرًا فَاحْتَرَقَ، وَكَانَتِ الرِّيحُ قَدْ هَبَّتْ فَحَمَلَتْ حَرَّ النَّارِ وَالدُّخَانَ إِلَيْهِمْ، فَاجْتَمَعَ عَلَيْهِمُ الْعَطَشُ، وَحَرُّ الزَّمَانِ، وَحَرُّ النَّارِ وَالدُّخَانِ، وَحَرُّ الْقِتَالِ... فَنَظَرْتُ إِلَيْهِ وَقَدْ عَلَتْهُ كَآبَةٌ وَارْبَدَّ لَوْنُهُ وَأَمْسَكَ بِلِحْيَتِهِ وَتَقَدَّمَ وَهُوَ يَصِيحُ: "كَذَبَ الشَّيْطَانُ!"... فَالْتَفَتَ وَالِدِي إِلَيَّ وَقَالَ: "اسْكُتْ! مَا نَهْزِمُهُمْ حَتَّى تَسْقُطَ تِلْكَ الْخَيْمَةُ!" قَالَ: فَهُوَ يَقُولُ لِي ذَلِكَ وَإِذَا الْخَيْمَةُ قَدْ سَقَطَتْ، فَنَزَلَ السُّلْطَانُ وَسَجَدَ شُكْرًا لِلَّهِ تَعَالَى وَبَكَى مِنْ فَرَحِهِ.» — (ابن شداد): «قُلْ لِلْمَلِكِ: أَنْتَ الَّذِي سَقَيْتَهُ، وَأَمَّا أَنَا فَمَا سَقَيْتُهُ!»',
      translationParagraphsHtml: [
        '«Gönüllülerden (<em>mutavvia</em>) biri o arazide ateş yakmıştı; kuru ot çok olduğundan tutuşup yandı. Rüzgâr da esince ateşin hararetini ve dumanı onların üzerine taşıdı; böylece üzerlerinde <mark class="hl-east">susuzluk, mevsimin sıcağı, ateşin ve dumanın harareti ile çarpışmanın harareti</mark> birleşti... [Oğlu el-Efdal anlatıyor]: Frenk kralı tepeye çıktığında üzerimize öyle korkunç bir hücum yaptılar ki bizimkileri babamın yanına kadar sürdüler. Babama baktım; yüzü kül gibi bozarmıştı. Sakalını kavradı ve <mark class="hl-east">"Şeytan yalan söyledi!" (Kezebe’ş-Şeytân!)</mark> diye haykırarak ileri atıldı.»',
        '«Frenkler tepeye geri sürülünce sevincimden iki kez <em>"Onları yendik!"</em> diye bağırdım. Babam bana döndü ve: <mark class="hl-east">"Sus! Şu [kırmızı] çadır yıkılmadıkça onları yenmiş olmayız!"</mark> dedi. Daha sözünü bitirmeden çadır devrildi; Sultan derhal atından indi, şükür secdesine kapandı ve sevincinden ağladı.» — <em>[Aynı akşam çadırda Kral Guy buzlu gül şerbetini Renaud’ya uzatınca, İbn Şeddâd]:</em> «Selahaddin tercümana buyurdu: <strong>"Krala söyle: Ona suyu sen içirdin, ben içirmedim [benim emânım altında değildir]!"</strong>»',
      ],
    },
    west: {
      pill: 'HAÇLI CEPHESİ GÖRGÜ TANIĞI',
      date: 'Bölüm XI–XII · 3–4 Temmuz 1187',
      titleHtml: 'Anonim Tanık · <em>Libellus</em> &amp; <em>Epistola Terrici</em>',
      authorDesc: 'De Expugnatione Terrae Sanctae per Saladinum Libellus (Bizzat kuşatmayı yaşayan Latin yazarı).',
      origLang: 'la',
      origScript:
        '«Castra metati sunt ergo cum dolore et angustia et siti in sicca mansione, ubi magis est effusus sanguis nocte illa quam aqua... Igitur filii Esau circumdantes populum Dei, et incendentes desertum circa eum, atque tota nocte calore ignis, fumo, sagittis, vexatos fame et siti vexabant... Irruerunt autem multitudo paganorum super pedites atque per praecipitium praerupti montis, in cuius cacumine iamdudum fugerant, praecipitaverunt... Capta est crux et rex et magister militiae Templi... Heu mihi! Dicam pollutis labiis qualiter pretiosum lignum Dominicum nostrae redemptionis tactum sit damnatis manibus?»',
      translationParagraphsHtml: [
        '«Böylece acı, ıstırap ve susuzluk içinde kupkuru bir konak yerinde (<em>sicca mansione</em> — Meskene) ordugâh kurdular; <mark class="hl-west">o gece orada sudan çok kan döküldü.</mark> Esav’ın oğulları [Müslümanlar] Tanrı’nın halkını çepeçevre kuşatarak etraflarındaki kırları ateşe verdiler (<em>incendentes desertum</em>) ve zaten açlık ile susuzluktan bitkin düşmüş olanları <mark class="hl-west">ateşin sıcağıyla, dumanla (calore ignis, fumo) ve oklarla</mark> hırpaladılar.»',
        '«Kalabalık, çoktan sarp dağın zirvesine kaçmış olan piyadelerin üzerine çullandı; Mesih’in tevazu Haç’ını terk edip yüksek tepelere sığınanları uçurumdan aşağı yuvarladı... <mark class="hl-west">Haç ele geçirildi; Kral ve Tapınak Üstadı da tutsak edildi.</mark> Yazıklar olsun bana! Kurtuluşumuzun paha biçilmez Rabbani Ağacı’na [Gerçek Haç’a] nasıl dokunulduğunu kirli dudaklarımla nasıl anlatayım?»',
      ],
    },
    synthesisBridge: {
      title: 'Çapraz Okuma Sentezi (4A): Fiziksel Çöküşün İki Dildeki Tam Çakışması',
      bodyHtml:
        '1098 Antakya’sında iki kaynak birbirine zıt dünyalar anlatırken ("beyaz atlı azizler" vs. "savaşmadan çekilen emîrler"), 1187 Hıttîn’de Arapça ve Latince metinler <strong>birebir aynı dört fiziksel unsuru</strong> doğrular: kurumuş konak yeri (<em>sicca mansione</em> / Meskene), rüzgârla taşınan çalı yangını ve duman (<em>calore ignis, fumo</em>), piyadenin şövalyeleri terk edip kayalıklara kopuşu ve Gerçek Haç ile kırmızı kraliyet çadırının düşüşü.',
    },
  },
  {
    id: 'stage-4b-jerusalem',
    stageBadge: 'KARŞILAŞTIRMA 4B · 2 EKİM 1187 EMÂN TESLİMİ ↔ 15 TEMMUZ 1099 KATLİAMI',
    stageTitle: '200.000 Dinarlık Kilise Hazinesi ve "Ahde Vefa" İmtihanı',
    stageLead:
      'Kudüs teslim olurken kâtibi İmâdüddin el-İsfahânî Patrik Heraklius’un götürdüğü servete el koymayı önerdiğinde Selahaddin ne cevap verdi; 88 yıl önceki 1099 Haçlı girişiyle fark neydi?',
    bannerVisual: hittinHeroVisuals.jerusalemKeys4B,
    east: {
      pill: 'EYYÛBÎ DİVAN TANIĞI',
      date: '27 Receb 583 / 2 Ekim 1187 · s. 131–132',
      titleHtml: 'İmâdüddin el-İsfahânî · <em>el-Fethu’l-Kussî</em>',
      authorDesc: 'Selahaddin’in özel inşâ kâtibi; bizzat Sultan’a yaptığı teklifi ve aldığı cevabı yazar.',
      origLang: 'ar',
      origScript:
        '«وَجَمَعَ الْبَطْرَكُ الْكَبِيرُ كُلَّ مَا كَانَ عَلَى الْقَبْرِ مِنْ صَفَائِحِ التِّبْرِ وَمَصُوغَاتِ الْعَسْجَدِ وَمَصْنُوعَاتِ اللُّجَيْنِ... فَقُلْتُ لِلسُّلْطَانِ: هَذِهِ أَمْوَالٌ وَافِرَةٌ... تَبْلُغُ مِائَتَيْ أَلْفِ دِينَارٍ، وَالْأَمَانُ عَلَى أَمْوَالِهِمْ لَا أَمْوَالِ الْكَنَائِسِ وَالْأَدْيَارِ، فَلَا تَتْرُكْهَا فِي أَيْدِي هَؤُلَاءِ الْفُجَّارِ! فَقَالَ: إِذَا تَأَوَّلْنَا عَلَيْهِمْ نَسَبُونَا إِلَى الْغَدْرِ، وَهُمْ جَاهِلُونَ بِسِرِّ هَذَا الْأَمْرِ، فَنَحْنُ نُجْرِيهِمْ عَلَى ظَاهِرِ الْأَمَانِ، وَلَا نَتْرُكُهُمْ يَرْمُونَ أَهْلَ الْإِيمَانِ بِنَكْثِ الْأَيْمَانِ، بَلْ يَتَحَدَّثُونَ بِمَا أَفَضْنَاهُ مِنَ الْإِحْسَانِ.»',
      translationParagraphsHtml: [
        '«Büyük Patrik [Heraklius], Kutsal Kabir’in üzerindeki tüm altın levhaları, işlenmiş altın takıları ve gümüş sanat eserlerini topladı. Sultan’a dedim ki: <mark class="hl-east">"Bunlar 200.000 dinara ulaşan muazzam servetlerdir; verdiğimiz emân onların şahsi mallarınadır, kilise ve manastırların mallarına değil! Bunları ellerinde bırakma!"</mark>»',
        '«Sultan şöyle cevap verdi: <mark class="hl-east">"Eğer antlaşmayı onlara karşı böyle kelime oyunuyla yorumlarsak (tevil edersek) bizi ahde vefasızlıkla (gadr ile) suçlarlar; zira onlar bu hukuki inceliği bilmezler. Biz onlara emânın açık anlamına göre muamele edeceğiz; müminleri yemin bozmakla itham etmelerine fırsat vermeyeceğiz, bilakis kendilerine gösterdiğimiz ihsanı konuşmalarını sağlayacağız!"</mark>» <em>(Patrik kendi başı için yalnızca 10 dinar ödeyip 200.000 dinarlık hazineyle Eyyûbî muhafızları eşliğinde Sûr’a güvenle gitti.)</em>',
      ],
    },
    west: {
      pill: 'FRANK KAYDI & 1099 KONTRASTI',
      date: '15 Temmuz 1099 ↔ 2 Ekim 1187',
      titleHtml: '<em>Ernoul Kroniği</em> ↔ 1099 <em>Raymond d’Aguilers &amp; Gesta</em>',
      authorDesc: 'Balian’ın silahtarı Ernoul’un 1187 tanıklığı ile 1099 Haçlı görgü tanıklarının Mescid-i Aksâ kaydı.',
      origLang: 'la',
      origScript:
        '«[1099 · Raymond d’Aguilers]: In templo et porticu Salomonis equitabatur in sanguine usque ad genua, et usque ad frenos equorum... [Gesta Francorum, X.38]: Tancredus dedit eis suum uexillum... Sed nostri summo mane irruerunt in templum, et decollauerunt masculos et feminas...»',
      translationParagraphsHtml: [
        '«<strong>[15 Temmuz 1099 Haçlı Kaydı — Raymond d’Aguilers &amp; Gesta Francorum]:</strong> Süleyman Mabedi’nde [Mescid-i Aksâ] ve revaklarında <mark class="hl-west">dizlere ve atların gemlerine kadar kan içinde at sürülüyordu.</mark> Çatıya sığınanlara Tankred kendi güvenlik sancağını [emân] vermişti; fakat sabah erkenden adamlarımız mabede dalıp <mark class="hl-west">kadın-erkek hepsinin başını kesti</mark> (Tankred buna çok öfkelendiyse de katliam durmadı; İbnü’l-Arabî Aksâ’da 3.000 kişinin öldürüldüğünü yazar).»',
        '«<strong>[2 Ekim 1187 Frank Kaydı — Ernoul Kroniği]:</strong> Selahaddin şehrin sokaklarına ve kapılarına seçkin muhafızlar dikti ki hiçbir Hristiyan’a tek bir hakaret veya yağma yapılmasın. <mark class="hl-west">Kral el-Âdil 1.000 yoksul esiri Allah rızası için isteyip azat etti;</mark> ardından Sultan dul soylu kadınlara ve yaşlılara kapıları karşılıksız açtırıp kendi hazinesinden yol harçlığı dağıttı ve kafileleri Frank bölgesine kadar güvenle uğurlattı.»',
      ],
    },
    ransomTariffBox: {
      badge: '4 BİRİNCİL KAYNAĞIN ORTAK VERİSİ (İBN ŞEDDÂD · İMÂDÜDDİN · İBNÜ’L-ESÎR · ERNOUL)',
      title: '2 Ekim 1187 Kudüs Emân ve Fidye Tarifesi (40 Günlük Süre)',
      lead: 'Arapça ve Eski Fransızca görgü tanığı metinleri, teslim protokolündeki rakamları şaşırtıcı bir tutarlılıkla doğrular:',
      items: [
        { label: 'Erkek Başına Fidye', value: '10 Sûr Dinarı', note: 'Zengin–fakir eşit (Bezant)' },
        { label: 'Kadın Başına Fidye', value: '5 Sûr Dinarı', note: 'Şahsi taşınır mallarıyla çıkış hakkı' },
        { label: 'Çocuk Başına Fidye', value: '2 / 1 Dinar', note: 'İslam kaynakları: 2 · Ernoul (7 yaş altı): 1' },
        { label: '7.000 Yoksul İçin Toptan', value: '30.000 Dinar', note: 'II. Henry fonundan + ~3.000 karşılıksız azat' },
      ],
    },
    synthesisBridge: {
      title: 'Çapraz Okuma Sentezi (4B): Ortaçağ Koşulları İçinde "Verilen Söze Sadakat" Farkı',
      bodyHtml:
        '1187 Kudüs teslimi modern bir "koşulsuz serbest bırakma" değildi (nitekim zengin tarikatların fidyesini ödemediği ~15.000 kişi süre sonunda esir sayıldı); ancak 1099’da güvenlik sancağı verilmiş sığınmacıların bile doğrandığı tabloyla kıyaslandığında, <strong>verilen emân sözüne tek bir istisna ve yağma olmaksızın sadık kalınması</strong> bizzat Batı kroniklerinde Selahaddin’i efsaneleştiren tarihsel kırılma oldu.',
    },
  },
];

export const hittinActorFates: ActorFate[] = [
  {
    name: 'Renaud de Châtillon (Arnât)',
    role: 'Kerek ve Şevbek Lordu · Ateşkes ve Haremeyn İhlalcisi',
    stance: 'betrayer',
    badgeText: 'ŞAHİN KANAT / İNFAZ',
    calculation1098:
      'Yürürlükteki ateşkesleri tanımayarak 1183’te Kızıldeniz/Haremeyn kıyılarına korsan filosu indirdi; 1187 kışında Kahire–Şam kervanını vurup Kral Guy’ın iade emrini reddederek topyekûn savaşı tetikledi.',
    historicalPayback:
      '4 Temmuz 1187 akşamı Hıttîn’de esir alındı. Kral Guy’a ikram edilen buzlu suyun emânından yararlanmasına izin verilmedi; İslam’a geçme teklifini reddedince Haremeyn ve yemin ihlalleri nedeniyle bizzat Selahaddin’in kılıç darbesi ve muhafızların infazıyla çadır önünde başı vuruldu.',
    endDate: '4 Temmuz 1187 · Hıttîn',
  },
  {
    name: 'Gérard de Ridefort',
    role: 'Tapınak Şövalyeleri 10. Büyük Üstadı',
    stance: 'betrayer',
    badgeText: 'ŞAHİN KANAT / YEMİN BOZMA',
    calculation1098:
      '1 Mayıs Cresson felaketinin baş sorumlusu olmasına rağmen, 2 Temmuz gecesi tek başına Kral Guy’ın çadırına girip III. Raymond’u hainlikle suçlayarak bütün Haçlı ordusunu susuz platoya sürdürdü.',
    historicalPayback:
      'Hıttîn’de 200+ Tapınaklı idam edilirken Gazze/Askalân kalelerinin teslimi için sağ bırakılan tek üst düzey Tapınaklı oldu. Mayıs 1188’de bir daha Müslümanlara kılıç çekmeme yeminiyle tahliye edildi; yeminini bozup Akka kuşatmasına katılınca 4 Ekim 1189’da ikinci kez yakalandı ve derhal idam edildi.',
    endDate: '4 Ekim 1189 · Akka Önü',
  },
  {
    name: 'Trablus Kontu III. Raymond',
    role: 'Celile/Taberiye Prensi · Yerli Baronların Lideri',
    stance: 'loyal',
    badgeText: 'STRATEJİK AKIL / TRAJİK SON',
    calculation1098:
      'Kendi kenti Taberiye ve içeride kuşatılan eşi Kontes Eschiva tehlikede olmasına rağmen Saffûriye’de «Eşimi ve kalemi feda ederim ama bu orduyu susuzluğa sürmeyin!» diyerek tek doğru tavsiyeyi verdi; dinlenmedi.',
    historicalPayback:
      'Hıttîn’de Takıyyüddin’in açılan saflarından geçip Sûr üzerinden Trablus’a ulaştı (Selahaddin de eşi Eschiva’yı tüm malıyla güvenle kendisine gönderdi). Ancak hem krallığın yıkım acısı hem Lüzinyan hizbinin "sünnetli hain" iftiraları altında ezilerek birkaç ay içinde zatülcenpten öldü.',
    endDate: 'Eylül/Ekim 1187 · Trablus',
  },
  {
    name: 'Guy de Lusignan',
    role: 'Kudüs Kralı (1186–1192) · Kıbrıs Lordu (1192–1194)',
    stance: 'betrayer',
    badgeText: 'TAHT KAYBI → KIBRIS HANEDANI',
    calculation1098:
      'Korkaklık suçlamasından ürkerek meclis kararını gece yarısı tek başına bozdu ve krallığın tüm garnizonlarını susuz Hıttîn tuzağına götürdü.',
    historicalPayback:
      'Mayıs/Haziran 1188’de Şam esaretinden bırakılınca din adamlarına yeminini bozdurup Ağustos 1189’da Akka’yı kuşattı. 1190’da eşi Kraliçe Sibylla ölünce Kudüs tacını kaybetti; Mayıs 1192’de I. Richard’dan Kıbrıs Adası’nı satın alarak 1489’a dek sürecek Lüzinyan Kıbrıs hanedanını kurdu.',
    endDate: 'Nisan/Mayıs 1194 · Lefkoşa',
  },
  {
    name: 'İbelinli Balian (Bâliyân bin Bîrzân)',
    role: 'İbelin, Nablus ve Kaymûn Lordu · Kudüs Savunma Komutanı',
    stance: 'loyal',
    badgeText: 'CAYDIRICI DİPLOMAT',
    calculation1098:
      'Hıttîn artçısından kurtulduktan sonra ailesini çıkarmak için Selahaddin’den "tek gecelik" izinle Kudüs’e girdi; halk savunma için yalvarınca durumunu dürüstçe Sultan’a bildirip özür diledi (Selahaddin hem anlayış gösterdi hem de Balian’ın eşi Maria Komnene’yi muhafızlarla Trablus’a uğurladı!).',
    historicalPayback:
      '2 Ekim 1187’de Kudüs’ü 1099 benzeri bir kan gölünden kurtaran emân teslimini müzakere etti; III. Haçlı Seferi sonunda 2 Eylül 1192 Yafa Antlaşması’nın baş aracılarından biri oldu ve Kaymûn Lordu olarak huzur içinde öldü.',
    endDate: 'ykl. 1193 · Kaymûn (Akka yakını)',
  },
  {
    name: 'Muzafferüddin Gökböri (Kök-Böri)',
    role: 'Erbil Türkmen Beyi · Selahaddin’in Eniştesi ve Sol Kanat Lideri',
    stance: 'loyal',
    badgeText: 'MUZAFFER KOMUTAN & VAKIF İNSANI',
    calculation1098:
      'Selahaddin’in kız kardeşi Rabi‘a Hatun’un eşi olarak 1 Mayıs Cresson zaferini kazandı ve 4 Temmuz Hıttîn’de sarsılmaz sol kanadı (meysere) yöneterek Haçlı yürüyüş kolunu mıhladı.',
    historicalPayback:
      '1190’da atalarının mülkü Erbil’e geçerek tam 43 yıl hüküm sürdü. Bugün hâlâ ayakta duran Çoli Minaresi’ni, âmâlar ve müzmin hastalar için dört bakım evini, dullar evini, yetimhaneyi ve maaşlı sütanneli terk edilmiş bebekler yuvasını kurdu; ilk büyük kamusal Mevlid-i Nebî geleneğini kurumlaştırdı.',
    endDate: 'Haziran 1233 (79 yaşında) · Erbil',
  },
];

export const thirdCrusadeFronts = [
  {
    id: 'barbarossa-goksu',
    tabTitle: '1. Barbarossa ve Göksu Nehri',
    period: 'Mayıs – 10 Haziran 1190 (Anadolu Selçuklu Kalkanı)',
    summary:
      'Kudüs’ün düşüşü üzerine Kutsal Roma İmparatoru I. Friedrich Barbarossa ~15.000–20.000 kişilik disiplinli Alman ordusuyla Anadolu’ya girdi. Türkiye Selçuklu Sultanı II. Kılıç Arslan ve oğlu Kutbüddin Melikşah’ın Türkmen atlı okçuları Alman kolunu yıpratma ve açlık çemberine aldı; Konya’yı zorlukla geçen Barbarossa, Toroslar’ı aşarken 10 Haziran 1190 Pazar günü Silifke yakınında hızlı ve soğuk akan Göksu (Saleph) Nehri’nde boğularak öldü.',
    keyFact:
      'Barbarossa’nın ölümüyle Alman ordusunun büyük kısmı dağıldı; Selahaddin’in kuzeyde en çok çekindiği kara tehdidi Suriye’ye ulaşamadan Anadolu’da eridi.',
  },
  {
    id: 'acre-double-siege',
    tabTitle: '2. 23 Aylık Akka Çifte Kuşatması',
    period: 'Ağustos 1189 – 12 Temmuz 1191 (Deniz Üstünlüğü Kırılması)',
    summary:
      'Tahliye yemini bozan Kral Guy’ın Akka’yı kuşatması ve Selahaddin’in de dışarıdan kuşatmacıları kuşatmasıyla ortaçağın en yıpratıcı siper savaşı başladı. Denizden Fransa Kralı II. Philippe Auguste ve (yolda Kıbrıs’ı zapt eden) İngiltere Kralı I. Richard’ın dev kuşatma makineleriyle gelmesi üzerine Bahâeddin Karakuş ve Seyfeddin el-Meştûb komutasındaki bitkin Akka garnizonu 12 Temmuz 1191’de teslim oldu.',
    keyFact:
      'İtalyan ve Kuzey Avrupa donanmaları deniz yolunu açık tuttuğu için Haçlılar kıyı şeridinde yeniden bir deniz köprübaşı kazandı; 20 Ağustos’ta I. Richard Tellü’l-Ayyâdiyye’de ~2.700–3.000 esiri idam ettirdi.',
  },
  {
    id: 'arsuf-beit-nuba',
    tabTitle: '3. Arsûf ve Beyt Nûbâ Çıkmazı',
    period: '7 Eylül 1191 – Temmuz 1192 (Kudüs Önünde Stratejik Duvar)',
    summary:
      'I. Richard filosunun korumasında kıyıdan güneye inerken yaya arbaletçilerle ağır şövalyeleri kenetleyerek Hıttîn hatasını tekrarlamadı ve 7 Eylül 1191 Arsûf Muharebesi’nde taktik saha üstünlüğü elde etti. Ancak Eyyûbî ordusu imha olmadı! Selahaddin derhal strateji değiştirerek Askalân surlarını bizzat yıktırdı, iç bölge ikmal kuyularını tahrip ettirdi ve ordusunu Kudüs tepelerinde diri tuttu.',
    keyFact:
      'I. Richard Kudüs’e 20 km mesafedeki Beyt Nûbâ’ya iki kez (Ocak ve Haziran–Temmuz 1192) sokulmasına rağmen, denizden kopuk bir iç kuşatmada Mısır-Suriye kuvvetlerince çevrileceğini görerek Kudüs’e saldıramadan geri döndü.',
  },
  {
    id: 'jaffa-diplomacy',
    tabTitle: '4. Yafa Çarpışması ve Diplomasi',
    period: 'Ağustos – 2 Eylül 1192 (Savaş Atı Jestinden Barış Masasına)',
    summary:
      'Temmuz 1192 sonunda Selahaddin ani bir baskınla Yafa aşağı şehrini aldı; 1 Ağustos’ta denizden yetişip suya atlayan I. Richard, 5 Ağustos şafağında mızrak-arbalet duvarıyla Eyyûbî süvari hücumunu durdurdu. Çarpışmanın ortasında atsız kalan Richard’a el-Melikü’l-Âdil’in cephe hattından iki Arap savaş atı hediye göndermesi, savaş hukuku ile perde arkası diplomasinin iç içe geçtiği simge an oldu.',
    keyFact:
      'İngiltere’de kardeşi John’un darbe hazırlığı ve Richard’ın ağır hastalığı ile Eyyûbî emîrlerinin 5 yıllık sefer yorgunluğu birleşince 1–2 Eylül 1192’de Yafa/Remle Barış Antlaşması imzalandı.',
  },
];

export const jaffaPhilologySpotlight = {
  badge: 'ÇAPRAZ KAYNAK FİLOLOJİK İMZASI · TAKVİM BULMACASI ÇÖZÜMÜ',
  title: '1–2 Eylül 1192 Yafa/Remle Antlaşması’nın Süresi Neden İki Kaynakta Farklı Yazıldı?',
  eastLabel: 'ARAPÇA DİVAN KAYDI (ŞÂFİÎ HUDNE HUKUKU)',
  eastSource: 'Bahâeddin İbn Şeddâd (Müzakere heyetinin bizzat üyesi)',
  eastText:
    'Ateşkesin 1 Eylül 1192 (21 Şâban 588) gününden geçerli olmak üzere tam «3 Yıl ve 8 Ay» (selâs sinîn ve semâniyet eşhur) süreyle bağlandığını yazar.',
  westLabel: 'LATİNCE / ANGLO-NORMAN KAYDI (SEFER TAKVİMİ)',
  westSource: 'Itinerarium Peregrinorum (VI.27) & Ambroise',
  westText:
    'Ateşkes süresini gelecek Paskalya Yortusu’ndan (28 Mart 1193) itibaren «3 Tam Yıl» (veya geleneksel hukuk aliterasyonuyla 3 yıl, 3 ay, 3 hafta, 3 gün) olarak kaydeder.',
  resolutionHtml:
    '<strong>Çapraz Çözümleme:</strong> Ortada bir çelişki değil, muazzam bir takvim uyumu vardır! <strong>1 Eylül 1192’den Paskalya / 1 Mayıs 1193 bahar sefer mevsimine kadar geçen 8 kış ayı + 3 tam yıl = Bahar 1196!</strong> Şâfiî İslam fıkhında <em>hudne</em> (ateşkes) imza anından itibaren kesintisiz ve kesin bir süre taşımak zorunda olduğundan Kâdî el-Fâzıl ve İbn Şeddâd metne <strong>3 yıl 8 ay</strong> yazmış; Batılı vakanüvisler ise kışın deniz seferi yapılamadığı için süreyi 1193 baharından başlatıp <strong>3 yıl</strong> olarak kaydetmiştir. İki ayrı takvim geleneği aynı bitiş gününde birleşir!',
};

export const hittinBalanceRows = [
  {
    dimension: 'Kudüs ve İç Toprak Egemenliği',
    crusadersVerdict: 'ANA HEDEF BAŞARISIZ',
    crusadersDetail:
      'Avrupa’nın üç büyük hükümdarı (Barbarossa, II. Philippe, I. Richard) seferber olmasına rağmen Kudüs geri alınamadı; yalnızca silahsız Hristiyan hacılara serbest ziyaret izni alındı ve Gerçek Haç iade edilmedi.',
    turksVerdict: 'KALICI STRATEJİK ZAFER',
    turksDetail:
      'Kudüs, el-Halîl, Nablus, Taberiye ve tüm iç Filistin Eyyûbî egemenliğinde kaldı (1229–1244 diplomatik parantezi dışında kalıcı İslam hâkimiyeti korundu).',
  },
  {
    dimension: 'Mısır–Suriye Kara Köprüsü ve Kıyı Şeridi',
    crusadersVerdict: 'DAR KIYI TUTUNMASI',
    crusadersDetail:
      'Sûr’dan Yafa’ya uzanan dar liman şeridi ve Kıbrıs Adası elde tutularak Akka merkezli "İkinci Kudüs Krallığı" 1291’e kadar bir asır daha yaşatıldı (Remle ve Lüdd vergileri yarı yarıya [münâsafa] paylaşıldı).',
    turksVerdict: 'JEOPOLİTİK KİLİT KORUNDU',
    turksDetail:
      'Askalân surlarının yıkılıp silahsızlandırılmasıyla Kahire–Şam kara bağlantısı ve Kızıldeniz/Haremeyn güvenliği kesintisiz güvenceye alındı.',
  },
  {
    dimension: 'Savaş Hukuku ve "Emân" İmtihanı',
    crusadersVerdict: 'AĞIR SİCİL KIRILMASI',
    crusadersDetail:
      '1099 Kudüs katliamının mirası üzerine 1191’de I. Richard’ın Akka’da teslim antlaşmalı ~2.700–3.000 esiri kılıçtan geçirtmesi diplomatik güveni derinden sarstı.',
    turksVerdict: 'SEÇİCİ SERTLİK, MUTLAK VEFA',
    turksDetail:
      'Meydanda tarikat şövalyelerine tavizsiz devlet infazı uygulanırken, Kudüs dahil emân verilen tüm şehirlerde can ve mal sözleşmesine tek istisna olmaksızın uyuldu.',
  },
  {
    dimension: 'Uzun Vadeli Kurumsal Miras',
    crusadersVerdict: 'DENİZ TİCARETİ & KIBRIS',
    crusadersDetail:
      'İç topraklara dayalı feodal kara krallığı bitti; yerini Venedik, Ceneviz ve Pisa donanmalarına bağımlı denizci ticaret kolonileri ile Kıbrıs üssü aldı.',
    turksVerdict: 'MEMLÛK DEVLETİNİN TEMELİ',
    turksDetail:
      'Selahaddin’in kurduğu Mısır–Suriye askeri-mali birliği ve Türk memlûk ocakları, 1250’de doğacak Memlûk Sultanlığı’nın (1260 Ayn Câlût ve 1291 Akka’nın fethi) doğrudan altyapısını oluşturdu.',
  },
];

export const hittinPrimarySources = [
  {
    name: 'Bahâeddin İbn Şeddâd (en-Nevâdirü’s-Sultâniyye)',
    side: 'Eyyûbî Kazaskeri ve Sırdaşı Görgü Tanığı (1145–1234)',
    desc: 'Selahaddin’in son beş yılında yanından ayrılmayan başkadısı; buzlu şerbet sahnesini, Akka ve Yafa muharebelerini, 1192 Antlaşması’nın "3 yıl 8 ay" kaydını ve vefatındaki 1 dinar + 47 dirhemlik terekeyi bizzat belgeler.',
  },
  {
    name: 'İmâdüddin el-İsfahânî (el-Fethu’l-Kussî fi’l-Fethi’l-Kudsî)',
    side: 'Selahaddin’in Özel İnşâ Kâtibi Görgü Tanığı (1125–1201)',
    desc: 'Hıttîn meydanını, tarikat şövalyelerinin infazını, Kudüs fidye muhasebesini ve Patrik Heraklius’un 200.000 dinarlık hazinesi üzerine Sultan ile aralarında geçen "emân" diyaloğunu ilk elden kaydeder.',
  },
  {
    name: 'İzzeddin İbnü’l-Esîr (el-Kâmil fi’t-Târîh & et-Târîhu’l-Bâhir)',
    side: 'Musul Zengî Perspektifli Büyük Tarihçi (1160–1233)',
    desc: 'Selahaddin’e mesafeli/eleştirel Musul bakışıyla Nûreddin–Selahaddin gerilimini ("şeker kamışı" meclisini) korurken, aynı zamanda el-Melikü’l-Efdal’in Hıttîn’deki ("Kezebe’ş-Şeytân!") tanıklığını en berrak şekilde aktarır.',
  },
  {
    name: 'Kâdî el-Fâzıl’ın Divan Mektupları (Kitâbü’r-Ravzateyn içinde)',
    side: 'Eyyûbî Başveziri ve Devlet Arşivi (1135–1200)',
    desc: 'Mısır’ın vergi-iktâ dökümlerini (1181 yoklaması), 1187 ordusunun mali sınırlarını ve Bağdat Halifeliği’ne gönderilen resmî fetihnâmeleri içeren birincil bürokratik belgeler.',
  },
  {
    name: 'De Expugnatione Terrae Sanctae per Saladinum Libellus',
    side: 'Haçlı / Latin Görgü Tanığı (1187)',
    desc: 'Hem Meskene–Hıttîn susuzluk ve çalı yangını cehennemini hem de Kudüs kuşatmasını içeriden yaşamış isimsiz bir Latin katılımcının sarsıcı güncesi.',
  },
  {
    name: 'Epistola Terrici (Tapınak Preseptörü Terricus’un Mektubu)',
    side: 'Hıttîn’den Sağ Kurtulan Tapınak Yetkilisi (Temmuz/Ağustos 1187)',
    desc: 'Felaketten hemen sonra Avrupa krallarına gönderilen acil durum raporu; dağlarda sıkışan Haçlı ordusunu, Gerçek Haç’ın kaybını ve Sûr dışında tüm kentlerin düştüğünü bildirir.',
  },
  {
    name: 'Ernoul Kroniği & Estoire d’Eracles (Eski Fransızca)',
    side: 'İbelinli Balian’ın Silahtarı / Yerli Baron Çevresi',
    desc: 'Cresson öncesi elçilik heyetinde bulunan ve Kudüs’ü teslim eden Balian’ın yakın halkasına dayanan kaynak; Saffûriye savaş meclisi ile Kudüs içi müzakerelerin en canlı Frank tanıklığıdır.',
  },
  {
    name: 'Itinerarium Peregrinorum et Gesta Regis Ricardi & Ambroise',
    side: 'III. Haçlı Seferi Anglo-Norman Görgü Tanıkları (1191–1192)',
    desc: 'I. Richard’ın ordusundaki din adamı ve ozanların kaleminden Akka kuşatmasını, Tellü’l-Ayyâdiyye infazlarını, Arsûf yürüyüş düzenini, Beyt Nûbâ çıkmazını ve 1192 barışını anlatır.',
  },
];

export const hittinModernRefsHtml =
  '<strong>Başlıca Modern Akademik Başvuru Eserleri:</strong> Benjamin Z. Kedar (<em>"The Battle of Hattin Revisited"</em>, 1992; <em>"The Jerusalem Massacre of July 1099"</em>, 2004), Malcolm C. Lyons &amp; D. E. P. Jackson (<em>Saladin: The Politics of the Holy War</em>), Ramazan Şeşen (<em>Salâhaddîn Devrinde Eyyûbîler Devleti</em>, TDV İA <em>"Selâhaddîn-i Eyyûbî"</em>), Vladimir Minorsky (<em>Studies in Caucasian History: Prehistory of Saladin</em>, 1953), H. A. R. Gibb (<em>The Life of Saladin</em>), Yaacov Lev (<em>Saladin in Egypt</em>), Anne-Marie Eddé (<em>Saladin</em>), Bernard Hamilton (<em>The Leper King and His Heirs</em>), Peter W. Edbury (<em>The Conquest of Jerusalem and the Third Crusade</em>) ve Işın Demirkent.';
