"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { CategoryFilter } from "@/components/category-filter"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  const featuredProducts = products.slice(0, 6)

  return (
    <div className="min-h-screen">
      <section className="relative bg-white py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Fish icons */}
          <div className="pet-icon pet-icon-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary/20">
              <path d="M12 2c-1.5 0-2.5 1-3 2-1 0-2 .5-3 1.5C4.5 6.5 4 8 4 9.5c0 1 .5 2 1 2.5-.5.5-1 1.5-1 2.5 0 1.5.5 3 2 4 1 1 2 1.5 3 1.5.5 1 1.5 2 3 2s2.5-1 3-2c1 0 2-.5 3-1.5 1.5-1 2-2.5 2-4 0-1-.5-2-1-2.5.5-.5 1-1.5 1-2.5 0-1.5-.5-3-2-4.5-1-1-2-1.5-3-1.5-.5-1-1.5-2-3-2zm0 2c.5 0 1 .5 1 1v1c1 0 1.5.5 2 1 1 1 1.5 2 1.5 3 0 .5-.5 1-1 1h-1c0 1-.5 1.5-1 2h1c.5 0 1 .5 1 1 0 1-.5 2-1.5 3-.5.5-1 1-2 1v1c0 .5-.5 1-1 1s-1-.5-1-1v-1c-1 0-1.5-.5-2-1-1-1-1.5-2-1.5-3 0-.5.5-1 1-1h1c0-1 .5-1.5 1-2H8c-.5 0-1-.5-1-1 0-1 .5-2 1.5-3 .5-.5 1-1 2-1V5c0-.5.5-1 1-1z" />
            </svg>
          </div>
          <div className="pet-icon pet-icon-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary/20">
              <path d="M12 2c-1.5 0-2.5 1-3 2-1 0-2 .5-3 1.5C4.5 6.5 4 8 4 9.5c0 1 .5 2 1 2.5-.5.5-1 1.5-1 2.5 0 1.5.5 3 2 4 1 1 2 1.5 3 1.5.5 1 1.5 2 3 2s2.5-1 3-2c1 0 2-.5 3-1.5 1.5-1 2-2.5 2-4 0-1-.5-2-1-2.5.5-.5 1-1.5 1-2.5 0-1.5-.5-3-2-4.5-1-1-2-1.5-3-1.5-.5-1-1.5-2-3-2zm0 2c.5 0 1 .5 1 1v1c1 0 1.5.5 2 1 1 1 1.5 2 1.5 3 0 .5-.5 1-1 1h-1c0 1-.5 1.5-1 2h1c.5 0 1 .5 1 1 0 1-.5 2-1.5 3-.5.5-1 1-2 1v1c0 .5-.5 1-1 1s-1-.5-1-1v-1c-1 0-1.5-.5-2-1-1-1-1.5-2-1.5-3 0-.5.5-1 1-1h1c0-1 .5-1.5 1-2H8c-.5 0-1-.5-1-1 0-1 .5-2 1.5-3 .5-.5 1-1 2-1V5c0-.5.5-1 1-1z" />
            </svg>
          </div>

          {/* Gecko icons */}
          <div className="pet-icon pet-icon-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent/20">
              <path d="M12 2c-2 0-3.5 1-4.5 2.5C6 5.5 5 7 5 9c0 1 .5 2 1 2.5-.5.5-1 1.5-1 2.5 0 2 1 3.5 2.5 4.5 1 .5 2 1 3 1 .5 1 1.5 2 3.5 2s3-1 3.5-2c1 0 2-.5 3-1 1.5-1 2.5-2.5 2.5-4.5 0-1-.5-2-1-2.5.5-.5 1-1.5 1-2.5 0-2-1-3.5-2.5-4.5C18.5 3 17 2 15 2c-.5 0-1 0-1.5.5-.5-.5-1-.5-1.5-.5zm0 2c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z" />
            </svg>
          </div>
          <div className="pet-icon pet-icon-4">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent/20">
              <path d="M12 2c-2 0-3.5 1-4.5 2.5C6 5.5 5 7 5 9c0 1 .5 2 1 2.5-.5.5-1 1.5-1 2.5 0 2 1 3.5 2.5 4.5 1 .5 2 1 3 1 .5 1 1.5 2 3.5 2s3-1 3.5-2c1 0 2-.5 3-1 1.5-1 2.5-2.5 2.5-4.5 0-1-.5-2-1-2.5.5-.5 1-1.5 1-2.5 0-2-1-3.5-2.5-4.5C18.5 3 17 2 15 2c-.5 0-1 0-1.5.5-.5-.5-1-.5-1.5-.5zm0 2c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z" />
            </svg>
          </div>

          {/* Snake icons */}
          <div className="pet-icon pet-icon-5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-muted-foreground/20">
              <path d="M12 2C9 2 7 3 6 5c-1 1-1 2-1 3 0 1 0 2 1 3 0 1 1 2 2 2h1c0 1 1 2 2 3 1 0 2 1 3 1s2-1 3-1c1-1 2-2 2-3h1c1 0 2-1 2-2 1-1 1-2 1-3 0-1 0-2-1-3-1-2-3-3-6-3zm0 2c2 0 3 1 4 2 0 1 1 1 1 2s-1 1-1 2h-1c-1 0-2 1-2 2-1 1-2 1-3 1s-2 0-3-1c0-1-1-2-2-2H4c0-1-1-1-1-2s1-1 1-2c1-1 2-2 4-2z" />
            </svg>
          </div>
          <div className="pet-icon pet-icon-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-muted-foreground/20">
              <path d="M12 2C9 2 7 3 6 5c-1 1-1 2-1 3 0 1 0 2 1 3 0 1 1 2 2 2h1c0 1 1 2 2 3 1 0 2 1 3 1s2-1 3-1c1-1 2-2 2-3h1c1 0 2-1 2-2 1-1 1-2 1-3 0-1 0-2-1-3-1-2-3-3-6-3zm0 2c2 0 3 1 4 2 0 1 1 1 1 2s-1 1-1 2h-1c-1 0-2 1-2 2-1 1-2 1-3 1s-2 0-3-1c0-1-1-2-2-2H4c0-1-1-1-1-2s1-1 1-2c1-1 2-2 4-2z" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance text-primary">
            Bienvenido a DAG Store
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary/80 mb-8 text-pretty">
            Tu fuente confiable para mascotas exóticas y suministros premium. Nos especializamos en peces, geckos,
            serpientes y todo lo que necesitan para prosperar.
          </p>
          <Button size="lg" variant="default" asChild className="shadow-xl hover:shadow-2xl transition-shadow">
            <Link href="/products">Comprar Ahora</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
            Comprar por Categoría
          </h2>

          <div className="mb-8 flex justify-center overflow-x-auto pb-2">
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl mb-4">🐠</div>
              <h3 className="font-semibold text-lg mb-2">Mascotas Saludables</h3>
              <p className="text-sm text-muted-foreground">
                Todos nuestros animales están sanos, bien cuidados y listos para sus nuevos hogares.
              </p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl mb-4">📦</div>
              <h3 className="font-semibold text-lg mb-2">Envío Rápido</h3>
              <p className="text-sm text-muted-foreground">
                Entrega rápida y segura de todos los suministros y equipos a tu puerta.
              </p>
            </div>
            <div className="p-4 sm:col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl mb-4">💬</div>
              <h3 className="font-semibold text-lg mb-2">Soporte Experto</h3>
              <p className="text-sm text-muted-foreground">
                Nuestro equipo está aquí para ayudarte con consejos de cuidado y recomendaciones de productos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
