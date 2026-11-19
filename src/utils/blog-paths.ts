import { getCollection } from "astro:content";

export async function getBlogPaths() {
    const posts = await getCollection("blog");
    return posts.map((post) => ({ params: { id: post.id }, props: { post } }));
}
