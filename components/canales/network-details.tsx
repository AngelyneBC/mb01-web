import { CheckCircle2 } from "lucide-react"
import { FaqAccordion, type FaqItem } from "@/components/atencion/faq-accordion"

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

const REDES: FaqItem[] = [
  {
    q: "Red Mibanco — App y Mibanco por Internet (sin costo)",
    a: (
      <div className="space-y-4">
        <p>Realiza tus operaciones desde cualquier lugar, sin costo:</p>
        <List
          items={[
            "Pago de cuota de préstamos propios vigentes.",
            "Transferencias entre cuentas propias MB: sin límite diario.",
            "Transferencias a terceros MB: hasta S/ 15,000 y US$ 5,000.",
            "Transferencias a otros bancos inmediatas: hasta S/ 15,000 (6am–12pm).",
            "Pago de servicios y apertura de Depósito a Plazo.",
            "Consulta de saldos, movimientos y cronograma de préstamos.",
          ]}
        />
        <p className="text-xs text-muted-foreground">
          Agencias Mibanco: +280 a nivel nacional. Banca telefónica (01) 319-9999.
        </p>
      </div>
    ),
  },
  {
    q: "Red BCP — Agentes, cajeros, app y ventanillas",
    a: (
      <div className="space-y-4">
        <p>+10,400 agentes y +2,410 cajeros BCP a nivel nacional.</p>
        <List
          items={[
            "Agentes BCP: pagos hasta S/ 1,000, depósitos y retiros hasta S/ 999 (máx. 3 al día).",
            "Pagos y retiros tienen comisión de S/ 2.50; los depósitos son gratis.",
            "App BCP y Vía BCP (internet): pago de cuota total SIN costo.",
            "Cajeros BCP: retiros de S/ 20 hasta S/ 3,000 al día, gratis.",
            "Ventanillas BCP: todos los montos; comisión S/ 6.00 por operación.",
          ]}
        />
        <p className="text-xs text-muted-foreground">
          Los retiros están afectos al ITF (0.005% del monto retirado).
        </p>
      </div>
    ),
  },
  {
    q: "Red KasNet — Agentes con tu tarjeta de débito",
    a: (
      <div className="space-y-4">
        <p>+11,760 agentes KasNet a nivel nacional para depósitos, pagos y retiros.</p>
        <List
          items={[
            "Depósitos hasta S/ 1,000 (máx. 3 al día), sin costo.",
            "Retiros hasta S/ 500 (máx. 2 al día); comisión S/ 2.50 o US$ 0.75.",
            "Pagos de cuota hasta S/ 1,000 (máx. 3 al día); comisión S/ 2.50.",
            "Solo necesitas tu DNI para realizar pagos.",
          ]}
        />
      </div>
    ),
  },
  {
    q: "Red Banco de la Nación — Ventanillas y Agentes Multired (sin costo)",
    a: (
      <div className="space-y-4">
        <List
          items={[
            "Ventanillas: indica transacción 3711, el nombre Mibanco y tu documento o nro. de préstamo.",
            "Agentes Multired: pagos de cuota hasta S/ 800 indicando el código de cliente.",
            "Todas las operaciones por esta red son SIN costo.",
          ]}
        />
        <p className="text-xs text-muted-foreground">
          Disponible solo en algunas agencias compartidas con el Banco de la Nación.
        </p>
      </div>
    ),
  },
]

export function NetworkDetails() {
  return (
    <div>
      <h2 className="mb-5 font-heading text-2xl font-extrabold text-brand-orange sm:text-3xl">
        Conoce cada red en detalle
      </h2>
      <FaqAccordion items={REDES} />
    </div>
  )
}
