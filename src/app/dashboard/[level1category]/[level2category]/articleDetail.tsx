import { useArticleContent } from "@/lib/api";
import { motion } from "motion/react";
import ArticleTextContent from "./articleTextContent";

interface ArticleDetailProps {
  href: string;
  close: () => void;
}

const ArticleDetail = ({ href, close }: ArticleDetailProps) => {
  const { data: articleContent, isLoading } = useArticleContent(href);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      {isLoading && <p>Loading...</p>}
      {articleContent && (
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-bold">{articleContent.headline}</h1>
          <p className="text-right">{articleContent.time}</p>
          <ArticleTextContent content={articleContent.content} />
        </div>
      )}
      <button
        className="cursor-pointer mt-4 px-4 py-2 bg-gray-200/20 rounded hover:bg-gray-300/20 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        close
      </button>
    </motion.div>
  );
};

export default ArticleDetail;
