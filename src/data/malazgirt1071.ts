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
  { id: 'sahne-harita', shortLabel: '01 · Ani’den Rahve’ye' },
  { id: 'sahne-propaganda', shortLabel: '02 · Efsane & Kritiği' },
  { id: 'sahne-ordu', shortLabel: '03 · Alp Arslan & Ordu' },
  { id: 'sahne-kopru-kapisi', shortLabel: '04 · Savaş & Çadır' },
  { id: 'sahne-ihanet', shortLabel: '05 · Altı Aktörün Sonu' },
  { id: 'sahne-bilanco', shortLabel: '06 · Anadolu & Terazi' },
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
      'Van Gölü Kuzey Havzası ve Süphan Dağı (4.058 m): Kuzeybatı Eteğinde 26 Ağustos 1071 Malazgirt (er-Rahve) Meydan Muharebesi Coğrafyası',
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
      '26 Ağustos 1071 Malazgirt Meydan Muharebesi ve Yaralı İmparator IV. Romanos Diogenes’in Selçuklu Süvarilerince Esir Alınışı',
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
    { text: '8 BİRİNCİL VEKÂYİNÂME ÇAPRAZ OKUMASI', variant: 'west' as const },
    { text: 'GÖRGÜ TANIĞI ATTALEİATES & BAĞDAT DİVAN KAYITLARI', variant: 'turquoise' as const },
  ],
  titleMain: 'Anadolu Kapısında İki İmparatorluk:',
  titleAccent: '1071 Malazgirt, Çadırdaki Antlaşma ve Siyasi Dönüşüm',
  leadHtml:
    'Savaş meydanında bizzat bulunan Bizans yüksek askeri yargıcı <strong>Mihail Attaleiates</strong> neden Sultan Alp Arslan’ın esir imparatora muamelesini <em>«Tanrı’nın adil ve tarafsız hükmü»</em> diye övdü; buna karşılık Konstantinopolis sarayı kendi imparatorunun gözlerine neden mil çekti? 1064 Ani ve Kafkasya diplomasisinden <strong>26 Ağustos 1071 Cuma</strong> akşamına, çadırdaki esaret protokolünden 1075 İznik başkentine uzanan kırılmayı iki cephenin özgün metinleriyle yan yana okuyun.',
  visual: malazgirtHeroVisuals.prologue,
  chronometer: [
    {
      year: '1048 Pasinler & 1053 Tasfiye',
      desc: 'İlk Selçuklu–Bizans-Gürcü meydan savaşı; Monomakhos’un 50.000 kişilik doğu sınır milisini dağıtması',
    },
    {
      year: 'Temmuz – 16 Ağustos 1064',
      desc: 'Alp Arslan’ın Ahılkelek ve «fethedilemez» Ani’yi alışı; Gürcü Kralı IV. Bagrat ile diplomatik denge',
    },
    {
      year: 'Nisan – Mayıs 1071',
      desc: 'Halep önünden Mısır seferini yarıda kesen Alp Arslan’ın kabarmış Fırat’ı geçerek doğuya sürat yürüyüşü',
    },
    {
      year: '26 Ağustos 1071 Cuma',
      desc: 'Rahve Ovası’nda meydan muharebesi, Romanos Diogenes’in esareti ve 8 günlük çadır antlaşması',
      active: true,
    },
  ],
};

export const malazgirtCities: CityMarker[] = [
  {
    id: 'pasinler',
    name: 'Pasinler (Kaputru)',
    historicalName: '18 Eylül 1048 Muharebesi · Liparit Esareti',
    coords: [41.674, 39.979],
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
    name: 'Hoy (Khoy)',
    historicalName: 'Temmuz 1071 Selçuklu İkmal & Toplanma Üssü',
    coords: [44.955, 38.55],
    faction: 'seljuk',
  },
  {
    id: 'halep',
    name: 'Halep',
    historicalName: 'Nisan 1071 Kuşatması · Mısır Yolundan Dönüş',
    coords: [37.161, 36.199],
    faction: 'seljuk',
  },
  {
    id: 'urfa',
    name: 'Urfa (er-Ruhâ) & Fırat',
    historicalName: 'Mayıs 1071 Kabarmış Fırat’tan Sürat Geçişi',
    coords: [38.796, 37.167],
    faction: 'contested',
  },
  {
    id: 'silvan',
    name: 'Meyyâfârikîn (Silvan)',
    historicalName: 'Mervânî Emirliği · 10.000 Yardımcı Muharip',
    coords: [41.008, 38.137],
    faction: 'seljuk',
  },
  {
    id: 'ahlat',
    name: 'Ahlat (Hılât)',
    historicalName: 'Selçuklu Üssü · Tarkhaniotes & Roussel Ayrılışı',
    coords: [42.495, 38.753],
    faction: 'seljuk',
  },
  {
    id: 'malazgirt',
    name: 'Malazgirt (Manzikert)',
    historicalName: 'Siyah Bazalt Çift Surlu Kilit Kale',
    coords: [42.535, 39.146],
    faction: 'contested',
  },
  {
    id: 'rahve',
    name: 'Rahve Ovası (Süphan Eteği)',
    historicalName: '26 Ağustos 1071 Cuma Meydan Muharebesi',
    coords: [42.63, 39.045],
    faction: 'contested',
  },
  {
    id: 'erzurum',
    name: 'Erzurum (Theodosiopolis)',
    historicalName: 'Haziran 1071 Romanos İleri Harekât Üssü',
    coords: [41.276, 39.905],
    faction: 'imperial',
  },
  {
    id: 'sivas',
    name: 'Sivas (Sebasteia)',
    historicalName: 'Mayıs 1071 · Ermeni Prenslerle Gerilim',
    coords: [37.015, 39.748],
    faction: 'imperial',
  },
  {
    id: 'malatya',
    name: 'Malatya (Melitene)',
    historicalName: 'Tarkhaniotes & Roussel’in Savaşa Dönmeyip Çekilişi',
    coords: [38.355, 38.355],
    faction: 'imperial',
  },
  {
    id: 'konstantinopolis',
    name: 'Konstantinopolis',
    historicalName: '13 Mart 1071 Çıkış · Ekim 1071 Dukas Darbesi',
    coords: [28.978, 41.008],
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
    coords: [29.721, 40.429],
    faction: 'seljuk',
  },
];

export const malazgirtRoutes: RouteLine[] = [
  {
    id: 'caucasus-1064',
    label: '1064 Ahılkelek–Ani Seferi',
    color: '#2cc5b3',
    coordinates: [
      [44.955, 38.55],
      [45.412, 39.209],
      [43.486, 41.405],
      [43.572, 40.507],
    ],
  },
  {
    id: 'alparslan-return-1071',
    label: 'Mayıs–Ağustos 1071 Alp Arslan Sürat Yürüyüşü',
    color: '#2cc5b3',
    coordinates: [
      [37.161, 36.199],
      [38.796, 37.167],
      [41.008, 38.137],
      [43.13, 36.8],
      [44.955, 38.55],
      [42.495, 38.753],
      [42.63, 39.045],
    ],
  },
  {
    id: 'romanos-march-1071',
    label: 'Mart–Ağustos 1071 Romanos Diogenes Seferi',
    color: '#d9485f',
    coordinates: [
      [28.978, 41.008],
      [30.525, 39.766],
      [37.015, 39.748],
      [41.276, 39.905],
      [42.535, 39.146],
      [42.63, 39.045],
    ],
  },
  {
    id: 'tarchaneiotes-flight',
    label: 'Tarkhaniotes & Roussel’in Ahlat’tan Çekilişi',
    color: '#a78bfa',
    dashed: true,
    coordinates: [
      [42.535, 39.146],
      [42.495, 38.753],
      [41.491, 38.734],
      [38.355, 38.355],
    ],
  },
  {
    id: 'captivity-and-1075',
    label: '1072 Kütahya–Kınalıada & 1075 İznik Hattı',
    color: '#d99b4e',
    dashed: true,
    coordinates: [
      [42.535, 39.146],
      [41.276, 39.905],
      [36.554, 40.314],
      [29.983, 39.42],
      [29.721, 40.429],
      [29.05, 40.91],
    ],
  },
];

export const malazgirtLegendItems = [
  { color: '#2cc5b3', label: 'Alp Arslan & Selçuklu Harekâtı' },
  { color: '#d9485f', label: 'IV. Romanos Diogenes Seferi' },
  { color: '#a78bfa', label: 'Kafkasya Dengesi & Ahlat Çekilişi' },
  { color: '#d99b4e', label: '1072 Esaret Dönüşü & 1075 İznik' },
];

export const malazgirtRingHighlights = [
  { id: 'ani-1064-ring', coords: [43.572, 40.507] as [number, number], color: '#2cc5b3' },
  { id: 'rahve-battle-ring', coords: [42.63, 39.045] as [number, number], color: '#d99b4e' },
  { id: 'iznik-1075-ring', coords: [29.721, 40.429] as [number, number], color: '#2cc5b3' },
];

export const malazgirtMapSteps: MapStep[] = [
  {
    id: 'step-1a-caucasus-ani',
    stepLabel: 'SAHNE 1A · KAFKASYA KİLİDİ VE ANİ',
    dateBadge: '1048 – 1068 (Merkez: 16 Ağustos 1064)',
    locationBadge: 'Pasinler · Ahılkelek · Ani · Kutaisi',
    title: 'Malazgirt’ten Önce Kuzey Kanadı Nasıl Kilitlendi? 1064 Ahılkelek–Ani ve Gürcü Diplomasisi',
    narrative: [
      '1071 Malazgirt’i tek günlük bir mucize sanmak, yirmi yıllık kuzey hazırlığını gözden kaçırır. 1048 Pasinler’de Bizans safında dövüşürken esir düşen Gürcü komutan <strong>Liparit Bagvaşi</strong>’yi Tuğrul Bey’in fidyesiz serbest bırakmasıyla başlayan temas, Sultan Alp Arslan’ın <strong>Temmuz–Ağustos 1064 Kafkasya seferi</strong> ile stratejik bir kilide dönüştü.',
      'Alp Arslan önce Gürcistan’ın kilit kalesi <strong>Ahılkelek</strong>’i, ardından üç yanı sarp Arpaçay kanyonlarıyla çevrili <em>«fethedilemez»</em> Bizans sınır metropolü <strong>Ani</strong>’yi 16 Ağustos 1064’te düşürdü. Hemen ardından Gürcü Kralı <strong>IV. Bagrat</strong> ile kurulan diplomatik antlaşma ve sıhriyet bağı sayesinde, 1048’in aksine <strong>1071 Malazgirt’te Gürcistan Krallığı Bizans safında savaşa girmedi</strong>; Selçuklu ordusunun kuzey kanadı tamamen güvende kaldı.',
    ],
    highlightNote: {
      source: 'Sıbt İbnü’l-Cevzî (Mir’âtü’z-Zamân, 456 h. Ani Fetihnâmesi Kaydı)',
      text: '«Üç tarafını sarp kayalıklar ve Arpaçay’ın sardığı, bin kiliseli Ani’nin burçları ahşap kuşatma kulesi ve lağımlarla sarsılınca, Doğu’da Bizans’ın en tahkimli sınır kilidi kırıldı; Halife el-Kâim, Alp Arslan’a "Ebü’l-Feth" (Fetihlerin Babası) unvanını gönderdi.»',
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
    stepLabel: 'SAHNE 1B · FIRAT’TAN SÜRATLİ DÖNÜŞ',
    dateBadge: 'Ocak – Mayıs 1071',
    locationBadge: 'Halep · Urfa (Nehrü’l-Cevz) · Meyyâfârikîn · Hoy',
    title: 'Asıl Hedef Fâtımî Kahire’si İken Gelen İstihbarat: Halep Kuşatması ve Kabarmış Fırat Geçişi',
    narrative: [
      '1071 ilkbaharında Sultan Alp Arslan’ın gündeminde Anadolu’yu fethetmek yoktu; Abbâsî Halifeliği adına Şiî Fâtımî Devleti’ni yıkmak için Suriye’ye inmiş, <strong>22 Mart 1071</strong>’de Mirdâsî Emîri Mahmûd bin Sâlih’in tuttuğu <strong>Halep</strong>’i kuşatmıştı.',
      'Tam Mahmûd itaat arz ettiğinde, Bizans İmparatoru <strong>IV. Romanos Diogenes</strong>’in dev bir orduyla Erzurum–Ahlat hattına yürüdüğü haberi ulaştı. Alp Arslan Mısır seferini derhal iptal etti; <strong>26 Nisan 1071</strong>’de Halep’ten ayrılıp bahar kar erimeleriyle taşmış <strong>Fırat Nehri</strong>’ni köprüsüz olarak at sırtında geçti. İbnü’l-Adîm’in kaydına göre bu yıldırım geçişte pek çok at ve ağırlık nehirde boğuldu, yorgun Horasan birlikleri dağıldı; Sultan çekirdek <strong>4.000 saray gulâmıyla</strong> Diyarbakır–Hoy hattına çıkıp çevreden taze kuvvet topladı.',
    ],
    highlightNote: {
      source: 'İbnü’l-Adîm (Zübdetü’l-Haleb, 463 h. Fırat Geçişi Kaydı)',
      text: '«Halep Kadısı Ebû Ca‘fer Sultan’a şöyle dedi: "Efendimiz, Yüce Allah’a hamdedin; zira bu Fırat Nehri’ni şimdiye dek memlûk (köle asker) olmayan hiçbir Türk geçmemişti, siz ise onu hür bir hükümdar olarak geçtiniz!"»',
      tone: 'east',
    },
    camera: {
      center: [40.6, 37.6],
      zoom: 5.9,
      pitch: 42,
      bearing: 16,
    },
    activeRouteIds: ['alparslan-return-1071'],
    focusCityIds: ['halep', 'urfa', 'silvan', 'hoy', 'ahlat'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1b-aleppo-citadel-1754.jpg'),
      badge: 'TARİHÎ BAKIR GRAVÜR · 1754',
      caption: 'Alp Arslan’ın Nisan 1071’de İtaat Altına Alıp Doğu Cephesine Döndüğü Halep Kalesi',
      credit: 'Alexander Drummond, Travels through Different Cities... as far as the Banks of the Euphrates (1754, Kamu Malı)',
      isEngraving: true,
      objectPosition: 'center 50%',
    },
  },
  {
    id: 'step-1c-romanos-erzurum',
    stepLabel: 'SAHNE 1C · ROMANOS’UN DOĞU YÜRÜYÜŞÜ',
    dateBadge: '13 Mart – Haziran 1071',
    locationBadge: 'Konstantinopolis · Sivas · Erzurum',
    title: 'İçeride Çatlak, Dışarıda İhtişam: Romanos Diogenes’in Çok Uluslu Ordusu ve Sınır Enkazı',
    narrative: [
      '1068’de dul İmparatoriçe Eudokia ile evlenerek tahta çıkan Kapadokyalı general <strong>IV. Romanos Diogenes</strong>, Türkmen akınlarını kökünden durdurmak ve başkentteki rakip <strong>Dukas hanedanı</strong> karşısında otoritesini perçinlemek için 13 Mart 1071’de Konstantinopolis’ten çıktı. Seferde bizzat bulunan askeri yargıç <strong>Mihail Attaleiates</strong>, daha Eskişehir (Krya Pege) civarında Alman paralı askerlerin (<em>Nemitzoi</em>) ayaklandığını ve orduda huzursuzluğun başladığını yazar.',
      'Üstelik Bizans kendi doğu kalkanını yirmi yıl önce kendi eliyle sökmüştü: İmparator <strong>IX. Konstantinos Monomakhos</strong> ykl. 1053’te <strong>50.000 kişilik İberya–Ermeni yerli sınır milisini</strong> vergi nakdi uğruna terhis etmiş; Kalkedoncu mezhep baskısı da Sivas ve Doğu Anadolu’daki Ermeni ile Süryani nüfusu Konstantinopolis’e küstürmüştü. Haziran’da <strong>Erzurum</strong>’a varan Romanos, askerlerine iki aylık erzak alıp ıssız sınır kuşağına girme emri verdi.',
    ],
    highlightNote: {
      source: 'Mihail Attaleiates (Historia, §18–20 · Sefer Görgü Tanığı)',
      text: '«İmparator, Alp Arslan’ın İran içlerine çekildiğini sanarak iki aylık erzak hazırlattı; oysa hem Sivas’ta Ermeni ahalisine sert davranarak yerel desteği yitirmiş, hem de ihtiyat komutasını kendisinden nefret eden Dukas ailesinin eline bırakmıştı.»',
      tone: 'west',
    },
    camera: {
      center: [36.4, 39.8],
      zoom: 5.5,
      pitch: 40,
      bearing: 8,
    },
    activeRouteIds: ['romanos-march-1071'],
    focusCityIds: ['konstantinopolis', 'sivas', 'erzurum', 'malazgirt'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1c-erzurum-lynch-1901.jpg'),
      badge: 'TARİHÎ FOTOĞRAF BELGESİ · 1901',
      caption: 'Romanos Diogenes’in Haziran 1071’de İki Aylık Sefer İkmali Yaptırdığı Erzurum (Theodosiopolis) Kalesi ve Palandöken Sırtları',
      credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Cilt II (1901, Kamu Malı)',
      objectPosition: 'center 48%',
    },
  },
  {
    id: 'step-1d-ahlat-split',
    stepLabel: 'SAHNE 1D · AHLAT ÖNÜNDE ÖLÜMCÜL HATA',
    dateBadge: 'Ağustos 1071 Başı – 23 Ağustos',
    locationBadge: 'Malazgirt · Ahlat · Malatya',
    title: 'Savaşı Daha Başlamadan Kaybettiren Karar: Bizans Ordusunun İkiye Bölünmesi ve Tarkhaniotes’in Çekilişi',
    narrative: [
      'Ağustos başında Malazgirt’e yaklaşan Romanos Diogenes, Sultan Alp Arslan’ın bizzat yakında olduğundan habersizdi; karşısında yalnızca küçük bir Selçuklu sınır garnizonu bulunduğunu düşündü. Malazgirt kalesini kısa bir kuşatmayla teslim alırken, ordusunun <strong>en seçkin ve en kalabalık yarısını</strong> <em>magistros</em> <strong>İoseph Tarkhaniotes</strong> ile Norman komutan <strong>Roussel de Bailleul</strong> emrinde erzak ve kuşatma için <strong>Ahlat</strong> üzerine gönderdi.',
      'Oysa Alp Arslan, Vezir Nizâmülmülk’ü hazineyle Hemedan’a yollamış; Meyyâfârikîn Mervânî coğrafyasından katılan <strong>10.000 Kürt/yerel muharip</strong>, Ahlat halkının desteği ve Türkmen süvarileriyle bizzat bölgeye inmişti! Türkmen öncü beyi <strong>Sunduk et-Türkî</strong>’nin baskısıyla karşılaşan Tarkhaniotes ve Roussel, imparatorun acil geri çağrı emrine uymak yerine <strong>hiç haber vermeden Muş–Malatya üzerinden batıya çekildi</strong>. Romanos bir anda Rahve Ovası’nda yarı yarıya erimiş bir orduyla yalnız kaldı.',
    ],
    highlightNote: {
      source: 'Mihail Attaleiates (Historia, §20.14–16 · Görgü Tanığı)',
      text: '«Türkleri sayıca pek az sanıp küçümseyen İmparator, kendi yanındaki kuvvetlerden çok daha seçkin ve savaşçı olan koca bir kolu Tarkhaniotes emrinde Ahlat’a ayırdı... Onlar ise korkuya kapılıp İmparator’u yüzüstü bırakarak Mezopotamya üzerinden Roma topraklarına sıvıştılar.»',
      tone: 'west',
    },
    camera: {
      center: [41.1, 38.85],
      zoom: 6.7,
      pitch: 46,
      bearing: -18,
    },
    activeRouteIds: ['romanos-march-1071', 'alparslan-return-1071', 'tarchaneiotes-flight'],
    focusCityIds: ['malazgirt', 'ahlat', 'silvan', 'malatya'],
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
    stepLabel: 'SAHNE 1E · ELÇİLİK VE UZ YEMİNİ',
    dateBadge: '24 – 25 Ağustos 1071',
    locationBadge: 'Malazgirt – Ahlat Koridoru (er-Rahve)',
    title: '«Sulh Ancak Rey’de Olur!» Cevabı, Basilakes’in Esareti ve Attaleiates’in Uz Yemini',
    narrative: [
      '24 Ağustos’ta Selçuklu atlı okçuları sahte çekilmeyle Bizans sol kanat komutanı <strong>Nikephoros Bryennios</strong>’u hırpaladı, fevrî biçimde ileri atılan <strong>Nikephoros Basilakes</strong>’i ise pusuya düşürüp esir aldı. Bizans kampındaki Türk soylu <strong>Uz (Oğuz)</strong> paralı askerlerinden küçük bir grubun karşıdaki soydaşlarına katılması üzerine orduda panik baş gösterdi; bizzat <strong>Mihail Attaleiates</strong> devreye girip kalan Uzlara kendi ata törelerine göre sadakat yemini ettirerek kampı bir arada tuttu.',
      '25 Ağustos’ta Sultan Alp Arslan, yanında bulunan Abbâsî Halifesi’nin elçisi <strong>Kâdî İbnü’l-Muhallebân</strong> ve Emîr <strong>Savtegin</strong> aracılığıyla onurlu bir barış teklif etti. Ancak Romanos bu adımı Selçuklu zayıflığına yorarak tarihe geçen şu kibirli cevabı verdi: <em>«Mütareke ancak Rey şehrinde olur; biz İsfahan’da kışlarız, atlarımız ise Hemedan’da!»</em> İbnü’l-Muhallebân ise sakin bir dille karşılık verdi: <em>«Atlarınızın Hemedan’da kışlayacağı doğrudur; ama sizin nerede kışlayacağınızı bilemem.»</em>',
    ],
    highlightNote: {
      source: 'İbnü’l-Ezrak el-Fârikî (Târîhu Meyyâfârikîn, 463 h. Elçilik Kaydı)',
      text: '«Rum Kralı İbnü’l-Muhallebân’a: "Bana söyle, İsfahan mı daha hoştur Hemedan mı? Biz İsfahan’da kışlarız, hayvanlarımız da Hemedan’da!" dedi. Elçi: "Hayvanlarınızın Hemedan’da kışlayacağı doğrudur; fakat sizin akıbetinizi bilemem" deyip Sultan’a döndü.»',
      tone: 'witness',
    },
    camera: {
      center: [42.58, 38.98],
      zoom: 8.6,
      pitch: 52,
      bearing: 28,
    },
    activeRouteIds: ['romanos-march-1071', 'alparslan-return-1071'],
    focusCityIds: ['malazgirt', 'rahve', 'ahlat'],
    visual: {
      src: withBase('/images/arsiv/malazgirt-1071/step1e-sipan-patnotz-lynch.jpg'),
      badge: 'TOPOGRAFİK SAHA FOTOĞRAFI · 1901',
      caption: 'Malazgirt–Patnos Yüksek Ovasından Süphan Dağı Görünümü: İki Ordunun Karşı Karşıya Geldiği Bozkır Eteği',
      credit: 'H. F. B. Lynch, Armenia: Travels and Studies, Fig. 116 (1901, Kamu Malı)',
      objectPosition: 'center 52%',
    },
  },
  {
    id: 'step-1f-friday-battle',
    stepLabel: 'SAHNE 1F · 26 AĞUSTOS CUMA KIRILMASI',
    dateBadge: '26 Ağustos 1071 Cuma (27 Zilkade 463)',
    locationBadge: 'Rahve Ovası (Malazgirt Güneydoğusu)',
    title: 'Cuma Hutbesi Vaktinde Beyaz Kefen, Akşamüstü Çevrilen Sancak ve Andronikos Dukas’ın İhaneti',
    narrative: [
      '26 Ağustos Cuma günü Hanefî fakihi <strong>Ebû Nasr el-Buhârî</strong>, İslam dünyasındaki bütün minberlerde mücahitlere dua edilen öğle sonrası hutbe vaktini önerdi. Alp Arslan beyaz elbisesini giyip kefenlik ıtır (<em>hanût</em>) süründü, atının kuyruğunu kendi eliyle bağladı ve <em>«Öldürülürsem kefenim budur!»</em> diyerek ordusunu <strong>hilâl ve dörtlü pusu (kemîn)</strong> düzenine soktu.',
      'Öğleden akşama dek Selçuklu merkezi kontrollü biçimde gerileyerek ağır zırhlı Bizans hatlarını Süphan eteklerindeki pusuların içine çekti. Alacakaranlık çökerken savunmasız kalan kampını düşünen Romanos, dönüş için imparatorluk sancağını geriye çevirdi. İşte o anda artçı ihtiyat komutanı <strong>Andronikos Dukas</strong>, önceden planladığı komployu devreye sokup <em>«İmparator yenildi!»</em> şayiasını yayarak ihtiyat tümenleriyle meydanı terk etti! Pusudan fırlayan Selçuklu süvarileri açıkta kalan merkezi kuşattı; elinden yaralanan Romanos’u <strong>Gevherâyin’in genç bir gulâmı</strong> esir aldı.',
    ],
    highlightNote: {
      source: 'Mihail Attaleiates (Historia, §20.22–23) & İbnü’l-Esîr (el-Kâmil, 463 h.)',
      text: '«İmparator sancağı geri çevirince, uzaktaki askerler onun bozulduğunu sandı; üvey oğlunun kuzeni Andronikos Dukas bu haberi kasten yayarak bütün ihtiyatla kaçıp gitti. Yapayalnız kalan İmparator kılıcını çekip vuruştu, elinden yaralandı ve esir düşerek Sultan’a götürüldü.»',
      tone: 'witness',
    },
    camera: {
      center: [42.61, 39.06],
      zoom: 9.4,
      pitch: 55,
      bearing: -24,
    },
    activeRouteIds: ['romanos-march-1071', 'alparslan-return-1071'],
    focusCityIds: ['malazgirt', 'rahve', 'ahlat'],
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
      source: 'İbnü’l-Esîr (el-Kâmil) & Mihail Attaleiates (Historia, §21.8–9)',
      text: '«Üç başpiskoposun yeminli kefaletine rağmen Kütahya’da bu işi bilmeyen birine İmparator’un gözlerini oydurdular... Haberi duyan Alp Arslan antlaşmanın bozulduğunu gördü ve emîrlerine: "Artık Anadolu’nun içine girin; fethettiğiniz yerler sizindir!" buyurdu.»',
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
    claimTag: 'GEÇ DÖNEM KRONİKLERİNDEKİ VE POPÜLER SÖYLEMDEKİ RAKAM',
    claimSource: 'Sıbt İbnü’l-Cevzî, İbnü’l-Esîr ve Urfalı Mateos’taki edebi kalabalık ifadeleri',
    claimQuote:
      '«Rum Kralı Armânûs; Rum, Rus, Oğuz, Kıpçak, Gürcü, Abhaz ve Franklardan oluşan, ağırlıkları ve hizmetkârlarıyla 200.000 ila 600.000 kişilik uçsuz bucaksız bir orduyla İslam beldelerini kökünden kazımaya çıktı...»',
    critiqueSource: 'Modern Askerî Lojistik Hesabı (John Haldon, Jean-Claude Cheynet, Carole Hillenbrand, Muharrem Kesik)',
    critiqueAnalysis:
      '11. yüzyıl Anadolu yol ağının ve Erzurum–Malazgirt hattındaki su/yem kaynaklarının 200.000 askeri (ve yüz binlerce hayvanı) beslemesi fiziksel olarak imkânsızdır; ayrıca Gürcistan Krallığı 1064 antlaşması nedeniyle sefere hiç katılmamıştır. Bizans’ın sefere çıkan toplam kuvveti ~40.000–50.000 civarındaydı. Tarkhaniotes ve Roussel en seçkin yarıyı alıp Ahlat’tan batıya çekilince, 26 Ağustos sabahı Rahve Ovası’nda ~20.000–25.000 Bizans askeri ile ~20.000–25.000 Selçuklu–Mervânî muharibi yaklaşık denk sayılarla çarpıştı.',
  },
  {
    id: 'uz-pecheneg-mass-defection',
    badge: 'VAKA 02 · SAVAŞ ORTASINDA TOPLU SAF DEĞİŞTİRME EFSANESİ',
    title: '«Uz ve Peçeneklerin Tamamı Savaşın Ortasında Alp Arslan Safına Geçti» İddiası',
    verdict: '50 Yıl Sonraki Abartı · Görgü Tanığı Yalanlıyor',
    claimTag: 'YARIM ASIR SONRAKİ ERMENİ KRONİĞİ VE GEÇ YAZMALAR',
    claimSource: 'Urfalı Mateos Vekâyinâmesi (ykl. 1120’ler–1130’lar, olaydan ~50–60 yıl sonra)',
    claimQuote:
      '«Muharebenin en kızgın anında İmparator’un sağ ve sol kanadındaki Uzlar ile Peçenekler birdenbire topluca Türklerin tarafına geçtiler ve Bizans ordusunu arkadan vurdular...»',
    critiqueSource: 'Savaş Meydanındaki Görgü Tanığı Mihail Attaleiates (Historia, §20.18–23)',
    critiqueAnalysis:
      'Kampta bizzat bulunan yüksek yargıç Attaleiates gerçeği gün gün kaydeder: Savaş gününden iki gün önce (24 Ağustos) Bryennios kolundaki küçük bir Uz bölüğü karşıdaki soydaşlarına katılmıştır. Bunun üzerine bizzat Attaleiates kalan Uzlara kendi ata töreleriyle sadakat yemini ettirmiş ve Uzların büyük çoğunluğu 26 Ağustos akşamına dek Bizans safında sadakatle savaşmıştır! Asıl çöküşü yaratan Türk paralı askerlerin ihaneti değil, Bizanslı aristokrat Andronikos Dukas’ın ihtiyat tümenlerini meydandan kaçırmasıdır.',
  },
  {
    id: 'footstool-boccaccio-myth',
    badge: 'VAKA 03 · RÖNESANS GÖRSEL PROPAGANDASI',
    title: '«Alp Arslan Esir İmparatoru Atına Binerken Binek Taşı Olarak Kullandı» Kurgusu',
    verdict: 'Sâsânî Klişesinin Rönesans Kopyası',
    claimTag: '14.–15. YÜZYIL BATI EDEBİYATI VE MİNYATÜR KURGUSU',
    claimSource: 'Giovanni Boccaccio, De casibus virorum illustrium (Kitap IX, Bölüm 9 · ykl. 1360)',
    claimQuote:
      '«Barbar hükümdar, koca Roma İmparatoru Romanos’u her atına binişinde ve inişinde yere yüzüstü yatırıp boynuna basarak binek taşı gibi kullandı...»',
    critiqueSource: 'Mihail Attaleiates (§20.24–25) & Ğarsü’n-Ni‘me es-Sâbî / Sıbt İbnü’l-Cevzî (463 h.)',
    critiqueAnalysis:
      'Hem Bağdat saray kaydı hem Bizans görgü tanığı bu efsaneyi kökünden çürütür: İlk karşılaşmada çadıra getirilen esirin yere kapandırılıp sembolik olarak üç kamçı/el darbesiyle azarlandığı doğrudur; fakat hemen ardından Alp Arslan onu yerden kaldırmış, kucaklamış, kendi kaftanını giydirmiş ve 8 gün boyunca kendi tahtının yanına oturtup "ekmek ve tuz" paylaşmıştır. Boccaccio, M.S. 260’ta Sâsânî Kralı I. Şâpûr’un Roma İmparatoru Valerianus’a yaptığı antik anlatıyı 1100 yıl sonrasına kopyalamıştır.',
  },
  {
    id: 'anatolia-one-day-fall',
    badge: 'VAKA 04 · TEK BOYUTLU ASKERÎ İNDİRGEMECİLİK',
    title: '«Anadolu Surları 26 Ağustos Akşamı Salt Kılıç Zoruyla Bir Günde Düştü» Söylemi',
    verdict: 'Eksik Okuma · 1053 Tasfiyesi + 1072–81 İç Savaşı',
    claimTag: 'TEK NEDENLİ POPÜLER TARİH ANLATISI',
    claimSource: 'Modern ders kitabı basitleştirmeleri: "Tek meydan savaşıyla bütün Anadolu kapıları kırıldı"',
    claimQuote:
      '«26 Ağustos 1071 akşamı Bizans ordusu tamamen yok edildiği için Selçuklu orduları hiçbir engelle karşılaşmadan Ege ve Marmara kıyılarına kadar bütün kaleleri kılıçla düşürdü.»',
    critiqueSource: 'Nikephoros Bryennios, Attaleiates & Süryani Mihail (1053–1081 Yapısal Analizi)',
    critiqueAnalysis:
      'Malazgirt’te Bizans’ın kayıp oranı tarihçilerce %10–20 civarında hesaplanır (pek çok birlik dağılarak kurtulmuştur) ve Alp Arslan Anadolu’ya ilerlemeyip Mâverâünnehir’e dönmüştür. Anadolu’yu on yılda Türk yurduna çeviren üç yapısal kırılma birleşti: (1) 1053’te 50.000 kişilik yerli sınır milisinin dağıtılması, (2) 1072’de Dukas darbesinin Romanos’u kör edip barış antlaşmasını yırtması ve (3) 1072–1081 Bizans iç savaşında taht adaylarının bizzat Süleyman Şah ve Türkmenleri İznik ile Üsküdar’a davet etmesi.',
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
    sources: 'Mihail Attaleiates (§20.24–25) & İbnü’l-Cevzî (el-Muntazam, c. XVI)',
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
  title: 'Alp Arslan 1071 Baharında Neden Mısır Yolundan Dönüp Rahve’de Meydan Savaşı Verdi?',
  items: [
    {
      num: '01',
      title: 'Asıl Büyük Hedef Fâtımî Kahire’si ve Sünnî İslam Birliği İdi',
      text: 'Alp Arslan Halep’e Anadolu’yu istila etmek için değil, Bağdat Abbâsî Halifesi adına Mısır’daki Şiî Fâtımî Halifeliği’ni ortadan kaldırmak için inmişti; Bizans ile kalıcı bir sınır ateşkesi onun asıl stratejik tercihiydi.',
    },
    {
      num: '02',
      title: 'Kâdî İbn Merd’in Uyarısı: «Irak’a Dönerseniz Azerbaycan Elden Gider!»',
      text: 'Fırat’ı geçerken ordusunun çoğu dağılan Sultan ilk anda Irak/İran’a dönüp ana ordusunu toplamayı düşündü. Ancak İbnü’l-Ezrak’ın kaydına göre Diyarbakır Kadısı İbn Merd, Romanos’un Ahlat üzerinden doğrudan Azerbaycan ve Rey kalbine sarkacağını göstererek Sultan’ı derhal kuzeye çıkmaya ikna etti.',
    },
    {
      num: '03',
      title: '1064–1068 Kafkasya Seferleriyle Kuzey Kanadının Güvenceye Alınmış Olması',
      text: 'Doç. Dr. Ayşe Beyza Ercan’ın ortaya koyduğu üzere Alp Arslan 1064 Ahılkelek–Ani fethi ve 1068 seferi sonunda Gürcü Kralı IV. Bagrat ile diplomatik denge kurmuştu; böylece 1071’de Kuzey Kafkasya/Gürcistan cephesinden Bizans’a hiçbir takviye gelmedi.',
    },
    {
      num: '04',
      title: 'Ahlat İstihbaratı: Tarkhaniotes Kolunun Ayrıldığını Anında Öğrenmesi',
      text: 'Ahlat ve Malazgirt çevresindeki yerel Müslüman ahali ile Sunduk Bey’in öncüleri, Bizans ordusunun ikiye bölündüğünü ve Tarkhaniotes–Roussel kolunun batıya çekildiğini Sultan’a bildirdi; sayısal denge sağlanınca meydan muharebesi en rasyonel hamleye dönüştü.',
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
    stageBadge: 'AŞAMA 4A · 26 AĞUSTOS 1071 CUMA (27 ZİLKADE 463 · RAHVE OVASI)',
    stageTitle: 'Cuma Hutbesi Vaktinde Beyaz Kefen, Çevrilen Sancak ve Andronikos Dukas’ın İhaneti',
    stageLead:
      'Aynı Cuma öğleden sonrasını bir yanda Bağdat saray arşivine dayanan İbnü’l-Esîr’in Klasik Arapça satırlarından, diğer yanda Bizans ordugâhında bizzat bulunan yüksek yargıç Mihail Attaleiates’in Ortaçağ Yunancası görgü tanıklığından yan yana okuyun.',
    bannerVisual: malazgirtHeroVisuals.battleManzikert4A,
    east: {
      pill: 'SELÇUKLU / BAĞDAT CEPHESİ KAYDI',
      date: '27 Zilkade 463 Cuma · el-Kâmil fi’t-Târîh',
      titleHtml: 'İzzeddin İbnü’l-Esîr (Ğarsü’n-Ni‘me’den) · <em>el-Kâmil</em>',
      authorDesc: '1071 Bağdat fetihnâmelerini ve saray elçisi İbnü’l-Muhallebân ile Şâdî’nin tanıklığını koruyan ana İslam metni.',
      origLang: 'ar',
      origScript:
        '«فَلَمَّا كَانَتْ تِلْكَ السَّاعَةُ صَلَّى بِهِمْ، وَبَكَى السُّلْطَانُ... وَقَالَ لَهُمْ: «مَنْ أَرَادَ الِانْصِرَافَ فَلْيَنْصَرِفْ، فَمَا هَاهُنَا سُلْطَانٌ يَأْمُرُ وَيَنْهَى»، وَأَلْقَى الْقَوْسَ وَالنُّشَّابَ، وَأَخَذَ السَّيْفَ وَالدَّبُوسَ، وَعَقَدَ ذَنَبَ فَرَسِهِ بِيَدِهِ، وَفَعَلَ عَسْكَرُهُ مِثْلَهُ، وَلَبِسَ الْبَيَاضَ، وَتَحَنَّطَ، وَقَالَ: «إِنْ قُتِلْتُ فَهَذَا كَفَنِي»... وَأُسِرَ مَلِكُ الرُّومِ، أَسَرَهُ بَعْضُ غِلْمَانِ كُوهَرَائِينَ... وَاسْتَحْضَرَ غُلَامًا يُسَمَّى «شَادِي» كَانَ مَضَى دَفَعَاتٍ مَعَ الرُّسُلِ إِلَى مَلِكِ الرُّومِ، فَمَضَى فَرَآهُ ثُمَّ عَادَ فَقَالَ: «هُوَ هُوَ!».»',
      translationParagraphsHtml: [
        '«Hatiplerin minberlerde mücahitlere zafer için dua ettikleri Cuma zeval vakti gelince Sultan askerlerine namaz kıldırdı ve ağladı... Onlara: <mark class="hl-east">"Kim ayrılıp gitmek isterse gitsin; burada emreden ve yasaklayan bir sultan yoktur, ben de sizden biriyim!"</mark> dedi. Yayını ve oklarını bıraktı, kılıcını ve topuzunu (<em>debbûs</em>) aldı, atının kuyruğunu kendi eliyle bağladı; askeri de onun gibi yaptı. <mark class="hl-east">Beyazlar giydi, kefenlik ıtır (hanût) süründü ve: "Eğer öldürülürsem bu benim kefenimdir!"</mark> dedi.»',
        '«Müslümanlar Rum saflarının ortasına daldı ve toz bulutu aralarını kapladı... Rumlar bozguna uğradı ve Rum Kralı esir alındı; <mark class="hl-east">onu Sa‘düddevle Gevherâyin’in —vaktiyle Nizâmülmülk’ün teftişte küçük görüp "Belki bize Rum kralını esir getirir!" diye alay ettiği— genç bir gulâmı yakaladı.</mark> Sultan buna ilk başta inanamadı; elçilerle birlikte defalarca kralın huzuruna gitmiş olan <strong>"Şâdî"</strong> adlı saray gulâmını gönderdi; Şâdî onu görünce dönüp: <strong>"Odur, bizzat kendisidir!"</strong> dedi.»',
      ],
    },
    west: {
      pill: 'BİZANS KARARGÂHI GÖRGÜ TANIĞI',
      date: '26 Ağustos 1071 Akşamüstü · Historia §20.21–23',
      titleHtml: 'Mihail Attaleiates · <em>Historia (Tarih)</em>',
      authorDesc: 'Romanos Diogenes’in savaş divanında bizzat bulunan Bizans yüksek askeri yargıcı (krites tou stratopedou).',
      origLang: 'el',
      origScript:
        '«...καὶ τηνικαῦτα οἱ Τοῦρκοι παλίντροπον θήσουσι τὴν φυγήν, ἑκηβόλοι τυγχάνοντες. Διὰ ταῦτα καὶ τὴν βασιλικὴν σημαίαν ἐπιστρέψας, νόστου ἐπιμνησθῆναι διήγγελλεν... τῶν ἐφεδρευόντων αὐτῷ τις, ἐξάδελφος ὢν τῷ τοῦ βασιλέως προγονῷ Μιχαήλ, προβεβουλευμένην ἔχων τὴν κατὰ τούτου ἐπιβουλήν, αὐτὸς τὸν τοιοῦτον λόγον τοῖς στρατιώταις διέσπειρε... Ὁ δὲ βασιλεὺς παντάπασιν ἔρημος ἀπολειφθεὶς βοηθείας τὸ ξίφος ἐγύμνωσεν... τὴν χεῖρα τιτρώσκεται... δορυάλωτος ὁ βασιλεὺς Ῥωμαίων γίνεται καὶ πρὸς τὸν σουλτάνον ἀποκομίζεται δέσμιος.»',
      translationParagraphsHtml: [
        '«İmparator akşam çökerken uzaktan ok atan Türklerin geriye dönüp korumasız ordugâha saldıracağından çekindi; bu yüzden <mark class="hl-west">imparatorluk sancağını geriye çevirerek kampa dönüş borusu çaldırdı.</mark> Fakat uzaktaki birlikler sancağın geriye döndüğünü görünce İmparator’un yenildiğini sandılar. Tam bu sırada ona pusu kuranlardan biri —İmparator’un üvey oğlu Mihail’in kuzeni olan <strong>Andronikos Dukas</strong>— <mark class="hl-west">önceden tasarladığı komployu işletip bu yenilgi sözünü askerler arasında bizzat yaydı ve emrindeki tümenlerle hızla kaçıp gitti!</mark>»',
        '«Yardımdan bütünüyle yoksun ve yapayalnız bırakılan İmparator kılıcını kınından çekti; düşmanlara saldırıp pek çoğunu öldürdü, diğerlerini püskürttü. Fakat etrafı kalabalıkça sarılınca <mark class="hl-west">elinden yaralandı, atı oklarla vurulup yıkıldı; akşam karanlığında Romalıların İmparatoru mızrak zoruyla esir düştü</mark> ve bağlı olarak Sultan’ın huzuruna götürüldü.»',
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
      date: 'Eylül 1071 · Mir’âtü’z-Zamân & el-Muntazam',
      titleHtml: 'Sıbt İbnü’l-Cevzî & İbnü’l-Cevzî · <em>Ğarsü’n-Ni‘me Kaydı</em>',
      authorDesc: 'Çağdaş Bağdat vakanüvisi Ğarsü’n-Ni‘me Muhammed b. Hilâl es-Sâbî’nin (ö. 1088) kelimesi kelimesine korunan esaret tutanağı.',
      origLang: 'ar',
      origScript:
        '«فَقَالَ لَهُ السُّلْطَانُ: «فَلَوْ كَانَ الظَّفَرُ لَكَ مَا كُنْتَ تَفْعَلُ بِي؟» قَالَ: «الْقَبِيحَ!» فَقَالَ: «آهٍ، صَدَقَ وَاللَّهِ، وَلَوْ قَالَ غَيْرَ هَذَا لَكَذَبَ، هَذَا رَجُلٌ عَاقِلٌ جَلْدٌ، لَا يَجُوزُ أَنْ يُقْتَلَ». ثُمَّ قَالَ لَهُ: «وَمَا تَظُنُّ الْآنَ أَنْ أَفْعَلَ بِكَ؟» قَالَ: «أَحَدَ ثَلَاثَةِ أَقْسَامٍ: أَمَّا الْأَوَّلُ فَقَتْلِي، وَالثَّانِي إِشْهَارِي فِي بِلَادِكَ... وَأَمَّا الثَّالِثُ فَلَا فَائِدَةَ فِي ذِكْرِهِ، فَإِنَّكَ لَا تَفْعَلُهُ». قَالَ: «وَمَا هُوَ؟» قَالَ: «الْعَفْوُ عَنِّي، وَقَبُولُ الْأَمْوَالِ وَالْهُدْنَةِ...» فَقَالَ لَهُ السُّلْطَانُ: «مَا نَوَيْتُ إِلَّا الْعَفْوَ عَنْكَ، فَاشْتَرِ نَفْسَكَ!»... وَخَلَعَ قَبَاءَهُ وَقَلَنْسُوَتَهُ فَأَلْبَسَهُ إِيَّاهُمَا... وَشَيَّعَهُ نَحْوَ فَرْسَخٍ.»',
      translationParagraphsHtml: [
        '«Sultan Alp Arslan, Armânûs’a sordu: <mark class="hl-east">"Eğer zafer senin olsaydı bana ne yapardın?"</mark> Kral: <strong>"En kötü ve acımasız şeyi!"</strong> dedi. Sultan: <em>"Vallahi doğru söyledi; bundan başkasını söyleseydi yalan söylemiş olurdu. Bu akıllı ve metanetli bir adamdır, öldürülmesi caiz değildir"</em> buyurdu. Ardından: <em>"Peki şimdi benim sana ne yapacağımı sanıyorsun?"</em> diye sordu. Kral: <em>"Üç şeyden birini: Ya beni öldürürsün, ya beldelerinde teşhir edersin; üçüncüsünü ise söylemeye değmez, çünkü yapmazsın"</em> dedi. Sultan <em>"Nedir o?"</em> deyince: <mark class="hl-east">"Beni bağışlaman, fidye ve barışı kabul edip beni tahtıma senin tâbiin olarak geri göndermendir"</mark> cevabını verdi.»',
        '«Sultan: <strong>"Ben de seni affetmekten başka bir şey niyet etmedim!"</strong> dedi. Ertesi gün onun için kendi tahtını kurdurdu, <mark class="hl-east">üzerindeki kendi kaftanını (kabâ) ve börkünü (kalensüve) çıkarıp ona giydirdi, 10.000 dinar yol harçlığı verdi.</mark> Kral ayağa kalkıp başını açtı ve Halife’nin elçisine yaptığı kabalığın özrü olarak Bağdat yönüne doğru eğilip selam verdi; Sultan da onu iki hâcib, 100 gulâm ve kelime-i tevhid yazılı sancakla <strong>bizzat bir fersah (~6 km) at sürerek</strong> uğurladı.»',
      ],
    },
    west: {
      pill: 'BİZANS GÖRGÜ TANIĞI · ÇADIR VE KÜTAHYA',
      date: 'Eylül 1071 & 29 Haziran 1072 · Historia §20.24–21.9',
      titleHtml: 'Mihail Attaleiates · <em>Historia (Tarih)</em>',
      authorDesc: 'Hristiyan bir Bizans yargıcı olmasına rağmen Alp Arslan’ın adaletini öven, kendi sarayının yemin bozuculuğunu lanetleyen tanık.',
      origLang: 'el',
      origScript:
        '«...περιπτυξάμενος τοῦτον «μὴ δέδιθι» ἔφη, «ὦ βασιλεῦ...» σύνδειπνον αὐτὸν αὐτίκα καὶ ὁμοδίαιτον ἀπειργάσατο... μέχρις ἡμερῶν ὀκτὼ τῶν ὁμοίων αὐτῷ ἐκοινώνει καὶ λόγων καὶ ἁλῶν... διερωτήσαντος τοῦ σουλτάνου τὸν βασιλέα «τί ἂν ἔδρασας εἰ οὕτως ἔσχες αὐτὸς ἐμὲ ὑποχείριον;», ἀνυποκρίτως... ἀπήγγειλεν «ὅτι πολλαῖς ταῖς πληγαῖς κατεδαπάνησά σου τὸ σῶμα γίνωσκε.» Ὁ δὲ «ἀλλ’ ἐγὼ» φησὶν «οὐ μιμήσομαί σου τὸ αὐστηρὸν καὶ ἀπότομον.» ... ἡ τοῦ Θεοῦ κρίσις μετὰ τῶν ἄλλων κἀνταῦθα δικαία καὶ ἀρρεπὴς κατεφάνη... [§21.8] παρῆσαν γὰρ ἐκεῖσε ὅ τε Χαλκηδόνος, ὁ Ἡρακλείας καὶ ὁ Κολωνείας, τὰς σπονδὰς αὐτῷ συντελέσαντες... καί τινα Ἰουδαῖον ἀμαθῆ τὰ τοιαῦτα τὴν τῶν ὀφθαλμῶν αὐτοῦ διαχείρισιν ἐπιτρέπουσι.»',
      translationParagraphsHtml: [
        '«Sultan onu kucaklayarak: <mark class="hl-west">"Korkma ey İmparator, bedenin hiçbir tehlike görmeyecek ve şanına layık biçimde onurlandırılacaksın; zira insan kaderinin tersine dönebileceğinden habersiz olan kişi budaladır!"</mark> dedi. Derhal ona şahane bir çadır kurdurdu, kendi sofrasına oturtup <mark class="hl-west">sekiz gün boyunca onunla hem sözü hem tuzu paylaştı.</mark> Sultan ona <em>"Beni eline geçirseydin ne yapardın?"</em> diye sorduğunda Romanos riyakârlık etmeden: <em>"Bedenini kırbaç darbeleriyle parçalardım, bunu bil!"</em> dedi. Sultan ise: <strong>"Fakat ben senin bu sertliğini ve acımasızlığını taklit etmeyeceğim; zira sizin Mesih’inizin de size barışı ve kötülüğe iyilikle karşılık vermeyi buyurduğunu işittim"</strong> karşılığını verdi. <mark class="hl-west">Tanrı’nın hükmü burada da adil ve tarafsız göründü!</mark>»',
        '«[1072 Yazı:] Oysa kendi başkentinde Dukaslar onu tahttan indirdi. <strong>Kadıköy, Ereğli ve Şebinkarahisar metropolitlerinin</strong> yeminli dokunulmazlık kefaletiyle keşiş cübbesi giyip teslim olan Romanos’u Kütahya’ya getirdiler; <mark class="hl-west">üç başpiskoposun feryatlarına aldırmadan, bu işi hiç bilmeyen acemi birine İmparator’un gözlerini demirle kör ettirdiler...</mark> Başındaki yaralar kurtlanan Romanos Kınalıada’da can verdi.»',
      ],
    },
    ransomTariffBox: {
      badge: 'EYLÜL 1071 RAHVE ÇADIR ANTLAŞMASI MADDELERİ',
      title: 'Sultan Alp Arslan ile IV. Romanos Diogenes Arasında Akdedilen 50 Yıllık Barış Protokolü',
      lead: 'Ğarsü’n-Ni‘me es-Sâbî, Sıbt İbnü’l-Cevzî ve İbnü’l-Esîr’in Bağdat divan kayıtlarından aktardığı resmi antlaşma şartları (Konstantinopolis darbesi yüzünden yürürlüğe giremedi):',
      items: [
        {
          label: 'Şahsî Kurtuluş Fidyesi',
          value: '1.500.000 Dinar',
          note: 'İlk istenen 10 milyon dinardan indirildi; tahttan indirilen Romanos elinde kalan 200.000 dinar + 90.000 dinarlık mücevherli tepsiyi sözüne sadakatle Sultan’a gönderdi',
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
      'Mısır seferini yarıda kesip süratle Rahve’ye çıktı; zaferden sonra esir imparatoru öldürmek yerine 8 gün ağırlayıp onurlu bir sınır antlaşmasıyla batı cephesini güvenceye aldı ve asıl büyük hanedan meselesi olan Mâverâünnehir (Batı Karahanlı) seferine yöneldi.',
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
    name: 'Vezir Nizâmülmülk (Hasan et-Tûsî)',
    role: 'Büyük Selçuklu Veziri · Cephe Gerisi ve Veliahtlık Garantörü',
    stance: 'loyal',
    badgeText: '20 YIL İMPARATORLUK İDARESİ VE SUİKAST',
    calculation1098:
      'Malazgirt öncesinde Hoy’dan Sultan’ın hatunu ve devlet hazinesiyle birlikte Hemedan’a döndü; böylece olası bir bozgunda veliaht Melikşah’ın tahtını ve imparatorluğun mali-bürokratik omurgasını güvence altına aldı.',
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
    period: '1064 Ahılkelek–Ani · 1071 Tarafsızlık · 1080 Büyük Türk İskânı',
    summary:
      'Doç. Dr. Ayşe Beyza Ercan’ın araştırmalarının gösterdiği üzere, Alp Arslan’ın 1064 Ahılkelek–Ani fethi ve 1068 seferi sonrasında Gürcistan Kralı IV. Bagrat ile kurduğu diplomatik denge sayesinde Gürcistan 1071 Malazgirt’te Bizans’a asker göndermedi. Kasım 1072’de hem IV. Bagrat hem Alp Arslan peş peşe vefat edince, II. Giorgi döneminde 1074 Partskhisi savaşı ve 1080’den itibaren Gürcü kroniklerinin "Didi Turkoba" (Büyük Türk Dönemi / Göçü) adını verdiği yoğun Kura–Aras yaylak-kışlak iskânı başladı.',
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
  badge: 'TAKVİM & TOPOGRAFYA DEDEKTİFLİĞİ · 26 AĞUSTOS CUMA & «ER-RAHVE»',
  title: 'Savaş 19 Ağustos’ta mı 26 Ağustos’ta mı Oldu ve «Rahve Ovası» Bugünkü Tatvan Rahva’sı mıdır?',
  eastLabel: 'İSLAM VEKÂYİNÂMELERİ KAYDI',
  eastSource: 'Ğarsü’n-Ni‘me / el-Muntazam & el-Kâmil (Zilkade 463 Cuma · «er-Rahve»)',
  eastText:
    'Bağdat kaynakları savaş gününü ittifakla "Cuma günü, zevalden (öğle hutbesinden) sonra" olarak verir; ay gününü ise bazı istinsahlarda "Zilkade’nin bitimine beş gün kala", bazılarında "27 Zilkade 463" diye yazar ve mevkiyi Malazgirt ile Ahlat arasındaki «er-Rahve» olarak adlandırır.',
  westLabel: 'BİZANS VE ERMENİ KAYITLARI + ARKEOLOJİK SAHA',
  westSource: 'Attaleiates, Kleinchroniken & Malazgirt Savaş Alanı Yüzey Araştırması (2020–2025)',
  westText:
    'Astronomik ve kronolojik hesapta Hicrî 463 yılı Zilkade ayının son Cuması kesin olarak 26 Ağustos 1071 Cuma gününe (27 Zilkade 463) karşılık gelir. Arapçada «er-rahve» özel bir ilçe adı değil, "dağ eteğindeki yüksek düz ova" demektir.',
  resolutionHtml:
    '<strong>Tarihsel ve Arkeolojik Çözüm:</strong> Savaş alanı, Van Gölü’nün güneybatısındaki bugünkü Bitlis–Tatvan <em>Rahva</em> düzlüğü <strong>değildir</strong> (orası Malazgirt’e ~90 km uzaktır ve bir günlük yürüyüş menzili dışındadır). Birincil kaynaklardaki <em>«Malazgirt ile Ahlat arasındaki er-Rahve»</em>, Malazgirt kalesinin <strong>8–15 km güneydoğusunda, Süphan Dağı’nın kuzeybatı eteklerine uzanan Afşin–Gülkoru–Yaramış koridorudur</strong>; Prof. Dr. Adnan Çevik başkanlığındaki <em>Malazgirt Savaş Alanının Tespiti Projesi</em> yüzey buluntuları da çarpışma çekirdeğini bu koridorda doğrulamıştır.',
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
    desc: 'Bağdat’ta Abbâsî saray bürokrasisinde görev yapan Ğarsü’n-Ni‘me’nin 1071 fetihnâmelerine, Halife elçisi İbnü’l-Muhallebân’a ve saray gulâmı Şâdî’ye dayanan çağdaş metni; torun Sıbt İbnü’l-Cevzî sayesinde tüm çadır diyaloğu ve antlaşma rakamlarıyla günümüze ulaşmıştır.',
  },
  {
    name: 'İzzeddin İbnü’l-Esîr — el-Kâmil fi’t-Târîh (463 h.)',
    side: 'İslam / Musul-Cezîre Ana Sentezi (1160–1233)',
    desc: 'İmam Ebû Nasr el-Buhârî’nin Cuma hutbesi vaktinde taarruz tavsiyesini, Alp Arslan’ın beyaz kefenlik elbisesini, Gevherâyin’in gulâmının Romanos’u esir alışını ve 50 yıllık barış şartlarını klasikleştiren temel İslam vekâyinâmesi.',
  },
  {
    name: 'Nikephoros Bryennios — Hyle Historias (Tarihin Malzemesi)',
    side: 'Bizans Askerî Aile Kaynağı (1062–1137)',
    desc: 'Malazgirt’te Bizans sol kanadını yöneten ve 24 Ağustos çarpışmalarında yaralanan general Nikephoros Bryennios’un aynı adlı torunu (ve Anna Komnena’nın eşi); Selçuklu hilâl/pusu taktiğini (Taranges/Savtegin manevrasını) en teknik askeri dille anlatan Bizans kaynağıdır.',
  },
  {
    name: 'İbnü’l-Ezrak el-Fârikî — Târîhu Meyyâfârikîn ve Âmid',
    side: 'Diyarbakır–Silvan–Ahlat Yerel Kaynağı (1116–1176)',
    desc: 'Savaş alanına en yakın coğrafyanın yerel tarihçisi; Mervânî Emirliği ve Ahlat halkının Selçuklu ordusuna verdiği lojistik/askeri desteği, Kâdî İbn Merd’in uyarısını ve İbnü’l-Muhallebân’ın "Hemedan’da kışlama" diyaloğunu aktarır.',
  },
  {
    name: 'Kemâleddin İbnü’l-Adîm — Zübdetü’l-Haleb & Buğyetü’t-Taleb',
    side: 'Kuzey Suriye / Halep Arşiv Kaynağı (1192–1262)',
    desc: 'Alp Arslan’ın Ocak–Nisan 1071 Urfa ve Halep kuşatmasını, Fırat’ı ilk geçişinde Kadı Ebû Ca‘fer’in sözünü ve Romanos haberi üzerine kabarmış Fırat’ı at sırtında süratle geri geçerken yaşanan kayıpları belgeler.',
  },
  {
    name: 'Aristakes Lastivertsi & Urfalı Mateos Vekâyinâmeleri',
    side: 'Doğu Hristiyan / Ermeni Kaynakları (11.–12. Yüzyıl)',
    desc: 'Aristakes Lastivertsi (1072 öncesi çağdaş tanık) 1048 Pasinler’den 1071’e Doğu Anadolu’nun sarsılışını; Urfalı Mateos ise yarım asır sonraki yerel hafızayı ve abartılı Uz–Peçenek saf değiştirme anlatısını yansıtır.',
  },
  {
    name: 'Kartlis Tskhovreba (Matiane Kartlisa — Gürcistan Kroniği)',
    side: 'Kafkasya / Gürcü Krallık Kroniği (11. Yüzyıl Sonu)',
    desc: '1048’de Liparit Bagvaşi’nin esareti, 1064 Alp Arslan’ın Trialeti–Ahılkelek–Ani seferi, Kral IV. Bagrat ile kurulan diplomatik denge (Gürcistan’ın 1071’deki tarafsızlığı) ve 1080 sonrası "Didi Turkoba" süreci için temel Kafkasya kaynağıdır.',
  },
];

export const malazgirtModernRefsHtml =
  '<strong>Başlıca Modern Akademik Başvuru Eserleri:</strong> Osman Turan (<em>Selçuklular Tarihi ve Türk-İslâm Medeniyeti</em>; <em>Selçuklular Zamanında Türkiye</em>), Claude Cahen (<em>“La campagne de Mantzikert d’après les sources musulmanes”</em>, Byzantion 1934; <em>Osmanlılardan Önce Anadolu</em>), Carole Hillenbrand (<em>Turkish Myth and Muslim Symbol: The Battle of Manzikert</em>, Edinburgh, 2007), Ali Sevim (<em>Mir’âtü’z-Zamân</em> ve <em>Buğyetü’t-Taleb</em> tenkitli neşirleri, TTK), Sümer &amp; Sevim (<em>İslâm Kaynaklarına Göre Malazgirt Savaşı</em>, TTK), Muharrem Kesik (<em>1071 Malazgirt: Zafere Giden Yol</em>), Cihan Piyadeoğlu (<em>Çağrı Bey</em>; <em>Büyük Selçuklular</em>), Ayşe Beyza Ercan (<em>“11. Yüzyılda Büyük Selçuklu Devleti ve Gürcistan İlişkileri”</em>, 2020; <em>“Orta Çağ Gürcü Kaynaklarında Türkler”</em>, 2023), Adnan Çevik (<em>Malazgirt Savaş Alanının Tespiti, Tarihi ve Arkeolojik Yüzey Araştırması Projesi</em>), John Haldon (<em>The Byzantine Wars</em>), Jean-Claude Cheynet (<em>“Mantzikert: un désastre militaire?”</em>, Byzantion 1980), Anthony Kaldellis &amp; Dimitris Krallis (<em>Michael Attaleiates: The History</em>, DOML 2012) ve Speros Vryonis (<em>The Decline of Medieval Hellenism in Asia Minor</em>).';
