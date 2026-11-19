// Pages in src/pages/ that get a /<page>.md version and a "View as Markdown" link.
// Each needs `heading` and `headingDetail` frontmatter; the build fails without them.
export const markdownPages = ["about", "now", "portfolio"];

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
