"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getProducts } from "@/lib/api"
import type { Product } from "@/lib/types"

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        const featuredProducts = await getProducts({ featured: true, limit: 4 })
        setProducts(featuredProducts)
      } catch (error) {
        console.error("Failed to load featured products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  // Placeholder products for initial render
  const placeholderProducts = [
    { id: 1, name: "Classic Drop Shoulder Tee", price: 29.99, image: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991" },
    { id: 2, name: "Oversized Drop Shoulder Tee", price: 34.99, image: "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493" },
    { id: 3, name: "Striped Drop Shoulder Tee", price: 32.99, image: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991" },
    { id: 4, name: "Graphic Drop Shoulder Tee", price: 39.99, image: "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493" },
  ]

  const displayProducts = loading ? placeholderProducts : products.length > 0 ? products : placeholderProducts

  return (
    <section className="py-12 md:py-16">
      <div className="w-[90%] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Featured Products</h2>
            <p className="text-muted-foreground">Our most popular drop shoulder t-shirts</p>
          </div>
          <Button asChild variant="link" className="mt-4 md:mt-0 p-0">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  )
}

