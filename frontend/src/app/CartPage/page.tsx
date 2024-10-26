import ShoppingCartBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CartItem from "@/components/CartItem/CartItem"; 
import CartSummary from "@/components/CartSummary/CartSummary";
import ContinueButton from "@/components/ContinueButton/ContinueButton";

export default function CartPage() {
  const products = [
    { title: "Producto 1", price: 3200, quantity: 1, image: "/images/product1.png" },
    { title: "Producto 2", price: 3200, quantity: 1, image: "/images/product2.png" },
    { title: "Producto 3", price: 3200, quantity: 1, image: "/images/product3.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ShoppingCartBreadcrumb />
      <div className="space-y-4">
        {products.map((product, index) => (
          <CartItem key={index} {...product} /> 
        ))}
      </div>
      <CartSummary totalItems={products.length} subtotal={products.reduce((acc, p) => acc + p.price, 0)} shippingCost={500} />
      <div className="flex justify-center sm:justify-end">
        <ContinueButton>Continuar con mis datos</ContinueButton>
      </div>
    </div>
  );
}
