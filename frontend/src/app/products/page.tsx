import { ProductGrid } from "@/components";
import FiltersBar from "@/components/product/FiltersBar";
import ProductsPagination from "@/components/product/ProductsPagination";

export default function Products() {
  return (
    <div className="flex">
      <div className="w-1/4 flex items-center justify-center">
        <FiltersBar></FiltersBar>
      </div>
      <div className="w-3/4">
        <h2 className="text-xl text-centerc">Todos nuestros productos</h2>
        <ProductGrid />
        <ProductsPagination/>
      </div>
    </div>
  );
}
