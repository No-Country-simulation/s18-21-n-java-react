import Link from "next/link";
import Image from "next/image";
import { IoCartOutline, IoPerson, IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="bg-slate-900 text-white p-4">
      <div className="flex items-center justify-between md:justify-around">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold flex items-center">
          <Image
            src="/images/alienware.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
            title="Logo"
          />
        </Link>

        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none"
          />
        </div>

        {/* Icono de búsqueda en pantallas pequeñas */}
        <div className="md:hidden">
          <IoSearch className="text-2xl" />
        </div>

        {/* Iconos de carrito y sesión */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-2xl">
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
