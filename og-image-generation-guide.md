# Dynamic og:image Generation for Astro - Implementation Guide

This guide documents the complete implementation of a dynamic og:image generation system for Astro websites, specifically for blog posts with social media preview images.

## Overview

This system generates unique, branded PNG images (1200x630px) for each blog post that work perfectly with all social media platforms and preview tools. The implementation uses Node.js Canvas API for reliable PNG generation without external service dependencies.

## Key Features

- ✅ **Real PNG Generation**: Creates actual PNG files, not SVG (crucial for social media compatibility)
- ✅ **No External Dependencies**: Uses only Node.js Canvas, works on any hosting platform
- ✅ **Dynamic Content**: Automatically uses blog post title, description, and tags
- ✅ **Tag-Based Theming**: Different color schemes based on content tags
- ✅ **Professional Design**: Gradient backgrounds, proper typography, branding
- ✅ **Build-Time Generation**: Creates static images during build process
- ✅ **SEO Integration**: Automatically integrates with existing SEO meta tags

## Dependencies

```bash
npm install canvas
```

**Note**: Avoid `@vercel/og` and `puppeteer` - they cause compatibility issues and are unnecessarily complex.

## File Structure

```
src/
├── pages/
│   └── og-images/
│       └── [slug].png.ts          # API endpoint for image generation
├── utils/
│   └── og-image-generator.ts      # Utility functions
├── components/
│   └── SEOHead.astro             # Updated with og:image logic
└── layouts/
    ├── BaseLayout.astro          # Updated to pass blogSlug
    └── MdBlogLayout.astro        # Updated to pass blogSlug
```

## Implementation Steps

### 1. Create the Image Generation API Endpoint

**File**: `src/pages/og-images/[slug].png.ts`

```typescript
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { createCanvas } from 'canvas';
import { extractBlogPostData } from '../../utils/og-image-generator';

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  
  if (!slug) {
    return new Response('Missing slug parameter', { status: 400 });
  }

  try {
    // Get all blog posts
    const blogPosts = await getCollection('blog');
    
    // Find the specific post
    const post = blogPosts.find(post => post.id === slug);
    
    if (!post) {
      return new Response('Blog post not found', { status: 404 });
    }

    // Extract data for og:image generation
    const imageOptions = extractBlogPostData(post);
    
    // Create canvas
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Get colors for the design
    const primaryColor = getTagColor(imageOptions.tags?.[0] || 'default');
    const gradientStart = getGradientStart(imageOptions);
    const gradientEnd = getGradientEnd(imageOptions);
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, gradientStart);
    gradient.addColorStop(1, gradientEnd);
    
    // Fill background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add subtle pattern overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < width; x += 60) {
      for (let y = 0; y < height; y += 60) {
        ctx.beginPath();
        ctx.arc(x + 15, y + 15, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 45, y + 45, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Add accent circle
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(1100, 100, 200, 0, Math.PI * 2);
    ctx.fill();
    
    // Set text properties
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    
    let yOffset = 80;
    
    // Add emoji if present
    if (imageOptions.emoji) {
      ctx.font = '80px Arial, sans-serif';
      ctx.fillText(imageOptions.emoji, 80, yOffset);
      yOffset += 100;
    }
    
    // Add title
    const title = truncateText(imageOptions.title, 60);
    ctx.font = 'bold 64px Arial, sans-serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    
    const titleLines = wrapText(ctx, title, 1040);
    titleLines.forEach((line, index) => {
      ctx.fillText(line, 80, yOffset + (index * 70));
    });
    yOffset += titleLines.length * 70 + 30;
    
    // Add description
    const description = truncateText(imageOptions.description, 120);
    ctx.font = '32px Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetY = 1;
    
    const descLines = wrapText(ctx, description, 1040);
    descLines.forEach((line, index) => {
      ctx.fillText(line, 80, yOffset + (index * 40));
    });
    yOffset += descLines.length * 40 + 40;
    
    // Add tags
    const displayTags = imageOptions.tags?.slice(0, 3) || [];
    if (displayTags.length > 0) {
      displayTags.forEach((tag, index) => {
        const x = 80 + (index * 140);
        const y = 420;
        const tagWidth = Math.min(tag.length * 12 + 48, 130);
        
        // Tag background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        roundRect(ctx, x, y, tagWidth, 50, 25);
        ctx.fill();
        ctx.stroke();
        
        // Tag text
        ctx.fillStyle = 'white';
        ctx.font = '600 20px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(tag, x + tagWidth / 2, y + 18);
      });
    }
    
    // Reset text alignment for branding
    ctx.textAlign = 'right';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetY = 1;
    
    // Add branding
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '600 28px Arial, sans-serif';
    ctx.fillText('Your Name', 1120, 550);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('yourwebsite.com', 1120, 580);
    
    // Generate PNG buffer
    const buffer = canvas.toBuffer('image/png');
    
    return new Response(buffer as any, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating og:image:', error);
    return new Response('Error generating image', { status: 500 });
  }
};

// Generate static paths for all blog posts
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  
  return blogPosts.map((post) => ({
    params: { slug: post.id },
  }));
}
```

### 2. Create Helper Functions

Add these helper functions to the same file or extract to a utility file:

```typescript
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > maxLength * 0.8 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

function wrapText(ctx: any, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  
  for (const word of words) {
    const testLine = currentLine + (currentLine ? ' ' : '') + word;
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines;
}

function roundRect(ctx: any, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function getTagColor(tag: string): string {
  const tagColors: Record<string, string> = {
    'tech': '#1F2937',
    'tutorial': '#059669',
    'travel': '#2563EB',
    'productivity': '#7C3AED',
    'default': '#6366F1'
  };
  
  return tagColors[tag.toLowerCase()] || tagColors.default;
}

function getGradientStart(options: any): string {
  const primaryColor = getTagColor(options.tags?.[0] || 'default');
  
  if (options.template === 'tutorial') return '#4F46E5';
  if (options.template === 'travel') return '#0EA5E9';
  
  return primaryColor;
}

function getGradientEnd(options: any): string {
  const primaryColor = getTagColor(options.tags?.[0] || 'default');
  
  if (options.template === 'tutorial') return '#7C3AED';
  if (options.template === 'travel') return '#3B82F6';
  
  return adjustColorBrightness(primaryColor, -30);
}

function adjustColorBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}
```

### 3. Create Utility Functions

**File**: `src/utils/og-image-generator.ts`

```typescript
import type { CollectionEntry } from 'astro:content';

export interface OGImageOptions {
  title: string;
  description: string;
  tags?: string[];
  emoji?: string;
  template?: 'default' | 'tutorial' | 'travel';
}

export function extractBlogPostData(post: CollectionEntry<'blog'>): OGImageOptions {
  const { title, description, tags, emoji } = post.data;
  
  // Determine template based on content
  let template: 'default' | 'tutorial' | 'travel' = 'default';
  
  if (tags?.some(tag => ['travel', 'korea', 'macau'].includes(tag.toLowerCase()))) {
    template = 'travel';
  } else if (title.toLowerCase().includes('how to') || 
             title.toLowerCase().includes('guide') ||
             tags?.some(tag => ['tutorial', 'guide'].includes(tag.toLowerCase()))) {
    template = 'tutorial';
  }
  
  return {
    title,
    description,
    tags,
    emoji,
    template
  };
}

export function generateOGImageUrl(slug: string): string {
  return `/og-images/${slug}.png`;
}
```

### 4. Update SEOHead Component

**File**: `src/components/SEOHead.astro`

Add `blogSlug` prop and update og:image logic:

```astro
---
interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article";
  articlePublished?: Date;
  articleModified?: Date;
  articleTags?: string[];
  robots?: string;
  author?: string;
  blogSlug?: string; // New prop for blog post slug
}

const {
  title,
  description,
  canonical,
  ogTitle = title,
  ogDescription = description,
  ogImage,
  ogImageAlt = "Default alt text",
  ogType = "website",
  articlePublished,
  articleModified,
  articleTags,
  robots = "index, follow",
  author = "Your Name",
  blogSlug
} = Astro.props;

// Determine the og:image to use
let finalOgImage = ogImage;
if (!finalOgImage) {
  if (blogSlug) {
    // Use dynamic og:image for blog posts
    finalOgImage = `https://yourwebsite.com/og-images/${blogSlug}.png`;
  } else {
    // Use default static image
    finalOgImage = "https://yourwebsite.com/images/default-preview.png";
  }
}

// ... rest of your SEO logic
---

<!-- Meta tags -->
<meta property="og:image" content={finalOgImage} />
<meta name="twitter:image" content={finalOgImage} />
<!-- ... other meta tags -->
```

### 5. Update Layout Files

**BaseLayout.astro** - Add blogSlug prop:

```astro
---
interface Props {
  // ... existing props
  blogSlug?: string;
}

const { 
  // ... existing props
  blogSlug
} = Astro.props;
---

<SEOHead 
  // ... existing props
  blogSlug={blogSlug}
/>
```

**MdBlogLayout.astro** - Pass blog post ID:

```astro
---
// ... existing code
const { post } = Astro.props;
---

<BaseLayout 
  title={post.data.title} 
  description={post.data.description} 
  ogType="article"
  articlePublished={post.data.pubDate}
  articleModified={lastUpdate}
  articleTags={post.data.tags}
  blogSlug={post.id}
>
  <!-- ... rest of layout -->
</BaseLayout>
```

## Testing

### Build Test
```bash
npm run build
```

Look for successful generation:
```
λ src/pages/og-images/[slug].png.ts
├─ /og-images/post-1.png (+150ms)
├─ /og-images/post-2.png (+145ms)
└─ /og-images/post-3.png (+160ms)
```

### Development Test
```bash
npm run dev
```

Visit: `http://localhost:4321/og-images/your-post-slug.png`

### Social Media Test
Use tools like:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Common Issues & Solutions

### Issue: "Canvas not found" error
**Solution**: Make sure Canvas is properly installed:
```bash
npm install canvas
```

### Issue: Images not displaying in social media
**Solution**: Ensure you're returning proper PNG with correct headers:
```typescript
return new Response(buffer as any, {
  headers: {
    'Content-Type': 'image/png', // Critical!
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
});
```

### Issue: Text wrapping issues
**Solution**: Use the `wrapText` function and test with different text lengths.

### Issue: Build fails on deployment
**Solution**: Some hosting platforms require additional Canvas dependencies. Check your platform's documentation.

## Customization Options

### Color Schemes
Modify the `getTagColor` function to match your brand colors:

```typescript
function getTagColor(tag: string): string {
  const tagColors: Record<string, string> = {
    'your-tag': '#YOUR_COLOR',
    'another-tag': '#ANOTHER_COLOR',
    'default': '#DEFAULT_COLOR'
  };
  
  return tagColors[tag.toLowerCase()] || tagColors.default;
}
```

### Typography
Adjust fonts in the Canvas drawing code:
```typescript
ctx.font = 'bold 64px "Your Font", Arial, sans-serif';
```

### Layout
Modify positioning by adjusting the coordinate values in the drawing code.

## Performance Notes

- Images are generated at build time for static sites
- Generation time: ~150-200ms per image
- File size: ~50-100KB per PNG
- Caching: Images are cached with long expiry headers

## Deployment Considerations

- **Vercel**: Works out of the box
- **Netlify**: May require additional Canvas dependencies
- **Static Hosting**: Pre-generated images work perfectly
- **Docker**: Include Canvas dependencies in your Dockerfile

This implementation provides a robust, maintainable solution for dynamic og:image generation in Astro without external service dependencies.
