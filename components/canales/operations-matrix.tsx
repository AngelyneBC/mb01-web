import { Check } from "lucide-react"

const CHANNELS = [
  "App Mibanco",
  "Agentes BCP",
  "Agentes KasNet",
  "Cajeros BCP",
  "Banca Móvil BCP",
  "Vía BCP",
  "Agentes Multired",
  "Agencias BN",
  "Agencias BCP",
  "Banca por Teléfono",
  "Yape",
]

// indices into CHANNELS that support each operation
const OPS: { label: string; on: number[] }[] = [
  { label: "Pago de préstamos", on: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10] },
  { label: "Pagos anticipados y cancelación total", on: [0, 2, 4, 7, 8, 10] },
  { label: "Retiros", on: [1, 2, 3] },
  { label: "Depósitos", on: [1, 2] },
  { label: "Pago de servicios", on: [0] },
  { label: "Consulta de saldos y movimientos", on: [0, 4, 9] },
  { label: "Transferencia mismo banco", on: [0] },
  { label: "Transferencias interbancarias", on: [0] },
  { label: "Disposición de Línea de Crédito", on: [0, 9, 10] },
  { label: "Apertura Depósito a Plazo (DPF)", on: [0] },
  { label: "Recarga de celular", on: [0] },
]

export function OperationsMatrix() {
  return (
    <div>
      <h2 className="mb-1 font-heading text-2xl font-extrabold text-brand-orange sm:text-3xl">
        ¿Qué puedes hacer en cada canal?
      </h2>
      <p className="mb-5 text-sm text-muted-foreground">
        Realiza tus operaciones de la manera más rápida y sencilla en cualquiera de los canales.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[52rem] border-collapse text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-brand px-4 py-3 text-left font-heading font-bold text-white">
                Operación
              </th>
              {CHANNELS.map((c) => (
                <th
                  key={c}
                  className="bg-brand px-2 py-3 text-center align-bottom text-xs font-semibold leading-tight text-white"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {OPS.map((op, i) => (
              <tr key={op.label} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
                <td className="sticky left-0 z-10 px-4 py-3 font-semibold text-brand [background:inherit]">
                  {op.label}
                </td>
                {CHANNELS.map((_, ci) => (
                  <td key={ci} className="px-2 py-3 text-center">
                    {op.on.includes(ci) ? (
                      <Check className="mx-auto h-4 w-4 text-success" aria-label="Disponible" />
                    ) : (
                      <span className="text-muted-foreground/30" aria-hidden="true">
                        –
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
        <p>*Aplica solo para clientes con línea de crédito aprobada.</p>
        <p>**Solo en algunas agencias compartidas con el Banco de la Nación.</p>
        <p>***En agentes Kasnet solo necesitas tu DNI; en la red BCP debes registrar tu número de préstamo.</p>
      </div>
    </div>
  )
}
