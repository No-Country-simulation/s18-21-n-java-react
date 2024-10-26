import {create} from "zustand";
import {BankCard} from "@/lib/types/bankCardInterface";

type PaymentType = BankCard | "deposit";

interface PaymentStore {
  paymentMethod: PaymentType | null,
  setPaymentMethod: (payment: PaymentType) => void,
}

export const usePaymentStore = create<PaymentStore>((set) => ({
  paymentMethod: null,
  setPaymentMethod(payment) {
    set({ paymentMethod: payment });
  },
}));