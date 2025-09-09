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
