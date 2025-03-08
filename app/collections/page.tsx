import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CollectionsPage() {
  const collections = [
    {
      id: "summer-essentials",
      name: "Summer Essentials",
      description: "Lightweight, breathable drop shoulder tees perfect for the summer heat.",
      image: "/placeholder.svg?height=600&width=800",
      products: 12,
    },
    {
      id: "urban-classics",
      name: "Urban Classics",
      description: "Timeless designs with a modern twist for the city dweller.",
      image: "/placeholder.svg?height=600&width=800",
      products: 8,
    },
    {
      id: "graphic-series",
      name: "Graphic Series",
      description: "Express yourself with our unique graphic prints on premium drop shoulder tees.",
      image: "/placeholder.svg?height=600&width=800",
      products: 15,
    },
    {
      id: "monochrome",
      name: "Monochrome Collection",
      description: "Minimalist designs in black, white, and grayscale for a clean aesthetic.",
      image: "/placeholder.svg?height=600&width=800",
      products: 10,
    },
    {
      id: "limited-edition",
      name: "Limited Edition",
      description: "Exclusive designs available for a limited time only.",
      image: "/placeholder.svg?height=600&width=800",
      products: 5,
    },
    {
      id: "eco-friendly",
      name: "Eco-Friendly Line",
      description: "Sustainable tees made from organic and recycled materials.",
      image: "/placeholder.svg?height=600&width=800",
      products: 7,
    },
  ]

  const featuredCollection = {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "Discover our latest drop shoulder t-shirts, fresh off the design table. These new additions showcase our commitment to evolving style while maintaining the comfort and quality you expect from DropTee.",
    image: "/placeholder.svg?height=800&width=1200",
    products: 20,
  }

  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Collections</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Explore our curated collections of premium drop shoulder t-shirts, each with its own unique style and character.
          </p>
        </div>

        {/* Featured Collection */}
        <div className="relative rounded-xl overflow-hidden aspect-[21/9] mt-10">
          <Image
            src={featuredCollection.image || "/placeholder.svg"}
            alt={featuredCollection.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{featuredCollection.name}</h2>
              <p className="text-white/90 mb-4 max-w-2xl">{featuredCollection.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={`/products?collection=${featuredCollection.id}`}>
                    Shop Collection
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                  View Lookbook
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* All Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {collections.map((collection) => (
            <Card key={collection.id} className="overflow-hidden group">
              <div className="aspect-[4/3] relative">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{collection.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{collection.products} Products</p>
                  <Button asChild variant="secondary" className="w-full sm:w-auto">
                    <Link href={`/products?collection=${collection.id}`}>
                      Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground line-clamp-2">{collection.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seasonal Collections */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Seasonal Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Spring/Summer Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Spring/Summer 2023</h3>
                <p className="text-white/80 mb-3">Light fabrics and vibrant colors</p>
                <Button asChild variant="secondary">
                  <Link href="/products?season=summer">
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Fall/Winter Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Fall/Winter 2023</h3>
                <p className="text-white/80 mb-3">Cozy fabrics and earthy tones</p>
                <Button asChild variant="secondary">
                  <Link href="/products?season=winter">
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-muted rounded-xl p-6 md:p-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to be the first to know about new collections, exclusive offers, and limited edition releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
