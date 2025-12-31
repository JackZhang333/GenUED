/**
 * Image optimization module with Tencent COS integration
 * Provides unified interface for image processing and storage
 */

import sharp from "sharp";
import { getCosStorage } from "@/lib/storage";

export interface OptimizeImageOptions {
  maxSize?: number; // Maximum width or height in pixels (default: 80 for icons)
  quality?: number; // Quality setting 1-100 (default: 90)
  format?: "jpeg" | "png" | "webp" | "auto"; // Output format (default: auto from source)
}

export interface OptimizedImage {
  buffer: Buffer;
  format: string;
  contentType: string;
  width: number;
  height: number;
  originalSize: number;
  optimizedSize: number;
  savings: number; // Percentage saved
}

export interface ImageProcessResult {
  success: boolean;
  originalUrl: string;
  optimizedUrl?: string;
  error?: string;
  stats?: {
    originalSize: number;
    optimizedSize: number;
    savings: number;
    width: number;
    height: number;
  };
}

/**
 * Optimize an image buffer by resizing and compressing
 */
export async function optimizeImage(
  buffer: Buffer,
  options: OptimizeImageOptions = {},
): Promise<OptimizedImage> {
  const { maxSize = 80, quality = 90 } = options;

  const image = sharp(buffer);
  const metadata = await image.metadata();

  // Resize if needed (maintain aspect ratio)
  let processedImage = image.resize(maxSize, maxSize, {
    fit: "inside",
    withoutEnlargement: true,
  });

  // Optimize based on format
  if (metadata.format === "png") {
    processedImage = processedImage.png({
      quality,
      compressionLevel: 9,
      effort: 10,
    });
  } else if (metadata.format === "jpeg" || metadata.format === "jpg") {
    processedImage = processedImage.jpeg({
      quality,
      mozjpeg: true,
    });
  } else if (metadata.format === "webp") {
    processedImage = processedImage.webp({
      quality,
      effort: 6,
    });
  } else if (metadata.format === "svg") {
    // SVGs are already vector, return as-is
    const optimizedMetadata = await image.metadata();
    return {
      buffer,
      format: "svg",
      contentType: "image/svg+xml",
      width: optimizedMetadata.width || 0,
      height: optimizedMetadata.height || 0,
      originalSize: buffer.length,
      optimizedSize: buffer.length,
      savings: 0,
    };
  }

  const optimizedBuffer = await processedImage.toBuffer();
  const optimizedMetadata = await sharp(optimizedBuffer).metadata();

  const savings = buffer.length > 0 ? (1 - optimizedBuffer.length / buffer.length) * 100 : 0;

  const format = metadata.format || "png";
  const contentType = `image/${format}`;

  return {
    buffer: optimizedBuffer,
    format,
    contentType,
    width: optimizedMetadata.width || 0,
    height: optimizedMetadata.height || 0,
    originalSize: buffer.length,
    optimizedSize: optimizedBuffer.length,
    savings,
  };
}

/**
 * Optimize an image for site icons (80x80px max)
 */
export async function optimizeSiteIcon(buffer: Buffer): Promise<OptimizedImage> {
  return optimizeImage(buffer, { maxSize: 80, quality: 90 });
}

/**
 * Optimize an image for blog posts (keep original size, high quality compression)
 */
export async function optimizeWritingImage(buffer: Buffer): Promise<OptimizedImage> {
  return optimizeImage(buffer, { maxSize: 4000, quality: 90 });
}

/**
 * Complete image optimization workflow: download → optimize → upload to COS
 */
export async function processImage(
  imageUrl: string,
  options: OptimizeImageOptions = {},
): Promise<ImageProcessResult> {
  const storage = getCosStorage();

  try {
    // Download image
    const downloaded = await storage.download(imageUrl);
    if (!downloaded) {
      return {
        success: false,
        originalUrl: imageUrl,
        error: "Failed to download image",
      };
    }

    // Check if already optimized
    if (storage.isOptimizedImage(imageUrl)) {
      return {
        success: true,
        originalUrl: imageUrl,
        optimizedUrl: imageUrl,
        error: "Already optimized",
      };
    }

    // Optimize image
    const optimized = await optimizeImage(downloaded.buffer, options);

    // Upload to COS
    const uploadResult = await storage.uploadOptimizedImage(optimized.buffer, optimized.format);

    // Delete old image if from our bucket
    if (storage.isOurBucket(imageUrl)) {
      await storage.delete(imageUrl);
    }

    return {
      success: true,
      originalUrl: imageUrl,
      optimizedUrl: uploadResult.url,
      stats: {
        originalSize: downloaded.size,
        optimizedSize: optimized.optimizedSize,
        savings: optimized.savings,
        width: optimized.width,
        height: optimized.height,
      },
    };
  } catch (error) {
    console.error("[ImageProcessing] Error processing image:", error);
    return {
      success: false,
      originalUrl: imageUrl,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Check if URL is a Notion S3 or proxy URL that needs mirroring
 */
export function isNotionImage(url: string | undefined): boolean {
  if (!url) return false;
  return (
    url.includes("amazonaws.com") ||
    url.includes("notion-static.com") ||
    url.includes("www.notion.so/image")
  );
}

/**
 * Check if image needs optimization (Notion or COS image not yet optimized)
 */
export function needsOptimization(url: string | undefined): boolean {
  if (!url) return false;
  const storage = getCosStorage();
  // Already optimized in COS
  if (storage.isOptimizedImage(url)) return false;
  // Needs optimization if it's from Notion or our COS bucket
  return storage.isOurBucket(url) || isNotionImage(url);
}
