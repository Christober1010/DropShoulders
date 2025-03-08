import Image from "next/image"
import Link from "next/link"
import { Leaf, Recycle, ShieldCheck, Truck, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex founded DropTee in 2018 with a vision to create comfortable, stylish t-shirts that would become wardrobe essentials.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sam Rivera",
      role: "Head of Design",
      bio: "With over 10 years in fashion design, Sam brings creative vision and attention to detail to every DropTee collection.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Taylor Kim",
      role: "Sustainability Director",
      bio: "Taylor ensures that our commitment to ethical and sustainable practices is maintained throughout our supply chain.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jordan Patel",
      role: "Marketing Director",
      bio: "Jordan's innovative marketing strategies have helped establish DropTee as a leading brand in the premium t-shirt market.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Story</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Crafting premium drop shoulder t-shirts with a focus on quality, comfort, and sustainable practices.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                At DropTee, our mission is to create premium quality t-shirts that combine comfort, style, and
                sustainability. We believe that the perfect t-shirt is a wardrobe essential that should be accessible to
                everyone while being produced with respect for people and the planet.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                We envision a world where fashion doesn't come at the expense of ethical practices or environmental
                responsibility. DropTee aims to lead the way in demonstrating that style and sustainability can go hand
                in hand, creating products that our customers can feel good about wearing.
              </p>
            </div>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/products">Shop Our Collection</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=800" alt="DropTee workshop" fill className="object-cover" />
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do at DropTee, from design to production to customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental footprint through responsible sourcing, eco-friendly
                  materials, and sustainable production methods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <ShieldCheck className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We never compromise on quality. Each t-shirt is crafted to last, using premium materials and
                  meticulous attention to detail.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Ethical Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We ensure fair wages and safe working conditions throughout our supply chain, partnering only with
                  factories that share our commitment to ethical practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Journey */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Journey</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a recognized brand, our path has been defined by a passion for great t-shirts.
            </p>
          </div>
          <div className="relative border-l border-muted-foreground/20 pl-6 ml-4 space-y-10">
            <div className="relative">
              <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
              <div>
                <h3 className="text-xl font-bold">2018: The Beginning</h3>
                <p className="text-muted-foreground mt-2">
                  DropTee was founded with a simple mission: to create the perfect drop shoulder t-shirt. Starting with
                  just three designs and a small workshop, we began our journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
              <div>
                <h3 className="text-xl font-bold">2019: Expanding Our Range</h3>
                <p className="text-muted-foreground mt-2">
                  After receiving positive feedback from our initial customers, we expanded our collection to include
                  more styles, colors, and our first limited edition designs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
              <div>
                <h3 className="text-xl font-bold">2020: Commitment to Sustainability</h3>
                <p className="text-muted-foreground mt-2">
                  We made a company-wide commitment to sustainability, transitioning to organic cotton and implementing
                  eco-friendly packaging across all our products.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
              <div>
                <h3 className="text-xl font-bold">2022: Global Expansion</h3>
                <p className="text-muted-foreground mt-2">
                  DropTee went international, shipping to customers worldwide and collaborating with designers and
                  artists from different countries to create unique collections.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
              <div>
                <h3 className="text-xl font-bold">Today: Continuing Innovation</h3>
                <p className="text-muted-foreground mt-2">
                  We continue to innovate and improve, always listening to our customers and staying true to our core
                  values of quality, sustainability, and ethical production.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind DropTee who bring our vision to life every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability */}
        <div className="bg-muted rounded-xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Commitment to Sustainability</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Sustainability isn't just a buzzword for us—it's a core part of our business model and values.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Organic Materials</h3>
              <p className="text-muted-foreground">
                We use GOTS-certified organic cotton that's grown without harmful pesticides or synthetic fertilizers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Recycled Packaging</h3>
              <p className="text-muted-foreground">
                All our packaging is made from recycled materials and is fully recyclable or biodegradable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Carbon-Neutral Shipping</h3>
              <p className="text-muted-foreground">
                We offset the carbon emissions from all our shipments through verified environmental projects.
              </p>
            </div>
          </div>
          <div className="text-center pt-4">
            <Button asChild variant="outline">
              <Link href="/sustainability">Learn More About Our Sustainability Efforts</Link>
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Learn more about DropTee and our products.</p>
          </div>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About Us</TabsTrigger>
              <TabsTrigger value="products">Our Products</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold">Where is DropTee based?</h3>
                <p className="text-muted-foreground">
                  Our headquarters are in Portland, Oregon, but we have team members and manufacturing partners around
                  the world.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">How did DropTee start?</h3>
                <p className="text-muted-foreground">
                  DropTee began in 2018 when our founder, Alex, couldn't find the perfect drop shoulder t-shirt and
                  decided to create one.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Do you have physical stores?</h3>
                <p className="text-muted-foreground">
                  Currently, we're primarily an online retailer, but we do have a flagship store in Portland and pop-up
                  shops in select cities throughout the year.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="products" className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold">What makes your t-shirts different?</h3>
                <p className="text-muted-foreground">
                  Our t-shirts feature a unique drop shoulder cut, premium materials, and are designed to provide both
                  comfort and style that lasts.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">How should I care for my DropTee shirt?</h3>
                <p className="text-muted-foreground">
                  For best results, machine wash cold with like colors, tumble dry low, and avoid bleach. This helps
                  maintain the fabric quality and color.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Are your products true to size?</h3>
                <p className="text-muted-foreground">
                  Our drop shoulder design has a naturally relaxed fit. We recommend checking our detailed size guide
                  for each product to find your perfect fit.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold">How long does shipping take?</h3>
                <p className="text-muted-foreground">
                  Domestic orders typically arrive within 3-5 business days. International shipping usually takes 7-14
                  business days, depending on the destination.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">What is your return policy?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day return policy for unworn items in original condition. Returns are free for domestic
                  orders.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Do you ship internationally?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 py-8">
          <h2 className="text-2xl font-bold">Ready to Experience DropTee?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made our drop shoulder t-shirts a staple in their wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Button asChild size="lg">
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

