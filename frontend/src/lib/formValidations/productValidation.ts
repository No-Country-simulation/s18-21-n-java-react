import { z } from "zod";
const MAX_PHOTO = 5000000
const IMAGE_TYPES = ["image/webp", "image/jpeg", "image/jpg", "image/png"]

export const productSchema = z.object({
    name: z.string().min(3,{
        message: 'El nombre debe tener almenos 3 caracteres'
    }),
    price: z.string().refine(price => !isNaN(parseFloat(price)),{
        message: 'El precio debe ser un numero'
    }),
    description: z.string().min(20,{
        message: 'La descripción debe tener almenos 2 caracteres'
    }),
    brand: z.string().min(2,{
        message: 'La marca debe tener almenos 2 caracteres' 
    }),
    photo: z.any().refine(file => file?.size <= MAX_PHOTO,'Tamaño de archivo permitido 5MB'
    ).refine(file => IMAGE_TYPES.includes(file?.type),  'Solo Imagenes con formato .webp, .jpeg, .jpg, .png'),
    category: z.string().min(4,{
        message: 'La categoria debe tener almenos 4 caracteres'
    }),
    stock: z.string().refine(stock => !isNaN(parseFloat(stock)),{
        message: 'El stock debe ser un numero'
    }),
    shortDescription: z.string().min(6, {
        message: 'La descripción debe tener almenos 6 caracteres'
    }),
    clientId: z.number().optional()
})