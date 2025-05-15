import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Bath, Square } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getImageWithFallback } from "@/lib/image-utils"
import type { Property } from "@/types/property"

interface FeaturedPropertyProps {
  property: Property
}

export function FeaturedProperty({ property }: FeaturedPropertyProps) {
  const { id, title, price, location, bedrooms, bathrooms, area, images, type } = property
  const mainImage = getImageWithFallback(images[0] || "/images/placeholder-property.png")

  return (
    <div className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Badge className="absolute left-2 top-2 z-10">{type === "casa" ? "Casa" : "Terreno"}</Badge>
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full p-4 text-white">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-xl font-bold">{price}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            {type === "casa" && bedrooms && (
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span>{bedrooms} Hab.</span>
              </div>
            )}
            {type === "casa" && bathrooms && (
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span>{bathrooms} Baños</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4 text-muted-foreground" />
              <span>{area} m²</span>
            </div>
          </div>
        </div>
        <Link href={`/propiedades/${id}`}>
          <Button className="w-full mt-4">Ver Detalles</Button>
        </Link>
      </div>
    </div>
  )
}
