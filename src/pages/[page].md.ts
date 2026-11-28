import type { APIRoute, InferGetStaticPropsType, MarkdownInstance } from "astro";
import { getLastModifiedDate } from "../utils/last-update";
import { markdownPages, markdownResponse, resolvePageUrls, stripLeadingBlankLines } from "../utils/markdown";

const pages = import.meta.glob<MarkdownInstance<{ heading: string; headingDetail: string; location?: string }>>("./*.md");

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
    const isNow = page === "now";
    return markdownResponse({
        title: frontmatter.heading,
        detail: [frontmatter.headingDetail, frontmatter.location].filter(Boolean).join("\n\n"),
        canonical: new URL(`/${page}`, site),
        updated: isNow ? await getLastModifiedDate("src/pages/now.md") : undefined,
        body: await resolvePageUrls(stripLeadingBlankLines(rawContent()), site),
    });
};
