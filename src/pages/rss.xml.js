import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: "Bryan's Blog",
    description: "Bryan's Blog on living a happy life. Productivity, creating, learning and more.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: "<language>en-us</language>",
  });
}