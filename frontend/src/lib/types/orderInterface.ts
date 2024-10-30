export interface DetailsOrder {
  productId: number,
  quantity: number,
}

export type Order = {detailsOrders: DetailsOrder[]};