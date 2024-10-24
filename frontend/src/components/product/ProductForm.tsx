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
import { creatProduct } from "@/services/product.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from "@/lib/formValidations/productValidation"



export const ProductForm = () => {

  const {register, handleSubmit, watch, formState: {errors}} =useForm({resolver: zodResolver(productSchema)})

  /*const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Eliminar el prefijo del base64 (data:image/png;base64,)
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };*/
  console.log(errors)

const onSubmit = handleSubmit(async(data) =>{
  console.log(watch)
  /*const file = data.photo[0]
  
  const base64 = await convertFileToBase64(file);
  console.log(base64)
  data.photo = base64*/
  data.clientId = 1
  data.price =  parseFloat(data.price) 
  data.stock = parseInt(data.stock)
  console.log(data)
 // const base64 = await convertFileToBase64(data.photo)


 //const response = await creatProduct(data)
// console.log(response)
})


  return (
    <form  className="w-2/4" onSubmit={onSubmit}>
      <div className="flex justify-between">
      <FormItem>
        <Label className="block pt-4 pb-1">
        Nombre del Producto
        </Label>
        <Input className="block" type="text" {...register("name")} />
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Precio
        </Label>
        <Input className="block" type="text" {...register("price")} />
    </FormItem>
      </div>
   
    <FormItem>
        <Label className="block pt-4 pb-1">
        Descripción corta
        </Label>
        <Input className="block" type="text" {...register("shortDescription")} />
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Descripción
        </Label>
        <Textarea placeholder="Type your message here." id="message" className="h-60" {...register("description")}/>
    </FormItem>
    <div className="flex justify-between">
    <FormItem>
        <Label className="block pt-4 pb-1">
        Imagen
        </Label>
        <Input className="block" type="file" {...register("photo")} />
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Categoria
        </Label>
        <Input className="block" type="text" {...register("category")} />
    </FormItem>

    </div>
    <div className="flex justify-between">
    <FormItem>
        <Label className="block pt-4 pb-1">
        Stock
        </Label>
        <Input className="block" type="text" {...register("stock")} />
    </FormItem>
    <FormItem>
        <Label className="block pt-4 pb-1">
        Brand
        </Label>
        <Input className="block" type="text" {...register("brand")}/>
    </FormItem>
   
    </div>

        <Button className="w-full my-8" type="submit">Crear producto</Button>

        <div>
          {JSON.stringify(watch(), null, 2)}
        </div>
    </form>
  )
}
