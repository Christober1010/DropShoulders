import { ShoppingBag } from "lucide-react"

export default function Loading() {
  return (
    <div className="container py-10">
      <div className="space-y-8">
        <div>
          <div className="h-8 w-48 bg-muted rounded animate-pulse"></div>
          <div className="h-4 w-72 bg-muted rounded animate-pulse mt-2"></div>
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="h-10 w-10 text-muted-foreground mb-4" />
          <div className="h-6 w-40 bg-muted rounded animate-pulse"></div>
          <div className="h-4 w-64 bg-muted rounded animate-pulse mt-4"></div>
        </div>
      </div>
    </div>
  )
}

