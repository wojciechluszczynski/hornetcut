// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static build. Output lands in dist/ and is uploaded to Hostinger public_html.
// Directory format + trailing slashes keeps Apache happy without rewrite gymnastics.
export default defineConfig({
  site: 'https://hornetcut.pl',
  trailingSlash: 'always',
  // Inline the CSS: two fewer render-blocking requests on a site this small.
  // assets: 'assets' zamiast domyślnego '_astro'. Katalog z podkreśleniem na
  // początku zniknął przy operacji "move" w menedżerze plików Hostingera i
  // wszystkie czcionki zwracały 404. Zwykła nazwa usuwa całą klasę tego błędu.
  build: { format: 'directory', inlineStylesheets: 'always', assets: 'assets' },
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date('2026-08-09'),
      filter: (page) => !page.includes('/polityka-prywatnosci'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
