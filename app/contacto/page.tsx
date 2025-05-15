import type React from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contáctanos</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Estamos aquí para ayudarte a encontrar la propiedad perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactInfoCard
              icon={MapPin}
              title="Dirección"
              lines={["Av. Principal #123, Ciudad Central", "Código Postal 12345"]}
            />
            <ContactInfoCard icon={Phone} title="Teléfono" lines={["+123 456 7890", "+123 456 7891"]} />
            <ContactInfoCard
              icon={Mail}
              title="Correo Electrónico"
              lines={["info@inmobiliariaxyz.com", "ventas@inmobiliariaxyz.com"]}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre Completo
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Correo Electrónico
                    </label>
                    <Input id="email" type="email" placeholder="Tu correo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Teléfono
                    </label>
                    <Input id="phone" type="tel" placeholder="Tu teléfono" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Asunto
                    </label>
                    <Input id="subject" placeholder="Asunto del mensaje" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button className="w-full sm:w-auto" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Horario de Atención</h2>
              <div className="bg-muted p-6 rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Horario de Oficina</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-6">Nuestra Ubicación</h2>
              <div className="bg-muted aspect-video rounded-lg overflow-hidden">
                {/* Aquí iría un mapa real, pero usamos un placeholder */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Mapa de Ubicación</p>
                    <p className="text-sm text-muted-foreground">Av. Principal #123, Ciudad Central</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para encontrar tu propiedad ideal?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la casa o terreno perfecto para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Ver Propiedades
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              Agendar Visita
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

function ContactInfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ElementType
  title: string
  lines: string[]
}) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="bg-primary/10 p-3 rounded-full mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-muted-foreground">
          {line}
        </p>
      ))}
    </div>
  )
}
