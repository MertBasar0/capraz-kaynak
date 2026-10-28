# Çapraz Kaynak — Karşılaştırmalı Tarih Atlası

Birincil vekâyinâmeler, etkileşimli 3B harita sahneleri (*scrollytelling*) ve propaganda/belge süzgeçleriyle kurgulanmış açık kaynaklı tarihsel bilinç platformu.

## Çalıştırma Komutları

```bash
pnpm install
pnpm dev
```

Üretim (statik yayın) çıktısı almak için:

```bash
pnpm build
pnpm preview
```

`dist/` klasörü herhangi bir sunucu maliyeti olmadan **GitHub Pages** veya **Cloudflare Pages** üzerinde doğrudan ücretsiz yayınlanabilir.

## Yeni Tarihsel Dosya Ekleme Yapısı

1. `src/data/catalog.ts` dosyasına yeni dosyanın üst verisini (`DossierMeta`) ekleyin ve hazır olduğunda `status: 'yayinda'` yapın.
2. `src/data/` altında yeni dosyanın harita adımlarını (`MapStep[]`), çapraz kaynak pasajlarını ve terazi verilerini tanımlayın.
3. `src/pages/dosyalar/<yeni-dosya-slug>.astro` sayfasında hazır scrollytelling bileşenlerini (`ScrollyMapEngine`, `PropagandaLens`, `SplitBattleAndFates`, `TwoCenturyBalance`) çağırarak yeni etkileşimli belgeseli yayına alın.
