import { withBase } from '../utils/paths';

export interface VisualAsset {
  src: string;
  badge: string;
  caption: string;
  credit: string;
  isEngraving?: boolean;
  objectPosition?: string;
}

export interface MapStep {
  id: string;
  stepLabel: string;
  dateBadge: string;
  locationBadge: string;
  title: string;
  narrative: string[];
  highlightNote: {
    source: string;
    text: string;
    tone: 'east' | 'west' | 'witness';
  };
  camera: {
    center: [number, number]; // [lng, lat]
    zoom: number;
    pitch: number;
    bearing: number;
  };
  activeRouteIds: string[];
  focusCityIds: string[];
  visual: VisualAsset;
}

export const sceneHeroVisuals: {
  prologue: VisualAsset;
  coalitionCamp: VisualAsset;
  battleBridgeGate: VisualAsset;
} = {
  prologue: {
    src: withBase('/images/arsiv/prologue-antioch-bartlett.png'),
    badge: 'TARİHÎ TOPOGRAFİK GRAVÜR · 1837',
    caption: 'Antakya Surları, Silpius (Habib-i Neccar) Dağı ve Asi Nehri Köprüsü',
    credit: 'W. H. Bartlett, Syria, the Holy Land, Asia Minor Illustrated (1837)',
    isEngraving: true,
    objectPosition: 'center 38%',
  },
  coalitionCamp: {
    src: withBase('/images/arsiv/step6-kerbogha-bnf.jpg'),
    badge: 'ORTAÇAĞ EL YAZMASI TEZHİBİ',
    caption: 'Atabey Kürboğa (Corbagath) ve Koalisyon Kuvvetleri Antakya Surları Önünde',
    credit: 'Guillaume de Tyr, Histoire d’Outremer El Yazması Arşivi (Kamu Malı)',
    objectPosition: 'center 35%',
  },
  battleBridgeGate: {
    src: withBase('/images/arsiv/battle-antioch-dore.jpg'),
    badge: 'TARİHÎ ÇELİK GRAVÜR · LEVHA XVIII (1877)',
    caption: '28 Haziran 1098 Sabahı Antakya Surları Önünde Büyük Çıkış ve Çarpışma',
    credit: 'Gustave Doré, Histoire des Croisades (1877, Kamu Malı)',
    isEngraving: true,
    objectPosition: 'center 72%',
  },
};

export interface CityMarker {
  id: string;
  name: string;
  historicalName: string;
  coords: [number, number]; // [lng, lat]
  faction: 'seljuk' | 'crusader' | 'byzantine' | 'contested' | 'fatimid' | 'ayyubid' | 'zengid' | 'hydrology';
}

export interface RouteLine {
  id: string;
  label: string;
  color: string;
  dashed?: boolean;
  coordinates: [number, number][];
}

export const historicalCities: CityMarker[] = [
  { id: 'clermont', name: 'Clermont', historicalName: '1095 Konsili', coords: [3.087, 45.777], faction: 'crusader' },
  { id: 'konstantinopolis', name: 'Konstantinopolis', historicalName: 'Bizans Başkenti', coords: [28.978, 41.008], faction: 'byzantine' },
  { id: 'iznik', name: 'İznik (Nikaia)', historicalName: 'Selçuklu Başkenti (1075-97)', coords: [29.721, 40.429], faction: 'seljuk' },
  { id: 'uskudar', name: 'Üsküdar / Kadıköy', historicalName: 'Khrysopolis', coords: [29.015, 41.025], faction: 'seljuk' },
  { id: 'izmir', name: 'İzmir', historicalName: 'Çaka Bey Donanması (1081-92)', coords: [27.142, 38.423], faction: 'seljuk' },
  { id: 'akşehir', name: 'Akşehir (Philomelium)', historicalName: 'Aleksios Geri Dönüş Noktası', coords: [31.416, 38.357], faction: 'byzantine' },
  { id: 'tarsus', name: 'Tarsus', historicalName: 'Kilikya Geçidi', coords: [34.895, 36.916], faction: 'contested' },
  { id: 'adana', name: 'Adana & Misis', historicalName: 'Çukurova Koridoru (1097)', coords: [35.321, 36.991], faction: 'contested' },
  { id: 'iskenderun', name: 'İskenderun', historicalName: 'Alexandretta', coords: [36.173, 36.587], faction: 'contested' },
  { id: 'urfa', name: 'Urfa (Edessa)', historicalName: '21 Günlük Gecikme (Mayıs 1098)', coords: [38.796, 37.167], faction: 'crusader' },
  { id: 'musul', name: 'Musul', historicalName: 'Kürboğa Hareket Üssü', coords: [43.13, 36.34], faction: 'seljuk' },
  { id: 'halep', name: 'Halep', historicalName: 'Melik Rıdvan', coords: [37.161, 36.199], faction: 'seljuk' },
  { id: 'antakya', name: 'Antakya · Köprü Kapısı', historicalName: 'Bâbü’l-Cisr & İçkale (1098)', coords: [36.16, 36.202], faction: 'contested' },
  { id: 'humus', name: 'Humus', historicalName: 'Emîr Cenâhüddevle', coords: [36.716, 34.732], faction: 'seljuk' },
  { id: 'sam', name: 'Şam (Dımaşk)', historicalName: 'Melik Dukak & Tuğtekin', coords: [36.291, 33.513], faction: 'seljuk' },
  { id: 'kudus', name: 'Kudüs', historicalName: '1071 Atsız · 1098 Fatımî · 1099 Haçlı', coords: [35.234, 31.776], faction: 'fatimid' },
  { id: 'akka', name: 'Akka', historicalName: 'Son Haçlı Kalesi (1291)', coords: [35.07, 32.923], faction: 'contested' },
];

export const historicalRoutes: RouteLine[] = [
  {
    id: 'seljuk-shock',
    label: '1071–1091 Selçuklu İlerleyişi',
    color: '#2cc5b3',
    coordinates: [
      [41.5, 39.0],
      [37.0, 39.7],
      [32.5, 39.2],
      [29.721, 40.429],
      [29.015, 41.025],
    ],
  },
  {
    id: 'crusader-europe-anatolia',
    label: '1096–1097 Haçlı Ana Yürüyüşü',
    color: '#d9485f',
    coordinates: [
      [3.087, 45.777],
      [12.496, 41.902],
      [19.45, 41.32],
      [28.978, 41.008],
      [29.721, 40.429],
      [30.52, 39.77],
      [32.49, 37.87],
      [34.6, 37.9],
      [36.9, 37.58],
      [36.16, 36.202],
    ],
  },
  {
    id: 'cilicia-edessa-branch',
    label: '1097 Tankred & Baudouin Çukurova-Urfa Kolu',
    color: '#f472b6',
    dashed: true,
    coordinates: [
      [34.4, 37.55],
      [34.895, 36.916],
      [35.321, 36.991],
      [35.61, 36.95],
      [36.173, 36.587],
      [37.38, 37.06],
      [38.796, 37.167],
    ],
  },
  {
    id: 'kerbogha-campaign',
    label: 'Mayıs–Haziran 1098 Kürboğa Seferi (Musul → Urfa → Antakya)',
    color: '#d99b4e',
    coordinates: [
      [43.13, 36.34],
      [41.22, 37.07],
      [38.796, 37.167],
      [37.25, 36.52],
      [36.16, 36.202],
    ],
  },
  {
    id: 'syrian-coalition',
    label: 'Şam & Humus Koalisyon Katılımı',
    color: '#eab308',
    dashed: true,
    coordinates: [
      [36.291, 33.513],
      [36.716, 34.732],
      [37.25, 36.52],
      [36.16, 36.202],
    ],
  },
  {
    id: 'stephen-flight',
    label: 'Haziran 1098 Étienne de Blois Firar Hattı (Adana → Akşehir)',
    color: '#a78bfa',
    dashed: true,
    coordinates: [
      [36.16, 36.202],
      [36.173, 36.587],
      [35.321, 36.991],
      [34.895, 36.916],
      [31.416, 38.357],
    ],
  },
];

export const mapSteps: MapStep[] = [
  {
    id: 'step-bosporus-shock',
    stepLabel: 'SAHNE 1A · JEOPOLİTİK ALARM',
    dateBadge: '1071 – 1091',
    locationBadge: 'İznik · Üsküdar · İzmir · Antakya',
    title: '20 Yılda Boğaz Kıyısına Dayanan Şok',
    narrative: [
      'Kudüs 638 yılından beri (460 yıldır) zaten Müslümanların elindeydi ve Avrupa dört buçuk asır boyunca tek bir Haçlı Seferi bile düzenlememişti. Denklemi bozan şey Kudüs değil, 1071 Malazgirt sonrasında Türklerin baş döndürücü hızla Bizans’ın kalbine inmesiydi.',
      'Kutalmışoğlu Süleyman Şah Hristiyanlığın ilk konsil kenti İznik’i başkent yaptı; Türk atlıları Üsküdar kıyılarına ulaştı. 1084’te beş büyük patriklik merkezinden biri olan Antakya düştü; 1090–91 kışında İzmir Beyi Çaka Bey denizden, Peçenekler karadan İstanbul’u kıskaca aldı.',
    ],
    highlightNote: {
      source: 'Papa VII. Gregorius’un Mektubu (1074)',
      text: 'Daha I. Haçlı Seferi’nden 21 yıl önce Papa VII. Gregorius, "Türklerin Konstantinopolis surlarına dayandığını" yazarak Doğu’ya 50.000 kişilik bir ordu götürmeyi tasarlamış, ancak Alman İmparatoru ile yaşadığı kavga yüzünden başlatamamıştı.',
      tone: 'west',
    },
    camera: {
      center: [31.2, 39.6],
      zoom: 5.5,
      pitch: 36,
      bearing: -10,
    },
    activeRouteIds: ['seljuk-shock'],
    focusCityIds: ['iznik', 'konstantinopolis', 'uskudar', 'izmir', 'antakya'],
    visual: {
      src: withBase('/images/arsiv/step1-malazgirt-bnf.jpg'),
      badge: 'BNF EL YAZMASI TEZHİBİ · 15. YY',
      caption: '1071 Malazgirt sonrası Anadolu kapılarının açılışı',
      credit: 'Bibliothèque nationale de France, Ms. Fr. 226',
      objectPosition: 'center 28%',
    },
  },
  {
    id: 'step-clermont-agenda',
    stepLabel: 'SAHNE 1B · ÇİFTE AJANDA',
    dateBadge: 'Mart – Kasım 1095',
    locationBadge: 'Piacenza & Clermont (Fransa)',
    title: 'Bizans Paralı Asker İstedi, Papa "Kudüs" İlan Etti',
    narrative: [
      'Mart 1095’te Bizans İmparatoru I. Aleksios Komnenos Papa’dan Kudüs’ü değil, Anadolu’yu geri almak için birkaç bin zırhlı paralı asker istedi. Ancak hiçbir Fransız ya da Norman şövalyesi "Ortodoks Bizans vergi toplasın" diye binlerce kilometre yürümezdi.',
      'Papa II. Urbanus, 27 Kasım 1095 Clermont Konsili’nde bu çağrıyı devrimsel bir formüle çevirdi: Avrupa’da ilk oğul mirası yüzünden topraksız kalıp birbirini boğazlayan kavgacı şövalyelere "Kudüs’ü kurtarırsanız bütün günahlarınız silinecek" vaadini sundu. I. Haçlı Seferi’ne tek bir Avrupa kralı bile katılmadı; kıtayı birleştiren güç krallar değil, iç şiddeti Doğu’ya ihraç eden Papalık oldu.',
    ],
    highlightNote: {
      source: 'Chartreslı Fulcherius (Clermont Görgü Tanığı, 1095)',
      text: '«Ey şimdiye kadar haydutluk yapanlar, artık Mesih’in askerleri olun! Eskiden kardeşlerinizle ve akrabalarınızla birbirinizi boğazlıyordunuz; şimdi gidin ve barbarlara karşı savaşın!»',
      tone: 'west',
    },
    camera: {
      center: [16.5, 42.6],
      zoom: 4.15,
      pitch: 32,
      bearing: 12,
    },
    activeRouteIds: ['crusader-europe-anatolia', 'seljuk-shock'],
    focusCityIds: ['clermont', 'konstantinopolis', 'iznik'],
    visual: {
      src: withBase('/images/arsiv/step2-clermont-bnf.jpg'),
      badge: 'BNF FR. 5594 · JEAN COLOMBE (ykl. 1474)',
      caption: 'Papa II. Urbanus’un 1095 Clermont Konsili vaazı',
      credit: 'Les Passages d’Outremer, BnF Fr. 5594, fol. 19r',
      objectPosition: 'center 32%',
    },
  },
  {
    id: 'step-cilicia-corridor',
    stepLabel: 'SAHNE 3A · ADANA – HATAY KORİDORU',
    dateBadge: 'Eylül – Ekim 1097',
    locationBadge: 'Tarsus · Adana · Misis · Urfa · Antakya',
    title: 'Çukurova Harekâtı ve Kudüs Yolunun Kilidi',
    narrative: [
      '1097’de Anadolu’yu geçen Haçlılar güneye inerken iki kola ayrıldı: Tankred ve Boulognelu Baudouin öncü kuvvetlerle Çukurova’ya girerek Selçuklu garnizonlarının tuttuğu Tarsus, Adana ve Misis’i zapt etti. Bu hat Haçlıların ikmal ve kaçış koridoru oldu.',
      'Baudouin buradan doğuya sapıp Urfa’yı (Edessa) ele geçirerek ilk Haçlı kontluğunu kurarken, ana ordu 20 Ekim 1097’de Selçuklu valisi Yağısıyan’ın savunduğu muazzam surlara sahip Antakya’yı kuşattı.',
    ],
    highlightNote: {
      source: 'Stratejik Bağlantı',
      text: 'Adana-Tarsus hattından doğuya sapan Baudouin’in Urfa’ya yerleşmesi, sadece birkaç ay sonra Musul Atabeyi Kürboğa’nın en ölümcül stratejik zaman kaybını yapmasına neden olacaktır.',
      tone: 'witness',
    },
    camera: {
      center: [36.3, 36.85],
      zoom: 6.85,
      pitch: 44,
      bearing: 16,
    },
    activeRouteIds: ['crusader-europe-anatolia', 'cilicia-edessa-branch'],
    focusCityIds: ['tarsus', 'adana', 'iskenderun', 'urfa', 'antakya'],
    visual: {
      src: withBase('/images/arsiv/step4-cilicia-bartlett.jpg'),
      badge: 'TARİHÎ COĞRAFYA GRAVÜRÜ · 1836',
      caption: 'Toroslar Gülek Boğazı (Kilikya Kapıları) dar geçidi',
      credit: 'W. H. Bartlett / John Carne, Syria Illustrated (1836)',
      isEngraving: true,
      objectPosition: 'center 48%',
    },
  },
  {
    id: 'step-edessa-delay',
    stepLabel: 'SAHNE 3B · ÖLÜMCÜL GECİKME',
    dateBadge: 'Mayıs 1098 (21 Gün)',
    locationBadge: 'Musul → Urfa (Edessa)',
    title: 'Kürboğa’nın Urfa Surları Önünde Kaybettiği Üç Hafta',
    narrative: [
      'Antakya Valisi Yağısıyan 7 ay boyunca direnirken Halep (Rıdvan) ve Şam (Dukak) meliklerinin ayrı ayrı gönderdiği kuvvetler başarısız oldu. Sultan Berkyaruk’un emriyle Musul Atabeyi Kıvâmüddevle Kürboğa büyük bir koalisyon ordusuyla harekete geçti.',
      'Ancak Kürboğa doğrudan Antakya’ya inmek yerine, gerisinde bir Haçlı üssü bırakmamak düşüncesiyle Mayıs 1098 boyunca tam üç hafta Urfa’yı kuşattı. Urfa’yı alamadığı gibi, bu 21 günlük gecikme Antakya önündeki Haçlılara şehri içeriden düşürmeleri için hayati bir fırsat penceresi açtı.',
    ],
    highlightNote: {
      source: 'Urfalı Mateos Vekâyinâmesi & İbnü’l-Esîr',
      text: 'Kürboğa Mayıs ayında Urfa’da oyalanmasaydı, Haçlı ordusunu henüz Antakya surlarının dışındayken Yağısıyan’ın garnizonuyla iki ateş arasında yakalayacaktı.',
      tone: 'east',
    },
    camera: {
      center: [39.4, 36.7],
      zoom: 6.4,
      pitch: 42,
      bearing: -18,
    },
    activeRouteIds: ['kerbogha-campaign', 'syrian-coalition', 'cilicia-edessa-branch'],
    focusCityIds: ['musul', 'urfa', 'halep', 'antakya'],
    visual: {
      src: withBase('/images/arsiv/step3-dorylaion-bnf.jpg'),
      badge: 'BNF FR. 5594 · ORTAÇAĞ TEZHİBİ',
      caption: 'Selçuklu süvari birlikleri ve Frank zırhlı hatları karşı karşıya',
      credit: 'Les Passages d’Outremer, BnF Fr. 5594, fol. 37v',
      objectPosition: 'center 52%',
    },
  },
  {
    id: 'step-48-hours',
    stepLabel: 'SAHNE 3C · 48 SAATLİK TRAJEDİ',
    dateBadge: '2 – 5 Haziran 1098',
    locationBadge: 'Antakya Surları · İki Kızkardeş Burcu',
    title: 'Firûz’un İhaneti ve Kuşatanların Kuşatılması',
    narrative: [
      'Kürboğa’nın yaklaştığını öğrenen Norman lider Bohemund, surlardaki burçlardan birini koruyan zırh ustası Firûz ile gizlice anlaştı. 2–3 Haziran gecesi sarkıtılan merdivenlerle Haçlılar Antakya’ya girdi; Vali Yağısıyan şehirden çıkarken attan düşüp öldü, fakat oğlu Şemsüddevle sarp dağdaki İçkale’yi tutmayı başardı.',
      'Bundan yalnızca 48 saat sonra (4–5 Haziran) Kürboğa’nın ordusu Antakya önüne ulaştı! Roller bir gecede değişmişti: Haçlılar içerideki Türk İçkalesi ile dışarıdaki Kürboğa ordusu arasında aç ve mahsur kaldılar.',
    ],
    highlightNote: {
      source: 'Gesta Francorum & İbnü’l-Adîm (Zübdetü’l-Haleb)',
      text: 'Açlıktan savaş atlarını ve deri kayışları yiyen şövalyeler gece surlardan iple sarkıp kaçmaya başladı; kronikler bu firarilere alayla "funambuli" (ip cambazları) adını taktı.',
      tone: 'west',
    },
    camera: {
      center: [36.22, 36.22],
      zoom: 9.2,
      pitch: 50,
      bearing: 28,
    },
    activeRouteIds: ['kerbogha-campaign', 'syrian-coalition'],
    focusCityIds: ['antakya', 'halep', 'iskenderun'],
    visual: {
      src: withBase('/images/arsiv/step5-antioch-firuz-bnf.jpg'),
      badge: 'BNF FRANÇAIS 2628 · 13. YY MİNYATÜRÜ',
      caption: 'Firûz’un Antakya burcundan merdiven sarkıtması (3 Haziran 1098)',
      credit: 'Guillaume de Tyr, Histoire d’Outremer, BnF Fr. 2628',
      objectPosition: 'center 35%',
    },
  },
  {
    id: 'step-stephen-flight',
    stepLabel: 'SAHNE 3D · YALNIZ KALAN ORDU',
    dateBadge: '10 – 24 Haziran 1098',
    locationBadge: 'Antakya → Adana → Akşehir',
    title: 'Adana Üzerinden Kaçış, Kutsal Mızrak ve Kovulan Elçi',
    narrative: [
      'Kaçan liderlerden Blois Kontu Étienne, İskenderun ve Adana (Çukurova) güzergâhından Anadolu’ya geçerek Akşehir’de yardıma gelen Bizans İmparatoru Aleksios’u "Antakya mahvoldu, Kürboğa yenilmez" diyerek geri döndürdü.',
      'İçeride çöküşün eşiğindeki Haçlılar, Aziz Petrus Kilisesi’nin zemininden "Kutsal Mızrak"ı çıkardıklarını ilan ederek fanatik bir ölüm-kalım coşkusuna kapıldı. Keşiş Pierre elçi olarak Kürboğa’nın çadırına gönderildi; Kürboğa "Buradan ancak kılıçla çıkabilirsiniz" diyerek elçileri kovdu.',
    ],
    highlightNote: {
      source: 'Batı Kronikleri (Satranç Anekdotu)',
      text: 'Kronikler, Kürboğa’nın Haçlı çıkışını ciddiye almayacak kadar kendine güvendiğini ve haberciler geldiğinde çadırında satranç oynamayı sürdürdüğünü aktarır.',
      tone: 'witness',
    },
    camera: {
      center: [34.2, 37.35],
      zoom: 6.5,
      pitch: 40,
      bearing: -24,
    },
    activeRouteIds: ['stephen-flight', 'kerbogha-campaign'],
    focusCityIds: ['antakya', 'adana', 'tarsus', 'akşehir'],
    visual: {
      src: withBase('/images/arsiv/rampart-bohemond-dore.jpg'),
      badge: 'GUSTAVE DORÉ GRAVÜRÜ · 1877',
      caption: 'Kuşatma altındaki Antakya surları ve gece nöbeti',
      credit: 'Gustave Doré, Histoire des Croisades (1877)',
      isEngraving: true,
      objectPosition: 'center 25%',
    },
  },
  {
    id: 'step-bridge-gate',
    stepLabel: 'SAHNE 3E · KIRILMA NOKTASI',
    dateBadge: '28 Haziran 1098 Sabahı',
    locationBadge: 'Asi Nehri · Köprü Kapısı (Bâbü’l-Cisr)',
    title: 'Köprü Kapısı Önünde Tarihin Yön Değiştirdiği An',
    narrative: [
      '28 Haziran sabahı atlarının çoğu ölmüş, yaya ve bitkin Haçlı alayları Asi Nehri üzerindeki dar Köprü Kapısı’ndan dışarı çıkmaya başladı. Sökmen bin Artuk ve tecrübeli komutanlar "Kapıyı tutup çıkanları tek tek vuralım" dedi; Kürboğa ise hepsini ovada tek seferde imha etmek için ordusunu geri çekti.',
      'Tam Haçlılar saf tuttuğunda, Kürboğa’nın kibrinden ve topraklarını alma ihtimalinden korkan Şam Meliki Dukak ve diğer emîrler savaşmadan meydanı terk etti. Koca koalisyon bir anda çözüldü; Kudüs yolu Haçlılara açıldı.',
    ],
    highlightNote: {
      source: 'Tarihsel Kırılma',
      text: 'Kürboğa o sabah Köprü Kapısı’nı tutsaydı veya emîrlerini bir arada tutabilseydi, I. Haçlı Seferi Antakya surları önünde bitecek ve bir yıl sonra Kudüs düşmeyecekti.',
      tone: 'east',
    },
    camera: {
      center: [36.16, 36.202],
      zoom: 11.4,
      pitch: 52,
      bearing: 38,
    },
    activeRouteIds: ['kerbogha-campaign', 'syrian-coalition'],
    focusCityIds: ['antakya'],
    visual: {
      src: withBase('/images/arsiv/step7-jerusalem-bnf.jpg'),
      badge: 'ORTAÇAĞ EL YAZMASI MİNYATÜRÜ',
      caption: 'Antakya kırılmasının açtığı yol: 1099 Kudüs surları önünde kuşatma',
      credit: 'BnF Ortaçağ Haçlı Vekâyinâmesi Tezhibi (Kamu Malı)',
      objectPosition: 'center 35%',
    },
  },
];

export interface PropagandaCase {
  id: string;
  badge: string;
  title: string;
  verdict: string;
  claimTag?: string;
  claimSource: string;
  claimQuote: string;
  critiqueSource: string;
  critiqueAnalysis: string;
}

export const propagandaCases: PropagandaCase[] = [
  {
    id: 'robert-clermont',
    badge: 'VAKA 01 · CLERMONT VAHŞET EDEBİYATI',
    title: 'Vaftiz Kurnasında Sünnet Kanı ve Bağırsak İşkencesi İddiası',
    verdict: 'Savaş Propagandası / Kurgu',
    claimSource: 'Keşiş Robert (Robert the Monk), Historia Iherosolimitana (ykl. 1107)',
    claimQuote:
      '«Kilise sunaklarını kirlettikten sonra deviriyorlar. Hristiyanları zorla sünnet edip kanını vaftiz kurnalarının içine döküyorlar. İnsanları öldürmek istediklerinde göbeklerini delip bağırsaklarının ucunu bir kazığa bağlıyor, kurbanı kırbaçlayarak kazığın etrafında döndürüyorlar...»',
    critiqueSource: 'Görgü Tanığı Chartreslı Fulcherius (1095) & Süryani Mihail Vekâyinâmesi',
    critiqueAnalysis:
      '1095 Clermont Konsili’nde bizzat bulunan Fulcherius’un kaydında bu sadist işkencelerin hiçbiri yoktur; bunlar seferden 12 yıl sonra Fransa’dan hiç çıkmamış keşişlerce eklenmiştir. Üstelik bizzat Türk idaresinde yaşayan Antakya Süryani Ortodoks Patriği Süryani Mihail, Türklerin Hristiyan ilahiyatına karışmadığını ve Doğu kiliselerine Bizans’ın mezhep baskısından çok daha geniş bir dinî özerklik tanıdığını yazar.',
  },
  {
    id: 'guibert-gold',
    badge: 'VAKA 02 · TARİHSEL PROJEKSİYON (YANSITMA)',
    title: 'Yutulmuş Altınları Bulmak İçin Hacıların Karnının Yarılması',
    verdict: 'Tersyüz Edilmiş Projeksiyon',
    claimSource: 'Nogentlı Guibert, Dei gesta per Francos (ykl. 1108 — Fransa)',
    claimQuote:
      '«Yoksul Hristiyan hacıların altın yuttuklarından şüphelenerek ya zorla kusturucu içiriyorlar ya da iç organlarında gizlenmiş altın ve gümüş aramak için kılıçla karınlarını canlı canlı yarıp topuk derilerini yüzüyorlar.»',
    critiqueSource: 'Chartreslı Fulcherius & Gesta Francorum (1098 Maarra ve 1099 Kudüs Tanıklığı)',
    critiqueAnalysis:
      'Ömründe Fransa’dan çıkmayan Guibert bu detayı nereden aldı? Sefere katılan Fulcherius, Temmuz 1099 Kudüs katliamında bizzat Haçlı askerlerinin altın (bezant) yutmuş Müslüman cesetlerinin karınlarını kılıçla yardıklarını, zor gelince cesetleri yığıp yakarak küllerde altın aradıklarını gözleriyle görerek yazmıştı. Guibert, kendi ordusunun 1099’da işlediği gerçek suçu 1095’e tersinden yerleştirerek Haçlı katliamlarını meşrulaştırmıştır.',
  },
  {
    id: 'alexios-letter',
    badge: 'VAKA 03 · DİPLOMATİK SAHTECİLİK / ŞİŞİRME',
    title: 'İmparator Aleksios’tan Flandre Kontu Robert’e Mektup',
    verdict: 'Tahrif Edilmiş Tahrik Metni',
    claimSource: 'Epistula Alexii Komneni (Avrupa’da dolaşıma sokulan Latince metin)',
    claimQuote:
      '«Hristiyan bakireler ve rahibeler kilise sunakları üzerinde kirletiliyor, piskoposlara vaftiz kurnalarının dibinde cinsel saldırıda bulunuluyor; gelip Konstantinopolis’in kutsal emanetlerini ve hazinelerini koruyun...»',
    critiqueSource: 'Modern Filolojik ve Diplomatik Kaynak Kritiği (Chalandon, Joranson, Frankopan)',
    critiqueAnalysis:
      'Aleksios’un Batı’dan paralı asker istediği doğrudur; ancak eldeki Latince metnin üslubu ve kutsal emanet pazarlığı Bizans saray protokolüne tamamen aykırıdır. Metin, Batılı din adamlarınca Avrupa şövalyelerinin dinî ve cinsel tabularını kışkırtmak için kaleme alınmış bir savaş tahrik belgesidir (excitorium).',
  },
  {
    id: 'kerbogha-mother',
    badge: 'VAKA 04 · ANTAKYA ÖNÜNDE TEOLOJİK KURGU',
    title: 'Kürboğa ile Annesinin Savaş Öncesi Kehanet Konuşması',
    verdict: 'Savaş Propagandası / Kurgu',
    claimSource: 'Gesta Francorum, Kitap IX, Bölüm 22 (ykl. 1100)',
    claimQuote:
      'Kürboğa: «Sevgili anne, Tanrı’nın yalnızca Hristiyanları sevdiğini, Antakya’da bizi yeneceklerini ve benim bu yıl içinde ani bir ölümle öleceğimi sana kim söyledi? Bohemund ve Tankred Frankların tanrıları değil midir ki tek öğünde iki bin düve ile dört bin domuz yiyorlar?» — Annesi: «Sevgili oğlum, yüz yılı aşkın süredir kitabımızda Hristiyanların üzerimize gelip bizi her yerde yeneceği yazılıdır...»',
    critiqueSource: 'İslam Vekâyinâmeleri & Kronolojik Kanıt (1102 Hoy Vefatı)',
    critiqueAnalysis:
      'İslam kaynaklarında hiç yer almayan bu diyalogda Müslüman bir Türk komutanın annesi doğrudan İncil’den (Pavlus’un Mektupları’ndan) ayetler okur! Üstelik metin Kürboğa’nın "o yıl içinde (1098)" öleceğini kehanet eder; oysa Kürboğa savaştan dört yıl sonra, Ağustos 1102’de Azerbaycan’ın Hoy şehrinde hastalanarak vefat etmiştir.',
  },
];

export const verifiedViolenceFacts = [
  {
    title: '1. Uç Türkmen Akınları ve Esir Pazarları (1054–1085)',
    sources: 'Aristakes Lastivertsi (Ermeni), Attaleiates (Bizans)',
    detail:
      'Merkezi Selçuklu idaresi oturmadan önce Anadolu’ya giren özerk göçebe Türkmen boyları; Sivas (1059), Ani (1064) ve Kayseri (1067) gibi direnen kentlerde ortaçağ kuşatma hukuku gereği ağır yağma yapmış ve on binlerce kişiyi fidye/köle pazarları için esir almıştır. Ancak bu "dinî işkence ayini" değil, göçebe fetih şiddetiydi.',
  },
  {
    title: '2. 1077 Kudüs İsyanının Kanlı Bastırılması (Atsız bin Uvak)',
    sources: 'Kahire Genizası Yahudi Mektupları & İbnü’l-Esîr',
    detail:
      'Türkmen beyi Atsız bin Uvak 1071’de Kudüs’ü eman vererek kansız teslim almıştı. Fakat 1077’de Mısır seferinde yenildiği duyulunca Kudüs halkı ayaklanıp Türkmen garnizonunu kırdı. Geri dönen Atsız yaklaşık 3.000 kişiyi kılıçtan geçirdi. Öldürülenlerin ezici çoğunluğu Hristiyan hacılar değil, Fatımî yanlısı Müslüman Kudüslülerdi; ancak Kutsal Şehir’deki kanlı misilleme tüm bölgede dehşet uyandırdı.',
  },
  {
    title: '3. Çöken Hac Yolları, Ağır Vergiler ve Eşkiya Baskınları',
    sources: 'Alman Hac Kayıtları (1065) & Batı Kronikleri',
    detail:
      '1071 sonrası Anadolu ve Suriye Bizans–Selçuklu–Fatımî cephe hattına dönüşünce yol güvenliği çöktü. Silahsız hacılar geçiş vergilerine, fidye için alıkonulmalara ve eşkıya baskınlarına uğradı; soyulmuş halde Avrupa’ya dönen hacıların gerçek mağduriyetleri manastırlarda sadist işkence efsanelerine dönüştürüldü.',
  },
];

export const armySegments = [
  {
    id: 'turks',
    label: 'Türk Omurga (Oğuz/Türkmen Atlı Okçuları + Kıpçak/Türk Gulâmlar)',
    shareText: '%60 – %70',
    percent: 66,
    color: '#2cc5b3',
    commandNote: 'Komuta kademesinin %90’ından fazlası (Kürboğa, Dukak, Tuğtekin, Sökmen, Cenâhüddevle, Arslantaş)',
    detail:
      'Ordunun vurucu çekirdeği iki Türk unsurdan oluşuyordu: Diyarbakır-Hasankeyf hattından Artuklu Sökmen Bey’in getirdiği hareketli Türkmen atlı okçuları ve Musul-Şam-Humus emîrlerinin profesyonel kapıkulu süvarileri (Haçlıların korkuyla "Agulani" [el-gulâm] diye andığı baştan aşağı zırhlı birlikler).',
  },
  {
    id: 'arabs',
    label: 'Arap Aşiret Kuvvetleri (Benî Kilâb ve Benî Ukayl)',
    shareText: '%15 – %20 (Savaş öncesi çekildiler)',
    percent: 17,
    color: '#d99b4e',
    commandNote: 'Mirdâsî soyundan Vessâb bin Mahmûd liderliğinde Kuzey Suriye aşiret süvarileri',
    detail:
      'İbnü’l-Adîm’in (Zübdetü’l-Haleb) kaydına göre Halep Meliki Rıdvan’ın entrikaları yüzünden muharebeden hemen önce kampta Türkler ile Araplar arasında kavga çıktı ve Arap aşiret birliklerinin büyük kısmı Asi Nehri üzerinden savaş alanını terk etti.',
  },
  {
    id: 'kurds',
    label: 'Kürt Birlikleri (Musul, Diyarbakır ve Cezîre Kuşağı)',
    shareText: '%10 – %12',
    percent: 11,
    color: '#a78bfa',
    commandNote: 'Latin kroniklerinde açıkça "Curti" olarak zikredilen Yukarı Mezopotamya birlikleri',
    detail:
      'Musul hinterlandı ve eski Mervânî coğrafyasından (Diyarbakır-Cezîre dağlık kuşağı) koalisyona katılan süvari ve piyade unsurları.',
  },
  {
    id: 'others',
    label: 'İranlı / Deylemli Piyadeler ve Suriye Şehir Milisleri (Ahdâs)',
    shareText: '%5 – %8',
    percent: 6,
    color: '#d9485f',
    commandNote: 'Kuşatma ve kamp hizmetlerindeki yaya birlikler ile Şam/Humus milisleri',
    detail:
      'İran-Irak hattından gelen yaya okçular/mızraklılar ve Suriye kentlerinin yerel savunma milisleri (ahdâs).',
  },
];

export const berkyarukReasons = [
  {
    num: '01',
    title: 'Berkyaruk İran’da Taht Savaşlarıyla Kuşatılmıştı',
    text: '1097–1098’de Büyük Selçuklu Devleti kanlı bir iç savaş (fetret) yaşıyordu. Horasan isyanını yeni bastıran genç Sultan Berkyaruk, kardeşi Muhammed Tapar’ın darbe tehdidi altındaydı; İsfahan-Rey hattını bırakıp Suriye’ye gitmesi tahtını kaybetmesi demekti.',
  },
  {
    num: '02',
    title: 'Musul’un Geleneksel "Suriye Serhad Üssü" Konumu',
    text: 'Kürboğa Ekim 1096’da Ukaylîlere son verip Musul Emîri olmuştu. Selçuklu askeri coğrafyasında Musul, Irak ve İran’ı Kuzey Suriye’ye bağlayan ana sevkiyat kilit noktasıydı (sonraki yıllarda Mevdûd ve İmâdüddin Zengî de hep Musul üzerinden sefer yönetmiştir).',
  },
  {
    num: '03',
    title: 'Suriye Melikleri Rıdvan ve Dukak’a Güvenilememesi',
    text: 'Halep Meliki Rıdvan ve Şam Meliki Dukak, Berkyaruk’a isyan edip 1095’te öldürülen amcası Tutuş’un oğullarıydı. Hem birbirlerine düşmandılar (Rıdvan bir ara Fatımî Şii hutbesi bile okutmuştu) hem de Berkyaruk’a rakip hanedan koluydular.',
  },
  {
    num: '04',
    title: 'Kürboğa’nın Vefa Borcu ve Hazır Ordusu',
    text: 'Kürboğa 1095’te Halep/Humus’ta hapisken onu özgürlüğüne kavuşturan bizzat Berkyaruk’un fermanıydı. Serbest kalınca Harran, Nusaybin ve Musul’u alıp Fırat’ın doğusundaki en güçlü hazır orduyu kuran Kürboğa en doğal başkomutandı.',
  },
];

export interface ActorFate {
  name: string;
  role: string;
  stance: 'betrayer' | 'loyal';
  badgeText?: string;
  calculation1098: string;
  historicalPayback: string;
  endDate: string;
}

export const actorFates: ActorFate[] = [
  {
    name: 'Halep Meliki Fahrülmülûk Rıdvan',
    role: 'Orduya katılmayıp dışarıdan fitne sokan baş aktör',
    stance: 'betrayer',
    calculation1098:
      '«Kürboğa Antakya’yı kurtarırsa güçlenir ve dönüp Halep’i elimden alır.» Kürboğa’ya gizli mektuplar göndererek kardeşi Dukak’ı kuşkulandırdı ve kamptaki Arap-Türk kavgasını kışkırttı.',
    historicalPayback:
      'Burnunun dibinde Bohemund’un Antakya Haçlı Prensliği ile yapayalnız kaldı. Kellâ (1100) ve Artah (1105) savaşlarında ezildi, ağır haraca bağlandı; hatta Tankred’in dayatmasıyla Halep Ulu Camii minaresine haç/çan asılmasına boyun eğdi. Bâtınîlere sığındı; ölümünden hemen sonra oğulları öldürüldü ve soyu Halep’ten silindi.',
    endDate: 'Aralık 1113 · Halep Kalesi',
  },
  {
    name: 'Şam Meliki Şemsülmülûk Dukak',
    role: '28 Haziran sabahı savaş meydanından ilk çekilen lider',
    stance: 'betrayer',
    calculation1098:
      'Kürboğa’nın İçkale’ye kendi adamı Ahmed bin Mervân’ı koymasından ve Rıdvan ile yazışmasından ürkerek Şam birliklerini tek kılıç vurmadan meydandan çekti.',
    historicalPayback:
      'Antakya düşünce Kudüs yolu açıldı; Haçlılar 1099’da Kudüs’ü aldı, Şam’ın kıyı limanlarını kuşattı ve Şam’ın tahıl ambarı Havran’ı yağmaladı. Dukak savaştan sadece 6 yıl sonra genç yaşta eritici bir hastalıktan (verem / illetü’d-dıkk) öldü; hemen ardından kendi soyu iktidardan tasfiye edildi.',
    endDate: 'Haziran 1104 · Şam',
  },
  {
    name: 'Humus Emîri Cenâhüddevle Hüseyin',
    role: 'Rıdvan korkusuyla kamptaki güvensizlik krizini büyüten emîr',
    stance: 'betrayer',
    calculation1098:
      'Eski atabeyi olduğu üvey oğlu Rıdvan ile kanlı bıçaklıydı; Kürboğa zafer kazanırsa Humus’un Rıdvan’a verileceğinden korktu (muharebe günü pusuda son çekilenlerden olsa da koalisyonun içten çürümesinde kilit rol oynadı).',
    historicalPayback:
      'Birkaç ay içinde Haçlılar onun Hısnü’l-Ekrâd (Krak des Chevaliers) kalesini işgal etti; Humus’u kurtarmak için Haçlılara haraç ödedi. 1 Mayıs 1103’te Humus Ulu Camii’nde Cuma namazındayken —Rıdvan’ın azmettirdiği düşünülen— üç Bâtınî (Haşhaşî) fedaisi tarafından hançerlenerek öldürüldü.',
    endDate: '1 Mayıs 1103 · Humus Ulu Camii',
  },
  {
    name: 'Şam Atabeyi Zahîrüddin Tuğtekin',
    role: 'Şam ordusunun fiilî komutanı (siyaseten kazanan, stratejik sıkışan)',
    stance: 'betrayer',
    calculation1098:
      'Melik Dukak ile birlikte Şam ordusunu muharebeden geri çekerek kuvvetlerini korudu.',
    historicalPayback:
      '1104’te Dukak ölünce Şam’da kendi Börîler Atabeyliği’ni kurup 1128’e kadar hüküm sürdü. Ancak Şam Akdeniz’e tamamen kapandı; yıllarca Kudüs Krallığı ile vergi paylaşımı (münâsafa) antlaşmaları yapmak zorunda kaldı. 1113’te Musul Emîri Mevdûd Şam’da suikasta uğradığında kaynaklar yine Tuğtekin’den şüphelendi.',
    endDate: '1128 · Şam',
  },
  {
    name: 'Vessâb bin Mahmûd ve Benî Kilâb',
    role: 'Muharebe öncesi Asi üzerinden ayrılan Arap aşiret reisi',
    stance: 'betrayer',
    calculation1098:
      'Kamptaki Türk-Arap gerginliği ve Rıdvan’ın kışkırtması üzerine meydan muharebesini beklemeden aşiret süvarilerini çekti.',
    historicalPayback:
      'Antakya ve Kuzey Suriye ovalarına Haçlı şövalyeleri yerleşince Benî Kilâb kabilesi yüz yıllık otlaklarını ve Halep üzerindeki nüfuzunu kalıcı biçimde kaybetti; Fırat kıyılarına sıkışan küçük yerel beylere dönüştü.',
    endDate: '12. yüzyıl başı · Fırat boyları',
  },
  {
    name: 'Artuklu Sökmen Bey (Karşılaştırma: Terk Etmeyen)',
    role: 'Kapıyı tutmayı öneren ve meydanı en son terk eden Türkmen beyi',
    stance: 'loyal',
    calculation1098:
      '«Kapıda durup dar köprüden çıkanları tek tek öldürelim» tavsiyesi Kürboğa tarafından reddedilmesine rağmen pusudaki yerini terk etmedi ve en son çekilen komutan oldu.',
    historicalPayback:
      'Antakya bozgunundan iki ay sonra (Ağustos 1098) Fatımîler bu zaaftan yararlanıp Sökmen ve kardeşi İlgazi’den Kudüs’ü aldı. Ancak Sökmen pes etmedi; Mayıs 1104 Harran Muharebesi’nde Haçlıları ilk kez büyük bir meydan savaşında ezerek Antakya’nın yenilmezlik büyüsünü kırdı.',
    endDate: 'Ekim 1104 · Harran Zaferi sonrası',
  },
];

export const otherFronts = [
  {
    id: 'turks-front',
    tabTitle: 'Türk Kalkanı ve Omurgası',
    period: '1096 – 1291 (Başlangıç Kalkanı ve Son Tasfiye)',
    summary:
      '1096–1190 arasında Anadolu kara yolunu geçilmez kılan Türkiye Selçukluları ve Danişmendliler (1101 ve 1147 ordularını Anadolu’da eriten güç), 1144’te Urfa’yı geri alıp karşı-cihadı başlatan Zengîler ve 1250–1291 arasında Haçlıları kıyıdan tamamen söküp atan Kıpçak-Türk Bahrî Memlûkler ("ed-Devletü’t-Türkiyye").',
    keyFact:
      '1190’dan sonra Haçlılar Anadolu kara yolundan vazgeçip tamamen deniz yoluna döndü; aynı yıl Batı kronikleri Anadolu için tarihte ilk kez "Turchia" (Türkiye) adını kullandı.',
  },
  {
    id: 'kurds-ayyubids',
    tabTitle: 'Kürtler ve Eyyûbî Hanedanı',
    period: '1171 – 1250 (Kudüs’ün Kurtuluşu ve Büyük Savunma)',
    summary:
      'Nûreddin Zengî’nin askeri-kurumsal mirası üzerinde Mısır ve Suriye’yi birleştiren Kürt (Hezbâniyye/Revvâdî) kökenli Selahaddin Eyyûbî, 1187 Hıttîn Zaferi ile Haçlı ordusunu imha edip Kudüs’ü geri aldı. Ardından Eyyûbî sultanları (el-Âdil, el-Kâmil, es-Sâlih Eyyûb) III., V., VI. ve VII. Haçlı Seferlerini göğüsledi.',
    keyFact:
      'Eyyûbî ordusu sırf tek bir etnik gruptan değil; Kürt emîrleri, Türk gulâm/Türkmen komutanları (ör. Gökböri) ve Arap birliklerinin oluşturduğu ortak bir sentezden oluşuyordu.',
  },
  {
    id: 'fatimids',
    tabTitle: 'Mısır Fatımî Halifeliği',
    period: '1099 – 1160’lar (Güney Cephesi ve Deniz Savunması)',
    summary:
      'Temmuz 1099’da Kudüs’ü Haçlılara karşı savunan garnizon Türk değil, Şii Fatımî Devleti’ydi. İlk 50 yıl boyunca Filistin’de Askalân ve Remle meydan muharebelerini veren Fatımî ordusu; Arap süvarileri, Berberiler, Ermeni asıllı vezir/okçular ve Sudanlı/Nübyeli piyadelerden oluşuyordu.',
    keyFact:
      'Doğu Akdeniz’de İtalyan Haçlı filolarına karşı denizde düzenli savaş verebilen tek Müslüman donanma uzun süre Mısır Fatımî donanması oldu.',
  },
  {
    id: 'arabs-berbers',
    tabTitle: 'Arap Emirlikleri ve Berberiler',
    period: '1099 – 1270 (Şehir Direnişleri ve Kuzey Afrika)',
    summary:
      'Trablusşam’da Ammâroğulları dışarıdan neredeyse hiç yardım almadan Haçlı kuşatmasına tam 10 yıl (1099–1109) direndi; Şeyzer’de Münkızoğulları (Üsâme İbn Münkız’ın ailesi) on yıllarca çarpıştı; Mısır’da yerli Arap gönüllüler Dimyat ve Mansûre’yi savundu; 1270’teki VIII. Haçlı Seferi’ni ise Tunus’ta Berberi Hafsî Sultanlığı durdurdu.',
    keyFact:
      'İki asır kesintisiz savaşla geçmedi; ateşkesler, ticaret ve hatta Müslüman ile Haçlı beylerinin rakip kardeşlerine karşı kurduğu askeri ittifaklar dönemin rutiniydi.',
  },
  {
    id: 'byzantines',
    tabTitle: 'Ortodoks Hristiyanlar (Bizans)',
    period: '1096 – 1261 (Müttefikten Kurbana)',
    summary:
      'Haçlılar Balkanlar’dan geçerken Macarlar, Bulgarlar ve Bizans birlikleriyle defalarca çatıştı. En sonunda IV. Haçlı Seferi (1204) Kudüs’e gitmek yerine Hristiyan Konstantinopolis’i işgal ve yağma etti; İznik Rum İmparatorluğu 57 yıl Haçlılarla savaşıp 1261’de İstanbul’u geri aldı.',
    keyFact:
      '«İstanbul’da Latin külahı görmektense Türk sarığı görmeyi yeğleriz» sözü, doğrudan 1204 Haçlı yağmasının Ortodoks dünyasında açtığı kapanmaz yaradan doğmuştur.',
  },
];

export const balanceRows = [
  {
    dimension: 'Görünürdeki Askeri ve Toprak Davası',
    crusadersVerdict: 'KESİN BAŞARISIZLIK',
    crusadersDetail:
      'Kudüs’ü yalnızca 88 yıl tutabildiler; 1291 Akka’nın düşüşüyle Doğu Akdeniz anakarasındaki son Haçlı kalesi de tasfiye edildi.',
    turksVerdict: 'KALICI ZAFER',
    turksDetail:
      'İlk darbede İznik kaybedilip Batı’ya yürüyüş ~200 yıl gecikse de Anadolu kalıcı yurt ("Turchia") oldu ve Haçlı devletleri sökülüp atıldı.',
  },
  {
    dimension: 'Bizans ve Hristiyan Birliği Hedefi',
    crusadersVerdict: 'TAM TERSİ FELAKET',
    crusadersDetail:
      'Kurtarmaya geldikleri Bizans’ı 1204’te kendileri yıktılar; Katolik–Ortodoks kopuşu kalıcı nefrete dönüştü.',
    turksVerdict: 'TARİHSEL STRATEJİK HEDİYE',
    turksDetail:
      'Haçlıların Bizans’ı parçalayıp zayıflatması, uç Türkmenlerine ve Osmanlı Beyliği’ne Balkanlar ile Viyana kapılarının yolunu açtı.',
  },
  {
    dimension: 'Arka Plandaki İç Siyasi Dönüşüm',
    crusadersVerdict: 'BÜYÜK YAPISAL BAŞARI',
    crusadersDetail:
      'Kavgacı derebeyleri Doğu’da eriyince Avrupa iç barışa kavuştu; Fransa ve İngiltere gibi güçlü merkezi ulusal krallıklar doğdu.',
    turksVerdict: 'İSLAM DÜNYASI LİDERLİĞİ',
    turksDetail:
      '200 yıl boyunca hem Haçlı hem Moğol istilasına kalkan olan Türkler, tüm Sünnî dünyada meşru siyasi-askeri önder konumuna yükseldi.',
  },
  {
    dimension: 'Ekonomi, Denizler ve Yeni Çağ Hazırlığı',
    crusadersVerdict: 'YENİ ÇAĞIN TEMELİ ATILDI',
    crusadersDetail:
      'Venedik ve Ceneviz Akdeniz ticaretini ele geçirdi; Doğu’dan taşınan sermaye, bankacılık ve bilim İtalyan Rönesansı’nı ve Coğrafi Keşifleri besledi.',
    turksVerdict: 'DENİZLERİN KAYBI & KAPANMA',
    turksDetail:
      'Kara yolları tutuldu ama deniz üstünlüğü İtalyanlara geçti; iki asırlık Haçlı ve Moğol yıkımı açık "Altın Çağ" iklimini güvenlikçi bir savunma psikolojisine itti.',
  },
];

export const primarySourcesGuide = [
  {
    name: 'Gesta Francorum (Frankların İşleri)',
    side: 'Haçlı / Latin Görgü Tanığı (ykl. 1100)',
    desc: 'Bohemund’un ordusundaki isimsiz bir şövalye tarafından yazılan en eski birincil Haçlı kaynağı. Kuşatmadaki açlığı, "ip cambazlarını", beyaz atlı azizler anlatısını ve Kürboğa’nın annesi kurgusunu içerir.',
  },
  {
    name: 'Chartreslı Fulcherius (Historia Hierosolymitana)',
    side: 'Haçlı / Latin Görgü Tanığı (1095–1127)',
    desc: 'Hem 1095 Clermont Konsili’nde bizzat bulunmuş hem de Baudouin ile Urfa ve Kudüs’e gitmiş rahip. Clermont’un abartısız ilk metnini ve 1099’da yutulmuş altın için cesetlerin yakıldığını kaydeder.',
  },
  {
    name: 'İbnü’l-Kalânisî (Zeylü Târîhi Dımaşk)',
    side: 'İslam / Şam Çağdaş Kaynağı (1073–1160)',
    desc: 'Şam divan başkanı ve devlet adamı. Olaylar yaşanırken hayatta olan en yakın Suriyeli Müslüman tanık; Şam ve Suriye emîrlerinin Kürboğa’ya duyduğu siyasi kuşkuyu ilk elden aktarır.',
  },
  {
    name: 'Kemâleddîn İbnü’l-Adîm (Zübdetü’l-Haleb)',
    side: 'İslam / Halep Kaynağı (1192–1262)',
    desc: 'Artık kayıp olan erken dönem Kuzey Suriye arşivlerine dayanan Halepli tarihçi; Rıdvan’ın entrikalarını, Firûz’u ve kamptaki Türk–Arap (Vessâb bin Mahmûd) çatışmasını en ince ayrıntısıyla verir.',
  },
  {
    name: 'İbnü’l-Esîr (el-Kâmil fi’t-Târîh)',
    side: 'İslam / Musul-Cezîre Kaynağı (1160–1233)',
    desc: 'Musul coğrafyasını yakından tanıyan büyük tarihçi; Köprü Kapısı önündeki taktik tartışmayı ve emîrlerin "tek kılıç vurmadan, ok atmadan" meydanı terk edişini berrak bir otopsiyle analiz eder.',
  },
  {
    name: 'Urfalı Mateos & Süryani Mihail Vekâyinâmeleri',
    side: 'Doğu Hristiyan (Ermeni & Süryani) Kaynakları',
    desc: 'Bölgenin yerli Hristiyan tanıkları; Kürboğa’nın Urfa önündeki 3 haftalık gecikmesini ve Doğu kiliselerinin Bizans ile Selçuklu idaresi arasındaki gerçek konumunu belgeler.',
  },
  {
    name: 'Kahire Genizası Belgeleri',
    side: 'Yahudi Tüccar ve Cemaat Mektupları (11. Yüzyıl)',
    desc: 'Eski Kahire’deki Ben Ezra Sinagogu arşivinde korunan gerçek zamanlı mektuplar; 1071–1077 Kudüs olaylarını edebî süsleme olmaksızın günlük hayat içinden doğrular.',
  },
];
