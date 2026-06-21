import { CreditCard, Mail, Phone } from "lucide-react"
import { PanelHeading } from "@/components/atencion/panels"
import { ReclamoWizard } from "@/components/atencion/reclamo-wizard"
import { SlaDashboard } from "@/components/atencion/sla-dashboard"
import { ReportesReclamos } from "@/components/atencion/reportes-reclamos"
import { FaqAccordion, type FaqItem } from "@/components/atencion/faq-accordion"

const FAQS: FaqItem[] = [
  {
    q: "¿Cómo puedo presentar un reclamo o requerimiento en Mibanco?",
    a: (
      <ul className="ml-1 space-y-2">
        <li>• En cualquiera de nuestras agencias, con la Plataforma de Atención al Usuario o el Jefe de Banca de Servicio.</li>
        <li>• Mediante una carta simple o notarial en cualquier agencia.</li>
        <li>• A través de la Banca Telefónica al 319-9999, opción 6.</li>
        <li>• Llenando el formulario online de esta página.</li>
        <li>• Al presentarlo, recibirás un código y una Constancia de tu reclamo.</li>
      </ul>
    ),
  },
  {
    q: "¿Qué información debo brindar para ingresar un reclamo?",
    a: (
      <ul className="ml-1 space-y-2">
        <li>• DNI original.</li>
        <li>• Teléfono fijo y celular.</li>
        <li>• Correo electrónico y domicilio para recibir la respuesta.</li>
        <li>• Detalle del reclamo: producto, motivo, fechas, nro. de operación y monto.</li>
        <li>• Documentos que sustenten el reclamo.</li>
        <li>• Si actúas como representante: carta poder con firmas legalizadas.</li>
      </ul>
    ),
  },
  {
    q: "¿En cuánto tiempo Mibanco responderá mi reclamo?",
    a: (
      <ul className="ml-1 space-y-2">
        <li>• Como máximo en 15 días hábiles desde el día siguiente de presentado.</li>
        <li>• Para microseguros, el plazo de atención es de 15 días calendario.</li>
        <li>• Si necesitamos más información, te daremos un plazo mínimo de 2 días hábiles.</li>
        <li>• Consulta el estado en agencia o en la Banca Telefónica 319-9999, opción 6.</li>
      </ul>
    ),
  },
  {
    q: "¿Qué hago si no estoy de acuerdo con la respuesta?",
    a: (
      <ul className="ml-1 space-y-2">
        <li>• Puedes pedir una reconsideración en agencia, indicando el código original.</li>
        <li>• También puedes acudir a INDECOPI, la SBS y la Defensoría del Cliente Financiero.</li>
      </ul>
    ),
  },
]

export function ReclamosPanel() {
  return (
    <section className="space-y-10">
      <div>
        <PanelHeading
          title="Reclamos y requerimientos"
          subtitle="Sin PDFs interminables ni colas. Registra tu reclamo en 3 pasos y haz seguimiento en tiempo real."
        />
        <ReclamoWizard />
      </div>

      <SlaDashboard />

      <div className="grid gap-3 sm:grid-cols-3">
        <ContactCard icon={Phone} title="Banca Telefónica" detail="319-9999 · opción 6" />
        <ContactCard icon={Mail} title="Correo de sustentos" detail="reclamos@mibanco.com.pe" />
        <ContactCard icon={CreditCard} title="En agencia" detail="+280 agencias a nivel nacional" />
      </div>

      <FaqAccordion items={FAQS} />

      <ReportesReclamos />
    </section>
  )
}

function ContactCard({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof Phone
  title: string
  detail: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-heading text-sm font-bold text-brand">{title}</p>
        <p className="text-sm text-muted-foreground">{detail}</p>
      </div>
    </div>
  )
}
