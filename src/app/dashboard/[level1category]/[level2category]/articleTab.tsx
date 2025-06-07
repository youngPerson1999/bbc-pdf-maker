import { AnimatePresence } from 'motion/react';
import ArticleDetail from './articleDetail';
import { ArticleInfoDto } from '@/api/generated/schemas';

interface ArticleTabProps {
  article: ArticleInfoDto;
  onSelect: (article: ArticleInfoDto) => void;
  isSelected: boolean;
}
const ArticleTab = ({ article, onSelect, isSelected }: ArticleTabProps) => {
  return (
    <div className="border-b border-gray-200 ">
      <div
        className="p-4 hover:bg-gray-50/20 transition-colors cursor-pointer"
        onClick={() => onSelect(article)}
      >
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-sm text-gray-400">{article.description}</p>
      </div>
      <AnimatePresence>
        {isSelected && (
          <ArticleDetail
            articleInfo={article}
            close={() => onSelect(article)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArticleTab;
