import {Product} from "@/lib/types/productInterface";

export interface GetAllProducts {
  status:      boolean;
  message:     string;
  dataList:    Product[];
  currentPage: number;
  totalPages:  number;
  totalItems:  number;
}
