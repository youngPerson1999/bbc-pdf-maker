"use client";
import { useLevel2Categories } from "@/lib/api";
import { level1Categories } from "@/lib/constants";

const DashboardPage = () => {
  const { data } = useLevel2Categories("news"); // 예시로 "news" 카테고리 사용
  console.log("Level 2 Categories:", data);
  // level1Categories를 사용하여 대시보드에 표시
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Welcome to your dashboard!</p>
      {level1Categories.map((category) => (
        <div key={category} className="mt-4">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <p className="text-gray-600">Explore {category} categories.</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
