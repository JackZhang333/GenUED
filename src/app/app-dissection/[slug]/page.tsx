import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllAppDissectionItems, getAppDissectionContentBySlug } from "@/lib/notion";
import { createArticleJsonLd, createMetadata, truncateDescription } from "@/lib/metadata";

import { AppDissectionDetail } from "./components/AppDissectionDetail";

export async function generateStaticParams() {
  const items = await getAllAppDissectionItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const content = await getAppDissectionContentBySlug(params.slug);

  if (!content) {
    return {
      title: "App Dissection Not Found",
    };
  }

  const { metadata } = content;

  return createMetadata({
    title: `${metadata.title} - App Dissection`,
    description: truncateDescription(metadata.description),
    path: `/app-dissection/${metadata.slug}`,
    type: "article",
    publishedTime: metadata.createdAt,
  });
}

export default async function AppDissectionPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const [content, allItems] = await Promise.all([
    getAppDissectionContentBySlug(params.slug),
    getAllAppDissectionItems(),
  ]);

  if (!content) {
    notFound();
  }

  const { blocks, metadata } = content;

  // Generate JSON-LD structured data
  const articleJsonLd = createArticleJsonLd({
    title: `${metadata.title} - App Dissection`,
    description: metadata.description,
    path: `/app-dissection/${metadata.slug}`,
    publishedTime: metadata.createdAt,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <AppDissectionDetail metadata={metadata} blocks={blocks} allItems={allItems} />
    </>
  );
}
