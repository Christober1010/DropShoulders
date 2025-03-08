"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Filter, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { getProducts } from "@/lib/api"
import type { Product } from "@/lib/types"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryParam ? [categoryParam] : [])

  useEffect(() => {
    async function loadProducts() {
      try {
        const allProducts = await getProducts({
          category: selectedCategories.length > 0 ? selectedCategories : undefined,
          minPrice: priceRange[0],
          maxPrice: priceRange[1],
        })
        setProducts(allProducts)
      } catch (error) {
        console.error("Failed to load products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [selectedCategories, priceRange])

  // Placeholder products for initial render
  const placeholderProducts = Array(8)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: `Drop Shoulder T-Shirt ${index + 1}`,
      price: 29.99 + index * 5,
      image: "/placeholder.svg?height=400&width=400",
      category: index % 3 === 0 ? "basic" : index % 3 === 1 ? "graphic" : "oversized",
    }))

  const displayProducts = loading ? placeholderProducts : products.length > 0 ? products : placeholderProducts

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const categories = [
    { id: "basic", label: "Basic Tees" },
    { id: "graphic", label: "Graphic Tees" },
    { id: "oversized", label: "Oversized Tees" },
    { id: "limited", label: "Limited Edition" },
    { id: "new", label: "New Arrivals" },
  ]

  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden mb-4">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow down your product search with these filters.</SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mobile-category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <Label htmlFor={`mobile-category-${category.id}`}>{category.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Price Range</h3>
                  <p className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
                <Slider
                  defaultValue={priceRange}
                  max={200}
                  step={5}
                  onValueChange={(value) => setPriceRange(value as number[])}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-1/6 space-y-6">
          <div className="sticky top-0">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Price Range</h3>
                  <p className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
                <Slider
                  defaultValue={priceRange}
                  max={200}
                  step={5}
                  onValueChange={(value) => setPriceRange(value as number[])}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">All Products</h1>
              <p className="text-muted-foreground">{displayProducts.length} products found</p>
            </div>
            <div className="mt-4 sm:mt-0 w-full sm:w-auto">
              <Input placeholder="Search products..." className="max-w-xs" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <div className="flex gap-2 w-full">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/products/${product.id}`}>Details</Link>
                    </Button>
                    <Button size="icon">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

