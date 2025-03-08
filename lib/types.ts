export interface User {
  id: string
  name: string
  email: string
  image?: string
  phone?: string
  address?: string
  bio?: string
}

export interface Product {
  id: string | number
  name: string
  price: number
  description?: string
  image: string
  images?: string[]
  category?: string
  colors?: string[]
  sizes?: string[]
  features?: string[]
  care?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  color?: string
  size?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  shippingAddress: Address
  billingAddress: Address
}

export interface Address {
  name: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

