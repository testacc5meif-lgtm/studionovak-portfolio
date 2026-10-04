import { z } from 'astro/zod';
import raw from './projects.json';

// Validates projects.json at build time, so a typo or missing field fails the
// build with a clear message instead of silently rendering a broken card.
const Project = z.strictObject({
  name: z.string().min(1),
  tagline: z.string().min(1).optional(),
  problem: z.string().min(1),
  solution: z.string().min(1),
  result: z.string().min(1),
  stack: z.array(z.string().min(1)).default([]),
  link: z.url().optional(),
});

export type Project = z.infer<typeof Project>;

const parsed = z.array(Project).safeParse(raw);

if (!parsed.success) {
  throw new Error(`src/data/projects.json is invalid:\n${z.prettifyError(parsed.error)}`);
}

export const projects: Project[] = parsed.data;
