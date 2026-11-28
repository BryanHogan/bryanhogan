import type { APIRoute, InferGetStaticPropsType, MarkdownInstance } from "astro";
import { caseStudyPages, markdownResponse, resolvePageUrls, stripLeadingBlankLines } from "../../utils/markdown";

const studies = import.meta.glob<MarkdownInstance<{ heading: string; headingDetail: string }>>("./*.md");

export function getStaticPaths() {
    return caseStudyPages.map((study) => ({ params: { study }, props: { study } }));
}

export const GET: APIRoute<InferGetStaticPropsType<typeof getStaticPaths>> = async ({ props, site }) => {
    const { study } = props;
    const loadStudy = studies[`./${study}.md`];
    if (!loadStudy) throw new Error(`Missing case study: src/pages/portfolio/${study}.md`);
    const { rawContent, frontmatter } = await loadStudy();
    if (!frontmatter.heading || !frontmatter.headingDetail) {
        throw new Error(`src/pages/portfolio/${study}.md needs heading and headingDetail frontmatter for its Markdown version`);
    }
    return markdownResponse({
        title: frontmatter.heading,
        detail: frontmatter.headingDetail,
        canonical: new URL(`/portfolio/${study}`, site),
        body: await resolvePageUrls(stripLeadingBlankLines(rawContent()), site),
    });
};
