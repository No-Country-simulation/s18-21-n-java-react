import {useQuery} from "@tanstack/react-query";
import { getAllProducts } from "@/services/product.service";
import { useState } from "react";

export function useProductsQuery() {
  const [page, setPage] = useState(0);
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  })

  function prevPage() {
    if (productsQuery.data?.currentPage === 0) return;
    setPage(page-1);
  }
  function nextPage() {
    if (productsQuery.data?.currentPage === productsQuery.data?.totalPages)
      return;
    setPage(page + 1);
  }
  return {productsQuery, page, prevPage, nextPage};
}