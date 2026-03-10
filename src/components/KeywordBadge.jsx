import { cn } from "../lib/utils";

export const KeywordBadge = ({ keyword, active, onClick }) => {
  return (
    <div
      className={cn(
        "px-2 py-1 text-xs cursor-pointer hover:bg-primary/50 border rounded-md border-primary/30",
        active ? "bg-primary/50" : "",
      )}
      onClick={onClick}
    >
      {keyword}
    </div>
  );
};
