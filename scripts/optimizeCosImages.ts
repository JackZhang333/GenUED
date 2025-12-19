#!/usr/bin/env bun
import COS from "cos-nodejs-sdk-v5";
import { Client } from "@notionhq/client";
import crypto from "crypto";
import sharp from "sharp";

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Initialize Tencent COS client
const cos = new COS({
  SecretId: process.env.COS_SECRET_ID!,
  SecretKey: process.env.COS_SECRET_KEY!,
});

const BUCKET = process.env.COS_BUCKET!; // Format: examplebucket-1250000000
const REGION = process.env.COS_REGION!; // Format: ap-guangzhou
let COS_PUBLIC_URL = process.env.COS_PUBLIC_URL!; // e.g., https://example-1250000000.cos.ap-guangzhou.myqcloud.com
if (COS_PUBLIC_URL && !COS_PUBLIC_URL.startsWith("http")) {
  COS_PUBLIC_URL = `https://${COS_PUBLIC_URL}`;
}
const MAX_SIZE = 80; // Maximum width or height in pixels

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

/**
 * Download file from COS or URL
 */
async function downloadImage(url: string): Promise<Buffer | null> {
  try {
    let finalUrl = url;
    if (!url.startsWith("http")) {
      finalUrl = `https://${url}`;
    }

    if (finalUrl.includes(".myqcloud.com")) {
      // It's a COS URL, use COS SDK to download (handles auth if needed)
      // Extract key, bucket, and region from URL
      const urlObj = new URL(finalUrl);
      const hostname = urlObj.hostname; // e.g., bucket-1250000000.cos.ap-guangzhou.myqcloud.com
      const parts = hostname.split(".");
      const bucketName = parts[0];
      const regionName = parts[2];
      const key = urlObj.pathname.slice(1); // remove leading /

      return new Promise((resolve, reject) => {
        cos.getObject(
          {
            Bucket: bucketName,
            Region: regionName,
            Key: key,
          },
          (err, data) => {
            if (err) return reject(err);
            resolve(data.Body as Buffer);
          },
        );
      });
    } else {
      // It's a remote URL (e.g., Notion S3)
      const response = await fetch(finalUrl);
      if (!response.ok) return null;
      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }
  } catch (error) {
    console.error(`  ❌ Error downloading image: ${error}`);
    return null;
  }
}

/**
 * Optimize image using sharp
 */
async function optimizeImage(buffer: Buffer): Promise<{ buffer: Buffer; format: string } | null> {
  try {
    const image = sharp(buffer);
    const metadata = await image.metadata();

    console.log(
      `    📏 Original: ${metadata.width}x${metadata.height}, ${metadata.format}, ${(buffer.length / 1024).toFixed(2)}KB`,
    );

    // Resize if needed (maintain aspect ratio, max 80x80)
    let processedImage = image.resize(MAX_SIZE, MAX_SIZE, {
      fit: "inside",
      withoutEnlargement: true,
    });

    // Optimize based on format
    if (metadata.format === "png") {
      processedImage = processedImage.png({
        quality: 90,
        compressionLevel: 9,
        effort: 10,
      });
    } else if (metadata.format === "jpeg" || metadata.format === "jpg") {
      processedImage = processedImage.jpeg({
        quality: 90,
        mozjpeg: true,
      });
    } else if (metadata.format === "webp") {
      processedImage = processedImage.webp({
        quality: 90,
        effort: 6,
      });
    } else if (metadata.format === "svg") {
      // SVGs are already vector, no need to optimize
      return { buffer, format: "svg" };
    }

    const optimizedBuffer = await processedImage.toBuffer();
    const optimizedMetadata = await sharp(optimizedBuffer).metadata();

    console.log(
      `    ✨ Optimized: ${optimizedMetadata.width}x${optimizedMetadata.height}, ${(optimizedBuffer.length / 1024).toFixed(2)}KB`,
    );
    console.log(
      `    💾 Saved: ${((1 - optimizedBuffer.length / buffer.length) * 100).toFixed(1)}%`,
    );

    stats.originalTotalSize += buffer.length;
    stats.optimizedTotalSize += optimizedBuffer.length;

    return {
      buffer: optimizedBuffer,
      format: metadata.format || "png",
    };
  } catch (error) {
    console.error(`  ❌ Error optimizing image: ${error}`);
    return null;
  }
}

/**
 * Upload optimized image to COS
 */
async function uploadToCOS(buffer: Buffer, format: string): Promise<string | null> {
  try {
    const hash = crypto.createHash("sha256").update(buffer).digest("hex");
    const extension = format === "svg" ? ".svg" : `.${format}`;
    const filename = `notion-images/${hash}${extension}`;

    const contentType = `image/${format === "svg" ? "svg+xml" : format}`;

    return new Promise((resolve, reject) => {
      cos.putObject(
        {
          Bucket: BUCKET,
          Region: REGION,
          Key: filename,
          Body: buffer,
          ContentType: contentType,
          ACL: "public-read",
          Headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        },
        (err, data) => {
          if (err) return reject(err);
          resolve(`${COS_PUBLIC_URL}/${filename}`);
        },
      );
    });
  } catch (error) {
    console.error(`  ❌ Error uploading to COS: ${error}`);
    return null;
  }
}

/**
 * Delete old image from COS
 */
async function deleteFromCOS(url: string): Promise<void> {
  try {
    if (!url.startsWith(COS_PUBLIC_URL)) return;

    const key = url.replace(`${COS_PUBLIC_URL}/`, "");

    return new Promise((resolve, reject) => {
      cos.deleteObject(
        {
          Bucket: BUCKET,
          Region: REGION,
          Key: key,
        },
        (err, data) => {
          if (err) return reject(err);
          console.log(`    🗑️  Deleted old image from COS`);
          resolve();
        },
      );
    });
  } catch (error) {
    console.error(`  ⚠️  Error deleting old image from COS: ${error}`);
  }
}

/**
 * Check if URL is a COS URL
 */
function isCosImage(url: string | undefined): boolean {
  if (!url) return false;
  return url.startsWith(COS_PUBLIC_URL) || url.includes(".myqcloud.com");
}

/**
 * Check if URL is an already optimized COS image (has hash and in our bucket)
 */
function isHashedCosImage(url: string | undefined): boolean {
  if (!url) return false;
  // Check if it's in our bucket and has the hashed path
  return url.startsWith(`${COS_PUBLIC_URL}/notion-images/`) && /[a-f0-7]{64}/.test(url);
}

/**
 * Check if URL is a Notion S3 or proxy URL that needs mirroring
 */
function isNotionImage(url: string | undefined): boolean {
  if (!url) return false;
  return (
    url.includes("amazonaws.com") ||
    url.includes("notion-static.com") ||
    url.includes("www.notion.so/image")
  );
}

/**
 * Optimize a single image
 */
async function optimizeSingleImage(
  imageUrl: string,
  pageId: string,
  updateType: "icon" | "image" | "icon_property",
): Promise<boolean> {
  try {
    // Download image
    console.log(`  📥 Downloading image...`);
    const originalBuffer = await downloadImage(imageUrl);
    if (!originalBuffer) {
      console.log(`  ⏭️  Failed to download, skipping`);
      stats.skipped++;
      return false;
    }

    // Optimize image
    console.log(`  🔧 Optimizing...`);
    const optimized = await optimizeImage(originalBuffer);
    if (!optimized) {
      console.log(`  ⏭️  Failed to optimize, skipping`);
      stats.skipped++;
      return false;
    }

    // Upload optimized version
    console.log(`  📤 Uploading optimized image...`);
    const newUrl = await uploadToCOS(optimized.buffer, optimized.format);
    if (!newUrl) {
      console.log(`  ⏭️  Failed to upload, skipping`);
      stats.skipped++;
      return false;
    }

    // Check if URL changed (same hash means no optimization needed)
    if (newUrl === imageUrl) {
      console.log(`  ⏭️  No optimization needed (same hash)`);
      stats.skipped++;
      return false;
    }

    console.log(`  ✅ New URL: ${newUrl}`);

    // Update Notion page
    console.log(`  💾 Updating Notion...`);
    if (updateType === "icon") {
      await notion.pages.update({
        page_id: pageId,
        icon: {
          type: "external",
          external: { url: newUrl },
        },
      });
    } else if (updateType === "icon_property") {
      await notion.pages.update({
        page_id: pageId,
        properties: {
          icon: {
            files: [
              {
                name: "icon",
                type: "external",
                external: { url: newUrl },
              },
            ],
          },
        },
      });
    } else {
      // Update Image property
      await notion.pages.update({
        page_id: pageId,
        properties: {
          Image: {
            url: newUrl,
          },
        },
      });
    }

    // Delete old image if it was in our COS
    if (isCosImage(imageUrl)) {
      console.log(`  🗑️  Deleting old image from COS...`);
      await deleteFromCOS(imageUrl);
    }

    stats.processed++;
    return true;
  } catch (error) {
    console.error(`  ❌ Error optimizing image: ${error}`);
    stats.errors++;
    return false;
  }
}

/**
 * Optimize Good Websites icons
 */
async function optimizeGoodWebsites() {
  console.log("\n🌐 Processing Good Websites...\n");

  const databaseId = process.env.NOTION_GOOD_WEBSITES_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  console.log(`Found ${response.results.length} website items\n`);

  for (const page of response.results) {
    if (!("properties" in page)) continue;

    const pageWithProps = page as any;
    const name = pageWithProps.properties.Name?.title[0]?.plain_text || "Untitled";
    const icon =
      pageWithProps.properties.icon?.type === "external"
        ? pageWithProps.properties.icon.external.url
        : pageWithProps.properties.icon?.type === "files"
          ? pageWithProps.properties.icon.files[0].file.url
          : undefined;

    console.log(`Processing: ${name}`);

    if (isHashedCosImage(icon)) {
      console.log(`  ⏭️  Already optimized COS icon, skipping\n`);
      stats.skipped++;
      continue;
    }

    if (isCosImage(icon) || isNotionImage(icon)) {
      await optimizeSingleImage(icon!, page.id, "icon");
    } else {
      console.log(`  ⏭️  Not a COS or Notion icon, skipping\n`);
      stats.skipped++;
    }
    console.log();
  }
}

/**
 * Optimize Stack items (both icons and images)
 */
async function optimizeStack() {
  console.log("\n📚 Processing Stack items...\n");

  const databaseId = process.env.NOTION_STACK_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  console.log(`Found ${response.results.length} stack items\n`);

  for (const page of response.results) {
    if (!("properties" in page)) continue;

    const pageWithProps = page as any;
    const name = pageWithProps.properties.Name?.title[0]?.plain_text || "Untitled";
    const icon =
      pageWithProps.properties.icon?.type === "external"
        ? pageWithProps.properties.icon.external.url
        : pageWithProps.properties.icon?.type === "files"
          ? pageWithProps.properties.icon.files[0].file.url
          : undefined;
    const image = pageWithProps.properties.Image?.url;

    console.log(`Processing: ${name}`);
    // console.log(pageWithProps);
    // console.log(image);

    // Optimize icon
    if (isHashedCosImage(icon)) {
      console.log(`  ⏭️  Already optimized COS icon, skipping`);
      stats.skipped++;
    } else if (isCosImage(icon) || isNotionImage(icon)) {
      console.log(`  🎨 Optimizing icon...`);
      await optimizeSingleImage(icon!, page.id, "icon");
    } else {
      console.log(`  ⏭️  No COS or Notion icon found`);
      stats.skipped++;
    }

    // Optimize image
    if (isHashedCosImage(image)) {
      console.log(`  ⏭️  Already optimized COS image, skipping`);
      stats.skipped++;
    } else if (isCosImage(image) || isNotionImage(image)) {
      console.log(`  📸 Optimizing image...`);
      await optimizeSingleImage(image!, page.id, "image");
    } else {
      console.log(`  ⏭️  No COS or Notion image found`);
      stats.skipped++;
    }

    console.log();
  }
}

/**
 * Optimize Music (Listening History) icons
 */
async function optimizeMusic() {
  console.log("\n🎵 Processing Music items...\n");

  const databaseId = process.env.NOTION_MUSIC_DATABASE_ID!;
  if (!databaseId) {
    console.log("⏭️  NOTION_MUSIC_DATABASE_ID not set, skipping\n");
    return;
  }

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  console.log(`Found ${response.results.length} music items\n`);

  for (const page of response.results) {
    if (!("properties" in page)) continue;

    const pageWithProps = page as any;
    const name = pageWithProps.properties.Name?.title[0]?.plain_text || "Untitled";

    // 1. Check "icon" property (type: files)
    const iconProperty = pageWithProps.properties.icon?.files?.[0];
    const iconUrl = iconProperty?.file?.url || iconProperty?.external?.url;

    // 2. Check page icon
    const pageIcon =
      pageWithProps.icon?.type === "external"
        ? pageWithProps.icon.external.url
        : pageWithProps.icon?.type === "file"
          ? pageWithProps.icon.file.url
          : undefined;

    console.log(`Processing: ${name}`);

    if (isHashedCosImage(iconUrl)) {
      console.log(`  ⏭️  Already optimized COS icon property, skipping`);
      stats.skipped++;
    } else if (isCosImage(iconUrl) || isNotionImage(iconUrl)) {
      console.log(`  🎨 Optimizing icon property...`);
      await optimizeSingleImage(iconUrl!, page.id, "icon_property");
    } else if (isHashedCosImage(pageIcon)) {
      console.log(`  ⏭️  Already optimized COS page icon, skipping`);
      stats.skipped++;
    } else if (isCosImage(pageIcon) || isNotionImage(pageIcon)) {
      console.log(`  🎨 Optimizing page icon...`);
      await optimizeSingleImage(pageIcon!, page.id, "icon");
    } else {
      console.log(`  ⏭️  No COS or Notion icon found`);
      stats.skipped++;
    }

    console.log();
  }
}

/**
 * Main function
 */
async function main() {
  console.log("🚀 Starting COS image optimization...\n");

  if (!BUCKET || !REGION || !process.env.COS_SECRET_ID || !process.env.COS_SECRET_KEY) {
    console.error("❌ Missing required environment variables: COS_BUCKET, COS_REGION, COS_SECRET_ID, COS_SECRET_KEY");
    process.exit(1);
  }

  await optimizeGoodWebsites();
  await optimizeStack();
  await optimizeMusic();

  console.log("\n" + "=".repeat(50));
  console.log("✅ Optimization complete!\n");
  console.log(`📊 Statistics:`);
  console.log(`   - Processed: ${stats.processed} images`);
  console.log(`   - Skipped: ${stats.skipped} images`);
  console.log(`   - Errors: ${stats.errors} images`);
  console.log(`   - Original total size: ${(stats.originalTotalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(
    `   - Optimized total size: ${(stats.optimizedTotalSize / 1024 / 1024).toFixed(2)}MB`,
  );
  if (stats.originalTotalSize > 0) {
    console.log(
      `   - Total savings: ${((1 - stats.optimizedTotalSize / stats.originalTotalSize) * 100).toFixed(1)}%`,
    );
  }
  console.log("=".repeat(50) + "\n");
}

main().catch(console.error);
