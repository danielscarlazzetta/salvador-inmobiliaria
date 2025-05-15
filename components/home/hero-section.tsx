import Image from "next/image"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <Image
        src="/images/hero-banner.png"
        alt="Propiedades destacadas"
        width={1200}
        height={600}
        className="w-full h-[600px] object-cover"
        priority
      />
      <div className="container relative z-20 py-24 md:py-32">
        <div className="max-w-3xl space-y-4 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Encuentra la propiedad de tus sueños
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Ofrecemos las mejores casas y terrenos con ubicaciones privilegiadas y precios competitivos.
          </p>
        </div>
        <div className="mt-8 max-w-3xl bg-white p-4 rounded-lg shadow-lg">
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
            <Button className="flex gap-2">
              <Search className="h-4 w-4" />
              <span>Buscar</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
