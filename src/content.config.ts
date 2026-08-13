import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  blog: defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      excerpt: z.string(),
      publishedAt: z.coerce.date(),
      modifiedAt: z.coerce.date(),
      image: z.string(),
      imageAlt: z.string(),
      imageCredit: z.string().optional(),
      imageCreditUrl: z.string().url().optional(),
      ctaLabel: z.string(),
      ctaHref: z.string(),
    }),
  }),
};
