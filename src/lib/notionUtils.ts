import { getDatabase, getPage, getBlocks } from "@/lib/notion";
import { NotionItem, NotionBlock } from "@/types/notion";

export async function fetchDatabaseItems(): Promise<NotionItem[]> {
  const databaseId = process.env.NOTION_DATABASE_ID || "";
  const results = await getDatabase(databaseId);
  return results as NotionItem[];
}

export async function fetchArticleData(
  id: string
): Promise<{ page: NotionItem; blocks: NotionBlock[] }> {
  const page = (await getPage(id)) as NotionItem;

  // 型変換を単純化
  const rawBlocks = await getBlocks(id);
  // @ts-expect-error - Notionの型定義と自前の型定義の差異を吸収
  const blocks: NotionBlock[] = rawBlocks;

  return { page, blocks };
}
