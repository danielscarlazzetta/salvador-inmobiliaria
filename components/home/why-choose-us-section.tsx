import type React from "react"
import { Button } from "@/components/ui/button"
import { Check, Shield, BookOpen } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">¿Por qué elegirnos?</h2>
            <p className="mt-4 text-primary-foreground/90">
              Con años de experiencia en el mercado inmobiliario, ofrecemos el mejor servicio y las mejores propiedades.
            </p>

            <ul className="mt-8 space-y-6">
              <FeatureItem
                icon={Check}
                title="Propiedades Verificadas"
                description="Todas nuestras propiedades son verificadas y cuentan con documentación en regla."
              />
              <FeatureItem
                icon={Shield}
                title="Seguridad en Transacciones"
                description="Garantizamos la seguridad en todas las transacciones inmobiliarias."
              />
              <FeatureItem
                icon={BookOpen}
                title="Asesoría Personalizada"
                description="Nuestro equipo de expertos te guiará en todo el proceso de compra."
              />
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-foreground">
            <h3 className="text-xl font-bold mb-4">¿Interesado en alguna propiedad?</h3>
            <p className="text-muted-foreground mb-6">
              Déjanos tus datos y un asesor se pondrá en contacto contigo a la brevedad.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <li className="flex gap-4">
      <div className="bg-white text-primary rounded-full p-2 h-10 w-10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-primary-foreground/90">{description}</p>
      </div>
    </li>
  )
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <input
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="Nombre completo"
        />
      </div>
      <div>
        <input
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="Correo electrónico"
          type="email"
        />
      </div>
      <div>
        <input
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="Teléfono"
          type="tel"
        />
      </div>
      <div>
        <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
          <option value="">¿Qué tipo de propiedad buscas?</option>
          <option value="casa">Casa</option>
          <option value="terreno">Terreno</option>
        </select>
      </div>
      <div>
        <textarea
          className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          placeholder="Mensaje o requerimientos específicos"
        ></textarea>
      </div>
      <Button className="w-full">Enviar Solicitud</Button>
    </form>
  )
}
