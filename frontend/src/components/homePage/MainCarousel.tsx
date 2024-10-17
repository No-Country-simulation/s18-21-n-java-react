'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
//import {  buttonVariants } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { baneres } from '@/lib/utils';


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
      <CarouselItem className="pl-1 w-11/12 md:h-[450px] h-60 relative">
      <Image
             src='/images/baner1.jpeg'
             alt='Baner'
             fill
             objectFit="fill"
          />
         <p className="md:text-5xl text-xs font-bold absolute  md:top-8 top-2 md:left-4 left-[-12px] p-6 text-center rounded-xl   md:w-2/5 w-3/5 text-white  ">Los mejores productos tecnológicos los encuentras en SmartStore</p>
      <Link href="/products" className='  absolute md:top-80 top-20 mt-8 md:text-xl text-xs md:left-40 left-10 md:px-9 p-2 rounded-lg text-white bg-[#3331B9] hover:bg-[#F2660B] '> Ver productos </Link>
       </CarouselItem>
      {baneres.map((product, index) => (
          <CarouselItem key={index} className="pl-1 w-11/12 md:h-[450px] h-60 relative">
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
