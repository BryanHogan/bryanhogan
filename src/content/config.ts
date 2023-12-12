import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        coverImage: z.object({
            url: z.string(),
            alt: z.string(),
            width: z.number(),
            height: z.number()
        }),
        pubDate: z.date(),
        lastUpdate: z.date(),
        tags: z.array(z.string()),
        length: z.string()
    })
});

export const collections = {
    blog: postsCollection,
};