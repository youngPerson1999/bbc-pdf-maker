interface Level2CategoryProps {
  name: string;
  href: string;
}

const Level2Category = ({ name, href }: Level2CategoryProps) => {
  const handleClick = () => {
    // 클릭 이벤트 핸들러를 여기에 추가할 수 있습니다.
  };
  return (
    <div className="text-left py-1">
      <button
        onClick={handleClick}
        className="
      inline-block
      border-b
      border-gray-300/50
      hover:border-gray-400/70
      transition
    "
      >
        {name}
      </button>
    </div>
  );
};

export default Level2Category;
