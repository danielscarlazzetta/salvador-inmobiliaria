"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const themes = {
  default: {
    primary: "#3b82f6", // Azul
    secondary: "#f3f4f6",
    background: "#ffffff",
    text: "#111827",
  },
  warm: {
    primary: "#f59e0b", // Ámbar
    secondary: "#fef3c7",
    background: "#fffbeb",
    text: "#78350f",
  },
  cool: {
    primary: "#06b6d4", // Cyan
    secondary: "#e0f2fe",
    background: "#f0f9ff",
    text: "#0c4a6e",
  },
  dark: {
    primary: "#6366f1", // Indigo
    secondary: "#1f2937",
    background: "#111827",
    text: "#f9fafb",
  },
}

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState("default")

  useEffect(() => {
    // Aplicar el tema seleccionado
    const theme = themes[currentTheme as keyof typeof themes]
    document.documentElement.style.setProperty("--primary", theme.primary)
    document.documentElement.style.setProperty("--secondary", theme.secondary)
    document.documentElement.style.setProperty("--background", theme.background)
    document.documentElement.style.setProperty("--foreground", theme.text)
    // Aplicar más variables según sea necesario
  }, [currentTheme])

  return (
    <div className="flex gap-2 p-4">
      {Object.keys(themes).map((theme) => (
        <Button
          key={theme}
          onClick={() => setCurrentTheme(theme)}
          variant={currentTheme === theme ? "default" : "outline"}
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </Button>
      ))}
    </div>
  )
}
