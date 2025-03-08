import { NextResponse } from "next/server"

// Mock database of products (same as in route.ts)
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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}

