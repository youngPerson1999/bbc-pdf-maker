import { ArticleInfoDto } from '@/api/generated/schemas';
import * as cheerio from 'cheerio';
const extractArticleInfo = (html: string): ArticleInfoDto[] => {
  const $ = cheerio.load(html);
  const result: ArticleInfoDto[] = [];

  const section = $('section[data-testid="alaska-section-outer"]');
  if (!section.length) {
    console.warn('No Latest updates section found');
    return result;
  }

  section.find('div[data-testid="liverpool-card"]').each((_, el) => {
    const card = $(el);

    const title = card.find('h2[data-testid="card-headline"]').text().trim();
    const description = card
      .find('p[data-testid="card-description"]')
      .text()
      .trim();

    // const imgTag = card.find("img");
    // let img = imgTag.attr("src") || "";

    // const dataSrc = imgTag.attr("data-src");
    // if (dataSrc && !dataSrc.includes("grey-placeholder")) {
    //   img = dataSrc;
    // }

    // const dataLazySrc = imgTag.attr("data-lazy-src");
    // if (dataLazySrc && !dataLazySrc.includes("grey-placeholder")) {
    //   img = dataLazySrc;
    // }

    // const srcset = imgTag.attr("srcset");
    // if (srcset) {
    //   const srcsetCandidates = srcset
    //     .split(",")
    //     .map((item) => item.trim().split(" ")[0])
    //     .filter((url) => !url.includes("grey-placeholder"));
    //   const firstSrc = srcsetCandidates[0];
    //   if (firstSrc) {
    //     img = firstSrc;
    //   }
    // }

    const href = card.find('a[data-testid="internal-link"]').attr('href') || '';

    if (title && href) {
      result.push({
        title,
        description,
        href,
      });
    }
  });

  return result;
};

export default extractArticleInfo;
