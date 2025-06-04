import { motion } from "motion/react";

interface ArticleDetailProps {
  close: () => void;
}

const ArticleDetail = ({ close }: ArticleDetailProps) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col p-4 w-full">
        <h1>Detail Article</h1>
        <p>This is the detail view of an article.</p>
      </div>
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
