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

 export const baneres = [ 
  {url: '/images/monitorAsus.webp', name: 'Monitor asus'},
  {url: '/images/macBookM3.webp', name: 'Mac book' },
  {url: '/images/descuentoTelevisores.webp', name: 'MAc' },
 
 ]

export const marcasList = [
  {url: '/images/Marcas/46.jpg', name: 'Xiaomi'},
  {url: '/images/Marcas/18.jpg', name: 'Logitech'},
  {url: '/images/Marcas/37.jpg', name: 'Kingstom'},
  {url: '/images/Marcas/23.jpg', name: 'Asus'},
  {url: '/images/Marcas/25.jpg', name: 'Apple'},
  {url: '/images/Marcas/40.jpg', name: 'Amazon'},
  {url: '/images/Marcas/14.jpg', name: 'AlienWare'},
  {url: '/images/Marcas/20.jpg', name: 'Epson'},
  {url: '/images/Marcas/32.jpg', name: 'Dell'},
  {url: '/images/Marcas/5.jpg', name: 'Dlink'},
  {url: '/images/Marcas/45.jpg', name: 'Huawei'},
  {url: '/images/Marcas/36.jpg', name: 'hp'},
]