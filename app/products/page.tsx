"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { CategoryFilter } from "@/components/category-filter"
import { products } from "@/lib/products"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 md:mb-8">Todos los Productos</h1>

        <div className="mb-6 md:mb-8 overflow-x-auto pb-2">
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
