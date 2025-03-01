import Link from "next/link";

interface ArticleHeaderProps {
  title: string;
  date: string;
}

export default function ArticleHeader({ title, date }: ArticleHeaderProps) {
  return (
    <>
      {/* 一覧に戻るボタン */}
      <Link
        href='/'
        className='inline-flex items-center mb-8 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 mr-2'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        一覧に戻る
      </Link>

      {/* 記事ヘッダー */}
      <div className='border-b pb-4 mb-6 dark:border-gray-700'>
        <h1 className='text-3xl font-bold mb-2'>{title}</h1>
        <p className='text-gray-500 dark:text-gray-400'>{date}</p>
      </div>
    </>
  );
}
