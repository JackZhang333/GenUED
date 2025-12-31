import Image from "next/image";

import { AppDissectionDock } from "@/components/AppDissectionDock";
import { renderBlocks } from "@/components/renderBlocks";
import { PageTitle } from "@/components/Typography";
import { FancySeparator } from "@/components/ui/FancySeparator";
import { NotionAppDissectionItem } from "@/lib/notion";
import type { ProcessedBlock } from "@/lib/notion/types";

interface Props {
  metadata: NotionAppDissectionItem;
  blocks: ProcessedBlock[];
  allItems: NotionAppDissectionItem[];
}

export function AppDissectionDetail({ metadata: post, blocks, allItems }: Props) {
  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
    console.log('post',post)
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-12 md:px-6 lg:px-8 lg:py-16 xl:py-20">
        {/* Header with icon and title */}
        <div className="flex flex-col gap-6">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              width={80}
              height={80}
              quality={100}
              alt={`${post.title} icon`}
              className="border-secondary rounded-2xl border shadow-xs object-cover"
            />
          ) : (
            <div
              className="border-secondary rounded-2xl border shadow-xs"
              style={{ width: 80, height: 80, backgroundColor: post.tint }}
            />
          )}
          <div className="flex flex-col gap-1">
            <PageTitle>{post.title}</PageTitle>
            <span className="text-tertiary">{date}</span>
          </div>
        </div>

        {/* Description */}
        <div className="prose-lg">
          <p>{post.description}</p>
        </div>

        {/* Notion Content Blocks */}
        <div className="flex flex-col gap-6">
          {renderBlocks(blocks)}
        </div>

        <FancySeparator />

        {/* macOS-style Dock Navigation */}
        <AppDissectionDock currentSlug={post.slug} items={allItems} />

        {/* Previous/Next Navigation */}
        <div className="hidden items-center justify-between gap-4">
          {/* Navigation items would need to be fetched separately */}
          <div className="flex-1" />
          <div className="flex-1" />
        </div>
      </div>
    </div>
  );
}
