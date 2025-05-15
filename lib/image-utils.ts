// Función para obtener la imagen principal de una propiedad
export function getMainImage(images: string[]): string {
  return images && images.length > 0 ? images[0] : "/images/placeholder-property.png"
}

// Función para obtener un placeholder si la imagen no está disponible
export function getImageWithFallback(imagePath: string): string {
  // Si la imagen es una URL externa, la devolvemos tal cual
  if (imagePath.startsWith("http")) {
    return imagePath
  }

  // Si es una ruta local, verificamos si es un placeholder
  if (imagePath.includes("placeholder")) {
    return imagePath
  }

  // Si es una ruta local normal, devolvemos la ruta o un placeholder si no existe
  return imagePath || "/images/placeholder-property.png"
}
