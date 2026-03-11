import ProductsMocks from "../mocks/products";
import { ProductCard } from "../components/ProductCard";
import { AnimatePresence } from "motion/react";
import { useProductFilters } from "../hooks/useProductFilters";

export const ProductsList = () => {
  const { selectedCategory, selectedKeywords, priceRange } =
    useProductFilters();

  const filteredProducts = ProductsMocks.filter((product) => {
    if (selectedCategory && product.categoryId !== selectedCategory) {
      return false;
    }
    if (product.price > priceRange) {
      return false;
    }
    if (
      selectedKeywords?.length &&
      !selectedKeywords.every((selectedKeyword) =>
        product.keywordIds.includes(selectedKeyword),
      )
    ) {
      return false;
    }
    return true;
  });
  return (
    <div className="grid grid-cols-3 auto-rows-min gap-4">
      <AnimatePresence>
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};
