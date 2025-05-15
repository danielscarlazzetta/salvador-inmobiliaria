import { Menu } from "lucide-react"

export function MobileMenu() {
  return (
    <button className="md:hidden">
      <Menu className="h-6 w-6" />
    </button>
  )
}
