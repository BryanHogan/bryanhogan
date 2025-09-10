# Copilot Instructions for Bryan Hogan Website

## Project Overview
This is a personal website and blog built with [Astro](https://astro.build/). The codebase is organized for modularity and content-driven development. It features custom components, dynamic blog routing, and integrations for SEO and image assets.

## Architecture & Structure
- **Astro Framework**: All pages and components are built using `.astro` files in `src/pages` and `src/components`.
- **Content Layer**: Markdown files in `src/content/blog/` are used for blog posts. Content configuration is managed in `src/content.config.ts`.
- **Layouts**: Shared layouts are in `src/layouts/` (e.g., `BaseLayout.astro`, `MdBlogLayout.astro`).
- **Assets**: Images and videos are stored in `public/assets/images/` and `public/videos/`.
- **SEO & Metadata**: SEO is handled via `src/components/SEOHead.astro` and related utilities.

## Developer Workflows
- **Build & Run**: Use standard Astro commands (`npm run dev`, `npm run build`).
- **Content Updates**: Add new blog posts as markdown files in `src/content/blog/`. Update `src/content.config.ts` if new content types are added.
- **Commit & Push**: Use the `ACP ALL` VS Code task, which runs `commit-push.ps1` for streamlined commits. It prompts for a commit message and pushes changes.

## Conventions & Patterns
- **Component Naming**: Components use PascalCase and are placed in `src/components/`. Shared UI elements (e.g., `Card.astro`, `Button.astro`) are reused across pages.
- **Dynamic Routing**: Blog posts and tags use dynamic routes (`src/pages/blog/[id].astro`, `src/pages/tags/[tag].astro`).
- **Styling**: Global styles are in `src/styles/global.css`. Utility and reset styles are in `util.css` and `reset.css`.
- **Content Images**: Blog images are referenced from `src/content/blog-assets/images/`.

## Integration Points
- **Markdown Rendering**: Astro automatically renders markdown files in `src/content/blog/` using layouts.
- **SEO**: Use `SEOHead.astro` for page metadata. Update as needed for new pages.
- **Reading Time & Last Update**: Utilities in `src/utils/reading-time.ts` and `src/utils/last-update.ts` provide blog metadata.

## Examples
- To add a new blog post: Place a markdown file in `src/content/blog/`, add images to `src/content/blog-assets/images/`, and reference them in the markdown.
- To create a new component: Add a `.astro` file in `src/components/`, then import and use it in a page or layout.

## Key Files & Directories
- `src/pages/` — Main site pages
- `src/components/` — UI components
- `src/content/blog/` — Blog posts (markdown)
- `src/layouts/` — Shared layouts
- `src/styles/` — CSS files
- `public/assets/` — Static assets
- `commit-push.ps1` — Commit/push automation

---
For questions about conventions or workflows, check this file or ask for clarification. Update this file if new patterns or workflows are introduced.
