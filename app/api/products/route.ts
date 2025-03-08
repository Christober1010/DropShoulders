import { NextResponse } from "next/server"

// Mock database of products
const products = [
  {
    id: "1",
    name: "Classic Drop Shoulder Tee",
    price: 29.99,
    description: "A timeless drop shoulder t-shirt for everyday wear.",
    image: "/placeholder.svg?height=400&width=400",
    category: "basic",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["black", "white", "gray", "navy"],
    sizes: ["xs", "s", "m", "l", "xl"],
    features: ["100% cotton fabric", "Relaxed drop shoulder fit", "Ribbed crew neck", "Reinforced stitching"],
    care: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"],
  },
  // ... more products (same as in lib/api.ts)
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const category = searchParams.get("category")
  const minPrice = searchParams.get("minPrice") ? Number.parseFloat(searchParams.get("minPrice")!) : undefined
  const maxPrice = searchParams.get("maxPrice") ? Number.parseFloat(searchParams.get("maxPrice")!) : undefined
  const featured = searchParams.get("featured") === "true"
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined

  let filteredProducts = [...products]

  // Filter by category
  if (category) {
    const categories = category.split(",")
    filteredProducts = filteredProducts.filter((product) => categories.includes(product.category || ""))
  }

  // Filter by price
  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
  }

  // Filter featured products
  if (featured) {
    // For demo purposes, let's consider the first 4 products as featured
    filteredProducts = filteredProducts.slice(0, 4)
  }

  // Apply limit
  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit)
  }

  return NextResponse.json(filteredProducts)
}

