# Product Context

## Why This Project Exists
- To provide a digital platform for Bryan Hogan to share his professional journey, projects, and insights.

## Problems It Solves
- Centralizes Bryan's online presence, making it easier for potential clients and collaborators to find and engage with his work.

## How It Should Work
- The website should be intuitive and easy to navigate, with clear sections for the portfolio, blog, and contact information.

## User Experience Goals
- Ensure a seamless and engaging experience for visitors, encouraging them to explore Bryan's work and connect with him.

## Objectives
- Discoverability: Improve SEO with centralized metadata and structured data (JSON-LD).
- Shareability: Consistent, compelling Open Graph/Twitter previews for every page/post.
- Retention: Encourage deeper navigation via related posts, ToC, and internal linking.
- Performance: Optimize images and keep JS minimal for fast loads.
- Accessibility: Meet or exceed WCAG AA with strong keyboard and screen reader support.
- Growth: Increase newsletter signups with clear, privacy-friendly CTAs.

## Audience
- Tech/productivity readers and students.
- Personal knowledge management enthusiasts (Obsidian/Notion/PKM).
- Web developers interested in Astro, static sites, and performance.
- Prospective collaborators/clients exploring portfolio and case studies.

## Success Metrics (Targets)
- Organic traffic: +30% in 60 days.
- Social CTR on shared links: +25%.
- Session depth: > 1.6 pages per session.
- Core Web Vitals (mobile): LCP < 2.0s, CLS < 0.02, TBT < 100ms.
- Newsletter conversion: 1–2% of blog readers.

## Scope
- In-scope:
  - Central SEO head with canonical logic and per-page overrides.
  - JSON-LD (WebSite + SearchAction, Article for posts).
  - Dynamic og:image generation for posts/pages.
  - Related posts section based on tags.
  - Dark mode toggle with persisted preference.
  - Image optimization using Astro <Image> (srcset/sizes, avif/webp, lazy).
  - Client-side search with build-time index (Fuse/Lunr).
  - Tag index/page polish and 404 improvements.
  - Privacy-friendly analytics and CI link/quality checks.
- Out-of-scope (for now):
  - Full visual redesign/brand overhaul.
  - CMS migration or backend features beyond static content.
