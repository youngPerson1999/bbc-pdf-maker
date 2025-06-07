import { useArticleContent } from '@/lib/api';
import { motion } from 'motion/react';
import ArticleTextContent from './articleTextContent';
import ArticleFooter from './articleFooter';
import { scrapPost, useScrapPost } from '@/api/generated/scrap';
import { ArticleInfoDto } from '@/api/generated/schemas';

interface ArticleDetailProps {
  articleInfo: ArticleInfoDto;
  close: () => void;
}

const ArticleDetail = ({ articleInfo, close }: ArticleDetailProps) => {
  const { data: articleContent, isLoading } = useArticleContent(
    articleInfo.href,
  );
  const onScrapPost = useScrapPost();
  const handleSave = async () => {
    if (!articleContent) {
      console.error('No article content available to save.');
      return;
    }
    try {
      console.log('Saving article:', articleContent, articleInfo);
      await onScrapPost.mutateAsync({
        data: {
          article: articleContent,
          articleInfo,
        },
      });
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
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
      <ArticleFooter close={close} save={handleSave} />
    </motion.div>
  );
};

export default ArticleDetail;
