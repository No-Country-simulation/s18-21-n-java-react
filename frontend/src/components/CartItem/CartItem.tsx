type CartItemProps = {
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
  
  export default function CartItem({ title, price, quantity, image }: CartItemProps) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4">
          <img src={image} alt={title} className="w-16 h-16 sm:w-24 sm:h-24 rounded-md bg-gray-200" />
          <div>
            <h3 className="text-gray-900 font-semibold text-base sm:text-lg">{title}</h3>
            <p className="text-gray-500 text-sm sm:text-base">Marca</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-green-500 font-bold text-lg sm:text-xl">${price}</span>
          <span className="text-gray-500 text-sm sm:text-base">{quantity} u.</span>
        </div>
      </div>
    );
  }
  