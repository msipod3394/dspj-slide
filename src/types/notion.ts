// Notionの共通型定義
export interface NotionItem {
  id: string;
  object: string;
  properties: {
    タイトル: {
      title: Array<{
        plain_text: string;
      }>;
    };
    日付: {
      date: {
        start: string;
      };
    };
  };
  [key: string]: string | number | boolean | object | null | undefined;
}

export interface NotionBlock {
  id: string;
  type: string;
  paragraph?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  heading_1?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  heading_2?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  heading_3?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  bulleted_list_item?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  numbered_list_item?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  [key: string]: string | number | boolean | object | null | undefined;
}
