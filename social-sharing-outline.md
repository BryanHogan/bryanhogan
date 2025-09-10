# Social Sharing Feature Outline

## Overview
Add social sharing buttons to blog posts for platforms like Twitter, Facebook, LinkedIn, etc.

## Goals
- Easy sharing of blog posts on social media.
- Visually appealing and accessible buttons.

## Steps
1. Create a `SocialShare.astro` component.
2. Add buttons/icons for each platform (Twitter, Facebook, LinkedIn, etc.).
3. Generate share URLs dynamically based on the current post.
4. Place the component in blog post layouts (`MdBlogLayout.astro`).
5. Style buttons for visibility and accessibility.
6. Optionally, add share count display.

## Considerations
- Use SVG icons for scalability.
- Ensure links open in new tabs.
- Respect privacy (no tracking scripts).
