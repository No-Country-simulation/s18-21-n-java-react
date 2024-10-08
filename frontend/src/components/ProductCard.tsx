import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <Button className="mt-4 w-full">Comprar</Button>
      </div>
    </div>
  );
};

export default ProductCard;