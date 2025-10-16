"use client"

import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories: { value: string; label: string }[] = [
  { value: "all", label: "Todos los Productos" },
  { value: "fish", label: "Peces" },
  { value: "gecko", label: "Geckos" },
  { value: "snake", label: "Serpientes" },
  { value: "aquarium", label: "Acuarios" },
  { value: "terrarium", label: "Terrarios" },
  { value: "food", label: "Alimento" },
  { value: "accessory", label: "Accesorios" },
]

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          onClick={() => onCategoryChange(category.value)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
