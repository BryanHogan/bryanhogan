// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bryanhogan.com',
  integrations: [sitemap()],
  server: {
    host: true,
    port: 4321,
  },
});