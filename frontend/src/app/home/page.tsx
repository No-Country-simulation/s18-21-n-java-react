import { ProductGrid } from "@/components";
import { ProductsCarousel } from "@/components";
import { InifiniteScroll } from "@/components/homePage/InifiniteScroll";
import { MainCarousel } from "@/components/homePage/MainCarousel";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <MainCarousel />
      <h2 className="text-4xl font-bold my-20">Lo más vendido</h2>
      <ProductsCarousel />
      <h2 className="text-4xl font-bold my-16 w-3/5 text-center">
        Contamos con los productos de las marcas más reconocidas a nivel mundial
      </h2>
      <InifiniteScroll />
      <ProductGrid />
    </div>
  );
}
