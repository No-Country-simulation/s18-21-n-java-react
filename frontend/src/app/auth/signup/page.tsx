"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/formValidations/authValidation";
import { signup } from "@/services/authService";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const { toast } = useToast();
  const router = useRouter();

  function onRegister(data: object) {
    signup(data)
    .then(() => {toast({
          title: "¡Registro exitoso!",
          description: "Te hemos enviado un correo electrónico de verificación.",
        });
        router.push("/auth/verification");
      })
    .catch(() => toast({
          variant: "destructive",
          title: "¡Ocurrió un error!",
          description: "Hubo un error procesando tu registro",
        }));

  }

  return (
    <form id="signup" onSubmit={handleSubmit(onRegister)}>
      <Label className="block pt-4 pb-2">Nombre(s):</Label>
      <Input className="block" type="text" {...register("name")} />
      <Label className="block pt-4 pb-2">Apellido(s):</Label>
      <Input className="block" type="text" {...register("lastname")} />
      <Label className="block pt-4 pb-2">Correo electrónico:</Label>
      <Input className="block" type="email" {...register("email")} />
      <Label className="block pt-4 pb-2">Contraseña:</Label>
      <Input className="block" type="password" {...register("password")} />
      <Label className="block pt-4 pb-2">Confirmar contraseña:</Label>
      <Input
        className="block"
        type="password"
        {...register("confirmPassword")}
      />
    </form>
  );
}
