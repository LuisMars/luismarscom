import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(120),
    url: z
      .string()
      .url()
      .refine((value) => value.startsWith("https://"), "URL must be absolute HTTPS"),
    featured: z.boolean().default(false),
    order: z.number().int().default(999),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  projects: projectsCollection
};
