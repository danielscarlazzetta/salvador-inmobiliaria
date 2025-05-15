import Image from "next/image"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Share2, Heart, Phone } from "lucide-react"
import { getPropertyById } from "@/data/properties"
import { getImageWithFallback } from "@/lib/image-utils"
import { notFound } from "next/navigation"

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Esperar a que se resuelva la promesa de params
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <PageLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{property.location}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" size="sm" className="flex gap-2">
              <Share2 className="h-4 w-4" />
              <span>Compartir</span>
            </Button>
            <Button variant="outline" size="sm" className="flex gap-2">
              <Heart className="h-4 w-4" />
              <span>Guardar</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
              <Image
                src={getImageWithFallback(property.images[0]) || "/placeholder.svg"}
                alt={property.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute left-3 top-3">{property.type === "casa" ? "Casa" : "Terreno"}</Badge>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={getImageWithFallback(image) || "/placeholder.svg"}
                    alt={`${property.title} - imagen ${index + 2}`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-4">{property.price}</div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium">{property.type === "casa" ? "Casa" : "Terreno"}</span>
              </div>
              {property.type === "casa" && property.bedrooms && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Habitaciones</span>
                  <span className="font-medium">{property.bedrooms}</span>
                </div>
              )}
              {property.type === "casa" && property.bathrooms && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Baños</span>
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Área</span>
                <span className="font-medium">{property.area} m²</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Publicado</span>
                <span className="font-medium">{property.createdAt}</span>
              </div>
            </div>
            <Button className="w-full mb-3">Contactar al vendedor</Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+123 456 7890</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
            <p className="text-muted-foreground mb-6">{property.description}</p>

            {property.features && property.features.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Características</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
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
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 className="text-2xl font-bold mb-4">Ubicación</h2>
            <div className="bg-muted aspect-video rounded-lg overflow-hidden">
              {/* Aquí iría un mapa real, pero usamos un placeholder */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Mapa de Ubicación</p>
                  <p className="text-sm text-muted-foreground">{property.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contactar al agente</h2>
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
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
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Juan Pérez</h3>
                  <p className="text-sm text-muted-foreground">Agente Inmobiliario</p>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Nombre completo" />
                <Input placeholder="Correo electrónico" type="email" />
                <Input placeholder="Teléfono" type="tel" />
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Mensaje (Estoy interesado en esta propiedad...)"
                ></textarea>
                <Button className="w-full">Enviar mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
