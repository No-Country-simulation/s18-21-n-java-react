import ProductCard from './ProductCard';
import {productList} from '@/lib/utils';





const ProductGrid: React.FC = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    
      {productList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
