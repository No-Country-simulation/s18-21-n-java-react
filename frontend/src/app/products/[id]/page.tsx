import {Product} from "@/components/product_page/Product"
import { ProductDetails } from "@/components/product_page/ProductDetails";
import { productList } from "@/lib/utils";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const product = productList.find((prod) => prod.id === params.id);
  if (!product) return <h3>¡Producto no encontrado!</h3>;
  return (
    <>
      <Product product={product}/>
      <ProductDetails/>
    </>
  );
};

export default ProductPage;
