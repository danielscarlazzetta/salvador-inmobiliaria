import { Button } from "@/components/ui/button"

export default function TestStyles() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-primary">Prueba de Colores</h1>
        <div className="mt-4 p-4 bg-primary text-primary-foreground rounded">
          Este div debería tener fondo verde
        </div>
        <button className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded">
          Este botón debería tener fondo verde claro
        </button>
      </div>

      <h1 className="text-3xl font-bold">Prueba de Estilos - Tema Verde</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Colores Primarios</h2>
        <div className="bg-primary text-primary-foreground p-4 rounded">Este es un div con color primario (verde)</div>
        <Button>Botón Primario</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-secondary-foreground">Colores Secundarios</h2>
        <div className="bg-secondary text-secondary-foreground p-4 rounded">
          Este es un div con color secundario (verde claro)
        </div>
        <Button variant="secondary">Botón Secundario</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Otros Colores</h2>
        <div className="bg-muted text-muted-foreground p-4 rounded">Este es un div con color muted</div>
        <div className="bg-accent text-accent-foreground p-4 rounded">Este es un div con color accent</div>
        <div className="bg-destructive text-destructive-foreground p-4 rounded">
          Este es un div con color destructive
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Bordes y Tarjetas</h2>
        <div className="border p-4 rounded">Este es un div con borde</div>
        <div className="bg-card text-card-foreground p-4 rounded shadow">Esta es una tarjeta</div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos de Botones</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primario</Button>
          <Button variant="secondary">Secundario</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>
    </div>
  )
}
