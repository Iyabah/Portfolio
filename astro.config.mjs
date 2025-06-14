import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';




export default defineConfig({
  site: 'https://iyabahsaid.site', 
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  })

  ],
});