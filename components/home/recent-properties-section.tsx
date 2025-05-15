import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property/property-card"
import { getRecentProperties } from "@/data/properties"
import Link from "next/link"

export function RecentPropertiesSection() {
  const recentProperties = getRecentProperties(6)

  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Propiedades Recientes</h2>
          <p className="text-muted-foreground mt-2">Las últimas propiedades añadidas a nuestro catálogo</p>
        </div>
        <Link href="/propiedades">
          <Button variant="outline" className="mt-4 md:mt-0">
            Ver todas
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
