import type { Property } from "@/types/property"

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Casa Moderna en Centro",
    description:
      "Hermosa casa moderna ubicada en el centro de la ciudad. Cuenta con amplios espacios, acabados de lujo y una excelente ubicación cerca de todos los servicios.",
    price: "$4,500,000",
    priceNumeric: 4500000,
    location: "Ciudad Central, Zona Centro",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    features: [
      "Cocina integral",
      "Sala de estar",
      "Comedor",
      "Jardín",
      "Estacionamiento para 2 autos",
      "Seguridad 24/7",
      "Área de lavado",
    ],
    type: "casa",
    featured: true,
    images: [
      "/images/properties/casa-moderna-1.png",
      "/images/properties/casa-moderna-2.png",
      "/images/properties/casa-moderna-3.png",
      "/images/properties/casa-moderna-4.png",
    ],
    createdAt: "2023-05-15",
  },
  {
    id: "prop-002",
    title: "Terreno con Vista al Mar",
    description:
      "Amplio terreno con espectacular vista al mar. Ideal para construir la casa de tus sueños o para desarrollo inmobiliario.",
    price: "$2,800,000",
    priceNumeric: 2800000,
    location: "Costa Azul",
    area: 500,
    features: ["Vista al mar", "Terreno plano", "Servicios disponibles", "Acceso pavimentado", "Escrituras en orden"],
    type: "terreno",
    featured: true,
    images: [
      "/images/properties/terreno-mar-1.png",
      "/images/properties/terreno-mar-2.png",
      "/images/properties/terreno-mar-3.png",
    ],
    createdAt: "2023-06-20",
  },
  {
    id: "prop-003",
    title: "Casa de Campo",
    description:
      "Hermosa casa de campo con amplios espacios verdes, ideal para descansar y disfrutar de la naturaleza.",
    price: "$3,200,000",
    priceNumeric: 3200000,
    location: "Valle Verde",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    features: ["Amplio jardín", "Terraza", "Chimenea", "Cocina equipada", "Bodega"],
    type: "casa",
    featured: true,
    images: [
      "/images/properties/casa-campo-1.png",
      "/images/properties/casa-campo-2.png",
      "/images/properties/casa-campo-3.png",
    ],
    createdAt: "2023-04-10",
  },
  {
    id: "prop-004",
    title: "Casa Familiar en Zona Residencial",
    description: "Espaciosa casa familiar en exclusiva zona residencial con todos los servicios y amenidades.",
    price: "$3,850,000",
    priceNumeric: 3850000,
    location: "Colonia Jardines",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    features: ["Jardín trasero", "Sala de juegos", "Cocina integral", "Estudio"],
    type: "casa",
    featured: false,
    images: ["/images/properties/casa-familiar-1.png", "/images/properties/casa-familiar-2.png"],
    createdAt: "2023-07-05",
  },
  {
    id: "prop-005",
    title: "Terreno para Desarrollo",
    description: "Gran terreno ideal para desarrollo comercial o industrial con excelente ubicación y accesibilidad.",
    price: "$1,950,000",
    priceNumeric: 1950000,
    location: "Zona Industrial",
    area: 1200,
    features: ["Uso de suelo mixto", "Todos los servicios", "Frente amplio", "Documentación en regla"],
    type: "terreno",
    featured: false,
    images: ["/images/properties/terreno-desarrollo-1.png", "/images/properties/terreno-desarrollo-2.png"],
    createdAt: "2023-08-12",
  },
  {
    id: "prop-006",
    title: "Casa Minimalista",
    description: "Moderna casa con diseño minimalista, espacios abiertos y acabados de primera calidad.",
    price: "$5,200,000",
    priceNumeric: 5200000,
    location: "Distrito Financiero",
    bedrooms: 3,
    bathrooms: 2,
    area: 190,
    features: ["Diseño de autor", "Domótica", "Paneles solares", "Acabados de lujo"],
    type: "casa",
    featured: false,
    images: [
      "/images/properties/casa-minimalista-1.png",
      "/images/properties/casa-minimalista-2.png",
      "/images/properties/casa-minimalista-3.png",
    ],
    createdAt: "2023-09-01",
  },
  {
    id: "prop-007",
    title: "Terreno con Vista Panorámica",
    description:
      "Hermoso terreno con vista panorámica a las montañas, perfecto para construir una residencia exclusiva.",
    price: "$3,100,000",
    priceNumeric: 3100000,
    location: "Colinas del Valle",
    area: 800,
    features: ["Vista panorámica", "Clima templado", "Seguridad privada", "Acceso controlado"],
    type: "terreno",
    featured: false,
    images: ["/images/properties/terreno-panoramico-1.png", "/images/properties/terreno-panoramico-2.png"],
    createdAt: "2023-03-25",
  },
  {
    id: "prop-008",
    title: "Casa con Jardín Amplio",
    description: "Hermosa casa con amplio jardín, perfecta para familias que buscan espacio y tranquilidad.",
    price: "$4,100,000",
    priceNumeric: 4100000,
    location: "Residencial Las Flores",
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    features: ["Jardín amplio", "Área de juegos", "Piscina", "Sala de cine"],
    type: "casa",
    featured: false,
    images: [
      "/images/properties/casa-jardin-1.png",
      "/images/properties/casa-jardin-2.png",
      "/images/properties/casa-jardin-3.png",
    ],
    createdAt: "2023-02-18",
  },
  {
    id: "prop-009",
    title: "Terreno en Esquina",
    description: "Excelente terreno en esquina con gran potencial comercial y residencial.",
    price: "$2,400,000",
    priceNumeric: 2400000,
    location: "Avenida Principal",
    area: 650,
    features: ["Ubicación estratégica", "Dos frentes", "Alta plusvalía", "Servicios municipales"],
    type: "terreno",
    featured: false,
    images: ["/images/properties/terreno-esquina-1.png", "/images/properties/terreno-esquina-2.png"],
    createdAt: "2023-10-05",
  },
]

export function getFeaturedProperties(): Property[] {
  return properties.filter((property) => property.featured)
}

export function getRecentProperties(limit = 6): Property[] {
  return [...properties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id)
}

export function getPropertiesByType(type: "casa" | "terreno"): Property[] {
  return properties.filter((property) => property.type === type)
}

export function searchProperties(query: string): Property[] {
  const searchTerm = query.toLowerCase()
  return properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm) ||
      property.location.toLowerCase().includes(searchTerm),
  )
}

export function filterProperties(filters: {
  type?: "casa" | "terreno"
  minPrice?: number
  maxPrice?: number
  minArea?: number
  maxArea?: number
  bedrooms?: number
  bathrooms?: number
  location?: string
}): Property[] {
  return properties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false

    if (filters.minPrice && property.priceNumeric < filters.minPrice) return false
    if (filters.maxPrice && property.priceNumeric > filters.maxPrice) return false

    if (filters.minArea && property.area < filters.minArea) return false
    if (filters.maxArea && property.area > filters.maxArea) return false

    if (
      filters.bedrooms &&
      property.type === "casa" &&
      (property.bedrooms === undefined || property.bedrooms < filters.bedrooms)
    )
      return false

    if (
      filters.bathrooms &&
      property.type === "casa" &&
      (property.bathrooms === undefined || property.bathrooms < filters.bathrooms)
    )
      return false

    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false

    return true
  })
}
