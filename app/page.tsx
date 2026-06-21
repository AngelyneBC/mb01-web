import Link from "next/link"
import { ArrowRight, Headphones, Network } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { ZigzagDivider } from "@/components/zigzag-divider"

const CARDS = [
  {
    href: "/atencion-al-usuario",
    icon: Headphones,
    title: "Atención al usuario",
    desc: "Reclamos en 3 pasos, transparencia, atención preferente y relación de notarías.",
  },
  {
    href: "/tus-canales",
    icon: Network,
    title: "Tus canales",
    desc: "Opera desde donde estés: App Mibanco, agentes, cajeros y agencias. Calcula comisiones al instante.",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
            Experiencia rediseñada
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold text-brand text-balance sm:text-5xl">
            Atención clara y canales simples, pensados para emprendedores
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Menos texto, menos PDFs y menos colas. Resuelve lo que necesitas en
            minutos desde tu negocio o tu celular.
          </p>
          <ZigzagDivider className="mt-8" />
        </section>

        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          {CARDS.map((c) => {
            const Icon = c.icon
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold text-brand">{c.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-brand-orange">
                  Ir a la sección
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </section>
      </main>
      <SiteFooter />
      <ChatbotWidget />
    </div>
  )
}
