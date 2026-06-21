"use client"

import { useState } from "react"
import { Download, FileText, Lock } from "lucide-react"

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre",
]

// Number of months published per year
const RECENT: Record<string, number> = { "2026": 1, "2025": 11, "2024": 12 }

const QUARTERS = ["Enero a Marzo", "Abril a Junio", "Julio a Septiembre", "Octubre a Diciembre"]
const LEGACY_YEARS = ["2023", "2022", "2021", "2020"]

export function ReportesReclamos() {
  const years = Object.keys(RECENT)
  const [year, setYear] = useState(years[0])
  const available = RECENT[year]

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-heading text-lg font-bold text-brand">
          Reportes de estadísticas de reclamos
        </h3>
        <div className="inline-flex rounded-full bg-muted p-1">
          {years.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYear(y)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                year === y ? "bg-brand text-white" : "text-muted-foreground hover:text-brand"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {MONTHS.map((m, i) => {
          const ready = i < available
          return (
            <button
              key={m}
              type="button"
              disabled={!ready}
              className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                ready
                  ? "border-border bg-muted text-foreground hover:border-brand hover:bg-accent"
                  : "cursor-not-allowed border-dashed border-border text-muted-foreground/60"
              }`}
            >
              <span className="flex items-center gap-2 font-medium">
                <FileText className={`h-4 w-4 ${ready ? "text-brand-orange" : ""}`} />
                {m}
              </span>
              {ready ? <Download className="h-4 w-4 text-brand" /> : <Lock className="h-3.5 w-3.5" />}
            </button>
          )
        })}
      </div>

      <details className="group mt-5 rounded-xl border border-border bg-muted/60">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-brand">
          Reportes de años anteriores (2020 – 2023)
          <span className="text-accent-yellow transition-transform group-open:rotate-180">▾</span>
        </summary>
        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full min-w-[34rem] border-separate border-spacing-1 text-sm">
            <thead>
              <tr>
                <th className="rounded-lg bg-brand-orange px-3 py-2 text-left text-xs font-bold uppercase text-white">
                  Año
                </th>
                {QUARTERS.map((q) => (
                  <th
                    key={q}
                    className="rounded-lg bg-brand-orange px-3 py-2 text-center text-xs font-bold text-white"
                  >
                    {q}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LEGACY_YEARS.map((y) => (
                <tr key={y}>
                  <th className="rounded-lg bg-brand-orange/90 px-3 py-2 text-left text-sm font-bold text-white">
                    {y}
                  </th>
                  {QUARTERS.map((q) => (
                    <td key={q} className="rounded-lg bg-accent/60 text-center">
                      <button
                        type="button"
                        aria-label={`Descargar ${q} ${y}`}
                        className="inline-flex h-9 w-full items-center justify-center text-brand-orange hover:text-brand"
                      >
                        <FileText className="h-4 w-4" />
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}
