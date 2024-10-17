"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const authTexts: Record<string, Record<string, string>> = {
  login: {
    title: "Iniciar sesión",
    description: "¿Todavía no tienes una cuenta? ¡Regístrate aquí!",
    footer: "Iniciar sesión",
  },
  signup: {
    title: "Registro",
    description: "¿Ya tienes una cuenta? ¡Inicia sesión aquí!",
    footer: "Registrarme",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let action = "";
  const pathname = usePathname();
  if (pathname.match("/signup")) {
    action = "signup";
  } else {
    action = "login";
  }

  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>{authTexts[action].title}</CardTitle>
        <CardDescription>
          <Link
            href={`/auth/${action === "login" ? "signup" : "login"}`}
            className="underline"
          >
            {authTexts[action].description}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button type="submit" form={action === "login" ? "login" : "signup"}>
          {action === "login" ? "Iniciar sesión" : "Registrar"}
        </Button>
      </CardFooter>
    </Card>
  );
}
