"use client";

import ShoppingCartBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ContinueButton from "@/components/ContinueButton/ContinueButton";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CheckoutConfirmPage() {
  const orderSummary = [
    { label: "Subtotal", value: "$3000" },
    { label: "Envío", value: "$300" },
    { label: "Total", value: "$3300" },
  ];

  const addresses = [
    {
      title: "Dirección de Facturación",
      details: [
        "C.P. 30840",
        "Calle Altamirano #94, San Juan José, La Pampa",
        "JUAN PÉREZ",
      ],
    },
    {
      title: "Dirección de Envío",
      details: [
        "C.P. 30840",
        "Calle Altamirano #94, San Juan José, La Pampa",
        "JUAN PÉREZ",
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-100 min-h-screen">
      <ShoppingCartBreadcrumb />
      <div className="space-y-6 mt-6">
        {/* Resumen de Compra */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Resumen de tu compra</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <div className="space-y-1">Artículos totales: 3</div>
              <ul className="space-y-1">
                {orderSummary.map((item, index) => (
                  <li key={index}>
                    {item.label}: {item.value}
                  </li>
                ))}
              </ul>
            </CardDescription>
          </CardContent>
        </Card>

        {/* Dirección de Facturación y Envío */}
        {addresses.map((address, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>{address.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <ul className="space-y-1">
                  {address.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </CardDescription>
            </CardContent>
          </Card>
        ))}

        {/* Medio de Pago */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Medio de Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <span>Tarjeta de Débito/Crédito, terminación 3217</span>
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-6 sm:justify-end">
        <ContinueButton step="confirm">Confirmar compra</ContinueButton>
      </div>
    </div>
  );
}
