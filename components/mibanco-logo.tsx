export function MibancoLogo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <span className="grid grid-cols-2 gap-0.5" aria-hidden="true">
        <span className="h-2 w-2 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-accent-yellow" />
        <span className="h-2 w-2 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-brand" />
        <span className="h-2 w-2 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-brand-orange" />
        <span className="h-2 w-2 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-accent-yellow" />
      </span>
      <span className="font-heading text-2xl font-extrabold leading-none text-brand">
        mibanco
      </span>
    </span>
  )
}
