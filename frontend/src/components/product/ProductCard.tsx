import Image from "next/image"
import QuantitySelector from "./QuantitySelector";
import { Product } from "@/lib/types/productInterface";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col items-center">
      <div className="w-full h-48 relative">
        <Image
          src={product.photoUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col items-start w-full">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm my-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-900">${product.price}</p>

        <QuantitySelector product={product}/>
      </div>
    </div>
  );
};

export default ProductCard;
