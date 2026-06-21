"use client"

import { useState } from "react"
import { Check, ChevronLeft, ChevronRight, FileText, PartyPopper, User } from "lucide-react"

const STEPS = [
  { id: 1, label: "Datos personales", icon: User },
  { id: 2, label: "Detalles de tu caso", icon: FileText },
  { id: 3, label: "Contacto y confirmación", icon: Check },
]

const PRODUCTS = ["Préstamo", "Cuenta de Ahorro", "CTS", "Depósito a Plazo", "Microseguro", "Otro"]

export function ReclamoWizard() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
          <PartyPopper className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-brand">¡Reclamo registrado!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Tu código es <span className="font-bold text-brand">RC-2026-08431</span>. Te enviaremos la
          constancia a tu correo. Recuerda: respondemos en un máximo de 15 días hábiles.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false)
            setStep(1)
          }}
          className="mt-5 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand/90"
        >
          Registrar otro
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
      {/* Steps tracker */}
      <ol className="flex items-center">
        {STEPS.map((s, i) => {
          const active = step === s.id
          const complete = step > s.id
          const Icon = s.icon
          return (
            <li key={s.id} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2 text-center">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                    complete
                      ? "border-success bg-success text-white"
                      : active
                        ? "border-brand bg-brand text-white"
                        : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  {complete ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </span>
                <span
                  className={`hidden max-w-[7rem] text-xs font-semibold leading-tight sm:block ${
                    active || complete ? "text-brand" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="mx-2 h-0.5 flex-1 rounded bg-border">
                  <div
                    className="h-full rounded bg-success transition-all"
                    style={{ width: step > s.id ? "100%" : "0%" }}
                  />
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <div className="mt-7">
        {step === 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombres y apellidos" placeholder="Como figura en tu DNI" />
            <Field label="DNI" placeholder="8 dígitos" />
            <Field label="Correo electrónico" placeholder="tucorreo@ejemplo.com" type="email" />
            <Field label="Celular" placeholder="9XX XXX XXX" />
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand">Producto reclamado</label>
              <div className="flex flex-wrap gap-2">
                {PRODUCTS.map((p) => (
                  <span
                    key={p}
                    className="cursor-default rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground hover:border-brand hover:bg-accent"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <Field label="Nro. de operación (opcional)" placeholder="Si lo tienes a la mano" />
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand">Cuéntanos qué pasó</label>
              <textarea
                rows={4}
                placeholder="Describe tu reclamo: motivo, fechas y monto reclamado."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Elige cómo quieres recibir tu respuesta. Te entregaremos un código y una constancia de
              tu reclamo.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-muted p-4 text-sm font-medium has-[:checked]:border-brand has-[:checked]:bg-accent">
                <input type="radio" name="canal" defaultChecked className="accent-[#0d522c]" />
                Por correo electrónico
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-muted p-4 text-sm font-medium has-[:checked]:border-brand has-[:checked]:bg-accent">
                <input type="radio" name="canal" className="accent-[#0d522c]" />
                Recoger en agencia
              </label>
            </div>
            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" defaultChecked className="mt-1 accent-[#0d522c]" />
              Autorizo el tratamiento de mis datos para gestionar este reclamo.
            </label>
          </div>
        )}
      </div>

      <div className="mt-7 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-bold text-brand transition-opacity hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Atrás
        </button>
        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            className="flex items-center gap-1 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand/90"
          >
            Continuar <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setDone(true)}
            className="flex items-center gap-1 rounded-full bg-accent-yellow px-6 py-2.5 text-sm font-bold text-accent-yellow-foreground hover:brightness-95"
          >
            Enviar reclamo <Check className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-brand">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  )
}
