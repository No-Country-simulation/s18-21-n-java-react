"use client"

import {addresses} from "@/lib/fakeData/addresses";
import ShoppingCartBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CheckoutAddressCard from "@/components/checkout-address/CheckoutAdress"
import ContinueButton from "@/components/ContinueButton/ContinueButton";

export default function CheckoutAddress() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ShoppingCartBreadcrumb />
      <form action="">
      <div className="space-y-4">
        <h3 className="mt-8 text-xl">Elige una dirección de facturación:</h3>
        {addresses.map((address, index) => (
          <CheckoutAddressCard key={index} address={address} name="facturation"/> 
          ))}

          <h3 className="pt-8 text-xl">Elige una dirección de envío:</h3>
        {addresses.map((address, index) => (
          <CheckoutAddressCard key={index} address={address} name="shipping"/> 
          ))}
      </div>
      <div className="flex justify-center sm:justify-end">
        <ContinueButton step="address">Continuar con el medio de pago</ContinueButton>
      </div>
          </form>
    </div>
  )
}