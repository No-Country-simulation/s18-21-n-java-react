import {create} from "zustand";
import {Product} from "@/lib/types/productInterface";

export interface CartItemInterface extends Product {
  quantity: number,
}

interface CartStore {
  items: CartItemInterface[];
  subtotal: number;
  increaseQty: (product: Product) => void;
  decreaseQty: (product: Product) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  get subtotal() {return get().items.reduce((subtotal, item) => subtotal + item.price*item.quantity, 0)},
  
  increaseQty(product) {
    set((state: CartStore) => {
      const index = state.items.findIndex(item => item.idProducto === product.idProducto);
      if (index > -1) return {items: state.items.map((item, i) => i === index ? {...item, quantity: item.quantity + 1} : item)};
      else return {items: [...state.items, {...product, quantity: 1}]};
    })
  },
  
  decreaseQty(product) {
    set((state: CartStore) => {
      const index = state.items.findIndex(item => item.idProducto === product.idProducto);
      if (state.items[index].quantity > 1) return {
        items: state.items.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
      else return {items: state.items.filter((_item, i) => i !== index)};
    })
  },
}))