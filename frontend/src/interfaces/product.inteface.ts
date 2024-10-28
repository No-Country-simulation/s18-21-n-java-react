
export interface getProduct {
    id: number,
    name: string,
    price: number,
    description: string,
    brand: string,
    photoUrl: string,
    category: string,
    stock: number,
    shortDescription: string,
    clientId: number
}

export interface postProduct {
    name: string,
    price: number,
    description: string,
    brand: string,
    photo: FileList,
    category: string,
    stock: number,
    shortDescription: string,
    clientId: number
}