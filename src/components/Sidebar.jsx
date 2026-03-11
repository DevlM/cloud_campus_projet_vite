import { cn } from "../lib/utils";
import { KeywordBadge } from "./KeywordBadge";
import { useProductFilters } from "../hooks/useProductFilters";
import CategoriesMocks from "../mocks/categories";
import KeywordsMocks from "../mocks/keywords";

export const Sidebar = () => {
  return (
    <div className="space-y-4 max-w-70 p-2 rounded-md">
      <SidebarCategories />
      <SidebarPriceFilter />
      <SidebarKeywordFilter />
    </div>
  );
};

const SidebarCategories = () => {
  const { selectedCategory, setSelectedCategory } = useProductFilters();
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  return (
    <div className="shadow-xs rounded-md transition-shadow duration-300 shadow-primary">
      <div className="p-2 bg-primary rounded-t-md">Categories</div>
      <div className="flex flex-col">
        {CategoriesMocks?.map((category) => (
          <button
            key={category.id}
            className={cn(
              "p-2 cursor-pointer nth-last-[1]:border-b-0! border-b border-primary/30 duration-300 hover:bg-primary/50 transition-all",
              selectedCategory === category.id ? "bg-primary/50" : "",
            )}
          >
            <h3 onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

const SidebarPriceFilter = () => {
  const { priceRange, setPriceRange } = useProductFilters();
  return (
    <div className="p-2 shadow-xs shadow-primary rounded-md">
      <h3>Prix</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full"
      />
      <p>Prix entre 0€ et {priceRange}€</p>
    </div>
  );
};

const SidebarKeywordFilter = () => {
  const { selectedKeywords, setSelectedKeywords } = useProductFilters();
  return (
    <div className="p-2 shadow-xs shadow-primary  rounded-md flex flex-wrap gap-2 justify-between">
      {KeywordsMocks?.map((k) => (
        <KeywordBadge key={k.id} id={k.id} keyword={k.name} />
      ))}
    </div>
  );
};
