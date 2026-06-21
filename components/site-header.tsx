"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Lock, Menu, PiggyBank, X } from "lucide-react"
import { MibancoLogo } from "@/components/mibanco-logo"

const NAV = [
  { label: "Conócenos", href: "#" },
  { label: "Para tu negocio", href: "#" },
  { label: "Para ti", href: "#" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Inicio Mibanco">
          <MibancoLogo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 font-heading text-sm font-semibold text-brand transition-colors hover:text-brand-orange"
            >
              <ChevronDown className="h-4 w-4 -rotate-90 text-accent-yellow" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden items-center gap-2 rounded-xl bg-brand-orange px-4 py-2.5 text-left text-xs font-bold leading-tight text-white shadow-sm transition-transform hover:scale-[1.02] sm:flex"
          >
            <Lock className="h-5 w-5" />
            <span>
              Mibanco
              <br />
              por Internet
            </span>
          </Link>
          <Link
            href="#"
            className="relative hidden items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-left text-xs font-bold leading-tight text-white shadow-sm transition-transform hover:scale-[1.02] sm:flex"
          >
            <span className="absolute -top-2 right-2 rounded-full bg-accent-yellow px-1.5 py-0.5 text-[9px] font-extrabold text-accent-yellow-foreground">
              NUEVO
            </span>
            <PiggyBank className="h-5 w-5" />
            <span>
              Ahorra con
              <br />
              Mibanco
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-brand lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Móvil">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2.5 font-heading text-sm font-semibold text-brand hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-orange px-3 py-2.5 text-xs font-bold text-white"
              >
                <Lock className="h-4 w-4" /> Mibanco por Internet
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
