import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from './ProductCard';
import { productList } from '@/lib/utils';



export const ProductsCarousel = () => {
  return (
    <Carousel className="w-9/12  ">
      <CarouselContent className="-ml-1">
      {productList.map((product, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <ProductCard key={index} product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
