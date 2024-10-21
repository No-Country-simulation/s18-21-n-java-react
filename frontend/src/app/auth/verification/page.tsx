"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verificationSchema } from "@/lib/formValidations/authValidation";
import { verifyEmail } from "@/services/authService";

export default function VerificationPage() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(verificationSchema),
  });

  function onVerification(data: object) {
    verifyEmail(data);
  }

  return (
    <form id="login" onSubmit={handleSubmit(onVerification)}>
      <Label className="block pt-4 pb-2">Correo electrónico:</Label>
      <Input className="block" type="text" {...register("email")} />
      <Label className="block pt-4 pb-2">Código de verificación:</Label>
      <Input className="block" type="text" {...register("code")} />
    </form>
  );
}
