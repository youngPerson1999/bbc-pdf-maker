"use client";
import { useQuery } from "@tanstack/react-query";
import { Level2Category } from "./types";

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
    staleTime: 5 * 60 * 1000, // 선택적으로 추가
  });
