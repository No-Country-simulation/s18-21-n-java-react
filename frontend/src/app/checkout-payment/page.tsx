"use client"

import ShoppingCartBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ContinueButton from "@/components/ContinueButton/ContinueButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CheckoutPaymentPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-100 min-h-screen">
      <ShoppingCartBreadcrumb />

      <div className="space-y-6 mt-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Elige tu medio de pago</CardTitle>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-4">Tarjeta de Débito/Crédito</CardTitle>

            {/* Contenedor para las tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((_, index) => (
                <Card
                  key={index}
                  className="w-full bg-white shadow-md rounded-lg p-4"
                >
                  <CardContent>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <Image
                        src="https://via.placeholder.com/100x100.png?text=Banco"
                        alt="card"
                        className="w-16 h-16 sm:w-24 sm:h-24 rounded-md bg-gray-200"
                        width={100}
                        height={100}
                      />
                      <div>
                        <CardTitle>******** 1234</CardTitle>
                        <CardDescription>
                          <span className="font-semibold text-gray-700">
                            Tarjeta de crédito
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botón para agregar nueva tarjeta */}
      <div className="flex justify-center mt-6">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">
          Agregar nueva Tarjeta
        </button>
      </div>

      {/* Botón para continuar */}
      <div className="flex justify-center mt-6 sm:justify-end">
        <ContinueButton step="payment">Continuar con el resumen del pedido</ContinueButton>
      </div>
    </div>
  );
}
