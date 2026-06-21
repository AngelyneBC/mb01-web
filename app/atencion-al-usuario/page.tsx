import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { AtencionSection } from "@/components/atencion/atencion-section"

export default function AtencionAlUsuarioPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Hola, estamos aquí para ayudarte"
          subtitle="¿Qué necesitas hoy? Resuelve tu reclamo, conoce tus derechos y encuentra la información que buscas, sin vueltas."
          crumbs={[{ label: "Inicio", href: "/" }, { label: "Atención al usuario" }]}
        />
        <AtencionSection />
      </main>
      <SiteFooter />
      <ChatbotWidget />
    </div>
  )
}
