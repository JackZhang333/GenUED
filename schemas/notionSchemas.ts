// ⚠️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Run `bun run generate-schemas` to regenerate.

import { z } from "zod";

export const WritingSchema = z.object({
  status: z.enum(["Published"]).optional(),
  id: z.string().optional(),
  Slug: z.string().optional(),
  FeatureImage: z.array(z.any()).optional(),
  Published: z.string().optional(),
  Excerpt: z.string().optional(),
  Name: z.string().optional(),
});

export type Writing = z.infer<typeof WritingSchema>;
