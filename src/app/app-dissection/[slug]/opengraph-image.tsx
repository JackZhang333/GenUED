import { getAppDissectionContentBySlug } from "@/lib/notion";
import { generateOGImage } from "@/lib/og-utils";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const content = await getAppDissectionContentBySlug(params.slug);

  if (!content) {
    // Fallback to generic title if post not found
    return generateOGImage({
      title: "App Dissection",
      url: "genued.com/app-dissection",
    });
  }

  return generateOGImage({
    title: `App Dissection / ${content.metadata.title}`,
    url: `genued.com/app-dissection/${params.slug}`,
  });
}
