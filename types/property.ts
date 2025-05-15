export interface Property {
  id: string
  title: string
  description: string
  price: string
  priceNumeric: number // Para facilitar ordenamiento y filtrado
  location: string
  bedrooms?: number
  bathrooms?: number
  area: number
  features?: string[]
  type: "casa" | "terreno"
  featured: boolean
  images: string[]
  createdAt: string
}
