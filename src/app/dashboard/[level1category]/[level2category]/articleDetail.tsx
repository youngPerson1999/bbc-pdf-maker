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
    >
      {isLoading && <p className="p-4">Loading...</p>}
      {articleContent && (
        <div className="flex flex-col p-4 w-full">
          <h1 className="text-2xl font-bold">{articleContent.headline}</h1>
          <p className="text-right">{articleContent.time}</p>
          <ArticleTextContent content={articleContent.content} />
        </div>
      )}
      <button
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
