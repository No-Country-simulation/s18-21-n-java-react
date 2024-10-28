import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <NavigationMenu
        aria-label="Site navigation"
        className="w-full flex justify-center items-center"
      >
        <NavigationMenuList className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Productos */}
          <NavigationMenuItem>
            <Link
              href="/products"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-primario focus:underline active:underline transition-all"
            >
              Productos
            </Link>
          </NavigationMenuItem>

          {/* Categorias */}
          <NavigationMenuItem>
            <Link
              href="/categories"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-primario focus:underline active:underline transition-all"
            >
              Categorías
            </Link>
          </NavigationMenuItem>

          {/* Ofertas del mes */}
          <NavigationMenuItem>
            <Link
              href="/offers"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-primario focus:underline active:underline transition-all"
            >
              Ofertas del mes
            </Link>
          </NavigationMenuItem>

          {/* Nosotros */}
          <NavigationMenuItem>
            <Link
              href="/about"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-primario focus:underline active:underline transition-all"
            >
              Nosotros
            </Link>
          </NavigationMenuItem>

          {/* Ayuda */}
          <NavigationMenuItem>
            <Link
              href="/help"
              className="text-base sm:text-lg font-medium text-secundario hover:text-primario focus:underline active:underline transition-all"
            >
              Ayuda
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
