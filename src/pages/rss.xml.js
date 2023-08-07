import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "Bryan Hogan's Page",
    description: "Blog about nice stuff and more.",
    site: "https://bryanhogan.com",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: "<language>en-us</language>",
  });
}