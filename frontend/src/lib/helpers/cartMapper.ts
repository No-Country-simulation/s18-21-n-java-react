import { Product } from "../types/productInterface";

interface CartItem extends Product {
  quantity: number;
}

export function cartMapper(items: CartItem[]) {
  const detailsOrders = items.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
  }));
  return { detailsOrders };
}
