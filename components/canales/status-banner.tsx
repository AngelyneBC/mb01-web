"use client"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"

export function StatusBanner() {
  const [show, setShow] = useState(true)
  if (!show) return null

  return (
    <div className="bg-accent-yellow">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent-yellow-foreground" />
        <p className="flex-1 text-sm leading-relaxed text-accent-yellow-foreground">
          <span className="font-bold">Aviso de canales:</span> nuestra App Móvil está en
          mantenimiento programado. ¡No te preocupes, tu dinero está a salvo! Puedes usar nuestros
          agentes Kasnet hoy sin costo adicional.
        </p>
        <button
          type="button"
          onClick={() => setShow(false)}
          aria-label="Cerrar aviso"
          className="rounded-md p-1 text-accent-yellow-foreground hover:bg-black/5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
