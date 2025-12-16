import { generateOGImage } from "@/lib/og-utils";

export const runtime = "nodejs";
export const alt = "App Dissection - Jack Chou";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return generateOGImage({
    title: "App Dissection",
    url: "genued.com/app-dissection",
  });
}
