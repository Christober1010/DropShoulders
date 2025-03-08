"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/lib/cart-provider"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
  quantity?: number
  color?: string
  size?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  showIcon?: boolean
}

export default function AddToCartButton({
  product,
  quantity = 1,
  color = "Black",
  size = "M",
  variant = "default",
  showIcon = true,
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a slight delay for better UX
    setTimeout(() => {
      addItem({
        product,
        quantity,
        color,
        size,
      })

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })

      setIsAdding(false)
    }, 500)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} variant={variant}>
      {showIcon && <ShoppingCart className="mr-2 h-4 w-4" />}
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}

