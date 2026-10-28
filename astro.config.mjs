import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://mertbasar0.github.io',
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
