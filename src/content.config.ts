import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // src/content/blog/*.md のファイル名がそのまま URL (/blog/<ファイル名>) になる
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** true の記事は本番ビルドに含めない (npm run dev では表示される) */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
