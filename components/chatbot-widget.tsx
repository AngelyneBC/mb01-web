"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

type Msg = { from: "user" | "ai"; text: string }

const SCRIPT: Msg[] = [
  { from: "user", text: "Hola, ¿cuánto me cuesta retirar dinero en un agente hoy?" },
  {
    from: "ai",
    text: "¡Hola! Si usas nuestros agentes autorizados Kasnet o BCP, tus primeros 2 retiros del mes son S/ 0.00 en comisiones. ¡Ahorra tiempo y evita colas!",
  },
]

const QUICK = [
  "¿Cómo presento un reclamo?",
  "Límites de transferencias",
  "¿Dónde retiro sin costo?",
]

export function ChatbotWidget() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState<Msg[]>(SCRIPT)
  const [input, setInput] = useState("")

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    setMessages((m) => [
      ...m,
      { from: "user", text: clean },
      {
        from: "ai",
        text: "¡Gracias por escribir! Un asistente Mibanco Conecta revisará tu consulta. Mientras tanto, recuerda que puedes operar sin costo en la App Mibanco y agentes Kasnet.",
      },
    ])
    setInput("")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="flex h-[28rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-brand px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent-yellow text-brand">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="flex items-center gap-1.5 font-heading text-sm font-bold leading-tight">
                  Mibanco Conecta
                  <span className="h-2 w-2 rounded-full bg-success ring-2 ring-white/30" />
                </p>
                <p className="text-[11px] text-white/80">Asistente IA · En línea</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="rounded-md p-1 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-muted p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-sm bg-brand text-white"
                      : "rounded-bl-sm border border-border bg-card text-card-foreground"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border border-brand/30 bg-card px-3 py-1 text-xs font-medium text-brand hover:bg-accent"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 font-heading text-sm font-bold text-white shadow-xl transition-transform hover:scale-105"
      >
        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-yellow opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent-yellow" />
        </span>
        <MessageCircle className="h-5 w-5" />
        {open ? "Cerrar" : "¿Te ayudamos?"}
      </button>
    </div>
  )
}
