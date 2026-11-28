import { parse, postprocess, preprocess } from "micromark";
import { caseStudies } from "../pages/portfolio/_data/case-studies";

// Pages in src/pages/ that get a /<page>.md version and a "View as Markdown" link.
// Each needs `heading` and `headingDetail` frontmatter; the build fails without them.
export const markdownPages = ["about", "now"];
// Case studies in src/pages/portfolio/<study>.md, served at /portfolio/<study>.md.
// Taken from the portfolio cards, so every card has a Markdown version.
export const caseStudyPages = Object.keys(caseStudies);
// Every path that has a Markdown version, used for the footer link and <link rel="alternate">.
export const markdownPaths = [
    ...markdownPages,
    ...caseStudyPages.map((study) => `portfolio/${study}`),
    "portfolio",
];

interface MarkdownPage {
    title: string;
    body: string;
    canonical: URL;
    published?: Date;
    updated?: Date;
    detail?: string;
}

export function markdownResponse({ title, body, canonical, published, updated, detail }: MarkdownPage) {
    const byline = [
        "By Bryan Hogan",
        published && `Published ${published.toISOString().slice(0, 10)}`,
        updated && `Updated ${updated.toISOString().slice(0, 10)}`,
    ].filter(Boolean).join(" · ");

    const header = [`# ${title}`, detail, byline, `[Original page](${canonical.href})`]
        .filter(Boolean).join("\n\n");
    return new Response(`${header}\n\n${body}`, {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
}

/** Removes the blank lines Astro puts where the frontmatter was. */
export function stripLeadingBlankLines(markdown: string) {
    return markdown.replace(/^(?:[ \t]*\r?\n)+/, "");
}

const images = import.meta.glob<ImageMetadata>("../assets/images/**/*.{png,jpg,jpeg,webp,avif,gif,svg}", { import: "default" });

/**
 * Makes every link and image URL in a page's Markdown absolute, so it still works outside the site.
 * Relative image paths (at any folder depth) become their public URLs first.
 */
export async function resolvePageUrls(body: string, site: URL | undefined) {
    if (!site) throw new Error("Set `site` in astro.config.mjs for Markdown versions of pages");
    // Edit only URL tokens. Examples in code blocks, alt text and surrounding markup stay verbatim.
    const events = postprocess(parse().document().write(preprocess()(body, undefined, true)));
    let result = body;
    for (const [event, token] of events.reverse()) {
        if (event !== "enter" || (token.type !== "resourceDestinationString" && token.type !== "definitionDestinationString")) continue;
        const start = token.start.offset;
        const end = token.end.offset;
        let url = body.slice(start, end);
        const [path] = url.split(/[?#]/, 1);
        // Pages link to ../assets/images/ or ../content/blog-assets/images/, blog posts to ../blog-assets/images/.
        const match = path.match(/^(?:\.\.\/)+((?:assets\/images|(?:content\/)?blog-assets\/images)\/.*)$/);
        if (match) {
            const srcPath = match[1];
            let publicPath: string;
            if (srcPath.includes("blog-assets/")) {
                // Copied as-is to /blog-assets/ by the blog-assets integration in astro.config.mjs.
                publicPath = `/${srcPath.replace(/^content\//, "")}`;
            } else {
                const loadImage = images[decodeURI(`../${srcPath}`)];
                if (!loadImage) throw new Error(`Missing Markdown image: ${path}`);
                publicPath = (await loadImage()).src;
            }
            url = publicPath + url.slice(path.length);
        }
        // Root-relative only. Full URLs, mailto: and #anchors stay as they are.
        if (url.startsWith("/") && !url.startsWith("//")) url = new URL(url, site).href;
        result = result.slice(0, start) + url + result.slice(end);
    }
    return result;
}

/** Turns the small HTML snippets used in portfolio data into Markdown. */
export function inlineHtmlToMarkdown(html: string, site: URL) {
    return html
        // Links that only select another skill on the page become plain text.
        .replace(/<a href="#"[^>]*>(.*?)<\/a>/g, "$1")
        .replace(/<a href="([^"]+)"[^>]*>(.*?)<\/a>/g, (_, href: string, text: string) => `[${text}](${new URL(href, site).href})`)
        .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
        .replace(/&amp;/g, "&");
}
