import React from 'react'
import { FormItem } from '../ui/form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from '@/lib/formValidations/productValidation'
import { Button } from '../ui/button'


export const UpdateProdcutForm = () => {
    const {register, handleSubmit, watch} =useForm({resolver: zodResolver(productSchema)})


    const onSubmit = handleSubmit(async(data) =>{
        console.log(data)
    })

  return (
    <form  className="w-full" onSubmit={onSubmit}>
    <div className="flex gap-6 justify-between">
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
  <div className="flex gap-6 justify-between">
  <FormItem>
      <Label className="block pt-4 pb-1">
      Imagen
      </Label>
      <Input className="block" type="text" {...register("photo")} />
  </FormItem>
  <FormItem>
      <Label className="block pt-4 pb-1">
      Categoria
      </Label>
      <Input className="block" type="text" {...register("category")} />
  </FormItem>

  </div>
  <div className="flex gap-6 justify-between">
  <FormItem>
      <Label className="block pt-4 pb-1">
      Stock
      </Label>
      <Input className="block" type="text" {...register("stock")} />about:blank#blocked
  </FormItem>
  <FormItem>
      <Label className="block pt-4 pb-1">
      Brand
      </Label>
      <Input className="block" type="text" {...register("brand")}/>
  </FormItem>
 
  </div>

      <Button className="w-full my-8" type="submit">Actualizar producto</Button>

      <div>
        {JSON.stringify(watch(), null, 2)}
      </div>
  </form>
  )
}
