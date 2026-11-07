// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/data/site-url.mjs';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // The CSS is small; inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },
  // The old Gatsby site had a /resume page.
  redirects: {
    '/resume': '/experience/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
