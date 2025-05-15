import Link from "next/link"
import { Home, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">InmobiliariaXYZ</span>
            </div>
            <p className="text-muted-foreground">
              Ofrecemos las mejores propiedades con ubicaciones privilegiadas y precios competitivos.
            </p>
            <div className="flex gap-4 mt-4">
              <SocialIcon href="https://facebook.com" icon="facebook" />
              <SocialIcon href="https://instagram.com" icon="instagram" />
              <SocialIcon href="https://twitter.com" icon="twitter" />
            </div>
          </div>

          <FooterLinks
            title="Enlaces Rápidos"
            links={[
              { href: "/", label: "Inicio" },
              { href: "/propiedades", label: "Propiedades" },
              { href: "/casas", label: "Casas" },
              { href: "/terrenos", label: "Terrenos" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/contacto", label: "Contacto" },
            ]}
          />

          <FooterLinks
            title="Servicios"
            links={[
              { href: "/servicios/compra", label: "Compra de propiedades" },
              { href: "/servicios/venta", label: "Venta de propiedades" },
              { href: "/servicios/asesoria", label: "Asesoría legal" },
              { href: "/servicios/financiamiento", label: "Financiamiento" },
              { href: "/servicios/avaluos", label: "Avalúos" },
            ]}
          />

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">Av. Principal #123, Ciudad Central</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+123 456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@inmobiliariaxyz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} InmobiliariaXYZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-muted-foreground hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: "facebook" | "instagram" | "twitter" }) {
  const icons = {
    facebook: (
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
        className="h-5 w-5"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
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
        className="h-5 w-5"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    twitter: (
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
        className="h-5 w-5"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  }

  return (
    <a href={href} className="text-muted-foreground hover:text-primary" key={icon}>
      {icons[icon]}
    </a>
  )
}
