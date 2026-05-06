# CLAUDE.md - Bryan Hogan Website

This is Bryan Hogan's personal website built with Astro, featuring a blog, portfolio, and various personal pages.

## 🏗️ Project Structure

- **Framework**: Astro 5.2.5
- **Site URL**: https://bryanhogan.com
- **Content**: Blog posts, portfolio, about page, and other personal content
- **Blog Content**: Located in `src/content/blog/` with markdown files
- **Assets**: Images and covers in `src/content/blog-assets/`

## 📦 Key Dependencies

- `@astrojs/rss` - RSS feed generation
- `@astrojs/sitemap` - Sitemap generation
- `reading-time` - Calculate blog post reading time
- `mdast-util-to-string` - Markdown processing

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Key Directories

- `src/pages/` - Main pages (blog, portfolio, about, etc.)
- `src/content/blog/` - Blog posts in markdown
- `src/content/blog-assets/` - Blog images and covers
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts
- `src/styles/` - CSS styles
- `public/` - Static assets

## 🎯 Development Notes

- Blog posts use frontmatter for metadata
- Custom components for cards, buttons, icons, etc.
- Table of Contents (ToC) generation for blog posts
- Reading time calculation for blog posts
- Email signup component included
- Social links and contact information managed in data files

## 🚀 Deployment

The site is configured for deployment at bryanhogan.com with sitemap generation enabled.

## 📝 Content Management

- Blog posts are written in Markdown with frontmatter
- Images are organized in the blog-assets directory
- Portfolio and about content managed through markdown files
- Custom layouts for different page types (blog posts, simple pages, now page)

## 🔧 Technical Features

- RSS feed at `/rss.xml`
- Sitemap generation
- Blog tagging system
- Table of contents for long posts
- Reading time estimation
- Responsive design with custom CSS