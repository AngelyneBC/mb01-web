import { Clock, TrendingUp, CheckCircle2 } from "lucide-react"

const METRICS = [
  {
    icon: Clock,
    label: "Tiempo medio de resolución",
    value: "15 min",
    note: "Reclamos comunes · Antes: 2 días",
    progress: 92,
  },
  {
    icon: CheckCircle2,
    label: "Reclamos resueltos a tiempo",
    value: "98.4%",
    note: "Dentro del plazo legal de 15 días hábiles",
    progress: 98,
  },
  {
    icon: TrendingUp,
    label: "Satisfacción de atención",
    value: "4.7 / 5",
    note: "Según encuestas post-atención",
    progress: 94,
  },
]

export function SlaDashboard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
        <h3 className="font-heading text-lg font-bold text-brand">
          Nuestros compromisos de atención en tiempo real
        </h3>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {METRICS.map((m) => {
          const Icon = m.icon
          return (
            <div key={m.label} className="rounded-xl border border-border bg-muted p-4">
              <div className="flex items-center gap-2 text-brand">
                <Icon className="h-5 w-5" />
                <span className="text-xs font-semibold leading-tight">{m.label}</span>
              </div>
              <p className="mt-3 font-heading text-3xl font-extrabold text-brand">{m.value}</p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-success" style={{ width: `${m.progress}%` }} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{m.note}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
