/**
 * @deprecated Use @/lib/storage (COS) instead
 * This module is kept for backward compatibility
 */

import { getCosStorage } from "@/lib/storage";

/**
 * Upload buffer to Tencent COS storage
 * Maintains the same interface as the old R2 function for compatibility
 */
export async function uploadBufferToR2(
  buffer: ArrayBuffer | Buffer,
  contentType: string,
): Promise<string> {
  const storage = getCosStorage();

  // Convert to Buffer if needed
  const bufferData = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);

  // Determine format from content type
  const format = contentType.includes("jpeg") || contentType.includes("jpg")
    ? "jpeg"
    : contentType.includes("png")
      ? "png"
      : contentType.includes("webp")
        ? "webp"
        : contentType.includes("svg")
          ? "svg"
          : "jpeg";

  const result = await storage.uploadOptimizedImage(bufferData, format);

  console.log(`Uploaded image to COS: ${result.url}`);

  return result.url;
}
