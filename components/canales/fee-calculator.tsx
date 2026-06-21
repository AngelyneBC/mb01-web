"use client"

import { useState } from "react"
import { ArrowDownToLine, MapPin, Send, Sparkles } from "lucide-react"

type OpId = "retirar" | "transferir" | "pagar"
type ChannelId = "app" | "kasnet" | "cajero" | "agencia"

const OPS: { id: OpId; label: string }[] = [
  { id: "retirar", label: "Retirar efectivo" },
  { id: "transferir", label: "Transferir a otro banco" },
  { id: "pagar", label: "Pagar mi cuota" },
]

const CHANNELS: { id: ChannelId; label: string }[] = [
  { id: "app", label: "App Mibanco" },
  { id: "kasnet", label: "Agente Kasnet / BCP" },
  { id: "cajero", label: "Cajero BCP" },
  { id: "agencia", label: "Agencia Mibanco" },
]

// fee in soles, or null if operation not available on that channel
const FEES: Record<OpId, Partial<Record<ChannelId, number>>> = {
  retirar: { kasnet: 2.5, cajero: 0, agencia: 0 },
  transferir: { app: 0, agencia: 0 },
  pagar: { app: 0, kasnet: 2.5, agencia: 0 },
}

const NOTES: Record<OpId, string> = {
  retirar: "Los retiros en cajeros BCP y agencias no tienen comisión. En agentes se aplica S/ 2.50.",
  transferir: "Las transferencias por la App e internet son siempre sin costo, hasta S/ 15,000 al día.",
  pagar: "Paga sin costo desde la App, internet o agencia. En agentes se cobra S/ 2.50 por cuota.",
}

export function FeeCalculator() {
  const [op, setOp] = useState<OpId>("retirar")
  const [channel, setChannel] = useState<ChannelId>("kasnet")

  const fee = FEES[op][channel]
  const available = fee !== undefined

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="grid md:grid-cols-2">
        {/* Controls */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-brand">
            <Sparkles className="h-5 w-5 text-accent-yellow" />
            <span className="font-heading text-sm font-bold uppercase tracking-wide">
              Calculadora de comisiones
            </span>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-brand">Yo quiero...</p>
            <div className="flex flex-wrap gap-2">
              {OPS.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setOp(o.id)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    op === o.id
                      ? "bg-brand text-white"
                      : "border border-border bg-muted text-foreground hover:border-brand"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-brand">En el canal...</p>
            <div className="flex flex-wrap gap-2">
              {CHANNELS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setChannel(c.id)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    channel === c.id
                      ? "bg-accent-yellow text-accent-yellow-foreground"
                      : "border border-border bg-muted text-foreground hover:border-brand"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-center bg-brand p-6 text-white sm:p-8">
          {available ? (
            <>
              <p className="text-sm font-medium text-white/80">
                {OPS.find((o) => o.id === op)?.label} en{" "}
                {CHANNELS.find((c) => c.id === channel)?.label}
              </p>
              <p className="mt-1 font-heading text-5xl font-extrabold">
                {fee === 0 ? "S/ 0.00" : `S/ ${fee?.toFixed(2)}`}
              </p>
              <p className="mt-1 text-sm font-bold text-accent-yellow">
                {fee === 0 ? "Sin comisión" : "Comisión por operación"}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/75">{NOTES[op]}</p>
              <button
                type="button"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent-yellow px-5 py-2.5 text-sm font-bold text-accent-yellow-foreground transition-transform hover:scale-[1.02]"
              >
                {op === "retirar" ? (
                  <ArrowDownToLine className="h-4 w-4" />
                ) : op === "transferir" ? (
                  <Send className="h-4 w-4" />
                ) : (
                  <MapPin className="h-4 w-4" />
                )}
                Ver mapa de agentes cercanos
              </button>
            </>
          ) : (
            <>
              <p className="font-heading text-2xl font-bold">No disponible aquí</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Esta operación no está disponible en este canal. Prueba con la App Mibanco o una
                agencia.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
