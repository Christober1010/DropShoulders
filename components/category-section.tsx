import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CategorySection() {
  const categories = [
    { name: "Basic Tees", image: "https://veirdo.in/cdn/shop/files/49.png?v=1720872757&width=360", link: "/products?category=basic" },
    { name: "Graphic Tees", image: "https://slaystay.com/cdn/shop/files/BACK_d361e750-060e-4ffb-8595-8c5ac32c26ce.png?v=1729165735&width=493", link: "/products?category=graphic" },
    { name: "Oversized Tees", image: "https://www.botnia.in/cdn/shop/files/5_41b6d8fa-fa23-4550-97f2-5161b85abcbd_800x.png?v=1695274048", link: "/products?category=oversized" },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="w-[90%] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Shop by Category</h2>
          <p className="text-muted-foreground">Find the perfect drop shoulder t-shirt for your style</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <CardContent>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <Button asChild variant="secondary">
                      <Link href={category.link}>Shop Now</Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

