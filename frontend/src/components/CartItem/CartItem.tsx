import QuantitySelector from "../product/QuantitySelector";
import { CartItemInterface } from "@/store/cartStore";

type CartItemProps = {
    item: CartItemInterface,
  };
  
  export default function CartItem({ item }: CartItemProps) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4">
          <img src={item.photoUrl} alt={item.name} className="w-16 h-16 sm:w-24 sm:h-24 rounded-md bg-gray-200" />
          <div>
            <p className="text-gray-500 text-sm sm:text-base">{item.brand}</p>
            <h3 className="text-gray-900 font-semibold text-base sm:text-lg">{item.name}</h3>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-green-500 font-bold text-lg sm:text-xl">${item.price}</span>
          <QuantitySelector product={item}/>
        </div>
      </div>
    );
  }
  