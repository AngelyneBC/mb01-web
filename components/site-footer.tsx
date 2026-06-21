import Link from "next/link"
import { Phone, MapPin, ShieldCheck } from "lucide-react"
import { MibancoLogo } from "@/components/mibanco-logo"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="rounded-xl bg-white px-3 py-2">
            <MibancoLogo />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Impulsamos el progreso de los emprendedores del Perú con atención
            clara, cercana y sin complicaciones.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent-yellow">
            Atención al usuario
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li><Link href="/atencion-al-usuario" className="hover:text-accent-yellow">Reclamos y requerimientos</Link></li>
            <li><Link href="/atencion-al-usuario" className="hover:text-accent-yellow">Transparencia</Link></li>
            <li><Link href="/atencion-al-usuario" className="hover:text-accent-yellow">Relación de notarías</Link></li>
            <li><Link href="/tus-canales" className="hover:text-accent-yellow">Tus canales</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent-yellow">
            Contáctanos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent-yellow" /> Banca Telefónica (01) 319-9999
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-yellow" /> Más de 280 agencias a nivel nacional
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent-yellow">
            Regulación
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/85">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-yellow" />
            Supervisado por la SBS. Puedes presentar reclamos ante INDECOPI, SBS
            y la Defensoría del Cliente Financiero.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Mibanco, Banco de la Microempresa S.A. Rediseño de experiencia · Demostración.
        </div>
      </div>
    </footer>
  )
}
