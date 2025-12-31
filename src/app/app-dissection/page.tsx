import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAppDissectionDatabaseItems, type NotionAppDissectionItem } from "@/lib/notion";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "App Dissection",
  description:
    "Breaking down the design details of well-crafted mobile apps. In-depth analysis of UI patterns, interactions, and user experience.",
  path: "/app-dissection",
});

export default async function AppDissectionIndex() {
  const items = await getAppDissectionDatabaseItems();
  console.log('获取到的数据',items)

  return (
    <div className="@container flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto grid w-full grid-cols-3 gap-1 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:p-8">
          {items.map((item) => (
            <AppDissectionItem key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppDissectionItem({ item }: { item: NotionAppDissectionItem }) {
  return (
    <Link
      href={`/app-dissection/${item.slug}`}
      className="group/app hover:bg-tertiary dark:hover:shadow-contrast dark:hover:bg-secondary relative flex flex-none flex-col items-center justify-center gap-3 overflow-hidden rounded-xl px-3 py-6"
    >
      {item.imageUrl ? (
        <Image
          width={48}
          height={48}
          layout="fixed"
          alt={item.title}
          className="border-secondary rounded-xl border shadow-xs object-cover"
          src={item.imageUrl}
        />
      ) : (
        <div
          className="border-secondary rounded-xl border shadow-xs"
          style={{ width: 48, height: 48, backgroundColor: item.tint }}
        />
      )}

      <div className="flex flex-col items-center text-center">
        <div className="text-primary text-sm font-medium">{item.title}</div>
        <div className="text-quaternary text-sm">
          {new Date(item.createdAt).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </Link>
  );
}
