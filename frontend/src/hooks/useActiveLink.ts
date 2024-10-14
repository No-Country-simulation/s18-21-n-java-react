"use client";
import { useState } from "react";

// Definimos el tipo para la ruta activa
export const useActiveLink = (initialPath: string = "") => {
  const [activeLink, setActiveLink] = useState<string>(initialPath);

  // Función para actualizar la ruta activa
  const handleSetActive = (path: string) => {
    setActiveLink(path);
  };

  return { activeLink, handleSetActive };
};
