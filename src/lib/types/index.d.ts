export interface Level2Category {
  name: string;
  href: string;
}

export interface ArticleInfo {
  title: string;
  description: string;
  image?: string;
  href: string;
}

export interface ArticleContent {
  headline: string;
  time: string;
  content: { isBold: boolean; text: string }[];
}
