"use client"

import { useState } from "react"
import { Eye, FileWarning, Info, ScrollText, Stamp } from "lucide-react"
import {
  TransparenciaPanel,
  PreferentePanel,
  InformacionPanel,
  NotariasPanel,
} from "@/components/atencion/panels"
import { ReclamosPanel } from "@/components/atencion/reclamos-panel"

const TABS = [
  { id: "transparencia", label: "Transparencia de la información", icon: Eye },
  { id: "preferente", label: "Atención Preferente", icon: ScrollText },
  { id: "reclamos", label: "Reclamos y requerimientos", icon: FileWarning },
  { id: "informacion", label: "Información de interés para el usuario", icon: Info },
  { id: "notarias", label: "Relación de notarías", icon: Stamp },
] as const

type TabId = (typeof TABS)[number]["id"]

export function AtencionSection() {
  const [active, setActive] = useState<TabId>("reclamos")

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Tab buttons */}
      <div
        role="tablist"
        aria-label="Secciones de atención al usuario"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {TABS.map((tab) => {
          const isActive = active === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={`relative flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center font-heading text-sm font-bold leading-tight transition-all ${
                isActive
                  ? "bg-accent-yellow text-accent-yellow-foreground shadow-md ring-2 ring-accent-yellow/60"
                  : "bg-brand text-white hover:bg-brand/90"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-accent-yellow" />
              )}
            </button>
          )
        })}
      </div>

      {/* Panels */}
      <div className="mt-12">
        {active === "transparencia" && <TransparenciaPanel />}
        {active === "preferente" && <PreferentePanel />}
        {active === "reclamos" && <ReclamosPanel />}
        {active === "informacion" && <InformacionPanel />}
        {active === "notarias" && <NotariasPanel />}
      </div>
    </div>
  )
}
