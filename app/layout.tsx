import type React from "react"
import Head from "next/head"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head>
        <title>InmobiliariaXYZ - Casas y Terrenos</title>
        <meta
          name="description"
          content="Encuentra las mejores propiedades inmobiliarias: casas y terrenos con ubicaciones privilegiadas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
