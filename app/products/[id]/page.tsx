"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { getProductById } from "@/lib/api"
import type { Product } from "@/lib/types"

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    async function loadProduct() {
      try {
        if (typeof id === "string") {
          const productData = await getProductById(id)
          setProduct(productData)
        }
      } catch (error) {
        console.error("Failed to load product:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  // Placeholder product for initial render
  const placeholderProduct = {
    id: "1",
    name: "Premium Drop Shoulder T-Shirt",
    price: 39.99,
    description: "A comfortable and stylish drop shoulder t-shirt made from premium materials.",
    colors: ["black", "white", "navy", "gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: [
      "100% premium cotton",
      "Relaxed drop shoulder fit",
      "Ribbed crew neck",
      "Reinforced stitching",
      "Pre-shrunk fabric",
    ],
    care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
  }

  const displayProduct = loading || !product ? placeholderProduct : product

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <Image
              src={displayProduct.images[activeImage] || "/placeholder.svg"}
              alt={displayProduct.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {displayProduct.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square relative rounded-md overflow-hidden border ${
                  activeImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${displayProduct.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{displayProduct.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">(24 reviews)</span>
            </div>
            <p className="text-2xl font-bold mt-4">${displayProduct.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{displayProduct.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
                {displayProduct.colors.map((color) => (
                  <div key={color} className="flex items-center">
                    <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                    <Label
                      htmlFor={`color-${color}`}
                      className="flex items-center justify-center rounded-md border-2 border-muted p-2 hover:border-primary peer-checked:border-primary"
                    >
                      <span className="capitalize">{color}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                {displayProduct.sizes.map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-muted hover:border-primary peer-checked:border-primary peer-checked:font-medium uppercase"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="sm:flex-1" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 mt-4">
              <p>
                This premium drop shoulder t-shirt is designed for maximum comfort and style. The relaxed fit provides a
                modern silhouette while maintaining a casual look that can be dressed up or down.
              </p>
              <p>
                Made from 100% premium cotton, this t-shirt is soft, breathable, and perfect for everyday wear. The drop
                shoulder design gives it a contemporary edge that sets it apart from standard tees.
              </p>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <ul className="list-disc pl-5 space-y-2">
                {displayProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="care" className="mt-4">
              <ul className="list-disc pl-5 space-y-2">
                {displayProduct.care.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

