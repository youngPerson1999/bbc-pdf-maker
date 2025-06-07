import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { BBC_URL } from '@/lib/constants';
import extractArticleContent from '@/lib/util/extractArticleContent';

export async function GET(req: NextRequest) {
  const href = req.nextUrl.searchParams.get('href');
  if (!href) {
    return NextResponse.json(
      { error: 'Missing href parameter' },
      { status: 400 },
    );
  }

  try {
    // 예: https://www.bbc.com/news/war-in-ukraine/cgeg8ez54ndo
    const articleUrl = `${BBC_URL}${href}`;
    const response = await axios.get(articleUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      },
    });

    const articleContent = extractArticleContent(response.data);
    if (!articleContent) {
      return NextResponse.json(
        { error: 'Failed to extract article content' },
        { status: 500 },
      );
    }

    return NextResponse.json(articleContent);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch or parse article' },
      { status: 500 },
    );
  }
}
