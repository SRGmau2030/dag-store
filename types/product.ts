export interface Product {
  id: string
  name: string
  category: "fish" | "gecko" | "snake" | "aquarium" | "terrarium" | "food" | "accessory"
  price: number
  image: string
  description: string
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}
