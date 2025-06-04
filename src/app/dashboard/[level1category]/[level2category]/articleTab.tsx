import { ArticleInfo } from "@/lib/types";
import ArticleDetail from "./articleDetail";
import { AnimatePresence } from "motion/react";

interface ArticleTabProps {
  article: ArticleInfo;
  onSelect: (article: ArticleInfo) => void;
  isSelected: boolean;
}
const ArticleTab = ({ article, onSelect, isSelected }: ArticleTabProps) => {
  return (
    <div
      className="p-4 border-b border-gray-200 hover:bg-gray-50/20 transition-colors cursor-pointer"
      onClick={() => onSelect(article)}
    >
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="text-sm text-gray-400">{article.description}</p>
      <AnimatePresence>
        {isSelected && <ArticleDetail close={() => onSelect(article)} />}
      </AnimatePresence>
    </div>
  );
};

export default ArticleTab;
