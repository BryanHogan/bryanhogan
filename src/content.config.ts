import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string().max(60, "Maximum of 60 characters in title required.").min(10, "Minimum of 10 characters in title required."),
        description: z.string().max(162, "Maximum of 162 characters in description required.").min(50, "Minimum of 50 characters in description required."),
        coverImage: image().optional(),
        emoji: z.string().optional(),
        pubDate: z.date(),
        lastUpdate: z.date().optional(),
        tags: z.array(z.string())
    }).refine((data) => data.coverImage || data.emoji, {
        message: "Either coverImage or emoji must be provided.",
        path: ["coverImage", "emoji"]
    })
});

export const collections = { blog };