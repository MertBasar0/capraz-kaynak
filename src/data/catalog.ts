import { withBase } from '../utils/paths';

export interface DossierMeta {
  id: string;
  number: string;
  slug: string;
  status: 'yayinda' | 'hazirlaniyor';
  period: string;
  geography: string;
  readingTime: string;
  title: string;
  subtitle: string;
  hookQuestion: string;
  witnessSources: string[];
  sceneCount: number;
}

export const dossiers: DossierMeta[] = [
  {
    id: 'antakya-1098',
    number: 'DOSYA 01',
    slug: withBase('/dosyalar/antakya-1098/'),
    status: 'yayinda',
    period: '1071 – 1291 (Merkez: Haziran 1098)',
    geography: 'Clermont · İznik · Çukurova (Adana) · Urfa · Antakya · Kudüs',
    readingTime: '14 dk etkileşimli deneyim',
    title: 'Kuşatanların Kuşatıldığı Gün: Antakya 1098 ve Kürboğa',
    subtitle:
      'Avrupa neden birleşip Anadolu’ya yürüdü, Musul Atabeyi Kürboğa’nın dev koalisyon ordusu tek kılıç vurulmadan nasıl dağıldı ve 200 yıllık Haçlı Seferleri terazisinde gerçekte kim kazandı?',
    hookQuestion:
      'Açlıktan kırılan bir Haçlı ordusunun "dağdan beyaz atlı azizler indi" diye yazdığı sabahı, karşı cephedeki İslam vekâyinâmeleri nasıl kaydetti?',
    witnessSources: [
      'Gesta Francorum',
      "İbnü'l-Esîr (el-Kâmil)",
      "İbnü'l-Adîm (Zübdetü'l-Haleb)",
      "İbnü'l-Kalânisî",
      'Chartreslı Fulcherius',
      'Urfalı Mateos',
      'Süryani Mihail',
      'Kahire Genizası',
    ],
    sceneCount: 6,
  },
  {
    id: 'hittin-1187',
    number: 'DOSYA 02',
    slug: withBase('/dosyalar/hittin-1187/'),
    status: 'yayinda',
    period: '1144 – 1192 (Merkez: Mayıs – Ekim 1187)',
    geography: 'Urfa · Kahire · Şam · Musul · Saffûriye · Taberiye (Hıttîn) · Kudüs · Göksu · Akka · Yafa',
    readingTime: '16 dk etkileşimli deneyim',
    title: 'Susuzluk, Ateş ve Diplomasi: 1187 Hıttîn ve Kudüs’ün Geri Alınışı',
    subtitle:
      '1098’de dağılan koalisyondan 1186 tek komutasına uzanan stratejik kıskaç, saha hidrolojisiyle Hıttîn tuzağı, 2 Ekim 1187 Kudüs emân teslimi ve III. Haçlı Seferi bilançosu.',
    hookQuestion:
      '1098’de Antakya önünde emîrlerin birbirine düşmesiyle açılan Kudüs yolu, 89 yıl sonra nasıl kapandı? Bir cephenin «Şeytan yalan söyledi!» diyerek kırmızı kraliyet çadırının devrilişini izlediği, karşı cephenin «o gece orada sudan çok kan döküldü» diye yazdığı Hıttîn’i ve 1099 katliamıyla taban tabana zıt 1187 Kudüs teslimini iki tarafın görgü tanıkları nasıl kaydetti?',
    witnessSources: [
      'Bahâeddin İbn Şeddâd',
      'İmâdüddin el-İsfahânî',
      "İbnü'l-Esîr (el-Kâmil)",
      'Kâdî el-Fâzıl Divanı',
      'Libellus (Görgü Tanığı)',
      'Epistola Terrici',
      'Ernoul Kroniği',
      'Itinerarium Peregrinorum',
    ],
    sceneCount: 6,
  },
  {
    id: 'malazgirt-1071',
    number: 'DOSYA 03',
    slug: '#hazirlaniyor',
    status: 'hazirlaniyor',
    period: '1040 – 1081 (Merkez: 26 Ağustos 1071)',
    geography: 'Konstantinopolis · Erzurum · Ahlat · Malazgirt (Rahve Ovası)',
    readingTime: 'Planlanan 3. Dosya',
    title: 'Anadolu Kapısında İki İmparatorluk: 1071 Malazgirt Meydan Muharebesi',
    subtitle:
      'Sultan Alp Arslan ile İmparator Romanos Diogenes’in Rahve Ovası’ndaki karşılaşması, Bizans ordusundaki Uz–Peçenek ve Frank paralı askerlerinin tutumu, esaret protokolü ve Anadolu’nun siyasi dönüşümü.',
    hookQuestion:
      'Savaş meydanında bizzat bulunan Bizans yargıcı Mihail Attaleiates’in gözlemleriyle İslam vekâyinâmelerinin esaret anlatıları nerede örtüşüyor, nerede ayrılıyor?',
    witnessSources: [
      'Mihail Attaleiates (Historia)',
      'Nikephoros Bryennios',
      "Sıbt İbnü'l-Cevzî (Mir'âtü'z-Zamân)",
      "İbnü'l-Esîr",
      'Urfalı Mateos',
    ],
    sceneCount: 6,
  },
  {
    id: 'konstantinopolis-1204',
    number: 'DOSYA 04',
    slug: '#hazirlaniyor',
    status: 'hazirlaniyor',
    period: '1202 – 1261 (Merkez: Nisan 1204)',
    geography: 'Venedik · Zara · Konstantinopolis · İznik',
    readingTime: 'Planlanan 4. Dosya',
    title: 'Hedef Şaşıran Sefer: 1204 Konstantinopolis Yağması',
    subtitle:
      'Kudüs’ü kurtarmak için yola çıkan IV. Haçlı Seferi nasıl Venedik borçları ve taht entrikalarıyla dünyanın en büyük Hristiyan başkentini yağmaladı?',
    hookQuestion:
      'Doğu ve Batı Hristiyanlığını birleştirme vaadiyle başlayan hareket, nasıl Bizans’ın belini kırıp Osmanlı’ya Balkan yolunu açtı?',
    witnessSources: [
      'Niketas Khoniates (Historia)',
      'Geoffroy de Villehardouin',
      "Clari'li Robert",
    ],
    sceneCount: 5,
  },
];
