import { Info } from "lucide-react"

const ROWS = [
  { label: "Entre mis cuentas en Mibanco", solMax: "Ilimitado", solMin: "1.00", usdMax: "Ilimitado", usdMin: "1.00" },
  { label: "A terceros en Mibanco", solMax: "15,000", solMin: "1.00", usdMax: "5,000", usdMin: "1.00" },
  { label: "A otros bancos (propias y terceros)", solMax: "15,000", solMin: "1.00", usdMax: "5,000", usdMin: "1.00" },
]

export function LimitsTable() {
  return (
    <div>
      <h2 className="mb-1 font-heading text-2xl font-extrabold text-brand-orange sm:text-3xl">
        Límites de transferencias digitales
      </h2>
      <p className="mb-5 text-sm text-muted-foreground">Por cliente y por día · transferencias inmediatas.</p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-sm">
          <thead>
            <tr className="bg-brand text-white">
              <th rowSpan={2} className="px-4 py-3 text-left font-heading font-bold">Tipo de transferencia</th>
              <th colSpan={2} className="border-l border-white/20 px-4 py-2 text-center font-heading font-bold">Soles (S/)</th>
              <th colSpan={2} className="border-l border-white/20 px-4 py-2 text-center font-heading font-bold">Dólares ($)</th>
            </tr>
            <tr className="bg-brand/90 text-xs text-white">
              <th className="border-l border-white/20 px-4 py-1.5 font-semibold">Mínimo</th>
              <th className="px-4 py-1.5 font-semibold">Máximo</th>
              <th className="border-l border-white/20 px-4 py-1.5 font-semibold">Mínimo</th>
              <th className="px-4 py-1.5 font-semibold">Máximo</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={r.label} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
                <td className="px-4 py-3 font-semibold text-brand">{r.label}</td>
                <td className="px-4 py-3 text-center text-muted-foreground">{r.solMin}</td>
                <td className="px-4 py-3 text-center font-bold text-foreground">{r.solMax}</td>
                <td className="px-4 py-3 text-center text-muted-foreground">{r.usdMin}</td>
                <td className="px-4 py-3 text-center font-bold text-foreground">{r.usdMax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 flex items-start gap-2 rounded-xl bg-accent p-3 text-xs leading-relaxed text-accent-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        Importante: para evitar rechazos, la moneda de la cuenta de origen y de destino deben ser la
        misma.
      </p>
    </div>
  )
}
