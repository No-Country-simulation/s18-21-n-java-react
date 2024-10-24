import {create} from "zustand";
import {Product} from "@/lib/types/productInterface";

interface CartItem extends Product {
  quantity: number,
}

const initialItems: CartItem[] = [];

interface CartState {
  items: CartItem[];
  subTotal: number;
  increaseQty: (product: Product) => void;
  decreaseQty: (product: Product) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: initialItems,
  get subTotal() {return get().items.reduce((subtotal, item) => subtotal + item.price*item.quantity, 0)},
  increaseQty(product: Product) {
    set((state: CartState) => {
      const index = state.items.findIndex(item => item.idProducto === product.idProducto);
      if (index) return {items: state.items.map((item, i) => i === index ? {...item, quantity: item.quantity + 1} : item)};
      else return {items: [...state.items, {...product, quantity: 1}]};
    })
  },
  decreaseQty(product: Product) {
    set((state: CartState) => {
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