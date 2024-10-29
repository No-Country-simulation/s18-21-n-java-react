import React, { useEffect, useState } from 'react'
import { FormItem } from '../ui/form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { TypeZodProduct, productSchema } from '@/lib/formValidations/productValidation'
import { Button } from '../ui/button'
import { getProductById, updateProduct } from '@/services/product.service'


 const  productDefault: TypeZodProduct = {
    name: '',
    price: '' ,
    description: '',
    brand: '',
    photo: '',
    photoUrl: '',
    category: '',
    stock: '', 
    shortDescription: '', 
    clientId: '' 

}


export const UpdateProdcutForm = ({id}:{id: number}) => {
    const {register, handleSubmit, reset} =useForm({resolver: zodResolver(productSchema)})
    const [dataForm, setDataForm] = useState( productDefault )
    const { toast } = useToast()

    useEffect(()=>{
        const getFetch = async() =>{
        try {
           
                const datProduct = await getProductById(id.toString())
                console.log(datProduct)

                if(datProduct){
                    setDataForm(datProduct)
                    console.log(dataForm)
                    reset({
                        name: datProduct.name,
                        price: datProduct.price ,
                        description: datProduct.description,
                        brand: datProduct.brand,
                        photoUrl: datProduct.photoUrl,
                        category: datProduct.category,
                        stock: datProduct.stock, 
                        shortDescription: datProduct.shortDescription, 
                    })
                }


           
        } catch (error) {
            console.log(error)
        }
    }
        getFetch()
    
    },[])


    const onSubmit = handleSubmit(async(data) =>{
        
        try {
          
            const formData = new FormData();
        
            formData.append("name", data.name);
            formData.append("price", data.price);
            formData.append("description", data.description);
            formData.append("brand", data.brand);
            if(data.photo[0]) {
                formData.append("photo", data.photo[0]);
            }
            formData.append("category", data.category);
            formData.append("stock", data.stock);
            formData.append("shortDescription", data.shortDescription);
            
        //    console.log(Array.from(formData.entries()));
        
           
              const res = await updateProduct(formData, id?.toString())
               if(!res?.ok){
         
                toast({
                    title: "Fallo la actialización ",
                    description: "El producto no se puedo actualizar",
                    variant: 'destructive'
                  })
      
               } else {
                toast({
                    title: "Actualizacion exitosa ",
                    description: "El producto se pudo actualizar exitosamente",
                    className: "bg-green-300"
                  })
          
               }
           console.log(res)
          }  catch (error) {
            console.log(error)
          }
        
        
       // console.log(data)
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
      <Input className="block" type="file" {...register("photo")} />
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
      <Input className="block" type="text" {...register("stock")} />
  </FormItem>
  <FormItem>
      <Label className="block pt-4 pb-1">
      Brand
      </Label>
      <Input className="block" type="text" {...register("brand")}/>
  </FormItem>
 
  </div>

      <Button className="w-full my-8" type="submit">Actualizar producto</Button>
  </form>
  )
}
