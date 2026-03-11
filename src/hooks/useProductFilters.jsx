import { createContext, useContext, useState } from "react";

const ProductFilterContext = createContext(null);

export const useProductFilters = () => {
  const context = useContext(ProductFilterContext);
  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFiltersProvider",
    );
  }
  return context;
};

export const ProductFiltersProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(100);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  console.log("selectedKeywords", selectedKeywords);

  const handleCategoryChange = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleKeywordClick = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prev) => prev.filter((k) => k !== keyword));
    } else {
      setSelectedKeywords((prev) => [...prev, keyword]);
    }
  };

  const keyworkIsActive = (keyword) => {
    return selectedKeywords.includes(keyword);
  };

  return (
    <ProductFilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        selectedKeywords,
        handleKeywordClick,
        keyworkIsActive,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};
