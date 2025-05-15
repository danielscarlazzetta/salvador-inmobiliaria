import Link from "next/link"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/casas", label: "Casas" },
  { href: "/terrenos", label: "Terrenos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
