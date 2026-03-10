import { cn } from "../lib/utils";
import { KeywordBadge } from "./KeywordBadge";

export const Sidebar = ({
  categoriesList,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  keywordsList,
  keyword,
  setKeyword,
}) => {
  return (
    <div className="space-y-4 max-w-70 p-2 rounded-md">
      <SidebarCategories
        categoriesList={categoriesList}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarPriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <SidebarKeywordFilter
        keywordsList={keywordsList}
        keyword={keyword}
        setKeyword={setKeyword}
      />
    </div>
  );
};

const SidebarCategories = ({
  categoriesList,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  return (
    <div className="shadow-xs rounded-md transition-shadow duration-300 shadow-primary">
      <div className="p-2 bg-primary rounded-t-md">Categories</div>
      <div className="flex flex-col">
        {categoriesList?.map((category) => (
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

const SidebarPriceFilter = ({ priceRange, setPriceRange }) => {
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

const SidebarKeywordFilter = ({ keywordsList, keyword, setKeyword }) => {
  return (
    <div className="p-2 shadow-xs shadow-primary  rounded-md flex flex-wrap gap-2 justify-between">
      {keywordsList?.map((k) => (
        <KeywordBadge
          key={k.id}
          keyword={k.name}
          active={k.id === keyword}
          onClick={() => setKeyword(k.id)}
        />
      ))}
    </div>
  );
};
