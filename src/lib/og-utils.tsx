import { ImageResponse } from "@vercel/og";
import path from "path"
import fs from "fs"
// OG Image dimensions
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;
export const OG_PADDING = 56;

// Colors (light mode only)
export const PRIMARY_COLOR = "#171717";
export const TERTIARY_COLOR = "#BFBFBF";

// Font sizes
export const TITLE_SIZE = 64;
export const URL_SIZE = 32;

// Avatar
export const AVATAR_SIZE = 100;



// Load avatar as base64
export async function loadAvatar(): Promise<string> {
  const avatarPath = path.join(process.cwd(),"public/img/avatar.jpg");
  const avatarBuffer = fs.readFileSync(avatarPath);
  const base64 = avatarBuffer.toString("base64");
  return `data:image/jpeg;base64,${base64}`;
}

interface OGImageProps {
  title: string;
  url: string;
}

/**
 * Truncate title for OG images to fit within specified number of lines
 * At 64px font size, ~150 characters fits comfortably in 3 lines
 */
export function truncateOGTitle(title: string, maxLines: number = 3): string {
  // Approximate characters per line at 64px font size on 1088px width
  const charsPerLine = 50;
  const maxLength = charsPerLine * maxLines;

  if (title.length <= maxLength) return title;

  const truncated = title.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0 ? `${truncated.slice(0, lastSpace)}...` : `${truncated}...`;
}

export async function generateOGImage({ title, url }: OGImageProps) {
  try {
    return new ImageResponse(
      <div
        style={{
          width: OG_WIDTH,
          height: OG_HEIGHT,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: OG_PADDING,
          backgroundColor: "white",
        }}
      >
        {/* Title and URL at the bottom */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: TITLE_SIZE,
              fontFamily: "Noto Sans",
              fontWeight: 700,
              color: PRIMARY_COLOR,
              lineHeight: 1.2,
              letterSpacing: "-0.12rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title.length > 80 ? title.slice(0, 80) + "..." : title}
          </div>
          <div
            style={{
              fontSize: URL_SIZE,
              fontFamily: "Noto Sans",
              fontWeight: 400,
              color: TERTIARY_COLOR,
            }}
          >
            genued.com
          </div>
        </div>
      </div>,
      {
        width: OG_WIDTH,
        height: OG_HEIGHT,
      },
    );
  } catch (error) {
    console.error(`[OG] Error generating image for "${title}":`, error);
    throw error;
  }
}
