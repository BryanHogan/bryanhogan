import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "Bryan Hogan's Page",
    description: "Bryan's blog about creating, learning and finding balance.",
    site: "https://bryanhogan.com",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: "<language>en-us</language>",
  });
}