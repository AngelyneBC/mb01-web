import { Smartphone, Store, Landmark, Building2, Clock, Wallet } from "lucide-react"

type Status = "ok" | "maintenance"

const CHANNELS = [
  {
    icon: Smartphone,
    title: "App Mibanco",
    status: "maintenance" as Status,
    limit: "Transferencias hasta S/ 15,000",
    hours: "Disponible 24/7",
    desc: "Paga préstamos, transfiere y consulta saldos sin costo.",
  },
  {
    icon: Store,
    title: "Agentes Kasnet / BCP",
    status: "ok" as Status,
    limit: "Retiros y depósitos hasta S/ 1,000",
    hours: "Según horario del establecimiento",
    desc: "+22,000 agentes a nivel nacional cerca de tu negocio.",
  },
  {
    icon: Landmark,
    title: "Cajeros automáticos",
    status: "ok" as Status,
    limit: "Retiros hasta S/ 3,000 al día",
    hours: "Disponible 24/7",
    desc: "+2,410 cajeros BCP para retiros y consultas gratis.",
  },
  {
    icon: Building2,
    title: "Agencias físicas",
    status: "ok" as Status,
    limit: "Todos los montos",
    hours: "Lunes a sábado · 9am - 6pm",
    desc: "+280 agencias Mibanco para operaciones presenciales.",
  },
]

const STATUS_STYLES: Record<Status, { dot: string; bg: string; text: string; label: string }> = {
  ok: { dot: "bg-success", bg: "bg-success/10", text: "text-success", label: "Operativo" },
  maintenance: {
    dot: "bg-accent-yellow",
    bg: "bg-accent",
    text: "text-accent-yellow-foreground",
    label: "Mantenimiento",
  },
}

export function ChannelCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {CHANNELS.map((c) => {
        const Icon = c.icon
        const s = STATUS_STYLES[c.status]
        return (
          <div
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                <Icon className="h-6 w-6" />
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${s.bg} ${s.text}`}
              >
                <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                {s.label}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-brand">{c.title}</h3>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
              <p className="flex items-center gap-2 font-semibold text-brand">
                <Wallet className="h-4 w-4 text-brand-orange" /> {c.limit}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-brand-orange" /> {c.hours}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
