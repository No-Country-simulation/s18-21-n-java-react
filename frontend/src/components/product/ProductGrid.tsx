"use client"

import ProductCard from '@/components/product/ProductCard';
/* import {useProductsQuery} from "@/hooks/useProductsQuery" */
import {productList} from "@/lib/fakeData/products";

const ProductGrid: React.FC = () => {
  /* const {productsQuery} = useProductsQuery(); */
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    
      {/* {productsQuery.data?.dataList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))} */}
      {productList.map(prod => <ProductCard key={prod.id} product={prod} />)}
    </div>
  );
};

export default ProductGrid;
