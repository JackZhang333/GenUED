// ⚠️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Run `bun run generate-schemas` to regenerate.

import { z } from "zod";

export const StackSchema = z.object({
  URL: z.string().optional(),
  Image: z.string().optional(),
  Description: z.string().optional(),
  icon: z.array(z.any()).optional(),
  Platforms: z.array(z.enum(["iOS", "Windows"])).optional(),
  Name: z.string().optional(),
});

export type Stack = z.infer<typeof StackSchema>;

export const AMASchema = z.object({
  Status: z.enum(["Unanswered", "Answered"]).optional(),
  "Answered At": z.string().optional(),
  Description: z.string().optional(),
  "Created At": z.string().optional(),
  Name: z.string().optional(),
});

export type AMA = z.infer<typeof AMASchema>;

export const WritingSchema = z.object({
  status: z.enum(["draft", "Published"]).optional(),
  id: z.string().optional(),
  Slug: z.string().optional(),
  FeatureImage: z.array(z.any()).optional(),
  Published: z.string().optional(),
  Excerpt: z.string().optional(),
  Name: z.string().optional(),
});

export type Writing = z.infer<typeof WritingSchema>;

export const DesignDetailsEpisodesSchema = z.object({
  "Analytics Fetched": z.boolean().optional(),
  Status: z.enum(["draft", "published", "scheduled", "private"]).optional(),
  Description: z.string().optional(),
  "Top Country": z.string().optional(),
  "Top Country Downloads": z.number().optional(),
  Slug: z.string().optional(),
  "Total Downloads": z.number().optional(),
  "Analytics Error": z.string().optional(),
  "Duration (formatted)": z.string().optional(),
  "Duration (seconds)": z.number().optional(),
  "Published Date": z.string().optional(),
  "Has Description Content": z.boolean().optional(),
  "Episode transcripts": z.array(z.object({ id: z.string() })).optional(),
  "Content Migrated": z.boolean().optional(),
  "Audio URL (S3)": z.string().optional(),
  "Episode Number": z.number().optional(),
  "Downloads Last Updated": z.string().optional(),
  "Simplecast ID": z.string().optional(),
  "Original Audio URL": z.string().optional(),
  "Image URL": z.string().optional(),
  "Migration Status": z
    .enum(["pending", "downloading", "uploading", "completed", "failed"])
    .optional(),
  "Has Long Description": z.boolean().optional(),
  Name: z.string().optional(),
});

export type DesignDetailsEpisodes = z.infer<typeof DesignDetailsEpisodesSchema>;

export const MusicSchema = z.object({
  "Played At": z.string().optional(),
  "Spotify URL": z.array(z.any()).optional(),
  Artist: z.string().optional(),
  icon: z.array(z.any()).optional(),
  Album: z.string().optional(),
  Name: z.string().optional(),
});

export type Music = z.infer<typeof MusicSchema>;

export const GoodWebsitesSchema = z.object({
  URL: z.string().optional(),
  icon: z.array(z.any()).optional(),
  X: z.string().optional(),
  Tags: z.array(z.enum(["Company", "Personal site", "No"])).optional(),
  Name: z.string().optional(),
});

export type GoodWebsites = z.infer<typeof GoodWebsitesSchema>;

export const SpeakingSchema = z.object({
  URL: z.string().optional(),
  Date: z.string().optional(),
  Name: z.string().optional(),
});

export type Speaking = z.infer<typeof SpeakingSchema>;
