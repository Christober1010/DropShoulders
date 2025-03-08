import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />

      <section className="py-16 bg-muted">
        <div className="w-[90%] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Our Drop Shoulder Tees?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Our premium drop shoulder t-shirts are crafted with the finest materials for maximum comfort and style.
                Each piece is designed to provide a relaxed fit while maintaining a modern aesthetic.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/products">Shop Collection</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Premium Quality</h3>
                  <p className="text-muted-foreground">100% cotton fabric that gets softer with each wash</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Stylish Design</h3>
                  <p className="text-muted-foreground">Contemporary drop shoulder cut for a modern look</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Versatile</h3>
                  <p className="text-muted-foreground">Perfect for casual outings or lounging at home</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Sustainable</h3>
                  <p className="text-muted-foreground">Ethically sourced materials and eco-friendly production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

