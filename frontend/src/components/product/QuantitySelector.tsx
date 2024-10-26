"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/lib/types/productInterface";

interface QuantitySelectorProps {
  product: Product;
}

function QuantitySelector({ product }: QuantitySelectorProps) {
  const items = useCartStore((state) => state.items);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const item = items.find(item => item.idProducto === product.idProducto);

  if (item) return (
    <div className="flex items-center mt-4">
      <button
        className="px-2 py-1 border rounded"
        onClick={() => decreaseQty(product)}
      >
        -
      </button>
      <span className="mx-2">{item.quantity}</span>{" "}
      <button className="px-2 py-1 border rounded" onClick={() => increaseQty(product)}>
        +
      </button>
    </div>
  );
  return (<Button className="mt-4 w-full" onClick={() => increaseQty(product)}>Agregar al Carrito</Button>)
}

export default QuantitySelector;
