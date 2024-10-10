import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Menu = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <NavigationMenu
        aria-label="Site navigation"
        className="w-full flex justify-center items-center"
      >
        <NavigationMenuList className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Se utiliza un item por cada link */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/categories"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline transition-all"
            >
              Categorias
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/offers"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline transition-all"
            >
              Ofertas del mes
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline transition-all"
            >
              Nosotros
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/help"
              className="text-base sm:text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline transition-all"
            >
              Ayuda
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
