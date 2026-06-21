import Link from "next/link"
import {
  Accessibility,
  ArrowUpRight,
  Banknote,
  BookOpenCheck,
  Building2,
  ExternalLink,
  FileText,
  HeartHandshake,
  Landmark,
  Lock,
  ScrollText,
  ShieldCheck,
} from "lucide-react"

/* ---------------- Transparencia ---------------- */

const TRANSPARENCIA = [
  { label: "Portal del SBS Usuario", icon: ShieldCheck },
  { label: "Defensoría del cliente financiero", icon: HeartHandshake },
  { label: "BCR – Información sobre billetes y monedas", icon: Banknote },
  { label: "Políticas de privacidad y protección de datos", icon: Lock },
  { label: "Políticas de seguridad y salud en el trabajo", icon: ShieldCheck },
  { label: "Código de buenas prácticas", icon: BookOpenCheck },
]

export function TransparenciaPanel() {
  return (
    <section>
      <PanelHeading
        title="Transparencia"
        subtitle="En los siguientes enlaces conocerás aspectos importantes del Sistema Financiero Nacional."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TRANSPARENCIA.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href="#"
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand hover:bg-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 text-sm font-semibold text-brand">{item.label}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

/* ---------------- Atención Preferente ---------------- */

const PREFERENTE = [
  {
    title: "Ley de Atención Preferente",
    desc: "Conoce a quiénes protege la ley y qué derechos tienes al ser atendido con prioridad en nuestras agencias.",
    icon: ScrollText,
  },
  {
    title: "Procedimiento de Atención Preferente",
    desc: "Revisa cómo solicitar atención preferente y los pasos que seguimos para brindarte un servicio prioritario.",
    icon: Accessibility,
  },
]

export function PreferentePanel() {
  return (
    <section>
      <PanelHeading
        title="Atención Preferente"
        subtitle="Gestantes, personas con discapacidad, adultos mayores y con niños en brazos reciben atención prioritaria."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {PREFERENTE.map((p) => {
          const Icon = p.icon
          return (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-brand">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-orange hover:underline"
              >
                Leer más información <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ---------------- Información de interés ---------------- */

const INFO = [
  {
    name: "Comunicados",
    desc: "Entérate sobre los últimos cambios y novedades sobre tasas, tarifas y otros temas.",
    icon: FileText,
  },
  {
    name: "Tarifario vigente",
    desc: "Consulta las comisiones y gastos asociados a nuestros productos y servicios.",
    icon: Banknote,
  },
  {
    name: "Cartillas de información",
    desc: "Conoce las condiciones de cada producto antes de contratarlo.",
    icon: BookOpenCheck,
  },
]

export function InformacionPanel() {
  return (
    <section>
      <PanelHeading
        title="Información de interés para el usuario"
        subtitle="Más información acerca de nosotros, nuestros productos y servicios, lista para descargar."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {INFO.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-brand-orange">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-base font-bold text-brand">{item.name}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-white hover:bg-brand/90"
              >
                <FileText className="h-4 w-4" /> Descargar PDF
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ---------------- Relación de notarías ---------------- */

const NOTARIAS: { name: string; web: string | null }[] = [
  { name: "Amazonas", web: null },
  { name: "Áncash", web: null },
  { name: "Apurímac", web: null },
  { name: "Arequipa", web: null },
  { name: "Ayacucho", web: null },
  { name: "Cajamarca", web: null },
  { name: "Callao", web: "http://www.notarioscallao.org.pe" },
  { name: "Cusco y Madre de Dios", web: null },
  { name: "Huancavelica", web: null },
  { name: "Huánuco y Pasco", web: null },
  { name: "Ica", web: null },
  { name: "Junín", web: "http://www.notariosjunin.org.pe/registros/" },
  { name: "La Libertad", web: "http://www.colegionotarioslalibertad.pe/notarios-herramientas-tecnologicas/" },
  { name: "Lambayeque", web: "http://www.notarioslambayeque.org.pe/directorio/notarios-con-herramientas-tecnologicas/" },
  { name: "Lima", web: "http://www.notarios.org.pe/#/informate-y-compara" },
  { name: "Loreto", web: null },
  { name: "Moquegua", web: null },
  { name: "Piura y Tumbes", web: null },
  { name: "Puno", web: null },
  { name: "San Martín", web: "http://cnsm.org.pe/registro_notarial" },
  { name: "Tacna", web: "http://colegionotariostacna.org.pe/index.php/portal/directorio/notarios_herramientas_tecnologicas" },
  { name: "Ucayali", web: null },
]

export function NotariasPanel() {
  return (
    <section>
      <PanelHeading
        title="Relación de notarías"
        subtitle="Ley 30908: tienes derecho a elegir libremente al notario para formalizar tu contrato de garantía real."
      />

      <div className="mb-6 grid gap-3 rounded-2xl border border-border bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
        <p className="flex gap-2">
          <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          Solo podrás utilizar los servicios de notarios incluidos en los listados de cada Colegio
          de Notarios. Las notarías con convenio agilizan el proceso de formalización.
        </p>
        <p className="text-xs">
          *Para bienes inmuebles, la elección del notario debe hacerse dentro del ámbito territorial
          provincial.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-orange text-white">
              <th className="px-4 py-3 text-left font-heading font-bold">Colegio de Notarios</th>
              <th className="px-4 py-3 text-left font-heading font-bold">Relación de notarios</th>
            </tr>
          </thead>
          <tbody>
            {NOTARIAS.map((n, i) => (
              <tr key={n.name} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
                <td className="flex items-center gap-2 px-4 py-3 font-medium text-foreground">
                  <Building2 className="h-4 w-4 text-brand/70" />
                  Colegio de Notarios de {n.name}
                </td>
                <td className="px-4 py-3">
                  {n.web ? (
                    <a
                      href={n.web}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-brand hover:text-brand-orange hover:underline"
                    >
                      Ver directorio <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">Sin página web</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        (*) La relación de notarios ha sido proporcionada por los respectivos Colegios de Notarios.
      </p>
    </section>
  )
}

/* ---------------- shared ---------------- */

export function PanelHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-heading text-2xl font-extrabold text-brand-orange text-balance sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  )
}
