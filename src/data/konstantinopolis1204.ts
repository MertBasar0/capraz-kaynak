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

export const konstantinopolisCompassScenes = [
  { id: 'prolog', shortLabel: 'Giriş' },
  { id: 'sahne-harita', shortLabel: '01 · Venedik’ten Haliç’e' },
  { id: 'sahne-propaganda', shortLabel: '02 · Söylem & Kritiği' },
  { id: 'sahne-ordu', shortLabel: '03 · Dandolo & Donanma' },
  { id: 'sahne-kopru-kapisi', shortLabel: '04 · Surlar & Ayasofya' },
  { id: 'sahne-ihanet', shortLabel: '05 · Altı Aktörün Sonu' },
  { id: 'sahne-bilanco', shortLabel: '06 · İznik, Trabzon & Terazi' },
];

export const konstantinopolisHeroVisuals: {
  prologue: VisualAsset;
  propagandaHorses: VisualAsset;
  coalitionCamp: VisualAsset;
  battleSack4A: VisualAsset;
  hagiaSophia4B: VisualAsset;
  post1204Tetrarchs: VisualAsset;
} = {
  prologue: {
    src: withBase('/images/arsiv/konstantinopolis-1204/prologue-delacroix-1204.jpg'),
    badge: 'LOUVRE MÜZESİ · EUGÈNE DELACROIX (1840)',
    caption:
      '12–13 Nisan 1204: Kudüs İçin Yola Çıkan IV. Haçlı Seferi Ordusunun Doğu Roma Başkenti Konstantinopolis’e Girişi ve Üç Günlük Büyük Yağma',
    credit: 'Eugène Delacroix, Entrée des Croisés à Constantinople (12 avril 1204), Musée du Louvre, Inv. 3821 (Kamu Malı)',
    isEngraving: false,
    objectPosition: 'center 38%',
  },
  propagandaHorses: {
    src: withBase('/images/arsiv/konstantinopolis-1204/propaganda-horses-san-marco.jpg'),
    badge: 'SAN MARCO BAZİLİKASI · 1204 GANİMETİ TUNÇ QUADRİGA',
    caption:
      'Konstantinopolis Hipodromu’ndan Sökülerek Venedik’e Taşınan Dört Antik Yaldızlı Tunç At (Cavalli di San Marco): «Kutsal Emanet Kurtarma» Söyleminin Somut İmparatorluk Ganimeti',
    credit: 'Museo di San Marco, Venedik (Antik Yunan/Roma Tunç Quadrigası, 1204’te Konstantinopolis’ten Taşındı · CC BY-SA 3.0)',
    objectPosition: 'center 42%',
  },
  coalitionCamp: {
    src: withBase('/images/arsiv/konstantinopolis-1204/army-dandolo-fleet.jpg'),
    badge: 'BNF FRANÇAIS 2824 · 14. YÜZYIL FRANSIZ EL YAZMASI (FOL. 181R)',
    caption:
      'Dördüncü Haçlı Seferi Baronları ve Donanmasının Venedik’te Toplanışı: 85.000 Köln Gümüş Marklık Navlun Sözleşmesi ve Lido Kapanı',
    credit: 'Histoire d’Outremer, Bibliothèque nationale de France, MS Français 2824, fol. 181r (Kamu Malı)',
    objectPosition: 'center 45%',
  },
  battleSack4A: {
    src: withBase('/images/arsiv/konstantinopolis-1204/battle-sack-1204-manuscript.jpg'),
    badge: 'ARSENAL KÜTÜPHANESİ MS 5090 · LOYSET LIÉDET TEZHİBİ (1462)',
    caption:
      '9–12 Nisan 1204: Venedik Kalyonlarının Uçan Köprülerinden Haliç Deniz Surlarındaki Burçlara Doğrudan Taarruz ve Şehrin Düşüşü',
    credit:
      'David Aubert / Loyset Liédet, Chroniques des empereurs, Bibliothèque de l’Arsenal (BnF), MS 5090, fol. 205r [319r] (1462, Kamu Malı)',
    objectPosition: 'center 46%',
  },
  hagiaSophia4B: {
    src: withBase('/images/arsiv/konstantinopolis-1204/step1f-sea-walls-assault-1204.jpg'),
    badge: 'VENEDİK DÜKÜN SARAYI · PALMA IL GIOVANE (16. YÜZYIL SONU)',
    caption:
      '12–13 Nisan 1204’te Konstantinopolis’in Zaptı: Niketas Khoniates’in Selahaddin Eyyûbî’nin 1187 Kudüs Fethindeki Merhametiyle Kıyasladığı Üç Günlük Yağma',
    credit: 'Palma il Giovane, La presa di Costantinopoli (1204), Palazzo Ducale, Sala del Maggior Consiglio, Venedik (Kamu Malı)',
    objectPosition: 'center 44%',
  },
  post1204Tetrarchs: {
    src: withBase('/images/arsiv/konstantinopolis-1204/aftermath-tetrarchs-venice.jpg'),
    badge: 'SAN MARCO HAZİNE KÖŞESİ & İSTANBUL MYRELAİON ARKEOLOJİ KANITI',
    caption:
      '1204’te Konstantinopolis Philadelphion Meydanı’ndan Sökülüp Venedik’e Götürülen Porfir «Dört Tetrark» Heykeli (Kırık Topuk Parçası 1965’te İstanbul Bodrum Camii Kazısında Bulundu)',
    credit: 'Basilica di San Marco, Venedik (Fotoğraf: Wolfgang Moroder, CC BY-SA 3.0)',
    objectPosition: 'center 35%',
  },
};

export const konstantinopolisPrologueConfig = {
  badges: [
    { text: 'DOSYA 04 · ETKİLEŞİMLİ BELGESEL', variant: 'west' as const },
    { text: '8 BİRİNCİL VEKÂYİNÂME ÇAPRAZ OKUMASI', variant: 'east' as const },
    { text: 'VILLEHARDOUIN · KHONIATES · CLARI · KARTLIS TSKHOVREBA', variant: 'turquoise' as const },
  ],
  titleMain: 'Hedef Şaşıran Sefer:',
  titleAccent: '1204 Konstantinopolis Yağması, Venedik Borç Kapanı ve Parçalanan İmparatorluk',
  leadHtml:
    '1187 Hıttîn ve Kudüs’ün kaybından sonra Mısır üzerinden Kutsal Toprakları geri almak için yola çıkan <strong>IV. Haçlı Seferi</strong>, nasıl oldu da <strong>85.000 gümüş marklık</strong> bir navlun borcu ve tahtından indirilmiş bir Bizans prensinin ödeyemediği vaatler yüzünden dünyanın en büyük Hristiyan metropolünü yağmaladı? Champagne Mareşali <strong>Geoffroi de Villehardouin</strong>, yoksul şövalye <strong>Clari’li Robert</strong>, görgü tanığı <strong>Niketas Khoniates</strong>, <strong>Papa III. Innocentius</strong> ve <strong>Anonim Gürcü Kroniği (<em>Kartlis Tskhovreba</em>)</strong>’nin özgün satırlarıyla 1201–1204 kırılmasını yan yana okuyun.',
  visual: konstantinopolisHeroVisuals.prologue,
  chronometer: [
    {
      year: 'Nisan 1201 · Venedik Sözleşmesi',
      desc: '33.500 asker için 85.000 Köln gümüş markı anlaşması; Lido’ya 12.000 kişi gelince doğan 34.000 marklık borç kapanı',
    },
    {
      year: '10–24 Kasım 1202 · Zara',
      desc: 'Borç karşılığı Hristiyan Macar kralının kenti Zara’nın yağmalanması ve Papa III. Innocentius’un aforoz kararı',
    },
    {
      year: 'Temmuz – Ağustos 1203',
      desc: 'Prens IV. Aleksios ile ilk kuşatma, Haliç zincirinin kırılması ve Müslüman tüccarların Mitaton Camii’nden başlayan Büyük Yangın',
    },
    {
      year: '12 – 15 Nisan 1204',
      desc: 'Haliç deniz surlarının düşüşü, Ayasofya yağması, İznik ve Kraliçe Tamar destekli Trabzon İmparatorluğu’nun doğuşu',
      active: true,
    },
  ],
};

export const konstantinopolisCities: CityMarker[] = [
  {
    id: 'venedik',
    name: 'Venedik (Lido di San Nicolò)',
    historicalName: 'Nisan 1201 Antlaşması · Yaz 1202 Lido Borç Kapanı',
    coords: [12.338, 45.434],
    faction: 'crusader',
  },
  {
    id: 'zara',
    name: 'Zara (Zadar)',
    historicalName: '10–24 Kasım 1202 Kuşatması · Papa’nın Aforozu',
    coords: [15.224, 44.115],
    faction: 'contested',
  },
  {
    id: 'roma',
    name: 'Roma (Laterano)',
    historicalName: 'Papa III. Innocentius · Aforoz ve Kınama Mektupları',
    coords: [12.496, 41.89],
    faction: 'imperial',
  },
  {
    id: 'korfu',
    name: 'Korfu (Kerkyra)',
    historicalName: 'Mayıs 1203 · Zara Teklifinin Prens IV. Aleksios ile Onaylanması',
    coords: [19.922, 39.624],
    faction: 'crusader',
  },
  {
    id: 'konstantinopolis',
    name: 'Konstantinopolis (Haliç & Blakhernai)',
    historicalName: 'Temmuz 1203 İlk Kuşatma · 12–15 Nisan 1204 Büyük Yağma',
    coords: [28.978, 41.008],
    faction: 'byzantine',
  },
  {
    id: 'galata',
    name: 'Galata Kulesi & Haliç Zinciri',
    historicalName: '5–6 Temmuz 1203 Zincirin Kırılışı · Kosmidion Karargâhı',
    coords: [28.974, 41.025],
    faction: 'contested',
  },
  {
    id: 'edirne',
    name: 'Hadrianopolis (Edirne)',
    historicalName: '14 Nisan 1205 Bulgar–Kuman Zaferi · İmparator Baudouin Esareti',
    coords: [26.556, 41.677],
    faction: 'contested',
  },
  {
    id: 'selanik',
    name: 'Selanik (Thessalonike)',
    historicalName: 'Montferratlı Bonifacio Krallığı (1204–1207)',
    coords: [22.944, 40.64],
    faction: 'crusader',
  },
  {
    id: 'iznik',
    name: 'İznik (Nikaia)',
    historicalName: '1204–1261 İznik İmparatorluğu Başkenti (I. Theodoros Laskaris)',
    coords: [29.721, 40.429],
    faction: 'byzantine',
  },
  {
    id: 'konya',
    name: 'Konya (İkonion)',
    historicalName: 'Türkiye Selçuklu Başkenti · I. Gıyâseddin Keyhüsrev (1205)',
    coords: [32.485, 37.871],
    faction: 'seljuk',
  },
  {
    id: 'antalya',
    name: 'Antalya (Attaleia)',
    historicalName: '5 Mart 1207 Türkiye Selçuklu Fethi · Akdeniz Kapısı',
    coords: [30.713, 36.897],
    faction: 'seljuk',
  },
  {
    id: 'sinop',
    name: 'Sinop (Sinope)',
    historicalName: 'Kasım 1214 I. İzzeddin Keykâvus Fethi · Karadeniz Limanı',
    coords: [35.151, 42.027],
    faction: 'seljuk',
  },
  {
    id: 'trabzon',
    name: 'Trabzon (Trapezous)',
    historicalName: 'Nisan 1204 Kraliçe Tamar Desteğiyle Komnenos İmparatorluğu',
    coords: [39.717, 41.003],
    faction: 'georgian',
  },
  {
    id: 'tiflis',
    name: 'Tiflis / Vardzia',
    historicalName: 'Gürcistan Kraliçesi Tamar (1184–1213) · Karadeniz Seferi',
    coords: [44.793, 41.693],
    faction: 'georgian',
  },
];

export const konstantinopolisRoutes: RouteLine[] = [
  {
    id: 'venice-zara-corfu-1202',
    label: 'Ekim 1202 – Mayıs 1203 Venedik–Zara–Korfu Rotası',
    color: '#d9485f',
    coordinates: [
      [12.338, 45.434],
      [13.72, 45.05],
      [15.224, 44.115],
      [18.09, 42.65],
      [19.922, 39.624],
    ],
  },
  {
    id: 'corfu-constantinople-1203',
    label: 'Mayıs – Haziran 1203 Korfu’dan Çanakkale ve Haliç’e Yürüyüş',
    color: '#d9485f',
    coordinates: [
      [19.922, 39.624],
      [22.95, 36.45],
      [24.05, 37.65],
      [26.4, 40.15],
      [27.55, 40.6],
      [28.978, 41.008],
    ],
  },
  {
    id: 'unfulfilled-egypt-route',
    label: '1201 Gizli Planındaki İptal Edilen İskenderiye / Mısır Hedefi',
    color: '#a78bfa',
    dashed: true,
    coordinates: [
      [19.922, 39.624],
      [25.15, 35.34],
      [29.918, 31.2],
    ],
  },
  {
    id: 'nicaea-seljuk-corridor',
    label: '1204 Sonrası İznik İmparatorluğu & Selçuklu Antalya–Sinop Ekseni',
    color: '#d99b4e',
    dashed: true,
    coordinates: [
      [28.978, 41.008],
      [29.721, 40.429],
      [32.485, 37.871],
      [30.713, 36.897],
      [32.485, 37.871],
      [35.151, 42.027],
    ],
  },
  {
    id: 'tamar-trebizond-1204',
    label: 'Nisan 1204 Kraliçe Tamar’ın Trabzon–Samsun–Ereğli Karadeniz Seferi',
    color: '#2cc5b3',
    coordinates: [
      [44.793, 41.693],
      [42.268, 42.25],
      [39.717, 41.003],
      [38.39, 40.91],
      [36.33, 41.29],
      [35.151, 42.027],
      [31.42, 41.28],
    ],
  },
];

export const konstantinopolisLegendItems = [
  { color: '#d9485f', label: 'Venedik & IV. Haçlı Donanması (1202–1204)' },
  { color: '#a78bfa', label: 'İptal Edilen Asıl Hedef (Mısır / İskenderiye)' },
  { color: '#2cc5b3', label: 'Nisan 1204 Kraliçe Tamar & Trabzon Seferi' },
  { color: '#d99b4e', label: '1204 Sonrası İznik & Türkiye Selçuklu Ekseni' },
];

export const konstantinopolisRingHighlights = [
  { id: 'zara-1202-ring', coords: [15.224, 44.115] as [number, number], color: '#a78bfa' },
  { id: 'constantinople-1204-ring', coords: [28.978, 41.008] as [number, number], color: '#d9485f' },
  { id: 'trebizond-1204-ring', coords: [39.717, 41.003] as [number, number], color: '#2cc5b3' },
];

export const konstantinopolisMapSteps: MapStep[] = [
  {
    id: 'step-1a-venice-treaty-debt',
    stepLabel: 'SAHNE 1A · VENEDİK ANLAŞMASI VE LİDO KAPANI',
    dateBadge: 'Nisan 1201 – Ağustos 1202',
    locationBadge: 'Venedik (San Marco Bazilikası & Lido Adası)',
    title: '85.000 Gümüş Marklık Hesap Hatası: 33.500 Kişi Beklenirken 12.000 Asker Gelince Kurulan Kapan',
    narrative: [
      '1187 Hıttîn ve Kudüs’ün kaybından (Dosya 02) sonra Papa III. Innocentius’un çağrısıyla toplanan Fransız ve Flaman baronları, Champagne Mareşali <strong>Geoffroi de Villehardouin</strong> başkanlığında altı tam yetkili elçiyi Şubat 1201’de Venedik’e gönderdi. Doj <strong>Enrico Dandolo</strong> ile <strong>Nisan 1201</strong>’de imzalanan sözleşmede gizli askeri hedef doğrudan Kudüs değil, Eyyûbî gücünün kalbi olan <strong>Mısır (Babil / Kahire ve İskenderiye)</strong> idi.',
      'Elçiler <strong>4.500 şövalye, 4.500 at, 9.000 silahtar ve 20.000 yaya serjant</strong> (toplam <strong>33.500 kişi</strong>) için bir yıllık gemi hizmeti ve dokuz aylık erzak karşılığında Venedik’e <strong>85.000 Köln gümüş markı</strong> (~20 ton saf gümüş) ödemeyi ve tüm fetihlerin yarısını vermeyi taahhüt etti. Venedik tüm ticaretini durdurup 50 silahlı kadırga ile yüzlerce nakliye gemisini eksiksiz inşa etti; ancak 1202 yazında Lido Adası’na Haçlıların yalnızca üçte biri (~11.000–12.000 kişi) geldi. Baronlar bütün altın ve gümüş kaplarını topladıkları halde <strong>34.000 gümüş mark</strong> açık kaldı.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Geoffroi de Villehardouin, La Conquête de Constantinople (§§21–23, nşr. E. Faral, c. I, Paris 1938 [2. bs. 1961], s. 22–25 [Eski Fr. s. 22, 24]; krş. nşr. N. de Wailly, Paris 1872, s. 14–15)',
      text: '«[...] 4.500 at ve 4.500 şövalye, 9.000 silahtar [escuier] ve 20.000 yaya serjant taşımak üzere gemiler sağlayacağız; ve bütün bu atlar ile insanların dokuz ay boyunca erzak ve yem anlaşması yapılacaktır. Siz bize, at başına dört mark ve insan başına iki mark olmak üzere, bu şartları yerine getirmek için 85.000 [Köln ağırlığı gümüş] markı ödeyeceksiniz. Gemileri Venedik limanından ayrıldığımız günden itibaren bir yıl boyunca hizmette tutacağız. Ve buna ek olarak, Tanrı aşkına kendi masrafımızla 50 silahlı kadırga katacağız; şu şartla ki, denizde veya karada yapacağımız bütün toprak ve mal fetihlerinin yarısı bizim, diğer yarısı sizin olacaktır.»',
      tone: 'west',
    },
    camera: {
      center: [12.338, 45.434],
      zoom: 6.8,
      pitch: 42,
      bearing: 16,
    },
    activeRouteIds: ['venice-zara-corfu-1202'],
    focusCityIds: ['venedik', 'roma', 'zara'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1a-dandolo-venice-dore.jpg'),
      badge: 'TARİHÎ ÇELİK GRAVÜR · GUSTAVE DORÉ (1877)',
      caption: 'Seksen Yaşını Aşkın Âmâ Venedik Doju Enrico Dandolo’nun San Marco Bazilikası’nda Haçlı Seferi Antlaşmasını İlan Edişi',
      credit: 'Gustave Doré, Histoire des Croisades (Paris, 1877, Kamu Malı)',
      isEngraving: true,
      objectPosition: 'center 32%',
    },
  },
  {
    id: 'step-1b-zara-siege-excommunication',
    stepLabel: 'SAHNE 1B · ZARA KUŞATMASI VE PAPA’NIN AFOROZU',
    dateBadge: '10 – 24 Kasım 1202',
    locationBadge: 'Zara (Zadar · Dalmaçya Kıyısı)',
    title: 'İlk Kırmızı Çizginin Aşılması: Borç Ertelemesi İçin Hristiyan Zara’nın Yağmalanması',
    narrative: [
      'Lido’da mahsur kalan ordu dağılma noktasına gelince Doj Enrico Dandolo dahiyane bir mali-askeri çıkış sundu: Eğer Haçlılar, Dalmaçya kıyısında Venedik’ten kopup kendisi de haç çıkarmış bir Hristiyan hükümdar olan <strong>Macaristan Kralı İmre</strong>’nin himayesine giren <strong>Zara (Zadar)</strong> limanını Venedik adına zapt ederlerse, 34.000 marklık borcun tahsili bir sonraki fetihlere ertelenecekti.',
      '10 Kasım 1202’de 300 parçalık donanma Zara önüne demirledi. Kuşatma çadırında Cîteaux tarikatından <strong>Vaux-de-Cernay Başrahibi Guy</strong> ayağa kalkıp <strong>Papa III. Innocentius</strong>’un mektubunu okudu ve surlarına haç asılmış bir Hristiyan şehrine saldıran herkesin <strong>aforoz edileceğini</strong> bildirdi. Simon de Montfort gibi bazı şövalyeler ordudan ayrıldı; fakat yüksek baronlar Venedik’e verdikleri sözü gerekçe göstererek 24 Kasım 1202’de Zara’yı düşürüp yağmaladı ve kışı aforoz edilmiş bir ordu olarak geçirdi.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Geoffroi de Villehardouin, La Conquête de Constantinople (§83, nşr. E. Faral, c. I, Paris 1938 [2. bs. 1961], s. 82–85 [Eski Fr. s. 82, 84]; krş. nşr. N. de Wailly, Paris 1872, s. 46–49)',
      text: '«O sırada Cîteaux tarikatından Vaux[-de-Cernay] Başrahibi [Guy] ayağa kalktı ve onlara dedi ki: "Efendiler, Roma Papası adına size bu şehre saldırmanızı yasaklıyorum; zira burası Hristiyanların şehridir ve sizler hacılarsınız." Doj [Dandolo] bu sözü duyunca çok öfkelendi ve sarsıldı; kontlar ile baronlara dedi ki: "Efendiler, ben bu şehrin kendi istediğim şartlarla teslimi için anlaşmayı sağlamıştım, fakat sizin adamlarınız bunu elimden alıp bozdu; oysa siz onu fethetmemde bana yardım etmeye söz vermiştiniz, şimdi sizi bu sözünüzü tutmaya çağırıyorum!"»',
      tone: 'witness',
    },
    camera: {
      center: [15.224, 44.115],
      zoom: 6.4,
      pitch: 45,
      bearing: -14,
    },
    activeRouteIds: ['venice-zara-corfu-1202'],
    focusCityIds: ['venedik', 'zara', 'roma', 'korfu'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1b-zara-siege-1202.jpg'),
      badge: 'VENEDİK DÜKÜN SARAYI · ANDREA VICENTINO (YKL. 1590)',
      caption: 'Kasım 1202 Zara Kuşatması: Venedik Donanması ve Frank Şövalyelerinin Dalmaçya Surlarına Denizden Hücumu',
      credit: 'Andrea Michieli (Vicentino), Palazzo Ducale, Sala dello Scrutinio, Venedik (Kamu Malı)',
      objectPosition: 'center 46%',
    },
  },
  {
    id: 'step-1c-corfu-alexios-treaty',
    stepLabel: 'SAHNE 1C · ZARA TEKLİFİ, KORFU MUTABAKATI VE PRENS IV. ALEKSİOS',
    dateBadge: 'Ocak – Mayıs 1203',
    locationBadge: 'Zara · Korfu (Kerkyra)',
    title: 'İmkânsız Vaat: Genç Prens Aleksios’un Taht Karşılığında 200.000 Mark ve Kilise Birliği Sözü',
    narrative: [
      'Ordu Zara’da kışlarken (Ocak 1203), 1195’te öz ağabeyi <strong>III. Aleksios Angelos</strong> tarafından tahttan indirilip gözlerine mil çekilen Bizans İmparatoru <strong>II. İsaakios Angelos</strong>’un Avrupa’ya kaçan genç oğlu <strong>Prens Aleksios (IV. Aleksios)</strong> ve kayınbiraderi Alman Kralı <strong>Swabialı Philipp</strong>’in elçileri kampa ulaştı.',
      'Elçilerin Zara’da sunduğu ve genç prensin Nisan–Mayıs 1203’te bizzat kampa katılıp <strong>Korfu</strong>’da resmen onayladığı teklif, amcası gaspçı III. Aleksios’u devirip kendisini ve kör babasını Konstantinopolis tahtına çıkarmaları halinde Haçlıların tüm mali ve dini açmazlarını tek kalemde çözecek baş döndürücü bir paketti: (1) Bütün Doğu Roma İmparatorluğu’nu <strong>Roma Papası’nın ruhani otoritesine</strong> bağlamak, (2) Haçlılara ve Venedik’e <strong>200.000 gümüş mark</strong> ödemek ve bir yıl erzak vermek, (3) <strong>10.000 askerle Mısır (Babil) seferine</strong> katılmak ve Kutsal Topraklarda ömür boyu <strong>500 şövalye</strong> beslemek! Korfu’da ordunun yarısı bu sapmaya isyan ettiyse de baronlar şövalyelerin ayaklarına kapanıp sadece Eylül sonuna kadar kalacaklarına yemin ederek donanmayı Çanakkale’ye çevirdi.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Geoffroi de Villehardouin, La Conquête de Constantinople (§93: Ocak 1203 Zara Teklifi, nşr. E. Faral, c. I, Paris 1938 [2. bs. 1961], s. 92–95 [Eski Fr. s. 92–94]; krş. nşr. N. de Wailly, s. 52–53)',
      text: '«Her şeyden önce, eğer Tanrı onların yardımıyla mirasını kendisine geri vermeyi nasip ederse, kendisinden çok önce Roma itaatinden ayrılmış olan bütün Doğu Roma [Bizans / metinde: Romanie] İmparatorluğu’nu Roma’nın itaatine sokacaktı. Sonra, onların mallarını harcadıklarını ve yoksul düştüklerini bildiğinden, onlara 200.000 gümüş mark verecek ve ordudaki küçük-büyük herkese [bir yıl boyunca, krş. §188] erzak sağlayacaktı. Ve kendi şahsıyla onlarla birlikte Babil [Mısır] toprağına gidecek ya da göndermeleri daha iyi olacağını düşünürlerse kendi masrafıyla bir yıl boyunca 10.000 adam gönderecekti. Ve hayatının bütün günleri boyunca, kendi masrafıyla denizaşırı ülkeyi [Kutsal Toprakları] korumak üzere orada 500 şövalye bulunduracaktı.»',
      tone: 'west',
    },
    camera: {
      center: [21.5, 39.2],
      zoom: 5.5,
      pitch: 40,
      bearing: 22,
    },
    activeRouteIds: ['venice-zara-corfu-1202', 'corfu-constantinople-1203', 'unfulfilled-egypt-route'],
    focusCityIds: ['zara', 'korfu', 'konstantinopolis'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1c-corfu-alexios-fleet.jpg'),
      badge: 'BNF FRANÇAIS 12203 · 13. YÜZYIL EL YAZMASI TEZHİBİ (FOL. 78V)',
      caption: 'Comment li os arriva devant Constantinoble: Haçlı Donanmasının Haziran 1203’te Konstantinopolis Surları Önüne Varışı',
      credit:
        'Geoffroi de Villehardouin, La Conquête de Constantinople (MS D), Bibliothèque nationale de France, MS Français 12203, fol. 78v (ykl. 1280, Kamu Malı)',
      objectPosition: 'center 42%',
    },
  },
  {
    id: 'step-1d-first-siege-mitaton-fire',
    stepLabel: 'SAHNE 1D · İLK KUŞATMA, HALİÇ ZİNCİRİ VE CAMİ YANGINI',
    dateBadge: 'Temmuz – 21 Ağustos 1203',
    locationBadge: 'Galata Kulesi · Haliç · Mitaton (Müslüman Tüccarlar Camii)',
    title: 'Kırılan Haliç Zinciri, Boş Çıkan Hazine ve Müslüman–Ortodoks Direnişinden Çıkan Büyük Yangın',
    narrative: [
      '5–6 Temmuz 1203’te Haçlılar Galata Kulesi’ni zapt edip Haliç’i kapatan dev demir zinciri kırdı. 17 Temmuz’da Venedik gemileri denizden surları zorlarken <strong>III. Aleksios Angelos</strong> gece yarısı 1.000 libre altın ve imparatorluk mücevherlerini alıp Trakya’ya kaçtı. Saray görevlileri zindandaki kör <strong>II. İsaakios</strong>’u yeniden tahta çıkardı; 1 Ağustos 1203’te oğlu <strong>IV. Aleksios</strong> ortak imparator olarak taç giydi.',
      'Ancak devlet hazinesi tamtakırdı! IV. Aleksios kilise ikonalarını ve kutsal gümüş kapları eriterek 100.000 mark topladıysa da söz verdiği 200.000 markın yarısını bile ödeyemedi. <strong>19 Ağustos 1203</strong>’te Flaman, Pizalı ve Venediklilerden oluşan bir yağma güruhunun balıkçı kayıklarıyla Haliç’i geçip Müslüman tüccarların ibadet ettiği <strong>Mitaton Camii</strong>’ni (<em>τὸ τῶν ἐξ Ἄγαρ συναγώγιον</em>) yağmalaması üzerine, <strong>Müslüman tüccarlarla Ortodoks Romalılar omuz omuza direnince</strong> kaçan Latinler kundaklama başlattı. 19–21 Ağustos boyunca 48 saat süren <strong>Büyük Ağustos Yangını</strong> Haliç’ten Marmara’ya kadar şehrin en zengin ticaret mahallelerini kül etti.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Niketas Khoniates, Historia (CFHB c. XI/1, nşr. J.-L. van Dieten, Berlin 1975, s. 553; Bonn nşr. s. 730–731; krş. çev. Işın Demirkent, 2004, s. 122–123 & Magoulias 1984, s. 303)',
      text: '«[...] [Pizalılarla Venediklilerin barıştırılmasının ardından] eskiden Flamanlar diye adlandırılan Franklardan bazıları, yanlarına Pizalılar ve Venediklilerden de bir bölük alarak ganimet vurmak amacıyla balıkçı kayıklarıyla karşı kıyıya geçtiler; Agareno’ların [Müslümanların] ibadethanesine [τὸ τῶν ἐξ Ἄγαρ συναγώγιον] —ki halk dilinde buna Mitaton denir— ansızın baskın yaptılar ve içindeki bütün malları kılıç zoruyla yağmaladılar. Hiç beklemedikleri bir anda saldırıya uğrayan Müslümanlar, ellerine ne geçtiyse onunla kendilerini savunmaya koyuldular; Romalılar da komşularının yardımına koşunca [...] Latinler geri çekilirken şehrin pek çok noktasını ateşe verdiler.»',
      tone: 'east',
    },
    camera: {
      center: [28.976, 41.016],
      zoom: 12.2,
      pitch: 52,
      bearing: -18,
    },
    activeRouteIds: ['corfu-constantinople-1203'],
    focusCityIds: ['konstantinopolis', 'galata'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1d-constantinople-map-buondelmonti.jpg'),
      badge: 'TARİHÎ HARİTA EL YAZMASI · CRISTOFORO BUONDELMONTI (YKL. 1422)',
      caption: 'Konstantinopolis, Haliç Zinciri, Galata (Pera), Blakhernai Sarayı, Hipodrom ve Ayasofya’nın Erken 15. Yüzyıl Topografik Planı',
      credit: 'Cristoforo Buondelmonti, Liber insularum Archipelagi, Bibliothèque nationale de France (Kamu Malı)',
      objectPosition: 'center 48%',
    },
  },
  {
    id: 'step-1e-murtzuphlos-coup-partitio',
    stepLabel: 'SAHNE 1E · MURTZUPHLOS DARBESİ VE PAYLAŞIM ANLAŞMASI',
    dateBadge: '25–28 Ocak – Mart 1204',
    locationBadge: 'Blakhernai Sarayı · Kosmidion (Eyüp) · Haliç',
    title: 'IV. Aleksios’un Boğdurulması, Murtzuphlos’un «Red» Cevabı ve Mart 1204 İmparatorluk Paylaşımı',
    narrative: [
      'Ağustos yangını ve kilise hazinelerinin eritilmesi başkent halkını ayağa kaldırdı; Ocak 1204’te Haçlı elçileri Blakhernai Sarayı’nda bizzat imparatoru tehdit edince meşruiyet tamamen çöktü. 25–27 Ocak 1204’te Ayasofya’da toplanan halk ve senatonun Nikolaos Kanabos’u seçmeye kalkışmasının ardından, <strong>27–28 Ocak 1204</strong> gecesi çatık kaşları yüzünden <strong>«Murtzuphlos»</strong> lakabıyla anılan <em>protovestiarios</em> <strong>Aleksios Dukas (V. Aleksios)</strong> saray darbesi yaparak genç IV. Aleksios’u zindana attı (8 Şubat gecesi yay kirişiyle boğdurttu) ve savunma savaşını başlattı.',
      'Şubat başında Haliç ucundaki Kosmidion’da, kıyıdaki atının üzerinden kadırgasındaki Doj <strong>Enrico Dandolo</strong> ile görüşen Murtzuphlos, derhal <strong>5.000 libre altın</strong> (~360.000 altın <em>hyperpyra</em>) ödeyip ağır itaat ve Roma kilisesine bağlılık şartlarını kabul etmesi talebini kesin bir dille reddetti. Bunun üzerine Venedikliler ve Frank baronları <strong>Mart 1204’te <em>Partitio terrarum imperii Romaniae</em> (Bizans / Doğu Roma İmparatorluğu Topraklarının Paylaşımı Antlaşması)</strong> esaslarını imzaladı: Şehir doğrudan fethedilecek, ganimet paylaşılıp Venedik borcu ödenecek, bir <strong>Latin İmparatoru</strong> seçilecek (toprakların 1/4’ü) ve kalan 3/4 Venedik ile Haçlılar arasında eşit bölüşülecekti.',
    ],
    highlightNote: {
      source:
        'Kaynak Özeti · Niketas Khoniates (Historia, nşr. van Dieten, s. 561–568; Bonn s. 742–752; çev. Demirkent 2004, s. 132–141), Geoffroi de Villehardouin (§§221–225, 234–235; Faral II, s. 20–25, 34–37) & Clari’li Robert (§§72–73; Lauer s. 71–72)',
      text: 'Kosmidion buluşmasında Doj Enrico Dandolo’nun ağır mali ve dini şartlarını reddeden V. Aleksios Dukas (Murtzuphlos), Venedik süvarilerinin ani baskınından güçlükle kurtulup deniz surlarını ahşap kulelerle yükseltti; Latin ordugâhındaki Katolik piskoposlar ise (Villehardouin §224–225; Clari §§72–73) "Rumlar meşru efendilerini öldürmüş ve Roma’ya itaatten çıkmıştır; onlarla savaşmak günah değil sevap ve haklı bir davadır" yönündeki vaaz ve kilise hükmüyle saldırıyı Papa adına haçlı endüljansına (günah affına) bağladı.',
      tone: 'witness',
    },
    camera: {
      center: [28.958, 41.028],
      zoom: 12.5,
      pitch: 54,
      bearing: 24,
    },
    activeRouteIds: ['corfu-constantinople-1203'],
    focusCityIds: ['konstantinopolis', 'galata'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1e-murtzuphlos-portrait.jpg'),
      badge: 'VİYANA CODEX HIST. GR. 53 · 14. YÜZYIL BİZANS EL YAZMASI (FOL. 291V)',
      caption: 'Latinlerin Haliç Ültimatomunu Reddeden İmparator V. Aleksios Dukas «Murtzuphlos»un Özgün Bizans El Yazması Portresi',
      credit: 'Niketas Khoniates El Yazması, Österreichische Nationalbibliothek, Cod. Vindob. Hist. gr. 53, fol. 291v (Kamu Malı)',
      objectPosition: 'center 25%',
      objectFit: 'contain',
    },
  },
  {
    id: 'step-1f-golden-horn-breach-1204',
    stepLabel: 'SAHNE 1F · 12 NİSAN 1204 HALİÇ SURLARININ DÜŞÜŞÜ',
    dateBadge: '9 – 13 Nisan 1204',
    locationBadge: 'Haliç Deniz Surları (Blakhernai – Petrion Hattı)',
    title: 'Kuzey Rüzgârı, Birbirine Bağlı İki Gemi (Pèlerine & Paradis) ve Üçüncü Büyük Yangın',
    narrative: [
      '9 Nisan 1204 Cuma günü yapılan ilk deniz hücumu Bizans savunması ve Vareg Muhafızlarının baltaları önünde ağır kayıpla püskürtüldü. Bunun üzerine Venedikliler gemileri ikişer ikişer birbirine bağlayarak direklerdeki uçan asma köprülerin aynı burca çifte güçle basmasını sağladı. <strong>12 Nisan 1204 Pazartesi</strong> öğleden sonra aniden esen sert kuzey rüzgârı (<em>Boreas</em>), Soissons ve Troyes piskoposlarının birbirine bağlı iki dev gemisini —<strong>Pèlerine</strong> (Hacı) ve <strong>Paradis</strong> (Cennet)— Petrion yakınındaki bir burca tam sıfır mesafeden yasladı.',
      'Fransız şövalye <strong>André d’Urboise</strong> ve Venedikli <strong>Pietro Alberti</strong> burca atlayıp ilk gedikleri açtı; aşağıda ise <strong>Pierre d’Amiens</strong> karaya çıkıp bir örme kapıyı kazmalarla yıktı. Gece olası bir karşı saldırıdan korkan Alman/Latin birlikleri bir kez daha evleri ateşe verdi (Villehardouin’e göre <em>«Fransa Krallığı’nın en büyük üç şehrinde bulunandan daha fazla ev»</em> yandı). Direniş kırılınca Murtzuphlos gece Trakya’ya kaçtı ve <strong>13 Nisan sabahı</strong> Konstantinopolis 900 yıllık tarihinde ilk kez yabancı bir ordunun eline geçti.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Geoffroi de Villehardouin, La Conquête de Constantinople (§§242 & 247, nşr. E. Faral, c. II, Paris 1939 [2. bs. 1961], s. 44–45, 50–51 [Eski Fr. s. 44, 50]; krş. nşr. N. de Wailly, s. 140–145)',
      text: '«[...] Ve rüzgâr kuzeyden esmeye başladı ve birbirine bağlı olan iki gemiyi —ki birinin adı Pèlerine [Hacı], diğerinin adı Paradis [Cennet] idi— kıyıya daha çok yaklaştırdı; öyle ki geminin merdiveni doğrudan kulenin üzerine değdi. Ve bir Venedikli ile André d’Urboise adında bir Fransız şövalyesi kuleye girdiler ve arkalarından başka insanlar da girdi; kuledekiler ise bozguna uğrayıp kaçtılar. [...] Ve bu, şehirde çıkan üçüncü yangın oldu; ve Fransa Krallığı’nın en büyük üç şehrinde bulunandan daha fazla ev yandı.»',
      tone: 'west',
    },
    camera: {
      center: [28.952, 41.031],
      zoom: 13.1,
      pitch: 56,
      bearing: -30,
    },
    activeRouteIds: ['corfu-constantinople-1203'],
    focusCityIds: ['konstantinopolis', 'galata'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1f-sea-walls-assault-1204.jpg'),
      badge: 'VENEDİK DÜKÜN SARAYI · PALMA IL GIOVANE',
      caption: '12 Nisan 1204: Venedik Gemilerinin Direklerindeki Uçan Köprülerden Haliç Deniz Surlarındaki Kulelere Giriş Anı',
      credit: 'Palma il Giovane, La presa di Costantinopoli, Palazzo Ducale, Venedik (Kamu Malı)',
      objectPosition: 'center 45%',
    },
  },
  {
    id: 'step-1g-partition-nicaea-trebizond-seljuks',
    stepLabel: 'SAHNE 1G · PARÇALANMA: İZNİK, TRABZON VE ANADOLU',
    dateBadge: 'Nisan 1204 – 1261 (Merkez: 1204–1214)',
    locationBadge: 'Konstantinopolis · İznik · Trabzon · Konya · Antalya · Sinop',
    title: 'Latin İmparatorluğu, Kraliçe Tamar’ın Trabzon Seferi ve Türkiye Selçuklularının İki Denize Açılışı',
    narrative: [
      '1204 yağması Doğu Roma dünyasını bir anda dört parçaya böldü: Başkentte <strong>Flandre Kontu I. Baudouin</strong> Latin İmparatoru seçilirken Venedik Girit, Eğriboz ve Ege limanlarını kapattı; Batı Anadolu’da ise <strong>I. Theodoros Laskaris</strong> vaktiyle 1075’te Süleyman Şah’ın başkent yaptığı <strong>İznik (Nikaia)</strong> merkezli sürgün Rum İmparatorluğu’nu kurdu (ve 1261’de İstanbul’u geri alacak olan damar burası oldu).',
      'Aynı <strong>Nisan 1204</strong> ayında Karadeniz’de tarihin en hızlı jeopolitik hamlelerinden biri yaşandı: <strong>Gürcistan Kraliçesi Tamar</strong> (1184–1213; Gürcü tarih yazıcılığındaki resmî unvanıyla <em>Mepe</em> / «Kral»), 1185’te Tiflis sarayına sığınan ve hanedan akrabalıkları bulunan <strong>Aleksios ve David Komnenos</strong> kardeşlere Batı Gürcistan (Lih-İmereti) ordusunu vererek Karadeniz kıyısına sevk etti. Tamar’ın bu askerî ve siyasî desteği sayesinde Trabzon, Samsun, Sinop, Giresun, Kotyora (Ordu), Amasra ve Karadeniz Ereğlisi zaptedildi ve Aleksios ile David Komnenos kardeşler <strong>Trabzon Rum İmparatorluğu’nu (1204–1461)</strong> kurdu! Bu parçalanma ise Konya’daki <strong>Türkiye Selçuklu Devleti</strong>’ne (I. Gıyâseddin Keyhüsrev ve I. İzzeddin Keykâvus) <strong>1207’de Antalya</strong> ve <strong>1214’te Sinop</strong>’u fethederek Anadolu’yu Akdeniz–Karadeniz transit ticaret imparatorluğuna dönüştürme fırsatını altın tepside sundu.',
    ],
    highlightNote: {
      source:
        'Doğrudan Alıntı (Çeviri) · Kartlis Tskhovreba — Hükümdarların Tarihi ve Methiyeleri / Kraliçe Tamar Dönemi Anonim Gürcü Kroniği (Vakhtang VI redaksiyonu çev. Brosset – Andreasyan, yay. haz. E. Merçil, TTK 2003, s. 412; krş. nşr. S. Qaukhchishvili, c. II, Tiflis 1959 [Basili Ezosmodzghvari bölümü], s. 142–143; İng. çev. K. Vivian 1991, s. 87 & Metreveli–Jones 2014, s. 300)',
      text: '«[...] Hükümdar [Mepe] Tamar bunu duyduğunda [...] onlara kendisininkinden katbekat fazla altın verdi ve hemen o vakit İmereti [Lih-İmereti] yakasındaki askerleri topladı; onları, büyük imparator Kir Andronikos’un oğlu [soyundan] olup o sırada Tamar’ın yanına sığınmış bulunan Aleksios Komnenos ile birlikte gönderdi. Gittiler ve Lazia, Trabzon, Limnia, Samsun [Samsoni], Sinop, Kerasus [Giresun], Kotyora [Ordu], Amasra, Herakleia [Karadeniz Ereğlisi] ile Paphlagonia ve Pontos’un bütün yerlerini zapt ettiler; ve bu memleketleri akrabası Aleksios’a verdi.»',
      tone: 'east',
    },
    camera: {
      center: [34.8, 39.8],
      zoom: 5.2,
      pitch: 38,
      bearing: -6,
    },
    activeRouteIds: ['nicaea-seljuk-corridor', 'tamar-trebizond-1204'],
    focusCityIds: ['konstantinopolis', 'iznik', 'trabzon', 'tiflis', 'konya', 'antalya', 'sinop'],
    visual: {
      src: withBase('/images/arsiv/konstantinopolis-1204/step1g-tamar-trebizond-1204.jpg'),
      badge: 'VARDZİA MANASTIRI ÇAĞDAŞ KRALİYET FRESKİ · YKL. 1184–1186',
      caption: 'Nisan 1204’te Akrabaları Aleksios ve David Komnenos Kardeşlere Sağladığı Askerî ve Siyasî Destekle Trabzon Rum İmparatorluğu’nun Kuruluşuna Ön Ayak Olan Kraliçe (Mepe) Tamar',
      credit: 'Vardzia Mağara Manastırı Meryem’in Ölümü Kilisesi Freski, Gürcistan (ykl. 1184–1186, Kamu Malı)',
      objectPosition: 'center 22%',
      objectFit: 'contain',
    },
  },
];

export const konstantinopolisPropagandaCases: PropagandaCase[] = [
  {
    id: 'church-union-crusade-route',
    badge: 'VAKA 01 · DİNİ MEŞRUİYET VE KUDÜS GEREKÇESİ',
    title: '«Şizmatik Yunanlıları Roma’ya Bağlayıp Kudüs Yolunu Güvenceye Alıyoruz» Söylemi',
    verdict: 'Ters Tepti · Papa «Köpeklerden Beter» Dedi, Ayrılık Kalıcılaştı',
    claimTag: 'LATİN ORDU PİSKOPOSLARININ VAAZ VE ENDÜLJANS İLANI ÖZETİ',
    claimSource:
      'Söylem Özeti · Geoffroi de Villehardouin (§§224–225, Faral II, s. 22–25) & Clari’li Robert (§§72–73, Lauer s. 71–72)',
    claimQuote:
      'Mart–Nisan 1204’te Latin ordugâhındaki piskoposların askerlere verdiği vaazın özeti: Efendileri IV. Aleksios’u öldüren Rumların "katil" ve Roma Papası’na itaat etmeyen "şizmatikler" olduğu, bu yüzden Konstantinopolis’e saldırmanın günah değil tam tersine Kudüs yolunu açacak haklı bir amel olduğu ve Papa adına tüm haçlı endüljansının geçerli sayılacağı ilan edildi.',
    critiqueSource:
      'Papa III. Innocentius’un 12 Temmuz 1205 Mektubu (Regesta VIII.126, Migne PL 215, col. 701 = Hageneder Bd. 8, Reg. 8.127, s. 232; krş. Reg. VIII.133, PL 215, col. 712)',
    critiqueAnalysis:
      'Şehir düştükten ve üç günlük yağmanın ayrıntıları Roma’ya ulaştıktan sonra bizzat Papa III. Innocentius bu söylemi paramparça etti: Haçlıların kılıçlarını dinsizlere değil Hristiyanlara çektiğini, yaş ve cinsiyet gözetmeden kadınları ve rahibeleri kirlettiğini, kilise sunaklarından gümüş levhaları söktüğünü belirterek "Yunanlılar Latinlerde yalnızca ihanet ve karanlık işler gördüler; öyle ki artık onları haklı olarak köpeklerden bile daha çok tiksinerek reddediyorlar!" diye yazdı. 1054’te teolojik bir tartışma olan Doğu–Batı Kilise ayrılığı, 1204 yağmasıyla halk hafızasında bir daha kapanmayacak bir uçuruma dönüştü.',
  },
  {
    id: 'alexios-200k-marks-promise',
    badge: 'VAKA 02 · FİNANSAL SERAP VE KİLİSE ERİTMELERİ',
    title: '«Genç Prens IV. Aleksios Tahta Çıkar Çıkmaz 200.000 Gümüş Markı Kolayca Ödeyecek» Vaadi',
    verdict: 'Mali İmkânsızlık · İkonalar Eritildi, Şehir Yandı',
    claimTag: '1203 ZARA / KORFU ANTLAŞMASINDAKİ VAAT ÖZETİ',
    claimSource: 'Söylem Özeti · Geoffroi de Villehardouin (§93, Faral I, s. 92–95 & §188, Faral I, s. 190–193)',
    claimQuote:
      'Ocak–Mayıs 1203’te Prens Aleksios’un baronlara sunduğu mali taahhüt özeti: Başkent halkının kendisini kurtarıcı olarak karşılayacağı ve Bizans imparatorluk hazinesinden Venedik ile Haçlılara 200.000 Köln gümüş markı (~47 ton gümüş) ile bir yıllık erzakın derhal ödeneceği ileri sürüldü.',
    critiqueSource: 'Niketas Khoniates (Historia, van Dieten s. 551–553) & Villehardouin (§§193–215, Faral I, s. 196–219)',
    critiqueAnalysis:
      'Gerçekte III. Aleksios kaçarken zaten erimiş olan devlet hazinesindeki son 1.000 libre altını da yanında götürmüştü. Tahta oturan IV. Aleksios ne halk tarafından benimsendi ne de bu parayı bulabildi; çaresizlik içinde kiliselerdeki altın-gümüş kutsal lambaları ve ikona çerçevelerini eritip zorla ağır vergiler topladıysa da ancak 100.000 mark ödeyebildi. Kalan 100.000 markın ödenememesi ve Ağustos 1203 Mitaton Camii yangını, müttefikleri doğrudan kuşatmacıya çeviren yapısal tuzağı kurdu.',
  },
  {
    id: 'pious-theft-relics-myth',
    badge: 'VAKA 03 · «KUTSAL HIRSIZLIK» (SACRILEGIUM PIUM) SÖYLEMİ',
    title: '«Kutsal Emanetler Layık Olmayan Rumlardan Kurtarılıp Batı Manastırlarına Taşındı» İddiası',
    verdict: 'Ruhban Yağması · Sunağı Kırılan Ayasofya ve Tunç Atlar',
    claimTag: 'BATI MANASTIR KRONİKLERİNDEKİ MEŞRULAŞTIRMA ÖZETİ',
    claimSource:
      'Söylem Özeti · Gunther von Pairis, Historia Constantinopolitana (§19–24: Başrahip Martin’in Pantokrator Yağması)',
    claimQuote:
      'Alman keşiş Gunther von Pairis’in "kutsal hırsızlık" (sacrilegium pium) anlatısının özeti: Pairis Başrahibi Martin’in Pantokrator Manastırı’ndaki yaşlı bir Rum rahibi ölümle tehdit ederek İsa’nın kanı, Gerçek Haç parçaları ve aziz kemikleriyle dolu sandıkları cübbesinin altına doldurup kaçırması, "emanetlerin İlahî Takdir’le Batı’ya nakli" diye kutsandı.',
    critiqueSource: 'Niketas Khoniates (Historia, s. 573–574) & San Marco Arkeolojik/Sanat Tarihi Kayıtları',
    critiqueAnalysis:
      'Khoniates’in görgü tanıklığı ve bugün hâlâ Venedik, Halberstadt, Troyes ve Amiens katedrallerinde duran ganimet envanteri gerçeği gösterir: Yağma yalnızca rölikerlerle sınırlı kalmadı; Ayasofya’nın paha biçilmez gümüş-altın sunak masası balyozlarla parçalanıp askerler arasında bölüşüldü, yük katırları kilise nefine sokuldu ve Hipodrom’un dört antik tunç atından (Cavalli di San Marco) Philadelphion’daki Porfir Dört Tetrark heykeline kadar imparatorluk başkenti sistematik biçimde soyuldu.',
  },
  {
    id: 'equal-booty-distribution-myth',
    badge: 'VAKA 04 · GANİMET PAYLAŞIMI VE ANTİK HEYKEL KIRIMI',
    title: '«Üç Kilisede Toplanan 400.000 Marklık Ganimet Haçlı Ordusuna Adilce Dağıtıldı» Söylemi',
    verdict: 'Baron Vurgunu ve Bronz Heykellerin Sikke İçin Eritilmesi',
    claimTag: 'ÜST DÜZEY BARON KRONİĞİNDEKİ RESMÎ PAYLAŞIM ÖZETİ',
    claimSource: 'Söylem Özeti · Geoffroi de Villehardouin (§§252–255, Faral II, s. 56–61) & Devastatio Constantinopolitana',
    claimQuote:
      'Mareşal Villehardouin’in resmi bilançosunun özeti: Üç kilisede toplanan resmi ganimetin 400.000 gümüş mark (BCDE yazmalarında 300.000 mark) ve 10.000 at/katır tuttuğu, önce Venedik ile Franklar arasında yarı yarıya bölündüğü, ardından Frankların kendi paylarından Venedik’e kalan 50.000 marklık borcu ödeyip gerisini 1 şövalye = 2 atlı serjant = 4 yaya serjant oranıyla hakkaniyetle dağıttığı kaydedilir.',
    critiqueSource: 'Clari’li Robert (La Conquête, §§80–81, Lauer s. 79–81) & Niketas Khoniates (De Signis, van Dieten s. 647–655)',
    critiqueAnalysis:
      'Ordunun alt tabakasından yoksul bir şövalye olan Clari’li Robert yüksek baronların maskesini düşürür: Zengin baronlar Bukoleon ve Blakhernai saraylarındaki en değerli hazineleri gizlice kendi konaklarına taşımış, ortak sandığa sadece kaba gümüş leğenleri bırakıp yoksul şövalyeleri ve rahipleri aldatmıştır! Daha da yıkıcı olanı, Niketas Khoniates’in De Signis risalesinde belgelediği üzere, nakit sıkıntısı çeken Latinler Lysippos’un dev tunç Herakles heykelini, Hera ve Paris-Helen heykellerini ve Hipodrom’un antik bronz şaheserlerini bakır sikke basmak için ocaklarda eritmiştir.',
  },
];

export const konstantinopolisVerifiedFacts = [
  {
    title: '1. Üç Büyük Yangınla (Temmuz 1203, Ağustos 1203, Nisan 1204) Kül Olan Dünya Metropolü',
    sources:
      'Geoffroi de Villehardouin (§176, §§203–205, §247; Faral I, s. 178–179, 206–211 & II, s. 48–51), Niketas Khoniates (van Dieten s. 553–555) & Devastatio Constantinopolitana',
    detail:
      'Hem Latin mareşali Villehardouin hem Bizanslı Khoniates, 1203–1204 kuşatmaları sırasında çıkan üç büyük yangının —özellikle 19–21 Ağustos 1203 Mitaton yangınının— Konstantinopolis’in yaklaşık üçte birini ve Fransa’nın en büyük üç kentinden daha fazla yapıyı kül ettiğinde hemfikirdir.',
  },
  {
    title: '2. Niketas Khoniates’in 1187 Selahaddin Eyyûbî’nin Kudüs Fethiyle Yaptığı Sarsıcı Karşılaştırma',
    sources: 'Niketas Khoniates, Historia (CFHB XI/1, nşr. van Dieten, s. 575–576)',
    detail:
      'Omuzlarında haç taşıyan Latinlerin Ayasofya sunağını kırmasını ve kadınlara saldırmasını bizzat gören Ortodoks devlet adamı Khoniates, 17 yıl önce (1187, Dosya 02) Kudüs’ü fetheden Selahaddin Eyyûbî’nin Hristiyan kadınlara dokunmadığını, Kutsal Kabir’i yağmalamadığını ve cüzi bir fidyeyle halkı salıverdiğini yazarak dindaşlarını "İsa’nın düşmanlarından çok daha acımasız" ilan etmiştir.',
  },
  {
    title: '3. 1204 Kırılmasının Anadolu’da Doğurduğu Üç Yeni Merkez: İznik, Trabzon ve Türkiye Selçuklu Limanları',
    sources:
      'Georgios Akropolites, Kartlis Tskhovreba (TTK 2003, s. 412; Qaukhchishvili c. II, s. 142–143), İbn Bîbî (el-Evâmirü’l-Alâ’iyye) & İbnü’l-Esîr',
    detail:
      'Konstantinopolis’in düşüşü Bizans’ı İznik, Epir ve (Kraliçe Tamar’ın Nisan 1204 askeri–siyasi desteğiyle Aleksios ve David Komnenos’un kurduğu) Trabzon Rum İmparatorluğu’na bölerken, batı sınırındaki baskıdan kurtulan Türkiye Selçuklu Devleti 1207’de Antalya’yı ve 1214’te Sinop’u fethederek Anadolu’yu küresel deniz ticaretine açmıştır.',
  },
];

export const dandoloCommanderProfile = {
  pill: 'DOJ VE STRATEJİST DOSYASI',
  name: 'Enrico Dandolo (Henricus Dandolo)',
  subtitle:
    'Venedik Cumhuriyeti’nin 41. Doju · «Doğu Roma (Bizans) İmparatorluğu’nun Dörtte Bir ve Yarımının Efendisi» (ykl. 1107 – Mayıs sonu / Haziran 1205, Konstantinopolis)',
  highlightBox: {
    leftTitle: '90’LI YAŞLARDA & ÂMÂ',
    leftHtml:
      'Gözleri dışarıdan sağlam görünmesine rağmen görme yetisini yitirmiş; <strong>doksanlı yaşlarının ortasında</strong> seferi bizzat kadırga pruvasından yönetmiştir.',
    operator: '+',
    rightTitle: '3/8 İMPARATORLUK',
    rightHtml: '1204 paylaşımıyla Venedik’e kazandırdığı resmi unvan: <em>Dominus quartae partis et dimidiae totius Imperii Romaniae</em>',
  },
  factsHtml: [
    '<strong>Cumhuriyet Borcu ile İmparatorluk Kurmak:</strong> 1201 sözleşmesinde Venedik’in bütün tersane ve ticaret kapasitesini tek bir sefere yatırdı. 1202’de Haçlılar 34.000 mark açık verince donanmanın iflas etmesini önlemek için seferi adım adım önce <strong>Zara</strong>’ya, ardından <strong>Konstantinopolis</strong>’e yönlendiren baş mimar oldu.',
    '<strong>Yaşı ve Haliç Surları Önündeki Cesaret (Temmuz 1203 & Nisan 1204):</strong> Kesin doğum kaydı bulunmamakla birlikte Venedik kronik geleneğine ve modern araştırmalara (Madden 2003; <em>Britannica</em>) göre ykl. 1107 doğumludur (1192’de Doj seçildiğinde ~85 yaşındaydı). Doksanlı yaşlarının ortasında ve âmâ olmasına rağmen Aziz Marko sancağını önünde taşıtarak kadırgasını en önce karaya oturttu.',
    '<strong>Ayasofya’daki Defni ve 1847–1849 Anı Levhası:</strong> Nisan 1205’te Bulgar Çarı Kaloyan karşısındaki Hadrianopolis (Edirne) bozgunundan kalan orduları zorlukla Konstantinopolis’e geri çekti; kısa süre sonra, Mayıs sonu / Haziran 1205’te (Villehardouin §388 ve Madden 2003, s. 193–194’e göre 29 Mayıs Pentekost öncesinde; geç Venedik geleneğinde Haziran başında) ykl. 97–98 yaşlarında öldü ve <strong>Ayasofya</strong>’ya gömüldü (özgün mezarı 1261/1453 sonrasında kaybolmuş olup, bugün güney üst galeride görülen <em>«Henricus Dandolo»</em> mermer levhası 1847–1849 Fossati restorasyonunda yerleştirilen anı taşıdır/kenotaftır).',
  ],
};

export const konstantinopolisStrategicReasons = {
  pill: 'STRATEJİK PERDE ARKASI',
  title: 'Mısır’a Gitmek İçin Toplanan Bir Haçlı Donanması Neden Konstantinopolis’i Vurdu?',
  items: [
    {
      num: '01',
      title: '1201 Navlun Sözleşmesindeki İyimser Sayı Hatası (33.500 Beklentiye Karşı 12.000 Asker)',
      text: 'Villehardouin ve beş elçi, bağlayıcı bir merkezi krallık emri olmadan 33.500 askerin Venedik’e geleceğini hesapladı. Birçok Fransız ve Flaman birliği Marsilya veya Puglia limanlarını tercih edince Lido’ya yalnızca üçte bir kuvvet geldi ve 34.000 gümüş marklık ödenemez bir borç doğdu.',
    },
    {
      num: '02',
      title: '1171 ve 1182 Travmaları: Venedik–Bizans Ticaret İmtiyazları Krizi',
      text: '1082’den beri gümrüksüz ticaret yapan Venediklilerin mallarına İmparator I. Manuil 1171’de tek gecede el koymuş, 1182’de Konstantinopolis’teki Latin Mahallesi katliama uğramış ve III. Aleksios Angelos Venedik yerine Piza ve Cenova’yı kayırmaya başlamıştı; Dandolo dost bir imparatorla Haliç tekelini kalıcı kılmak istiyordu.',
    },
    {
      num: '03',
      title: 'Angelos Hanedanının İç Çürümesi ve IV. Aleksios’un Karşılıksız Çeki',
      text: '1195’te öz ağabeyini kör ederek tahta çıkan III. Aleksios donanmayı çürütmüş ve hazineyi boşaltmıştı. Sürgündeki yeğeni Prens Aleksios’un Zara’da elçileriyle sunup Korfu’da bizzat onayladığı 200.000 mark ve Kilise birliği vaadi, Bizans’ın gerçek mali ve toplumsal kapasitesiyle taban tabana zıttı.',
    },
    {
      num: '04',
      title: 'Ağustos 1203 Mitaton Yangını ve Ocak 1204 Murtzuphlos Darbesiyle Köprülerin Atılması',
      text: 'IV. Aleksios borcun yarısını ödeyemeyip Latinler de Müslümanların Mitaton Camii’ni yağmalayarak şehrin üçte birini yakan yangını çıkarınca uzlaşma zemini bitti. Ocak 1204’te Murtzuphlos’un IV. Aleksios’u boğdurması, kışı erzak ve parasız geçiren Haçlılara topyekûn yağma dışında seçenek bırakmadı.',
    },
  ],
};

export const konstantinopolisArmySegments = [
  {
    id: 'venetian-fleet-marines',
    label: 'Venedik Donanması, Denizcileri ve Uçan Köprü Mühendisleri',
    shareText: '~%45 (~10.000 – 12.000 Denizci & Muharip)',
    percent: 45,
    color: '#d99b4e',
    commandNote: 'Doj Enrico Dandolo komutasında 50 savaş kadırgası, ~150 at taşıma gemisi (huissier) ve dev nefler (Pèlerine, Paradis, Aquila)',
    detail:
      'Ortaçağ deniz kuşatmacılığının zirvesidir: Atları doğrudan kıyıya çıkaran kapaklı huissier gemileri ve yelken direklerine kurulan deri kaplı uçan hücum köprüleriyle Haliç deniz surlarının 17 Temmuz 1203 ve 12 Nisan 1204’te aşılmasını sağlayan belirleyici teknolojik güçtür.',
  },
  {
    id: 'frank-flemish-knights',
    label: 'Frank, Flaman, Champagne ve Lombard Ağır Zırhlı Şövalyeleri ve Atlı Serjantlar',
    shareText: '~%20 (~4.000 – 4.500 Zırhlı Süvari)',
    percent: 20,
    color: '#d9485f',
    commandNote: 'Montferratlı Bonifacio, Flandre Kontu Baudouin, Blois Kontu Louis, Saint-Pol Kontu Hugues ve Mareşal Villehardouin',
    detail:
      'Sayıca az olmalarına rağmen disiplinli zırhlı süvari hücumunda ve burç üstü göğüs göğüse çarpışmalarda (André d’Urboise, Pierre d’Amiens, Clari’li Robert ve kardeşi Aleaume) saha kırılmasını yaratan çekirdek aristokratik sınıftır.',
  },
  {
    id: 'crusader-foot-crossbow',
    label: 'Haçlı Yaya Serjantları, Arbaletçiler (Tatar Yayı) ve İstihkâmcılar',
    shareText: '~%35 (~7.000 – 8.000 Yaya Muharip)',
    percent: 35,
    color: '#2cc5b3',
    commandNote: 'Fransa, Flandre, Burgonya, İtalya ve Ren bölgesinden yaya birlikler (Karşılarında: ~15.000–20.000 Bizans Garnizonu & Vareg Muhafızları)',
    detail:
      'Mancınık bataryalarını, lağım kazılarını ve burç tırmanışlarını yürüten ana piyade kitlesidir. Karşılarındaki Bizans savunması sayıca daha kalabalıktı ve çift ağızlı baltalı İngiliz/Danimarkalı Vareg Muhafızları (Pelekyphoroi) ile Pizalı denizciler sert direniş gösterdi; ancak Bizans komuta birliğinin çöküşü savunmayı felç etti.',
  },
];

export const konstantinopolisChronicleStages: ChronicleStage[] = [
  {
    id: 'stage-4a-walls-breach-booty-split',
    stageBadge: 'AŞAMA 4A · 12–13 NİSAN 1204 HALİÇ SURLARININ DÜŞÜŞÜ VE GANİMET BÖLÜŞÜMÜ',
    stageTitle: 'Uçan Köprülerden Burçlara Hücum, 400.000 Marklık Vurgun ve Yoksul Şövalyenin İtirafı',
    stageLead:
      'Aynı 12–13 Nisan kırılmasını ve hemen ardından gelen ganimet paylaşımını bir yanda Doğu Roma devlet adamı Niketas Khoniates’in Ortaçağ Yunancası ağıtından, diğer yanda yüksek mareşal Geoffroi de Villehardouin ile yoksul şövalye Clari’li Robert’in Eski Fransızca satırlarından yan yana okuyun.',
    bannerVisual: konstantinopolisHeroVisuals.battleSack4A,
    east: {
      pill: 'DOĞU ROMA (BİZANS) GÖRGÜ TANIĞI',
      date: '12–13 Nisan 1204 · Historia & De Signis',
      titleHtml: 'Niketas Khoniates · <em>Historia &amp; De Signis</em>',
      authorDesc:
        'Kuşatma sırasında başkentte yüksek saray nazırı (logothetes ton sekreton) olarak bulunan, evi yanıp ailesiyle yürüyerek İznik’e sığınan Bizans tarihçisi (Ortaçağ Yunancası aslından doğrudan çeviri; CFHB XI/1, nşr. van Dieten, 1975, s. 576 & 648–650; Bonn nşr. s. 763, 856, 858–859; krş. çev. Demirkent 2004, s. 238–241).',
      origLang: 'el',
      origScript:
        '«[Historia, s. 576] Ὦ πόλις, πόλις, πόλεων πασῶν ὀφθαλμέ, ἄκουσμα παγκόσμιον, θέαμα ὑπερκόσμιον, ἐκκλησιῶν γαλουχέ, πίστεως ἀρχηγέ, ὀρθοδοξίας ποδηγέ, λόγων μέλημα, καλοῦ παντὸς ἐνδιαίτημα! Ὢ ἡ ἐκ χειρὸς Κυρίου τὸ τοῦ θυμοῦ πιοῦσα ποτήριον [...] [De Signis, s. 648–650] Ἥ τε οὖν ἐν τῇ Κωνσταντινείῳ ἀγορᾷ ἱσταμένη πολύχαλκος Ἥρα κέκοπται εἰς στατῆρας καὶ χωνείᾳ παραδίδοται, ἧς ἡ κεφαλὴ μόγις τέτρασι βοῶν ὑποτρόχοις ζεύγμασιν ἐς τὸ μέγα παλάτιον ἀποκεκόμισται. [...] Κατήρειπτο τοίνυν Ἡρακλῆς ὁ τριέσπερος μέγας μεγαλωστὶ κοφίνῳ ἐνιδρυμένος, τῆς λεοντῆς ὑπεστρωμένης ἄνωθεν [...] ἀθυμίας πλήρης καθυποκλίνων ἠρέμα τὴν κεφαλὴν καὶ τὰς ἰδίας τύχας ὀλοφυρόμενος [...]»',
      translationParagraphsHtml: [
        '«[<em>Historia</em>, s. 576] <mark class="hl-east">Ey şehir, ey şehir, bütün şehirlerin gözbebeği,</mark> cihanın şöhreti, dünya üstü temaşa, kiliselerin emziren anası, imanın önderi, Ortodoksluğun kılavuzu, ilimlerin ocağı, her türlü güzelliğin meskeni! <mark class="hl-east">Ey Rabbin elinden gazap kadehini içen</mark> [...] şehir!»',
        '<strong>[De Signis, s. 648–650 · Antik Tunç Heykellerin Sikke İçin Eritilmesi]:</strong> «<mark class="hl-east">Konstantinos Forumu’nda dikili duran o dev tunç Hera heykeli de sikkeler [stater] basılmak üzere parçalandı ve eritme ocağına teslim edildi;</mark> kesilen başı dört çift öküzün çektiği arabayla Büyük Saray’a güçlükle taşınabildi. [...] <mark class="hl-east">Üç gecede doğmuş [triesperos] o muazzam Herakles [Lysippos’un eseri] de devrildi;</mark> üstüne serili aslan postuyla dev bir sepetin üzerinde oturuyor [...] derin bir keder içinde başını usulca eğip kendi talihsizliklerine ağlıyor gibiydi [Latinler bu şaheseri bile bakır sikke uğruna erittiler].»',
      ],
    },
    west: {
      pill: 'LATİN HAÇLI CEPHESİ · MAREŞAL VE YOKSUL ŞÖVALYE',
      date: '12–15 Nisan 1204 · Villehardouin §250, §§252–255 & Clari §§80–81',
      titleHtml: 'Geoffroi de Villehardouin &amp; Clari’li Robert · <em>La Conquête de Constantinople</em>',
      authorDesc:
        'Üst düzey komuta divanındaki Champagne Mareşali Villehardouin ile ordunun alt tabakasındaki Pikardiyalı yoksul şövalye Clari’li Robert’in birbirini denetleyen kayıtları (Eski Fransızca / Pikardiya lehçesi aslından doğrudan çeviri; nşr. E. Faral, c. II, 1939, s. 52–53, 56–61 & nşr. Ph. Lauer, CFMA 40, 1924, s. 79–81).',
      origLang: 'fr',
      origScript:
        '«[Villehardouin §250, Faral II, s. 52] Et les autres genz qui furent espandu parmi la ville gaaignierent assez; et fu si granz li gaaienz faiz que nus ne vos en savroit dire la fin d’or et d’argent, et de vasselement, et de pierres preciouses, et de samiz, et de dras de soie [...] Et bien tesmoigne Joffrois de Vilehardoin li mareschaus de Champaigne, a son escient par verté, que puis que li siecles fu estorez ne fu tant gaainié en une ville. [...] [Robert de Clari §81, Lauer s. 80–81] [...] mais puis qe chis siecles fu estorés, si grans avoirs, ne si nobles, ne si rikes, ne fu veus, ne conquis, ne au tans Alixandre, ne au tans Charlemaine, ne devant ne aprés [...] Et chil meïsme qui l’avoir devoient warder si prenoient les joiaus d’or et chou que il voloient et embloient l’avoir ; et prenoit cascuns des rikes hommes ou joiaus d’or ou dras de soie a or, ou chou que il amoit miex, si l’en portoit. Ensi faitement si commenchierent l’avoir a embler, si que on ne departi onques au quemun de l’ost, ne as povres chevaliers, ne as serjans qui l’avoir avoient aidié a waaingnier, fors le gros argent, si comme des paieles d’argent que les dames de le chité portoient as bains.»',
      translationParagraphsHtml: [
        '<strong>[Villehardouin §250, Faral II, s. 52–53]:</strong> «Şehrin içine yayılan diğer insanlar ise bolca ganimet topladılar; ve ele geçirilen ganimet öylesine büyüktü ki altınların, gümüşlerin, kap kacakların, değerli taşların, sırmalı kumaşların, ipekli elbiselerin, sincap, kakım ve alaca kürklerin ve yeryüzünde şimdiye dek bulunmuş en seçkin malların hesabını kimse size söyleyemez. Ve <mark class="hl-west">Champagne Mareşali Geoffroi de Villehardouin, bildiği kadarıyla hakikat adına şahitlik eder ki, dünya yaratıldığından beri tek bir şehirde bu kadar büyük ganimet kazanılmamıştır.</mark>»',
        '<strong>[Clari’li Robert §81, Lauer s. 80–81 · Yoksul Şövalyenin İtirafı]:</strong> «[...] Fakat bu dünya kurulduğundan beri ne İskender zamanında, ne Şarlman zamanında, ne öncesinde ne sonrasında bu kadar büyük, bu kadar soylu, bu kadar zengin bir hazine ne görüldü ne de fethedildi [...] <mark class="hl-west">Ve bizzat hazineyi korumakla görevli olanlar altın mücevherleri ve istedikleri şeyleri alıp hazineyi çalıyorlardı; zengin adamların [büyük baronların] her biri de ya altın mücevherleri ya altın sırmalı ipek kumaşları yahut en çok hoşuna giden şeyleri alıp götürüyordu. Böylece hazineyi gizlice aşırıp yağmalamaya başladılar; öyle ki bu servetin kazanılmasına yardım etmiş olan ordunun avamına, yoksul şövalyelere ve serjantlara kaba gümüşten —şehirdeki hanımların hamamlara götürdükleri gümüş leğenler gibi şeylerden— başka hiçbir şey dağıtılmadı.</mark>»',
      ],
    },
    ransomTariffBox: {
      badge: 'MART – EKİM 1204 BİZANS TOPRAKLARININ PAYLAŞIMI (PARTITIO) & GANİMET BİLANÇOSU',
      title: 'Konstantinopolis Ganimetinin ve Bizans (Doğu Roma) Topraklarının Paylaşım Tablosu',
      lead: 'Villehardouin (§§234–235, 252–255; Faral II, s. 34–37, 56–61), Clari’li Robert (§§80–81; Lauer s. 79–81), Devastatio Constantinopolitana ve Partitio terrarum imperii Romaniae (Bizans İmparatorluğu Topraklarının Paylaşımı Antlaşması) belgesine göre 1204 vurgununun dört kalemi:',
      items: [
        {
          label: 'Resmi Ortak Ganimet (Gizlenen Hariç)',
          value: '400.000 Gümüş Mark',
          note: 'Üç kilisede toplanan resmi tutar (~94 ton gümüş + 10.000 binek hayvanı; Faral II, §255, s. 60); baronların gizlediği payla toplam yağma ~800.000–900.000 mark tahmin edilir',
        },
        {
          label: 'Venedik Payı & Borç Tahsili (§254)',
          value: '1/2 Pay + 50.000 Mark Borç',
          note: 'Ortak ganimet Venedik ile Franklar arasında yarı yarıya bölündü; Franklar kendi paylarından Venedik’e kalan 50.000 marklık borcu ödeyip ordularına ~100.000 mark dağıttı (BCDE yazmalarında 300.000 = 150.000’er mark üzerinden; OA yazmalarında toplam 400.000 mark)',
        },
        {
          label: 'Asker Başına Dağıtım Oranı',
          value: '1 Şövalye = 2 Atlı = 4 Yaya',
          note: 'Villehardouin (§254) oranına ve Devastatio kaydına göre şövalyeye 20 mark, atlı serjant ve rahibe 10 mark, yaya serjanta 5 mark verildi',
        },
        {
          label: 'Toprak Paylaşımı (Partitio terrarum imperii Romaniae)',
          value: '1/4 İmparator · 3/8 Venedik · 3/8 Haçlı',
          note: 'Latin İmparatoru Baudouin 1/4 pay alırken Venedik Girit, Eğriboz, Koron-Modon, Gelibolu ve Ayasofya Patriklik makamını ele geçirdi',
        },
      ],
    },
    synthesisBridge: {
      title: 'Çapraz Okuma Sentezi: Mareşalin «Düzenli Paylaşım» Raporu ile Yoksul Şövalyenin İfşası',
      bodyHtml:
        'Aynı ordudaki iki Fransız tanığı yan yana okuduğumuzda resmi tarih ile saha gerçeği arasındaki perde aralanır: Yüksek komuta konseyindeki <strong>Villehardouin</strong> ganimetin antlaşmaya uygun biçimde üç kilisede toplanıp hakkaniyetle dağıtıldığını savunurken, alt rütbeli şövalye <strong>Clari’li Robert</strong> büyük baronların Bukoleon ve Blakhernai saraylarını gizlice boşaltıp küçük askerlere sadece gümüş leğenleri bıraktığını ifşa eder. <strong>Niketas Khoniates</strong> ise madalyonun üçüncü yüzünü —bin yıllık antik bronz heykellerin bozuk para basmak için fırınlarda eritilişini— kaydeder.',
    },
  },
  {
    id: 'stage-4b-hagia-sophia-vs-saladin-1187',
    stageBadge: 'AŞAMA 4B · AYASOFYA’NIN YAĞMALANMASI VE 1187 SELAHADDİN KARŞILAŞTIRMASI',
    stageTitle: 'Kırılan Ayasofya Sunağı, Papa’nın Öfkesi ve Khoniates’in «1187 Kudüs» Kıyaslaması',
    stageLead:
      'Çapraz Kaynak dizisinin en sarsıcı kesişim noktası: Dosya 02’de incelediğimiz 2 Ekim 1187 Kudüs fethinde Selahaddin Eyyûbî’nin gösterdiği merhamet, sadece 17 yıl sonra (1204) bizzat Ortodoks Bizans tarihçisi Niketas Khoniates tarafından kendi Hristiyan "haçlı" işgalcilerinin Ayasofya’daki vahşetini yargılamak için ölçü birimi olarak kullanılmıştır.',
    bannerVisual: konstantinopolisHeroVisuals.hagiaSophia4B,
    east: {
      pill: 'DOĞU ROMA GÖRGÜ TANIĞI · AYASOFYA VE 1187 KUDÜS KIYASI',
      date: '13–15 Nisan 1204 · Historia (nşr. van Dieten, s. 573–576; Bonn s. 758–763)',
      titleHtml: 'Niketas Khoniates · <em>Historia (Tarih)</em>',
      authorDesc:
        'Ayasofya’nın yağmalanışını bizzat gören ve omuzlarında haç taşıyan Latinleri 1187’de Kudüs’ü fetheden Selahaddin Eyyûbî’nin Müslüman askerleriyle doğrudan kıyaslayan Bizans devlet adamı (Ortaçağ Yunancası aslından doğrudan çeviri; CFHB XI/1, nşr. van Dieten, 1975, s. 573–576; Bonn nşr. s. 758–763; krş. Magoulias 1984, s. 314–316).',
      origLang: 'el',
      origScript:
        '«Τὰ δ᾿ ἐπὶ Νεὼ τοῦ Μεγίστου ἠσεβημένα οὐδ᾿ ἀκοαῖς εἰσιν εὐπαράδεκτα. ἡ μὲν θυωρὸς τράπεζα, τὸ ἐκ πασῶν τιμίων ὑλῶν σύνθεμα συντετηγμένων πυρὶ καὶ περιχωρησασῶν ἀλλήλαις εἰς ἑνὸς ποικιλοχρόου κάλλους ὑπερβολήν, ἐξαισίου τῷ ὄντι καὶ ἀξιαγάστου παρ᾿ ἔθνεσιν ἅπασι, κατετεμαχίσθη καὶ διεμερίσθη τοῖς σκυλευταῖς [...] ἡμίονοί τε καὶ ὑποζύγια σεσαγμένα μέχρι τῶν ἀδύτων εἰσήγοντο τοῦ νεώ [...] Ἀλλὰ καὶ γυναικάριον σεσωρευμένον ἁμαρτίαις [...] ἐπὶ τοῦ συνθρόνου καθῖσαν κεκλασμένον ἀφῆκε μέλος καὶ πολλάκις περιδινηθὲν εἰς ὄρχησιν τὼ πόδε παρενεσάλευσε. [...] οἱ δ᾿ ἐξ Ἰσμαὴλ οὐχ οὕτως, ὅτι μὴ καὶ πάνυ φιλανθρώπως καὶ προσηνῶς τοῖς ἐκ τοῦ γένους αὐτῶν προσηνέχθησαν τῆς Σιὼν κατισχύσαντες· οὔτε γὰρ γυναιξὶ Λατινίσιν ἐπεχρεμέτισαν, οὔτε τὸ Χριστοῦ κενήριον πολυάνδριον πεσόντων ἔδειξαν [...] ἁπαξάπασι δ᾿ ἀνέντες τὴν ἔξοδον χρυσίνοις ἀριθμῷ κατ᾿ ἄνδρα βραχέσιν ἀφώριζον τὰ ζωάγρια.»',
      translationParagraphsHtml: [
        '«Büyük Kilise’de [Ayasofya’da] işlenen küfür ve saygısızlıklar kulakların dahi işitmeye katlanamayacağı türdendir. Ateşle eritilip birbirine kaynaştırılmış her türlü paha biçilmez cevherden oluşan, rengârenk güzelliğin zirvesine ulaşmış, bütün uluslar nezdinde olağanüstü ve hayranlık uyandırıcı olan o <mark class="hl-east">kutsal sunak masası [thyoros trapeza] parçalanıp kırılarak yağmacılar arasında bölüşüldü.</mark> [...] <mark class="hl-east">Semerli katırlar ve yük hayvanları mabedin en kutsal iç kısmına [adyton / bema] kadar sokuldu;</mark> [hayvanlardan bazıları cilalı mermer zeminde kayıp düşünce bıçaklanarak öldürüldü ve kutsal zemin onların pisliği ve kanıyla kirletildi.] Üstelik günahlara batmış bir kadın [...] <mark class="hl-east">Patrik tahtına [synthronon] oturarak kırık dökük açık saçık bir ezgi tutturdu ve defalarca kendi etrafında dönüp dans etmek için ayaklarını savurdu.</mark>»',
        '<strong>[s. 575–576 · 1187 Selahaddin Eyyûbî’nin Kudüs Fethiyle Doğrudan Karşılaştırma]:</strong> «[Omuzlarında haç taşıyanların işleri işte böyleydi!] <mark class="hl-east">Oysa İsmailoğulları [Selahaddin Eyyûbî’nin Müslüman ordusu] Siyon’a [Kudüs’e] hâkim olduklarında hiç de böyle davranmamış, bilakis onların [Latinlerin] soyundan olanlara son derece insanca ve yumuşak muamele etmişlerdi:</mark> Zira ne Latin kadınlarının üzerine azgın atlar gibi kişneyerek saldırdılar, ne Mesih’in boş mezarını [Kutsal Kabir Kilisesi’ni] katledilenlerin toplu mezarlığına çevirdiler [...] <mark class="hl-east">aksine herkesin şehirden çıkışına izin vererek kişi başına biçtikleri birkaç altın sikkelik cüzi bir fidyeyle canlarını bağışladılar</mark> [ve geri kalan tüm mallarıyla gitmelerine müsaade ettiler].»',
      ],
    },
    west: {
      pill: 'ROMA PAPALIĞI RESMÎ KINAMA MEKTUBU',
      date: '12 Temmuz 1205 · Regesta VIII.126 (PL 215, col. 699–702 [701] = Hageneder Bd. 8, Reg. 8.127, s. 230–233 [232])',
      titleHtml: 'Papa III. Innocentius · <em>Regesta Pontificum Romanorum</em>',
      authorDesc:
        'Dördüncü Haçlı Seferi’ni başlatan Papa III. Innocentius’un, Konstantinopolis’teki Papalık elçisi Kardinal San Marcello’lu Pietro Capuano’ya gönderdiği 12 Temmuz 1205 tarihli kınama mektubu (Latince aslından doğrudan çeviri; Migne, PL 215, col. 701; nşr. Hageneder vd., Bd. 8, Wien 2001, Reg. 8.127 [126], s. 232; krş. Montferratlı Bonifacio’ya mektup: Reg. VIII.133, PL 215, col. 712 = Hageneder Reg. 8.134, s. 246).',
      origLang: 'la',
      origScript:
        '«[...] Quomodo enim Graecorum Ecclesia, quantumcunque afflictionibus et persecutionibus affligatur, ad unitatem ecclesiasticam et devotionem Apostolicae Sedis revertetur, quae in Latinis nonnisi perditionis exemplum et opera tenebrarum aspexit, ut jam merito illos abhorreat plus quam canes? Illi etenim, qui non quae sua sunt, sed quae Jesu Christi quaerere credebantur, gladios, quos exercere debuerant in paganos, Christianorum sanguine cruentantes, nec religioni, nec aetati, nec sexui pepercerunt [...] matronas et virgines, etiam Deo dicatas, exponentes spurcitiis garcionum. Nec suffecit eisdem imperiales divitias exhaurire ac diripere spolia principum ac minorum, nisi ad thesauros Ecclesiarum, et, quod gravius est, ad ipsarum possessiones extenderent manus suas, tabulas argenteas etiam de altaribus rapientes, et inter se confringentes in frusta, violantes sacraria, cruces [Reg. VIII.133 ekler: iconas] et reliquias asportantes [...]»',
      translationParagraphsHtml: [
        '«[...] Ne kadar sıkıntı ve zulümle ezilmiş olursa olsun, <mark class="hl-west">Latinlerde yalnızca yıkım örneği ve karanlığın işlerini gören Yunanlıların Kilisesi, artık onları haklı olarak köpeklerden bile daha çok tiksinerek reddederken,</mark> kilise birliğine ve Apostolik Makam’a bağlılığa nasıl geri dönecektir?»',
        '«Zira kendi çıkarlarını değil İsa Mesih’in olanı aradıkları sanılan bu kimseler, <mark class="hl-west">dinsizlere karşı kullanmaları gereken kılıçları Hristiyanların kanına buladılar; ne dine, ne yaşa, ne de cinsiyete acıdılar;</mark> [zina, fuhuş ve ensest suçlarını herkesin gözü önünde işleyerek] <mark class="hl-west">saygın evli kadınları ve hatta Tanrı’ya adanmış bakireleri [rahibeleri] uşakların iğrençliklerine teslim ettiler.</mark> İmparatorluk servetini tüketmek ve büyük-küçük herkesin mallarını yağmalamak da onlara yetmedi; ellerini kiliselerin hazinelerine ve —daha da ağırı— bizzat mülklerine uzattılar; <mark class="hl-west">sunaklardan gümüş levhaları dahi söküp kendi aralarında parçalara ayırdılar,</mark> kutsal odaları çiğneyip haçları, [VIII.133’te ayrıca: ikonaları] ve kutsal emanetleri alıp götürdüler [...]»',
      ],
    },
    synthesisBridge: {
      title: 'Tarihsel Kesişim: Ortodoks Vak’anüvis, Roma Papası ve 1187 Kudüs Terazisi',
      bodyHtml:
        'Tarihte çok az olayda iki rakip başkent —<strong>Konstantinopolis ve Roma</strong>— yapılan eylemin niteliği konusunda bu denli aynı kelimelerde buluşmuştur: <strong>Niketas Khoniates</strong> Ayasofya sunağının kırılışını anlatıp <strong>1187’de Kudüs’ü fetheden Selahaddin Eyyûbî’nin merhametini</strong> Latin vahşetinin karşısına koyarken, seferi bizzat başlatan <strong>Papa III. Innocentius</strong> kendi ordusunun <em>«sunaklardan gümüş levhaları söktüğünü, rahibeleri kirlettiğini ve Yunanlıların artık Latinlerden köpeklerden bile beter tiksindiğini»</em> resmi Papalık siciline kaydetmiştir.',
    },
  },
];

export const konstantinopolisActorFates: ActorFate[] = [
  {
    name: 'Doj Enrico Dandolo',
    role: 'Venedik Cumhuriyeti’nin 41. Doju · Seferin Mali ve Denizcilik Baş Mimarı',
    stance: 'loyal',
    badgeText: '1 YIL SONRA AYASOFYA’YA DEFNEDİLDİ',
    calculation1098:
      '85.000 marklık navlun sözleşmesinden doğan 34.000 marklık açığı Venedik’in lehine çevirdi; doksanlı yaşlarının ortasında ve âmâ olmasına rağmen Zara ve Konstantinopolis kuşatmalarını bizzat kadırga pruvasından yönetip Venedik’e imparatorluğun 3/8’ini ve Ege deniz tekelini kazandırdı.',
    historicalPayback:
      'Zaferden sadece 1 yıl sonra (14 Nisan 1205) Bulgar Çarı Kaloyan ve Kuman süvarileri Hadrianopolis (Edirne) önünde Haçlı şövalyelerini imha ettiğinde, kalan orduyu gece karanlığında Konstantinopolis’e geri çeken yine yaşlı Dandolo oldu. Bu yorucu yürüyüşten kısa süre sonra (Mayıs sonu / Haziran 1205’te) ykl. 97–98 yaşlarında öldü ve Ayasofya’ya defnedildi (bugün üst galeride görülen mermer levha 1847–1849 Fossati restorasyonu anı taşıdır).',
    endDate: 'Mayıs sonu / Haziran 1205 · Konstantinopolis (Ayasofya)',
  },
  {
    name: 'Latin İmparatoru I. Baudouin (Flandre Kontu)',
    role: 'Konstantinopolis’in İlk Latin İmparatoru · 16 Mayıs 1204’te Ayasofya’da Taç Giydi',
    stance: 'loyal',
    badgeText: '11 AY SONRA EDİRNE’DE BULGAR ESARETİ VE ÖLÜM',
    calculation1098:
      'Montferratlı Bonifacio fazla güçlü bulunduğu için Venediklilerin desteğiyle 9 Mayıs 1204’te ilk Latin İmparatoru seçildi; ancak Latin yağmasından bıkan Trakya Rum soyluları Bulgar Çarı Kaloyan (İoannitsa) ile ittifak kurarak ayaklandı.',
    historicalPayback:
      'Taç giymesinden yalnızca 11 ay sonra, 14 Nisan 1205’te Hadrianopolis (Edirne) Muharebesi’nde Çar Kaloyan’ın 14.000 Kuman atlı okçusunun sahte ricat pususuna düştü; Blois Kontu Louis savaş alanında öldürülürken İmparator Baudouin canlı esir alındı ve götürüldüğü Bulgar başkenti Tırnovo’daki kulede hayatını kaybetti.',
    endDate: '1205 sonu · Tırnovo Zindanı (Bulgaristan)',
  },
  {
    name: 'Montferratlı Bonifacio (Boniface de Montferrat)',
    role: 'IV. Haçlı Seferi’nin Başkomutanı · Selanik Latin Kralı (1204–1207)',
    stance: 'loyal',
    badgeText: '3 YIL SONRA RODOP DAĞLARINDA KESİK BAŞ',
    calculation1098:
      'Swabialı Philipp ve Prens IV. Aleksios ile ilk diplomatik teması kuran başkomutandı. İmparatorluk tacını Baudouin’e kaptırınca II. İsaakios’un dul eşi Macar Margareta ile evlendi, Girit’i 1.000 gümüş marka Venedik’e sattı ve Selanik Krallığı’nı kurdu.',
    historicalPayback:
      '4 Eylül 1207’de Rodop Dağları eteklerinde (Mosynopolis yakınlarında) Bulgar pususuna düştü; kolundan ölümcül biçimde oklanarak öldürüldü ve kesilen başı Bulgar Çarı Kaloyan’a gönderildi. Silah arkadaşı Villehardouin’in kroniği tam bu trajik ölüm sahnesiyle yarıda kesilir.',
    endDate: '4 Eylül 1207 · Mosynopolis / Gümülcine',
  },
  {
    name: 'V. Aleksios Dukas «Murtzuphlos» & IV. Aleksios Angelos',
    role: '1203–1204 Krizinin Son İki Bizans İmparatoru · Boğdurulan Genç Prens ve Sütundan Atılan Darbeci',
    stance: 'betrayer',
    badgeText: 'BOĞDURULMA VE THEODOSİUS SÜTUNU’NDAN İDAM',
    calculation1098:
      'Genç IV. Aleksios ödeyemeyeceği 200.000 marklık vaatle Haçlı donanmasını Haliç’in içine soktu; Murtzuphlos ise 27–28 Ocak 1204 gecesi saray darbesi yapıp genç imparatoru zindanda yay kirişiyle boğdurttu ve savunmayı devraldıysa da 12 Nisan gecesi başkenti terk etti.',
    historicalPayback:
      'Trakya’da sabık imparator III. Aleksios Angelos ile ittifak kurmak isteyen Murtzuphlos, kayınpederi III. Aleksios tarafından hamamda tuzağa düşürülüp gözlerine mil çekildi! Ardından Thierry de Loos komutasındaki Latinlerce yakalanıp Konstantinopolis’e getirildi ve Kasım 1204’te "efendisini öldüren hain" sıfatıyla Theodosius (Tauri) Sütunu’nun tepesinden aşağı atılarak idam edildi.',
    endDate: '8 Şubat 1204 (IV. Aleksios) & Kasım 1204 (Murtzuphlos)',
  },
  {
    name: 'Niketas Khoniates',
    role: 'Doğu Roma Büyük Logotheti ve Görgü Tanığı Tarihçi · Historia ve De Signis Müellifi',
    stance: 'loyal',
    badgeText: 'İZNİK SÜRGÜNÜNDE ÖLÜMSÜZ TARİH ESERİ',
    calculation1098:
      'Yangınlarda konağını ve bütün servetini kaybetti; Venedikli dostu Dominikos’un zırh kuşanıp kendisini ve ailesini kendi «savaş esirleri» gibi göstererek koruması sayesinde, 17 Nisan 1204’te hamile eşi ve çocuklarıyla birlikte yağmalanan İstanbul’dan yürüyerek çıktı; önce Selymbria’ya (Silivri), ardından 1206 sonlarında İznik’e sığındı.',
    historicalPayback:
      'İznik İmparatoru I. Theodoros Laskaris’in sarayında yoksulluk ve sürgün acısı içinde yaşarken hem 1118–1206 Bizans tarihini kapsayan anıtsal Historia’sını son şekline kavuşturdu hem de Latinlerin erittiği antik heykellerin envanteri olan De Signis’i yazarak 1204 hafızasını dünya tarihine kazıdı.',
    endDate: 'ykl. 1217 · İznik (Nikaia)',
  },
  {
    name: 'I. Theodoros Laskaris, I. Aleksios Komnenos (Kraliçe Tamar Desteğiyle) & I. Gıyâseddin Keyhüsrev',
    role: '1204 Sonrası Anadolu ve Karadeniz Jeopolitiğinin Üç Yeni Merkezi: İznik, Trabzon ve Konya',
    stance: 'loyal',
    badgeText: 'İZNİK (1261), TRABZON (1461) VE SELÇUKLU DENİZLERİ',
    calculation1098:
      'Konstantinopolis düşerken Laskaris Bursa–İznik hattında Rum direnişini örgütledi; Kraliçe Tamar Nisan 1204’te akrabaları Aleksios ve David Komnenos kardeşlere Gürcü ordusunu vererek Karadeniz harekâtını destekledi; İstanbul sürgününden dönen I. Gıyâseddin Keyhüsrev ise 1205’te ikinci kez Konya tahtına çıktı.',
    historicalPayback:
      'Üç eksen de 1204 boşluğunda kalıcı devlet yapılarına dönüştü: Keyhüsrev 1207’de Antalya’yı fethedip (oğlu Keykâvus 1214’te Sinop’u alıp) Türkiye Selçuklularını deniz imparatorluğu yaptı (Haziran 1211’de Menderes Antakyası [İbn Bîbî’de Alaşehir] Muharebesi’nde Laskaris ile savaşırken şehit düştü); Laskaris’in kurduğu İznik devleti 1261’de İstanbul’u geri aldı; Kraliçe Tamar’ın askerî ve siyasî desteğiyle Aleksios ve David Komnenos’un kurduğu Trabzon Rum İmparatorluğu ise 1461’de Fatih Sultan Mehmed’in fethine dek 257 yıl yaşadı.',
    endDate: '1211 (Keyhüsrev) · 1213 (Tamar) · 1221/22 (Laskaris & Aleksios)',
  },
];

export const post1204Fronts = [
  {
    id: 'partitio-romaniae-venice-empire',
    tabTitle: 'Bizans Topraklarının Paylaşımı & Venedik Deniz İmparatorluğu',
    period: '1204 – 1261 (Partitio terrarum imperii Romaniae ve Stato da Màr)',
    summary:
      'Mart–Ekim 1204 paylaşım antlaşmasıyla Doğu Roma bir yapboz gibi parçalandı: Latin İmparatoru I. Baudouin kâğıt üzerinde Trakya ve Kuzeybatı Anadolu’yu alırken Bulgar Çarı Kaloyan’ın 1205 Edirne zaferiyle Boğaz içine sıkıştı. Asıl büyük kazanan Venedik Cumhuriyeti oldu: Doj Dandolo iç kara toprakları yerine Adriyatik’ten Haliç’e uzanan zincirleme limanları —Korfu, Modon, Koron, Eğriboz (Negroponte), Kiklad Adaları, Girit (Candia) ve Konstantinopolis’in 3/8’ini— seçerek Akdeniz’in ilk modern kolonyal deniz imparatorluğunu (Stato da Màr) kurdu.',
    keyFact:
      '1204’te kurulan Latin İmparatorluğu sadece 57 yıl (1261’e dek) yaşayabildi; ancak Venedik’in 1204’te aldığı Girit Adası 1669’da Osmanlı sadrazamı Köprülü Fazıl Ahmed Paşa’nın Kandiye fethine kadar tam 465 yıl Venedik elinde kaldı.',
  },
  {
    id: 'nicaea-empire-1261-restoration',
    tabTitle: 'İznik İmparatorluğu & 1261 Restorasyonu',
    period: '1204 – 25 Temmuz 1261 (Sürgündeki Başkent İznik)',
    summary:
      'Tarihin çarpıcı bir cilvesiyle, 1071 Malazgirt’ten sonra (Dosya 03) Kutalmışoğlu Süleyman Şah’ın 1075–1097 arasında Türkiye Selçuklu başkenti yaptığı İznik (Nikaia), 1204’te bu kez Latin işgalinden kaçan Ortodoks Rumların sürgün başkenti oldu! I. Theodoros Laskaris ve halefi III. İoannes Dukas Vatatzes İznik’te kendi patriklerini seçip güçlü bir tarım-ordu devleti kurdu; nihayet VIII. Mihail Palaiologos’un komutanı Aleksios Strategopoulos 25 Temmuz 1261’de Konstantinopolis’i Latinlerden geri aldı.',
    keyFact:
      '1261’de yeniden kurulan Bizans artık eski cihan imparatorluğu değil, içi boşaltılmış ve Ceneviz–Venedik borçlarına bağımlı bir Marmara-Trakya devletiydi; 1204 yağması, 1453 Osmanlı fethine giden uzun çöküşün geri dönülmez kırılma noktası oldu.',
  },
  {
    id: 'tamar-trebizond-1204',
    tabTitle: 'Nisan 1204 Kraliçe Tamar Desteği & Trabzon Rum İmparatorluğu',
    period: 'Nisan 1204 – 1461 (Gürcistan’ın Karadeniz Siyaseti ve Komnenos Kardeşler)',
    summary:
      'Gürcü tarih yazıcılığında bağımsız iktidarı dolayısıyla kraliçe değil «Kral» (Mepe / მეფე) unvanıyla anılan Gürcistan hükümdarı Tamar, 1195 Şamkor ve 1202 Pasinler zaferlerinin ardından Gürcü Krallığı’nı denizlere açma siyaseti izledi. 1185’te I. Andronikos Komnenos’un devrilmesiyle küçük yaştaki torunları Aleksios ve David Komnenos Tiflis’e getirilip Bagratlı sarayında yetiştirilmişti (Komnenos kardeşlerin yeğenleri kabul edildiği Rusudan’ın Tamar’ın kız kardeşi olup olmadığı bilgisi Kartlis Tskhovreba’da yalnızca bir kez geçtiğinden, kronikteki daha ihtiyatlı «akrabası» vurgusu tarihsel açıdan esastır). III. Aleksios Angelos’un 1203’te Karadağ, Antakya, Kıbrıs ve Mukaddes Dağ (Aynoroz) keşişlerine Tamar’ın verdiği yüklü bağışa İstanbul’da el koymasını meşru gerekçe yapan Tamar, Nisan 1204 İstanbul işgalini fırsata çevirerek Lih-İmereti ordusunu Aleksios ve David’in emrine verdi; bu askerî ve siyasî destekle Trabzon, Samsun, Sinop, Giresun, Kotyora (Ordu), Amasra ve Karadeniz Ereğlisi ele geçirildi ve Aleksios ile David Komnenos kardeşler Trabzon Rum İmparatorluğu’nu kurdu.',
    keyFact:
      '1204’te Trabzon Rum İmparatorluğu’nun kuruluşuna verilen bu destek ile 1210 Kuzey İran (Tebriz–Kazvin) seferi aynı stratejik bütünün parçalarıydı: Bizans’ın Karadeniz tekelini kırıp Tebriz–Tiflis–Trabzon uluslararası ticaret koridorunu güvenceye almak. Tamar’ın doğrudan yönetmediği, ancak kuruluşunun önünü açtığı Trabzon Rum İmparatorluğu 1461’de II. Mehmed’in fethine dek 257 yıl yaşadı.',
  },
  {
    id: 'seljuk-antalya-sinop-trade',
    tabTitle: 'Türkiye Selçukluları: Antalya (1207) & Sinop (1214)',
    period: '1205 – 1220 (Anadolu’nun İki Denize Açılışı)',
    summary:
      'Haçlıların 1204’te Bizans merkezini parçalaması, Anadolu’daki asıl büyük stratejik meyveyi Konya’daki Türkiye Selçuklu Devleti’ne verdi. 1197–1204 arasındaki taht sürgününde bizzat Konstantinopolis’te yaşamış olan Sultan I. Gıyâseddin Keyhüsrev, 1205’te Konya tahtına döner dönmez Bizans boşluğunu değerlendirdi: 5 Mart 1207’de Antalya’yı fethederek Türkleri Akdeniz’e indirdi ve Venedik/Kıbrıs ile ticaret ahidnâmeleri imzaladı; oğlu I. İzzeddin Keykâvus ise Kasım 1214’te Trabzon Rum İmparatoru I. Aleksios Komnenos’u esir alarak Sinop’u fethetti ve Karadeniz tersanesini kurdu.',
    keyFact:
      '1204 Konstantinopolis kırılması sayesinde batıdan gelen Haçlı ve Bizans baskısı sona erdi; Türkiye Selçukluları Antalya–Konya–Sivas–Sinop kervansaray hattıyla 13. yüzyıl Anadolu’sunun en parlak iktisadi ve mimari altın çağını inşa etti.',
  },
];

export const konstantinopolisPhilologySpotlight = {
  badge: 'ARKEOLOJİ & EPİGRAFİ DEDEKTİFLİĞİ · AYASOFYA VE MYRELAİON (1965)',
  title: 'Venedik San Marco’daki Porfir «Dört Tetrark» Heykelinin Eksik Topuğu Neden 761 Yıl Sonra İstanbul’da Çıktı?',
  eastLabel: 'İSTANBUL ARKEOLOJİ SAHASI (AYASOFYA & BODRUM CAMİİ)',
  eastSource: 'Ayasofya 1847–1849 «Henricus Dandolo» Anı Levhası & 1965 Myrelaion Kazısı (İstanbul Arkeoloji Müzeleri, Env. 5848 T)',
  eastText:
    'Ayasofya’nın güney üst galerisinde bugün görülen «Henricus Dandolo» yazılı mermer zemin levhası, Mayıs sonu / Haziran 1205’te kiliseye defnedilen Venedik Doju’nun anısına 1847–1849 Fossati restorasyonunda yerleştirilmiş bir anı taşıdır (kenotaf). Çok daha sarsıcı maddi kanıt ise 1965 yılında Rudolf Naumann’ın İstanbul Laleli’deki Myrelaion Sarayı (Bodrum Camii) kazısında çıktı: Kırmızı Mısır porfirinden (somaki taşından) yontulmuş, mücevherli imparatorluk çizmesi (campagi) giymiş bir sağ topuk ve kaide köşesi!',
  westLabel: 'VENEDİK SAN MARCO HAZİNE KÖŞESİ',
  westSource: 'Basilica di San Marco (Porta della Carta Köşesi · M.S. ~300 Porfir Tetrarşi Grubu)',
  westText:
    'Venedik San Marco Bazilikası’nın dış güneybatı köşesine yerleştirilmiş olan ünlü Porfir «Dört Tetrark» (Diocletianus ve üç ortak imparatoru) heykel grubunda, figürlerden birinin sağ ayağının topuğu ve kaidesi 1204’ten beri kırıktı ve Venedikli taşçılar tarafından açık renkli İstirya taşıyla yamanmıştı.',
  resolutionHtml:
    '<strong>Arkeolojik Kanıtın Birleşmesi:</strong> 1965’te Rudolf Naumann’ın İstanbul Myrelaion (Bodrum Camii) kazısında bulduğu porfir sağ topuk parçası ölçüldüğünde, Venedik San Marco Bazilikası’ndaki Tetrark heykelinin eksik ayağına <strong>milimetresi milimetresine oturduğu</strong> kanıtlandı! 1204 yılında Venedikli yağmacılar heykeli Konstantinopolis’teki kaidesinden levye ve balyozlarla aceleyle sökerken imparatorun çizmesinin topuğu kırılıp İstanbul toprağında kalmış, gövdesi ise gemiyle Venedik’e taşınmıştı. Bugün gövdesi Venedik’te, kopan topuğu ise <strong>İstanbul Arkeoloji Müzeleri</strong>’nde (Env. 5848 T) sergilenen bu heykel, 1204 yağmasının en somut fiziksel delilidir.',
};

export const konstantinopolisBalanceRows = [
  {
    dimension: '1201–1202’de İlan Edilen Başlangıç Hedefi',
    crusadersVerdict: 'MISIR ÜZERİNDEN KUDÜS’Ü KURTARMAK',
    crusadersDetail:
      'Papa III. Innocentius ve Fransız baronları, 1187’de Selahaddin’in aldığı Kudüs’ü geri almak için Eyyûbîlerin kalbi olan İskenderiye ve Kahire’ye 33.500 kişilik bir deniz seferi planlamıştı.',
    turksVerdict: 'DOĞU ROMA MEŞRUİYETİ & ANADOLU DENGESİ',
    turksDetail:
      'Bizans başkentinde III. Aleksios Angelos tahtını korumaya çalışırken, Konya’da Türkiye Selçukluları ve Kafkasya’da Kraliçe Tamar bölgesel dengeleri kolluyordu.',
  },
  {
    dimension: '1202–1204 Mali ve Askeri Sapma Mekanizması',
    crusadersVerdict: '34.000 MARK BORÇ VE VENEDİK ROTASI',
    crusadersDetail:
      'Lido’ya yeterli asker gelmeyince doğan navlun borcu yüzünden ordu önce Hristiyan Zara’yı (1202), ardından 200.000 mark vaat eden Prens IV. Aleksios adına Konstantinopolis’i (1203–1204) vurdu.',
    turksVerdict: 'BOŞ HAZİNE, MİTATON YANGINI VE DARBE',
    turksDetail:
      'İkonalar eritildiği halde borç ödenemedi; Müslüman tüccarların Mitaton Camii’ne yapılan saldırıyla başlayan Büyük Yangın ve Ocak 1204 Murtzuphlos darbesi uzlaşmayı imkânsız kıldı.',
  },
  {
    dimension: '12–15 Nisan 1204 Üç Günlük Yağma ve Dini Kırılma',
    crusadersVerdict: '800.000 MARK GANİMET & PAPA’NIN LANETİ',
    crusadersDetail:
      'Ayasofya sunağı kırıldı, bronz heykeller sikke için eritildi, rölikler ve Tunç Atlar Batı’ya taşındı; Papa III. Innocentius "Yunanlılar artık Latinlerden köpeklerden beter tiksiniyor" diye yazdı.',
    turksVerdict: '1187 SELAHADDİN MERHAMETİNİN TESCİLİ',
    turksDetail:
      'Görgü tanığı Niketas Khoniates, omuzlarında haç taşıyan Latinlerin vahşetini 17 yıl önce Kudüs’ü fetheden Selahaddin Eyyûbî’nin kadınlara ve mabede dokunmayan adaletiyle kıyasladı.',
  },
  {
    dimension: 'Uzun Vadeli Jeopolitik Miras (1204 – 1461)',
    crusadersVerdict: 'VENEDİK DENİZ TEKELİ & KALICI ŞİZMA',
    crusadersDetail:
      'Kudüs’e tek bir tabur bile gidemedi; Venedik Girit ve Ege limanlarıyla deniz imparatorluğu kurarken Doğu ve Batı kiliseleri arasındaki ayrılık kalıcılaştı ve Bizans 1453’e dek bir daha belini doğrultamadı.',
    turksVerdict: 'İZNİK, TRABZON VE SELÇUKLU DENİZLERİ',
    turksDetail:
      'Batı’da İznik İmparatorluğu (1204–1261), Doğu Karadeniz’de Kraliçe Tamar’ın desteğiyle Trabzon İmparatorluğu (1204–1461) doğarken, Türkiye Selçukluları Antalya (1207) ve Sinop’u (1214) alarak iki denize açıldı.',
  },
];

export const konstantinopolisPrimarySources = [
  {
    name: 'Geoffroi de Villehardouin — La Conquête de Constantinople',
    side: 'Champagne Mareşali (ykl. 1150–1213)',
    desc: '1201 Venedik antlaşmasını bizzat müzakere eden altı elçiden biri ve Haçlı ordusunun önde gelen komutanlarından Champagne Mareşali. Eski Fransızca nesrin ilk büyük tarih eseri olan kroniğinde 85.000 marklık sözleşmeyi, Lido borç krizini, Zara ve Korfu tartışmalarını, 12 Nisan 1204 deniz surları hücumunu ve 1205 Edirne bozgununu içeriden belgeler.',
  },
  {
    name: 'Niketas Khoniates — Historia (Chronike Diegesis) & De Signis',
    side: 'Doğu Roma (Bizans) Görgü Tanığı ve Büyük Logothet (ykl. 1155–1217)',
    desc: 'Kuşatma sırasında başkentte en üst düzey mülki amirlerden biri olan Khoniates, Ağustos 1203 Mitaton Camii yangınını, ikonaların eritilişini, Murtzuphlos darbesini, Ayasofya’nın yağmalanışını, 1187 Selahaddin karşılaştırmasını ve De Signis ekinde Latinlerin erittiği antik bronz heykelleri eşsiz bir edebi güçle kaydeder.',
  },
  {
    name: 'Clari’li Robert (Robert de Clari) — La Conquête de Constantinople',
    side: 'Pikardiyalı Yoksul Haçlı Şövalyesi Görgü Tanığı (ö. 1216 sonrası)',
    desc: 'Pierre d’Amiens’in maiyetinde savaşan alt rütbeli bir şövalye. Yüksek baronların gözünden yazan Villehardouin’in aksine, sıradan askerlerin öfkesini, Konstantinopolis’in saray ve röliklerini ve yağma sonrasında büyük baronların Bukoleon ile Blakhernai hazinelerini yoksul şövalyelerden nasıl gizlediğini (§§80–81) açıkça anlatır.',
  },
  {
    name: 'Papa III. Innocentius — Regesta Pontificum Romanorum (1198–1216)',
    side: 'Roma Papalık Arşivi ve Resmi Mektuplar (Latince)',
    desc: 'Seferi başlatan Papa’nın Zara kuşatmasını yasaklayan aforoz mektupları ile Temmuz–Ağustos 1205’te (Reg. VIII.126 & VIII.133, PL 215, col. 701, 712) Konstantinopolis’teki kilise yağmasını, kadınlara yapılan saldırıları ve Doğu–Batı kilise birliğinin nasıl baltalandığını ("ut jam merito illos abhorreat plus quam canes") kınayan resmi yazışmaları.',
  },
  {
    name: 'Kartlis Tskhovreba — İstoriani da Azmani Şaravandedtani (Hükümdarların Tarihi ve Methiyeleri)',
    side: 'Kraliçe Tamar Dönemi / Anonim Gürcü Kroniği (13. Yüzyıl Başı)',
    desc: 'Kraliçe Tamar dönemine ait Gürcü kronik geleneği; III. Aleksios Angelos’un 1203’te Karadağ, Antakya, Kıbrıs ve Mukaddes Dağ (Aynoroz) manastırlarındaki keşişlere gönderilen altınları İstanbul’da gasp etmesi üzerine Tamar’ın Nisan 1204’te Lih-İmereti ordusunu akrabası Aleksios Komnenos ile göndererek Trabzon, Samsun, Sinop, Giresun, Kotyora (Ordu), Amasra ve Ereğli’nin zaptına ve Aleksios–David Komnenos kardeşlerin Trabzon Rum İmparatorluğu’nu kurmasına nasıl destek verdiğini (Vakhtang VI redaksiyonu TTK 2003 çev., s. 412; S. Qaukhchishvili 1959 neşrinde Basili Ezosmodzghvari bölümü, c. II, s. 142–143; İng. çev. Vivian 1991, s. 87 & Metreveli–Jones 2014, s. 300) belgeler.',
  },
  {
    name: 'Gunther von Pairis (Historia Constantinopolitana) & Devastatio Constantinopolitana',
    side: 'Alman Haçlı / Cîteaux Manastır Kaynakları (1204–1205)',
    desc: 'Alsace’lı Cîteaux başrahibi Martin’in Pantokrator Manastırı’ndan kutsal emanetleri nasıl gasp ettiğini ("kutsal hırsızlık") anlatan Gunther von Pairis ile Venedik sözleşmesinden 1204 paylaşımına kadar rakamları gün gün tutan anonim Devastatio günlüğü.',
  },
  {
    name: 'Nikolaos Mesarites, Georgios Akropolites & Novgorod Kroniği',
    side: 'Bizans, İznik ve Eski Rus Görgü Tanıklıkları (13. Yüzyıl)',
    desc: 'Ayasofya sakristanı Mesarites’in 1204 ağıtı, İznik İmparatorluğu’nun kuruluşunu ve 1261 restorasyonunu yazan devlet adamı Georgios Akropolites (Chronike Syngraphe) ve o sırada İstanbul’da bulunan Rus hacısının Eski Rusça "Tsargrad’ın Alınışı" (Povest’ o vzyatii Tsargrada) anlatısı.',
  },
  {
    name: 'İbn Bîbî (el-Evâmirü’l-Alâ’iyye) & İzzeddin İbnü’l-Esîr (el-Kâmil fi’t-Târîh)',
    side: 'Türkiye Selçuklu ve İslam Dünyası Kaynakları (13. Yüzyıl)',
    desc: 'İbnü’l-Esîr (600 h. / 1203–1204 kaydında) Frankların Konstantinopolis’i alışını, kura ile Latin imparatoru seçişini ve İslam dünyasındaki yankısını; İbn Bîbî ise 1204 parçalanmasının ardından I. Gıyâseddin Keyhüsrev’in 1207 Antalya ve I. İzzeddin Keykâvus’un 1214 Sinop fetihlerini kaydeder.',
  },
];

export const konstantinopolisModernRefsHtml =
  '<strong>Çağdaş Araştırmalar:</strong> Işın Demirkent (<em>Haçlı Seferleri Tarihi</em>, Dünya Yay., 1997; <em>Niketas Khoniates’in Historia’sı (1195–1206): İstanbul’un Haçlılar Tarafından Zaptı ve Yağmalanması</em>, Dünya Yay., 2004), Georg Ostrogorsky (<em>Bizans Devleti Tarihi</em>, çev. Fikret Işıltan, TTK, 1981), Donald E. Queller &amp; Thomas F. Madden (<em>The Fourth Crusade: The Conquest of Constantinople</em>, 2. bs., University of Pennsylvania Press, 1997; Thomas F. Madden, <em>Enrico Dandolo and the Rise of Venice</em>, Johns Hopkins University Press, 2003), Alfred J. Andrea (<em>Contemporary Sources for the Fourth Crusade</em>, Brill, 2000), Jonathan Phillips (<em>The Fourth Crusade and the Sack of Constantinople</em>, Viking/Penguin, 2004), Michael Angold (<em>The Fourth Crusade: Event and Context</em>, Longman, 2003; <em>A Byzantine Government in Exile: Government and Society under the Laskarids of Nicaea, 1204–1261</em>, Oxford University Press, 1975), Paul Magdalino (<em>The Empire of Manuel I Komnenos, 1143–1180</em>, Cambridge University Press, 1993), Ayşe Beyza Ercan (<em>“Gürcü Krallığında Kadın Kral Tamar ve İktidarı”</em>, <em>Ortaçağda Kadın: Hırs, Tutku ve Hakimiyet</em> içinde, ed. Tülay Metin – Songül Dumlupınar Alican, Kronik Kitap, İstanbul, Aralık 2024, s. 168–188; <em>Altın Çağ Dönemi Gürcistan’ının Dâhilî ve Haricî Politikaları</em>, Sonçağ Yayınları, Ankara, 2023; [Büyükçınar], <em>“Gürcü Kaynaklarına Göre Gürcistan Altın Çağ Döneminin Son Hükümdarı: Kraliçe Tamar”</em>, Karadeniz Araştırmaları Enstitüsü Dergisi (KAREN), c. 3, sy. 4, 2017, s. 31–46; <em>“The Byzantine Empire in the Kingdom of Georgia’s Foreign Policy in the 11th Century”</em>, Karadeniz Araştırmaları Enstitüsü Dergisi (KAREN), vol. 6, no. 11, pp. 331–344, Dec. 2020), <em>Gürcistan Tarihi (Eski Çağlardan 1212 Yılına Kadar)</em> (çev. Marie Félicité Brosset – Hrand D. Andreasyan, not ve yay. haz. Erdoğan Merçil, TTK Yay., Ankara, 2003), Murat Keçiş (<em>Trabzon Rum İmparatorluğu ve Türkler (1204–1404)</em>, TTK Yay., Ankara, 2013), Manana Gabachvili (<em>“La Politique de la reine Thamar envers la Perse et l’Occident”</em>, Ilia State University Press, 2020, s. 302–310), A. A. Vasiliev (<em>“The Foundation of the Empire of Trebizond (1204–1222)”</em>, Speculum, c. 11, sy. 1, 1936, s. 3–37), Cyril Toumanoff (<em>“On the Relationship between the Founder of the Empire of Trebizond and the Georgian Queen Thamar”</em>, Speculum, c. 15, sy. 3, 1940, s. 299–312), Rustam Shukurov (<em>The Byzantine Turks, 1204–1461</em>, Brill, 2016), Osman Turan (<em>Selçuklular Zamanında Türkiye: Siyasî Tarih Alp Arslan’dan Osman Gazi’ye 1071–1318</em>, 1971), Rudolf Naumann (<em>“Der antike Rundbau beim Myrelaion und der Palast Romanos I. Lekapenos”</em>, Istanbuler Mitteilungen, c. 16, 1966, s. 199–216), Edmond Faral (<em>Villehardouin: La Conquête de Constantinople</em>, 2 cilt, Les Belles Lettres, 1938–1939), Philippe Lauer (<em>Robert de Clari: La Conquête de Constantinople</em>, CFMA 40, Champion, 1924), Jan-Louis van Dieten (<em>Nicetae Choniatae Historia</em>, CFHB XI/1–2, De Gruyter, 1975) ve Harry J. Magoulias (<em>O City of Byzantium, Annals of Niketas Choniates</em>, Wayne State University Press, 1984).';
