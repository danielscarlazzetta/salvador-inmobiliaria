import { Button } from "@/components/ui/button"
import { FeaturedProperty } from "@/components/property/featured-property"
import { getFeaturedProperties } from "@/data/properties"
import Link from "next/link"

export function FeaturedPropertiesSection() {
  const featuredProperties = getFeaturedProperties()

  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Propiedades Destacadas</h2>
          <p className="text-muted-foreground mt-2">Descubre nuestras propiedades más exclusivas</p>
        </div>
        <Link href="/propiedades">
          <Button variant="outline" className="mt-4 md:mt-0">
            Ver todas las propiedades
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <FeaturedProperty key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
