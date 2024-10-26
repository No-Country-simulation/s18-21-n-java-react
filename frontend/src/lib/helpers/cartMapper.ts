import { Product } from "../types/productInterface";

interface CartItem extends Product {
  quantity: number;
}

export function cartMapper(items: CartItem[]) {
  const detailsOrders = items.map((item) => ({
    idProducto: item.idProducto,
    quantity: item.quantity,
  }));
  return { detailsOrders };
}
