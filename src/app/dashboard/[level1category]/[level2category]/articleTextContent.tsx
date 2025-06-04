interface ArticleTextContentProps {
  content: { isBold: boolean; text: string }[];
}

const ArticleTextContent = ({ content }: ArticleTextContentProps) => {
  return (
    <div>
      {content.map((item, index) => (
        <p
          key={index}
          className={`my-2 ${item.isBold ? "font-semibold" : "font-normal"}`}
        >
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default ArticleTextContent;
