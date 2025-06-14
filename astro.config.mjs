import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless'; // Add this import

export default defineConfig({
  site: 'https://iyabahsaid.site',
  output: 'server', // Add this line - enables SSR
  adapter: vercel(), // Add this line - Vercel adapter
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
});