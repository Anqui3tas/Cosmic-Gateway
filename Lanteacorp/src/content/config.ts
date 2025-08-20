import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional()
  })
});

const changelog = defineCollection({
  schema: z.object({
    version: z.string(),
    date: z.string(),
    changes: z.array(z.string())
  })
});

const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional()
  })
});

export const collections = { blog, changelog, devlog };