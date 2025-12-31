#!/usr/bin/env bun
/**
 * Tencent COS Image Optimization Script
 * Downloads images from Notion, optimizes them, and uploads to COS
 */

import { Client } from "@notionhq/client";
import { getCosStorage, COSStorage } from "@/lib/storage";
import { optimizeImage, isNotionImage } from "@/lib/image-processing/optimize";

interface OptimizationStats {
  processed: number;
  skipped: number;
  errors: number;
  originalTotalSize: number;
  optimizedTotalSize: number;
}

const stats: OptimizationStats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  originalTotalSize: 0,
  optimizedTotalSize: 0,
};

interface ImageTarget {
  url: string | undefined;
  type: "icon" | "image" | "icon_property";
  label: string;
}

/**
 * Get file property URL from Notion
 */
function getFilePropertyUrl(property: any): string | undefined {
  if (!property) return undefined;
  if (property.files && property.files.length > 0) {
    const file = property.files[0];
    return file.file?.url || file.external?.url;
  }
  return undefined;
}

/**
 * Get URL property URL from Notion
 */
function getUrlPropertyUrl(property: any): string | undefined {
  if (!property) return undefined;
  if (property.type === "url") {
    return property.url;
  }
  return property.url;
}

/**
 * Get page icon URL from Notion
 */
function getPageIconUrl(page: any): string | undefined {
  if (!page.icon) return undefined;
  return page.icon.type === "external"
    ? page.icon.external.url
    : page.icon.type === "files"
      ? page.icon.files?.[0]?.file?.url || page.icon.files?.[0]?.external?.url
      : undefined;
}

/**
 * Extract image targets from a Notion page
 */
function getImageTargets(page: any): ImageTarget[] {
  const targets: ImageTarget[] = [];
  const props = page.properties;

  // 1. Icon Property (Files)
  if (props.icon) {
    const iconUrl = getFilePropertyUrl(props.icon);
    if (iconUrl) {
      targets.push({ url: iconUrl, type: "icon_property", label: "icon property" });
    }
  }

  // 2. Page Icon
  const pageIconUrl = getPageIconUrl(page);
  if (pageIconUrl) {
    targets.push({ url: pageIconUrl, type: "icon", label: "page icon" });
  }

  // 3. Image Property (URL)
  if (props.Image) {
    const imageUrl = getUrlPropertyUrl(props.Image);
    if (imageUrl) {
      targets.push({ url: imageUrl, type: "image", label: "image property" });
    }
  }

  return targets;
}

/**
 * Process a single image
 */
async function processSingleImage(
  url: string,
  pageId: string,
  updateType: "icon" | "image" | "icon_property",
  storage: COSStorage,
  notion: Client,
): Promise<boolean> {
  try {
    // Download image
    console.log(`  📥 Downloading...`);
    const downloaded = await storage.download(url);
    if (!downloaded) {
      console.log(`  ⏭️  Failed to download, skipping`);
      stats.skipped++;
      return false;
    }

    console.log(
      `  📏 Original: ${(downloaded.size / 1024).toFixed(2)}KB, type: ${downloaded.contentType}`,
    );

    // Optimize image
    console.log(`  🔧 Optimizing...`);
    const optimized = await optimizeImage(downloaded.buffer);

    // Upload to COS
    console.log(`  📤 Uploading...`);
    const uploadResult = await storage.uploadOptimizedImage(optimized.buffer, optimized.format);

    console.log(
      `  ✨ Optimized: ${optimized.width}x${optimized.height}, ${(optimized.optimizedSize / 1024).toFixed(2)}KB (saved ${optimized.savings.toFixed(1)}%)`,
    );

    // Update Notion
    console.log(`  💾 Updating Notion...`);
    if (updateType === "icon") {
      await notion.pages.update({
        page_id: pageId,
        icon: { type: "external", external: { url: uploadResult.url } },
      });
    } else if (updateType === "icon_property") {
      await notion.pages.update({
        page_id: pageId,
        properties: {
          icon: {
            files: [{ name: "icon", type: "external", external: { url: uploadResult.url } }],
          },
        },
      });
    } else {
      await notion.pages.update({
        page_id: pageId,
        properties: { Image: { url: uploadResult.url } },
      });
    }

    // Delete old image if from our bucket
    if (storage.isOurBucket(url)) {
      console.log(`  🗑️  Deleting old image...`);
      await storage.delete(url);
    }

    stats.processed++;
    stats.originalTotalSize += downloaded.size;
    stats.optimizedTotalSize += optimized.optimizedSize;

    console.log(`  ✅ Done: ${uploadResult.url}`);
    return true;
  } catch (error) {
    console.error(`  ❌ Error:`, error);
    stats.errors++;
    return false;
  }
}

/**
 * Process all images in a database
 */
async function processDatabase(
  databaseId: string,
  dbName: string,
  storage: COSStorage,
  notion: Client,
): Promise<void> {
  if (!databaseId) {
    console.log(`⏭️  Database ID for ${dbName} not set, skipping\n`);
    return;
  }

  console.log(`\nProcessing ${dbName}...\n`);

  const response = await notion.databases.query({ database_id: databaseId });
  console.log(`Found ${response.results.length} items\n`);

  for (const page of response.results) {
    if (!("properties" in page)) continue;

    const title = (page as any).properties.Name?.title[0]?.plain_text || "Untitled";
    console.log(`Processing: ${title}`);

    const targets = getImageTargets(page);

    for (const target of targets) {
      const { url, type, label } = target;
      if (!url) continue;

      // Check if already optimized
      if (storage.isOptimizedImage(url)) {
        console.log(`  ⏭️  Already optimized ${label}, skipping`);
        stats.skipped++;
        continue;
      }

      // Check if needs processing
      const needsCosUpload = storage.isOurBucket(url) || isNotionImage(url);
      if (!needsCosUpload) {
        console.log(`  ⏭️  No COS or Notion ${label} found`);
        stats.skipped++;
        continue;
      }

      console.log(`  🎨 Optimizing ${label}...`);
      await processSingleImage(url, page.id, type, storage, notion);
    }

    console.log();
  }
}

/**
 * Main function
 */
async function main() {
  console.log("🚀 Starting COS image optimization...\n");

  // Validate environment
  const required = ["NOTION_TOKEN", "COS_BUCKET", "COS_REGION", "COS_SECRET_ID", "COS_SECRET_KEY"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error(`❌ Missing environment variables: ${missing.join(", ")}`);
    process.exit(1);
  }

  const storage = getCosStorage();
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  // Process all databases
  await processDatabase(process.env.NOTION_GOOD_WEBSITES_DATABASE_ID!, "Good Websites", storage, notion);
  await processDatabase(process.env.NOTION_STACK_DATABASE_ID!, "Stack items", storage, notion);
  await processDatabase(process.env.NOTION_MUSIC_DATABASE_ID!, "Music items", storage, notion);

  // Print statistics
  console.log("=".repeat(50));
  console.log("✅ Optimization complete!\n");
  console.log(`📊 Statistics:`);
  console.log(`   - Processed: ${stats.processed} images`);
  console.log(`   - Skipped: ${stats.skipped} images`);
  console.log(`   - Errors: ${stats.errors} images`);
  console.log(`   - Original total: ${(stats.originalTotalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   - Optimized total: ${(stats.optimizedTotalSize / 1024 / 1024).toFixed(2)}MB`);

  if (stats.originalTotalSize > 0) {
    console.log(
      `   - Total savings: ${((1 - stats.optimizedTotalSize / stats.originalTotalSize) * 100).toFixed(1)}%`,
    );
  }
  console.log("=".repeat(50) + "\n");
}

main().catch(console.error);
