import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const productList = [
  {
    image: '/images/alienware.jpg',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con excelente calidad de sonido.',
    price: 50,
  },
  {
    image: '/images/xiaomi.jpg',
    name: 'Smartphone',
    description: 'Smartphone con pantalla OLED y cámara de alta resolución.',
    price: 800,
  },
  {
    image: '/images/alienware.jpg',
    name: 'Laptop Gamer',
    description: 'Laptop con procesador potente y tarjeta gráfica de última generación.',
    price: 1200,
  },
  {
    image: '/images/xiaomi.jpg',
    name: 'Mouse Inalámbrico',
    description: 'Mouse inalámbrico ergonómico con gran precisión.',
    price: 25,
  },
  {
    image: '/images/alienware.jpg',
    name: 'Smartwatch',
    description: 'Reloj inteligente con monitoreo de salud y notificaciones.',
    price: 150,
  },
  {
    image: '/images/xiaomi.jpg',
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico RGB con switches personalizables.',
    price: 100,
  },
];
