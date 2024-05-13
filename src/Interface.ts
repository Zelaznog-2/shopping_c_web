export interface ProductDetails {
  id: number
  sku: string
  name: string
  price: string
  image: string
  category_id: number
  qty?: number
}

export interface ListPagination {
  url: string
  label: string
  active: boolean
}
