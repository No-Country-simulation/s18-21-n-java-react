import Link from "next/link";
import { IoCartOutline, IoPerson, IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primario to-secundario text-white p-4">
      <div className="flex items-center justify-between md:justify-around">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold flex items-center">
          <h1>SmartStore</h1>
        </Link>

        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-md bg-gray-100 text-secundario focus:outline-none"
          />
        </div>

        {/* Icono de búsqueda en pantallas pequeñas */}
        <div className="md:hidden">
          <IoSearch className="text-2xl" />
        </div>

        {/* Iconos de carrito y sesión */}
        <div className="flex items-center space-x-4">
          <Link href="../../CartPage/CartPage.tsx" className="text-2xl">{/*Link para ir al carrito*/}
            <IoCartOutline />
          </Link>
          <Link href="/login" className="text-2xl">
            <IoPerson />
          </Link>
        </div>
      </div>
    </header>
  );
};

