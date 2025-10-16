"use client"

import type { Product } from "@/types/product"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const categoryLabels: Record<Product["category"], string> = {
    fish: "Pez",
    gecko: "Gecko",
    snake: "Serpiente",
    aquarium: "Acuario",
    terrarium: "Terrario",
    food: "Alimento",
    accessory: "Accesorio",
  }

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "¡Producto agregado!",
      description: `${product.name} se agregó a tu carrito`,
      duration: 3000,
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">
          {categoryLabels[product.category]}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-balance">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)} MXN</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleAddToCart} disabled={!product.inStock}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Agregar al Carrito" : "Agotado"}
        </Button>
      </CardFooter>
    </Card>
  )
}
