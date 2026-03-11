import { Sidebar } from "../components/Sidebar";
import { ProductFiltersProvider } from "../hooks/useProductFilters";
import { ProductsList } from "../components/ProductsList";

export const HomePage = () => {
  return (
    <div className="flex gap-5">
      <ProductFiltersProvider>
        <Sidebar   />
        {/* Products Grid */}
        <ProductsList />
      </ProductFiltersProvider>
    </div>
  );
};
