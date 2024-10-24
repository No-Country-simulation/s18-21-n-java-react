

const url = 'https://deploy-smart-store.onrender.com/api/v1/products'


export const creatProduct = async (data) =>{

    const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log('res de la func ' + res)
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