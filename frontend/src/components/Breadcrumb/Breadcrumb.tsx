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
<<<<<<< HEAD
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
              currentPath === "/products" ? "font-bold text-indigo-600" : ""
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
=======
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/CartPage">Carrito</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/checkout-address">Tus datos</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/checkout-payment">Pago</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Confirmar</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
>>>>>>> 4549eb0109f3b81a28c6f7fbb8128c38d5be018c
  );
}
