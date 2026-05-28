import { defineCollection, z } from 'astro:content';

/**
 * Publications collection
 * One Markdown file per paper in src/content/publications/
 */
const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    /** Which author is "me" — must match a string in authors[] exactly */
    me: z.string().default('Lenora Gray'),
    year: z.number().int(),
    /** Conference / journal short name, e.g. "ICAIL '23" */
    venue: z.string(),
    /** Long-form venue name for badge */
    venueLong: z.string().optional(),
    /** City, country */
    location: z.string().optional(),
    /** Publication month, e.g. "Jun 2023" */
    date: z.string().optional(),
    /** Used by filter chips on /publications */
    type: z.enum(['conference', 'tutorial', 'preprint', 'journal']),
    /** Optional extra badges */
    featured: z.boolean().default(false),
    /** Short abstract for the expandable summary */
    abstract: z.string().optional(),
    links: z
      .object({
        pdf: z.string().url().optional(),
        acm: z.string().url().optional(),
        doi: z.string().url().optional(),
        arxiv: z.string().url().optional(),
        slides: z.string().url().optional(),
        cite: z.string().url().optional(),
        ieee: z.string().url().optional()
      })
      .default({}),
    /** Pin to the top of "Featured publications" on the home page */
    home: z.boolean().default(false),
    /** Display order tiebreak (lower = earlier) */
    order: z.number().default(0),
  }),
});

/**
 * Talks collection
 * One Markdown file per talk in src/content/talks/
 */
const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** Conference / event series name */
    event: z.string(),
    /** Format */
    type: z.enum(['keynote', 'talk', 'panel', 'workshop', 'tutorial', 'invited', 'podcast']),
    year: z.number().int(),
    /** ISO-ish date for sorting, e.g. "2024-07-15" */
    date: z.string(),
    /** Human-readable date, e.g. "Jul 2024" */
    dateLabel: z.string(),
    location: z.string(),
    upcoming: z.boolean().default(false),
    featured: z.boolean().default(false),
    description: z.string().optional(),
    links: z
      .object({
        event: z.string().url().optional(),
        slides: z.string().url().optional(),
        paper: z.string().url().optional(),
        listen: z.string().url().optional(),
        calendar: z.string().url().optional(),
      })
      .default({}),
  }),
});

export const collections = { publications, talks };
