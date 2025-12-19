import type {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { getAllBlocks } from "./blocks";
import { notion } from "./client";
import {
  type GoodWebsiteItem,
  hasProperties,
  type NotionAmaItem,
  type NotionAmaItemWithContent,
  type NotionDesignDetailsEpisodeItem,
  type NotionItem,
  type NotionListeningHistoryItem,
  type NotionSpeakingItem,
  type NotionStackItem,
  type ProcessedBlock,
} from "./types";

// Cache for database ID -> data source ID mapping
// const dataSourceIdCache = new Map<string, string>();

// async function getDataSourceId(databaseId: string): Promise<string> {
//   if (dataSourceIdCache.has(databaseId)) {
//     return dataSourceIdCache.get(databaseId)!;
//   }

//   const database = (await notion.databases.retrieve({
//     database_id: databaseId,
//   })) as DatabaseObjectResponse;

//   const dataSourceId = database.data_sources[0]?.id;
//   if (!dataSourceId) {
//     throw new Error(`No data source found for database ${databaseId}`);
//   }

//   dataSourceIdCache.set(databaseId, dataSourceId);
//   return dataSourceId;
// }

// ===== Generic Content Retrieval =====

export async function getFullContent(
  pageId: string,
): Promise<{ blocks: ProcessedBlock[]; metadata: NotionItem } | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });

    if (!hasProperties(page)) return null;

    const pageWithProps = page as PageObjectResponse;
    const properties = pageWithProps.properties as {
      Name?: { title: { plain_text: string }[] };
      Category?: { select: { name: string } | null };
      Status?: { select: { name: string } | null };
      Published?: { date: { start: string } | null };
      Source?: { url: string };
      Slug?: { rich_text: { plain_text: string }[] };
    };

    const metadata: NotionItem = {
      id: pageWithProps.id,
      title: properties.Name?.title[0]?.plain_text || "Untitled",
      category: properties.Category?.select?.name || "Uncategorized",
      status: properties.Status?.select?.name || "Draft",
      createdTime: pageWithProps.created_time,
      published: properties.Published?.date?.start || pageWithProps.created_time,
      source: properties.Source?.url?.replace("https://", ""),
      slug: properties.Slug?.rich_text[0]?.plain_text || "",
    };

    const blocks = await getAllBlocks(pageId);

    return { blocks, metadata };
  } catch (error) {
    console.error(`Error fetching full content for page ${pageId}:`, error);
    return null;
  }
}

// ===== Stack Database =====

export async function getStackDatabaseItems(): Promise<NotionStackItem[]> {
  try {
    const databaseId = process.env.NOTION_STACK_DATABASE_ID;
    if (!databaseId) return [];

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    });

    const items = response.results
      .map((page) => {
        if (!hasProperties(page)) return null;

        const pageWithProps = page as PageObjectResponse;

        const properties = pageWithProps.properties as {
          Name?: { title: { plain_text: string }[] };
          Slug?: { rich_text: { plain_text: string }[] };
          Description?: { rich_text: { plain_text: string }[] };
          Image?: { url: string };
          URL?: { url: string };
          Platforms?: { multi_select: { name: string }[] };
          Status?: { select: { name: string } | null };
          icon?: { files: { file?: { url: string }; external?: { url: string } }[] };
        };

        // Extract icon from property if available, otherwise from page object
        let icon: string | undefined = undefined;

        // 1. Check "icon" property (type: files)
        const iconProperty = properties.icon?.files?.[0];
        if (iconProperty) {
          icon = iconProperty.file?.url || iconProperty.external?.url;
        }

        // 2. Fallback to page-level icon
        if (!icon) {
          if (pageWithProps.icon) {
            if (pageWithProps.icon.type === "external") {
              icon = pageWithProps.icon.external.url;
            } else if (pageWithProps.icon.type === "emoji") {
              icon = pageWithProps.icon.emoji;
            } else if (
              pageWithProps.icon.type === ("file" as any) ||
              pageWithProps.icon.type === ("files" as any)
            ) {
              icon =
                (pageWithProps.icon as any).file?.url ||
                (pageWithProps.icon as any).files?.[0]?.file?.url;
            }
          }
        }

        return {
          id: pageWithProps.id,
          name: properties.Name?.title[0]?.plain_text || "Untitled",
          slug: properties.Slug?.rich_text[0]?.plain_text || "",
          description: properties.Description?.rich_text[0]?.plain_text || undefined,
          image: properties.Image?.url || undefined,
          icon,
          url: properties.URL?.url || undefined,
          platforms: properties.Platforms?.multi_select.map((p) => p.name) || [],
          status: properties.Status?.select?.name || undefined,
        } as NotionStackItem;
      })
      .filter((item): item is NotionStackItem => item !== null);

    return items;
  } catch (error) {
    console.error("Error fetching stack items:", error);
    return [];
  }
}

// ===== Good Websites Database =====

export async function getGoodWebsitesDatabaseItems(): Promise<GoodWebsiteItem[]> {
  try {
    const databaseId = process.env.NOTION_GOOD_WEBSITES_DATABASE_ID;
    if (!databaseId) return [];

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    });

    const items = response.results
      .map((page) => {
        if (!hasProperties(page)) return null;

        const pageWithProps = page as PageObjectResponse;

        const properties = pageWithProps.properties as {
          Name?: { title: { plain_text: string }[] };
          URL?: { url: string };
          X?: { url: string };
          Tags?: { multi_select: { name: string }[] };
          icon?: { files: { file?: { url: string }; external?: { url: string } }[] };
        };

        // Extract icon from property if available, otherwise from page object
        let icon: string | undefined = undefined;

        // 1. Check "icon" property (type: files)
        const iconProperty = properties.icon?.files?.[0];
        if (iconProperty) {
          icon = iconProperty.file?.url || iconProperty.external?.url;
        }

        // 2. Fallback to page-level icon
        if (!icon) {
          if (pageWithProps.icon) {
            if (pageWithProps.icon.type === "external") {
              icon = pageWithProps.icon.external.url;
            } else if (pageWithProps.icon.type === "emoji") {
              icon = pageWithProps.icon.emoji;
            } else if (
              pageWithProps.icon.type === ("file" as any) ||
              pageWithProps.icon.type === ("files" as any)
            ) {
              icon =
                (pageWithProps.icon as any).file?.url ||
                (pageWithProps.icon as any).files?.[0]?.file?.url;
            }
          }
        }

        return {
          id: pageWithProps.id,
          name: properties.Name?.title[0]?.plain_text || "Untitled",
          url: properties.URL?.url || undefined,
          x: properties.X?.url || undefined,
          icon,
          tags: properties.Tags?.multi_select.map((t) => t.name) || [],
        } as GoodWebsiteItem;
      })
      .filter((item): item is GoodWebsiteItem => item !== null);

    return items;
  } catch (error) {
    console.error("Error fetching good website items:", error);
    return [];
  }
}

// ===== Writing Database =====

export async function getWritingDatabaseItems(
  cursor?: string,
  pageSize: number = 20,
): Promise<{ items: NotionItem[]; nextCursor: string | null }> {
  try {
    const databaseId = process.env.NOTION_WRITING_DATABASE_ID;
    if (!databaseId) return { items: [], nextCursor: null };

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      ...(cursor ? { start_cursor: cursor } : {}),
      filter: {
        property: "Published",
        date: {
          is_not_empty: true,
        },
      },
      sorts: [
        {
          property: "Published",
          direction: "descending",
        },
      ],
    });

    const items = response.results.map((page) => {
      if (!hasProperties(page)) return null;

      const pageWithProps = page as PageObjectResponse;
      const properties = pageWithProps.properties as {
        Name?: { title: { plain_text: string }[] };
        Published?: { date: { start: string } | null };
        URL?: { url: string };
        Slug?: { rich_text: { plain_text: string }[] };
        Excerpt?: { rich_text: { plain_text: string }[] };
        FeatureImage?: { url: string };
      };

      return {
        id: pageWithProps.id,
        title: properties.Name?.title[0]?.plain_text || "Untitled",
        category: "Writing",
        status: "Published",
        createdTime: pageWithProps.created_time,
        published: properties.Published?.date?.start || pageWithProps.created_time,
        source: properties.URL?.url?.replace("https://", ""),
        slug: properties.Slug?.rich_text[0]?.plain_text || "",
        excerpt: properties.Excerpt?.rich_text[0]?.plain_text || "",
        featureImage: properties.FeatureImage?.url || undefined,
      } as NotionItem;
    });

    return {
      items: items.filter((item): item is NotionItem => item !== null),
      nextCursor: response.has_more ? (response.next_cursor as string) : null,
    };
  } catch (error) {
    console.error("Error fetching writing items:", error);
    return { items: [], nextCursor: null };
  }
}

export async function getWritingPostContent(
  pageId: string,
): Promise<{ blocks: ProcessedBlock[]; metadata: NotionItem } | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });

    if (!hasProperties(page)) return null;

    const pageWithProps = page as PageObjectResponse;
    const properties = pageWithProps.properties as {
      Name?: { title: { plain_text: string }[] };
      Published?: { date: { start: string } | null };
      URL?: { url: string };
      Slug?: { rich_text: { plain_text: string }[] };
      Excerpt?: { rich_text: { plain_text: string }[] };
      FeatureImage?: { url: string };
    };

    const metadata: NotionItem = {
      id: pageWithProps.id,
      title: properties.Name?.title[0]?.plain_text || "Untitled",
      category: "Writing",
      status: "Published",
      createdTime: pageWithProps.created_time,
      published: properties.Published?.date?.start || pageWithProps.created_time,
      source: properties.URL?.url?.replace("https://", ""),
      slug: properties.Slug?.rich_text[0]?.plain_text || "",
      excerpt: properties.Excerpt?.rich_text[0]?.plain_text || "",
      featureImage: properties.FeatureImage?.url || undefined,
    };

    const blocks = await getAllBlocks(pageId);

    return { blocks, metadata };
  } catch (error) {
    console.error(`Error fetching writing post content for page ${pageId}:`, error);
    return null;
  }
}

export async function getWritingPostContentBySlug(
  slug: string,
): Promise<{ blocks: ProcessedBlock[]; metadata: NotionItem } | null> {
  try {
    const databaseId = process.env.NOTION_WRITING_DATABASE_ID;
    if (!databaseId) return null;

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      console.log(`No writing post found with slug ${slug}`);
      return null;
    }

    const page = response.results[0];
    if (!hasProperties(page)) return null;
    console.log("Found page with slug " + slug + ": " + page.id);
    return getWritingPostContent(page.id);
  } catch (error) {
    console.error(`Error fetching writing post content for slug ${slug}:`, error);
    return null;
  }
}

// ===== AMA Database =====

export async function getAmaItemContent(pageId: string): Promise<NotionAmaItemWithContent | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });

    if (!hasProperties(page)) return null;

    const pageWithProps = page as PageObjectResponse;
    const properties = pageWithProps.properties as {
      Name?: { title: { plain_text: string }[] };
      Description?: { rich_text: { plain_text: string }[] };
      Status?: { select: { name: string } | null };
      "Answered At"?: { date: { start: string } | null };
      "Created At"?: { date: { start: string } | null };
    };

    const item: NotionAmaItem = {
      id: pageWithProps.id,
      title: properties.Name?.title[0]?.plain_text || "Untitled",
      description: properties.Description?.rich_text[0]?.plain_text || null,
      status: properties.Status?.select?.name || "Unanswered",
      answeredAt: properties["Answered At"]?.date?.start || pageWithProps.created_time,
      createdAt: properties["Created At"]?.date?.start || pageWithProps.created_time,
    };

    const blocks = await getAllBlocks(pageId);

    return {
      ...item,
      blocks,
    };
  } catch (error) {
    console.error(`Error fetching AMA item content for page ${pageId}:`, error);
    return null;
  }
}

export async function getAmaDatabaseItems(
  cursor?: string,
  pageSize: number = 20,
): Promise<{ items: NotionAmaItem[]; nextCursor: string | null }> {
  try {
    const databaseId = process.env.NOTION_AMA_DATABASE_ID;
    if (!databaseId) return { items: [], nextCursor: null };

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      ...(cursor ? { start_cursor: cursor } : {}),
      filter: {
        property: "Status",
        select: {
          equals: "Answered",
        },
      },
      sorts: [
        {
          property: "Answered At",
          direction: "descending",
        },
      ],
    });

    const items = response.results
      .map((page) => {
        if (!hasProperties(page)) return null;

        const pageWithProps = page as PageObjectResponse;
        const properties = pageWithProps.properties as {
          Name?: { title: { plain_text: string }[] };
          Description?: { rich_text: { plain_text: string }[] };
          Status?: { select: { name: string } | null };
          "Answered At"?: { date: { start: string } | null };
          "Created At"?: { date: { start: string } | null };
        };

        const basicItem: NotionAmaItem = {
          id: pageWithProps.id,
          title: properties.Name?.title[0]?.plain_text || "Untitled",
          description: properties.Description?.rich_text[0]?.plain_text || "",
          status: properties.Status?.select?.name || "Unanswered",
          answeredAt: properties["Answered At"]?.date?.start || pageWithProps.created_time,
          createdAt: properties["Created At"]?.date?.start || pageWithProps.created_time,
        };

        return basicItem;
      })
      .filter((item): item is NotionAmaItem => item !== null);

    return {
      items,
      nextCursor: response.has_more ? (response.next_cursor as string) : null,
    };
  } catch (error) {
    console.error("Error fetching AMA items:", error);
    return { items: [], nextCursor: null };
  }
}

// ===== Listening History Database =====

export async function getListeningHistoryDatabaseItems(
  cursor?: string,
  pageSize: number = 20,
): Promise<{ items: NotionListeningHistoryItem[]; nextCursor: string | null }> {
  try {
    const databaseId = process.env.NOTION_MUSIC_DATABASE_ID;
    if (!databaseId) return { items: [], nextCursor: null };

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      ...(cursor ? { start_cursor: cursor } : {}),
      sorts: [
        {
          property: "Played At",
          direction: "descending",
        },
      ],
    });

    const items = response.results
      .map((page) => {
        if (!hasProperties(page)) return null;

        const pageWithIcon = page as PageObjectResponse;
        const properties = pageWithIcon.properties as {
          Name?: { title: { plain_text: string }[] };
          Artist?: { rich_text: { plain_text: string }[] };
          Album?: { rich_text: { plain_text: string }[] };
          "Spotify URL"?: { url: string };
          "Played At"?: { date: { start: string } | null };
          icon?: { files: { file?: { url: string }; external?: { url: string } }[] };
        };

        // Extract icon from property if available, otherwise from page object
        let icon: string | undefined = undefined;

        // 1. Check "icon" property (type: files)
        const iconProperty = properties.icon?.files?.[0];
        if (iconProperty) {
          icon = iconProperty.file?.url || iconProperty.external?.url;
        }

        // 2. Fallback to page-level icon
        if (!icon) {
          if (pageWithIcon.icon) {
            if (pageWithIcon.icon.type === "external") {
              icon = pageWithIcon.icon.external.url;
            } else if (pageWithIcon.icon.type === "emoji") {
              icon = pageWithIcon.icon.emoji;
            } else if (pageWithIcon.icon.type === ("file" as any) || pageWithIcon.icon.type === ("files" as any)) {
              icon = (pageWithIcon.icon as any).file?.url || (pageWithIcon.icon as any).files?.[0]?.file?.url;
            }
          }
        }

        return {
          id: pageWithIcon.id,
          name: properties.Name?.title[0]?.plain_text || "Untitled",
          artist: properties.Artist?.rich_text[0]?.plain_text || "",
          album: properties.Album?.rich_text[0]?.plain_text || "",
          url: properties["Spotify URL"]?.url || undefined,
          playedAt: properties["Played At"]?.date?.start || pageWithIcon.created_time,
          image: icon,
        } as NotionListeningHistoryItem;
      })
      .filter((item): item is NotionListeningHistoryItem => item !== null);

    return {
      items,
      nextCursor: response.has_more ? (response.next_cursor as string) : null,
    };
  } catch (error) {
    console.error("Error fetching listening history items:", error);
    return { items: [], nextCursor: null };
  }
}

// ===== Design Details Episodes Database =====

export async function getDesignDetailsEpisodeDatabaseItems(
  cursor?: string,
  pageSize: number = 20,
): Promise<{ items: NotionDesignDetailsEpisodeItem[]; nextCursor: string | null }> {
  try {
    const databaseId = process.env.NOTION_DESIGN_DETAILS_EPISODES_DATABASE_ID;
    if (!databaseId) return { items: [], nextCursor: null };

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      ...(cursor ? { start_cursor: cursor } : {}),
      sorts: [
        {
          property: "Episode Number",
          direction: "descending",
        },
      ],
    });

    const items = response.results
      .map((page) => {
        if (!hasProperties(page)) return null;

        const pageWithProps = page as PageObjectResponse;
        const properties = pageWithProps.properties as {
          Name?: { title: { plain_text: string }[] };
          Slug?: { rich_text: { plain_text: string }[] };
          Description?: { rich_text: { plain_text: string }[] };
          "Episode Number"?: { number: number };
          "Published Date"?: { date: { start: string } | null };
          "Image URL"?: { url: string };
          "Audio URL (S3)"?: { url: string };
        };

        return {
          id: pageWithProps.id,
          title: properties.Name?.title[0]?.plain_text || "Untitled",
          slug: properties.Slug?.rich_text[0]?.plain_text || "",
          description: properties.Description?.rich_text[0]?.plain_text || undefined,
          episodeNumber: properties["Episode Number"]?.number || undefined,
          publishedDate: properties["Published Date"]?.date?.start || undefined,
          imageUrl: properties["Image URL"]?.url || undefined,
          audioUrl: properties["Audio URL (S3)"]?.url || undefined,
        } as NotionDesignDetailsEpisodeItem;
      })
      .filter((item): item is NotionDesignDetailsEpisodeItem => item !== null);

    return {
      items,
      nextCursor: response.has_more ? (response.next_cursor as string) : null,
    };
  } catch (error) {
    console.error("Error fetching design details episodes:", error);
    return { items: [], nextCursor: null };
  }
}

// ===== Speaking Database =====

export async function getSpeakingItems(): Promise<NotionSpeakingItem[]> {
  try {
    const databaseId = process.env.NOTION_SPEAKING_DATABASE_ID;
    if (!databaseId) return [];

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    const items = response.results
      .map((page) => {
        if (!hasProperties(page)) return null;

        const pageWithProps = page as PageObjectResponse;
        const properties = pageWithProps.properties as {
          Name?: { title: { plain_text: string }[] };
          Date?: { date: { start: string } | null };
          URL?: { url: string };
        };

        return {
          id: pageWithProps.id,
          title: properties.Name?.title[0]?.plain_text || "Untitled",
          date: properties.Date?.date?.start || pageWithProps.created_time,
          href: properties.URL?.url || undefined,
        } as NotionSpeakingItem;
      })
      .filter((item): item is NotionSpeakingItem => item !== null);

    return items;
  } catch (error) {
    console.error("Error fetching speaking items:", error);
    return [];
  }
}
