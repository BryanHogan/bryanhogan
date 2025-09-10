# Project Brief

## Core Requirements and Goals
- Develop a personal website for Bryan Hogan to showcase his portfolio, blog, and current endeavors.
- Ensure the website is responsive and accessible across various devices.
- Integrate a blog section with support for markdown content.
- Implement a sitemap for SEO optimization.

## Source of Truth for Project Scope
- The website should serve as a central hub for Bryan's professional and personal projects.
- It should highlight his journey, achievements, and ongoing projects.

## Background
Upgrade Bryan Hogan's personal website and blog to improve discoverability, user experience, and performance. The current Astro-based site has solid foundations but needs enhancements for better SEO, social sharing, user retention, and accessibility compliance.

## Goals
- Clear SEO optimization with centralized metadata and structured data.
- Compelling social preview images for improved shareability.
- Enhanced user experience with improved information architecture.
- Faster page loads through optimized images and minimal JavaScript.
- Accessible experience meeting WCAG AA standards.
- Light growth mechanisms through newsletter integration.

## Deliverables
- Central SEO head component with canonical logic and per-page overrides.
- JSON-LD structured data (WebSite + SearchAction site-wide, Article for posts).
- Dynamic og:image generation for posts and pages.
- Dark mode toggle with persisted user preference.
- Enhanced EmailSignup component placements and provider integration.
- Polished tag index/pages with improved navigation.
- Redesigned 404 page with helpful navigation options.

## Timeline
- Phase 1 (Week 1): Memory bank integration, layout audits, SEO head component.
- Phase 2 (Week 2): Dynamic og:image, dark mode, EmailSignup enhancements.
- Phase 3 (Week 2-3): Tag system polish, 404 improvements, final testing.
- Staged deployments with performance monitoring throughout.

## Risks and Mitigation
- og:image generation complexity: Start with simple text-based approach, iterate.
- CSP strictness for embeds: Maintain documented allowlist for YouTube/external content.
- Analytics privacy alignment: Use privacy-friendly solutions (Plausible/Umami) with clear privacy policy.
