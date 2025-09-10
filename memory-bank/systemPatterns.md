# System Patterns

## System Architecture
- The website is built using Astro, a modern static site generator.
- Utilizes a modular component-based architecture for reusability and maintainability.

## Key Technical Decisions
- Chose Astro for its performance benefits and ease of integration with modern web technologies.
- Implemented a sitemap for improved SEO.

## Design Patterns in Use
- Component-based design for UI elements.
- Use of markdown for blog content to simplify content management.

## Component Relationships
- Components are organized to facilitate easy updates and scalability.

## Critical Implementation Paths
- Integration of markdown content into the blog section.
- Ensuring responsive design across all devices.

## Authoring Conventions
- Frontmatter schema for posts/pages:
  - `title`, `description`, `cover: { src, alt }`, `tags[]`, `published`, `updated`, `draft`, `canonical?`, `ogTitle?`, `ogDescription?`, `featured?`
- Require meaningful `alt` text for all images (especially covers).
- Tag hygiene: prefer 3–6 descriptive tags; reuse existing tags to avoid fragmentation.
- Internal linking: each article should link to at least 2 related articles where relevant.
- Commit message convention for content changes: `content(post): slug — short summary`.

## Accessibility Checklist (WCAG AA-oriented)
- Semantic landmarks present: `header`, `nav`, `main`, `footer`.
- Provide a visible “Skip to content” link.
- Ensure visible focus styles for all interactive elements.
- Maintain sufficient color contrast in both light and dark themes.
- Logical heading order (only one `h1` per page).
- Meaningful link text (avoid “click here”).
- Captions or descriptive context for media; provide transcripts where feasible.

## SEO and Social Checklist
- Title template with consistent branding; unique per page/post.
- Meta description present and concise (≤ 160 chars).
- Canonical URL set; `robots` meta accurate (noindex drafts/previews).
- Open Graph + Twitter Card tags with per-post overrides.
- JSON-LD:
  - `WebSite` + `SearchAction` site-wide.
  - `Article` for blog posts including `headline`, `image`, `datePublished`, `dateModified`, `author`, `keywords`.
- Internal links to related content; include “Related posts” section.
- RSS and JSON feeds exposed and linked.

## CI/CD and Quality Gates
- On PR:
  - Build site (`astro build`) and fail on errors.
  - Broken link check using `lychee` (with allowlist for known flaky domains).
  - Linting: ESLint + Prettier (Astro plugin) and TypeScript checks (`--strict`).
- Pre-commit:
  - `lint-staged` for formatting and linting changed files.
- Dependency hygiene:
  - Dependabot (weekly) for npm package updates and security alerts.

## Versioning and Content Updates
- Display “Updated on” when `updated` differs from `published`.
- Optional “Changelog” block within posts for major revisions.
- Keep canonical URL stable; use redirects if slugs change.
