# Tech Context

## Technologies Used
- Astro: Static site generator for building fast websites.
- Markdown: For easy content creation and management.
- TypeScript: For type safety and improved developer experience.

## Development Setup
- Local development server running on port 4321.
- Uses npm scripts for development (`dev`), build (`build`), and preview (`preview`).

## Technical Constraints
- Ensure compatibility with modern browsers.
- Maintain a responsive design across various devices.

## Dependencies
- `@astrojs/rss`: For generating RSS feeds.
- `@astrojs/sitemap`: For creating a sitemap.
- `mdast-util-to-string`: Utility for converting markdown AST to string.
- `reading-time`: For estimating reading time of blog posts.

## Tool Usage Patterns
- Use of Astro's integration system for plugins like sitemap.
- Markdown files are loaded and processed using Astro's content collection system.

## Decisions
- Central SEO head in `BaseLayout` with canonical, OG/Twitter, and robots; allow per-page overrides via frontmatter.
- JSON-LD: `Article` for posts; `WebSite` + `SearchAction` site-wide.
- Dynamic social images (og:image) via Satori/`og.astro` or a Vercel/og-style approach.
- Images: Astro `<Image>` with `srcset`/`sizes`, AVIF/WebP output, and lazy loading.
- Search: build-time JSON index + Fuse.js or Lunr; keyboard shortcut `/` to focus search.
- Analytics: privacy-friendly (Plausible/Umami) with minimal client JS.
- CI quality gates: link checker (lychee), ESLint + Prettier (Astro plugin), `tsconfig` strict, and `lint-staged`.
- Optional enhancements: Comments (Giscus/Utterances), PWA (`@vite-pwa/astro`), strict security headers/CSP.

## Content Schema (Frontmatter)
- `title`: string
- `description`: string
- `cover`:
  - `src`: string
  - `alt`: string
- `tags`: string[]
- `published`: date
- `updated`: date
- `draft`: boolean
- `canonical`?: string
- `ogTitle`?: string
- `ogDescription`?: string
- `featured`?: boolean

## Performance Budget
- JavaScript shipped to client: < 60 KB
- LCP: < 2.0 s (mobile)
- CLS: < 0.02
- TBT: < 100 ms

## Risks and Tradeoffs
- og:image generation can increase build times on large content sets; consider caching or on-demand generation if needed.
- Strict CSP may require allowances for embeds (e.g., YouTube); maintain a documented allowlist.
- Link checker may need an external domain allowlist to avoid false positives on third-party links.
