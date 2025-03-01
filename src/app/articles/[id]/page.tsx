import { fetchArticleData } from "@/lib/notionUtils";
import ArticleHeader from "@/components/ArticleHeader";
import NotionBlockRenderer from "@/components/NotionBlockRenderer";
import ErrorMessage from "@/components/ErrorMessage";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    // 記事データを取得
    const { page, blocks } = await fetchArticleData(id);

    // タイトルと日付を取得
    const title =
      page.properties.タイトル.title[0]?.plain_text || "タイトルなし";
    const date = page.properties.日付.date?.start || "日付なし";

    return (
      <div className='max-w-4xl mx-auto p-6'>
        <ArticleHeader title={title} date={date} />

        {/* 記事コンテンツ */}
        <article className='prose dark:prose-invert max-w-none'>
          {blocks.map((block) => (
            <div key={block.id}>
              <NotionBlockRenderer block={block} />
            </div>
          ))}
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <ErrorMessage />;
  }
}
