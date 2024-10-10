import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Menu = () => {
  return (
    <div>
      <NavigationMenu></NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Categorias</NavigationMenuLink>
          <NavigationMenuLink href="#">Ofertas del mes</NavigationMenuLink>
          <NavigationMenuLink href="#">Nosotros</NavigationMenuLink>
          <NavigationMenuLink href="#">Ayuda</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </div>
  );
};
