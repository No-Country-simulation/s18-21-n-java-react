import {useQuery} from "@tanstack/react-query";
import { getAllProducts } from "@/services/product.service";

export function useProductsQuery() {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  })
  return {productsQuery};
}