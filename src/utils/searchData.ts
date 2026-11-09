import { withBase } from './paths';
import { dossiers } from '../data/catalog';
import {
  mapSteps as antakyaMapSteps,
  propagandaCases as antakyaPropagandaCases,
  verifiedViolenceFacts as antakyaVerifiedFacts,
  armySegments as antakyaArmySegments,
  berkyarukReasons,
  actorFates as antakyaActorFates,
  otherFronts as antakyaFronts,
  primarySourcesGuide as antakyaPrimarySources,
} from '../data/antakya1098';
import {
  hittinMapSteps,
  hittinPropagandaCases,
  hittinVerifiedFacts,
  saladinCommanderProfile,
  saladinUnificationReasons,
  hittinArmySegments,
  hittinChronicleStages,
  hittinActorFates,
  thirdCrusadeFronts,
  jaffaPhilologySpotlight,
  hittinPrimarySources,
  hittinModernRefsHtml,
} from '../data/hittin1187';
import {
  malazgirtMapSteps,
  malazgirtPropagandaCases,
  malazgirtVerifiedFacts,
  alpArslanCommanderProfile,
  malazgirtStrategicReasons,
  malazgirtArmySegments,
  malazgirtChronicleStages,
  malazgirtActorFates,
  post1071Fronts,
  malazgirtPhilologySpotlight,
  malazgirtPrimarySources,
  malazgirtModernRefsHtml,
} from '../data/malazgirt1071';

export interface SearchActivateAction {
  frontTabId?: string;
  openSources?: boolean;
  lensId?: string;
  lensMode?: 'claim' | 'critique';
  fateIndex?: number;
  flipFate?: boolean;
}

export interface SearchEntry {
  id: string;
  dossierBadge: string;
  dossierTitle: string;
  category: string;
  title: string;
  snippet: string;
  keywords: string;
  href: string;
  targetId?: string;
  activate?: SearchActivateAction;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateText(text: string, maxLen = 210): string {
  const clean = stripHtml(text);
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${sliced.slice(0, lastSpace > 120 ? lastSpace : maxLen)}…`;
}

const antakyaModernRefsText =
  'Işın Demirkent Haçlı Seferleri Urfa Haçlı Kontluğu Tarihi Abdülkerim Özaydın Sultan Berkyaruk Devri Selçuklu Tarihi Kürboğa Ali Sevim Suriye ve Filistin Selçukluları Tarihi Claude Cahen Osmanlılardan Önce Anadolu Carole Hillenbrand John France Jonathan Riley-Smith Thomas Asbridge Peter Frankopan';

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  const homeHref = withBase('/');
  const antakyaHref = withBase('/dosyalar/antakya-1098/');
  const hittinHref = withBase('/dosyalar/hittin-1187/');
  const malazgirtHref = withBase('/dosyalar/malazgirt-1071/');
  const methodHref = withBase('/metodoloji/');

  // 1. Katalog Dosya Kartları (Yayında + Hazırlanan Dosyalar)
  for (const d of dossiers) {
    const isLive = d.status === 'yayinda';
    const advisorText = d.academicAdvisor
      ? `${d.academicAdvisor.name} ${d.academicAdvisor.affiliation} ${d.academicAdvisor.roleLabel}`
      : '';
    entries.push({
      id: `dossier-${d.id}`,
      dossierBadge: d.number,
      dossierTitle: d.title,
      category: isLive ? 'Tam Etkileşimli Dosya' : 'Planlanan Dosya (Katalog)',
      title: `${d.number}: ${d.title}`,
      snippet: truncateText(`${d.period} · ${d.subtitle}`),
      keywords: [
        d.number,
        d.title,
        d.subtitle,
        d.period,
        d.geography,
        d.hookQuestion,
        d.witnessSources.join(' '),
        advisorText,
      ].join(' '),
      href: isLive ? d.slug : `${homeHref}#dosyalar`,
      targetId: isLive ? undefined : 'dosyalar',
    });
  }

  // 2. Özel Öne Çıkan Tarihsel Savaş & Kavram Kayıtları (Örn. 1074 Partskhisi Muharebesi)
  entries.push({
    id: 'malazgirt-1074-partskhisi-battle',
    dossierBadge: 'DOSYA 03',
    dossierTitle: '1071 Malazgirt & Kafkasya',
    category: 'Sahne 06 · Kafkasya & Melikşah Dönemi',
    title: '1074 Partskhisi Muharebesi (ფარცხისის ბრძოლა) — Melikşah Dönemi Gürcistan Savaşı',
    snippet:
      'Sultan Melikşah’ın Gence–Arran valisi Emîr Savtegin (Gürcüce kaynakta სარანგი / Sarangi) ile Gürcistan Kralı II. Giorgi ve Kaheti Kralı I. Ağsartan arasında Aşağı Kartli / Algeti Vadisi’nde («ფარცხისს ქუემოთ») yapılan çarpışma ve ardından başlayan 1080 Didi Turkoba süreci.',
    keywords:
      '1074 Partskhisi Muharebesi Partshisi Parçhisi ფარცხისის ბრძოლა ფარცხისს ქუემოთ Sultan Melikşah dönemi Gürcistan savaşı II. Giorgi Kaheti Kralı Ağsartan Emîr Savtegin Serhenk Savtegin Sarangi სარანგი Algeti Vadisi Aşağı Kartli Matiane Kartlisa Kartlis Tskhovreba Didi Turkoba დიდი თურქობა Ayşe Beyza Ercan',
    href: `${malazgirtHref}#front-panel-caucasus-bagrat-diditurkoba`,
    targetId: 'front-panel-caucasus-bagrat-diditurkoba',
    activate: { frontTabId: 'caucasus-bagrat-diditurkoba' },
  });

  // Yardımcı: Bir dosyanın tüm iç katmanlarını indeksle
  function indexDossierContent(opts: {
    key: string;
    badge: string;
    shortTitle: string;
    href: string;
    mapSteps: typeof antakyaMapSteps;
    propagandaCases: typeof antakyaPropagandaCases;
    verifiedFacts: { title: string; sources: string; detail: string }[];
    commander: {
      name: string;
      subtitle: string;
      factsText: string;
    };
    reasonsTitle: string;
    reasons: { num: string; title: string; text: string }[];
    armyTitle: string;
    armySegments: { id: string; label: string; shareText: string; commandNote: string; detail: string }[];
    chronicleStages: {
      id: string;
      targetDomId: string;
      title: string;
      eastTitle: string;
      westTitle: string;
      summaryText: string;
      keywordsText: string;
    }[];
    actorFates: typeof antakyaActorFates;
    fronts: typeof antakyaFronts;
    philology?: {
      badge: string;
      title: string;
      eastSource: string;
      eastText: string;
      westSource: string;
      westText: string;
      resolutionHtml: string;
    };
    primarySources: { name: string; side: string; desc: string }[];
    modernRefsText: string;
  }) {
    // Sahne 01: Harita Adımları
    for (const step of opts.mapSteps) {
      const narrativeClean = step.narrative.map(stripHtml).join(' ');
      entries.push({
        id: `${opts.key}-${step.id}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: `${step.stepLabel} · 3B Harita`,
        title: step.title,
        snippet: truncateText(`${step.dateBadge} (${step.locationBadge}) — ${narrativeClean}`),
        keywords: [
          step.stepLabel,
          step.dateBadge,
          step.locationBadge,
          step.title,
          narrativeClean,
          step.highlightNote.source,
          step.highlightNote.text,
        ].join(' '),
        href: `${opts.href}#${step.id}`,
        targetId: step.id,
      });
    }

    // Sahne 02: Kaynak Kritiği / Propaganda Vakaları
    for (const c of opts.propagandaCases) {
      entries.push({
        id: `${opts.key}-vaka-${c.id}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: `Sahne 02 · ${c.badge}`,
        title: c.title,
        snippet: truncateText(`${c.verdict} — ${c.critiqueAnalysis}`),
        keywords: [
          c.badge,
          c.title,
          c.verdict,
          c.claimSource,
          c.claimQuote,
          c.critiqueSource,
          c.critiqueAnalysis,
        ].join(' '),
        href: `${opts.href}#vaka-${c.id}`,
        targetId: `vaka-${c.id}`,
        activate: { lensId: c.id, lensMode: 'critique' },
      });
    }

    for (let i = 0; i < opts.verifiedFacts.length; i++) {
      const vf = opts.verifiedFacts[i];
      entries.push({
        id: `${opts.key}-verified-${i}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: 'Sahne 02 · Doğrulanmış Tarihsel Olgu',
        title: vf.title,
        snippet: truncateText(`${vf.sources} — ${vf.detail}`),
        keywords: `${vf.title} ${vf.sources} ${vf.detail}`,
        href: `${opts.href}#sahne-propaganda`,
        targetId: 'sahne-propaganda',
      });
    }

    // Sahne 03: Komutan Profili & Ordu Anatomisi
    entries.push({
      id: `${opts.key}-commander`,
      dossierBadge: opts.badge,
      dossierTitle: opts.shortTitle,
      category: 'Sahne 03 · Komutan & Strateji',
      title: `${opts.commander.name} — ${opts.commander.subtitle}`,
      snippet: truncateText(opts.commander.factsText),
      keywords: [
        opts.commander.name,
        opts.commander.subtitle,
        opts.commander.factsText,
        opts.reasonsTitle,
        ...opts.reasons.map((r) => `${r.title} ${r.text}`),
      ].join(' '),
      href: `${opts.href}#sahne-ordu`,
      targetId: 'sahne-ordu',
    });

    entries.push({
      id: `${opts.key}-army`,
      dossierBadge: opts.badge,
      dossierTitle: opts.shortTitle,
      category: 'Sahne 03 · Ordu Bileşimi',
      title: opts.armyTitle,
      snippet: truncateText(opts.armySegments.map((s) => `${s.label} (${s.shareText}): ${s.commandNote}`).join(' · ')),
      keywords: opts.armySegments
        .map((s) => `${s.label} ${s.shareText} ${s.commandNote} ${s.detail}`)
        .join(' '),
      href: `${opts.href}#sahne-ordu`,
      targetId: 'sahne-ordu',
    });

    // Sahne 04: Yan Yana Birincil Kronikler
    for (const st of opts.chronicleStages) {
      entries.push({
        id: `${opts.key}-chronicle-${st.id}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: 'Sahne 04 · Çapraz Birincil Metin',
        title: st.title,
        snippet: truncateText(`${st.eastTitle} ⇄ ${st.westTitle} — ${st.summaryText}`),
        keywords: `${st.title} ${st.eastTitle} ${st.westTitle} ${st.summaryText} ${st.keywordsText}`,
        href: `${opts.href}#${st.targetDomId}`,
        targetId: st.targetDomId,
      });
    }

    // Sahne 05: Aktör Kader Kartları
    for (let idx = 0; idx < opts.actorFates.length; idx++) {
      const actor = opts.actorFates[idx];
      entries.push({
        id: `${opts.key}-fate-${idx}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: 'Sahne 05 · Aktör Akıbeti',
        title: `${actor.name} (${actor.endDate})`,
        snippet: truncateText(`${actor.role} — ${actor.historicalPayback}`),
        keywords: `${actor.name} ${actor.role} ${actor.badgeText || ''} ${actor.calculation1098} ${actor.historicalPayback} ${actor.endDate}`,
        href: `${opts.href}#fate-card-${idx}`,
        targetId: `fate-card-${idx}`,
        activate: { fateIndex: idx, flipFate: true },
      });
    }

    // Sahne 06: Sekmeli Keşif Panosu
    for (const front of opts.fronts) {
      entries.push({
        id: `${opts.key}-front-${front.id}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: 'Sahne 06 · Panoramik Cephe Sekmesi',
        title: `${front.tabTitle} (${front.period})`,
        snippet: truncateText(`${front.summary} ${front.keyFact}`),
        keywords: `${front.tabTitle} ${front.period} ${front.summary} ${front.keyFact}`,
        href: `${opts.href}#front-panel-${front.id}`,
        targetId: `front-panel-${front.id}`,
        activate: { frontTabId: front.id },
      });
    }

    // Sahne 06: Filolojik / Takvim-Topografya Merceği
    if (opts.philology) {
      const p = opts.philology;
      const resClean = stripHtml(p.resolutionHtml);
      entries.push({
        id: `${opts.key}-philology`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: 'Sahne 06 · Filoloji & Topografya Merceği',
        title: p.title,
        snippet: truncateText(resClean),
        keywords: `${p.badge} ${p.title} ${p.eastSource} ${p.eastText} ${p.westSource} ${p.westText} ${resClean}`,
        href: `${opts.href}#filoloji-mercegi`,
        targetId: 'filoloji-mercegi',
      });
    }

    // Sahne 06: Birincil Kaynaklar ve Çağdaş Araştırmalar Çekmecesi
    for (let sIdx = 0; sIdx < opts.primarySources.length; sIdx++) {
      const src = opts.primarySources[sIdx];
      entries.push({
        id: `${opts.key}-source-${sIdx}`,
        dossierBadge: opts.badge,
        dossierTitle: opts.shortTitle,
        category: 'Birincil Kaynak Kütüphanesi',
        title: src.name,
        snippet: truncateText(`${src.side} — ${src.desc}`),
        keywords: `${src.name} ${src.side} ${src.desc}`,
        href: `${opts.href}#kaynakca-cekmece`,
        targetId: 'kaynakca-cekmece',
        activate: { openSources: true },
      });
    }

    entries.push({
      id: `${opts.key}-modern-refs`,
      dossierBadge: opts.badge,
      dossierTitle: opts.shortTitle,
      category: 'Çağdaş Araştırmalar & Kaynakça',
      title: `${opts.badge} (${opts.shortTitle}) — Çağdaş Araştırmalar ve Akademik Kaynakça`,
      snippet: truncateText(opts.modernRefsText),
      keywords: opts.modernRefsText,
      href: `${opts.href}#cagdas-arastirmalar`,
      targetId: 'cagdas-arastirmalar',
      activate: { openSources: true },
    });
  }

  // DOSYA 01: 1098 ANTAKYA
  indexDossierContent({
    key: 'd01',
    badge: 'DOSYA 01',
    shortTitle: '1098 Antakya & Kürboğa',
    href: antakyaHref,
    mapSteps: antakyaMapSteps,
    propagandaCases: antakyaPropagandaCases,
    verifiedFacts: antakyaVerifiedFacts,
    commander: {
      name: 'Kıvâmüddevle Kürboğa',
      subtitle: 'Musul Atabeyi / Emîri (ö. Ağustos 1102, Hoy)',
      factsText:
        'Türk (Kıpçak / Türkmen kuşağı) ve gulâm (memlûk) kökenlidir. Dîvânu Lugâti’t-Türk’te Kür + Boğa. Kasîmüddevle Aksungur’un hassa subayı; Latin kroniklerinde Curbaram / Corbagath.',
    },
    reasonsTitle: 'Sultan Berkyaruk Komutayı Neden Kürboğa’ya Verdi?',
    reasons: berkyarukReasons,
    armyTitle: '1098 Antakya Selçuklu Koalisyon Ordusunun Bileşimi',
    armySegments: antakyaArmySegments,
    chronicleStages: [
      {
        id: 'antioch-1098',
        targetDomId: 'chronicle-stage',
        title: '28 Haziran 1098 Köprü Kapısı (Bâbü’l-Cisr) Çıkışı: Yan Yana İki Kayıt',
        eastTitle: "İbnü'l-Esîr (el-Kâmil fi't-Târîh)",
        westTitle: 'Anonim Şövalye (Gesta Francorum IX.29)',
        summaryText:
          'Kürboğa’nın kapıyı tutmayı reddetmesi, Şam Meliki Dukak ve emîrlerin tek kılıç vurmadan çekilmesi; Haçlıların beyaz atlı azizler (Georgios, Mercurius, Demetrius) algısı.',
        keywordsText: 'Ahmed bin Mervân Sökmen bin Artuk Cenâhüddevle Bohemund Köprü Kapısı Bâbü’l-Cisr kuru ot yangını',
      },
    ],
    actorFates: antakyaActorFates,
    fronts: antakyaFronts,
    primarySources: antakyaPrimarySources,
    modernRefsText: antakyaModernRefsText,
  });

  // DOSYA 02: 1187 HITTÎN & KUDÜS
  indexDossierContent({
    key: 'd02',
    badge: 'DOSYA 02',
    shortTitle: '1187 Hıttîn & Kudüs',
    href: hittinHref,
    mapSteps: hittinMapSteps,
    propagandaCases: hittinPropagandaCases,
    verifiedFacts: hittinVerifiedFacts,
    commander: {
      name: saladinCommanderProfile.name,
      subtitle: saladinCommanderProfile.subtitle,
      factsText: saladinCommanderProfile.factsHtml.map(stripHtml).join(' '),
    },
    reasonsTitle: saladinUnificationReasons.title,
    reasons: saladinUnificationReasons.items,
    armyTitle: '1187 Hıttîn Eyyûbî Ordusunun Bileşimi (Tavâşî, Karagulâm, Halka)',
    armySegments: hittinArmySegments,
    chronicleStages: hittinChronicleStages.map((st, idx) => ({
      id: st.id,
      targetDomId: idx === 0 ? 'chronicle-stage' : st.id,
      title: st.stageTitle || '1187 Hıttîn Çapraz Kronik',
      eastTitle: stripHtml(st.east.titleHtml),
      westTitle: stripHtml(st.west.titleHtml),
      summaryText: [
        ...st.east.translationParagraphsHtml.map(stripHtml),
        ...st.west.translationParagraphsHtml.map(stripHtml),
      ].join(' '),
      keywordsText: `${st.east.origScript} ${st.west.origScript} ${
        st.ransomTariffBox
          ? st.ransomTariffBox.items.map((i) => `${i.label} ${i.value} ${i.note}`).join(' ')
          : ''
      }`,
    })),
    actorFates: hittinActorFates,
    fronts: thirdCrusadeFronts,
    philology: jaffaPhilologySpotlight,
    primarySources: hittinPrimarySources,
    modernRefsText: stripHtml(hittinModernRefsHtml),
  });

  // DOSYA 03: 1071 MALAZGİRT
  indexDossierContent({
    key: 'd03',
    badge: 'DOSYA 03',
    shortTitle: '1071 Malazgirt',
    href: malazgirtHref,
    mapSteps: malazgirtMapSteps,
    propagandaCases: malazgirtPropagandaCases,
    verifiedFacts: malazgirtVerifiedFacts,
    commander: {
      name: alpArslanCommanderProfile.name,
      subtitle: alpArslanCommanderProfile.subtitle,
      factsText: alpArslanCommanderProfile.factsHtml.map(stripHtml).join(' '),
    },
    reasonsTitle: malazgirtStrategicReasons.title,
    reasons: malazgirtStrategicReasons.items,
    armyTitle: '26 Ağustos 1071 Malazgirt Selçuklu Sahra Ordusunun Bileşimi',
    armySegments: malazgirtArmySegments,
    chronicleStages: malazgirtChronicleStages.map((st, idx) => ({
      id: st.id,
      targetDomId: idx === 0 ? 'chronicle-stage' : st.id,
      title: st.stageTitle || '1071 Malazgirt Çapraz Kronik',
      eastTitle: stripHtml(st.east.titleHtml),
      westTitle: stripHtml(st.west.titleHtml),
      summaryText: [
        ...st.east.translationParagraphsHtml.map(stripHtml),
        ...st.west.translationParagraphsHtml.map(stripHtml),
      ].join(' '),
      keywordsText: `${st.east.origScript} ${st.west.origScript} ${
        st.ransomTariffBox
          ? st.ransomTariffBox.items.map((i) => `${i.label} ${i.value} ${i.note}`).join(' ')
          : ''
      }`,
    })),
    actorFates: malazgirtActorFates,
    fronts: post1071Fronts,
    philology: malazgirtPhilologySpotlight,
    primarySources: malazgirtPrimarySources,
    modernRefsText: stripHtml(malazgirtModernRefsHtml),
  });

  // Metodoloji & Atatürk Köşesi
  entries.push({
    id: 'page-metodoloji',
    dossierBadge: 'YÖNTEM',
    dossierTitle: 'Kaynak Kritiği İlkeleri',
    category: 'Metodoloji',
    title: 'Tarihsel Bilinç Nasıl İnşa Edilir? Dört Denetim İlkesi',
    snippet:
      'Tek kaynak tanık değildir; mekân ve zaman mesafesi denetimi, üçüncü taraf tanıklığı (Doğu Hristiyan kronikleri, Kahire Genizası) ve görünür söylem ile yapısal sonucu ayırmak.',
    keywords:
      'Metodoloji kaynak kritiği ilkeleri tek kaynak tanık değildir mekân zaman mesafesi üçüncü taraf tanıklığı doğrudan alıntı kaynak özeti',
    href: methodHref,
  });

  entries.push({
    id: 'home-ataturk-kosesi',
    dossierBadge: 'ANA SAYFA',
    dossierTitle: 'Atatürk Köşesi',
    category: 'Tarih Metodolojisi',
    title: 'Mustafa Kemal Atatürk — «Tarih yazmak, tarih yapmak kadar mühimdir» (1931)',
    snippet:
      'Yazan yapana sadık kalmazsa değişmeyen hakikat insanlığı şaşırtacak bir mahiyet alır: Belgeye, kanıta ve kaynak kritiğine dayalı tarih bilinci.',
    keywords: 'Mustafa Kemal Atatürk Köşesi 1931 Türk Tarih Tetkik Cemiyeti Kocatepe Kayseri harf inkılabı',
    href: `${homeHref}#ataturk-kosesi`,
    targetId: 'ataturk-kosesi',
  });

  return entries;
}
