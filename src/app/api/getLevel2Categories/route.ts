import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Level2Category } from "@/lib/types";
import { extractLevel2Categories } from "@/lib/util";

// BBC 뉴스 메인 URL (크롤링용)
const BBC_URL = "https://www.bbc.com";

/**
 * GET /api/getLevel2Categories?category=news
 */
export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  if (!category) {
    return NextResponse.json(
      { error: "Missing category parameter" },
      { status: 400 }
    );
  }

  try {
    // axios로 BBC 뉴스 페이지 가져오기
    const response = await axios.get(`${BBC_URL}/${category}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
    });
    const html = response.data;

    // cheerio로 레벨2 카테고리 파싱
    const level2Categories: Level2Category[] = extractLevel2Categories(html);

    return NextResponse.json(level2Categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
