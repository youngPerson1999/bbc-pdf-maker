'use client';
import { useArticlesInfo } from '@/lib/api';
import { useParams } from 'next/navigation';
import ArticleTab from './articleTab';
import { useState } from 'react';
import { ArticleInfo } from '@/lib/types';

const ArticlesPage = () => {
  const { level1category, level2category } = useParams<{
    level1category: string;
    level2category: string;
  }>();
  const [selectedArticle, setSelectedArticle] = useState<ArticleInfo>();
  const { data, isLoading, error } = useArticlesInfo(
    level1category,
    level2category,
  );
  const handleArticleClick = (article: ArticleInfo) => {
    if (!selectedArticle || selectedArticle.title !== article.title) {
      setSelectedArticle(article);
    } else {
      setSelectedArticle(undefined);
    }
  };
  return (
    <div className="p-4 flex flex-col w-full">
      <h1 className="text-2xl font-bold mb-4">
        Articles for {level1category} - {level2category}
      </h1>
      <div>
        {isLoading && <p>Loading articles...</p>}
        {error && (
          <p className="text-red-500">Error: {(error as Error).message}</p>
        )}
        {data &&
          data.map((article) => (
            <ArticleTab
              key={`article-${level1category}-${level2category}-${article.title}`}
              article={article}
              onSelect={handleArticleClick}
              isSelected={
                selectedArticle !== undefined &&
                selectedArticle.title === article.title
              }
            />
          ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
