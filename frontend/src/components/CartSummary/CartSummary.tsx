type CartSummaryProps = {
    totalItems: number;
    subtotal: number;
    shippingCost: number;
  };
  
  export default function CartSummary({ totalItems, subtotal, shippingCost }: CartSummaryProps) {
    return (
      <div className="text-center sm:text-right mt-8 space-y-2 sm:space-y-0">
        <p className="text-gray-600 text-sm sm:text-base">Artículos totales: <span className="font-semibold">{totalItems}</span></p>
        <p className="text-gray-600 text-sm sm:text-base">Subtotal: <span className="font-semibold">${subtotal}</span></p>
        <p className="text-gray-600 text-sm sm:text-base">Más gastos de envío</p>
      </div>
    );
  }
  