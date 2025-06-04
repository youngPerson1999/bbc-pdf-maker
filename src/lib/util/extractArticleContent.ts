import * as cheerio from "cheerio";
import { ArticleContent } from "@/lib/types";

const extractArticleContent = (html: string): ArticleContent | null => {
  const $ = cheerio.load(html);

  const headline = $('div[data-component="headline-block"] h1').text().trim();
  if (!headline) {
    console.warn("Headline not found");
    return null;
  }

  const time = $('div[data-component="byline-block"] time').text().trim();
  if (!time) {
    console.warn("Time not found");
    return null;
  }

  const content: { isBold: boolean; text: string }[] = [];

  $('div[data-component="text-block"] p').each((_, el) => {
    const paragraph = $(el);

    paragraph.contents().each((_, node) => {
      if (node.type === "text") {
        const text = $(node).text().trim();
        if (text) {
          content.push({ isBold: false, text });
        }
      } else if (node.type === "tag" && node.name === "b") {
        const boldText = $(node).text().trim();
        if (boldText) {
          content.push({ isBold: true, text: boldText });
        }
      }
    });
  });

  return {
    headline,
    time,
    content,
  };
};

export default extractArticleContent;
