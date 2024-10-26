import React from 'react'
import Image from "next/image";
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"
import { Product } from '@/interfaces/product.inteface';
//import { Prodocut } from '@/lib/formValidations/productValidation';




export const CardPanelProducts = ({photoUrl, name, price, brand}: Product) => {
  return (
    <div className='w-full flex  rounded-2xl border shadow-md shadow-purple-300 hover:scale-110'>

    <div className='w-2/6 flex flex-col items-center '>
        <div className='w-32 h-32 relative '>
        <Image
             src={photoUrl}
             alt={name}
             fill
             className=' max-w-none p-4 object-fill'
            />
        </div>
        <div>
          <p className='text-center'>$ {price}</p>   
        </div>
    </div>
    <div className='w-3/6 flex flex-col justify-center gap-2 '>
        <div>
            <p>{brand}</p>
        </div>
        <div>
            <p className='text-xl'>{name}</p>
        </div>
    </div>
    <div className='w-1/6  flex flex-col items-center justify-center gap-8'>
        <div>
       
            <FaEdit className='w-6 h-6 hover:text-green-400'/>
        </div>
        <div>
           <MdDelete className='h-8 w-8 text-red-800 hover:text-black'/>
        </div>
    </div>
    </div>
  )
}
