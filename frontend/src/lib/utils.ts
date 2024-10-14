import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const productList = [
  {
    id: "1",
    image: "/images/alienware.jpg",
    name: "Auriculares Bluetooth",
    brand: "Alienware",
    description: "Auriculares inalámbricos con excelente calidad de sonido.",
    price: 50,
  },
  {
    id: "2",
    image: "/images/xiaomi.jpg",
    name: "Smartphone",
    brand: "Xiaomi",
    description: "Smartphone con pantalla OLED y cámara de alta resolución.",
    price: 800,
  },
  {
    id: "3",
    image: "/images/alienware.jpg",
    name: "Laptop Gamer",
    brand: "Dell",
    description:
      "Laptop con procesador potente y tarjeta gráfica de última generación.",
    price: 1200,
  },
  {
    id: "4",
    image: "/images/xiaomi.jpg",
    name: "Mouse Inalámbrico",
    brand: "Logitech",
    description: "Mouse inalámbrico ergonómico con gran precisión.",
    price: 25,
  },
  {
    id: "5",
    image: "/images/alienware.jpg",
    name: "Smartwatch",
    brand: "Samsung",
    description: "Reloj inteligente con monitoreo de salud y notificaciones.",
    price: 150,
  },
  {
    id: "6",
    image: "/images/xiaomi.jpg",
    name: "Teclado Mecánico",
    brand: "MSI",
    description: "Teclado mecánico RGB con switches personalizables.",
    price: 100,
  },
];
