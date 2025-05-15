import { Home, Map } from "lucide-react"
import { PropertyCategory } from "@/components/property/property-category"

export function CategoriesSection() {
  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Categorías de Propiedades</h2>
          <p className="text-muted-foreground mt-2">Explora nuestras diferentes opciones de inmuebles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PropertyCategory
            title="Casas"
            description="Encuentra la casa perfecta para ti y tu familia"
            image="/images/categories/casas.png"
            icon={Home}
            href="/casas"
          />
          <PropertyCategory
            title="Terrenos"
            description="Terrenos con excelente ubicación para construir tu proyecto"
            image="/images/categories/terrenos.png"
            icon={Map}
            href="/terrenos"
          />
        </div>
      </div>
    </section>
  )
}
