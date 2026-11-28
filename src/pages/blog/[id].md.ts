import type { APIRoute, InferGetStaticPropsType } from "astro";
import { getBlogPaths } from "../../utils/blog-paths";
import { getLastModifiedDate } from "../../utils/last-update";
import { markdownResponse, resolvePageUrls } from "../../utils/markdown";

export const getStaticPaths = getBlogPaths;

export const GET: APIRoute<InferGetStaticPropsType<typeof getStaticPaths>> = async ({ props, site }) => {
    const { post } = props;
    if (post.body === undefined) throw new Error(`Missing Markdown body for blog/${post.id}`);

    return markdownResponse({
        title: post.data.title,
        canonical: new URL(`/blog/${post.id}`, site),
        published: post.data.pubDate,
        updated: post.data.lastUpdate ?? await getLastModifiedDate(`src/content/blog/${post.id}.md`),
        body: await resolvePageUrls(post.body, site),
    });
};
