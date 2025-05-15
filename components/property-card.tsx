import Image from "next/image"
import { MapPin, Bed, Bath, Square } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  title: string
  price: string
  location: string
  bedrooms?: number
  bathrooms?: number
  area: number
  image: string
  type: "casa" | "terreno"
}

export function PropertyCard({ title, price, location, bedrooms, bathrooms, area, image, type }: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Badge className="absolute left-2 top-2 z-10">{type === "casa" ? "Casa" : "Terreno"}</Badge>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={350}
          height={250}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Ver Detalles
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-bold line-clamp-1">{title}</h3>
        <p className="text-lg font-bold text-primary">{price}</p>
        <div className="flex items-center gap-1 mt-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm">
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
    </div>
  )
}
