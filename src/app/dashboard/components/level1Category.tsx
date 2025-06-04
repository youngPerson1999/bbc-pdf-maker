import { useLevel2Categories } from "@/lib/api";
import { useState } from "react";
import Level2Category from "./level2Category";
import { AnimatePresence, motion } from "motion/react";

const Level1Category = ({ category }: { category: string }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const { data, isLoading, error } = useLevel2Categories(category);

  return (
    <div className="flex flex-col items-center justify-start mb-2">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between 
        w-full font-semibold h-[3rem] mb-2
        min-w-[15rem] px-2 rounded transition 
        active:bg-gray-100/30 hover:bg-gray-50/20 focus:outline-none"
      >
        <span>{category}</span>
        <span className="ml-2">{expanded ? "▼" : "▶"}</span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key={`level1-${category}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-4 min-w-[15rem]"
          >
            {isLoading && <p>로딩 중...</p>}
            {error && (
              <p className="text-red-500">
                오류 발생: {(error as Error).message}
              </p>
            )}
            {data && (
              <ul className="text-left flex flex-col justify-start">
                {data.map((item) => (
                  <Level2Category
                    key={`${category}-${item.name}`}
                    name={item.name}
                    href={item.href}
                  />
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Level1Category;
