"use client";

import ShoppingCartBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CartItem from "@/components/CartItem/CartItem";
import CartSummary from "@/components/CartSummary/CartSummary";
import ContinueButton from "@/components/ContinueButton/ContinueButton";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="container mx-auto px-4 py-8">
      <ShoppingCartBreadcrumb />
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary
        totalItems={items.length}
        subtotal={items.reduce((subtotal, item) => subtotal + item.price*item.quantity, 0)}
      />
      <div className="flex justify-center sm:justify-end">
        <ContinueButton step="cart">Continuar con mis datos</ContinueButton>
      </div>
    </div>
  );
}
