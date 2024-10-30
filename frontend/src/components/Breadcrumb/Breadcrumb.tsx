"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function ShoppingCartBreadcrumb() {
  const currentPath = usePathname();

  return (
    <Breadcrumb className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-100">
      <BreadcrumbList className="flex flex-wrap items-center space-x-2 text-sm sm:text-base">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/cart"
            className={`${
              currentPath === "/CartPage" ? "font-bold text-indigo-600" : ""
            } hover:text-indigo-500 transition-colors`}
          >
            Carrito
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="/checkout-address"
            className={`${
              currentPath === "/checkout-address"
                ? "font-bold text-indigo-600"
                : ""
            } hover:text-indigo-500 transition-colors`}
          >
            Tus datos
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="/checkout-payment"
            className={`${
              currentPath === "/checkout-payment"
                ? "font-bold text-indigo-600"
                : ""
            } hover:text-indigo-500 transition-colors`}
          >
            Medios de pago
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="/checkout-confirm"
            className={`${
              currentPath === "/checkout-confirm"
                ? "font-bold text-indigo-600"
                : ""
            } hover:text-indigo-500 transition-colors`}
          >
            Confirmar pedido
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
