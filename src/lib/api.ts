"use client";
import { useQuery } from "@tanstack/react-query";
import { ArticleInfo, Level2Category } from "./types";

// API 호출을 통해 BBC 뉴스의 Level 2 카테고리 목록을 가져오는 함수
const fetchLevel2Categories = async (
  category: string
): Promise<Level2Category[]> => {
  const res = await fetch(`/api/getLevel2Categories?category=${category}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const useLevel2Categories = (category: string) =>
  useQuery<Level2Category[]>({
    queryKey: ["level2Categories", category],
    queryFn: () => fetchLevel2Categories(category),
    staleTime: 5 * 60 * 1000, // 선택적으로 추가,
    enabled: !!category && category.length > 0, // category가 있을 때만 쿼리 실행
  });

// API 호출을 통해 BBC 뉴스의 특정 카테고리의 최신 기사 목록을 가져오는 함수
const fetchArticlesInfo = async (
  level1: string,
  level2: string
): Promise<ArticleInfo[]> => {
  const res = await fetch(`/api/getArticles?level1=${level1}&level2=${level2}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const useArticlesInfo = (level1: string, level2: string) =>
  useQuery<ArticleInfo[]>({
    queryKey: ["articlesInfo", level1, level2],
    queryFn: () => fetchArticlesInfo(level1, level2),
    staleTime: 5 * 60 * 1000, // 선택적으로 추가
    enabled: !!level1 && level1.length > 0 && !!level2 && level2.length > 0, // level1과 level2가 있을 때만 쿼리 실행
  });
