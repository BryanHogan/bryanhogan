import { dirname, resolve } from "node:path";
import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";
import { generateSocialImage } from "../../../utils/social-image";

export const getStaticPaths = (async () => {
    const posts = await getCollection("blog");
    return posts.map(({ id, data, filePath }) => {
        let artwork;
        if (data.coverImagePath && filePath) {
            artwork = { coverPath: resolve(dirname(filePath), data.coverImagePath) };
        } else if (data.emoji) {
            artwork = { emoji: data.emoji };
        } else {
            throw new Error(`Cannot find preview artwork for blog post "${id}".`);
        }
        return { params: { id }, props: { title: data.title, artwork } };
    });
}) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute<Props> = async ({ props }) => {
    const png = await generateSocialImage(props.title, props.artwork);
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
