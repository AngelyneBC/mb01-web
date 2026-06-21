import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { StatusBanner } from "@/components/canales/status-banner"
import { ChannelCards } from "@/components/canales/channel-cards"
import { FeeCalculator } from "@/components/canales/fee-calculator"
import { OperationsMatrix } from "@/components/canales/operations-matrix"
import { LimitsTable } from "@/components/canales/limits-table"
import { NetworkDetails } from "@/components/canales/network-details"

export default function TusCanalesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <StatusBanner />
      <main className="flex-1">
        <PageHero
          title="Tus canales"
          subtitle="Realiza tus operaciones de la manera más rápida y sencilla en cualquiera de los canales que ponemos a tu disposición."
          crumbs={[{ label: "Inicio", href: "/" }, { label: "Tus canales" }]}
        />

        <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:px-6 lg:px-8">
          <ChannelCards />
          <FeeCalculator />
          <OperationsMatrix />
          <LimitsTable />
          <NetworkDetails />
        </div>
      </main>
      <SiteFooter />
      <ChatbotWidget />
    </div>
  )
}
