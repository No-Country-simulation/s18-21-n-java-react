import {create} from "zustand";
import {Address} from "@/lib/types/addressInterface";

interface AddressStore {
  billing: Address | null,
  shipping: Address | null,
  setBilling: (address: Address) => void,
  setShipping: (address: Address) => void,
}

export const useAddressStore = create<AddressStore>((set) => ({
  billing: null,
  shipping: null,
  setBilling(address) {
    set({ billing: address });
  },
  setShipping(address) {
    set({ billing: address });
  },
}));