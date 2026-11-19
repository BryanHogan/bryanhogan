import type { APIRoute, InferGetStaticPropsType, MarkdownInstance } from "astro";
import { parse, postprocess, preprocess } from "micromark";
import { getLastModifiedDate } from "../utils/last-update";
import { markdownPages, markdownResponse } from "../utils/markdown";

const pages = import.meta.glob<MarkdownInstance<{ heading: string; headingDetail: string; location?: string }>>("./*.md");
const images = import.meta.glob<ImageMetadata>("../assets/images/**/*.{png,jpg,jpeg,webp,avif,gif,svg}", { import: "default" });

async function resolvePageImages(body: string) {
    // Edit only URL tokens. Examples in code blocks, alt text and surrounding markup stay verbatim.
    const events = postprocess(parse().document().write(preprocess()(body, undefined, true)));
    let result = body;
    for (const [event, token] of events.reverse()) {
        if (event !== "enter" || (token.type !== "resourceDestinationString" && token.type !== "definitionDestinationString")) continue;
        const start = token.start.offset;
        const end = token.end.offset;
        const url = body.slice(start, end);
        const [path] = url.split(/[?#]/, 1);
        let publicPath: string;
        if (path.startsWith("../content/blog-assets/images/")) {
            publicPath = path.slice("../content".length);
        } else if (path.startsWith("../assets/images/")) {
            const loadImage = images[decodeURI(path)];
            if (!loadImage) throw new Error(`Missing Markdown image: ${path}`);
            publicPath = (await loadImage()).src;
        } else {
            continue;
        }
        result = result.slice(0, start) + publicPath + url.slice(path.length) + result.slice(end);
    }
    return result;
}

export function getStaticPaths() {
    return markdownPages.map((page) => ({ params: { page }, props: { page } }));
}

export const GET: APIRoute<InferGetStaticPropsType<typeof getStaticPaths>> = async ({ props, site }) => {
    const { page } = props;
    const loadPage = pages[`./${page}.md`];
    if (!loadPage) throw new Error(`Missing Markdown page: src/pages/${page}.md`);
    const { rawContent, frontmatter } = await loadPage();
    if (!frontmatter.heading || !frontmatter.headingDetail) {
        throw new Error(`src/pages/${page}.md needs heading and headingDetail frontmatter for its Markdown version`);
    }
    // Astro pads removed frontmatter with blank lines to preserve source positions.
    const body = rawContent().replace(/^(?:[ \t]*\r?\n)+/, "");
    const isNow = page === "now";
    return markdownResponse({
        title: frontmatter.heading,
        detail: [frontmatter.headingDetail, frontmatter.location].filter(Boolean).join("\n\n"),
        canonical: new URL(`/${page}`, site),
        updated: isNow ? await getLastModifiedDate("src/pages/now.md") : undefined,
        body: await resolvePageImages(body),
    });
};
