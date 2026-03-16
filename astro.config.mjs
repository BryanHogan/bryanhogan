// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

/** @returns {import('astro').AstroIntegration} */
function blogAssetsPreview() {
  const blogAssetsDir = path.resolve('src/content/blog-assets');
  return {
    name: 'blog-assets-preview',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use('/blog-assets',
          /** @param {import('node:http').IncomingMessage} req @param {import('node:http').ServerResponse} res @param {() => void} next */
          (req, res, next) => {
            const filePath = path.join(blogAssetsDir, req.url ?? '');
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              /** @type {Record<string, string>} */
              const mimeTypes = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.svg': 'image/svg+xml',
                '.webp': 'image/webp',
                '.gif': 'image/gif',
              };
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
            next();
          });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://bryanhogan.com',
  integrations: [sitemap(), blogAssetsPreview()],
  server: {
    host: true,
    port: 4321,
  },
});
