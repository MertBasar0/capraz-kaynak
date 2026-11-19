import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://caprazkaynak.basarlabs.com.tr',
  base: process.env.ASTRO_BASE || '/',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  vite: {
    optimizeDeps: {
      include: ['maplibre-gl', 'scrollama'],
    },
  },
});
