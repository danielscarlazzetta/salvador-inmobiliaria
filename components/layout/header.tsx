import { Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { MainNav } from "@/components/layout/main-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">InmobiliariaXYZ</span>
        </div>
        <MainNav />
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Iniciar Sesión
          </Button>
          <Button size="sm">Contactar</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
