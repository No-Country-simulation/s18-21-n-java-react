import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

export default function ShoppingCartBreadcrumb() {
  return (
    <Breadcrumb className="mb-4 flex justify-center sm:justify-start">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Carrito</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Tus datos</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Pago</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        {/* Enlace actual marcado con clase "font-bold" */}
        <BreadcrumbLink href="#" className="font-bold text-gray-700">
          Confirmar
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
