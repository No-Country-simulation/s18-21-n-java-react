import {Address} from "@/lib/types/addressInterface";

interface CheckoutAddressProps {
    address: Address,
    name: string
  };
  
  export default function CheckoutAddressCard({address, name}: CheckoutAddressProps) {
    return (
      <label className="flex flex-row items-center justify-start gap-2 bg-white shadow-md rounded-lg p-4 mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <input type="radio" name={name} className="" />
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-gray-500 text-sm">{`C. P. ${address.postCode}`}</p>
            <h3 className="text-lg">{`Calle ${address.street} ${typeof address.num === "number" ? `#${address.num}` : address.num}, ${address.city}, ${address.province}`}</h3>
            <p className="text-gray-500 text-s">{`${address.firstName} ${address.lastName}`}</p>
          </div>
        </div>
      </label>
    );
  }
  