import { NotionItem } from "@/types/notion";
import ArticleRow from "./ArticleRow";

interface ArticleListProps {
  articles: NotionItem[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className='w-full max-w-4xl'>
      <h2 className='text-2xl font-bold mb-4'>記事一覧</h2>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
            <thead className='bg-gray-50 dark:bg-gray-700'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                  タイトル
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                  日付
                </th>
              </tr>
            </thead>
            <tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>
              {articles.map((item) => (
                <ArticleRow
                  key={item.id}
                  id={item.id}
                  title={
                    item.properties.タイトル.title[0]?.plain_text ||
                    "タイトルなし"
                  }
                  date={item.properties.日付.date?.start || "日付なし"}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
