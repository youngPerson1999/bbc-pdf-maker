import * as cheerio from "cheerio";
import { Level2Category } from "@/lib/types";

/**
 * BBC 뉴스의 level2Categories를 추출
 * @param html 전체 HTML 문자열
 * @returns Level2Category[]
 */
const extractLevel2Categories = (html: string): Level2Category[] => {
  const $ = cheerio.load(html);
  const result: Level2Category[] = [];

  // level2-navigation-container 선택
  const container = $('nav[data-testid="level2-navigation-container"]');

  if (!container.length) {
    console.warn(`No container found for level2-navigation-container`);
    return result;
  }

  // nav > ul > li > div > a[data-testid="subNavigationLink"]
  container
    .find('nav ul li div a[data-testid="subNavigationLink"]')
    .each((_, element) => {
      const href = $(element).attr("href") || "";
      const name = $(element).text().trim();

      if (href && name) {
        result.push({ name, href });
      }
    });

  return result;
};

export default extractLevel2Categories;
