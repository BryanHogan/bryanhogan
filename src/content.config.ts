import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string().max(60, "Maximum of 60 characters in title required.").min(10, "Minimum of 10 characters in title required."),
        description: z.string().max(162, "Maximum of 162 characters in description required.").min(50, "Minimum of 50 characters in description required."),
        coverImage: z.string(), //maybe needs to change
        pubDate: z.date(),
        tags: z.array(z.string())
    })
});

export const collections = { blog };