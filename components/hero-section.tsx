import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-200">
      <div className="w-[90%] mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Style with Premium Drop Shoulder Tees
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover our collection of comfortable and stylish drop shoulder
                t-shirts designed for the modern man.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-06at11.46.23AM.jpg?v=1723271991"
              alt="Men's drop shoulder t-shirt"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
