import { NotionBlock } from "@/types/notion";

interface NotionBlockRendererProps {
  block: NotionBlock;
}

export default function NotionBlockRenderer({
  block,
}: NotionBlockRendererProps) {
  const { type } = block;

  switch (type) {
    case "paragraph":
      return (
        <p className='my-4'>
          {block.paragraph?.rich_text.map((text, index) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </p>
      );
    case "heading_1":
      return (
        <h1 className='text-3xl font-bold my-6'>
          {block.heading_1?.rich_text.map((text, index) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h1>
      );
    case "heading_2":
      return (
        <h2 className='text-2xl font-bold my-5'>
          {block.heading_2?.rich_text.map((text, index) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h2>
      );
    case "heading_3":
      return (
        <h3 className='text-xl font-bold my-4'>
          {block.heading_3?.rich_text.map((text, index) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li className='ml-6 list-disc my-2'>
          {block.bulleted_list_item?.rich_text.map((text, index) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </li>
      );
    case "numbered_list_item":
      return (
        <li className='ml-6 list-decimal my-2'>
          {block.numbered_list_item?.rich_text.map((text, index) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </li>
      );
    default:
      return (
        <div className='text-gray-500 my-4'>
          {`未サポートのブロックタイプ: ${type}`}
        </div>
      );
  }
}
