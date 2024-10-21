import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Correo no válido" }),
  password: z.string().min(8, {message: "Contraseña incorrecta"}),
});

export const verificationSchema = z.object({
  email: z.string().email({message: "Correo no válido"}),
  code: z.string().min(1, {message: "Ingresa el código de verificación"}),
})

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "Correo no válido" }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe contener al menos 8 carácteres" }),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .min(2, { message: "El nombre debe contener al menos dos carácteres" })
      .max(50, {
        message: "El nombre debe contener como máximo 50 carácteres",
      }),
    lastName: z
      .string()
      .min(2, { message: "El nombre debe contener al menos dos carácteres" })
      .max(50, {
        message: "El nombre debe contener como máximo 50 carácteres",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "La contraseña no coincide",
    path: ["confirmPassword"],
  });
