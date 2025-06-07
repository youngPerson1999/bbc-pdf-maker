import { useRouter } from 'next/navigation';

interface Level2CategoryProps {
  name: string;
  href: string;
}

const Level2Category = ({ name, href }: Level2CategoryProps) => {
  const router = useRouter();
  const handleClick = () => {
    const parts = href.split('/').filter(Boolean); // ['', 'news', 'war-in-ukraine'] → ['news', 'war-in-ukraine']
    if (parts.length >= 2) {
      const [level1, level2] = parts.slice(-2); // ['news', 'war-in-ukraine']
      router.push(`/dashboard/${level1}/${level2}`);
    } else {
      console.warn(`Unexpected href format: ${href}`);
    }
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
