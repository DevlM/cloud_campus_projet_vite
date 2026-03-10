import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import CategoriesMocks from "../mocks/categories";
import KeywordsMocks from "../mocks/keywords";
import ProductsMocks from "../mocks/products";
import { ProductCard } from "../components/ProductCard";
import { AnimatePresence } from "motion/react";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(100);
  const [keyword, setKeyword] = useState(null);

  const handleKeywordChange = (keywordId) => {
    if (keyword === keywordId) {
      setKeyword(null);
    } else {
      setKeyword(keywordId);
    }
  };

  const handleCategoryChange = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const filteredProducts = ProductsMocks.filter((product) => {
    if (selectedCategory && product.categoryId !== selectedCategory) {
      return false;
    }
    if (product.price > priceRange) {
      return false;
    }
    if (keyword && !product.keywordIds.includes(keyword)) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex gap-5">
      <Sidebar
        categoriesList={CategoriesMocks}
        keywordsList={KeywordsMocks}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        keyword={keyword}
        setKeyword={handleKeywordChange}
      />
      {/* Products Grid */}
      <div className="grid grid-cols-3 auto-rows-min gap-4">
        <AnimatePresence>
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
