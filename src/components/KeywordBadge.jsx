import { cn } from "../lib/utils";
import { useProductFilters } from "../hooks/useProductFilters";

export const KeywordBadge = ({ id, keyword }) => {
  const { handleKeywordClick, keyworkIsActive } = useProductFilters();
  const handleClick = () => {
    handleKeywordClick(id);
  };
  const isActive = keyworkIsActive(id);
  return (
    <div
      className={cn(
        "px-2 py-1 text-xs cursor-pointer hover:bg-primary/50 border rounded-md border-primary/30",
        isActive ? "bg-primary/50" : "",
      )}
      onClick={handleClick}
    >
      {keyword}
    </div>
  );
};
