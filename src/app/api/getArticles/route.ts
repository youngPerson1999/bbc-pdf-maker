import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BBC_URL } from "@/lib/constants";
import { extractArticleInfo } from "@/lib/util";

export async function GET(req: NextRequest) {
  const level1 = req.nextUrl.searchParams.get("level1");
  const level2 = req.nextUrl.searchParams.get("level2");
  if (!level1 || !level2) {
    return NextResponse.json(
      { error: "Missing level1 or level2 parameter" },
      { status: 400 }
    );
  }

  try {
    const fullUrl = `${BBC_URL}/${level1}/${level2}`;
    const response = await axios.get(fullUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
    });

    const updates = extractArticleInfo(response.data);
    return NextResponse.json(updates);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch latest updates" },
      { status: 500 }
    );
  }
}
