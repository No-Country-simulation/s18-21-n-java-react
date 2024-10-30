import { Product } from "../types/productInterface";
import { Order } from "../types/orderInterface";

export interface CartItem extends Product {
  quantity: number;
}

export function cartMapper(items: CartItem[]): Order {
  const detailsOrders = items.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
  }));
  return { detailsOrders };
}
