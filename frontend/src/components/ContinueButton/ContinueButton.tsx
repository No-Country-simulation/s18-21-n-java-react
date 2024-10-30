"use client";

import { Button } from "@/components/ui/button";
import { postOrder } from "@/services/ordersService";
import { useUserStore } from "@/store/userStore";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
interface ContinueButtonProps {
  children: React.ReactNode;
  step: "cart" | "address" | "payment" | "confirm";
}

export default function ContinueButton({
  children,
  step,
}: ContinueButtonProps) {
  const user = useUserStore((state) => state.user);
  const items = useCartStore((state) => state.items);
  const { toast } = useToast();
  const router = useRouter();

  async function continueHandler() {
    if (!user.jwtToken || user.id < 0) {
      toast({
        variant: "destructive",
        title: "Sesión no iniciada",
        description: "¡Inicia sesión para finalizar tu compra!",
      });
      router.push("/auth/login");
    } else {
      switch (step) {
        case "cart":
          router.push("/checkout-address");
          break;
        case "address":
          router.push("/checkout-payment");
          break;
        case "payment":
          router.push("/checkout-confirm");
          break;
        case "confirm":
          await postOrder(items, user.jwtToken);
          toast({
            title: "¡Pedido realizado con éxito!",
            description:
              "Te hemos enviado un correo con los detalles de tu compra y un link de seguimiento.",
          });
          router.push("/");
      }
    }
  }

  return (
    <Button
      className="w-full sm:w-auto mt-4 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 text-sm sm:text-base"
      type="button"
      onClick={continueHandler}
    >
      {children}
    </Button>
  );
}
