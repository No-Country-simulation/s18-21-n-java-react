"use client"

import { Label } from "@/components/ui/label";
import {Input} from "@/components/ui/input"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/formValidations/authValidation";
import { login } from "@/services/authService";

export default function LoginPage() {
  const {register, handleSubmit} = useForm({resolver: zodResolver(loginSchema)});
  
  function onLogin(data: object) {
    login(data);
  }

  return (
    <form id="login" onSubmit={handleSubmit(onLogin)}>
      <Label className="block pt-4 pb-2">Correo electrónico:</Label>
      <Input className="block" type="text" {...register("email")} />
      <Label className="block pt-4 pb-2">Contraseña:</Label>
      <Input className="block" type="password" {...register("password")} />
    </form>
  );
}
