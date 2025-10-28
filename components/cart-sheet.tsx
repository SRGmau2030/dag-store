"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"

export function CartSheet() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-12">
        <p className="text-muted-foreground mb-4">Tu carrito está vacío</p>
        <p className="text-sm text-muted-foreground">¡Agrega algunas mascotas o accesorios para comenzar!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4 min-h-0">
        <div className="space-y-4 px-1">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 border-b border-border pb-4">
              <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1 space-y-2 min-w-0">
                <div className="flex justify-between gap-2">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 flex-shrink-0"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <p className="font-medium text-sm whitespace-nowrap">
                    ${(item.price * item.quantity).toFixed(2)} MXN
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4 pb-2 space-y-4 flex-shrink-0 bg-background">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)} MXN</span>
        </div>

        <div className="space-y-2">
          <Button className="w-full" size="lg">
            Pagar
          </Button>
          <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </div>
      </div>
    </div>
  )
}
