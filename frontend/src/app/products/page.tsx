import { ProductGrid } from "@/components";
import ProductsPagination from "@/components/product/ProductsPagination";

export default function Products() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-slate-400 flex items-center justify-center">
        <p> FILTROS </p>
      </div>
      <div className="w-3/4  bg-red-300">
        <h2 className="text-xl text-centerc">Todos nuestros productos</h2>
        <ProductGrid />
        <ProductsPagination/>
      </div>
    </div>
  );
}
