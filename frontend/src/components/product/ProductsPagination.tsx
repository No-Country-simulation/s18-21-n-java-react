"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useProductsQuery } from "@/hooks/useProductsQuery";

export default function ProductsPagination() {
  const { page, prevPage, nextPage } = useProductsQuery();
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={prevPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="w-40 mx-auto" href="#">
            Página {page + 1} de 6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
