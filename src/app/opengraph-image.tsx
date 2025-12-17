import { generateOGImage } from "@/lib/og-utils";

export const runtime = "nodejs";
export const alt = "Johnny Chou";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return generateOGImage({
    title: "Johnny Chou",
    url: "genued.com",
  });
}
