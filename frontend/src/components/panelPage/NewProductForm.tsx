"use client"
 
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
import { TypeZodProduct, productSchema } from "@/lib/formValidations/productValidation"

import { useToast } from "@/hooks/use-toast"





export const ProductForm = () => {

  const {register, handleSubmit, formState: {errors}} =useForm<TypeZodProduct>({resolver: zodResolver(productSchema)})
 const { toast } = useToast()
 const dataUser = localStorage.getItem('user')
  const jsnUser = JSON.parse(dataUser || '')

 

const onSubmit = handleSubmit(async(data) =>{

  try {
    data.clientId = jsnUser.id.toString();
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("photo", data.photo[0]);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    formData.append("shortDescription", data.shortDescription);
    if(data.clientId){
      formData.append("clientId", data.clientId);
    }

   
       const res = await creatProduct(formData)
       if(!res.status){
        toast({
          title: "Fallo el registro ",
          description: "El producto no se puedo registrar",
          variant: 'destructive'
        })
      
       } else {
        toast({
          title: "Registro exitoso ",
          description: "El producto se pudo registrar exitosamente",
          className: "bg-green-300"
        })
       }
 
  }  catch (error) {
    console.log(error)
  }

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
        <Input className="block" type="file" {...register("photo")} />
        {typeof errors.photo?.message === "string" && <p className="text-xs text-red-700">{errors.photo.message}</p>}
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

       
    </form>
  )
}