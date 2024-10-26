"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { baneres } from "@/lib/utils";

export const MainCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-7xl mx-auto h-auto"
    >
      <CarouselContent className="-ml-1">
        {/* Primer ítem del carousel */}
        <CarouselItem className="relative w-full md:h-[450px] h-60">
          <Image
            src="/images/baner1.jpeg"
            alt="Baner"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Texto dentro del banner */}
          <p
            className="absolute text-white font-bold rounded-xl text-center p-2 bg-opacity-70 bg-black
            md:text-5xl text-xs
            md:top-8 top-2 
            md:left-4 left-2 
            md:w-2/5 w-3/5"
          >
            Los mejores productos tecnológicos los encuentras en SmartStore
          </p>

          {/* Botón de enlace a productos */}
          <Link
            href="/products"
            className="absolute text-white bg-[#3331B9] hover:bg-[#F2660B] rounded-lg 
            md:text-xl text-xs 
            md:px-9 p-2 
            md:top-80 top-20 
            md:left-40 left-10"
          >
            Ver productos
          </Link>
        </CarouselItem>

        {/* Generación dinámica de los ítems del carousel */}
        {baneres.map((product, index) => (
          <CarouselItem
            key={index}
            className="relative w-full md:h-[450px] h-60"
          >
            <Image
              src={product.url}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Botones de navegación del carousel */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
