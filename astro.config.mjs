// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
function blogAssetsPreview() {
  const blogAssetsDir = path.resolve('src/content/blog-assets');
  return {
    name: 'blog-assets-preview',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use('/blog-assets', (req, res, next) => {
          const filePath = path.join(blogAssetsDir, req.url);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
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
      'astro:build:done': async ({ dir }) => {
        const dest = fileURLToPath(new URL('./blog-assets', dir));
        copyDirSync(blogAssetsDir, dest);
      },
    },
  };
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
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
