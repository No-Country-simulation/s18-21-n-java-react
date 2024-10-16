'use client'
import React from 'react'
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const baneres = [ 
 {url: '/images/monitorAsus.webp', name: 'Monitor asus'
  },
  {url: '/images/alienware.jpg',  name: 'laptop'  },
 {url: '/images/macBookM3.webp', name: 'MAc' },

]


export const MainCarousel = () => {

  return (
    <Carousel 
    plugins={[
      Autoplay({
        delay: 3000,
      }),
    ]}
    className="w-11/12 h-auto  " 
   //className="w-full h-full " 
   
    >
      <CarouselContent className="-ml-1 ">

      {baneres.map((product, index) => (
          <CarouselItem key={index} className="pl-1 w-11/12 h-[450px] relative">
          <Image
          src={product.url}
          alt={product.name}
          fill
          objectFit="fill"
     
        />
    
          </CarouselItem>
        ))}


      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
