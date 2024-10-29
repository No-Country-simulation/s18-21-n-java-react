//import { useEffect, useState } from 'react'
//import Image from "next/image";
import Link from "next/link";

export const InfoUser = () => {
/* const [userData, setUserData] = useState()

    useEffect (()=>{
       const getFetch = async() =>{
        try {
            const dataLocalUser = localStorage.getItem('user')
            const idUser = JSON.parse(dataLocalUser || '')
            const dataUser = await getUserById(idUser.toString())

            if(!dataUser.status){
                console.log("error al obtener datos del usuario")
            }
            setUserData(dataUser.data)

        } catch (error) {
            console.log(error)
        }
       } 
       getFetch()
        // get user 
    },[]) */
  return (
    <div className='flex flex-col p-4 w-3/4 h-2/4 rounded-2xl border shadow-md shadow-purple-300 '>
       <div className='w-44 h-44 relative bg-red-200 mb-10'>
      {/*  <Image
             src={userData.photoUrl}
             alt={userData.name}
             fill
             className=' max-w-none p-4 object-fill'
            /> */ }
        </div>
        <p className=' text-2xl my-6'>Compras</p>

        <div className='flex flex-col gap-4'>
            <Link href="#" className=' ml-5 hover:text-blue-400'>Pedidos</Link>
            <Link href="#" className='ml-5 hover:text-blue-400'>Favoritos</Link>
            <Link href="#" className='ml-5 hover:text-blue-400'>Tarjetas</Link>
            <Link href="#" className='ml-5 hover:text-blue-400'>Direcciones</Link>
        </div>
  

        <p className=' text-2xl my-6'>Vender</p>

        <div className='flex flex-col gap-4'>
        <Link href="#" className='ml-5 hover:text-blue-400'>Resumen</Link>
        <Link href="#" className='ml-5 hover:text-blue-400'>Órdenes</Link>
        <Link href="#" className='ml-5 hover:text-blue-400'>Productos</Link>
        </div>
    </div>
  )
}
