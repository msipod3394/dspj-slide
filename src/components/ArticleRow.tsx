"use client";

import { useRouter } from "next/navigation";

interface ArticleRowProps {
  id: string;
  title: string;
  date: string;
}

export default function ArticleRow({ id, title, date }: ArticleRowProps) {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/articles/${id}`);
  };

  return (
    <tr
      onClick={handleRowClick}
      className='hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'
    >
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'>
        {title}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>
        {date}
      </td>
    </tr>
  );
}
