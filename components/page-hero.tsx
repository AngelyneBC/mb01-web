import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ZigzagDivider } from "@/components/zigzag-divider"

type Crumb = { label: string; href?: string }

export function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string
  subtitle?: string
  crumbs: Crumb[]
}) {
  return (
    <div>
      <div className="bg-accent-yellow">
        <nav
          aria-label="Ruta de navegación"
          className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wide text-accent-yellow-foreground sm:px-6 lg:px-8"
        >
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-brand">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
            </span>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-extrabold text-brand text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            {subtitle}
          </p>
        )}
        <ZigzagDivider className="mt-6" />
      </div>
    </div>
  )
}
