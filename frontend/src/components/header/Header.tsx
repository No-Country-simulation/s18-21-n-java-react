import Link from "next/link";
import Image from "next/image";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import UserButton from "@/components/header/UserButton";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primario to-secundario text-white p-4">
      <div className="flex items-center justify-between md:justify-around">
        {/* Logo con imagen ajustada */}
        <Link href="/" className="flex items-center justify-start">
          <Image
            src="/Logotipo_tecnológico_minimalista__proyecto_blockchain-removebg-preview.png"
            alt="SmartStore Logo"
            width={60} // Ajusta el ancho a un tamaño más discreto
            height={30} // Ajusta la altura
            className="object-contain" // Mantiene proporciones sin estirarse
          />
          <span className="text-3xl pl-4 font-bold">SmartStore</span>
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
          <Link href="/cart" className="text-2xl">
            <IoCartOutline />
          </Link>
          <UserButton />
        </div>
      </div>
    </header>
  );
};
