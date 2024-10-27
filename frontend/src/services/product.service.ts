import { Product } from "@/interfaces/product.inteface";
import { Prodocut } from "@/lib/formValidations/productValidation";


const URL = 'https://deploy-smart-store.onrender.com/api/v1/products'
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcnVlYmEwMUBnbWFpbC5jb20iLCJpYXQiOjE3Mjk5NTQ4NzAsImV4cCI6MTczMDA1OTI3MH0.wI-BRbJk9v2f_a7-LWQvbFBLzkjYe3mPOAn-cucOLRU'

export const creatProduct = async (data) =>{

    const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`
        },
        body: data,
    });
    console.log('res de la func ' + res)
      return await res.json()
    
}


export const getAllProducts = async () => {
  try {
    const res = await fetch(URL+'?page=2')
    if (!res.status) {
      throw new Error('Error en la petición: ' + res.status);
    }
    const data = await res.json()
    return data.dataList
    
  } catch (error) {
    console.log(error)
  }

}

export const updateProduct = async (data: Product, id: string) => {
  try {
    const res = await fetch(URL+`${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify(data),
    });
    if (!res.status) {
      throw new Error('Error en la petición: ' + res.status);
    }else {
      return res 
    }
  } catch (error) {
    console.log(error)
  }
}

export const getProductById = async (data: Product, id: string) => {
  try {
    const res = await fetch(URL+`${id}`)
    if (!res.status) {
      throw new Error('Error en la petición: ' + res.status);
    }
    const data = await res.json()
    return data.data
    
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductById = async ( id: string) => {
  try {
    const res = await fetch(URL+`${id}`, {
      method: "DELETE", 
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.status) {
      throw new Error('Error en la petición: ' + res.status);
    }
    //const data = await res.json()
    return res
    
  } catch (error) {
    console.log(error)
  }
}

/**
 * estos son los datos que estoy enviando: brand
: 
"MONITOR LG"
category
: 
"ELECTRONICOS"
clientId
: 
1
description
: 
"MONITOR LG 24INCH UltraGar FHD IPS 1920X1080 D-Sub HDMI 180Hz 1ms G-Sync"
name
: 
"MONITOR LG 24INCH UltraGar FHD"
phone
: 
FileList {0: File, length: 1}
price
: 
"300"
shortDescription
: 
"MONITOR LG 24INCH UltraGar FHD IPS"
stock
: 
"4"           y esta es la funcion que estoy mandando  const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
 */