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
            href="/CartPage"
            className={`${
              currentPath === "/CartPage" ? "font-bold text-indigo-600" : ""
            } hover:text-indigo-500 transition-colors`}
          >
            carrito
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="/products"
            className={`${
              currentPath === "/checkout-address"
                ? "font-bold text-indigo-600"
                : ""
            } hover:text-indigo-500 transition-colors`}
          >
            tus datos
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
            pago
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
            Confirmar
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
