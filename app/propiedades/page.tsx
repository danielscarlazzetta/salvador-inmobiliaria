import { PageLayout } from "@/components/layout/page-layout"
import { Search, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PropertyCard } from "@/components/property/property-card"
import { properties } from "@/data/properties"

export default function PropertiesPage() {
  return (
    <PageLayout>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Todas las Propiedades</h1>
              <p className="text-muted-foreground mt-2">Encuentra la propiedad perfecta para ti</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button variant="outline" size="sm" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span>Filtros</span>
              </Button>
              <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                <option value="recent">Más recientes</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="area-asc">Área: menor a mayor</option>
                <option value="area-desc">Área: mayor a menor</option>
              </select>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input placeholder="¿Qué estás buscando?" className="w-full" />
              </div>
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Ubicación" className="w-full pl-9" />
                </div>
              </div>
              <div className="flex-1">
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="">Tipo de propiedad</option>
                  <option value="casa">Casa</option>
                  <option value="terreno">Terreno</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="">Rango de precio</option>
                  <option value="0-2000000">$0 - $2,000,000</option>
                  <option value="2000000-4000000">$2,000,000 - $4,000,000</option>
                  <option value="4000000-6000000">$4,000,000 - $6,000,000</option>
                  <option value="6000000+">$6,000,000+</option>
                </select>
              </div>
              <Button className="flex gap-2">
                <Search className="h-4 w-4" />
                <span>Buscar</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Página anterior</span>
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Página siguiente</span>
              </Button>
            </nav>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
