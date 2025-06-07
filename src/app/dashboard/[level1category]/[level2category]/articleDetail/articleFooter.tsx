interface ArticleFooterProps {
  close: () => void;
  save: () => void;
}
const ArticleFooter = ({ close, save }: ArticleFooterProps) => {
  return (
    <div className="gap-4 flex flex-row">
      <button
        className="cursor-pointer mt-4 px-4 py-2 bg-gray-200/20 rounded hover:bg-gray-300/20 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        close
      </button>
      <button
        className="cursor-pointer mt-4 px-4 py-2 bg-gray-200/20 rounded hover:bg-gray-300/20 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          save();
        }}
      >
        save
      </button>
    </div>
  );
};

export default ArticleFooter;
