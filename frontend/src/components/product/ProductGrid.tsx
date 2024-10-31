"use client"

import ProductCard from '@/components/product/ProductCard';
import {useProductsQuery} from "@/hooks/useProductsQuery"

const ProductGrid: React.FC = () => {
  const {productsQuery} = useProductsQuery();
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    
      {productsQuery.data?.dataList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
