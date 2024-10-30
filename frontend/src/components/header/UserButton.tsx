"use client"

import { IoPerson } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";


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
  const logoutUser = useUserStore(state => state.logoutUser);
  const router = useRouter();
  const {toast} = useToast();
  if (!user?.jwtToken || user.id < 0) {
    return (
      <>
        <Button
          variant="link"
          className="block"
          onClick={() => router.push("/auth/login")}
        >
          Iniciar sesión
        </Button>
        <Button
          variant="link"
          className="block"
          onClick={() => router.push("/auth/signup")}
        >
          Registrarse
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        variant="link"
        className="block"
        onClick={() => router.push("/controlPanel")}
      >
        Ir a mi perfil
      </Button>
      <Button
        variant="link"
        className="block"
        onClick={() => {
          logoutUser();
          toast({title: "Sesión cerrada", description: "¡Hasta pronto!"});
          router.push("/")}}
      >
        Cerrar sesión
      </Button>
    </>
  );
}