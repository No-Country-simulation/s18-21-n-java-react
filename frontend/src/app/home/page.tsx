import { ProductGrid } from "@/components";
import { ProductsCarousel } from "@/components";
import { MainCarousel } from "@/components/homePage/MainCarousel";
export default function HomePage() {
  return (
    <div>
       <div className="flex justify-center ">
          <MainCarousel/>
      </div>
       <div className="flex items-center flex-col ">
       <h2 className="text-4xl font-bold my-20">Lo mas vendido</h2>
     
        <ProductsCarousel />
      </div>
        <ProductGrid />

      


    </div>
  );
}
