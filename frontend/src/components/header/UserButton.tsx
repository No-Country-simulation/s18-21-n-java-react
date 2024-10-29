"use client"

import { IoPerson } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";


export default function UserButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <IoPerson className="text-xl"/>
      </PopoverTrigger>
      <PopoverContent>
        <UserButtonContents/>
      </PopoverContent>
    </Popover>
  );
}

function UserButtonContents() {
  const user = useUserStore(state => state.user);
  if (!user?.jwtToken) {
    return (
      <>
        <Link className="block" href="/auth/login">Iniciar sesión</Link>
        <Link className="block" href="/auth/signup">Registrarse</Link>
      </>
    )
  }
  return (
    <>
      <Link className="block" href="/controlPanel">
        Ir a mi perfil
      </Link>
      <Link className="block" href="/auth/signup">
        Cerrar sesión
      </Link>
    </>
  );
}