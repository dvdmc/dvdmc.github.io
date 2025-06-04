import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    conference: z.string(),
    year: z.number(),
    videoUrl: z.string().optional(),
    imageUrl: z.string().optional(),
    articleUrl: z.string().optional(),
    pdfUrl: z.string().optional(),
    projectUrl: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  publications,
  experience,
};