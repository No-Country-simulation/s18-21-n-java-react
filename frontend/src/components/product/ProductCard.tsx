import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuantitySelector from "./QuantitySelector"; // Importa el nuevo componente

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  showQuantitySelector?: boolean; // Nueva prop para controlar el selector de cantidad
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showQuantitySelector = false }) => {
  const handleQuantityChange = (newQuantity: number) => {
    console.log(`Cantidad de ${product.name} actualizada a:`, newQuantity);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col items-center">
      <div className="w-full h-48 relative">
        <Image
          src={product.image}
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

        {/* Mostrar selector de cantidad solo si showQuantitySelector es true */}
        {showQuantitySelector && (
          <QuantitySelector initialQuantity={1} onQuantityChange={handleQuantityChange} />
        )}

        <Button className="mt-4 w-full">{showQuantitySelector ? "Eliminar del carrito" : "Agregar al Carrito"}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
