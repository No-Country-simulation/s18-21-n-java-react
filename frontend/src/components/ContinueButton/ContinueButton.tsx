"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {useUserStore, LoggedUser} from "@/store/userStore";
interface ContinueButtonProps {
  children: React.ReactNode,
}

function handleContinueClick(user: LoggedUser, path: string) {
  if (!user.jwtToken && user.id === -1) return "auth/login";
  else if (path.match("cart")) return "checkout-address";
    else if (path.match("checkout-address")) return "checkout-payment";
    else if (path.match("checkout-payment")) {
      // maneja la orden y retorna al inicio;
    };
    console.log(path)
    return "/";
  }

export default function ContinueButton({children}: ContinueButtonProps) {
  const user = useUserStore(state => state.user);
  const router = useRouter();
  const path = usePathname();
  return (
    <Button className="w-full sm:w-auto mt-4 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 text-sm sm:text-base"
    onClick={() => router.push(`/${handleContinueClick(user, path)}`)}>
      {children}
    </Button>
  );
}
