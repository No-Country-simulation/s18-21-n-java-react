import { ProductGrid } from "@/components";
import { ProductsCarousel } from "@/components";
export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl text-center my-8">Nuestros Productos</h1>
      <ProductGrid />
      <div className="flex justify-center ">
        <ProductsCarousel />
      </div>
    </div>
  );
}
