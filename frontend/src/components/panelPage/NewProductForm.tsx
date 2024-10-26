"use client"
 
/*import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"*/
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

import {

    FormItem,
  
  } from "@/components/ui/form"
import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"
//import { creatProduct } from "@/services/product.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from "@/lib/formValidations/productValidation"
import { Product } from "@/interfaces/product.inteface"



export const ProductForm = () => {

  const {register, handleSubmit, watch, formState: {errors}} =useForm<Product>({resolver: zodResolver(productSchema)})

 
  console.log(errors)

const onSubmit = handleSubmit(async(data) =>{
  console.log(watch)
  //console.log(data)
  /*const file = data.photo[0]
  
  const base64 = await convertFileToBase64(file);
  console.log(base64)
  data.photo = base64*/
  data.clientId = 1
  //data.price =  parseFloat(data.price) 
  //data.stock = parseInt(data.stock)
  console.log(data)
 // const base64 = await convertFileToBase64(data.photo)


 //const response = await creatProduct(data)
// console.log(response)
})


  return (
    <form  className="w-full" onSubmit={onSubmit}>
      <div className="flex gap-6 justify-between">
      <FormItem>
        <Label className="block pt-4 pb-1">
        Nombre del Producto
        </Label>
        <Input className="block" type="text" {...register("name")} />
        {errors.name?.message && <p className="text-xs text-red-700">{errors.name?.message}</p>}
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Precio
        </Label>
        <Input className="block" type="text" {...register("price")} />
        {errors.price?.message && <p className="text-xs text-red-700">{errors.price?.message}</p>}
    </FormItem>
      </div>
   
    <FormItem>
        <Label className="block pt-4 pb-1">
        Descripción corta
        </Label>
        <Input className="block" type="text" {...register("shortDescription")} />
        {errors.shortDescription?.message && <p className="text-xs text-red-700">{errors.shortDescription?.message}</p>}
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Descripción
        </Label>
        <Textarea placeholder="Type your message here." id="message" className="h-60" {...register("description")}/>
        {errors.description?.message && <p className="text-xs text-red-700">{errors.description?.message}</p>}
    </FormItem>
    <div className="flex gap-6 justify-between">
    <FormItem>
        <Label className="block pt-4 pb-1">
        Imagen
        </Label>
        <Input className="block" type="text" {...register("photoUrl")} />
        {errors.photoUrl?.message && <p className="text-xs text-red-700">{errors.photoUrl?.message}</p>}
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Categoria
        </Label>
        <Input className="block" type="text" {...register("category")} />
        {errors.category?.message && <p className="text-xs text-red-700">{errors.category?.message}</p>}
    </FormItem>

    </div>
    <div className="flex gap-6 justify-between">
    <FormItem>
        <Label className="block pt-4 pb-1">
        Stock
        </Label>
        <Input className="block" type="text" {...register("stock")} />
        {errors.stock?.message && <p className="text-xs text-red-700">{errors.stock?.message}</p>}
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Marca
        </Label>
        <Input className="block" type="text" {...register("brand")}/>
        {errors.brand?.message && <p className="text-xs text-red-700">{errors.brand?.message}</p>}
    </FormItem>
   
    </div>

        <Button className="w-full my-8" type="submit">Crear producto</Button>

        <div>
          {JSON.stringify(watch(), null, 2)}
        </div>
    </form>
  )
}
