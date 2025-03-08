"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import type { CartItem, Product } from "@/lib/types"
import { getProducts } from "@/lib/api"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Load cart items from localStorage
  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem("cart")
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart))
        } catch (error) {
          console.error("Failed to parse cart data:", error)
          setCartItems([])
        }
      }
      setIsLoading(false)
    }

    loadCart()
  }, [])

  // Load recommended products
  useEffect(() => {
    const loadRecommendedProducts = async () => {
      try {
        const products = await getProducts({ limit: 4 })
        setRecommendedProducts(products)
      } catch (error) {
        console.error("Failed to load recommended products:", error)
      }
    }

    loadRecommendedProducts()
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isLoading])

  // Sample cart items for demonstration
  const sampleCartItems: CartItem[] = [
    {
      product: {
        id: "1",
        name: "Classic Drop Shoulder Tee",
        price: 29.99,
        image: "/placeholder.svg?height=400&width=400",
      },
      quantity: 2,
      color: "Black",
      size: "M",
    },
    {
      product: {
        id: "3",
        name: "Striped Drop Shoulder Tee",
        price: 32.99,
        image: "/placeholder.svg?height=400&width=400",
      },
      quantity: 1,
      color: "Navy/White",
      size: "L",
    },
  ]

  // Use sample cart items if cart is empty (for demonstration)
  const displayCartItems = cartItems.length > 0 ? cartItems : isLoading ? [] : sampleCartItems

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return

    const updatedCart = [...displayCartItems]
    updatedCart[index].quantity = newQuantity
    setCartItems(updatedCart)

    toast({
      title: "Cart updated",
      description: "Your cart has been updated successfully.",
    })
  }

  const removeItem = (index: number) => {
    const updatedCart = [...displayCartItems]
    updatedCart.splice(index, 1)
    setCartItems(updatedCart)

    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  // Calculate totals
  const subtotal = displayCartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax
  displayCartItems
  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
          <p className="text-muted-foreground">Review and manage items in your cart before checkout.</p>
        </div>

        {displayCartItems.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-6 rounded-full bg-muted p-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="mt-8">
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {displayCartItems.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.color}-${item.size}`}
                    className="flex flex-col sm:flex-row gap-4 rounded-lg border p-4"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium">{item.product.name}</h3>
                        <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground">
                          <span>Color: {item.color}</span>
                          <span>Size: {item.size}</span>
                        </div>
                        <p className="font-medium">${item.product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(index)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" asChild className="gap-2">
                  <Link href="/products">
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" disabled={displayCartItems.length === 0}>
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-6 rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Free shipping on orders over $75</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Add ${(75 - subtotal).toFixed(2)} more to qualify for free shipping.
                </p>
              </div>

              <div className="mt-6 rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Need help? Contact our customer support at{" "}
                  <Link href="mailto:support@droptee.com" className="text-primary hover:underline">
                    support@droptee.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.length > 0
              ? recommendedProducts.map((product) => (
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
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              : Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src="/placeholder.svg?height=400&width=400"
                          alt="Product placeholder"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-1">Drop Shoulder Tee</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="font-medium">$29.99</p>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/products">View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
          </div>
        </div>
      </div>
    </div>
  )
}

