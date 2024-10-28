'use client'
import { CardPanelProducts } from "@/components/panelPage/CardPanelProducts";
import { ProductForm } from "@/components/panelPage/NewProductForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getProduct } from "@/interfaces/product.inteface";

import { getAllProducts } from "@/services/product.service";
import { useEffect, useState } from "react";

export default function ControlPanel() {
 const [dataProduts, setDataProducts] = useState<getProduct[]>()
 useEffect(()=>{
  const fetchData = async () => {
    try {
      const allProducts: getProduct[] = await getAllProducts()
     if(allProducts){
      setDataProducts(allProducts)
     } else {
      console.log("error")
     }

    } catch (error) {
      console.log('error: ' ,error)
    }
   
  }
  fetchData()
 },[])

    return ( 
        <div>
          <h2 className="text-5xl text-center my-6 font-bold">Panel de Control </h2>
         <div className="flex">

                <div className="w-2/5 bg-slate-400 flex items-center justify-center">
                  <p > datos del usuario </p>
                </div >
                <div className="w-3/5  flex flex-col items-center">
                    <p className="text-2xl my-4 ">Mis productos registrados</p>

                    <Dialog>
                    <DialogTrigger asChild>
                    <Button  className="my-4">Nuevo Producto</Button>
                    </DialogTrigger> 
                    <DialogContent className="w-11/12 bg-slate-200 h-4/5 overflow-y-auto ">
                       <DialogHeader>
                        <DialogTitle>Registrar nuevo producto</DialogTitle>
                        </DialogHeader>
                        <div className="w-full flex justify-center">
                     <ProductForm/>
                     </div>
                     </DialogContent>
                    </Dialog>


                  
                       <div className="w-11/12  p-4 flex flex-col gap-4">
                         
                       {(dataProduts ?? []).map((product, index: number) => (
                       <CardPanelProducts key={index} {...product}/>
                         )) }
                    
                       </div>

                       
        
                </div>
       
        </div>
       </div>
    )}