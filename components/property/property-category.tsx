import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyCategoryProps {
  title: string
  description: string
  image: string
  icon: LucideIcon
  href: string
}

export function PropertyCategory({ title, description, image, icon: Icon, href }: PropertyCategoryProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all z-10" />
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
        <Icon className="h-12 w-12 mb-4" />
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 max-w-xs text-center text-white/90">{description}</p>
        <Button variant="outline" className="mt-4 text-white border-white hover:bg-white hover:text-black">
          Ver {title}
        </Button>
      </div>
    </div>
  )
}
