"use client";

import { Label } from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/formValidations/authValidation";

export default function SignUpPage() {
  const { register } = useForm({resolver: zodResolver(signUpSchema)});

  return (
    <form id="signup">
      <Label className="block pt-4 pb-2">
        Nombre(s):
      </Label>
        <Input className="block" type="text" {...register("firstName")} />
      <Label className="block pt-4 pb-2">
        Apellido(s):
      </Label>
        <Input className="block" type="text" {...register("lastName")} />
      <Label className="block pt-4 pb-2">
        Correo electrónico:
      </Label>
        <Input className="block" type="email" {...register("email")} />
      <Label className="block pt-4 pb-2">
        Contraseña:
      </Label>
        <Input className="block" type="password" {...register("password")} />
      <Label className="block pt-4 pb-2">
        Confirmar contraseña:
      </Label>
        <Input className="block" type="password" {...register("confirmPassword")} />
    </form>
  );
}
