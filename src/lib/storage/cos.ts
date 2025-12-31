/**
 * Tencent COS (Cloud Object Storage) abstraction layer
 * Provides unified interface for image storage operations
 */

import COS from "cos-nodejs-sdk-v5";
import crypto from "crypto";

export interface StorageConfig {
  secretId: string;
  secretKey: string;
  bucket: string;
  region: string;
  publicUrl?: string;
}

export interface UploadResult {
  url: string;
  key: string;
  size: number;
  hash: string;
}

export interface DownloadResult {
  buffer: Buffer;
  contentType: string;
  size: number;
}

export class COSStorage {
  private cos: COS;
  private bucket: string;
  private region: string;
  private publicUrl: string;

  constructor(config: StorageConfig) {
    this.cos = new COS({
      SecretId: config.secretId,
      SecretKey: config.secretKey,
    });
    this.bucket = config.bucket;
    this.region = config.region;
    this.publicUrl = config.publicUrl || `https://${config.bucket}.cos.${config.region}.myqcloud.com`;
  }

  /**
   * Parse COS URL to extract bucket, region, and key
   */
  private parseCosUrl(url: string): { bucket: string; region: string; key: string } | null {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;
      const parts = hostname.split(".");
      const bucketName = parts[0];
      const regionName = parts[2];
      const key = urlObj.pathname.slice(1);
      return { bucket: bucketName, region: regionName, key };
    } catch {
      return null;
    }
  }

  /**
   * Download file from COS or HTTP/HTTPS URL
   */
  async download(url: string): Promise<DownloadResult | null> {
    try {
      // Check if it's a COS URL
      if (url.includes(".myqcloud.com")) {
        const parsed = this.parseCosUrl(url);
        if (!parsed) return null;

        const data = await this.getObject(parsed.key, parsed.bucket, parsed.region);
        if (!data) return null;

        return {
          buffer: data as Buffer,
          contentType: this.getContentType(parsed.key),
          size: (data as Buffer).length,
        };
      }

      // Handle relative URLs
      if (!url.startsWith("http")) {
        url = `https://${url}`;
      }

      // Download from HTTP URL
      const response = await fetch(url);
      if (!response.ok) return null;
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return {
        buffer,
        contentType: response.headers.get("content-type") || "image/jpeg",
        size: buffer.length,
      };
    } catch (error) {
      console.error(`[COS] Error downloading ${url}:`, error);
      return null;
    }
  }

  /**
   * Upload buffer to COS with optimization path structure
   */
  async upload(
    buffer: Buffer,
    path: string,
    contentType?: string,
  ): Promise<UploadResult> {
    const hash = crypto.createHash("sha256").update(buffer).digest("hex");
    const extension = this.getExtension(contentType || this.getContentType(path));
    const key = `${path}/${hash}${extension}`;

    const resolvedContentType = contentType || this.getContentType(key);

    return new Promise((resolve, reject) => {
      this.cos.putObject(
        {
          Bucket: this.bucket,
          Region: this.region,
          Key: key,
          Body: buffer,
          ContentType: resolvedContentType,
          ACL: "public-read",
          Headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        },
        (err, data) => {
          if (err) return reject(err);
          resolve({
            url: `${this.publicUrl}/${key}`,
            key,
            size: buffer.length,
            hash,
          });
        },
      );
    });
  }

  /**
   * Upload image to notion-images path (for optimized images)
   */
  async uploadOptimizedImage(buffer: Buffer, format: string): Promise<UploadResult> {
    const extension = format === "svg" ? ".svg" : `.${format}`;
    const hash = crypto.createHash("sha256").update(buffer).digest("hex");
    const key = `notion-images/${hash}${extension}`;
    const contentType = `image/${format === "svg" ? "svg+xml" : format}`;

    return new Promise((resolve, reject) => {
      this.cos.putObject(
        {
          Bucket: this.bucket,
          Region: this.region,
          Key: key,
          Body: buffer,
          ContentType: contentType,
          ACL: "public-read",
          Headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        },
        (err, data) => {
          if (err) return reject(err);
          resolve({
            url: `${this.publicUrl}/${key}`,
            key,
            size: buffer.length,
            hash,
          });
        },
      );
    });
  }

  /**
   * Delete object from COS
   */
  async delete(url: string): Promise<boolean> {
    try {
      const parsed = this.parseCosUrl(url);
      if (!parsed || !url.startsWith(this.publicUrl)) return false;

      const key = url.replace(`${this.publicUrl}/`, "");

      await new Promise<void>((resolve, reject) => {
        this.cos.deleteObject(
          {
            Bucket: this.bucket,
            Region: this.region,
            Key: key,
          },
          (err) => {
            if (err) return reject(err);
            resolve();
          },
        );
      });

      return true;
    } catch (error) {
      console.error("[COS] Error deleting:", error);
      return false;
    }
  }

  /**
   * Get object from COS
   */
  private getObject(key: string, bucket?: string, region?: string): Promise<Buffer | null> {
    return new Promise((resolve, reject) => {
      this.cos.getObject(
        {
          Bucket: bucket || this.bucket,
          Region: region || this.region,
          Key: key,
        },
        (err, data) => {
          if (err) return resolve(null);
          resolve(data.Body as Buffer);
        },
      );
    });
  }

  /**
   * Check if URL is from our COS bucket
   */
  isOurBucket(url: string): boolean {
    return url.startsWith(this.publicUrl) || url.includes(".myqcloud.com");
  }

  /**
   * Check if URL is an already optimized image (has hash in path)
   */
  isOptimizedImage(url: string): boolean {
    return (
      url.startsWith(`${this.publicUrl}/notion-images/`) &&
      /[a-f0-9]{64}/.test(url)
    );
  }

  /**
   * Get content type from file extension
   */
  private getContentType(path: string): string {
    const ext = path.split(".").pop()?.toLowerCase();
    const types: Record<string, string> = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      webp: "image/webp",
      svg: "image/svg+xml",
      pdf: "application/pdf",
    };
    return types[ext || ""] || "application/octet-stream";
  }

  /**
   * Get extension from content type
   */
  private getExtension(contentType: string): string {
    const types: Record<string, string> = {
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
      "image/webp": ".webp",
      "image/svg+xml": ".svg",
      "application/pdf": ".pdf",
    };
    return types[contentType] || ".jpg";
  }

  /**
   * Get the public URL for a key
   */
  getPublicUrl(key: string): string {
    return `${this.publicUrl}/${key}`;
  }
}

/**
 * Create a singleton COS storage instance from environment variables
 */
let cosInstance: COSStorage | null = null;

export function getCosStorage(): COSStorage {
  if (!cosInstance) {
    const bucket = process.env.COS_BUCKET;
    const region = process.env.COS_REGION;
    const secretId = process.env.COS_SECRET_ID;
    const secretKey = process.env.COS_SECRET_KEY;
    const publicUrl = process.env.COS_PUBLIC_URL;

    if (!bucket || !region || !secretId || !secretKey) {
      throw new Error(
        "Missing required environment variables: COS_BUCKET, COS_REGION, COS_SECRET_ID, COS_SECRET_KEY",
      );
    }

    cosInstance = new COSStorage({
      secretId,
      secretKey,
      bucket,
      region,
      publicUrl,
    });
  }

  return cosInstance;
}
