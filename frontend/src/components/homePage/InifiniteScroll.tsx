import React from 'react'
import Image from "next/image";
import { marcasList } from '@/lib/utils';


export const InifiniteScroll = () => {
  return (
    <div className='flex space-x-16 overflow-hidden  py-6'>
        
        <div className='w-10/12 h-auto flex space-x-16 animate-loop-scroll'>
        {marcasList.map((marca, index) => (
        <div className='md:h-36 md:w-36 h-28 w-28 border rounded-xl shadow-lg shadow-purple-300 relative' key={`${index}+i`}>
            <Image
             src={marca.url}
             alt={marca.name}
             fill
             className=' max-w-none p-4 object-fill'
            />
        </div>
           ))}
    </div>

    <div className='w-10/12 h-auto flex space-x-16 animate-loop-scroll ' aria-hidden='true'>
        {marcasList.map((marca, index) => (
        <div className='md:h-36 md:w-36 h-28 w-28 border rounded-xl shadow-lg shadow-purple-300 relative' key={index}>
            <Image
             src={marca.url}
             alt={marca.name}
             fill
             
             className=' max-w-none p-4 object-fill'
            />
        </div>
           ))}
    </div>

    </div>
    
  )
}
